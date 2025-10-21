import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { pdfLoader } from '@/app/lib/langchain/loader';
import { PdfSpiltter } from '@/app/lib/langchain/splitter';
import { embedder } from '@/app/lib/langchain/embedder';

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY });

const SYSTEM_PROMPT = `You are a highly specialized AI assistant for Lakshya Paliwal's portfolio. Your ONLY function is to answer questions about his professional background, projects, and skills, based exclusively on the provided context.

You MUST follow these rules strictly:
1.  ONLY answer questions about Lakshya Paliwal.
2.  If a question is not about Lakshya Paliwal or his work, you MUST refuse to answer. Say "I can only answer questions about Lakshya Paliwal."
3.  If the provided context does not contain the answer to a question about Lakshya Paliwal, you MUST say "I do not have enough information to answer that question."
4.  Do NOT hallucinate, guess, or provide any information from outside the context given to you.
5.  Keep answers concise and to the point.`;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const question: string = body.query;
        const chatHistory: [string, string][] = body.chat_history || [];

        if (!question) {
            return NextResponse.json({ error: 'Query parameter "query" is required in the request body' }, { status: 400 });
        }

        const doc = await pdfLoader("AboutLaksh.pdf");
        const spilitDoc = await PdfSpiltter(doc);
        const dbData = await embedder(spilitDoc);
        const relevantChunks = await dbData.similaritySearch(question, 3);
        const context = relevantChunks.map((chunk) => chunk.pageContent).join('\n\n');
        
        const messages: any[] = [
            {
                role: "system",
                content: SYSTEM_PROMPT,
            }
        ];

        chatHistory.forEach(([userMsg, aiMsg]) => {
            messages.push({ role: 'user', content: userMsg });
            messages.push({ role: 'assistant', content: aiMsg });
        });

        const userQueryWithContext = `Question: ${question}
        Relevant context: ${context}
        Answer:`;

        messages.push({
            role: 'user',
            content: userQueryWithContext,
        });

        const completion = await groq.chat.completions.create({
            temperature: 0,
            messages: messages,
            model: "meta-llama/llama-4-maverick-17b-128e-instruct",
        });

        const answer = completion.choices[0].message.content;

        return NextResponse.json({ answer });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An internal server error occurred' }, { status: 500 });
    }
}
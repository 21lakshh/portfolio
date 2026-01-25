import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { pdfLoader } from '@/lib/langchain/loader';
import { PdfSpiltter } from '@/lib/langchain/splitter';
import { embedder } from '@/lib/langchain/embedder';
import { existingdb } from '@/lib/langchain/existingdb';
import path from 'path';
import { QdrantClient } from '@qdrant/js-client-rest';

const groq = new Groq({ apiKey: process.env.NEXT_GROQ_API_KEY });

const SYSTEM_PROMPT = `You are a highly specialized AI assistant for Lakshya Paliwal's portfolio. Your ONLY function is to answer questions about his professional background, projects, and skills, based exclusively on the provided context.

You MUST follow these rules strictly:
1.  ONLY answer questions about Lakshya Paliwal.
2.  If a question is not about Lakshya Paliwal or his work, you MUST refuse to answer. Say "I can only answer questions about Lakshya Paliwal."
3.  If the provided context does not contain the answer to a question about Lakshya Paliwal, you MUST say "I do not have enough information to answer that question."
4.  Do NOT hallucinate, guess, or provide any information from outside the context given to you.
5.  Keep answers concise and to the point.`;

const requiredEnvVars = [
    'NEXT_GROQ_API_KEY',
    'NEXT_GOOGLE_API_KEY',
    'NEXT_QDRANT_URL',
    'NEXT_QDRANT_API_KEY',
    'NEXT_QDRANT_COLLECTION_NAME',
];

interface ChatRequestBody {
    query: string;
    chat_history?: [string, string][];
}

interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

export async function POST(request: NextRequest) {
    const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);
    if (missingEnvVars.length > 0) {
        const errorMessage = `Missing required environment variables: ${missingEnvVars.join(', ')}`;
        console.error(errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    try {
        const body: ChatRequestBody = await request.json();
        const question: string = body.query;
        const chatHistory: [string, string][] = body.chat_history || [];

        if (!question) {
            return NextResponse.json({ error: 'Query parameter "query" is required in the request body' }, { status: 400 });
        }

        let context = '';
        try {
            // Check if collection exists and has points
            const qdrantClient = new QdrantClient({
                url: process.env.NEXT_QDRANT_URL,
                apiKey: process.env.NEXT_QDRANT_API_KEY,
            });

            let dbData;
            const collectionName = process.env.NEXT_QDRANT_COLLECTION_NAME!;

            try {
                // Try to get collection info
                const collectionInfo = await qdrantClient.getCollection(collectionName);
                
                // Check if collection has points
                if (collectionInfo.points_count && collectionInfo.points_count > 0) {
                    // Use existing collection
                    dbData = await existingdb();
                } else {
                    // Collection exists but empty, populate it
                    const filePath = path.join(process.cwd(), 'public', 'AboutLaksh.pdf');
                    const doc = await pdfLoader(filePath);
                    const spilitDoc = await PdfSpiltter(doc);
                    dbData = await embedder(spilitDoc);
                }
            } catch (collectionError) {
                console.error('Collection check error:', collectionError);
                // Collection doesn't exist, create and populate it
                const filePath = path.join(process.cwd(), 'public', 'AboutLaksh.pdf');
                const doc = await pdfLoader(filePath);
                const spilitDoc = await PdfSpiltter(doc);
                dbData = await embedder(spilitDoc);
            }

            const relevantChunks = await dbData.similaritySearch(question, 3);
            context = relevantChunks.map((chunk) => chunk.pageContent).join('\n\n');
        } catch (e) {
            console.error('Error during document processing for RAG:', e);
            throw new Error('Failed to process documents for RAG.');
        }
        
        const messages: ChatMessage[] = [
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

        const answer = completion.choices[0]?.message?.content;

        if (!answer) {
            console.error('Groq API returned no answer');
            return NextResponse.json({ error: 'Failed to get a response from the AI model.' }, { status: 500 });
        }

        return NextResponse.json({ answer });

    } catch (error) {
        console.error('[CHAT_API_ERROR]', error);

        if (error instanceof Groq.APIError) {
            return NextResponse.json({ error: 'Error from AI service provider.' }, { status: 500 });
        }
        if (error instanceof SyntaxError) {
            return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
        }
        if (error instanceof Error) {
            return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
        }
        
        return NextResponse.json({ error: 'An unknown internal server error occurred' }, { status: 500 });
    }
}

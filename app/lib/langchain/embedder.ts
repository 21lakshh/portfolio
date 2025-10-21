import { QdrantVectorStore } from "@langchain/qdrant";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";

const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    model: "text-embedding-004", // 768 dimensions
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: "About Lakshya Paliwal",
});

export const embedder = async (chunks: any) => {
    const documents = chunks.map((e: any) => ({
        pageContent: e,
    }));

    const vectorStore = await QdrantVectorStore.fromDocuments(documents, embeddings, {
        url: process.env.NEXT_PUBLIC_QDRANT_URL,
        apiKey: process.env.NEXT_PUBLIC_QDRANT_API_KEY,
        collectionName: process.env.NEXT_PUBLIC_QDRANT_COLLECTION_NAME,
    });

    return vectorStore;
};
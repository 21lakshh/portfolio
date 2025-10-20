import { QdrantVectorStore } from "@langchain/qdrant";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";

const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "text-embedding-004", // 768 dimensions
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: "About Lakshya Paliwal",
});

export const embedder = async (chunks: any) => {
    const documents = chunks.map((e: any) => ({
        pageContent: e,
    }));

    const vectorStore = await QdrantVectorStore.fromDocuments(documents, embeddings, {
        url: process.env.QDRANT_URL,
        apiKey: process.env.QDRANT_API_KEY,
        collectionName: process.env.collectionName,
    });

    return vectorStore;
};
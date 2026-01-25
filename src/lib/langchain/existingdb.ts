import { QdrantVectorStore } from "@langchain/qdrant";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";

const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.NEXT_GOOGLE_API_KEY,
    model: "text-embedding-004", // 768 dimensions
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: "About Lakshya Paliwal",
});

export const existingdb = async () => {

    const vectorStore = await QdrantVectorStore.fromExistingCollection( embeddings, {
        url: process.env.NEXT_QDRANT_URL,
        apiKey: process.env.NEXT_QDRANT_API_KEY,
        collectionName: process.env.NEXT_QDRANT_COLLECTION_NAME,
    });

    return vectorStore;
};

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export const PdfSpiltter = async (text: string) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1200,
    chunkOverlap: 150,
  });

  return await splitter.splitText(text);
};

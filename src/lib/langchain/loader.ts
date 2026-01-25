import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import path from "path";

export const pdfLoader = async (pathOfPDF: string) => {
  const pdfPath = path.resolve(process.cwd(), pathOfPDF);
  const loader = new PDFLoader(pdfPath);
  const docs = await loader.load();

  // combine all pages
  return docs.map(d => d.pageContent).join("\n\n");
};
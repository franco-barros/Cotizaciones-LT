"use client";

import { generatePdf } from "@/lib/pdf";

export default function usePdfGenerator() {
  const downloadPdf = async (previewId: string, fileName: string) => {
    await generatePdf(previewId, fileName);
  };

  return {
    downloadPdf,
  };
}

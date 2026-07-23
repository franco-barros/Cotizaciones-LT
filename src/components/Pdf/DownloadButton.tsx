"use client";

import { generatePdf } from "@/lib/pdf";

interface DownloadPdfProps {
  previewId: string;
  fileName: string;
}

export default function DownloadPdf({
  previewId,
  fileName,
}: Readonly<DownloadPdfProps>) {
  const handleDownload = async () => {
    await generatePdf(previewId, fileName);
  };

  return <button onClick={handleDownload}>Descargar PDF</button>;
}

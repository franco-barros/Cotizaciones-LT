"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function generatePdf(_previewId: string, fileName: string) {
  const pages = document.querySelectorAll<HTMLElement>("[data-pdf-page]");

  if (pages.length === 0) {
    console.error("No se encontraron páginas para generar el PDF.");
    return;
  }

  try {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];

      // Aviso si el contenido real es más alto que la caja .page
      // (con overflow: hidden esto significaría contenido cortado)
      if (page.scrollHeight > page.clientHeight) {
        console.warn(
          `Página ${i + 1}: el contenido (${page.scrollHeight}px) excede el alto de la página (${page.clientHeight}px). Puede haber contenido cortado.`,
        );
      }

      const canvas = await html2canvas(page, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",

        width: page.clientWidth,
        height: page.clientHeight,

        windowWidth: document.documentElement.clientWidth,
        windowHeight: document.documentElement.clientHeight,

        scrollX: 0,
        scrollY: 0,
      });

      const imgData = canvas.toDataURL("image/png");

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        imgWidth,
        Math.min(imgHeight, pdfHeight),
        undefined,
        "FAST",
      );
    }

    pdf.save(fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`);
  } catch (error) {
    console.error("Error generando PDF:", error);
  }
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LT Estética Vehicular | Cotizaciones",
  description:
    "Sistema de cotizaciones para LT Estética Vehicular. Detailing, tratamientos cerámicos y reparación estética automotriz.",

  icons: {
    icon: "/images/LogoColorLt.png",
    shortcut: "/images/LogoColorLt.png",
    apple: "/images/LogoColorLt.png",
  },

  openGraph: {
    title: "LT Estética Vehicular",
    description:
      "Cotizaciones profesionales para servicios de estética vehicular.",
    siteName: "LT Estética Vehicular",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

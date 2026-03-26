// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Bonvechio Madeiras Tratadas",
  description:
    "Soluções em madeiras tratadas com qualidade, resistência e confiança para o seu projeto.",
    icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
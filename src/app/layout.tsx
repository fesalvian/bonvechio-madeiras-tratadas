import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bonvechio Madeiras Tratadas",
  description: "Soluções em madeiras tratadas com qualidade, resistência e confiança para o seu projeto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
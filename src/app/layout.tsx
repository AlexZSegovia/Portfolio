import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Segovia | Full-Stack Developer",
  description: "Portafolio de Alex Segovia, un desarrollador web Full-Stack especializado en JavaScript, TypeScript, React, Next.js y NestJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth"> {/* Agregamos scroll-smooth para la navegación */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Billie Heidelberg | Full Stack Developer & Technical Leader",
  description: "Full Stack Developer with expertise in React, TypeScript, and Node.js. 7+ years of experience building scalable web applications and leading development teams.",
  keywords: "full stack developer, React developer, TypeScript, Node.js, web development, software engineer, technical leader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

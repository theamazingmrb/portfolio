import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://billieheidelberg.com'),
  title: "Billie Heidelberg | Full Stack Developer & Technical Leader",
  description: "Full Stack Developer with expertise in React, TypeScript, and Node.js. 7+ years of experience building scalable web applications and leading development teams.",
  keywords: "Billie Heidelberg, full stack developer, React developer, TypeScript, Node.js, web development, software engineer, technical leader, Los Angeles developer, frontend developer, JavaScript developer, React Native, mobile app development",
  openGraph: {
    title: "Billie Heidelberg | Full Stack Developer & Technical Leader",
    description: "Full Stack Developer with expertise in React, TypeScript, and Node.js. 7+ years of experience building scalable web applications and leading development teams.",
    url: "https://billieheidelberg.com",
    siteName: "Billie Heidelberg Portfolio",
    images: [
      {
        url: "/me.png",
        width: 800,
        height: 800,
        alt: "Billie Heidelberg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billie Heidelberg | Full Stack Developer & Technical Leader",
    description: "Full Stack Developer with expertise in React, TypeScript, and Node.js. 7+ years of experience building scalable web applications and leading development teams.",
    images: ["/me.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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

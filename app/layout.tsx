import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./code-blocks.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://billieheidelberg.com'),
  title: "Billie Heidelberg Jr. | Full Stack Developer & Team Leader | 7+ Years Experience | Available for Hire",
  description: "Results-driven Full Stack Developer & Technical Leader with 7+ years experience. Led teams of 5-8 developers, delivered $50M+ in project value, achieved 92% job placement rate teaching 100+ students. Expert in React, TypeScript, Node.js, AWS. Available for new opportunities.",
  keywords: "Billie Heidelberg, full stack developer, React developer, TypeScript, Node.js, team leader, technical lead, web development, software engineer, educator, general assembly instructor, JavaScript expert, frontend developer, backend developer, AWS certified, scalable applications, startup CTO, fintech developer, trading applications, enterprise software, available for hire, Los Angeles developer, React Native, mobile app development",
  openGraph: {
    title: "Billie Heidelberg Jr. | Full Stack Developer & Team Leader | Available for Hire",
    description: "Results-driven Full Stack Developer with 7+ years experience leading development teams. Delivered $50M+ in project value. Expert in React, TypeScript, Node.js, AWS. Available for new opportunities.",
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
    title: "Billie Heidelberg Jr. | Full Stack Developer & Team Leader | Available for Hire",
    description: "Results-driven Full Stack Developer with 7+ years experience leading development teams. Delivered $50M+ in project value. Expert in React, TypeScript, Node.js, AWS. Available for new opportunities.",
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
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

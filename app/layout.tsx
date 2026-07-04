import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./code-blocks.css";
import SkipToMain from "@/components/SkipToMain";
import BackToTop from "@/components/BackToTop";
import { ToastProvider } from "@/components/ui/toast";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://billieheidelberg.com'),
  title: "Billie Heidelberg Jr. | Full Stack Developer & Team Leader | 8+ Years Experience",
  description: "Results-driven Full Stack Developer & Technical Leader with 8+ years experience. Led teams of 5-8 developers, delivered $50M+ in project value, achieved 92% job placement rate teaching 100+ students. Expert in React, TypeScript, Node.js, AWS.",
  keywords: "Billie Heidelberg, full stack developer, React developer, TypeScript, Node.js, team leader, technical lead, web development, software engineer, educator, general assembly instructor, JavaScript expert, frontend developer, backend developer, AWS certified, scalable applications, startup CTO, fintech developer, trading applications, enterprise software, Los Angeles developer, React Native, mobile app development",
  openGraph: {
    title: "Billie Heidelberg Jr. | Full Stack Developer & Team Leader",
    description: "Results-driven Full Stack Developer with 8+ years experience leading development teams. Delivered $50M+ in project value. Expert in React, TypeScript, Node.js, AWS.",
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
    title: "Billie Heidelberg Jr. | Full Stack Developer & Team Leader",
    description: "Results-driven Full Stack Developer with 8+ years experience leading development teams. Delivered $50M+ in project value. Expert in React, TypeScript, Node.js, AWS.",
    images: ["/me.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastProvider>
          <SkipToMain />
          <div id="main-content">
            {children}
          </div>
          <BackToTop />
        </ToastProvider>
        <Analytics />
        <ChatWidget />
      </body>
    </html>
  );
}

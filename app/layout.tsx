import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "./editorial.css";
import "./code-blocks.css";
import SkipToMain from "@/components/SkipToMain";
import BackToTop from "@/components/BackToTop";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://billieheidelberg.com'),
  title: "Billie Heidelberg Jr. | Full Stack Engineer | 8+ Years Experience",
  description: "Full stack engineer with 8+ years building production web and mobile platforms across React, Next.js, Node.js, and PostgreSQL. Founded a trading journal SaaS, ships iOS/Android contract work, and spent seven years at InvestCloud supporting 100+ developers on enterprise API integrations at scale.",
  keywords: "Billie Heidelberg, full stack engineer, software engineer, React, TypeScript, Node.js, Next.js, PostgreSQL, web development, mobile engineer, React Native, educator, General Assembly instructor, fintech, InvestCloud, Los Angeles",
  openGraph: {
    title: "Billie Heidelberg Jr. | Full Stack Engineer",
    description: "Full stack engineer with 8+ years building production web and mobile platforms across React, Next.js, Node.js, and PostgreSQL.",
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
    title: "Billie Heidelberg Jr. | Full Stack Engineer",
    description: "Full stack engineer with 8+ years building production web and mobile platforms across React, Next.js, Node.js, and PostgreSQL.",
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
      </body>
    </html>
  );
}

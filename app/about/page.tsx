import AboutPageClient from "@/components/sections/about/AboutPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billie Heidelberg Jr. — About",
  description:
    "Full Stack Engineer with 8+ years building production web and mobile platforms across React, Next.js, Node.js, and PostgreSQL. Former InvestCloud, General Assembly instructor.",
  openGraph: {
    title: "Billie Heidelberg Jr. — Full Stack Engineer",
    description:
      "Full Stack Engineer with 8+ years building production web and mobile platforms across React, Next.js, Node.js, and PostgreSQL.",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Billie Heidelberg Jr. — Full Stack Engineer",
    description:
      "Full Stack Engineer with 8+ years building production web and mobile platforms across React, Next.js, Node.js, and PostgreSQL.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

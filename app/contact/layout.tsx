import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Billie Heidelberg Jr.",
  description:
    "Full Stack Engineer with 8+ years experience. Currently open to full-time senior engineering roles.",
  openGraph: {
    title: "Contact | Billie Heidelberg Jr.",
    description:
      "Full Stack Engineer with 8+ years experience. Currently open to full-time senior engineering roles.",
  },
  twitter: {
    card: "summary",
    title: "Contact | Billie Heidelberg Jr.",
    description:
      "Full Stack Engineer with 8+ years experience. Currently open to full-time senior engineering roles.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

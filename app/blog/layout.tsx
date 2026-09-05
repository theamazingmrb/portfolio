import { Metadata } from 'next';
import BlogStructuredData from './blog-structured-data';
import '../code-blocks.css';

export const metadata: Metadata = {
  title: "Blog | Billie Heidelberg Jr. - Insights on Development, Trading & Technology",
  description: "Read my latest thoughts on full-stack development, trading technology, and software engineering. Insights from 8+ years in the industry.",
  keywords: "blog, development insights, trading technology, full stack development, software engineering, React, TypeScript, Node.js, technical writing",
  alternates: {
    canonical: "https://billieheidelberg.com/blog",
  },
  openGraph: {
    title: "Blog | Billie Heidelberg Jr. - Insights on Development & Technology",
    description: "Read my latest thoughts on full-stack development, trading technology, and software engineering.",
    url: "https://billieheidelberg.com/blog",
    siteName: "Billie Heidelberg Jr. Portfolio",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://billieheidelberg.com/me.png",
      width: 1200,
      height: 630,
      alt: "Billie Heidelberg Jr. Blog"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Billie Heidelberg Jr.",
    description: "Read my latest thoughts on full-stack development, trading technology, and software engineering.",
    creator: "@bheidelberg",
    images: ["https://billieheidelberg.com/me.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Add structured data for SEO */}
      <BlogStructuredData />
      {children}
    </>
  );
}

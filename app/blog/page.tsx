import Link from "next/link";
import { getSortedPostsData, PostData } from "../../lib/posts";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
};

export default async function Blog() {
  const allPostsData: PostData[] = getSortedPostsData();
  
  // Debug: Log the posts data
  console.log('All posts data:', allPostsData);
  if (allPostsData.length === 0) {
    console.warn('No blog posts found. Check the posts directory and file formats.');
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Blog</h1>
          <p className="text-lg md:text-xl">Thoughts, ideas, and experiences</p>
        </div>
        {/* You can add a background image here if desired */}
      </section>

      {/* Blog Posts Section */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Latest Posts
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ id, title, date, excerpt }) => (
              <BlogPostCard
                key={id}
                id={id}
                title={title}
                date={date}
                excerpt={excerpt}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action
      <AnimatedSection
        animationType="fadeInLeft"
        className="bg-gray-900 text-white py-12 md:py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to read more?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Subscribe to my newsletter for the latest updates.
          </p>
          <Link
            href="/subscribe"
            className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Subscribe Now
          </Link>
        </div>
      </AnimatedSection>
 */}
      <Footer />
    </main>
  );
}

function BlogPostCard({
  id,
  title,
  date,
  excerpt,
}: {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}) {
  return (
    <div className="group h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-50">
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <span className="text-sm text-blue-600 font-medium">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <Link href={`/blog/${id}`} className="block mb-3 group-hover:text-blue-600 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{excerpt}</p>
        <div className="mt-auto">
          <Link
            href={`/blog/${id}`}
            className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
          >
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

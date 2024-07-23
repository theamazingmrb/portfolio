import Link from 'next/link';
import { getSortedPostsData, PostData } from '../../lib/posts';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog',
};

export default async function Blog() {
  const allPostsData: PostData[] = getSortedPostsData();

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
      <AnimatedSection animationType="fadeInUp" className="py-12 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ id, title, date, excerpt }) => (
              <BlogPostCard key={id} id={id} title={title} date={date} excerpt={excerpt} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animationType="fadeInLeft" className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to read more?</h2>
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

      <Footer />
    </main>
  );
}

function BlogPostCard({ id, title, date, excerpt }: { id: string; title: string; date: string; excerpt: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <Link href={`/blog/${id}`}>
        <h3 className="text-xl font-semibold mb-2 text-blue-500 hover:text-blue-600">{title}</h3>
      </Link>
      <p className="text-gray-600 mb-4">{date}</p>
      <p className="text-gray-800 mb-4">{excerpt}</p>
      <Link href={`/blog/${id}`} className="text-blue-500 font-semibold hover:underline">
        Read More &rarr;
      </Link>
    </div>
  );
}
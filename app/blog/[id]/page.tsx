import { getPostData, getAllPostIds } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id);
  
  return {
    title: postData ? `${postData.title} | Billie Heidelberg` : 'Blog Post',
    description: postData?.excerpt || '',
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({ id: path.params.id }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  if (!postData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (!postData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(postData.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{postData.title}</h1>
            <div className="text-blue-200 text-lg">{formattedDate}</div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <AnimatedSection animationType="fadeIn" className="py-12 md:py-16 -mt-8 md:-mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <article className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
              prose-h1:text-3xl prose-h1:mb-6 
              prose-h2:text-2xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
              prose-h3:text-xl 
              prose-p:text-gray-800 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-lg
              prose-li:text-gray-800 prose-li:mb-2 prose-li:text-lg
              prose-a:text-blue-600 prose-a:no-underline prose-a:font-medium prose-a:hover:underline
              prose-strong:font-semibold prose-strong:text-gray-900
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:my-6 prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-md
              prose-pre:bg-gray-100 prose-pre:rounded-md prose-pre:p-4 prose-pre:overflow-x-auto
              prose-img:max-w-full prose-img:rounded-md prose-img:my-8
              prose-hr:my-8 prose-hr:border-gray-200
            ">
              <div 
                className="text-gray-800" 
                dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
              />
            </article>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to all posts
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}

import { getPostData, getAllPostIds } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id);
  
  return {
    title: postData ? `${postData.title} | Billie Heidelberg Jr. Blog` : 'Blog Post | Billie Heidelberg Jr.',
    description: postData?.excerpt || 'Read insights on full-stack development, trading technology, and team leadership.',
    keywords: 'development, trading technology, full stack, React, TypeScript, Node.js, team leadership, technical insights',
    openGraph: {
      title: postData ? `${postData.title} | Billie Heidelberg Jr.` : 'Blog Post',
      description: postData?.excerpt || 'Read insights on full-stack development and technology.',
      type: 'article',
      publishedTime: postData?.date,
      authors: ['Billie Heidelberg Jr.'],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData ? `${postData.title} | Billie Heidelberg Jr.` : 'Blog Post',
      description: postData?.excerpt || 'Read insights on full-stack development and technology.',
    },
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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
                Back to Blog
              </Link>
            </div>
            
            {/* Article Header */}
            <div className="text-center mb-8">
              <div className="mb-6">
                <span className="px-4 py-2 bg-blue-600/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30">
                  📝 Technical Article
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                {postData.title}
              </h1>
              
              {/* Article Meta */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img src="/me.png" alt="Billie Heidelberg Jr." className="w-10 h-10 rounded-full object-cover" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">Billie Heidelberg Jr.</div>
                    <div className="text-sm text-gray-400">Full Stack Developer</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <time dateTime={postData.date}>{formattedDate}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>{calculateReadingTime(postData.contentHtml)} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <AnimatedSection animationType="fadeIn" className="py-12 md:py-16 -mt-12 md:-mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Progress Bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              
              <div className="p-8 md:p-12">
                <article className="prose prose-xl max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6
                  prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-0
                  prose-h2:text-3xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3 prose-h2:mb-8
                  prose-h3:text-2xl prose-h3:mb-4
                  prose-h4:text-xl prose-h4:mb-3
                  prose-p:text-gray-800 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-lg
                  prose-li:text-gray-800 prose-li:mb-3 prose-li:text-lg prose-li:leading-relaxed
                  prose-ul:mb-8 prose-ol:mb-8
                  prose-a:text-blue-600 prose-a:no-underline prose-a:font-medium prose-a:hover:underline prose-a:hover:text-blue-800
                  prose-strong:font-semibold prose-strong:text-gray-900
                  prose-em:text-gray-700 prose-em:italic
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-8 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-lg prose-blockquote:text-blue-900 prose-blockquote:font-medium
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:border prose-pre:border-gray-300
                  prose-code:bg-gray-100 prose-code:text-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                  prose-img:max-w-full prose-img:rounded-xl prose-img:my-10 prose-img:shadow-lg
                  prose-hr:my-12 prose-hr:border-gray-300
                  prose-table:my-8
                ">
                  <div 
                    className="text-gray-800" 
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
                  />
                </article>
                
                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center group">
                      <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                      </svg>
                      Back to all posts
                    </Link>
                    
                    {/* Share Buttons */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 font-medium">Share:</span>
                      <div className="flex gap-2">
                        <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </button>
                        <button className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Author Bio Card */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img src="/me.png" alt="Billie Heidelberg Jr." className="w-16 h-16 rounded-full object-cover" />
                  </div>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About Billie Heidelberg Jr.</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Full Stack Developer & Technical Leader with 7+ years of experience building scalable applications 
                    and leading development teams. Passionate about sharing knowledge and helping others grow.
                  </p>
                  <div className="flex justify-center sm:justify-start gap-3">
                    <a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/bheidelberg" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Related Articles / CTA Section */}
      <AnimatedSection animationType="fadeIn" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Connect?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing development challenges, trading technology, or potential collaboration opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/80 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-4">Read more articles like this</p>
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}

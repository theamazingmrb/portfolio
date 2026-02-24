import { getPostData, getAllPostIds, getRelatedPosts } from '@/lib/posts';
import { calculateReadingTime } from '@/lib/readingTime';
import { formatDate, getCoverImage } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import CodeBlocksHydration from '@/components/CodeBlocksHydration';
import BlogContentHydration from '@/components/BlogContentHydration';
import ShareButtons from '@/components/ShareButtons';
import TableOfContents from '@/components/TableOfContents';
import MobileTableOfContents from '@/components/MobileTableOfContents';
import RelatedPosts from '@/components/RelatedPosts';
import { Metadata } from 'next';

// Using the imported calculateReadingTime function from lib/posts

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const postData = await getPostData(id);
  
  // Extract tags for keywords
  const keywords = postData?.tags ? 
    `${postData.tags.join(', ')}, development, trading technology, full stack, React, TypeScript, Node.js` : 
    'development, trading technology, full stack, React, TypeScript, Node.js, team leadership, technical insights';
  
  // Determine canonical URL
  const canonicalUrl = `https://billieheidelberg.com/blog/${id}`;
  
  return {
    title: postData ? `${postData.title} | Billie Heidelberg Jr. Blog` : 'Blog Post | Billie Heidelberg Jr.',
    description: postData?.excerpt || 'Read insights on full-stack development, trading technology, and team leadership.',
    keywords: keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: postData ? `${postData.title} | Billie Heidelberg Jr.` : 'Blog Post',
      description: postData?.excerpt || 'Read insights on full-stack development and technology.',
      type: 'article',
      publishedTime: postData?.date,
      modifiedTime: postData?.lastUpdated || postData?.date,
      authors: [postData?.author || 'Billie Heidelberg Jr.'],
      tags: postData?.tags || [],
      images: postData?.coverImage ? [{
        url: postData.coverImage,
        width: 1200,
        height: 630,
        alt: `Cover image for ${postData?.title}`
      }] : undefined,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: postData ? `${postData.title} | Billie Heidelberg Jr.` : 'Blog Post',
      description: postData?.excerpt || 'Read insights on full-stack development and technology.',
      images: postData?.coverImage ? [postData.coverImage] : undefined,
      creator: '@bheidelberg',
    },
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({ id: path.params.id }));
}

// JSON-LD structured data component for blog posts
function BlogPostJsonLd({ post, url }: { post: any, url: string }) {
  const authorName = post.author || 'Billie Heidelberg Jr.';
  const datePublished = post.date;
  const dateModified = post.lastUpdated || post.date;
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'image': post.coverImage || 'https://billieheidelberg.com/me.png',
    'datePublished': datePublished,
    'dateModified': dateModified,
    'author': {
      '@type': 'Person',
      'name': authorName,
      'url': 'https://billieheidelberg.com/about'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Billie Heidelberg Jr.',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://billieheidelberg.com/me.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    },
    'keywords': post.tags?.join(', ') || '',
    'wordCount': post.contentHtml ? post.contentHtml.split(/\s+/).length : 0,
    'articleBody': post.excerpt
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = await getPostData(id);
  const canonicalUrl = `https://billieheidelberg.com/blog/${id}`;

  // Get related posts based on shared tags
  const relatedPosts = getRelatedPosts(id, postData?.tags || [], 3);

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
      {/* Add structured data for SEO */}
      <BlogPostJsonLd post={postData} url={canonicalUrl} />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 sm:mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Article Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/20 text-blue-200 rounded-full text-xs sm:text-sm font-medium border border-blue-400/30">
                  📝 Technical Article
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 px-2">
                {postData.title}
              </h1>
              
              {/* Article Meta */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Image src={postData.authorImage || "/me.png"} alt={postData.author || "Billie Heidelberg Jr."} width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-semibold text-white">{postData.author || "Billie Heidelberg Jr."}</div>
                    <div className="text-xs sm:text-sm text-gray-400">Full Stack Developer</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <time dateTime={postData.date} className="whitespace-nowrap">{formattedDate}</time>
                  </div>
                  {postData.lastUpdated && postData.lastUpdated !== postData.date && (
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/>
                      </svg>
                      <span className="whitespace-nowrap">Updated {new Date(postData.lastUpdated).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="whitespace-nowrap">{postData.readingTime || calculateReadingTime(postData.contentHtml)} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <AnimatedSection animationType="fadeIn" className="py-6 sm:py-8 md:py-12 lg:py-16 -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="flex-1 lg:max-w-4xl lg:ml-72">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  {/* Progress Bar */}
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                  <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                    {/* Cover Image */}
                    <div className="mb-6 sm:mb-8 md:mb-10">
                      <Image 
                        src={postData.coverImage || getCoverImage(postData.coverImage)} 
                        alt={`Cover image for ${postData.title}`} 
                        width={1200}
                        height={630}
                        className="w-full h-auto rounded-xl shadow-lg"
                        priority
                        suppressHydrationWarning
                      />
                    </div>
                    
                    <article className="prose prose-lg sm:prose-xl max-w-none
                      prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 sm:prose-headings:mt-12 sm:prose-headings:mb-6
                      prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-6 sm:prose-h1:mb-8 prose-h1:mt-0
                      prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 sm:prose-h2:pb-3 prose-h2:mb-4 sm:prose-h2:mb-8
                      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg
                      prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:shadow-lg prose-pre:overflow-x-auto
                      prose-code:text-pink-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm prose-code:font-mono
                      max-sm:prose-pre:text-xs max-sm:prose-code:text-xs max-sm:prose-pre:p-3 sm:prose-pre:p-4 md:prose-pre:p-6
                      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:my-4 prose-blockquote:rounded-r-lg
                      prose-ul:list-disc prose-ul:space-y-2 prose-ul:text-gray-700
                      prose-ol:list-decimal prose-ol:space-y-2 prose-ol:text-gray-700
                      prose-li:leading-relaxed prose-li:text-base sm:prose-li:text-lg
                      prose-strong:text-gray-900 prose-strong:font-semibold
                      prose-em:text-gray-700 prose-em:italic
                      prose-a:text-blue-600 prose-a:no-underline prose-a:hover:text-blue-800 prose-a:hover:underline prose-a:font-medium
                      prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-gray-200
                      prose-table:border prose-table:border-gray-200 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
                      prose-thead:bg-gray-50 prose-thead:border-b prose-thead:border-gray-200
                      prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
                      prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-gray-200 prose-td:text-gray-700
                      prose-hr:border-gray-200 prose-hr:my-8
                      max-sm:prose-p:text-sm max-sm:prose-li:text-sm max-sm:prose-h2:text-lg max-sm:prose-h3:text-base
                    ">
                      <BlogContentHydration content={postData.contentHtml || ''} />
                      {/* Add CodeBlocksHydration component to handle copy buttons */}
                      <CodeBlocksHydration />
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
                        <ShareButtons 
                          url={canonicalUrl}
                          title={postData.title}
                          summary={postData.excerpt}
                        />
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
                    <Image src="/me.png" alt="Billie Heidelberg Jr." width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
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

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} />
      )}

      {/* CTA Section */}
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
      
      {/* Desktop Table of Contents */}
      <TableOfContents content={postData.contentHtml || ''} />
      
      {/* Mobile Table of Contents */}
      <MobileTableOfContents content={postData.contentHtml || ''} />
    </div>
  );
}

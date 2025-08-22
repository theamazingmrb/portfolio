import Link from "next/link";
import { getSortedPostsData, PostData } from "../../lib/posts";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export const metadata = {
  title: "Blog | Billie Heidelberg Jr. - Insights on Development, Trading & Technology",
  description: "Read my latest thoughts on full-stack development, trading technology, team leadership, and building scalable applications. Insights from 7+ years in the industry.",
  keywords: "blog, development insights, trading technology, full stack development, team leadership, React, TypeScript, Node.js, technical writing",
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
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="z-10 text-center max-w-4xl mx-auto">
          <div className="mb-4 inline-block">
            <span className="px-4 py-2 bg-blue-600/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30">
              📝 Technical Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Insights & Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Deep dives into full-stack development, trading technology, team leadership, and lessons learned building scalable applications
          </p>
        </div>
      </section>

      {/* What You'll Find Section */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-16 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You'll Find Here
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world insights from building products that scale, leading development teams, 
              and solving complex technical challenges. No fluff—just practical knowledge you can apply immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Battle-Tested Solutions</h3>
              <p className="text-gray-600">Lessons learned from 7+ years of building scalable applications and leading development teams</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Tech Insights</h3>
              <p className="text-gray-600">Deep dives into React, TypeScript, Node.js, AI integration, and cutting-edge development practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-2.21-1.79-4-4-4S8 1.79 8 4s1.79 4 4 4 4-1.79 4-4zM15 11H9c-2.21 0-4 1.79-4 4v6h2v-6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v6h2v-6c0-2.21-1.79-4-4-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Wisdom</h3>
              <p className="text-gray-600">Strategies for building high-performing teams, managing technical debt, and scaling engineering organizations</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Post Section */}
      {allPostsData.length > 0 && (
        <AnimatedSection
          animationType="fadeInUp"
          className="py-16 md:py-24 bg-gray-50"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>
            
            <FeaturedPostCard
              id={allPostsData[0].id}
              title={allPostsData[0].title}
              date={allPostsData[0].date}
              excerpt={allPostsData[0].excerpt}
            />
          </div>
        </AnimatedSection>
      )}

      {/* All Posts Section */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights on full-stack development, trading technology, team leadership, and lessons learned building scalable applications
            </p>
          </div>
          
          {/* Blog Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{allPostsData.length}</div>
              <div className="text-gray-600 font-medium">Articles Published</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">7+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">Topic Categories</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

          {/* Topics & Categories Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Topics I Write About</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Full-Stack Development</h4>
                <p className="text-gray-600 text-sm">React, TypeScript, Node.js, and modern web technologies</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Trading Technology</h4>
                <p className="text-gray-600 text-sm">AI-powered tools, financial applications, and market analysis</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Team Leadership</h4>
                <p className="text-gray-600 text-sm">Managing teams, mentoring developers, and scaling organizations</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Author & Newsletter Section */}
      <AnimatedSection
        animationType="fadeInUp"
        className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Author Section */}
            <div className="text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                    <img src="/me.png" alt="Billie Heidelberg Jr." className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">Billie Heidelberg Jr.</h3>
                  <p className="text-blue-300 font-medium mb-4">Full Stack Developer & Technical Leader</p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    With 7+ years of experience building scalable applications and leading development teams, 
                    I share practical insights from the trenches of modern software development.
                  </p>
                  <div className="flex justify-center lg:justify-start gap-4">
                    <a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/bheidelberg" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Newsletter Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Stay in the Loop</h3>
                <p className="text-gray-300 text-sm">
                  Get notified when I publish new insights on development, trading tech, and leadership
                </p>
              </div>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe to Updates
                </button>
                <p className="text-xs text-gray-400 text-center">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <Footer />
    </main>
  );
}

function FeaturedPostCard({
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
  const readingTime = calculateReadingTime(excerpt);
  const formattedDate = new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <article className="group bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-200">
      <div className="p-8 md:p-12">
        {/* Featured Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-full">
            ⭐ Featured Article
          </span>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <time dateTime={date} className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              {formattedDate}
            </time>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {readingTime} min read
            </div>
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${id}`} className="block mb-6 group-hover:text-blue-600 transition-colors">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          {excerpt}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Read Full Article
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
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
  const readingTime = calculateReadingTime(excerpt);
  const formattedDate = new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Determine category from content (you can enhance this logic)
  const getCategory = (title: string, excerpt: string) => {
    if (title.toLowerCase().includes('smart trader') || excerpt.toLowerCase().includes('trading')) {
      return { name: 'Trading Tech', color: 'bg-green-100 text-green-700' };
    }
    if (title.toLowerCase().includes('clarity') || excerpt.toLowerCase().includes('personal')) {
      return { name: 'Leadership', color: 'bg-purple-100 text-purple-700' };
    }
    return { name: 'Development', color: 'bg-blue-100 text-blue-700' };
  };

  const category = getCategory(title, excerpt);

  return (
    <article className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
      {/* Header with gradient accent */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="p-8 flex-1 flex flex-col">
        {/* Metadata */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <time dateTime={date} className="flex items-center font-medium">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              {formattedDate}
            </time>
            <div className="flex items-center font-medium">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {readingTime} min read
            </div>
          </div>
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${category.color}`}>
            {category.name}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${id}`} className="block mb-4 group-hover:text-blue-600 transition-colors">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight line-clamp-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Author & CTA */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-3">
              <img src="/me.png" alt="Billie Heidelberg Jr." className="w-8 h-8 rounded-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Billie Heidelberg Jr.</div>
              <div className="text-xs text-gray-500">Full Stack Developer</div>
            </div>
          </div>
          
          <Link
            href={`/blog/${id}`}
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

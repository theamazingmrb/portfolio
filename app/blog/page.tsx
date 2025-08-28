"use client";

import Link from "next/link";
import { PostData } from "../../lib/posts";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import FeaturedPostCard from "@/components/FeaturedPostCard";
import BlogPostCard from "@/components/BlogPostCard";
import { useState, useEffect } from "react";

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Function to get all unique tags from posts
function getAllUniqueTags(posts: PostData[]): string[] {
  const allTags = posts.flatMap(post => post.tags || []);
  const uniqueTagsSet = new Set<string>(allTags);
  return Array.from(uniqueTagsSet).sort();
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}

interface PostsResponse {
  posts: PostData[];
  pagination: PaginationData;
}

export default function Blog() {
  const [allPosts, setAllPosts] = useState<PostData[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10; // Number of posts per page
  
  // Fetch posts with optional tag filter and pagination
  const fetchPosts = async (page = 1, tags: string[] = []) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Build query parameters
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', postsPerPage.toString());
      
      // If we have a single tag selected, use it as a filter parameter
      if (tags.length === 1) {
        params.append('tag', tags[0]);
      }
      
      const response = await fetch(`/api/posts?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data: PostsResponse = await response.json();
      
      // If we have multiple tags selected, filter client-side
      let postsToDisplay = data.posts;
      if (tags.length > 1) {
        postsToDisplay = postsToDisplay.filter(post => {
          return tags.every(tag => post.tags?.includes(tag));
        });
      }
      
      setAllPosts(data.posts);
      setFilteredPosts(postsToDisplay);
      setPagination(data.pagination);
      
      // Only set tags on initial load or when resetting filters
      if (tags.length === 0) {
        setAllTags(getAllUniqueTags(data.posts));
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Initial fetch on component mount
  useEffect(() => {
    fetchPosts(currentPage, selectedTags);
  }, [currentPage, selectedTags]);
  
  // Refetch when tags change
  useEffect(() => {
    if (selectedTags.length !== 0) {
      setCurrentPage(1); // Reset to first page when filtering
      fetchPosts(1, selectedTags);
    }
  }, [selectedTags]);
  
  // Toggle tag selection
  const handleTagToggle = (tag: string) => {
    if (tag === 'all') {
      setSelectedTags([]);
      fetchPosts(1, []);
      return;
    }
    
    const isSelected = selectedTags.includes(tag);
    let newSelectedTags: string[];
    
    if (isSelected) {
      newSelectedTags = selectedTags.filter(t => t !== tag);
    } else {
      newSelectedTags = [...selectedTags, tag];
    }
    
    setSelectedTags(newSelectedTags);
  };
  
  // Clear all selected tags
  const clearTags = () => {
    setSelectedTags([]);
    setFilteredPosts(allPosts);
  };

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
      {filteredPosts.length > 0 && (
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
              id={filteredPosts[0].id}
              title={filteredPosts[0].title}
              date={filteredPosts[0].date}
              excerpt={filteredPosts[0].excerpt}
              tags={filteredPosts[0].tags}
            />
          </div>
        </AnimatedSection>
      )}

      {/* All Posts Section */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
                <p className="text-gray-600">Browse all my articles on development, technology, and leadership.</p>
              </div>
              
              {/* Tag Filter */}
              <div className="mt-6 md:mt-0">
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handleTagToggle('all')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                      selectedTags.length === 0 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    All
                  </button>
                  {allTags.slice(0, 8).map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                        selectedTags.includes(tag) 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Loading and Error States */}
            {isLoading && (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
                <p>{error}</p>
                <button 
                  onClick={() => fetchPosts(1, [])} 
                  className="mt-2 text-sm font-medium underline hover:text-red-800"
                >
                  Try again
                </button>
              </div>
            )}
            
            {/* Empty State */}
            {!isLoading && !error && filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No posts found</h3>
                <p className="mt-1 text-gray-500">Try changing your filters or check back later for new content.</p>
                {selectedTags.length > 0 && (
                  <button 
                    onClick={() => handleTagToggle('all')} 
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
            
            {/* Posts Grid */}
            {!isLoading && !error && filteredPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <BlogPostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    date={post.date}
                    excerpt={post.excerpt || ''}
                    tags={post.tags}
                  />
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Page Numbers */}
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => {
                    // Show first page, last page, current page, and pages around current page
                    if (
                      page === 1 ||
                      page === pagination.totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 text-sm font-medium rounded-md ${currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      (page === 2 && currentPage > 3) ||
                      (page === pagination.totalPages - 1 && currentPage < pagination.totalPages - 2)
                    ) {
                      // Show ellipsis
                      return <span key={page} className="px-2 py-2 text-gray-500">...</span>;
                    }
                    return null;
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, pagination.totalPages))}
                    disabled={currentPage === pagination.totalPages}
                    className={`p-2 rounded-md ${currentPage === pagination.totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
            
            {selectedTags.length > 0 && (
              <div className="text-center mt-4 text-sm text-gray-600">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} with selected tags
              </div>
            )}
            
            {/* Blog Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{allPosts.length}</div>
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
                  suppressHydrationWarning
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

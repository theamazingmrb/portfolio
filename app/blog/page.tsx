"use client";

import Image from "next/image";
import { PostData } from "../../lib/posts";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import FeaturedPostCard from "@/components/FeaturedPostCard";
import BlogPostCard from "@/components/BlogPostCard";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  const [searchQuery, setSearchQuery] = useState<string>("");
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
  
  // Filter posts by search query
  const searchFilteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return filteredPosts;
    const query = searchQuery.toLowerCase();
    return filteredPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt?.toLowerCase().includes(query) ||
      post.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }, [filteredPosts, searchQuery]);

  // Memoize featured post to avoid recalculating on every render
  const featuredPost = useMemo(() => {
    const featuredPosts = filteredPosts.filter(post => post.featured);
    if (featuredPosts.length === 0) return null;

    // Sort featured posts by date (newest first)
    featuredPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return featuredPosts[0];
  }, [filteredPosts]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection animationType="fadeIn" className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-secondary/30 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 sm:mb-6">
              <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                📝 Technical Blog
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight px-2">
              Insights & Experiences
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Deep dives into full-stack development, trading technology, team leadership, and lessons learned building scalable applications
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* What You'll Find Section */}
      <AnimatedSection animationType="fadeInUp" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              What You'll Find Here
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Real-world insights from building products that scale, leading development teams,
              and solving complex technical challenges with TypeScript, React, and modern frameworks. No fluff—just practical knowledge you can apply immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl">Battle-Tested Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Lessons learned from 7+ years of building scalable applications and leading development teams</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Modern Tech Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Deep dives into TypeScript, React, Node.js, AI integration, and cutting-edge development practices with real-world examples</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-2.21-1.79-4-4-4S8 1.79 8 4s1.79 4 4 4 4-1.79 4-4zM15 11H9c-2.21 0-4 1.79-4 4v6h2v-6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v6h2v-6c0-2.21-1.79-4-4-4z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl">Team Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Practical advice on mentoring developers, managing technical projects, and building high-performing engineering teams</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Post Section */}
      {featuredPost && (
        <AnimatedSection
          animationType="fadeInUp"
          className="py-16 md:py-24 bg-secondary/50"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Article
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <FeaturedPostCard
              id={featuredPost.id}
              title={featuredPost.title}
              date={featuredPost.date}
              excerpt={featuredPost.excerpt}
              readingTime={featuredPost.readingTime || 1}
              tags={featuredPost.tags}
              coverImage={featuredPost.coverImage}
            />
          </div>
        </AnimatedSection>
      )}

      {/* All Posts Section */}
      <AnimatedSection animationType="fadeInUp" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 sm:mb-12 md:mb-16">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">All Articles</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-2">Browse all my articles on development, technology, and leadership.</p>
              </div>

              {/* Search Bar */}
              <div className="mt-4 sm:mt-6 md:mt-0 px-2 w-full md:w-auto">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-64 pl-10 pr-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label="Clear search"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Tag Filter */}
            <div className="mb-8 px-2">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <Button
                  variant={selectedTags.length === 0 ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTagToggle('all')}
                  className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3"
                >
                  All
                </Button>
                {allTags.slice(0, 8).map(tag => (
                  <Button
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTagToggle(tag)}
                    className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3"
                  >
                    {tag}
                  </Button>
                ))}
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
            {!isLoading && !error && searchFilteredPosts.length === 0 && (
              <div className="text-center py-16">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-foreground">No posts found</h3>
                <p className="mt-1 text-muted-foreground">
                  {searchQuery ? `No results for "${searchQuery}"` : "Try changing your filters or check back later for new content."}
                </p>
                {(selectedTags.length > 0 || searchQuery) && (
                  <button
                    onClick={() => {
                      handleTagToggle('all');
                      setSearchQuery("");
                    }}
                    className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}

            {/* Posts Grid */}
            {!isLoading && !error && searchFilteredPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchFilteredPosts.map(post => (
                  <BlogPostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    date={post.date}
                    excerpt={post.excerpt || ''}
                    readingTime={post.readingTime || 1}
                    tags={post.tags}
                    coverImage={post.coverImage}
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
            
            {(selectedTags.length > 0 || searchQuery) && (
              <div className="text-center mt-4 text-sm text-muted-foreground">
                Showing {searchFilteredPosts.length} {searchFilteredPosts.length === 1 ? 'article' : 'articles'}
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedTags.length > 0 && ` with selected tags`}
              </div>
            )}
            
            {/* Blog Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-16">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{allPosts.length}</div>
                  <div className="text-muted-foreground font-medium">Articles Published</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">7+</div>
                  <div className="text-muted-foreground font-medium">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{allTags.length}</div>
                  <div className="text-muted-foreground font-medium">Topic Categories</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Author & Newsletter Section */}
      <AnimatedSection animationType="fadeInUp" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Author Section */}
            <div className="text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full border-4 border-background shadow-lg overflow-hidden">
                    <Image src="/me.png" alt="Billie Heidelberg Jr." width={96} height={96} className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">Billie Heidelberg Jr.</h3>
                  <p className="text-muted-foreground font-medium mb-4">Full Stack Developer & Technical Leader</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    With 7+ years of experience building scalable applications and leading development teams, 
                    I share practical insights from the trenches of modern software development.
                  </p>
                  <div className="flex justify-center lg:justify-start gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://linkedin.com/in/bheidelberg" target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Newsletter Section */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl mb-2">Stay in the Loop</CardTitle>
                <CardDescription>
                  Get notified when I publish new insights on development, trading tech, and leadership
                </CardDescription>
              </div>
              <div className="space-y-4" suppressHydrationWarning>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  suppressHydrationWarning
                />
                <Button className="w-full">
                  Subscribe to Newsletter
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam, unsubscribe anytime. I respect your privacy.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
                        

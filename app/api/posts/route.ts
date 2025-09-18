import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/posts';

// Set cache control headers for better performance
export const revalidate = 3600; // Revalidate at most every hour

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    
    // Get all posts
    const allPosts = await getSortedPostsData();
    
    // Filter by tag if provided
    const filteredPosts = tag 
      ? allPosts.filter(post => post.tags?.includes(tag))
      : allPosts;
      
    // Sort posts by date (newest first)
    filteredPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    // Calculate pagination
    const postsPerPage = limit || filteredPosts.length;
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    // Calculate total pages
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    
    // Return posts with pagination metadata
    return NextResponse.json({
      posts: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
        postsPerPage
      }
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
} 

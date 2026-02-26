import { getAllPostsWithDrafts } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DraftPosts() {
  const allPosts = getAllPostsWithDrafts();
  const draftPosts = allPosts.filter(post => post.draft);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Draft Posts</h1>
            <p className="text-muted-foreground">
              Private posts and notes - only accessible to you
            </p>
          </div>

          {draftPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No draft posts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {draftPosts.map(post => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        📝 Draft
                      </Badge>
                      {post.featured && (
                        <Badge variant="outline" className="text-xs">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      Read post →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-border">
            <Link 
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground"
            >
              ← Back to public blog
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

import { getSortedPostsData } from '@/lib/posts';

export default async function BlogStructuredData() {
  const posts = await getSortedPostsData();
  
  // Create blog listing structured data
  const blogListingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'headline': 'Billie Heidelberg Jr. Blog',
    'description': 'Insights on full-stack development, trading technology, and team leadership',
    'url': 'https://billieheidelberg.com/blog',
    'author': {
      '@type': 'Person',
      'name': 'Billie Heidelberg Jr.',
      'url': 'https://billieheidelberg.com/about'
    },
    'publisher': {
      '@type': 'Person',
      'name': 'Billie Heidelberg Jr.',
      'url': 'https://billieheidelberg.com'
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://billieheidelberg.com/blog'
    },
    'blogPosts': posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'datePublished': post.date,
      'dateModified': post.lastUpdated || post.date,
      'author': {
        '@type': 'Person',
        'name': post.author || 'Billie Heidelberg Jr.'
      },
      'url': `https://billieheidelberg.com/blog/${post.id}`
    }))
  };

  // Create breadcrumb structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://billieheidelberg.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://billieheidelberg.com/blog'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

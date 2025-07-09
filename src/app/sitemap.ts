import { getAllPosts } from '@/lib/blog';

export default function sitemap() {
  const posts = getAllPosts();
  const baseUrl = 'https://tncy.dev';

  const routes = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}

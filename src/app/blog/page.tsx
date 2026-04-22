import { Metadata } from 'next';
import BlogView from '@/components/BlogView';
import { getAllPosts, getAllTags, getFeaturedPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Web geliştirme, teknoloji ve programlama hakkında yazılarım.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const allTags = getAllTags();

  return <BlogView allPosts={allPosts} featuredPosts={featuredPosts} allTags={allTags} />;
}

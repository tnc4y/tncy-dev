import { Metadata } from 'next';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getAllPosts, getAllTags, getFeaturedPosts } from '@/lib/blog';
import { BookOpen, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Web geliştirme, teknoloji ve programlama hakkında yazılarım.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const regularPosts = allPosts.filter(post => !post.featured);
  const allTags = getAllTags();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex justify-center mb-6">
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-2xl text-green-600 dark:text-green-400 animate-fade-in">
              <BookOpen className="w-10 h-10" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Blog
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Web geliştirme, modern teknolojiler ve programlama deneyimlerim hakkında
            yazdığım makaleler. Öğrendiklerimi ve keşfettiklerimi sizlerle paylaşıyorum.
          </p>
        </div>

        {/* Tags */}
        {allTags.length > 0 && (
          <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Konular
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag.toLowerCase()}`}
                    className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 hover:text-green-600 dark:hover:text-green-400 transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="text-yellow-500">⭐</span> Öne Çıkan Yazılar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        {regularPosts.length > 0 && (
          <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Tüm Yazılar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {allPosts.length === 0 && (
          <div className="text-center py-20 glass rounded-3xl">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Henüz blog yazısı eklenmemiş
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yakında buraya yeni yazılar eklenecek.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

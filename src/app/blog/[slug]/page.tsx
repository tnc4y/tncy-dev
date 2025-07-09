import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import BlogContent from '@/components/BlogContent';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Blog'a Geri Dön
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {post.featured && (
            <span className="inline-block px-3 py-1 text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full mb-4">
              Öne Çıkan Yazı
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {post.description}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{format(new Date(post.date), 'dd MMMM yyyy', { locale: tr })}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{post.readingTime} dakika okuma</span>
            </div>
          </div>
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag.toLowerCase()}`}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Tag size={12} />
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <BlogContent content={post.content} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              Diğer Yazıları Görüntüle
            </Link>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Bu yazı faydalı oldu mu? Sosyal medyada paylaş!
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

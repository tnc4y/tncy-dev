import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/types';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col h-full">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          {post.featured && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full border border-yellow-200 dark:border-yellow-700/50">
              Öne Çıkan
            </span>
          )}

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 ml-auto">
            <Calendar size={14} />
            <span>{format(new Date(post.date), 'dd MMM yyyy')}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Link href={`/blog/${post.slug}`} className="block">
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3 flex-grow">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tags/${tag.toLowerCase()}`}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-700/50 mt-auto">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <User size={14} />
              <span>{post.author}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.readingTime} dk</span>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm group/link"
          >
            Devamını Oku
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

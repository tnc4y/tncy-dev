import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/types';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {post.featured && (
          <span className="inline-block px-3 py-1 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full mb-3">
            Öne Çıkan
          </span>
        )}
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {post.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tags/${tag.toLowerCase()}`}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{post.author}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{format(new Date(post.date), 'dd MMM yyyy')}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime} dk okuma</span>
            </div>
          </div>
          
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            Devamını Oku →
          </Link>
        </div>
      </div>
    </article>
  );
}

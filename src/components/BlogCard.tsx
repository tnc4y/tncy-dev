'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/types';
import { format } from 'date-fns';
import { useLanguage } from './LanguageProvider';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { t } = useLanguage();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block py-6 border-b hairline hover:bg-white dark:hover:bg-zinc-900/40 transition-colors -mx-4 px-4"
    >
      <div className="flex items-baseline gap-6">
        <time className="font-mono text-xs text-zinc-500 dark:text-zinc-500 w-24 shrink-0 hidden sm:block">
          {format(new Date(post.date), 'dd.MM.yyyy')}
        </time>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-base sm:text-lg font-medium tracking-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {post.title}
            </h3>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-zinc-400 dark:text-zinc-600 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            />
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
            {post.description}
          </p>

          <div className="flex items-center gap-3 mt-3 font-mono text-[11px] text-zinc-500 dark:text-zinc-500">
            <time className="sm:hidden">{format(new Date(post.date), 'dd.MM.yyyy')}</time>
            <span className="sm:hidden">·</span>
            <span>{post.readingTime} {t('blog.minRead')}</span>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag}>·  #{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import type { BlogPost } from '@/types';
import { useLanguage } from './LanguageProvider';

interface BlogViewProps {
  allPosts: BlogPost[];
  featuredPosts: BlogPost[];
  allTags: string[];
}

export default function BlogView({ allPosts, featuredPosts, allTags }: BlogViewProps) {
  const { t } = useLanguage();
  const regularPosts = allPosts.filter(post => !post.featured);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-24">
      <header className="mb-16 max-w-2xl">
        <p className="label mb-4">{t('blog.label')}</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
          {t('blog.title')}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {t('blog.intro')}
        </p>
      </header>

      {allTags.length > 0 && (
        <div className="border-t hairline pt-6 pb-10">
          <p className="label mb-4">{t('blog.topics')}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-sm">
            {allTags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${tag.toLowerCase()}`}
                className="text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {featuredPosts.length > 0 && (
        <section className="mb-16 border-t hairline pt-12">
          <p className="label mb-6">{t('blog.selected')}</p>
          <ul className="border-t hairline">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {regularPosts.length > 0 && (
        <section className="border-t hairline pt-12">
          <p className="label mb-6">{t('blog.allPosts')}</p>
          <ul className="border-t hairline">
            {regularPosts.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {allPosts.length === 0 && (
        <div className="border hairline p-12 text-center">
          <h3 className="text-lg font-medium mb-2">
            {t('blog.empty')}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t('blog.emptyDesc')}
          </p>
        </div>
      )}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';
import { useLanguage } from './LanguageProvider';

interface BlogPostMetaProps {
  date: string;
  readingTime: number;
  featured?: boolean;
}

export function BlogPostMeta({ date, readingTime, featured }: BlogPostMetaProps) {
  const { locale, t } = useLanguage();

  return (
    <div className="flex items-center gap-3 font-mono text-xs text-zinc-500 dark:text-zinc-500 mb-6 uppercase tracking-widest">
      <time>{format(new Date(date), 'dd MMMM yyyy', { locale: locale === 'tr' ? tr : enUS })}</time>
      <span>·</span>
      <span>{readingTime} {t('blog.minShort')}</span>
      {featured && (
        <>
          <span>·</span>
          <span className="text-primary-600 dark:text-primary-400">{t('blog.featured')}</span>
        </>
      )}
    </div>
  );
}

export function BlogBackLink() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-12"
    >
      ← Blog
    </Link>
  );
}

export function BlogBackFooter() {
  const { t } = useLanguage();
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
    >
      {t('blog.backTo')}
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-6">
          {t('notFound.code')}
        </p>

        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
          {t('notFound.title')}
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
          {t('notFound.intro')}
        </p>

        <div className="border-t hairline pt-6">
          <p className="label mb-4">{t('notFound.suggestions')}</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-zinc-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {t('notFound.home')}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-zinc-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {t('notFound.projects')}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-zinc-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {t('notFound.blog')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-zinc-700 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {t('notFound.contact')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

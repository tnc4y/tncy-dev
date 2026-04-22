'use client';

import { useLanguage } from '@/components/LanguageProvider';

export default function Loading() {
  const { t } = useLanguage();
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
        {t('loading')}
      </p>
    </div>
  );
}

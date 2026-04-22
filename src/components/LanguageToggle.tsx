'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus:outline-none px-1"
      aria-label={t('langToggle.aria')}
    >
      <span className={locale === 'tr' ? 'text-zinc-900 dark:text-zinc-50' : ''}>tr</span>
      <span className="mx-1 text-zinc-300 dark:text-zinc-700">/</span>
      <span className={locale === 'en' ? 'text-zinc-900 dark:text-zinc-50' : ''}>en</span>
    </button>
  );
}

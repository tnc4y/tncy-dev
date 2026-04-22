'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/data';
import { useLanguage } from './LanguageProvider';

export default function ContactView() {
  const { t, loc } = useLanguage();

  const channels = [
    {
      label: t('contact.email'),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    personalInfo.phone && {
      label: t('contact.phone'),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    personalInfo.socialLinks.github && {
      label: 'GitHub',
      value: personalInfo.socialLinks.github.replace('https://', ''),
      href: personalInfo.socialLinks.github,
      external: true,
    },
    personalInfo.socialLinks.linkedin && {
      label: 'LinkedIn',
      value: personalInfo.socialLinks.linkedin.replace('https://', ''),
      href: personalInfo.socialLinks.linkedin,
      external: true,
    },
    personalInfo.socialLinks.twitter && {
      label: 'Twitter',
      value: personalInfo.socialLinks.twitter.replace('https://', ''),
      href: personalInfo.socialLinks.twitter,
      external: true,
    },
  ].filter(Boolean) as Array<{ label: string; value: string; href: string; external?: boolean }>;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-24">
      <header className="mb-16 max-w-2xl">
        <p className="label mb-4">{t('contact.label')}</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
          {t('contact.title')}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {t('contact.intro')}
        </p>
      </header>

      <ul className="border-t hairline">
        {channels.map((channel) => (
          <li key={channel.label}>
            <a
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between gap-6 py-5 border-b hairline hover:bg-white dark:hover:bg-zinc-900/40 transition-colors -mx-4 px-4"
            >
              <div className="flex items-baseline gap-6 min-w-0">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 w-20 shrink-0">
                  {channel.label}
                </span>
                <span className="text-sm sm:text-base text-zinc-900 dark:text-zinc-50 truncate">
                  {channel.value}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-zinc-400 dark:text-zinc-600 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              />
            </a>
          </li>
        ))}
        <li className="py-5">
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 w-20 shrink-0">
              {t('contact.location')}
            </span>
            <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              {loc(personalInfo.location)}
            </span>
          </div>
        </li>
      </ul>

      <div className="mt-16 border-t hairline pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          {t('contact.backHome')}
        </Link>
      </div>
    </div>
  );
}

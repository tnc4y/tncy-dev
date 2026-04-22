'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t hairline mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <Link href="/" className="font-mono text-sm font-medium tracking-tight">
              tncy<span className="text-primary-500">.</span>dev
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link href="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="/projects" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              {t('nav.projects')}
            </Link>
            <Link href="/blog" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              {t('nav.blog')}
            </Link>
            <Link href="/contact" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              {t('nav.contact')}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} tncy.dev — {t('footer.rights')}
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/tnc4y"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Github size={16} />
            </Link>
            <Link
              href="https://linkedin.com/in/tnc4y"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="mailto:hi@tncy.dev"
              aria-label="Email"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Mail size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import { personalInfo } from '@/data';
import type { BlogPost, Project } from '@/types';
import { useLanguage } from './LanguageProvider';

interface HomeViewProps {
  featuredProjects: Project[];
  recentPosts: BlogPost[];
}

export default function HomeView({ featuredProjects, recentPosts }: HomeViewProps) {
  const { t, loc } = useLanguage();

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
          </span>
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
            {t('home.available')}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-6 max-w-3xl">
          {personalInfo.name},{' '}
          <span className="text-zinc-500 dark:text-zinc-400">
            {loc(personalInfo.title).toLowerCase()}.
          </span>
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-10">
          {loc(personalInfo.bio)}
          {t('home.bioSuffix', { location: loc(personalInfo.location) })}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-zinc-900 dark:text-zinc-50 border-b border-zinc-900 dark:border-zinc-50 pb-0.5 hover:text-primary-600 hover:border-primary-600 dark:hover:text-primary-400 dark:hover:border-primary-400 transition-colors"
          >
            {t('home.viewProjects')}
            <ArrowUpRight size={14} />
          </Link>

          <Link
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <Mail size={14} />
            {personalInfo.email}
          </Link>

          {personalInfo.socialLinks.github && (
            <Link
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Github size={14} />
              GitHub
            </Link>
          )}

          {personalInfo.socialLinks.linkedin && (
            <Link
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </Link>
          )}
          <a
              href="/Tuncay_Yilmaz_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Download size={14} />
              {t('about.downloadCv')}
            </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 border-t hairline">
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <p className="label mb-3">01 — {t('home.selectedWork')}</p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              {t('home.workingOn')}
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors whitespace-nowrap"
          >
            {t('home.all')}
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border hairline">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="md:hidden mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            {t('home.allProjects')}
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20 border-t hairline">
          <div className="flex items-end justify-between mb-12 gap-4">
            <div>
              <p className="label mb-3">02 — {t('home.posts')}</p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                {t('home.recentNotes')}
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors whitespace-nowrap"
            >
              {t('home.all')}
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <ul className="border-t hairline">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>

          <div className="md:hidden mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              {t('home.allPosts')}
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

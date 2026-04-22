'use client';

import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';
import { useLanguage } from './LanguageProvider';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, loc } = useLanguage();

  return (
    <article className="group bg-stone-50 dark:bg-zinc-950 p-8 flex flex-col h-full hover:bg-white dark:hover:bg-zinc-900 transition-colors">
      {project.imageUrl && (
        <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-6 border hairline">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3 className="text-lg font-medium tracking-tight mb-3 leading-snug">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
        {loc(project.description)}
      </p>

      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6 font-mono text-xs text-zinc-500 dark:text-zinc-500">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="flex items-center gap-5 pt-5 border-t hairline text-sm">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <Github size={14} />
            {t('card.source')}
          </Link>
        )}

        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-900 dark:text-zinc-50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ml-auto"
          >
            {t('card.demo')}
            <ArrowUpRight size={14} />
          </Link>
        )}
      </div>
    </article>
  );
}

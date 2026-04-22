'use client';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';
import { useLanguage } from './LanguageProvider';

export default function ProjectsView() {
  const { t } = useLanguage();
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-24">
      <header className="mb-16 max-w-2xl">
        <p className="label mb-4">{t('projects.label')}</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
          {t('projects.title')}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {t('projects.intro')}
        </p>
      </header>

      <div className="border-t hairline pt-6 pb-10">
        <p className="label mb-4">{t('projects.technologies')}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-sm text-zinc-600 dark:text-zinc-400">
          {allTechnologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      {featuredProjects.length > 0 && (
        <section className="mb-16 border-t hairline pt-12">
          <p className="label mb-8">{t('projects.selected')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border hairline">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="border-t hairline pt-12">
          <p className="label mb-8">{t('projects.others')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border hairline">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {projects.length === 0 && (
        <div className="border hairline p-12 text-center">
          <h3 className="text-lg font-medium mb-2">
            {t('projects.empty')}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t('projects.emptyDesc')}
          </p>
        </div>
      )}
    </div>
  );
}

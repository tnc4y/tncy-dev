'use client';

import { Experience } from '@/types';
import { useLanguage } from './LanguageProvider';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { locale, t, loc } = useLanguage();

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <article className="grid grid-cols-1 sm:grid-cols-[160px,1fr] gap-3 sm:gap-8 py-6 border-b hairline last:border-0">
      <div className="font-mono text-xs text-zinc-500 dark:text-zinc-500 pt-1">
        {formatDate(experience.startDate)} — {experience.endDate ? formatDate(experience.endDate) : t('card.ongoing')}
        {experience.location && (
          <div className="mt-2 text-zinc-400 dark:text-zinc-500">
            {experience.location}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-base font-medium tracking-tight">
          {loc(experience.position)}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          {experience.company}
        </p>
        {experience.description && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed max-w-2xl">
            {loc(experience.description)}
          </p>
        )}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 font-mono text-xs text-zinc-500 dark:text-zinc-500">
            {experience.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

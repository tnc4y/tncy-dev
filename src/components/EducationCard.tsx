'use client';

import { Education } from '@/types';
import { useLanguage } from './LanguageProvider';

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
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
        {formatDate(education.startDate)} — {education.endDate ? formatDate(education.endDate) : t('card.ongoing')}
        {education.gpa && (
          <div className="mt-2 text-zinc-400 dark:text-zinc-500">
            GPA: {education.gpa}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-base font-medium tracking-tight">
          {education.institution}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          {loc(education.degree)} · {education.field}
        </p>
        {education.description && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed max-w-2xl">
            {loc(education.description)}
          </p>
        )}
      </div>
    </article>
  );
}

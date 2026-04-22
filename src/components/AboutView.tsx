'use client';

import Link from 'next/link';
import { Mail, Download, MapPin } from 'lucide-react';
import EducationCard from '@/components/EducationCard';
import ExperienceCard from '@/components/ExperienceCard';
import { personalInfo, education, experiences } from '@/data';
import { useLanguage } from './LanguageProvider';

export default function AboutView() {
  const { t, loc } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-24">
      <section className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-10 md:gap-16 mb-20">
        <div>
          {personalInfo.profileImage ? (
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.name}`}
              className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 border hairline"
            />
          ) : (
            <div className="w-40 h-40 md:w-44 md:h-44 bg-zinc-100 dark:bg-zinc-900 border hairline rounded-full flex items-center justify-center text-5xl font-medium text-zinc-400">
              {personalInfo.name.charAt(0)}
            </div>
          )}
        </div>

        <div>
          <p className="label mb-4">{t('about.label')}</p>

          <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            {personalInfo.name}
          </h1>

          <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 mb-8">
            {loc(personalInfo.title)}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-primary-500" />
              {loc(personalInfo.location)}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <Mail size={14} className="text-primary-500" />
              {personalInfo.email}
            </a>
          </div>

          <div className="prose-base text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4 max-w-2xl">
            <p>{loc(personalInfo.bio)}.</p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('about.bioExtra')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-zinc-900 dark:text-zinc-50 border-b border-zinc-900 dark:border-zinc-50 pb-0.5 hover:text-primary-600 hover:border-primary-600 dark:hover:text-primary-400 dark:hover:border-primary-400 transition-colors"
            >
              <Mail size={14} />
              {t('about.contact')}
            </Link>
            <button className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              <Download size={14} />
              {t('about.downloadCv')}
            </button>
          </div>
        </div>
      </section>

      <section className="mb-20 border-t hairline pt-16">
        <p className="label mb-8">{t('about.experience')}</p>
        <div className="space-y-0">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section className="mb-20 border-t hairline pt-16">
        <p className="label mb-8">{t('about.education')}</p>
        <div className="space-y-0">
          {education.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </section>

      <section className="border-t hairline pt-16">
        <p className="label mb-8">{t('about.skills')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm font-medium mb-4 text-zinc-900 dark:text-zinc-100">
              {t('about.frontend')}
            </h3>
            <ul className="font-mono text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-zinc-900 dark:text-zinc-100">
              {t('about.mobile')}
            </h3>
            <ul className="font-mono text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5">
              {['Flutter', 'Dart', 'Firebase', 'MQTT'].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-zinc-900 dark:text-zinc-100">
              {t('about.embeddedTools')}
            </h3>
            <ul className="font-mono text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5">
              {['ESP-IDF', 'MicroPython', 'Git', 'Docker', 'Vercel'].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

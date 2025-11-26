import { Experience } from '@/types';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="glass p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {experience.position}
          </h3>
          <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
            {experience.company}
          </h4>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5 mb-1">
            <Calendar size={14} className="text-primary-500" />
            <span>
              {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Devam Ediyor'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary-500" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full border border-primary-100 dark:border-primary-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

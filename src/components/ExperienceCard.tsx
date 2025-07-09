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
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 p-6 hover:border-gray-300 dark:hover:border-gray-600">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {experience.position}
          </h3>
          <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
            {experience.company}
          </h4>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1 mb-1">
            <Calendar size={14} />
            <span>
              {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Devam Ediyor'}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {experience.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

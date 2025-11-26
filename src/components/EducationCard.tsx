import { Education } from '@/types';
import { Calendar, GraduationCap } from 'lucide-react';

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="group glass rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary-500/10" />

      <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
        <div className="flex-shrink-0">
          <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-2xl text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
            <GraduationCap className="w-8 h-8" />
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {education.degree}
              </h3>
              <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                {education.institution}
              </h4>
            </div>

            <div className="flex flex-col md:items-end gap-1 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                <Calendar size={14} />
                <span>
                  {formatDate(education.startDate)} - {education.endDate ? formatDate(education.endDate) : 'Devam Ediyor'}
                </span>
              </div>
              {education.gpa && (
                <div className="font-medium text-primary-600 dark:text-primary-400 px-3 py-1">
                  GPA: {education.gpa}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {education.field}
            </p>
          </div>

          {education.description && (
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/50 pt-4">
              {education.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

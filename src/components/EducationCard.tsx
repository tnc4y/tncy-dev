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
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 p-6 hover:border-gray-300 dark:hover:border-gray-600">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {education.degree}
            </h3>
            <h4 className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-1">
              {education.institution}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              {education.field}
            </p>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
          <div className="flex items-center gap-1 mb-1">
            <Calendar size={14} />
            <span>
              {formatDate(education.startDate)} - {education.endDate ? formatDate(education.endDate) : 'Devam Ediyor'}
            </span>
          </div>
          {education.gpa && (
            <div className="font-medium text-gray-700 dark:text-gray-300">
              GPA: {education.gpa}
            </div>
          )}
        </div>
      </div>
      
      {education.description && (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {education.description}
        </p>
      )}
    </div>
  );
}

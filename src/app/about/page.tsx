import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Download, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import { personalInfo, experiences, education } from '@/data';

export const metadata: Metadata = {
  title: 'Hakkımda',
  description: 'Deneyimlerim, eğitim geçmişim ve kişisel bilgilerim.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Profile Image Placeholder */}
            <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              {personalInfo.name.charAt(0)}
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {personalInfo.name}
              </h1>
              
              <h2 className="text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                {personalInfo.title}
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Mail size={16} />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Mail size={18} />
                  İletişime Geç
                </Link>
                
                <button className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium">
                  <Download size={18} />
                  CV İndir
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Deneyimlerim
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Profesyonel iş geçmişim
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <GraduationCap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Eğitim
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Akademik geçmişim
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}
            </div>
          </section>
        </div>

        {/* Skills Section */}
        <section className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Teknik Yetenekler
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Tools & Others
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Vercel', 'Figma'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

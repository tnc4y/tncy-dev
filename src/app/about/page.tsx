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
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <section className="glass rounded-3xl p-8 md:p-12 mb-16 animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Profile Image Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} profil fotoğrafı`}
                  className="relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                />
              ) : (
                <div className="relative w-48 h-48 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white dark:border-gray-800">
                  {personalInfo.name.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {personalInfo.name}
              </h1>

              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 font-bold mb-6">
                {personalInfo.title}
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <MapPin size={18} className="text-primary-500" />
                  <span>{personalInfo.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Mail size={18} className="text-primary-500" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
                {personalInfo.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/25 font-medium"
                >
                  <Mail size={20} />
                  İletişime Geç
                </Link>

                <button className="flex items-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium">
                  <Download size={20} />
                  CV İndir
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Experience Section */}
          <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl text-green-600 dark:text-green-400">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Deneyimlerim
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
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
          <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Eğitim
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
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
        <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Teknik Yetenekler
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-xl border border-blue-100 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-xl border border-green-100 dark:border-green-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                  Tools & Others
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'Docker', 'AWS', 'Vercel', 'Figma'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-xl border border-purple-100 dark:border-purple-800"
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

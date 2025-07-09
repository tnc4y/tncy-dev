
import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';
import { Code, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projeler',
  description: 'Tüm projelerim ve çalışmalarım. Modern web teknolojileri ile geliştirdiğim uygulamalar.',
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  // Teknoloji etiketlerini topla
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Code className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projelerim
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Modern web teknolojileri kullanarak geliştirdiğim projeler. Her biri farklı 
            teknolojiler ve yaklaşımlar ile oluşturulmuş, gerçek dünya problemlerine çözümler sunan uygulamalar.
          </p>
        </div>

        {/* Technology Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Kullanılan Teknolojiler
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              ⭐ Öne Çıkan Projeler
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Diğer Projeler
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Henüz proje eklenmemiş
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yakında buraya yeni projeler eklenecek.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

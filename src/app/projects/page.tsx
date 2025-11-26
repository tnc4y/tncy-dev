
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
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex justify-center mb-6">
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-2xl text-primary-600 dark:text-primary-400 animate-fade-in">
              <Code className="w-10 h-10" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Projelerim
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Modern web teknolojileri kullanarak geliştirdiğim projeler. Her biri farklı
            teknolojiler ve yaklaşımlar ile oluşturulmuş, gerçek dünya problemlerine çözümler sunan uygulamalar.
          </p>
        </div>

        {/* Technology Filter */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Kullanılan Teknolojiler
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <span className="text-yellow-500">⭐</span> Öne Çıkan Projeler
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
          <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
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
          <div className="text-center py-20 glass rounded-3xl">
            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Henüz proje eklenmemiş
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yakında buraya yeni projeler eklenecek.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

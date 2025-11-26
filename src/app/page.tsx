import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, Code, Coffee, Heart } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import { personalInfo, projects } from '@/data';
import { getAllPosts } from '@/lib/blog';

export default function HomePage() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-950/20 dark:to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium animate-fade-in">
              👋 Portfolyoma Hoşgeldiniz
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight animate-slide-up">
              Merhaba, Ben{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {personalInfo.title}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {personalInfo.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 font-medium"
              >
                <Code size={20} />
                Projelerimi Görüntüle
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium"
              >
                <Mail size={20} />
                İletişime Geç
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {personalInfo.socialLinks.github && (
                <Link
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Github size={24} />
                </Link>
              )}

              {personalInfo.socialLinks.linkedin && (
                <Link
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Linkedin size={24} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Öne Çıkan Projeler
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                En son üzerinde çalıştığım ve gururla sunduğum projeler
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group"
            >
              Tümünü Gör
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              Tüm Projeleri Görüntüle
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Son Blog Yazıları
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Web geliştirme, teknoloji ve deneyimlerim hakkında yazdığım yazılar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow hover:shadow-md transition-all text-gray-900 dark:text-white font-medium group"
            >
              Tüm Yazıları Oku
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <Code className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {projects.length}+
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Tamamlanan Proje</p>
            </div>

            <div className="glass p-8 rounded-2xl text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                  <Coffee className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {recentPosts.length}+
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Blog Yazısı</p>
            </div>

            <div className="glass p-8 rounded-2xl text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-full text-pink-600 dark:text-pink-400">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                5+
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Yıl Deneyim</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

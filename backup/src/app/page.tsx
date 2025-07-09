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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Merhaba, Ben{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {personalInfo.title}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/projects"
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Code size={20} />
                Projelerimi Görüntüle
                <ArrowRight size={16} />
              </Link>
              
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                <Mail size={20} />
                İletişime Geç
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {personalInfo.socialLinks.github && (
                <Link
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github size={24} />
                </Link>
              )}
              
              {personalInfo.socialLinks.linkedin && (
                <Link
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin size={24} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Öne Çıkan Projeler
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              En son üzerinde çalıştığım ve gururla sunduğum projeler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Tüm Projeleri Görüntüle
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Son Blog Yazıları
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Tüm Blog Yazılarını Görüntüle
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <Code className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {projects.length}+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Tamamlanan Proje</p>
            </div>
            
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <Coffee className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {recentPosts.length}+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Blog Yazısı</p>
            </div>
            
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                5+
              </h3>
              <p className="text-gray-600 dark:text-blue-400">Yıl Deneyim</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

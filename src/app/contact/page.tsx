import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Benimle iletişime geçin. Projeleriniz ve iş birliği fırsatları için ulaşabilirsiniz.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex justify-center mb-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 animate-fade-in">
              <Mail className="w-10 h-10" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            İletişim
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz.
            Projeleriniz ve iş birliği fırsatları için her zaman açığım.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Email */}
          <div className="glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4 text-blue-600 dark:text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                E-posta
              </h3>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-lg transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Phone */}
          <div className="glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-xl mr-4 text-green-600 dark:text-green-400">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Telefon
              </h3>
            </div>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-lg transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>

          {/* Location */}
          <div className="glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-xl mr-4 text-red-600 dark:text-red-400">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Konum
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              {personalInfo.location}
            </p>
          </div>

          {/* Website */}
          {personalInfo.socialLinks.website && (
            <div className="glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl mr-4 text-purple-600 dark:text-purple-400">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Website
                </h3>
              </div>
              <a
                href={personalInfo.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-lg transition-colors"
              >
                {personalInfo.socialLinks.website}
              </a>
            </div>
          )}
        </div>

        {/* Social Media */}
        <div className="glass rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Sosyal Medya
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {/* GitHub */}
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-4 rounded-xl transition-all hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                  GitHub
                </span>
              </a>
            )}

            {/* LinkedIn */}
            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 px-6 py-4 rounded-xl transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  LinkedIn
                </span>
              </a>
            )}

            {/* Twitter */}
            {personalInfo.socialLinks.twitter && (
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-sky-50 dark:bg-sky-900/20 hover:bg-sky-100 dark:hover:bg-sky-900/40 px-6 py-4 rounded-xl transition-all hover:-translate-y-1"
              >
                <Twitter className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                <span className="text-sky-600 dark:text-sky-400 font-medium">
                  Twitter
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
          >
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

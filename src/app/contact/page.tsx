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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Mail className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            İletişim
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Benimle iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz. 
            Projeleriniz ve iş birliği fırsatları için her zaman açığım.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                E-posta
              </h3>
            </div>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Telefon
              </h3>
            </div>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="text-green-600 dark:text-green-400 hover:underline text-lg"
            >
              {personalInfo.phone}
            </a>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Konum
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {personalInfo.location}
            </p>
          </div>

          {/* Website */}
          {personalInfo.socialLinks.website && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                  <ExternalLink className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Website
                </h3>
              </div>
              <a 
                href={personalInfo.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline text-lg"
              >
                {personalInfo.socialLinks.website}
              </a>
            </div>
          )}
        </div>

        {/* Social Media */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Sosyal Medya
          </h3>
          
          <div className="flex justify-center space-x-6">
            {/* GitHub */}
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-6 py-4 rounded-lg transition-colors"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
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
                className="group flex items-center space-x-3 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 px-6 py-4 rounded-lg transition-colors"
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
                className="group flex items-center space-x-3 bg-sky-100 dark:bg-sky-900 hover:bg-sky-200 dark:hover:bg-sky-800 px-6 py-4 rounded-lg transition-colors"
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
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

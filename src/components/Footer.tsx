import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-16 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
            Bir projeniz mi var?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 relative z-10">
            Fikirlerinizi hayata geçirmek için birlikte çalışalım. Modern teknolojiler ve yaratıcı çözümlerle projenizi bir sonraki seviyeye taşıyalım.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/25 font-medium relative z-10 hover:-translate-y-0.5"
          >
            <Mail size={20} />
            Hemen İletişime Geçin
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6 group w-fit">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 group-hover:from-purple-600 group-hover:to-primary-600 transition-all duration-500">
                  tncy.dev
                </span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mb-8">
              Web ve mobil dünyasında modern, kullanıcı dostu ve performanslı çözümler üretiyorum.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://github.com/tnc4y"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/tnc4y"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com/tnc4y"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-[#1da1f2] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="mailto:tnc4yy@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-6">Hızlı Linkler</h3>
            <ul className="space-y-4">
              {[
                { href: '/about', label: 'Hakkımda' },
                { href: '/projects', label: 'Projeler' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'İletişim' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-primary-600 dark:group-hover:bg-primary-400 transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-6">İletişim</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p className="leading-relaxed">
                Adana, Türkiye
              </p>
              <a href="mailto:tnc4yy@gmail.com" className="block hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                tnc4yy@gmail.com
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all mt-2"
              >
                Bana Ulaşın
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} tncy.dev. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-current animate-pulse-slow" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

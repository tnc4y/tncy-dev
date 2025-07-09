import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                Tuncay<span className="text-blue-400">.dev</span>
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Modern web teknolojileri ile ilgili yazılarım ve projelerim. 
              Full-stack geliştirme, JavaScript, TypeScript ve daha fazlası.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Sosyal Medya</h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="https://github.com/tuncay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github size={18} />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/tuncay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/tuncay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={18} />
                Twitter
              </Link>
              <Link
                href="mailto:tuncay@example.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                Email
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Tuncay. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1 text-gray-300 text-sm mt-2 md:mt-0">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

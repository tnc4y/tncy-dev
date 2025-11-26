'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mb-4 animate-pulse-slow">
            404
          </h1>
          <div className="absolute -inset-10 bg-primary-500/20 blur-3xl rounded-full -z-10"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Sayfa Bulunamadı
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-md mx-auto leading-relaxed">
          Aradığınız sayfa mevcut değil. Silinmiş, taşınmış veya geçici olarak kullanılamıyor olabilir.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/25 font-medium"
          >
            <Home size={20} />
            Ana Sayfaya Dön
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Geri Dön
          </button>
        </div>

        <div className="glass rounded-2xl p-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            Popüler Sayfalar
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link
              href="/about"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all shadow-sm"
            >
              Hakkımda
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all shadow-sm"
            >
              Projeler
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all shadow-sm"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all shadow-sm"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

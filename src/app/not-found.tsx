import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Sayfa Bulunamadı
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil. Silinmiş, taşınmış veya geçici olarak kullanılamıyor olabilir.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Home size={18} />
            Ana Sayfaya Dön
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Geri Dön
          </button>
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popüler Sayfalar
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Hakkımda
            </Link>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Projeler
            </Link>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

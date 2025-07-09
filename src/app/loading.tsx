export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 dark:border-blue-400 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Yükleniyor...
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Sayfa hazırlanıyor, lütfen bekleyin.
        </p>
      </div>
    </div>
  );
}

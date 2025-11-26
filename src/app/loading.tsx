export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-900 rounded-full mx-auto"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 border-4 border-primary-600 dark:border-primary-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 animate-pulse">
          Yükleniyor...
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Lütfen bekleyin
        </p>
      </div>
    </div>
  );
}

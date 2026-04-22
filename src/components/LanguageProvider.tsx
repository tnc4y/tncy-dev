'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { Locale, Localized } from '@/types';
import { defaultLocale, lookup, loc, type TranslationKey } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey, vars?: Record<string, string>) => string;
  loc: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved === 'tr' || saved === 'en') {
      setLocale(saved);
    } else if (typeof navigator !== 'undefined') {
      const sys = navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
      setLocale(sys);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('locale', locale);
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const t = (key: TranslationKey, vars?: Record<string, string>): string => {
    const entry = lookup(key);
    if (!entry) return key;
    let str = loc(entry, locale);
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      }
    }
    return str;
  };

  const value: LanguageContextType = {
    locale,
    setLocale,
    toggleLocale: () => setLocale(locale === 'tr' ? 'en' : 'tr'),
    t,
    loc: (value: Localized) => loc(value, locale),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

import type { Locale, Localized } from '@/types';

export const locales: Locale[] = ['tr', 'en'];
export const defaultLocale: Locale = 'tr';

export function loc(value: Localized, locale: Locale): string {
  if (typeof value === 'string') return value;
  return value[locale] ?? value.tr;
}

export const dict = {
  nav: {
    home: { tr: 'Ana Sayfa', en: 'Home' },
    about: { tr: 'Hakkımda', en: 'About' },
    projects: { tr: 'Projeler', en: 'Projects' },
    blog: { tr: 'Blog', en: 'Blog' },
    contact: { tr: 'İletişim', en: 'Contact' },
  },
  home: {
    available: { tr: 'Yeni projelere açık', en: 'Open to new work' },
    bioSuffix: {
      tr: '. {location} merkezli, web ve mobil için ürünler kuruyorum.',
      en: '. Based in {location}, building products for web and mobile.',
    },
    viewProjects: { tr: 'Projelere bak', en: 'See projects' },
    selectedWork: { tr: 'Seçilmiş işler', en: 'Selected work' },
    workingOn: { tr: 'Üzerinde çalıştığım projeler', en: 'Things I am working on' },
    all: { tr: 'Tümü', en: 'All' },
    allProjects: { tr: 'Tüm projeler', en: 'All projects' },
    posts: { tr: 'Yazılar', en: 'Writing' },
    recentNotes: { tr: 'Son notlar', en: 'Recent notes' },
    allPosts: { tr: 'Tüm yazılar', en: 'All posts' },
  },
  about: {
    label: { tr: 'Hakkımda', en: 'About' },
    bioExtra: {
      tr: 'Çukurova Üniversitesi\'nde Bilgisayar Mühendisliği okuyorum. Vaktimin çoğunu mobil/web tarafında küçük ürünler kurarak ve gömülü sistemlerle uğraşarak geçiriyorum.',
      en: 'I study Computer Engineering at Çukurova University. Most of my time goes into building small products on web and mobile, and tinkering with embedded systems.',
    },
    contact: { tr: 'İletişime geç', en: 'Get in touch' },
    downloadCv: { tr: 'CV indir', en: 'Download CV' },
    experience: { tr: 'Deneyim', en: 'Experience' },
    education: { tr: 'Eğitim', en: 'Education' },
    skills: { tr: 'Yetenekler', en: 'Skills' },
    frontend: { tr: 'Frontend', en: 'Frontend' },
    mobile: { tr: 'Mobile', en: 'Mobile' },
    embeddedTools: { tr: 'Embedded & Tools', en: 'Embedded & Tools' },
  },
  projects: {
    label: { tr: 'Projeler', en: 'Projects' },
    title: {
      tr: 'Çalıştığım, dokunduğum, tamamladığım şeyler.',
      en: 'Things I have shipped, touched, or finished.',
    },
    intro: {
      tr: 'Çoğunluğu mobil ve web tarafında. Bazıları üretimde, bazıları hâlâ geliştirme aşamasında.',
      en: 'Mostly mobile and web. Some live in production, some still under development.',
    },
    technologies: { tr: 'Teknolojiler', en: 'Technologies' },
    selected: { tr: 'Seçilmiş işler', en: 'Selected' },
    others: { tr: 'Diğerleri', en: 'Others' },
    empty: { tr: 'Henüz proje eklenmemiş', en: 'No projects yet' },
    emptyDesc: { tr: 'Yakında buraya yeni projeler eklenecek.', en: 'New projects will be added here soon.' },
  },
  blog: {
    label: { tr: 'Blog', en: 'Blog' },
    title: {
      tr: 'Notlar, denemeler, kısa yazılar.',
      en: 'Notes, experiments, short essays.',
    },
    intro: {
      tr: 'Web geliştirme, mobil ve aklıma takılan teknik konular hakkında zaman zaman yazıyorum.',
      en: 'I occasionally write about web, mobile, and whatever technical topic catches my attention.',
    },
    topics: { tr: 'Konular', en: 'Topics' },
    selected: { tr: 'Seçilmişler', en: 'Selected' },
    allPosts: { tr: 'Tüm yazılar', en: 'All posts' },
    empty: { tr: 'Henüz blog yazısı eklenmemiş', en: 'No posts yet' },
    emptyDesc: { tr: 'Yakında buraya yeni yazılar eklenecek.', en: 'New posts will be added here soon.' },
    backTo: { tr: '← Diğer yazılara dön', en: '← Back to all posts' },
    minRead: { tr: 'dk okuma', en: 'min read' },
    minShort: { tr: 'dk', en: 'min' },
    featured: { tr: 'Seçilmiş', en: 'Featured' },
  },
  contact: {
    label: { tr: 'İletişim', en: 'Contact' },
    title: { tr: 'Bir mesaj at.', en: 'Drop a message.' },
    intro: {
      tr: 'Yeni proje, iş birliği veya sadece merhaba demek için. Genellikle birkaç gün içinde cevap veriyorum.',
      en: 'For new work, collaboration, or just saying hi. I usually respond within a few days.',
    },
    email: { tr: 'E-posta', en: 'Email' },
    phone: { tr: 'Telefon', en: 'Phone' },
    location: { tr: 'Konum', en: 'Location' },
    backHome: { tr: '← Ana sayfaya dön', en: '← Back to home' },
  },
  notFound: {
    code: { tr: '404', en: '404' },
    title: { tr: 'Sayfa bulunamadı.', en: 'Page not found.' },
    intro: {
      tr: 'Aradığın şey burada değil — silinmiş, taşınmış veya hiç var olmamış olabilir.',
      en: "What you're looking for isn't here — it may have been removed, moved, or never existed.",
    },
    suggestions: { tr: 'Bunlardan biri olabilir', en: 'You might be looking for' },
    home: { tr: '→ Ana sayfa', en: '→ Home' },
    projects: { tr: '→ Projeler', en: '→ Projects' },
    blog: { tr: '→ Blog', en: '→ Blog' },
    contact: { tr: '→ İletişim', en: '→ Contact' },
  },
  loading: { tr: 'Yükleniyor…', en: 'Loading…' },
  footer: {
    tagline: { tr: "Adana'dan; web ve mobil için ürünler kuruyorum.", en: 'From Adana; building products for web and mobile.' },
    rights: { tr: 'Tüm hakları saklıdır', en: 'All rights reserved' },
  },
  card: {
    source: { tr: 'Kaynak', en: 'Source' },
    demo: { tr: 'Demo', en: 'Demo' },
    ongoing: { tr: 'devam', en: 'present' },
  },
  langToggle: {
    aria: { tr: "Dili değiştir", en: 'Change language' },
  },
  themeToggle: {
    toLight: { tr: "Light mode'a geç", en: 'Switch to light mode' },
    toDark: { tr: "Dark mode'a geç", en: 'Switch to dark mode' },
  },
} as const;

type Dict = typeof dict;
type DotKeys<T, P extends string = ''> = {
  [K in keyof T]: T[K] extends Localized
    ? `${P}${K & string}`
    : T[K] extends object
      ? DotKeys<T[K], `${P}${K & string}.`>
      : never;
}[keyof T];

export type TranslationKey = DotKeys<Dict>;

export function lookup(key: string): Localized | undefined {
  const parts = key.split('.');
  let cur: any = dict;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) cur = cur[p];
    else return undefined;
  }
  return cur as Localized;
}

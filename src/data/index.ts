import { PersonalInfo, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Tuncay",
  profileImage: "https://tncy-dev.vercel.app/profile.jpeg",
  title: {
    tr: "Web ve Mobil Geliştirici",
    en: "Web and Mobile Developer",
  },
  email: "hi@tncy.dev",
  location: {
    tr: "Adana, Türkiye",
    en: "Adana, Türkiye",
  },
  bio: {
    tr: "Websitesi ve Mobil Uygulama geliştiriyorum",
    en: "I build websites and mobile applications",
  },
  socialLinks: {
    github: "https://github.com/tnc4y",
    linkedin: "https://linkedin.com/in/tnc4y",
    website: "https://tncy.dev"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "1.5 Adana Teknoloji Takımları Mobil Uygulaması",
    description: {
      tr: "İşkur Gençlik Programı Kapsamında 1.5 Adana Teknoloji Takımları için Tanıtım ve Duyuru uygulaması geliştirdim",
      en: "Built a promotional and announcement app for 1.5 Adana Technology Teams as part of the İşkur Youth Program.",
    },
    technologies: ["Flutter", "Firebase", "Dart"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.birbucukadana",
    githubUrl: "https://github.com/tnc4y/1.5-Adana-Mobil-Uygulama",
    featured: true
  },
  {
    id: "2",
    title: "Chaemi: Mobile IoT Development",
    description: {
      tr: "Chaemi, IoT geliştiricileri için mobil uygulama ile Esp32 tabanlı cihazların cloud üzerinden kolayca yönetilmesini sağlayan bir platformdur. Proje geliştirme sürecindedir.",
      en: "Chaemi is a platform that lets IoT developers manage ESP32-based devices over the cloud through a mobile app. The project is currently under development.",
    },
    technologies: ["Flutter", "Dart", "ESP-IDF", "MicroPython", "mqtt"],
    featured: true
  },
  {
    id: "3",
    title: "AdanaBus",
    description: {
      tr: "Adana toplu taşıması için gerçek zamanlı otobüs takip uygulaması. Harita üzerinde canlı araç konumu, durak bazlı analiz, yakın durakların kümelenmesi ve canlı veriye dayalı seyahat planlama sunuyor. Adana Akıllı Şehir API'si ve Kentkart Path API'si ile entegre.",
      en: "Real-time public bus tracking app for Adana. Live vehicle positions on the map, stop-focused analysis, clustered nearby alternatives, and trip planning based on live data. Integrates Adana Smart City and Kentkart Path APIs.",
    },
    technologies: ["Flutter", "Dart"],
    demoUrl: "https://github.com/tnc4y/adanabus/releases/tag/android",
    githubUrl: "https://github.com/tnc4y/adanabus",
    featured: true
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "İşkur & Çukurova Üniversitesi",
    position: {
      tr: "Yarı Zamanlı Mobil Geliştirici",
      en: "Part-time Mobile Developer",
    },
    startDate: "2025-11",
    description: {
      tr: "1.5 Adana Teknoloji Takımları için mobil uygulama geliştirdim ilk iş deneyimimdi.",
      en: "Developed a mobile application for 1.5 Adana Technology Teams — my first professional experience.",
    },
    technologies: ["Flutter", "Firebase", "Dart", "Nextjs", "TypeScript"],
    location: "Adana, Türkiye"
  },
  {
    id: "2",
    company: "Çukurova Üniversitesi",
    position: {
      tr: "Gömülü Sistem Geliştiricisi — 1.5 Adana Formula Student Takımı",
      en: "Embedded Systems Developer — 1.5 Adana Formula Student Team",
    },
    startDate: "2026-4",
    description: {
      tr: "1.5 Adana Formula Student takımında elektrikli yarış aracı için gömülü sistemler tarafında çalışıyorum.",
      en: "Working on embedded systems for the electric race car at the 1.5 Adana Formula Student team.",
    },
    technologies: ["C", "C++", "ESP-IDF", "STM32"],
    location: "Adana, Türkiye"
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Çukurova Üniversitesi",
    degree: {
      tr: "Lisans",
      en: "Bachelor's Degree",
    },
    field: "Computer Science",
    startDate: "2024-09",
    endDate: "2028-06",
    description: {
      tr: "Gömülü sistemler, mikroişlemciler, dijital sinyal işleme, kontrol sistemleri ve elektronik devre tasarımı üzerine kapsamlı eğitim.",
      en: "Coursework across embedded systems, microprocessors, digital signal processing, control systems, and electronic circuit design.",
    },
    gpa: "3.2/4.0"
  }
];

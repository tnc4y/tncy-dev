import { PersonalInfo, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Tuncay",
  profileImage: "https://tncy-dev.vercel.app/profile.jpeg",
  title: "Web and Mobile Developer",
  email: "tnc4yy@gmail.com",
  location: "Adana, Türkiye",
  bio: "Websitesi ve Mobil Uygulama geliştiriyorum",
  socialLinks: {
    github: "https://github.com/tnc4y",
    linkedin: "https://linkedin.com/in/tnc4y",
    twitter: "https://twitter.com/tnc4y",
    website: "https://tncy.dev"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "1.5 Adana Teknoloji Takımları Mobil Uygulaması",
    description: "İşkur Gençlik Programı Kapsamında 1.5 Adana Teknoloji Takımları için Tanıtım ve Duyuru uygulaması geliştirdim",
    technologies: ["Flutter", "Firebase", "Dart"],
    demoUrl: "https://smart-home-demo.com",
    githubUrl: "https://github.com/tnc4y/",
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "İşkur & Çukurova Üniversitesi",
    position: "Part-time Mobile Developer",
    startDate: "2025-11",
    description: "1.5 Adana Teknoloji Takımları için mobil uygulama geliştirdim ilk iş deneyimimdi.",
    technologies: ["Flutter", "Firebase", "Dart", "Nextjs", "TypeScript"],
    location: "Adana, Türkiye"
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Çukurova Üniversitesi",
    degree: "Lisans",
    field: "Computer Science",
    startDate: "2024-09",
    endDate: "2028-06",
    description: "Gömülü sistemler, mikroişlemciler, dijital sinyal işleme, kontrol sistemleri ve elektronik devre tasarımı üzerine kapsamlı eğitim.",
    gpa: "3.2/4.0"
  },
  {
    id: "2",
    institution: "Espressif Systems",
    degree: "Sertifika",
    field: "ESP32 Advanced Development",
    startDate: "2023-01",
    endDate: "2023-03",
    description: "ESP32 serisi mikrokontrolcüler için gelişmiş geliştirme teknikleri, WiFi/Bluetooth implementasyonu ve güç yönetimi."
  },
  {
    id: "3",
    institution: "STMicroelectronics",
    degree: "Sertifika",
    field: "STM32 Professional Development",
    startDate: "2022-06",
    endDate: "2022-08",
    description: "STM32 mikrokontrolcüler için profesyonel firmware geliştirme, HAL kütüphaneleri ve real-time sistemler."
  },
  {
    id: "4",
    institution: "Matter Alliance",
    degree: "Sertifika",
    field: "Matter Protocol Specialist",
    startDate: "2023-09",
    endDate: "2023-11",
    description: "Matter protokolü, Thread ağları ve akıllı ev cihazları için interoperabilite standartları."
  }
];

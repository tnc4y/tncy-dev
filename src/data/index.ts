import { PersonalInfo, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Tuncay",
  profileImage: "https://tncy-dev.vercel.app/profile.jpeg",
  title: "Web and Mobile Developer",
  email: "hi@tncy.dev",
  location: "Adana, Türkiye",
  bio: "Websitesi ve Mobil Uygulama geliştiriyorum",
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
    description: "İşkur Gençlik Programı Kapsamında 1.5 Adana Teknoloji Takımları için Tanıtım ve Duyuru uygulaması geliştirdim",
    technologies: ["Flutter", "Firebase", "Dart"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.birbucukadana",
    githubUrl: "https://github.com/tnc4y/1.5-Adana-Mobil-Uygulama",
    featured: true
  },
  {
    id: "2",
    title: "Chaemi: Mobile IoT Development",
    description: "Chaemi, IoT geliştiricileri için mobil uygulama ile Esp32 tabanlı cihazların cloud üzerinden kolayca yönetilmesini sağlayan bir platformdur. Proje geliştirme sürecindedir.",
    technologies: ["Flutter", "Dart", "ESP-IDF", "MicroPython", "mqtt", ],
    featured: true
  },
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
  }
];

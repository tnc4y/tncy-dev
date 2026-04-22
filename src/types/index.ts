export type Locale = 'tr' | 'en';

export type Localized = string | { tr: string; en: string };

export interface Project {
  id: string;
  title: string;
  description: Localized;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: Localized;
  startDate: string;
  endDate?: string;
  description: Localized;
  technologies: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: Localized;
  field: string;
  startDate: string;
  endDate?: string;
  description?: Localized;
  gpa?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  readingTime: number;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  title: Localized;
  email: string;
  phone?: string;
  location: Localized;
  bio: Localized;
  profileImage?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

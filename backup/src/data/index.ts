import { PersonalInfo, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Tuncay",
  title: "Full Stack Developer",
  email: "tuncay@example.com",
  location: "İstanbul, Türkiye",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and sharing knowledge through my blog.",
  socialLinks: {
    github: "https://github.com/tuncay",
    linkedin: "https://linkedin.com/in/tuncay",
    twitter: "https://twitter.com/tuncay",
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern bir e-ticaret platformu. Next.js, TypeScript ve Stripe entegrasyonu ile geliştirildi.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/tuncay/ecommerce-platform",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Takım çalışması için geliştirilmiş modern task management uygulaması.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    demoUrl: "https://taskapp-demo.com",
    githubUrl: "https://github.com/tuncay/task-management",
    featured: true
  },
  {
    id: "3",
    title: "Blog CMS",
    description: "Markdown destekli blog yönetim sistemi. Syntax highlighting ve SEO optimizasyonu içerir.",
    technologies: ["Next.js", "MDX", "Prisma", "SQLite", "Vercel"],
    githubUrl: "https://github.com/tuncay/blog-cms",
    featured: false
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Gerçek zamanlı hava durumu dashboard'u. Multiple API entegrasyonu ile geliştirildi.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Styled Components"],
    demoUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/tuncay/weather-dashboard",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp",
    position: "Senior Frontend Developer",
    startDate: "2022-03",
    description: "Led frontend development team, implemented modern React applications with TypeScript and Next.js. Improved application performance by 40% and mentored junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    location: "İstanbul, Türkiye"
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    startDate: "2020-06",
    endDate: "2022-02",
    description: "Developed complete web applications from scratch. Built RESTful APIs, implemented authentication systems, and created responsive user interfaces.",
    technologies: ["Node.js", "Express", "React", "MongoDB", "AWS"],
    location: "İstanbul, Türkiye"
  },
  {
    id: "3",
    company: "DigitalAgency",
    position: "Frontend Developer",
    startDate: "2019-01",
    endDate: "2020-05",
    description: "Created responsive websites and web applications for various clients. Collaborated with design team to implement pixel-perfect UIs.",
    technologies: ["JavaScript", "Vue.js", "SASS", "WordPress", "PHP"],
    location: "İstanbul, Türkiye"
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "İstanbul Teknik Üniversitesi",
    degree: "Lisans",
    field: "Bilgisayar Mühendisliği",
    startDate: "2015-09",
    endDate: "2019-06",
    description: "Computer Science fundamentals, algorithms, data structures, software engineering principles.",
    gpa: "3.2/4.0"
  },
  {
    id: "2",
    institution: "Online Certification",
    degree: "Sertifika",
    field: "Full Stack Web Development",
    startDate: "2019-07",
    endDate: "2019-12",
    description: "Comprehensive full-stack development course covering modern web technologies and best practices."
  }
];

import { Metadata } from 'next';
import ProjectsView from '@/components/ProjectsView';

export const metadata: Metadata = {
  title: 'Projeler · Projects',
  description: 'Tüm projelerim ve çalışmalarım.',
};

export default function ProjectsPage() {
  return <ProjectsView />;
}

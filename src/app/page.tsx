import HomeView from '@/components/HomeView';
import { projects } from '@/data';
import { getAllPosts } from '@/lib/blog';

export default function HomePage() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);
  const recentPosts = getAllPosts().slice(0, 3);

  return <HomeView featuredProjects={featuredProjects} recentPosts={recentPosts} />;
}

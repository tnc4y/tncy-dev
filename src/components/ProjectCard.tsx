import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600">
      {project.imageUrl && (
        <div className="aspect-video bg-gray-200 dark:bg-gray-700">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              <Github size={16} />
              GitHub
            </Link>
          )}
          
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  // Blog dizini yoksa boş array döndür
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const fullPath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      const slug = name.replace(/\.md$/, '');
      
      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || '',
        tags: data.tags || [],
        content,
        readingTime: Math.ceil(content.split(' ').length / 200), // Ortalama okuma hızı
        featured: data.featured || false,
      } as BlogPost;
    });

  // Tarihe göre sırala (en yeni önce)
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || '',
      tags: data.tags || [],
      content,
      readingTime: Math.ceil(content.split(' ').length / 200),
      featured: data.featured || false,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => 
    post.tags.some((postTag) => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  return [...new Set(tags)].sort();
}

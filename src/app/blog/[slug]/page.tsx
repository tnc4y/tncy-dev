import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import BlogContent from '@/components/BlogContent';
import { BlogPostMeta, BlogBackLink, BlogBackFooter } from '@/components/BlogPostChrome';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-24">
      <BlogBackLink />

      <header className="mb-12 pb-8 border-b hairline">
        <BlogPostMeta date={post.date} readingTime={post.readingTime} featured={post.featured} />

        <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
          {post.title}
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {post.description}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-8 font-mono text-sm">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${tag.toLowerCase()}`}
                className="text-zinc-500 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <BlogContent content={post.content} />
      </article>

      <footer className="mt-20 pt-8 border-t hairline">
        <BlogBackFooter />
      </footer>
    </div>
  );
}

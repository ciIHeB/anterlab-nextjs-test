// src/app/blog/[slug]/page.js
import { getPostBySlug, getAllSlugs } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllSlugs(); // equivalent of getStaticPaths
}

export default async function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </main>
  );
}

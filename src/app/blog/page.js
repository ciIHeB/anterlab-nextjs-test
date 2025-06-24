import Link from 'next/link';

async function getPosts() {
  return [
    {
      id: '1',
      slug: 'nextjs-13-new-features',
      title: 'Next.js 13 New Features',
      summary: 'Explore the latest features introduced in Next.js 13, including App Router.',
    },
    {
      id: '2',
      slug: 'static-site-generation',
      title: 'Understanding Static Site Generation',
      summary: 'Learn how static site generation (SSG) works in modern frameworks.',
    },
    {
      id: '3',
      slug: 'why-use-react',
      title: 'Why Choose React for Web Development?',
      summary: 'Discover the reasons React is still dominating the frontend ecosystem.',
    },
  ];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
              <p className="text-gray-600">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

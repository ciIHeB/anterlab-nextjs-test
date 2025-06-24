// src/lib/posts.js

export const posts = [
  {
    id: '1',
    slug: 'nextjs-13-new-features',
    title: 'Next.js 13 New Features',
    summary: 'Explore the latest features introduced in Next.js 13, including App Router.',
    content: 'Next.js 13 introduced the App Router, enhanced routing, server components, and layouts.',
  },
  {
    id: '2',
    slug: 'static-site-generation',
    title: 'Understanding Static Site Generation',
    summary: 'Learn how static site generation (SSG) works in modern frameworks.',
    content: 'Static Site Generation allows pre-rendering pages at build time for performance and SEO.',
  },
  {
    id: '3',
    slug: 'why-use-react',
    title: 'Why Choose React for Web Development?',
    summary: 'Discover the reasons React is still dominating the frontend ecosystem.',
    content: 'React is flexible, has a huge ecosystem, and is maintained by Meta. It’s great for SPAs.',
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getAllSlugs() {
  return posts.map((post) => ({ slug: post.slug }));
}

import { notFound } from "next/navigation";

const blogs = [
  {
    id: "1",
    title: "Yapay Zeka ile Blog Yazmak",
    content: "AI ile içerik üretiminin püf noktaları ve örnekler...",
  },
  {
    id: "2",
    title: "Next.js ile SSR ve SSG",
    content: "Modern web projelerinde SSR ve SSG farkları, avantajları...",
  },
];

interface BlogDetailProps {
  params: { id: string };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = blogs.find(b => b.id === params.id);
  if (!blog) return notFound();

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <div className="text-gray-800 text-lg">{blog.content}</div>
    </main>
  );
}

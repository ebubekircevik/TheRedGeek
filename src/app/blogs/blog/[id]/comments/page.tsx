interface BlogCommentsPageProps {
  params: { id: string };
}

export default function BlogCommentsPage({ params }: BlogCommentsPageProps) {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Comments for Blog {params.id}</h1>
      <p className="mb-4">
        This page will show comments for the selected blog post.
      </p>
    </main>
  );
}

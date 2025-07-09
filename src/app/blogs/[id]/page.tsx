import Link from "next/link";
import { getBlogPostById, getBlogPostsByCategory } from "@/lib/api/blogApi";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blog = await getBlogPostById(id);
  const relatedBlogsResponse = await getBlogPostsByCategory(blog.category);
  const relatedBlogs = relatedBlogsResponse.filter(
    item => item._id !== blog._id
  );

  if (!blog) {
    notFound();
  }

  // Convert markdown content to HTML (simple conversion)
  const formatContent = (content: string) => {
    return content
      .replace(
        /^# (.*$)/gim,
        '<h1 class="text-3xl font-bold mb-6 text-gray-900">$1</h1>'
      )
      .replace(
        /^## (.*$)/gim,
        '<h2 class="text-2xl font-bold mb-4 text-gray-900 mt-8">$1</h2>'
      )
      .replace(
        /^### (.*$)/gim,
        '<h3 class="text-xl font-bold mb-3 text-gray-900 mt-6">$1</h3>'
      )
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        '<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>'
      )
      .replace(
        /`([^`]+)`/g,
        '<code class="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm">$1</code>'
      )
      .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
      .replace(/^<p/, '<p class="mb-4 text-gray-700 leading-relaxed"');
  };

  const formattedContent = formatContent(blog.content);

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-red-600 transition-colors">
              Ana Sayfa
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-red-600 transition-colors"
            >
              Bloglar
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">{blog.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Hero Image */}
        {blog.imageUrl && (
          <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
            <div className="text-red-600 text-6xl">📝</div>
          </div>
        )}

        <div className="p-8">
          {/* Meta Information */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{blog.readTime} dk okuma</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">
              {new Date(blog.publishedAt).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">TR</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">{blog.author}</p>
              <p className="text-gray-500 text-sm">Teknoloji Yazarı</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-red-100 hover:text-red-700 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Bu Yazıyı Paylaş
            </h3>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Twitter
              </button>
              <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                LinkedIn
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Reddit
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Related Blogs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedBlogs.map(item => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link
                  href={`/blogs/${item._id}`}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Devamını Oku →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Daha Fazla İçerik İçin Abone Olun
        </h3>
        <p className="text-red-100 mb-6 max-w-md mx-auto">
          En yeni teknoloji yazılarımızdan haberdar olmak için bültenimize abone
          olun.
        </p>
        <div className="flex max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className="flex-1 px-4 py-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
          />
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
            Abone Ol
          </button>
        </div>
      </div>
    </main>
  );
}

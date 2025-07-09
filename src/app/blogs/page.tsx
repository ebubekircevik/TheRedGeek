import { getAllBlogPosts } from "@/lib/api/blogApi";
import BlogCard from "@/shared/components/BlogCard";
import FeaturedBlogCard from "@/shared/components/FeaturedBlogCard";
import NewsletterSignup from "@/shared/components/NewsletterSignup";

export default async function BlogsPage() {
  const blogs = await getAllBlogPosts();
  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Blog Posts</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Latest content about technology, programming and innovation
        </p>
      </div>

      {/* Featured Blog */}
      {blogs.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Featured Post
          </h2>
          <FeaturedBlogCard blog={blogs[0]} />
        </div>
      )}

      {/* All Blogs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.slice(1).map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </main>
  );
}

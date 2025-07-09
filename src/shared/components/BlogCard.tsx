import { BlogCardProps } from "@/types/blog";
import Link from "next/link";

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {blog.imageUrl && (
        <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
          <div className="text-red-600 text-4xl font-bold">📝</div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
            {blog.category}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500 text-sm">{blog.readTime} min</span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-xs">TR</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{blog.author}</p>
              <p className="text-xs text-gray-500">
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <Link
            href={`/blogs/${blog._id}`}
            className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
          >
            Read More →
          </Link>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-4">
          {blog.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { FeaturedBlogCardProps } from "@/types/blog";

export default function FeaturedBlogCard({ blog }: FeaturedBlogCardProps) {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            {blog.category}
          </span>
          <span className="text-red-100">•</span>
          <span className="text-red-100">{blog.readTime} min read</span>
        </div>
        <h3 className="text-3xl font-bold mb-4">{blog.title}</h3>
        <p className="text-xl text-red-100 mb-6 leading-relaxed">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm">TR</span>
            </div>
            <div>
              <p className="font-medium">{blog.author}</p>
              <p className="text-red-100 text-sm">
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <Link
            href={`/blogs/${blog._id}`}
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Blog } from "@/types/blog";
import { apiGet, apiPost, apiPut, apiDelete } from "@/api/_core/http";

export const getBlogs = () => apiGet<Blog[]>("/blogs");
export const createBlog = (blog: Omit<Blog, "_id">) => apiPost("/blogs", blog);
export const updateBlog = (id: string, blog: Partial<Blog>) =>
  apiPut(`/blogs/${id}`, blog);
export const deleteBlog = (id: string) => apiDelete(`/blogs/${id}`);

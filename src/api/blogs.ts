import { Blog } from "@/types/blog";
import { httpClient} from "@/api/_core/http";

export const getBlogs = () => httpClient.get<Blog[]>("/blogs");
export const createBlog = (blog: Omit<Blog, "_id">) => httpClient.post("/blogs", blog);
export const updateBlog = (id: string, blog: Partial<Blog>) =>
  httpClient.put(`/blogs/${id}`, blog);
export const deleteBlog = (id: string) => httpClient.delete(`/blogs/${id}`);

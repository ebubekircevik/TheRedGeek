import axiosInstance from "./axiosInstance";
import { BlogPost } from "@/types/blog";

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const res = await axiosInstance.get<BlogPost[]>("/blogs");
  return res.data;
};

export const getBlogPostById = async (id: string): Promise<BlogPost> => {
  const res = await axiosInstance.get<BlogPost>(`/blogs/${id}`);
  return res.data;
};

// Eğer API destekliyorsa, kategori ve arama fonksiyonları da eklenebilir
export const getBlogPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  const res = await axiosInstance.get<BlogPost[]>(`/blogs?category=${category}`);
  return res.data;
};

// export const searchBlogPosts = async (query: string): Promise<BlogPost[]> => {
//   const res = await axiosInstance.get<BlogPost[]>(`/blogs?search=${query}`);
//   return res.data;
// };

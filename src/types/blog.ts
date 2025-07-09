export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number;
  imageUrl?: string;
}

export interface BlogCardProps {
  blog: BlogPost;
}

export interface FeaturedBlogCardProps {
  blog: BlogPost;
}

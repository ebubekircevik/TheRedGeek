export interface Blog {
  _id: string;
  title: string;
  content: string;
  author: {
    name: string;
    lastname: string;
    userId: string;
  };
  tags: string[];
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
  views: number;
  comments: {
    userId: string;
    name: string;
    text: string;
    createdAt: string;
  }[];
}

export interface BlogPost {
  id: string;
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

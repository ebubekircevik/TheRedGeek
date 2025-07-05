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

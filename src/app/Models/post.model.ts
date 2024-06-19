export interface Post {
  _id: string;
  title: string;
  content: string;
  publication_date: string;
  link: string;
  media: string;
  views: number;
  likes: number;
  author: string;
  tags: string[];
}

export type BookCategory = "fiction" | "non-fiction" | "youth";

export default interface Book {
  isbn: string;
  title: string;
  author: string;
  description: string;
  price: number;
  genre: string;
  category: BookCategory;
  cover: string;
}

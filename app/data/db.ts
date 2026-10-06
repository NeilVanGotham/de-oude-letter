import { Dexie, type EntityTable } from "dexie";

interface Book {
  isbn: string;
  title: string;
  author: string;
  description: string;
  price: number;
  genre: string;
}

interface ShoppingCartItem {
  isbn: string;
  quantity: number;
}

interface WishlistItem {
  isbn: string;
}

const db = new Dexie("BooksDatabase") as Dexie & {
  books: EntityTable<Book, "isbn">;
  shoppingCartItems: EntityTable<ShoppingCartItem, "isbn">;
  wishlistItems: EntityTable<WishlistItem, "isbn">;
};

db.version(1).stores({
  books: "isbn,title,author,description,price,genre",
  shoppingCartItems: "isbn,quantity",
  wishlistItems: "isbn",
});

export type { Book, ShoppingCartItem, WishlistItem };
export { db };

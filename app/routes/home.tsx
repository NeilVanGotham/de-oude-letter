import type { Route } from "./+types/home";
import HeroSearch from "../hero-search/HeroSearch";
import FeaturedBooks from "../featured-books/FeaturedBooks";
import MediaCarousell from "../media-carousell/MediaCarousell";
import type Book from "~/types/Book";
import { useState } from "react";
import { books } from "~/data/books";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "De Oude Letter" },
    {
      name: "description",
      content: "Voorbeeldwebsite voor een online boekwinkel.",
    },
  ];
}

export const handle = { heroSearch: true };

export default function Home() {
  const [fictionBooks, setFictionBooks] = useState<Book[]>(() =>
    books.filter((book) => book.category === "fiction"),
  );

  return (
    <main>
      <HeroSearch />
      <FeaturedBooks />
      <MediaCarousell title="Fictie" books={fictionBooks} />
    </main>
  );
}

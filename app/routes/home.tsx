import type { Route } from "./+types/home";
import HeroSearch from "../hero-search/HeroSearch";
import FeaturedBooks from "../featured-books/FeaturedBooks";
import MediaCarousell from "../media-carousell/MediaCarousell";
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

const fictionBooks = books.filter((book) => book.category === "fiction");
const nonFictionBooks = books.filter((book) => book.category === "non-fiction");
const childrenBooks = books.filter((book) => book.category === "youth");

export default function Home() {
  return (
    <main>
      <HeroSearch />
      <FeaturedBooks />
      <MediaCarousell title="Fictie" books={fictionBooks} />
      <MediaCarousell title="Non-Fictie" books={nonFictionBooks} />
      <MediaCarousell title="Kinderboeken" books={childrenBooks} />
    </main>
  );
}

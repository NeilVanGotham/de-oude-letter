import { books } from "~/data/books";
import HeroBook from "./HeroBook";

export default function FeaturedBooks() {
  const book = books.filter((b) => b.isbn === "9789021056531")[0];

  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-[3fr_1fr] md:grid-rows-1 gap-4 max-w-6xl mx-auto">
      <HeroBook book={book} />
      <div className="border-l border-stone-300 dark:border-stone-700"></div>
    </div>
  );
}

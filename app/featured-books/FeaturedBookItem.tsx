import type Book from "~/types/Book";

export default function FeaturedBookItem({
  book,
  catchPhrase,
}: {
  book: Book;
  catchPhrase: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <img
        src={book.cover}
        alt={`Boekcover van ${book.title}`}
        className="w-[92px] max-h-sm h-auto object-cover"
      />
      <div className="flex">

      </div>
    </div>
  );
}

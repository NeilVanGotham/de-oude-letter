import type Book from "~/types/Book";

export default function FeaturedBookItem({
  book,
  catchPhrase,
  onClick,
}: {
  book: Book;
  catchPhrase: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="grid grid-cols-[auto_1fr] gap-4 group hover:cursor-pointer"
      onClick={onClick}
    >
      <img
        src={book.cover}
        alt={`Boekcover van ${book.title}`}
        className="w-23 aspect-2/3 object-cover"
      />
      <div className="flex flex-col justify-center">
        <p className="text-amber-700 font-serif italic text-xs">
          {catchPhrase}
        </p>
        <p className="font-serif font-medium text-lg group-hover:underline">
          {book.title}
        </p>
        <p className="text-stone-500 group-hover:underline">{book.author}</p>
      </div>
    </div>
  );
}

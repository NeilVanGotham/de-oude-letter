import FavouriteIcon from "~/icons/Favourite";
import type Book from "~/types/Book";

export default function HeroBook({
  book,
  catchPhrase,
}: {
  book: Book;
  catchPhrase: string;
}) {
  return (
    <div className="flex gap-8 py-16 border-r border-stone-300">
      <img
        src={book.cover}
        alt={`Boekcover van ${book.title}`}
        className="w-xs max-h-sm h-auto object-cover"
      />
      <div className="flex flex-col justify-center">
        <p className="pb-2 text-amber-700 font-serif italic text-xl">
          {catchPhrase}
        </p>
        <h3 className="text-2xl font-serif font-medium">{book.title}</h3>
        <p className="pb-4">
          <a className="text-stone-500 underline decoration-amber-700 cursor-pointer">
            {book.author}
          </a>
        </p>
        <p className="text-stone-500">{book.description}</p>
        <p className="pb-8">
          <a className="text-amber-700 cursor-pointer underline">Meer lezen</a>
        </p>
        <div className="flex gap-4 items-center">
          <button className="px-6 py-3 border text-amber-700 border-amber-700 rounded cursor-pointer hover:bg-amber-700 hover:text-white">
            In winkelwagen
          </button>
          <button className="text-amber-700 cursor-pointer">
            <FavouriteIcon />
          </button>
          <span className="text-xl">€{book.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

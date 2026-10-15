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
    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 py-6 md:py-16 md:pr-8 border-b md:border-b-0 md:border-r border-stone-300">
      <div className="shrink-0 self-center sm:self-start md:self-center">
        <img
          src={book.cover}
          alt={`Boekcover van ${book.title}`}
          className="h-80 sm:h-96 lg:h-121.5 aspect-2/3 object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="pb-2 text-amber-700 font-serif italic text-xl">
          {catchPhrase}
        </p>
        <h3 className="text-xl sm:text-2xl font-serif font-medium">{book.title}</h3>
        <p className="pb-4">
          <a className="text-stone-500 underline decoration-amber-700 cursor-pointer">
            {book.author}
          </a>
        </p>
        <p className="text-stone-500">{book.description}</p>
        <p className="pb-8">
          <a className="text-amber-700 cursor-pointer underline">Meer lezen</a>
        </p>
        <div className="flex flex-wrap gap-4 items-center">
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

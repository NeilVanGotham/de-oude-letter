import { useEffect, useRef, useState } from "react";
import type Book from "~/types/Book";

export default function MediaCarousell({
  title,
  books,
}: {
  title: string;
  books: Book[];
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setPageCount(Math.max(1, Math.ceil(scrollWidth / clientWidth)));
    setCurrentPage(
      scrollLeft + clientWidth >= scrollWidth - 1
        ? Math.ceil(scrollWidth / clientWidth) - 1
        : Math.round(scrollLeft / clientWidth),
    );
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [books]);

  const scrollByPage = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl mx-auto py-8 group/carousel">
      <div className="flex items-end justify-between pb-2">
        <h2 className="text-2xl font-serif font-medium">{title}</h2>
        {pageCount > 1 && (
          <ol className="flex gap-1 opacity-0 transition-opacity group-hover/carousel:opacity-100">
            {Array.from({ length: pageCount }, (_, index) => (
              <li
                key={index}
                className={`h-0.5 w-4 ${
                  index === currentPage ? "bg-amber-700" : "bg-stone-300"
                }`}
              />
            ))}
          </ol>
        )}
      </div>

      <div className="relative">
        <ul
          ref={trackRef}
          onScroll={updateScrollState}
          className="flex gap-4 py-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {books.map((book) => (
            <li
              key={book.isbn}
              className="relative shrink-0 snap-start group/item cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10 first:origin-left last:origin-right"
            >
              <img
                src={book.cover}
                alt={`Boekcover van ${book.title}`}
                className="h-60 aspect-2/3 object-cover shadow-md group-hover/item:shadow-xl"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 bg-linear-to-t from-black/80 to-transparent text-white opacity-0 transition-opacity group-hover/item:opacity-100">
                <p className="font-serif font-medium text-sm leading-tight">
                  {book.title}
                </p>
                <p className="text-xs text-stone-300">{book.author}</p>
                <p className="text-xs pt-1">€{book.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>

        {canScrollLeft && (
          <CarousellButton direction="left" onClick={() => scrollByPage(-1)} />
        )}
        {canScrollRight && (
          <CarousellButton direction="right" onClick={() => scrollByPage(1)} />
        )}
      </div>
    </section>
  );
}

function CarousellButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? "Vorige boeken" : "Volgende boeken"}
      className={`absolute inset-y-6 z-20 w-12 flex items-center justify-center text-white cursor-pointer opacity-0 transition-opacity group-hover/carousel:opacity-100 focus-visible:opacity-100 ${
        isLeft
          ? "left-0 bg-linear-to-r from-black/60 to-transparent"
          : "right-0 bg-linear-to-l from-black/60 to-transparent"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-8 transition-transform hover:scale-125"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            isLeft ? "M15.75 19.5 8.25 12l7.5-7.5" : "m8.25 4.5 7.5 7.5-7.5 7.5"
          }
        />
      </svg>
    </button>
  );
}

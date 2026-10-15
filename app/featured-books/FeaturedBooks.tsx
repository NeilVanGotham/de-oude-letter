import { books } from "~/data/books";
import HeroBook from "./HeroBook";
import { useEffect, useState } from "react";
import FeaturedBookItem from "./FeaturedBookItem";

const feauturedIsbns = [
  "9789021056531",
  "9789044662368",
  "9789022343135",
  "9789403139135",
];

export default function FeaturedBooks() {
  const catchPhrases = [
    "Nieuw deze maand",
    "Gezien op TikTok",
    "Keuze van onze staff",
    "Bestseller",
  ];

  const featuredBooks = feauturedIsbns.map(
    (isbn) => books.find((b) => b.isbn === isbn)!,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroBook, setHeroBook] = useState(
    () => books.find((b) => b.isbn === feauturedIsbns[currentIndex])!,
  );

  useEffect(() => {
    setHeroBook(books.find((b) => b.isbn === feauturedIsbns[currentIndex])!);
  }, [currentIndex]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 max-w-6xl mx-auto px-4 xl:px-0">
      <HeroBook book={heroBook} catchPhrase={catchPhrases[currentIndex]} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-2">
        {featuredBooks.map((book, index) => (
          <FeaturedBookItem
            key={book.isbn}
            book={book}
            catchPhrase={catchPhrases[index]}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
}

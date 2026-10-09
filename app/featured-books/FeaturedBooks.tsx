import { books } from "~/data/books";
import HeroBook from "./HeroBook";
import { useEffect, useState } from "react";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroBook, setHeroBook] = useState(
    () => books.find((b) => b.isbn === feauturedIsbns[currentIndex])!,
  );

  useEffect(() => {
    setHeroBook(books.find((b) => b.isbn === feauturedIsbns[currentIndex])!);
  }, [currentIndex]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 max-w-6xl mx-auto">
      <HeroBook book={heroBook} catchPhrase={catchPhrases[currentIndex]} />
      <ul className="flex flex-col gap-2">
        {feauturedIsbns.map((isbn, index) => (
          <li key={isbn} onClick={() => setCurrentIndex(index)}>
            {catchPhrases[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}

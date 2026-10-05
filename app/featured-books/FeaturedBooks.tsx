import HeroBook from "./HeroBook";

export default function FeaturedBooks() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-[3fr_1fr] md:grid-rows-1 gap-4 max-w-6xl mx-auto">
      <HeroBook />
    </div>
  );
}

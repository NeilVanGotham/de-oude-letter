import FavouriteIcon from "~/icons/Favourite";

export default function HeroBook() {
  return (
    <div className="flex gap-8 py-16">
      <img
        src="https://covers.openlibrary.org/b/ISBN/9789021056531-L.jpg"
        alt="Boekcover van Het Ultieme Geheim"
        className="w-xs h-auto object-cover"
      />
      <div className="flex flex-col justify-center">
        <p className="pb-2 text-amber-700 font-serif italic text-xl">
          Nieuw deze maand
        </p>
        <h3 className="text-2xl font-serif font-medium">Het Ultieme Geheim</h3>
        <p className="pb-4">
          <a className="text-stone-500 underline decoration-amber-700 cursor-pointer">
            Dan Brown
          </a>
        </p>
        <p className="text-stone-500">
          Robert Langdon is terug en reist in Het ultieme geheim, de nieuwe,
          meeslepende thriller van De Da Vinci Code-auteur Dan Brown, naar Praag
          voor een lezing van zijn vriendin Katherine Solomon, maar hun verblijf
          ontaardt in chaos door een brute moord.
        </p>
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
          <span className="text-xl">€29,99</span>
        </div>
      </div>
    </div>
  );
}

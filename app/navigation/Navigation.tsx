import FavouriteIcon from "../icons/Favourite";
import CartIcon from "../icons/Cart";
import FavouriteFilledIcon from "../icons/FavouriteFilled";
import CartFilledIcon from "../icons/CartFilled";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 items-center max-w-7xl mx-auto">
        <h1 className="col-start-1 col-end-2 row-start-1 row-end-2 font-serif text-4xl font-semibold italic tracking-tight">
          De <span className="text-amber-700">Oude</span> Letter
        </h1>
        <div className="col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex items-center border pl-4 gap-2 border-amber-700/30 h-11.5 rounded-full overflow-hidden md:max-w-md w-full focus-within:ring-2 focus-within:ring-amber-700 bg-olive-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 30 30"
            fill="#6B7280"
          >
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
          </svg>
          <input
            type="text"
            placeholder="Zoeken..."
            className="w-full h-full outline-none text-stone-500 bg-transparent placeholder-stone-500 text-sm"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-3 md:col-end-4 flex gap-4 justify-end">
          <button className="group p-2 text-amber-700 rounded flex flex-col items-center cursor-pointer">
            <span className="group-hover:hidden">
              <FavouriteIcon />
            </span>
            <span className="hidden group-hover:block">
              <FavouriteFilledIcon />
            </span>
            <span className="group-hover:underline">Verlanglijst</span>
          </button>
          <button className="group p-2 text-amber-700 rounded flex flex-col items-center cursor-pointer">
            <span className="group-hover:hidden">
              <CartIcon />
            </span>
            <span className="hidden group-hover:block">
              <CartFilledIcon />
            </span>
            <span className="group-hover:underline">Winkelmand</span>
          </button>
        </div>
      </div>
      <span className="border-b border-stone-300 dark:border-stone-700 max-w-6xl mx-auto block"></span>
    </nav>
  );
}

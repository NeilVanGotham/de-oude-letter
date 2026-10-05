import FavouriteIcon from "../icons/Favourite";
import CartIcon from "../icons/Cart";
import FavouriteFilledIcon from "../icons/FavouriteFilled";
import CartFilledIcon from "../icons/CartFilled";

export default function Navigation() {
  return (
    <nav>
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl font-semibold italic tracking-tight">
          De <span className="text-amber-700">Oude</span> Letter
        </h1>
        <div className="flex items-center border pl-4 gap-2 border-amber-700/30 h-[46px] rounded-full overflow-hidden max-w-md w-full">
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
        <div className="flex gap-4">
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
      <span className="border-b border-stone-300 dark:border-stone-700 w mx-auto block"></span>
    </nav>
  );
}

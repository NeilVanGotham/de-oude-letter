export default function HeroSearch() {
  return (
    <div className="py-16 px-8 flex flex-col justify-center gap-8 items-center">
      <h2 className="text-5xl font-medium font-serif text-stone-800">
        Wat wil je lezen?
      </h2>
      <div className="col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex items-center border pl-4 gap-2 border-amber-700/30 h-11.5 rounded-full overflow-hidden md:max-w-3xl w-full focus-within:ring-2 focus-within:ring-amber-700 bg-olive-50">
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
          placeholder="Titel, auteur, ISBN of een stemming..."
          className="w-full h-full outline-none text-stone-500 bg-transparent placeholder-stone-500 text-sm"
        />
      </div>
      <div className="hidden md:flex gap-2">
        <button className="inline-flex items-center rounded-full px-6 py-2 font-medium inset-ring inset-ring-stone-500/40 cursor-pointer hover:text-amber-700 hover:inset-ring-amber-700/60">
          kort maar krachtig
        </button>
        <button className="inline-flex items-center rounded-full px-6 py-2 font-medium inset-ring inset-ring-stone-500/40 cursor-pointer hover:text-amber-700 hover:inset-ring-amber-700/60">
          voor op de trein
        </button>
        <button className="inline-flex items-center rounded-full px-6 py-2 font-medium inset-ring inset-ring-stone-500/40 cursor-pointer hover:text-amber-700 hover:inset-ring-amber-700/60">
          misdaad en mysterie
        </button>
        <button className="inline-flex items-center rounded-full px-6 py-2 font-medium inset-ring inset-ring-stone-500/40 cursor-pointer hover:text-amber-700 hover:inset-ring-amber-700/60">
          halloween
        </button>
      </div>
    </div>
  );
}

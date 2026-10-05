import type { Route } from "./+types/home";
import HeroSearch from "../hero-search/HeroSearch";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "De Oude Letter" },
    {
      name: "description",
      content: "Voorbeeldwebsite voor een online boekwinkel.",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <HeroSearch />
    </main>
  );
}

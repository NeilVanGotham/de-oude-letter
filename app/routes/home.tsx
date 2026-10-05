import type { Route } from "./+types/home";
import Navigation from "../navigation/Navigation";

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
  return <Navigation />;
}

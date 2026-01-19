import { Metadata } from "next";
import { MenuPageContent } from "./menu-content";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Entdecken Sie unsere mediterrane Speisekarte mit frischer Pizza aus dem Steinofen, hausgemachter Pasta und italienischen Spezialitäten.",
  openGraph: {
    title: "Speisekarte | Casa Eltinger Hof",
    description:
      "Mediterrane Küche in Leonberg - Pizza, Pasta und mehr.",
  },
};

export default function SpeisekartenPage() {
  return <MenuPageContent />;
}

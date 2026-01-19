import { Metadata } from "next";
import { GalleryPageContent } from "./gallery-content";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Bilder aus unserem Restaurant Casa Eltinger Hof - Einblicke in unser Ambiente, unsere Gerichte und unvergessliche Veranstaltungen.",
  openGraph: {
    title: "Galerie | Casa Eltinger Hof",
    description: "Einblicke in unser mediterranes Restaurant in Leonberg.",
  },
};

export default function GaleriePage() {
  return <GalleryPageContent />;
}

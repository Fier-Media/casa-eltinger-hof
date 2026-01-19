import { Metadata } from "next";
import { AboutPageContent } from "./about-content";

export const metadata: Metadata = {
  title: "Über Uns",
  description:
    "Erfahren Sie mehr über Casa Eltinger Hof - unsere Geschichte, unser Team und unsere Leidenschaft für mediterrane Küche seit 1985.",
  openGraph: {
    title: "Über Uns | Casa Eltinger Hof",
    description: "Unsere Geschichte und Leidenschaft für gutes Essen.",
  },
};

export default function UeberUnsPage() {
  return <AboutPageContent />;
}

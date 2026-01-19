import { Metadata } from "next";
import { RestaurantPageContent } from "./restaurant-content";

export const metadata: Metadata = {
  title: "Restaurant",
  description:
    "Entdecken Sie unser mediterranes Restaurant in Leonberg. Gemütliche Atmosphäre, authentische italienische Küche und herzliche Gastfreundschaft.",
  openGraph: {
    title: "Unser Restaurant | Casa Eltinger Hof",
    description:
      "Mediterranes Flair in Leonberg - Besuchen Sie uns!",
  },
};

export default function RestaurantPage() {
  return <RestaurantPageContent />;
}

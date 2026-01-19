// Galerie-Bilder für Casa Eltinger Hof

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  featured?: boolean;
}

export type GalleryCategory = "restaurant" | "gerichte" | "events" | "team";

export const galleryCategories = [
  { id: "alle", name: "Alle" },
  { id: "restaurant", name: "Restaurant" },
  { id: "gerichte", name: "Gerichte" },
  { id: "events", name: "Events" },
  { id: "team", name: "Team" },
] as const;

export const galleryImages: GalleryImage[] = [
  // Restaurant
  {
    id: "restaurant-1",
    src: "/images/gallery/restaurant-1.jpg",
    alt: "Restaurant Innenansicht mit eleganter Beleuchtung",
    category: "restaurant",
    featured: true,
  },
  {
    id: "restaurant-2",
    src: "/images/gallery/restaurant-2.jpg",
    alt: "Gemütlicher Sitzbereich im Restaurant",
    category: "restaurant",
  },
  {
    id: "restaurant-3",
    src: "/images/gallery/restaurant-3.jpg",
    alt: "Bar-Bereich mit italienischem Flair",
    category: "restaurant",
  },
  {
    id: "restaurant-4",
    src: "/images/gallery/restaurant-4.jpg",
    alt: "Terrasse für warme Sommertage",
    category: "restaurant",
    featured: true,
  },
  // Gerichte
  {
    id: "gericht-1",
    src: "/images/gallery/gericht-1.jpg",
    alt: "Frische Pizza aus dem Steinofen",
    category: "gerichte",
    featured: true,
  },
  {
    id: "gericht-2",
    src: "/images/gallery/gericht-2.jpg",
    alt: "Hausgemachte Pasta mit frischen Zutaten",
    category: "gerichte",
  },
  {
    id: "gericht-3",
    src: "/images/gallery/gericht-3.jpg",
    alt: "Antipasti-Platte mit italienischen Spezialitäten",
    category: "gerichte",
    featured: true,
  },
  {
    id: "gericht-4",
    src: "/images/gallery/gericht-4.jpg",
    alt: "Dessert-Kreation Tiramisu",
    category: "gerichte",
  },
  {
    id: "gericht-5",
    src: "/images/gallery/gericht-5.jpg",
    alt: "Frischer Salat mit Mozzarella",
    category: "gerichte",
  },
  // Events
  {
    id: "event-1",
    src: "/images/gallery/event-1.jpg",
    alt: "Hochzeitsfeier im festlich dekorierten Saal",
    category: "events",
    featured: true,
  },
  {
    id: "event-2",
    src: "/images/gallery/event-2.jpg",
    alt: "Firmenfeier mit Buffet",
    category: "events",
  },
  {
    id: "event-3",
    src: "/images/gallery/event-3.jpg",
    alt: "Geburtstagstafel mit Dekoration",
    category: "events",
  },
  // Team
  {
    id: "team-1",
    src: "/images/gallery/team-1.jpg",
    alt: "Unser Küchenteam bei der Arbeit",
    category: "team",
  },
  {
    id: "team-2",
    src: "/images/gallery/team-2.jpg",
    alt: "Service-Team im Restaurant",
    category: "team",
    featured: true,
  },
];

// Featured images for homepage preview
export const featuredGalleryImages = galleryImages.filter(
  (image) => image.featured
);

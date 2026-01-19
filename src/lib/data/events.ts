// Events und Veranstaltungen für Casa Eltinger Hof

export interface EventType {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  capacity?: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export const eventTypes: EventType[] = [
  {
    id: "hochzeit",
    name: "Hochzeiten",
    description: "Feiern Sie Ihren schönsten Tag mit uns. Unser Saal bietet den perfekten Rahmen für Ihre Hochzeitsfeier mit exquisitem italienischem Catering.",
    image: "/images/events/hochzeit.jpg",
    features: [
      "Bis zu 80 Personen",
      "Individuelle Menügestaltung",
      "Dekoration nach Wunsch",
      "Separater Eingang",
    ],
    capacity: "bis 80 Personen",
  },
  {
    id: "geburtstag",
    name: "Geburtstagsfeiern",
    description: "Ob runder Geburtstag oder gemütliches Familientreffen – wir gestalten Ihren besonderen Tag unvergesslich.",
    image: "/images/events/geburtstag.jpg",
    features: [
      "Flexible Gruppengröße",
      "Buffet oder Menü",
      "Torte nach Wunsch",
      "Kinderfreundlich",
    ],
    capacity: "10-60 Personen",
  },
  {
    id: "firmenfeier",
    name: "Firmenfeiern",
    description: "Weihnachtsfeier, Teambuilding oder Geschäftsessen – professionelle Atmosphäre mit mediterranem Flair.",
    image: "/images/events/firmenfeier.jpg",
    features: [
      "Separate Räumlichkeiten",
      "Technik für Präsentationen",
      "Business Lunch Optionen",
      "Pauschalpakete verfügbar",
    ],
    capacity: "bis 50 Personen",
  },
  {
    id: "trauerfeier",
    name: "Trauerfeiern",
    description: "In schweren Stunden sind wir diskret an Ihrer Seite und sorgen für einen würdevollen Rahmen.",
    image: "/images/events/trauerfeier.jpg",
    features: [
      "Einfühlsame Betreuung",
      "Stilles Ambiente",
      "Flexible Gestaltung",
      "Kaffee und Kuchen",
    ],
    capacity: "nach Bedarf",
  },
  {
    id: "taufe",
    name: "Taufe & Kommunion",
    description: "Feiern Sie kirchliche Feste in familiärer Atmosphäre mit köstlichen mediterranen Speisen.",
    image: "/images/events/taufe.jpg",
    features: [
      "Familienfreundlich",
      "Flexible Menüs",
      "Dekoration möglich",
      "Separate Räume",
    ],
    capacity: "20-60 Personen",
  },
  {
    id: "romantik",
    name: "Romantischer Abend",
    description: "Überraschen Sie Ihren Lieblingsmenschen mit einem unvergesslichen Dinner bei Kerzenschein.",
    image: "/images/events/romantik.jpg",
    features: [
      "Candlelight Dinner",
      "Spezielle Menüs",
      "Champagner-Service",
      "Reservierter Tisch",
    ],
    capacity: "2 Personen",
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "valentinstag",
    title: "Valentinstag Special",
    date: "14. Februar 2026",
    time: "ab 18:00 Uhr",
    description: "Romantisches 4-Gänge-Menü für Verliebte mit Live-Musik",
    image: "/images/events/valentinstag.jpg",
  },
  {
    id: "ostern",
    title: "Osterbrunch",
    date: "5. April 2026",
    time: "10:00 - 14:00 Uhr",
    description: "Festliches Brunch-Buffet mit italienischen Spezialitäten",
    image: "/images/events/ostern.jpg",
  },
  {
    id: "weinprobe",
    title: "Italienische Weinprobe",
    date: "21. März 2026",
    time: "19:00 Uhr",
    description: "6 erlesene Weine mit passenden Antipasti",
    image: "/images/events/weinprobe.jpg",
  },
];

export const eventContact = {
  title: "Veranstaltung anfragen",
  description: "Haben Sie Interesse an einer Veranstaltung bei uns? Kontaktieren Sie uns für ein unverbindliches Angebot.",
  phone: "07152 3066485",
  email: "events@casa-eltinger-hof.de",
};

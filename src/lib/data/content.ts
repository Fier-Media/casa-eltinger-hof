// Zentrale Content-Verwaltung für Casa Eltinger Hof

export const siteConfig = {
  name: "Casa Eltinger Hof",
  description: "Mediterranes Restaurant in Leonberg - Pizza, Pasta und mediterrane Gerichte",
  url: "https://casa-eltinger-hof.de",
  ogImage: "/images/opner Image#001.jpeg",
  links: {
    whatsapp: "https://wa.me/4971523066485",
    phone: "tel:+4971523066485",
    email: "mailto:info@casa-eltinger-hof.de",
    maps: "https://maps.google.com/?q=Hertichstraße+30,+71229+Leonberg",
  },
};

export const contactInfo = {
  address: {
    street: "Hertichstraße 30",
    city: "71229 Leonberg",
    full: "Hertichstraße 30, 71229 Leonberg",
  },
  phone: "07152 3066485",
  phoneFormatted: "+49 7152 3066485",
  email: "info@casa-eltinger-hof.de",
  priceRange: "€10-20",
  reviewCount: 4721,
};

export const openingHours = [
  { day: "Montag", time: "12:00–14:30 & 17:30–21:00 Uhr", closed: false },
  { day: "Dienstag", time: "Ruhetag", closed: true },
  { day: "Mittwoch", time: "12:00–14:30 & 17:30–21:00 Uhr", closed: false },
  { day: "Donnerstag", time: "12:00–14:30 & 17:30–21:00 Uhr", closed: false },
  { day: "Freitag", time: "12:00–14:30 & 17:30–21:00 Uhr", closed: false },
  { day: "Samstag", time: "17:30–21:00 Uhr", closed: false },
  { day: "Sonntag", time: "12:00–14:30 Uhr", closed: false },
];

export const heroContent = {
  tagline: "Seit 1985",
  title: "Casa Eltinger Hof",
  subtitle: "Herzlich willkommen im Casa Eltinger Hof.",
  description: "Wir kochen mediterran – Pizza, Pasta und mediterrane Gerichte. Mittags leicht und wechselnd, abends entspannt und mit Zeit zum Genießen.",
  cta: {
    primary: "Reservieren",
    secondary: "Speisekarte",
  },
};

export const aboutPreview = {
  title: "Unsere Geschichte",
  subtitle: "Tradition trifft Leidenschaft",
  text: "Seit vielen Jahren verwöhnen wir unsere Gäste mit authentischer mediterraner Küche. Frische Zutaten, hausgemachte Pasta und knusprige Pizza aus unserem Steinofen – das ist Casa Eltinger Hof.",
  cta: "Mehr erfahren",
};

export const serviceFeatures = [
  {
    title: "Private Dining Room",
    description: "Privaträume für besondere Anlässe und Feiern",
    icon: "users",
  },
  {
    title: "Vegane Optionen",
    description: "Vielfältige vegane Gerichte auf unserer Speisekarte",
    icon: "leaf",
  },
  {
    title: "Kostenloses WLAN",
    description: "Schnelles Internet für unsere Gäste",
    icon: "wifi",
  },
];

export const navigationItems = [
  { name: "Startseite", href: "/" },
  { name: "Speisekarten", href: "/speisekarten" },
  { name: "Restaurant", href: "/restaurant" },
  { name: "Veranstaltungen", href: "/veranstaltungen" },
  { name: "Galerie", href: "/galerie" },
  { name: "Über Uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
];

export const footerContent = {
  description: "Mediterranes Restaurant in Leonberg. Genießen Sie authentische Pizza, Pasta und mediterrane Spezialitäten in gemütlicher Atmosphäre.",
  newsletter: {
    title: "Newsletter",
    description: "Erhalten Sie exklusive Angebote und Neuigkeiten.",
    placeholder: "Ihre E-Mail-Adresse",
    button: "Anmelden",
  },
  socialLinks: [
    { name: "WhatsApp", href: "https://wa.me/4971523066485", icon: "whatsapp" },
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
  ],
  copyright: `© ${new Date().getFullYear()} Casa Eltinger Hof. Alle Rechte vorbehalten.`,
};

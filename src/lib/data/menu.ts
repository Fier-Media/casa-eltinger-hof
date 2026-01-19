// Speisekarten-Daten für Casa Eltinger Hof

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  vegetarian?: boolean;
  vegan?: boolean;
  spicy?: boolean;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "antipasti",
    name: "Antipasti",
    description: "Italienische Vorspeisen",
    items: [
      {
        id: "bruschetta",
        name: "Bruschetta Classica",
        description: "Geröstetes Ciabatta mit Tomaten, Knoblauch und frischem Basilikum",
        price: "€7,50",
        vegetarian: true,
        popular: true,
      },
      {
        id: "carpaccio",
        name: "Carpaccio di Manzo",
        description: "Hauchdünn geschnittenes Rinderfilet mit Rucola, Parmesan und Trüffelöl",
        price: "€14,90",
      },
      {
        id: "caprese",
        name: "Insalata Caprese",
        description: "Büffelmozzarella mit Tomaten, frischem Basilikum und Olivenöl",
        price: "€11,90",
        vegetarian: true,
      },
      {
        id: "vitello-tonato",
        name: "Vitello Tonnato",
        description: "Kalbfleisch mit cremiger Thunfischsauce",
        price: "€13,50",
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Aus unserem Steinofen",
    items: [
      {
        id: "margherita",
        name: "Margherita",
        description: "Tomatensauce, Mozzarella, frisches Basilikum",
        price: "€10,90",
        vegetarian: true,
        popular: true,
      },
      {
        id: "salami",
        name: "Diavola",
        description: "Tomatensauce, Mozzarella, scharfe Salami, Peperoni",
        price: "€13,50",
        spicy: true,
      },
      {
        id: "prosciutto",
        name: "Prosciutto e Rucola",
        description: "Tomatensauce, Mozzarella, Parmaschinken, Rucola, Parmesan",
        price: "€15,90",
        popular: true,
      },
      {
        id: "quattro-formaggi",
        name: "Quattro Formaggi",
        description: "Mozzarella, Gorgonzola, Parmesan, Pecorino",
        price: "€14,50",
        vegetarian: true,
      },
      {
        id: "verdure",
        name: "Vegetariana",
        description: "Tomatensauce, Mozzarella, Zucchini, Aubergine, Paprika, Oliven",
        price: "€13,90",
        vegetarian: true,
        vegan: false,
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Hausgemachte Teigwaren",
    items: [
      {
        id: "spaghetti-bolognese",
        name: "Spaghetti Bolognese",
        description: "Klassische Fleischsauce nach Hausmacher Art",
        price: "€12,90",
        popular: true,
      },
      {
        id: "carbonara",
        name: "Spaghetti Carbonara",
        description: "Speck, Eigelb, Pecorino, schwarzer Pfeffer",
        price: "€13,50",
        popular: true,
      },
      {
        id: "lasagna",
        name: "Lasagna della Casa",
        description: "Hausgemachte Lasagne mit Fleischragout und Béchamelsauce",
        price: "€14,90",
      },
      {
        id: "penne-arrabiata",
        name: "Penne all'Arrabbiata",
        description: "Scharfe Tomatensauce mit Knoblauch und Peperoncino",
        price: "€11,90",
        vegetarian: true,
        vegan: true,
        spicy: true,
      },
      {
        id: "tagliatelle-funghi",
        name: "Tagliatelle ai Funghi",
        description: "Bandnudeln mit gemischten Pilzen in Sahnesauce",
        price: "€14,50",
        vegetarian: true,
      },
    ],
  },
  {
    id: "hauptgerichte",
    name: "Hauptgerichte",
    description: "Fleisch- und Fischspezialitäten",
    items: [
      {
        id: "saltimbocca",
        name: "Saltimbocca alla Romana",
        description: "Kalbsschnitzel mit Salbei und Parmaschinken in Weißweinsauce",
        price: "€19,90",
        popular: true,
      },
      {
        id: "ossobuco",
        name: "Ossobuco",
        description: "Geschmorte Kalbshaxe mit Gremolata",
        price: "€22,90",
      },
      {
        id: "branzino",
        name: "Branzino al Forno",
        description: "Gegrillter Wolfsbarsch mit mediterranem Gemüse",
        price: "€24,90",
      },
      {
        id: "pollo",
        name: "Pollo alla Griglia",
        description: "Gegrillte Hähnchenbrust mit Kräutern und Zitrone",
        price: "€16,90",
      },
    ],
  },
  {
    id: "dolci",
    name: "Dolci",
    description: "Süße Verführungen",
    items: [
      {
        id: "tiramisu",
        name: "Tiramisù",
        description: "Klassisches italienisches Dessert mit Mascarpone und Espresso",
        price: "€7,90",
        vegetarian: true,
        popular: true,
      },
      {
        id: "panna-cotta",
        name: "Panna Cotta",
        description: "Cremiges Dessert mit Beerensoße",
        price: "€6,90",
        vegetarian: true,
      },
      {
        id: "gelato",
        name: "Gelato Misto",
        description: "Hausgemachtes italienisches Eis (3 Kugeln)",
        price: "€5,90",
        vegetarian: true,
      },
    ],
  },
];

// Getränkekarte
export const drinkCategories: MenuCategory[] = [
  {
    id: "wein",
    name: "Weine",
    description: "Ausgewählte italienische Weine",
    items: [
      {
        id: "chianti",
        name: "Chianti Classico DOCG",
        description: "Toskana, trocken, fruchtig",
        price: "€6,90 / €28,00",
      },
      {
        id: "pinot-grigio",
        name: "Pinot Grigio DOC",
        description: "Venetien, trocken, frisch",
        price: "€5,90 / €24,00",
      },
      {
        id: "prosecco",
        name: "Prosecco Spumante",
        description: "Venetien, prickelnd, fruchtig",
        price: "€5,50 / €26,00",
      },
    ],
  },
  {
    id: "softdrinks",
    name: "Alkoholfreie Getränke",
    items: [
      {
        id: "wasser",
        name: "Mineralwasser",
        description: "Still oder mit Kohlensäure",
        price: "€3,50",
      },
      {
        id: "limonata",
        name: "Hausgemachte Limonade",
        description: "Zitrone oder Orange",
        price: "€4,50",
      },
      {
        id: "espresso",
        name: "Espresso",
        description: "Original italienisch",
        price: "€2,50",
      },
    ],
  },
];

// Featured dishes for homepage
export const featuredDishes = [
  menuCategories[1].items[2], // Prosciutto e Rucola Pizza
  menuCategories[2].items[1], // Carbonara
  menuCategories[3].items[0], // Saltimbocca
  menuCategories[0].items[0], // Bruschetta
];

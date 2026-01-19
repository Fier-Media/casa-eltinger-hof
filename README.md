# Casa Eltinger Hof - Website

Moderne, SEO-optimierte Restaurant-Website für Casa Eltinger Hof in Leonberg.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animationen**: Framer Motion
- **Icons**: Lucide React

## 📁 Projektstruktur

```
/src
  /app                    # Next.js App Router Seiten
    /speisekarten        # Speisekarte
    /restaurant          # Restaurant & Philosophie
    /veranstaltungen     # Events & Saal
    /galerie             # Bildergalerie
    /ueber-uns           # Über Uns
    /kontakt             # Kontakt & Anfahrt
  /components
    /layout              # Header, Footer
    /sections            # Startseiten-Sections
    /ui                  # shadcn/ui Komponenten
  /lib
    /data                # Zentrale Datenverwaltung
      /content.ts        # Texte, Öffnungszeiten, Kontakt
      /menu.ts           # Speisekarte
      /events.ts         # Veranstaltungen
      /gallery.ts        # Galerie-Bilder
/public
  /images                # Bilder (hochzuladen)
```

## 🖼️ Bilder hochladen

Laden Sie Ihre Bilder in den `/public/images/` Ordner hoch.
Siehe `/public/images/README-IMAGES.md` für eine vollständige Liste der benötigten Bilder.

## 🛠️ Entwicklung

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Der Server läuft auf [http://localhost:3000](http://localhost:3000).

### Build

```bash
# Produktions-Build erstellen
npm run build

# Produktionsserver starten
npm start
```

## 📝 Inhalte bearbeiten

Alle Inhalte werden zentral in `/src/lib/data/` verwaltet:

- **content.ts**: Öffnungszeiten, Kontaktdaten, Willkommenstext
- **menu.ts**: Speisekarte mit Kategorien und Gerichten
- **events.ts**: Veranstaltungstypen und kommende Events
- **gallery.ts**: Galerie-Bilder und Kategorien

## 🚀 Deployment

### Vercel (empfohlen)

1. Repository auf GitHub pushen
2. [Vercel](https://vercel.com) mit GitHub verbinden
3. Projekt importieren
4. Automatisches Deployment bei jedem Push

### Umgebungsvariablen

Für Produktions-Deployment in Vercel Dashboard setzen:

```
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Features

- ✅ Responsive Design (Mobile-First)
- ✅ SEO-Optimiert (Meta-Tags, Structured Data, Sitemap)
- ✅ Performance-Optimiert (SSR, Image Optimization)
- ✅ Moderne Animationen (Framer Motion)
- ✅ Barrierefreies Design
- ✅ Kontaktformular
- ✅ WhatsApp Integration
- ✅ Google Maps Integration

## 📄 Lizenz

Alle Rechte vorbehalten. © Casa Eltinger Hof

# Button Design System - Token-basiert

## Übersicht

Dieses Projekt verwendet ein konsistentes, Token-basiertes Design-System für alle Button-Varianten. Alle Farben und Stile werden über CSS-Variablen definiert und können zentral in `src/app/globals.css` verwaltet werden.

## Button-Varianten

### 1. **Primary** (default)
- **Verwendung:** Hauptaktionen wie "Reservieren", "Buchen", "Senden"
- **Tokens:**
  - `--button-primary-bg`: Hintergrundfarbe (#C54F1F - Gold)
  - `--button-primary-hover`: Hover-Farbe (#D96D3F - Hell-Gold)
  - `--button-primary-text`: Textfarbe (#1A1A1A - Dunkel)

```tsx
<Button>Reservieren</Button>
// oder explizit:
<Button variant="default">Reservieren</Button>
```

### 2. **Secondary**
- **Verwendung:** Sekundäre Aktionen, weniger wichtige Buttons
- **Tokens:**
  - `--button-secondary-bg`: Hintergrundfarbe (#F5F3F0 - Hellgrau)
  - `--button-secondary-hover`: Hover-Farbe (#E8E4DE)
  - `--button-secondary-text`: Textfarbe (#1A1A1A)

```tsx
<Button variant="secondary">Mehr erfahren</Button>
```

### 3. **Outline**
- **Verwendung:** Sekundäre CTAs auf hellen Hintergründen
- **Tokens:**
  - `--button-outline-border`: Border-Farbe (#1A1A1A)
  - `--button-outline-text`: Textfarbe (#1A1A1A)
  - `--button-outline-hover`: Hover-Hintergrund (#C54F1F - Gold)
  - `--button-outline-hover-text`: Hover-Textfarbe (#FFFFFF)

```tsx
<Button variant="outline">Zur Speisekarte</Button>
```

### 4. **Outline Dark**
- **Verwendung:** Sekundäre CTAs auf **dunklen** Hintergründen (z.B. Hero-Section)
- **Tokens:**
  - `--button-outline-dark-border`: Border-Farbe (#FFFFFF)
  - `--button-outline-dark-text`: Textfarbe (#FFFFFF)
  - `--button-outline-dark-hover-bg`: Hover-Hintergrund (#FFFFFF)
  - `--button-outline-dark-hover-text`: Hover-Textfarbe (#1A1A1A)

```tsx
<Button variant="outline-dark">Speisekarte</Button>
```

### 5. **WhatsApp**
- **Verwendung:** WhatsApp-Links und -Aktionen
- **Tokens:**
  - `--button-whatsapp-bg`: Hintergrundfarbe (#25D366 - WhatsApp-Grün)
  - `--button-whatsapp-hover`: Hover-Farbe (#1EA952)
  - `--button-whatsapp-text`: Textfarbe (#FFFFFF)

```tsx
<Button variant="whatsapp">WhatsApp öffnen</Button>
```

### 6. **Ghost**
- **Verwendung:** Subtile Buttons, Icon-Buttons
- Verwendet Standard-Accent-Farben

```tsx
<Button variant="ghost">Schließen</Button>
```

### 7. **Link**
- **Verwendung:** Text-Links mit Underline
- Verwendet Primary-Farbe

```tsx
<Button variant="link">Mehr erfahren →</Button>
```

## Größen

- `sm`: Klein (h-8)
- `default`: Standard (h-9)
- `lg`: Groß (h-10)
- `icon`: Icon-Button (9x9)
- `icon-sm`: Kleiner Icon-Button (8x8)
- `icon-lg`: Großer Icon-Button (10x10)

## Best Practices

### ✅ DO
```tsx
// Verwende die Varianten ohne zusätzliche Farb-Klassen
<Button variant="default" size="lg" className="font-serif tracking-wide">
  Reservieren
</Button>

// Verwende outline-dark auf dunklen Hintergründen
<div className="bg-black">
  <Button variant="outline-dark">Action</Button>
</div>
```

### ❌ DON'T
```tsx
// Vermeide manuelle Farb-Overrides
<Button className="bg-gold hover:bg-gold-light text-foreground">
  Reservieren
</Button>

// Verwende keine normale outline-Variante auf dunklen Hintergründen
<div className="bg-black">
  <Button variant="outline">Action</Button> // ❌ Schlecht sichtbar!
</div>
```

## Token-Anpassung

Alle Button-Tokens können zentral in `src/app/globals.css` angepasst werden:

```css
:root {
  /* Button Semantic Tokens */
  --button-primary-bg: #C54F1F;
  --button-primary-hover: #D96D3F;
  --button-primary-text: #1A1A1A;
  /* ... weitere Tokens ... */
}
```

## Utility-Klassen

Für spezielle Fälle stehen auch Utility-Klassen zur Verfügung:

```css
.btn-primary { /* Primäre Button-Farben */ }
.btn-outline { /* Outline Button-Farben */ }
```

## Transitions

Alle Buttons haben eine einheitliche `transition-all duration-300` für sanfte Animationen.

## Accessibility

- Alle Buttons haben `outline-none` mit `focus-visible` States
- Ring-Farben werden automatisch angewendet
- Disabled-States sind standardmäßig implementiert

## Migration

Falls alte Buttons mit manuellen Farb-Klassen existieren:

**Alt:**
```tsx
<Button className="bg-gold hover:bg-gold-light text-foreground">
```

**Neu:**
```tsx
<Button variant="default">
```

Dies stellt sicher, dass alle Buttons einheitlich aussehen und zentral verwaltet werden können!

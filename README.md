# Piitoo's Bootsservice — Digitale Visitenkarte

Statische Webseite für **Piitoo's Bootsservice** (Peter Kowalewski, Oberteuringen).
Gebaut mit [Astro](https://astro.build/), gehostet auf GitHub Pages.

## 🧭 Inhalt

- **Startseite** — Hero mit Bodensee-Sunset, Leistungs-Teaser, CTA
- **Über uns** — Storytelling zur Gründung 2020, Werte
- **Leistungen** — Persenning & Polster, Bootsservice, Coaching
- **Kontakt** — Telefon, E-Mail, Adresse
- **Impressum** & **Datenschutz** — rechtlich notwendige Seiten (mit Platzhaltern)

## 🚀 Lokale Entwicklung

Voraussetzung: [Node.js](https://nodejs.org/) (Version 18 oder höher).

```bash
# Dependencies installieren
npm install

# Dev-Server starten (http://localhost:4321)
npm run dev

# Produktion bauen (Output: ./dist/)
npm run build

# Build lokal anschauen
npm run preview
```

## 📦 Deployment auf GitHub Pages

### Schritt 1 — Repo anlegen

Lege auf GitHub ein Repo namens **`piitoos-bootsservice`** an (oder einen anderen Namen — siehe Schritt 2).

### Schritt 2 — Astro-Config anpassen

In der Datei `astro.config.mjs` müssen `site` und `base` korrekt gesetzt sein:

```js
site: 'https://DEIN-GITHUB-USERNAME.github.io',
base: '/piitoos-bootsservice',  // Repo-Name
```

**Falls eigene Domain genutzt werden soll** (z.B. `piitoos-bootsservice.de`):

```js
site: 'https://piitoos-bootsservice.de',
base: '/',
```

…und in `public/` eine Datei `CNAME` mit dem Domain-Namen anlegen.

### Schritt 3 — Repo pushen

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/piitoos-bootsservice.git
git push -u origin main
```

### Schritt 4 — GitHub Pages aktivieren

1. Repo auf GitHub öffnen → **Settings** → **Pages**
2. Unter **Source** auswählen: **GitHub Actions**
3. Beim nächsten Push auf `main` deployed der Workflow automatisch.

Die Seite ist dann erreichbar unter: `https://DEIN-USERNAME.github.io/piitoos-bootsservice/`

## 🎨 Design-System

### Farben (in `src/styles/global.css`)
- `--color-ink` (#0a1c2e) — Tiefes Marineblau, Haupt-Text
- `--color-deep` (#14365c) — Bodenseeblau, Akzent
- `--color-sunset` (#e87b3c) — Sonnenuntergangs-Orange, Highlight
- `--color-paper` (#f6f3ee) — Warmes Off-White, Hintergrund
- `--color-cream` (#ebe5d8) — Gedämpftes Cream, Sektionen

### Typografie
- **Fraunces** (Display, Headlines)
- **Manrope** (Body)

Beide via Google Fonts geladen. Wenn lokal eingebunden werden soll (Datenschutz!),
Fonts unter `public/fonts/` ablegen und `@font-face`-Regeln in `global.css` ergänzen.

## ⚠️ Wichtige TODOs vor dem Live-Gang

1. **`astro.config.mjs`** — `site` und `base` auf die tatsächliche URL/Repo anpassen
2. **`src/pages/impressum.astro`** — Umsatzsteuer-ID, Berufshaftpflicht und Gewerbeangaben ergänzen
3. **`src/pages/datenschutz.astro`** — Bei Erweiterungen (Kontaktformular, Maps, Analytics) ergänzen
4. **`public/favicon.svg`** — ggf. durch finales Logo ersetzen
5. **Hero-Bild** — Aktuell als SVG-Illustration im Hero. Bei Bedarf durch echtes Foto ersetzen
   (Foto in `public/` ablegen und in `src/pages/index.astro` einbinden)

## 🌍 Mehrsprachigkeit (später)

Die Struktur ist i18n-ready. Für eine englische Version:
1. `src/pages/en/` anlegen mit identischer Struktur
2. Im Header einen Sprachumschalter ergänzen
3. Astros Build-Output erstellt automatisch beide Sprachvarianten

## 📁 Projektstruktur

```
.
├── .github/workflows/
│   └── deploy.yml          # Automatisches GitHub-Pages-Deployment
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # Header, Footer, SEO-Meta
│   ├── pages/
│   │   ├── index.astro         # Startseite
│   │   ├── ueber-uns.astro
│   │   ├── leistungen.astro
│   │   ├── kontakt.astro
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   └── styles/
│       └── global.css          # Design-Tokens & Basis-Styles
├── astro.config.mjs
├── package.json
└── README.md
```

## 📝 Lizenz

© Peter Kowalewski, Piitoo's Bootsservice. Alle Rechte vorbehalten.

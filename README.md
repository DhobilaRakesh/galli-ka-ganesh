# Galli Ka Ganesh – Friends Youth Association

A modern, fully responsive **Angular 18** website for the *Galli Ka Ganesh – Friends Youth
Association* Ganesh Chaturthi celebrations in Pothkapally Village, Odela Mandal, Peddapalli
District, Telangana.

Built with standalone components, lazy-loaded routes, SCSS design tokens, a live festival
countdown, a filterable gallery with lightbox, and a fully responsive sticky navigation.

---

## ✨ Features

- **Angular 18** with standalone components (no NgModules) and lazy-loaded page routes
- Live **festival countdown** (days / hours / minutes / seconds) to September 14
- Responsive **sticky navigation** with animated hamburger menu for mobile
- **Daily Pooja Schedule** with special-pooja highlight cards
- **Programs & Events** with category filtering (Pooja, Cultural, Youth, Community, Festival Day)
- **Festival Gallery** with category filters, responsive grid, lazy-loaded images and a
  keyboard-navigable lightbox (arrow keys + escape supported)
- **Festival Updates** feed with an "important" highlight pulled onto the Home page
- **About Us** page covering mission, members, activities, and achievements timeline
- **Location** page with an embedded Google Map and directions link
- **Contact** page with a validated reactive form (front-end only — see note below) and map
- Fully responsive across mobile, tablet, laptop, desktop and large screens
- Saffron / gold / red / cream Ganesh Chaturthi visual theme with soft shadows, gradients and
  subtle scroll/hover animations

---

## 📁 Project Structure

```text
galli-ka-ganesh/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/        # DataService, CountdownService
│   │   │   ├── models/          # TS interfaces (Event, Gallery, Pooja, Update, Member)
│   │   │   └── constants/       # Festival config (dates, address, contact, social links)
│   │   │
│   │   ├── shared/
│   │   │   └── components/      # Countdown, SectionTitle, Lightbox (reusable UI)
│   │   │
│   │   ├── layout/
│   │   │   ├── header/          # Sticky responsive navigation
│   │   │   └── footer/          # Site footer
│   │   │
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── pooja/
│   │   │   ├── programs/
│   │   │   ├── gallery/
│   │   │   ├── updates/
│   │   │   ├── location/
│   │   │   └── contact/
│   │   │
│   │   ├── app.component.ts/html/scss
│   │   ├── app.config.ts        # Providers (router, animations)
│   │   └── app.routes.ts        # Lazy-loaded route definitions
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── ganesh/          # Hero artwork
│   │   │   ├── gallery/         # Gallery placeholder images (SVG)
│   │   │   ├── events/
│   │   │   └── association/
│   │   └── icons/
│   │
│   ├── styles.scss              # Global design tokens & utility classes
│   ├── index.html
│   └── main.ts
│
├── public/                      # Static files copied as-is (favicon, etc.)
├── angular.json
├── package.json
├── tsconfig*.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.19+ or 20.9+ (Angular 18 requirement)
- **npm** 9+ (or yarn/pnpm)
- Angular CLI 18 (optional globally, but recommended): `npm install -g @angular/cli@18`

### 1. Install dependencies
```bash
cd galli-ka-ganesh
npm install
```

### 2. Run the development server
```bash
npm start
# or: ng serve
```
Visit **http://localhost:4200** — the app reloads automatically on file changes.

### 3. Build for production
```bash
npm run build:prod
# or: ng build --configuration production
```
Output is generated in `dist/galli-ka-ganesh/browser`, ready to deploy to any static host
(Netlify, Vercel, Firebase Hosting, GitHub Pages, Nginx, etc.).

### 4. Run unit tests
```bash
npm test
```

---

## 🛠 Customizing Content

All festival-specific text lives in one place, making updates easy without touching component
code:

- **`src/app/core/constants/app.constants.ts`** — festival name, dates, address, phone, email,
  social links, and the map search query. **Update `startDate`/`endDate` here for future years.**
- **`src/app/core/services/data.service.ts`** — daily pooja schedule, events, gallery images,
  announcements, association members and achievements. Replace the placeholder gallery image
  paths with real photos dropped into `src/assets/images/gallery/`.

## 🖼 Replacing Placeholder Images

The gallery currently uses generated SVG placeholders (`src/assets/images/gallery/gallery-1.svg`
… `gallery-7.svg`) so the site looks visually complete out of the box. To use real festival
photos:

1. Add your `.jpg`/`.png`/`.webp` files to `src/assets/images/gallery/`.
2. Update the `src` paths returned by `DataService.getGalleryImages()`.

## 🗺 Google Maps

The Location and Contact pages use a keyless Google Maps **embed** (`google.com/maps?q=...&output=embed`),
which works without an API key. For a richer, interactive map (custom markers, styling), swap in
the Google Maps JavaScript API with your own API key.

## 📩 Contact Form

The contact form validates input client-side but is **not wired to a backend**. To make it
functional, connect it to a service such as Formspree, EmailJS, a serverless function, or your
own API endpoint inside `ContactComponent.onSubmit()`.

---

## 🎨 Design System

Colors, gradients, shadows, radii and fonts are defined as CSS custom properties in
`src/styles.scss`, so the whole site's look can be re-themed from one file:

| Token | Purpose |
|---|---|
| `--color-saffron`, `--color-red`, `--color-gold` | Primary festival palette |
| `--color-cream` | Light background |
| `--gradient-hero` | Hero / dark section background |
| `--font-heading` (Playfair Display), `--font-body` (Poppins) | Typography |

---

Built with 🧡 for **Galli Ka Ganesh – Friends Youth Association**, Pothkapally Village.

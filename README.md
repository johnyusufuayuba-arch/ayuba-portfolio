# Ayuba Yusufu — Software & Web Developer

A dark-theme developer portfolio landing page built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build into `dist/`
- `npm run preview` — preview the production build
- `npm run typecheck` — run the TypeScript type checker

## Deploy (Vercel)

Framework preset: **Vite**. Build command `npm run build`, output directory `dist`. Push to a Git repo and import it, or run `vercel`.

## Structure

```
src/
  App.tsx                  section order
  index.css                global reset + .hero-heading gradient
  components/
    HeroSection.tsx        navbar, heading, magnetic portrait
    MarqueeSection.tsx     two scroll-driven image rows
    AboutSection.tsx       corner decorations + scroll-reveal text
    ServicesSection.tsx    white numbered services list
    ProjectsSection.tsx    sticky-stacking scaling cards
    ContactSection.tsx     mailto + GitHub/LinkedIn links
    FadeIn.tsx             scroll-triggered fade/slide wrapper
    Magnet.tsx             mouse-following magnetic hover
    AnimatedText.tsx       character-by-character scroll reveal
    ContactButton.tsx      gradient pill
    LiveProjectButton.tsx  ghost outline pill
```

## Notes

Project screenshots and the hero portrait load from `public/`, falling back to template placeholders until you add the real files:

- Portrait: `public/portrait.png` (falls back to the template figure until added).
- Projects: `public/projects/<slug>-1.png`, `-2.png`, `-3.png` where `<slug>` is `saydhub`, `loadbalancer`, or `warehouse` (each falls back to the original mockup until added).

Keep each image under ~500KB (PNG or WebP). The marquee GIFs and the About corner art are still hot-linked template assets (figma.site, motionsites.ai) — swap them for your own when ready so the page doesn't depend on those hosts staying up.

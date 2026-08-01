# Universal Flareon Industries — B2B Export Portal

React 19 + Vite 7 + Tailwind CSS v4 + React Router 7.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Where to edit

| What | File |
| --- | --- |
| Every fact, spec, price grade, cert, FAQ | `src/data/site.js` |
| The 8 target markets + all translations | `src/data/markets.js` |
| Colours, fonts, texture, animation | `src/index.css` (`@theme` block) |
| Buttons / section shells / badges | `src/components/ui.jsx` |
| Hero visual placeholder | `src/components/CoalBed.jsx` |
| Certificate PDFs | `public/docs/` |

## Design language

Charcoal-black substrate, **ash** text, **ember** accent — the palette is the
product. Display type is Archivo (industrial, tight), body is Inter, and every
spec number is set in JetBrains Mono so data always reads as data.

## Language switcher — English only, for now

The site ships **strictly in English**. The navbar dropdown
(`src/components/LanguageMenu.jsx`) already lists all eight target markets —
China, UAE, Netherlands, Germany, Ireland, Maldives, Canada, Japan — greyed out
and tagged **SOON**, so the slot is designed and positioned for later.

To turn a market on:

1. Add its `strings` block in `src/data/markets.js` (partial is fine — missing
   keys fall back to English).
2. Set `ready: true` on that market.

That's it. RTL is already handled — Arabic will set `dir="rtl"` on the document
automatically. Anything not `ready` can never be selected, so the site can never
render half-translated.

## Not yet wired

- Quote form has no backend — hook `submit()` in `src/pages/ExportQuote.jsx`.
- Real photography/video replaces `<CoalBed />`.
- Certificate PDFs are placeholders (see `public/docs/README.txt`).

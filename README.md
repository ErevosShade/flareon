# Flareon Briquettes — B2B Export Portal

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
| Photography registry (paths + alt text) | `src/data/images.js` |
| The 10 markets + all translations | `src/data/markets.js` |
| Colours, fonts, texture, animation | `src/index.css` (`@theme` block) |
| Buttons / section shells / badges | `src/components/ui.jsx` |
| Framed photos, galleries, photo strips | `src/components/Figure.jsx` |
| Certificate PDFs | `public/docs/` |
| Optimised photography | `public/images/` |

## Design language

Charcoal-black substrate, **ash** text, **ember** accent — the palette is the
product. Display type is Space Grotesk, body is Work Sans, and every spec number
is set in JetBrains Mono so data always reads as data. Cards use `.panel` for the
shell and `.panel-hover` for the lift-and-glow interaction.

A smoke trail follows the cursor on every page except the Export Desk
(`src/components/SmokeCursor.jsx`). Inside any `[data-smoke="green"]` region —
currently the Company sustainability band — the smoke turns green.

## Pages

`/` · `/company` · `/products` · `/gallery` · `/compliance` · `/export-quote`

## Language switcher

All ten markets in `src/data/markets.js` are selectable: English, Russian,
Chinese, Arabic, Dutch, German, Irish, Maldivian, Canadian and Japanese. Core UI
strings are translated for en/ru/zh/ar/nl/de/ja; anything missing falls back to
English, so a partly translated locale degrades gracefully rather than rendering
blank. RTL is handled automatically — Arabic sets `dir="rtl"` on the document.

To extend a locale, add keys to its block in `src/data/markets.js`. Note that
only the navbar and hero are translated today — body copy on every page is
English regardless of the selected market.

## Not yet wired

- Both quote forms are front-end only — hook the `onSubmit` handlers in
  `src/pages/ExportQuote.jsx` to your CRM, email API or WhatsApp Business
  endpoint.
- Footer social links point at bare domains; replace the `href`s in
  `company.socials` (`src/data/site.js`) with the real profile URLs.
- Sedex SMETA audit PDF has not been supplied (see `public/docs/README.txt`).

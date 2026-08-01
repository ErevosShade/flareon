// LANGUAGE / MARKET SWITCHER — currently English only.
//
// The site ships strictly in English. The 8 target markets below are listed in
// the navbar dropdown as "soon" so the slot exists in the UI now; flip a market
// to `ready: true` once its `strings` block is filled in and it becomes
// selectable. Nothing else in the app needs to change.
export const markets = [
  { code: "EN", name: "English", flag: "🌐", locale: "en", ready: true, note: "Global / default" },
  { code: "CN", name: "China", flag: "🇨🇳", locale: "zh", ready: false, note: "中文" },
  { code: "AE", name: "UAE", flag: "🇦🇪", locale: "ar", ready: false, note: "العربية" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", locale: "nl", ready: false, note: "Nederlands" },
  { code: "DE", name: "Germany", flag: "🇩🇪", locale: "de", ready: false, note: "Deutsch" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", locale: "en", ready: false, note: "English (IE)" },
  { code: "MV", name: "Maldives", flag: "🇲🇻", locale: "en", ready: false, note: "English (MV)" },
  { code: "CA", name: "Canada", flag: "🇨🇦", locale: "en", ready: false, note: "English / Français" },
  { code: "JP", name: "Japan", flag: "🇯🇵", locale: "ja", ready: false, note: "日本語" },
];

export const rtlLocales = ["ar"];

// Core UI strings. Anything missing falls back to English, so a future locale
// can be added a few keys at a time without breaking the page.
export const strings = {
  en: {
    "nav.home": "Home",
    "nav.company": "Company",
    "nav.products": "Products",
    "nav.compliance": "Specs & Certs",
    "nav.export": "Export Desk",
    "cta.quote": "Get FOB quote",
    "cta.sample": "Request free sample pack",
    "cta.report": "View Bureau Veritas report",
    "hero.badge": "ISO 9001:2015 (TÜV SÜD) & Sedex SMETA certified plant",
    "hero.h1a": "India's largest integrated",
    "hero.h1b": "coconut shell charcoal",
    "hero.h1c": "briquette manufacturer",
    "hero.sub":
      "Export-grade, chemical-free BBQ briquettes engineered for high heat, 4-hour burn time and ultra-low ash (<12%). Direct factory capacity of 4,000 MT per year.",
    "metrics.capacity": "Annual export output",
    "metrics.burn": "Guaranteed burn duration",
    "metrics.power": "Captive windmill power",
    "metrics.chem": "Chemicals — food-grade binder only",
  },
};

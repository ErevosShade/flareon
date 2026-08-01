// Single source of truth for every factual claim on the site.
// Edit here — pages read from this file.

export const company = {
  name: "Universal Flareon Industries",
  brand: "FLAREON",
  tagline: "get grillin'",
  address:
    "3/147 Muthandipalayam, K.Ayyampalayam, Palladam, Tirupur, Tamil Nadu, India-641664",
  plant: "Palladam Plant, Tirupur, Tamil Nadu",
  whatsapp: "+91 99441 33441",
  whatsappHref: "https://wa.me/919944133441",
  emails: ["enquiry@flareonbbq.com", "care@flareonbbq.com"],
  ports: "Tuticorin Port (220 km) / Chennai Port (450 km)",
};

// Section 2 of the homepage wireframe.
export const metrics = [
  { key: "capacity", value: "4,000 MT", label: "Annual export output" },
  { key: "burn", value: "4 Hours", label: "Guaranteed burn duration" },
  { key: "power", value: "3.5 MW", label: "Captive windmill power" },
  { key: "chem", value: "0%", label: "Chemicals — food-grade binder only" },
];

// Company page — the three infrastructure pillars.
export const pillars = [
  {
    tag: "Chemical-free standard",
    title: "100% food-grade binders",
    body: "Pure maize starch binder only. Zero barium nitrate, zero sodium nitrate, zero chemical accelerants — so nothing carcinogenic comes off the coal and into the food.",
    stat: "0 chemical additives",
  },
  {
    tag: "UV solar drying yard",
    title: "55,000 sq. ft UV covered yard",
    body: "Natural solar drying under UV-trapping sheets. Multi-day slow drying prevents internal micro-cracks — which is what gives the briquette its long, steady, non-spitting burn.",
    stat: "55,000 sq. ft",
  },
  {
    tag: "Clean renewable power",
    title: "3.5 MW captive windmills",
    body: "We generate 3.5 MW of wind energy against a combined plant draw of 2.8 MW. Every container that leaves Palladam is manufactured carbon-negative.",
    stat: "3.5 MW vs 2.8 MW draw",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Raw shell recovered",
    body: "Coconut shell waste upcycled straight out of the landfill stream.",
  },
  {
    n: "02",
    title: "Crushing & carbonising",
    body: "Controlled pyrolysis tuned for high fixed carbon.",
  },
  {
    n: "03",
    title: "Maize binding & compacting",
    body: "High-density hydraulic pressing into pillow, hexagon and cube.",
  },
  {
    n: "04",
    title: "UV solar drying & packing",
    body: "Multi-day UV drying, then poly-bag sealed against sea humidity.",
  },
];

export const products = [
  {
    id: "briquettes",
    kicker: "Main product",
    name: "Coconut Charcoal BBQ Briquettes",
    blurb:
      "Pillow, hexagon and cube configurations engineered for commercial barbecue kitchens and retail supermarket shelves.",
    specs: [
      { k: "Burn duration", v: "4 hours (240 min)" },
      { k: "Ignition speed", v: "Ready in 20 minutes" },
      { k: "Ash content", v: "< 12% — clean white ash" },
      { k: "Heat output", v: "High, uniform calorific value" },
    ],
    shapes: ["Pillow", "Hexagon", "Cube"],
    cta: "Request briquette quote",
  },
  {
    id: "lighter-cubes",
    kicker: "Accessories",
    name: "Light 'Er Up Fire Starter Cubes",
    blurb:
      "Natural fire starter cubes for fast, hassle-free ignition — no petroleum odour carried into the food.",
    specs: [
      { k: "Ignition speed", v: "Fires briquettes in under 10 min" },
      { k: "Safety", v: "Smokeless & 100% odourless" },
      { k: "Burn duration", v: "Burns long enough to light a full batch" },
      { k: "Use with", v: "All Flareon briquette shapes" },
    ],
    shapes: ["Boxed 24s", "Boxed 32s"],
    cta: "Request lighter cube specs",
  },
];

// Grade tiers — the "side-by-side spec + price grade" pattern from Briquette House,
// with an indicative price band instead of "Ask for Price" only.
export const grades = [
  {
    name: "Standard",
    use: "Volume BBQ retail",
    ash: "< 14%",
    moisture: "< 6%",
    burn: "3 hrs",
    fixedCarbon: "≥ 72%",
    price: "Indicative band on enquiry",
    highlight: false,
  },
  {
    name: "Premium",
    use: "HORECA & supermarket private label",
    ash: "< 12%",
    moisture: "< 5%",
    burn: "4 hrs",
    fixedCarbon: "≥ 78%",
    price: "Indicative band on enquiry",
    highlight: true,
  },
  {
    name: "Super Premium",
    use: "Shisha lounges & specialty export",
    ash: "< 10%",
    moisture: "< 4.8%",
    burn: "4+ hrs",
    fixedCarbon: "≥ 82%",
    price: "Indicative band on enquiry",
    highlight: false,
  },
];

// Compliance page — Bureau Veritas comparative benchmark.
export const benchmark = {
  columns: ["Parameter tested", "FLAREON coconut shell", "Leading wood charcoal", "BV standard"],
  rows: [
    ["Volatile matter (%)", "19.8% — clean heat", "30.2% — high fumes", "< 22.0%"],
    ["Ash content (%)", "11.5% — minimal ash", "20.1% — heavy ash", "< 14.0%"],
    ["Moisture content (%)", "4.8%", "5.9%", "< 6.0%"],
    ["Burn duration", "4 hours (240 min)", "1.5 – 2 hours", "> 3 hours"],
    ["Time to ash-over", "50+ minutes", "~30 minutes", "40+ minutes"],
  ],
};

export const certificates = [
  {
    tag: "ISO certificate",
    title: "ISO 9001:2015 (TÜV SÜD South Asia)",
    body: "Consistent quality management systems and international compliance.",
    file: "/docs/flareon-iso-9001.pdf",
    cta: "Download ISO 9001 PDF",
  },
  {
    tag: "Ethical factory audit",
    title: "Sedex SMETA 2-Pillar Certified Audit",
    body: "Verifies labour standards, environmental management and ethical factory operations.",
    file: "/docs/flareon-sedex-smeta.pdf",
    cta: "Download Sedex audit PDF",
  },
  {
    tag: "Lab test report",
    title: "Bureau Veritas Comparative Test Report",
    body: "Third-party laboratory report detailing calorific value and combustion curves.",
    file: "/docs/flareon-bureau-veritas.pdf",
    cta: "Download Bureau Veritas report",
  },
  {
    tag: "Safety & COA",
    title: "MSDS & Certificate of Analysis (COA)",
    body: "Material safety data sheet for customs clearance and ocean freight.",
    file: "/docs/flareon-msds-coa.pdf",
    cta: "Download MSDS / COA sheet",
  },
];

export const oem = [
  {
    title: "Custom box printing",
    body: "Full CMYK artwork, barcode compliance and your brand logo on every carton.",
  },
  {
    title: "Master carton sizes",
    body: "1 kg, 3 kg, 5 kg and 10 kg master box options.",
  },
  {
    title: "Moisture protection",
    body: "Inner poly-bag lining rated against sea freight humidity.",
  },
];

export const exportTerms = [
  { k: "Loading ports", v: "Tuticorin Port / Chennai Port, India" },
  { k: "Minimum order (MOQ)", v: "Flexible — from 1 × 20ft FCL" },
  { k: "Payment terms", v: "T/T wire transfer & irrevocable L/C" },
  { k: "Custom packaging", v: "Private label 1 kg / 3 kg / 10 kg master cartons" },
];

export const containers = [
  { id: "20ft", label: "20ft FCL", tons: "~15 tons", pallets: "~19 pallets" },
  { id: "40hc", label: "40ft High Cube", tons: "~26 tons", pallets: "~33 pallets" },
];

// Indicative sailing times from Tuticorin — powers the live container estimate.
export const destinationPorts = [
  { port: "Jebel Ali (UAE)", transit: "7–10 days" },
  { port: "Malé (Maldives)", transit: "5–8 days" },
  { port: "Shanghai (China)", transit: "18–24 days" },
  { port: "Yokohama (Japan)", transit: "20–26 days" },
  { port: "Rotterdam (Netherlands)", transit: "22–28 days" },
  { port: "Hamburg (Germany)", transit: "23–29 days" },
  { port: "Dublin (Ireland)", transit: "24–30 days" },
  { port: "Vancouver (Canada)", transit: "28–34 days" },
  { port: "Other / custom port", transit: "Quoted on enquiry" },
];

export const activeDestinations = [
  { flag: "🇷🇺", name: "Russia" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇬🇹", name: "Guatemala" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇦🇪", name: "UAE" },
];

export const shippingLines = [
  "Maersk",
  "MSC",
  "CMA CGM",
  "Hapag-Lloyd",
  "ONE",
  "Evergreen",
  "COSCO",
  "Wan Hai",
];

export const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "One 20ft FCL — roughly 15 tons. We do not force 18-ton-plus FCL-only terms, so a first trial container stays affordable. Repeat buyers usually move to 40ft high cube at ~26 tons.",
  },
  {
    q: "Do you show pricing?",
    a: "We publish an indicative FOB band per grade on enquiry, quoted the same day. Final FOB/CIF depends on grade, shape, packaging and destination port — submit the container form and you get a real number, not a callback request.",
  },
  {
    q: "Which payment terms do you accept?",
    a: "T/T telegraphic transfer and irrevocable Letter of Credit. L/C is available from the first container for buyers who need it.",
  },
  {
    q: "Can I get a free sample before ordering?",
    a: "Yes. We ship a free sample pack — briquettes in your chosen shape plus lighter cubes — with courier at cost. Full lab COA travels with the sample.",
  },
  {
    q: "Do you do private label / OEM?",
    a: "Yes. Full CMYK carton printing, barcode compliance, your logo, and 1/3/5/10 kg master boxes. Send artwork or request our dieline template.",
  },
  {
    q: "Can we visit the factory?",
    a: "Buyers are welcome at the Palladam plant, Tirupur — 220 km from Tuticorin Port. Tell us your dates on the enquiry form and we arrange the visit.",
  },
];

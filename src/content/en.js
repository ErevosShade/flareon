// ENGLISH SOURCE OF TRUTH for every user-visible string on the site.
//
// Locale files in this folder mirror this shape. Anything a locale omits falls
// back to the English value here, so a partial translation degrades to English
// per-string instead of rendering blank.
//
// Numbers, spec values, emails and the address deliberately live in
// src/data/site.js and are NOT translated — they read the same in every market.

export default {
  nav: {
    home: "Home",
    company: "Company",
    products: "Products",
    gallery: "Gallery",
    compliance: "Specs & Certs",
    export: "Export Desk",
  },

  cta: {
    quote: "Get FOB quote",
    sample: "Request free sample pack",
    report: "View Certifications & Reports",
    catalogue: "View full catalogue",
    oem: "OEM & private label",
    allDocs: "All four documents",
    productRange: "See the product range",
    factoryVisit: "Book a factory visit",
    auditDocs: "Audit documents",
    whatsapp: "WhatsApp the export desk",
    openExportDesk: "Open the export desk",
    oemTemplate: "Request OEM packaging template",
  },

  common: {
    comingSoon: "Coming soon",
    photoComingSoon: "Photo coming soon",
    downloadPdf: "Download PDF",
    languageMarket: "Language / market",
    toggleMenu: "Toggle menu",
    soon: "Soon",
  },

  roles: {
    managingPartner: "Managing Partner",
  },

  // site.js holds the bare numbers; the unit word is translated here.
  units: {
    hours: "Hours",
    hoursShort: "hrs",
  },

  // Spec row labels — shared by the grade cards on Home and Products.
  specs: {
    ash: "Ash content",
    moisture: "Moisture",
    burn: "Burn time",
    fixedCarbon: "Fixed carbon",
    mostExported: "Most exported",
    priceCta: "Get {grade} FOB price",
  },

  home: {
    hero: {
      badge: "ISO 9001:2015 (TÜV SÜD) & Sedex SMETA certified plant",
      h1a: "India's largest integrated",
      h1b: "coconut shell charcoal",
      h1c: "briquette manufacturer",
      sub: "Export-grade, chemical-free BBQ briquettes engineered for high heat, 4-hour burn time and ultra-low ash (<12%). Direct factory capacity of 5,000 MT per year.",
    },
    pillars: {
      eyebrow: "Why the coal burns differently",
      title: "Integrated from shell to shipment",
      sub: "Shell collection, activated carbon plant, briquetting and BBQ grill assembly all sit under one roof in Palladam, Tamil Nadu, India — which is why we can promise raw material quality instead of hoping for it.",
    },
    plant: {
      eyebrow: "Inside Palladam",
      title: "The plant, not a stock photo",
      sub: "Shell intake, carbonising, pressing, UV drying and packing — photographed on the line at our own facility in Palladam, Tamil Nadu, India.",
      pressLabel: "Stage 03 — pressing",
      pressNote: "High-density hydraulic pressing into pillow, hexagon and cube.",
      dryLabel: "Stage 04 — UV drying",
      dryNote: "Multi-day slow drying, so the briquette never micro-cracks.",
      despatchLabel: "Despatch",
      despatchNote: "Poly-lined 25 kg sacks staged for container loading.",
    },
    grades: {
      eyebrow: "Spec & price grades",
      title: "Pick a grade, see the numbers",
      sub: "Three tiers, published side by side — ash, moisture, fixed carbon and burn time on the same screen, so you can compare us against any quote already on your desk.",
    },
    products: {
      eyebrow: "What we ship",
      title: "Two lines, one raw material: the coconut shell.",
      sub: "Coconut shell charcoal briquettes for the grill, and activated carbon for filtration. Nothing else — because focus is what makes us the best at both.",
    },
    benchmark: {
      eyebrow: "Bureau Veritas — third-party tested",
      title: "Against leading wood charcoal",
      sub: "Not our marketing numbers. The comparative combustion study, reproduced in full and downloadable as the original PDF.",
    },
    trust: {
      eyebrow: "Documented, not claimed",
      title: "Every certificate is a download, not a photo",
      body: "The TÜV SÜD ISO 9001:2015 certificate, the Bureau Veritas comparison study, our MSDS and the Coconut Development Board export registration — all four are searchable PDFs you can download before you send a single enquiry.",
    },
    faq: {
      eyebrow: "Before you enquire",
      title: "The six questions every buyer asks",
    },
    partner: {
      eyebrow: "Meet the managing partner",
    },
    closing: {
      titleA: "Start with one container.",
      titleB: "Not eighteen tons.",
      sub: "Flexible MOQ from a single 20ft FCL, T/T or irrevocable L/C, and a free sample pack before you commit.",
    },
  },

  company: {
    hero: {
      eyebrow: "Company & eco-infrastructure",
      titleA: "The only fully integrated coconut charcoal",
      titleB: "manufacturer in India",
      sub: "From coconut shell collection to activated carbon, briquette manufacturing and BBQ grill assembly — Flareon Briquettes controls 100% of raw material quality.",
    },
    pillars: {
      eyebrow: "Manufacturing pillars",
      title: "Three things competitors outsource. We own all three.",
    },
    lines: {
      eyebrow: "One shell, two product lines",
      title: "The same carbon feeds the briquette press and the activated carbon plant",
      briquettesTitle: "Charcoal briquettes",
      briquettesBody:
        "Coconut shell is one of the few agricultural residues dense enough to carbonise into a genuinely high fixed-carbon fuel. We take the coarse fraction of our own shell char, bind it with food-grade potato starch and press it under high hydraulic pressure into hexagonal, pillow, cube and honeycomb shapes. The density is the point: a tighter particle structure burns slower and hotter than lump wood charcoal, holds cooking temperature for hours rather than minutes, and leaves a small volume of clean white ash instead of a grate full of grit. Because there are no nitrate accelerants anywhere in the recipe, nothing chemical transfers to the food — which is what makes the product acceptable to commercial barbecue kitchens, shisha lounges and supermarket private-label buyers who have to answer for what they sell.",
      carbonTitle: "Activated carbon",
      carbonBody:
        "The finer fraction goes the other way. Steam activation at high temperature blows open the internal pore structure of the same shell char, turning a simple fuel into an adsorbent with an enormous internal surface area — the material that pulls chlorine, organics, colour and odour out of water, strips solvents from air streams, and recovers gold from leach solutions. Coconut shell is the preferred feedstock for it worldwide precisely because its pores are predominantly micropores, which is what makes it effective at low concentrations where coal-based carbons underperform. Running both lines off one intake is what lets us hold a grade: we choose which fraction goes where, instead of accepting whatever a trader delivers that week.",
    },
    process: {
      eyebrow: "End-to-end process — briquettes",
      title: "Landfill shell to sealed carton",
      sub: "Four controlled stages. Nothing sub-contracted, nothing chemically accelerated.",
      carbonEyebrow: "End-to-end process — activated carbon",
      carbonTitle: "Shell char to filtration-grade carbon",
      carbonSub: "The second line off the same raw material: activation, milling and testing before a sack is sealed.",
    },
    sustainability: {
      eyebrow: "Sustainability impact",
      figureLabel: "Renewable feedstock",
      figureNote: "Shell waste from working coconut plantations — a by-product stream, never a felled tree.",
    },
  },

  products: {
    hero: {
      eyebrow: "Products & OEM",
      titleA: "Built for commercial heat.",
      titleB: "Packed for your label.",
      sub: "Coconut shell charcoal briquettes for the grill, and activated carbon for filtration — supplied loose, retail-packed, or fully private-labelled under your own brand.",
    },
    briquettes: {
      figureLabel: "Four hours of steady heat",
      figureNote: "Pressed from carbonised coconut shell with a potato starch binder only.",
      shapesEyebrow: "Shapes we press",
      shapesTitle: "Four shapes, each doing a different job",
      shapesSub: "Every shape runs the same chemistry — the geometry is what changes how it lights, stacks and burns.",
      gradesEyebrow: "Grade comparison",
      gradesTitle: "Three grades of the same briquette",
      gradesSub: "Ash, moisture, burn time and fixed carbon, side by side — pick the tier that matches your market.",
    },
    carbon: {
      comingSoonA: "Coming",
      comingSoonB: "Soon",
      comingSoonNote: "Grades, iodine values and mesh sizes are being finalised. Register your requirement and we'll come to you first.",
      specGrades: "Grades",
      specIodine: "Iodine value",
      specMesh: "Mesh sizes",
      specPacking: "Packing",
      ctaDisabled: "Request quote — coming soon",
      ctaTitle: "Activated carbon is not yet open for orders",
    },
    oem: {
      eyebrow: "Export OEM",
      title: "Private label & custom packaging desk",
      sub: "Send us artwork and a target retail size. We return a dieline, a carton mock-up and a container capacity calculation.",
      figureLabel: "Private label, printed and packed",
      figureNote: "Full CMYK cartons and retail bags — your brand, our line.",
    },
  },

  gallery: {
    eyebrow: "Gallery",
    titleA: "The plant, the material,",
    titleB: "the burn.",
    sub: "Photographed on our own line in Palladam, Tamil Nadu, India — raw shell charcoal through pressing, drying, packing and despatch. Hover any frame for context.",
  },

  compliance: {
    hero: {
      eyebrow: "Quality specs & compliance hub",
      titleA: "Third-party numbers.",
      titleB: "Downloadable proof.",
      sub: "Bureau Veritas comparative combustion testing, ISO 9001:2015 by TÜV SÜD South Asia, the MSDS your customs broker will ask for, and our Coconut Development Board export registration.",
    },
    lab: {
      eyebrow: "Lab data",
      title: "Flareon vs leading wood charcoal",
      sub: "Bureau Veritas comparative analysis study. Every row below appears in the downloadable report.",
    },
    downloads: {
      eyebrow: "Downloads",
      title: "Official certificates & audit documents",
      sub: "All PDFs, no gated forms — the original documents exactly as issued.",
    },
    ask: {
      title: "Need a document we haven't listed?",
      body: "Phytosanitary certificates, Certificate of Origin, fumigation records and packing lists are issued per shipment.",
      cta: "Ask the export desk",
    },
  },

  exportDesk: {
    hero: {
      eyebrow: "Export logistics & container desk",
      titleA: "Tell us the port.",
      titleB: "We'll quote FOB or CIF.",
      sub: "Flexible MOQ from a single 20ft FCL, T/T or irrevocable L/C from the first container, and same-day indicative pricing — not a callback request.",
    },
    form: {
      fullName: "Full name",
      companyName: "Company name",
      businessEmail: "Business email",
      whatsappPhone: "WhatsApp phone",
      destinationPort: "Destination port",
      tellUsPort: "Tell us the port",
      portPlaceholder: "Port name, country",
      containerLoad: "Container load",
      grade: "Grade",
      cartonSize: "Master carton size",
      cartonUnit: "kg",
      paymentTerms: "Payment terms",
      paymentTT: "T/T wire transfer",
      paymentLC: "Irrevocable Letter of Credit (L/C)",
      notes: "Anything else? (private label, factory visit dates, sample request)",
      namePlaceholder: "John Doe",
      companyPlaceholder: "Global Imports LLC",
      emailPlaceholder: "name@company.com",
    },
    briquetteForm: {
      eyebrow: "Briquettes",
      title: "Charcoal briquette FOB / CIF inquiry",
      submit: "Submit briquette quote request →",
      footnote: "Indicative price band returned the same working day.",
    },
    carbonForm: {
      eyebrow: "Activated carbon",
      title: "Activated carbon enquiry",
      intro: "The carbon line is not open for orders yet. Register your requirement and we will come back to you with grades and pricing the moment it is.",
      application: "Application",
      appWater: "Water treatment",
      appAir: "Air & gas purification",
      appFood: "Food & beverage",
      appGold: "Gold recovery",
      appOther: "Other industrial use",
      gradeInterest: "Grade of interest",
      gradePac: "Powdered (PAC)",
      gradeGac: "Granular (GAC)",
      gradePellet: "Pelletised",
      gradeUnsure: "Not sure yet",
      quantity: "Indicative quantity",
      quantityPlaceholder: "e.g. 10 MT per month",
      specNotes: "Specification notes (iodine value, mesh size, packing)",
      submit: "Register carbon requirement →",
      footnote: "We'll contact you as soon as the line opens for orders.",
    },
    sent: {
      title: "Enquiry ready to send.",
      body: "This build has no backend wired up yet. Hook the submit handler in {file} to your CRM, email API or WhatsApp Business endpoint.",
      whatsapp: "Send via WhatsApp instead",
      edit: "Edit enquiry",
    },
    desk: {
      eyebrow: "Direct export sales desk",
      title: "Talk to a person, not a ticket queue",
      whatsapp: "WhatsApp",
      whatsappNote: "Fastest reply",
      enquiries: "Enquiries",
      enquiriesNote: "General export desk",
      partnerNote: "{name} — for partnerships and large contracts",
    },
    reach: {
      eyebrow: "Global reach",
      title: "Containers already moving",
    },
  },

  notFound: {
    code: "Error 404",
    titleA: "That page went up in",
    titleB: "smoke.",
    body: "The link may be out of date, or the page may have moved. Everything we publish is one click away below.",
    home: "Back to home",
    products: "View products",
    exportDesk: "Export desk",
  },

  footer: {
    exportTerms: "Export terms",
    navigate: "Navigate",
    shippingTo: "Shipping now to",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Supply",
  },

  // ---- Content that also carries data values (site.js holds the numbers) ----

  metrics: {
    capacity: "Annual export output",
    burn: "Guaranteed burn duration",
    power: "Captive windmill power",
    chem: "Chemicals — food-grade binder only",
  },

  pillars: [
    {
      tag: "Chemical-free standard",
      title: "100% food-grade binders",
      body: "Pure potato starch binder only. Zero barium nitrate, zero sodium nitrate, zero chemical accelerants — so nothing carcinogenic comes off the coal and into the food.",
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
  ],

  processSteps: [
    { title: "Raw shell recovered", body: "Coconut shell waste upcycled straight out of the landfill stream." },
    { title: "Crushing & carbonising", body: "Controlled pyrolysis tuned for high fixed carbon." },
    { title: "Potato starch binding & compacting", body: "High-density hydraulic pressing into pillow, hexagon and cube." },
    { title: "UV solar drying & packing", body: "Multi-day UV drying, then poly-bag sealed against sea humidity." },
  ],

  carbonProcessSteps: [
    { title: "Shell char selection", body: "High fixed-carbon shell charcoal graded and screened before activation." },
    { title: "Steam activation", body: "High-temperature steam activation opens the internal pore structure." },
    { title: "Milling & sieving", body: "Milled to powder or granular mesh grades and sieved to specification." },
    { title: "Testing & packing", body: "Iodine value checked, then sealed into 25 kg moisture-barrier sacks." },
  ],

  productItems: {
    briquettes: {
      name: "Coconut Shell Charcoal Briquettes for BBQ",
      blurb: "Hexagonal, pillow, cube and honeycomb shapes engineered for commercial barbecue kitchens, shisha lounges and retail supermarket shelves.",
      points: [
        "4+ hours burning time & ready in 20 minutes",
        "Minimal ash residue & uniform, high heat output",
        "Odourless, smokeless & all-natural composition",
        "High density for a longer burn & easy handling",
      ],
      pointsFull: [
        "4+ hours burning time",
        "Minimal ash residue",
        "Odourless & smokeless",
        "Heats up in 20 minutes",
        "All-natural composition",
        "High density for longer burn time",
        "Uniform, high heat output",
        "Easy handling",
        "Lower carbon monoxide production when compared with wood charcoal",
      ],
      cta: "Request briquette quote",
    },
    "activated-carbon": {
      name: "Activated Carbon",
      blurb: "High-adsorption coconut shell activated carbon for water, air and industrial filtration — milled on the same line that feeds our briquette press.",
      points: ["Coming soon"],
      cta: "Request quote",
    },
  },

  briquetteShapes: {
    hexagon: {
      name: "Hexagonal",
      points: [
        "Hollow core draws air through the centre for a faster, cleaner light",
        "Flat faces stack tight — highest payload per carton",
        "Longest steady burn of the range, built for commercial grills",
      ],
    },
    pillow: {
      name: "Pillow",
      points: [
        "The familiar supermarket BBQ shape buyers already recognise",
        "Ashes over evenly for direct grilling and smoking",
        "Rounded edges resist chipping in retail handling",
      ],
    },
    cube: {
      name: "Cube",
      points: [
        "Cut to shisha bowl sizes — 22 mm, 25 mm and 26 mm",
        "Dense, low-ash body sized for a full session",
        "Sharp edges catch quickly on a lighting grill",
      ],
    },
    honeycomb: {
      name: "Honeycomb",
      points: [
        "Multi-hole face gives the largest burning surface area",
        "Fastest heat ramp when a grill needs to be up in minutes",
        "Sits flat and stable in stoves and bucket grills",
      ],
    },
  },

  grades: {
    Standard: { name: "Standard", use: "Volume BBQ retail" },
    Premium: { name: "Premium", use: "HORECA & supermarket private label" },
    "Super Premium": { name: "Super Premium", use: "Shisha lounges & specialty export" },
    price: "Indicative band on enquiry",
  },

  // The BV standard column is numeric and read straight from src/data/site.js;
  // only the parameter name and the two descriptive cells are translated.
  benchmark: {
    columns: ["Parameter tested", "FLAREON coconut shell", "Leading wood charcoal", "BV standard"],
    rows: [
      ["Volatile matter (%)", "19.8% — clean heat", "30.2% — high fumes"],
      ["Ash content (%)", "11.5% — minimal ash", "20.1% — heavy ash"],
      ["Moisture content (%)", "4.8%", "5.9%"],
      ["Burn duration", "4 hours (240 min)", "1.5 – 2 hours"],
      ["Time to ash-over", "50+ minutes", "~30 minutes"],
    ],
  },

  certificates: [
    {
      tag: "ISO certificate",
      title: "ISO 9001:2015 (TÜV SÜD South Asia)",
      body: "Quality management system certified for the manufacture and supply of coconut shell charcoal briquettes, and trading of BBQ grills and accessories.",
      cta: "Download ISO 9001 PDF",
    },
    {
      tag: "Lab test report",
      title: "Bureau Veritas Comparative Study",
      body: "Third-party combustion comparison against Kingsford wood charcoal: volatile matter, ash, moisture, ignition, ash-over and time at cooking temperature.",
      cta: "Download Bureau Veritas report",
    },
    {
      tag: "Safety data",
      title: "Material Safety Data Sheet (MSDS)",
      body: "Full 16-section safety data sheet for customs clearance and ocean freight, including handling, transport class and physical properties.",
      cta: "Download MSDS sheet",
    },
    {
      tag: "Export registration",
      title: "Coconut Development Board RCMC",
      body: "Registration cum Membership Certificate issued under the Foreign Trade Policy, covering coconut shell activated carbon and charcoal briquettes.",
      cta: "Download RCMC certificate",
    },
  ],

  oem: [
    { title: "Custom box printing", body: "Full CMYK artwork, barcode compliance and your brand logo on every carton." },
    { title: "Master carton sizes", body: "1 kg, 3 kg, 5 kg and 10 kg master box options." },
    { title: "Moisture protection", body: "Inner poly-bag lining rated against sea freight humidity." },
  ],

  exportTerms: [
    { k: "Loading ports", v: "Tuticorin Port / Chennai Port, India" },
    { k: "Minimum order (MOQ)", v: "Flexible — from 1 × 20ft FCL" },
    { k: "Payment terms", v: "T/T wire transfer & irrevocable L/C" },
    { k: "Custom packaging", v: "Private label 1 kg / 3 kg / 10 kg master cartons" },
  ],

  containers: {
    "20ft": { label: "20ft FCL", tons: "~15 tons", pallets: "~19 pallets" },
    "40hc": { label: "40ft High Cube", tons: "~26 tons", pallets: "~33 pallets" },
  },

  ports: {
    "Jebel Ali (UAE)": "Jebel Ali (UAE)",
    "Malé (Maldives)": "Malé (Maldives)",
    "Shanghai (China)": "Shanghai (China)",
    "Yokohama (Japan)": "Yokohama (Japan)",
    "Rotterdam (Netherlands)": "Rotterdam (Netherlands)",
    "Hamburg (Germany)": "Hamburg (Germany)",
    "Dublin (Ireland)": "Dublin (Ireland)",
    "Vancouver (Canada)": "Vancouver (Canada)",
    "Other / custom port": "Other / custom port",
  },

  destinations: {
    Russia: "Russia",
    Netherlands: "Netherlands",
    Guatemala: "Guatemala",
    "New Zealand": "New Zealand",
    "Saudi Arabia": "Saudi Arabia",
    UAE: "UAE",
  },

  faqs: [
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
  ],

  partnerNote: [
    "Over the years I've built this business on lasting relationships, global markets, and value created through trust, consistency and innovation — integrity and reliability first, always.",
    "🤝 We work with importers, wholesalers, distributors, retailers and industrial buyers across international and local markets, on terms built for the long run.",
    "🌱 Our range covers premium coconut shell charcoal briquettes in hexagonal, pillow, honeycomb and cube shapes, made to meet the needs of global industries.",
    "♻️ Sustainability sits at the heart of it: turning renewable shell waste into high-performance products helps our buyers move to cleaner energy.",
    "📩 Whether you need a dependable supplier or want to explore an opportunity, I'd be glad to connect. Let's build sustainable partnerships and create value together.",
  ],

  sustainability: {
    headline: "Carbon-negative by design",
    body: "Every tonne of Flareon coconut shell charcoal briquettes displaces wood charcoal that would otherwise come from felled trees. Production runs on captive windmill power — 3.5 MW generated against a 2.8 MW plant draw — so the surplus alone makes this export line carbon-negative before a single briquette leaves the yard.",
    stats: [
      "Annual export output",
      "Captive windmill power generated",
      "Surplus power banked / exported (3.5 MW − 2.8 MW draw)",
      "Agricultural waste feedstock, zero deforestation",
    ],
  },

  galleryCaptions: [
    "Jumbo bags of shell charcoal moved into the yard",
    "Flames rising off hexagonal briquettes",
    "Watching the screening conveyor for undersize",
    "Branded 25 kg sacks stacked in the covered warehouse",
    "Milled coconut shell carbon, close up",
    "The hydraulic briquette press mid-run",
    "Cubes glowing on a lighting grill",
    "Filling a 25 kg sack at the weighing hopper",
    "Printed retail bags stacked for export",
    "Pillow briquettes laid out to dry",
    "Shell charcoal chips and milled carbon, side by side",
    "Dried briquettes dropping to the transfer belt",
    "An even ember bed — four hours of steady heat",
    "Fresh briquettes graded into drying crates",
    "Warehouse aisle on the despatch side",
    "The screening line running late in the shift",
    "Press line crew during a production shift",
    "Fully lit cubes on a foiled bowl",
    "Levelling a tray before it goes to the yard",
    "A wall of packed sacks awaiting a container",
    "Quality check on the screening bed",
    "Carbon conveyor feeding the press",
    "Briquettes holding heat at full burn",
  ],
};

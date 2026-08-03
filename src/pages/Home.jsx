import { useState } from "react";
import {
  company,
  metrics,
  pillars,
  grades,
  benchmark,
  faqs,
  certificates,
  products,
  partnerNote,
} from "../data/site";
import { useMarket } from "../market-context";
import { Button, Section, SectionHead, Badge, Coal, Eyebrow } from "../components/ui";
import { Figure, PhotoStrip } from "../components/Figure";
import media, { plantStrip } from "../data/images";

// Full-bleed hero: the ember bed sits behind the type, which now runs the
// whole width of the shell rather than sharing it with a figure.
function Hero() {
  const { t } = useMarket();
  return (
    <section className="relative overflow-hidden border-b border-line">
      <img
        src={media.fire.hero.src}
        alt={media.fire.hero.alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/95 via-ink/85 to-ink" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[38rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,90,31,0.16),transparent_70%)]" />
      <div className="grain absolute inset-0" />

      <div className="shell relative py-20 md:py-32">
        <div className="rise">
          <Badge tone="ember">
            <span aria-hidden>🛡</span>
            {t("hero.badge")}
          </Badge>

          <h1 className="mt-7 text-[2.7rem] font-black leading-[0.98] tracking-tight text-ash sm:text-6xl lg:text-[4.6rem]">
            {t("hero.h1a")}{" "}
            <span className="ember-text">{t("hero.h1b")}</span>{" "}
            {t("hero.h1c")}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-ash-2 sm:text-lg">
            {t("hero.sub")}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/export-quote" size="lg">
              {t("cta.sample")} →
            </Button>
            <Button to="/compliance" variant="outline" size="lg">
              {t("cta.report")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const { t } = useMarket();
  return (
    <div className="border-b border-line bg-ink-2">
      <div className="shell grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        {metrics.map((m) => (
          <div key={m.key} className="border-b border-line px-2 py-8 md:border-b-0 md:px-6">
            <p className="font-display text-3xl font-extrabold text-ash md:text-4xl">
              {m.value}
            </p>
            <p className="mt-2 text-[13px] leading-snug text-ash-3">
              {t(`metrics.${m.key}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pillars() {
  return (
    <section className="relative overflow-hidden border-y border-line py-20 md:py-28">
      <img
        src={media.plant.machineTeam.src}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/88 to-ink" />
      <div className="shell relative">
      <SectionHead
        eyebrow="Why the coal burns differently"
        title="Integrated from shell to shipment"
        sub="Shell collection, activated carbon plant, briquetting and BBQ grill assembly all sit under one roof in Palladam, Tamil Nadu, India — which is why we can promise raw material quality instead of hoping for it."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className="panel panel-hover group relative overflow-hidden p-7"
          >
            <span className="absolute right-5 top-5 font-mono text-[11px] text-line">
              0{i + 1}
            </span>
            <Eyebrow>{p.tag}</Eyebrow>
            <h3 className="mt-3 text-xl font-bold text-ash">{p.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ash-3">{p.body}</p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] text-glow">
              <Coal /> {p.stat}
            </p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

function PlantLook() {
  return (
    <Section tone="raised">
      <SectionHead
        eyebrow="Inside Palladam"
        title="The plant, not a stock photo"
        sub="Shell intake, carbonising, pressing, UV drying and packing — photographed on the line at our own facility in Palladam, Tamil Nadu, India."
      />
      <div className="mt-12">
        <PhotoStrip images={plantStrip} />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <Figure
          image={media.plant.machine}
          ratio="wide"
          label="Stage 03 — pressing"
          note="High-density hydraulic pressing into pillow, hexagon and cube."
        />
        <Figure
          image={media.plant.dryingTray}
          ratio="wide"
          label="Stage 04 — UV drying"
          note="Multi-day slow drying, so the briquette never micro-cracks."
        />
        <Figure
          image={media.logistics.warehouseAisle}
          ratio="wide"
          label="Despatch"
          note="Poly-lined 25 kg sacks staged for container loading."
        />
      </div>
    </Section>
  );
}

function Grades() {
  return (
    <Section tone="raised" id="grades">
      <SectionHead
        eyebrow="Spec & price grades"
        title="Pick a grade, see the numbers"
        sub="Three tiers, published side by side — ash, moisture, fixed carbon and burn time on the same screen, so you can compare us against any quote already on your desk."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {grades.map((g) => (
          <div
            key={g.name}
            className={`panel panel-hover relative p-7 ${
              g.highlight
                ? "border-ember/50 shadow-[0_0_60px_-30px_rgba(255,90,31,0.9)]"
                : ""
            }`}
          >
            {g.highlight && (
              <span className="absolute -top-2.5 left-7 rounded-full bg-linear-to-b from-ember to-ember-2 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-white uppercase">
                Most exported
              </span>
            )}
            <h3 className="font-display text-2xl font-extrabold text-ash">
              {g.name}
            </h3>
            <p className="mt-1 text-[15px] text-ash-3">{g.use}</p>
            <dl className="mt-6 space-y-0 divide-y divide-line border-y border-line">
              {[
                ["Ash content", g.ash],
                ["Moisture", g.moisture],
                ["Burn time", g.burn],
                ["Fixed carbon", g.fixedCarbon],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-3">
                  <dt className="text-[15px] text-ash-3">{k}</dt>
                  <dd className="font-mono text-[15px] font-medium text-ash">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[15px] text-ash-3">{g.price}</p>
            <Button
              to="/export-quote"
              variant={g.highlight ? "ember" : "outline"}
              size="sm"
              className="mt-5 w-full"
            >
              Get {g.name} FOB price
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}

const productCardImage = {
  briquettes: media.fire.hexagon,
  "activated-carbon": media.material.carbonSack,
};

function ProductPeek() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <img
        src={media.material.rawSacks.src}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/90 to-ink" />
      <div className="shell relative">
        <SectionHead
          eyebrow="What we ship"
          title="Two lines, one raw material: the coconut shell."
          sub="Coconut shell charcoal briquettes for the grill, and activated carbon for filtration. Nothing else — because focus is what makes us the best at both."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.id}
              className="panel panel-hover flex flex-col overflow-hidden"
            >
              <div className="relative">
                <img
                  src={productCardImage[p.id].src}
                  alt={productCardImage[p.id].alt}
                  loading="lazy"
                  decoding="async"
                  className={`aspect-21/9 w-full border-b border-line object-cover ${
                    p.available ? "" : "object-contain bg-ink-3 p-6 opacity-80"
                  }`}
                />
                {!p.available && (
                  <span className="absolute right-4 top-4 rounded-full border border-ember/40 bg-ink/85 px-3 py-1 font-mono text-[11px] tracking-widest text-glow uppercase backdrop-blur">
                    Coming soon
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold leading-snug text-ash">
                  {p.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ash-3">
                  {p.blurb}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-[15px] text-ash-2">
                      <Coal className="mt-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/products">View full catalogue</Button>
          <Button to="/products#oem" variant="outline">
            OEM & private label
          </Button>
        </div>
      </div>
    </section>
  );
}

// Runs edge-to-edge on desktop — the table needs the width more than the
// section needs a gutter.
function Benchmark() {
  return (
    <section className="bg-ink-2 grain py-20 md:py-28">
      <div className="shell">
        <SectionHead
          eyebrow="Bureau Veritas — third-party tested"
          title="Against leading wood charcoal"
          sub="Not our marketing numbers. The comparative combustion study, reproduced in full and downloadable as the original PDF."
        />
      </div>
      <div className="mt-10 overflow-x-auto px-5 md:px-8">
        <table className="w-full min-w-[36rem] border-collapse text-left text-base">
          <thead>
            <tr>
              {benchmark.columns.map((c, i) => (
                <th
                  key={c}
                  className={`border-b border-line pb-4 pr-6 font-mono text-[13px] tracking-widest uppercase ${
                    i === 1 ? "text-glow" : "text-ash-3"
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {benchmark.rows.map((r) => (
              <tr key={r[0]} className="border-b border-line/70">
                <td className="py-4 pr-6 text-[15px] text-ash-2">{r[0]}</td>
                <td className="py-4 pr-6 font-mono text-[15px] font-medium text-ash">
                  <span className="rounded bg-ember/10 px-2.5 py-1">{r[1]}</span>
                </td>
                <td className="py-4 pr-6 font-mono text-[15px] text-ash-3">{r[2]}</td>
                <td className="py-4 pr-6 font-mono text-[15px] text-ash-3">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TrustWall() {
  return (
    // The certificate spread sits behind the whole band; the header row runs
    // across the top so the four cards form one clean rectangle beneath it.
    <section className="relative overflow-hidden py-20 md:py-28">
      <img
        src={media.proof.certificates.src}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/90 to-ink" />

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-end">
          <div>
            <Eyebrow className="mb-3">Documented, not claimed</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
              Every certificate is a download, not a photo
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ash-2">
              The TÜV SÜD ISO 9001:2015 certificate, the Bureau Veritas
              comparison study, our MSDS and the Coconut Development Board export
              registration — all four are searchable PDFs you can download before
              you send a single enquiry.
            </p>
          </div>
          <Button to="/compliance" variant="outline" size="lg">
            All four documents
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {certificates.map((c) => (
            <a
              key={c.title}
              href={c.file}
              download
              className="panel panel-hover flex flex-col p-7"
            >
              <Eyebrow>{c.tag}</Eyebrow>
              <p className="mt-3 text-[19px] font-semibold leading-snug text-ash">
                {c.title}
              </p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ash-3">
                {c.body}
              </p>
              <p className="mt-6 font-mono text-[13px] text-glow">⤓ Download PDF</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <Section tone="raised">
      <SectionHead
        eyebrow="Before you enquire"
        title="The six questions every buyer asks"
        align="center"
      />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-start"
              >
                <span
                  className={`text-[19px] font-semibold ${
                    isOpen ? "text-glow" : "text-ash"
                  }`}
                >
                  {f.q}
                </span>
                <span className="font-mono text-xl text-ash-3">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 pr-10 text-[17px] leading-relaxed text-ash-2">
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function ManagingPartner() {
  const { managingPartner } = company;
  return (
    <Section tone="ink">
      <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        <div className="mx-auto lg:mx-0">
          <div className="relative">
            <div className="ember-pulse pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.22),transparent_70%)] blur-2xl" />
            <img
              src={media.people.lead.src}
              alt={media.people.lead.alt}
              loading="lazy"
              decoding="async"
              className="relative size-56 rounded-full border border-line object-cover md:size-64"
            />
          </div>
        </div>

        <div>
          <Eyebrow className="mb-3">Meet the managing partner</Eyebrow>
          <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
            {managingPartner.name}
            <span className="ms-3 align-middle font-mono text-[13px] tracking-widest text-ash-3 uppercase">
              {managingPartner.role}
            </span>
          </h2>
          <div className="mt-6 space-y-4">
            {partnerNote.map((para) => (
              <p key={para} className="text-[15px] leading-relaxed text-ash-2">
                {para}
              </p>
            ))}
          </div>
          <a
            href={`mailto:${managingPartner.email}`}
            className="mt-7 inline-flex items-center gap-2 font-mono text-[14px] text-glow hover:underline"
          >
            <Coal /> {managingPartner.email}
          </a>
        </div>
      </div>
    </Section>
  );
}

function ClosingCTA() {
  const { t } = useMarket();
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink">
      <img
        src={media.fire.coals.src}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/80 to-ink" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(255,90,31,0.2),transparent_75%)]" />
      <div className="shell relative py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight text-ash md:text-5xl">
          Start with one container.{" "}
          <span className="ember-text">Not eighteen tons.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] text-ash-2">
          Flexible MOQ from a single 20ft FCL, T/T or irrevocable L/C, and a free
          sample pack before you commit.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/export-quote" size="lg">
            {t("cta.quote")} →
          </Button>
          <Button href="https://wa.me/919944133441" variant="outline" size="lg">
            WhatsApp the export desk
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Pillars />
      <PlantLook />
      <Grades />
      <ProductPeek />
      <Benchmark />
      <TrustWall />
      <Faq />
      <ManagingPartner />
      <ClosingCTA />
    </>
  );
}

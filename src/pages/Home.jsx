import { useState } from "react";
import {
  metrics,
  pillars,
  grades,
  benchmark,
  shippingLines,
  faqs,
  certificates,
  products,
} from "../data/site";
import { useMarket } from "../market-context";
import { Button, Section, SectionHead, Badge, Coal, Eyebrow } from "../components/ui";
import CoalBed from "../components/CoalBed";

function Hero() {
  const { t } = useMarket();
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* kiln glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-[38rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,90,31,0.16),transparent_70%)]" />
      <div className="grain absolute inset-0" />
      <div className="shell relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="rise">
          <Badge tone="ember">
            <span aria-hidden>🛡</span>
            {t("hero.badge")}
          </Badge>

          <h1 className="mt-6 text-[2.6rem] font-black leading-[0.98] tracking-tight text-ash sm:text-6xl">
            {t("hero.h1a")}{" "}
            <span className="ember-text">{t("hero.h1b")}</span>{" "}
            {t("hero.h1c")}
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ash-2 sm:text-base">
            {t("hero.sub")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/export-quote" size="lg">
              {t("cta.sample")} →
            </Button>
            <Button to="/compliance" variant="outline" size="lg">
              {t("cta.report")}
            </Button>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[12px] text-ash-3">
            <Coal />
            <span className="text-ash-2">FOB Tuticorin / Chennai</span>
            <span className="text-line">/</span>
            <span>MOQ 1 × 20ft FCL</span>
            <span className="text-line">/</span>
            <span>T/T &amp; L/C</span>
          </p>
        </div>

        <div className="rise" style={{ animationDelay: "120ms" }}>
          <CoalBed
            label="Product & factory footage"
            note="100% natural coconut shell briquettes and the 55,000 sq. ft UV solar drying yard."
          />
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
    <Section tone="ink">
      <SectionHead
        eyebrow="Why the coal burns differently"
        title="Integrated from shell to shipment"
        sub="Shell collection, activated carbon plant, briquetting and BBQ grill assembly all sit under one roof in Palladam — which is why we can promise raw material quality instead of hoping for it."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className="panel group relative overflow-hidden p-7 transition-colors hover:border-ember/40"
          >
            <span className="absolute right-5 top-5 font-mono text-[11px] text-line">
              0{i + 1}
            </span>
            <Eyebrow>{p.tag}</Eyebrow>
            <h3 className="mt-3 text-xl font-bold text-ash">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ash-3">{p.body}</p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] text-glow">
              <Coal /> {p.stat}
            </p>
          </article>
        ))}
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
            className={`panel relative p-7 ${
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
            <p className="mt-1 text-[13px] text-ash-3">{g.use}</p>
            <dl className="mt-6 space-y-0 divide-y divide-line border-y border-line">
              {[
                ["Ash content", g.ash],
                ["Moisture", g.moisture],
                ["Burn time", g.burn],
                ["Fixed carbon", g.fixedCarbon],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-3">
                  <dt className="text-[13px] text-ash-3">{k}</dt>
                  <dd className="font-mono text-[13px] font-medium text-ash">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[13px] text-ash-3">{g.price}</p>
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

function ProductPeek() {
  return (
    <Section tone="ink">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <SectionHead
            eyebrow="What we ship"
            title="Two products. One job: clean, long heat."
            sub="Briquettes in pillow, hexagon and cube — plus the fire starter cubes that light them without dragging petroleum smell into the food."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/products">View full catalogue</Button>
            <Button to="/products#oem" variant="outline">
              OEM & private label
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <article key={p.id} className="panel p-6">
              <Eyebrow>{p.kicker}</Eyebrow>
              <h3 className="mt-2 text-lg font-bold leading-snug text-ash">
                {p.name}
              </h3>
              <ul className="mt-4 space-y-2">
                {p.specs.slice(0, 3).map((s) => (
                  <li key={s.k} className="flex gap-2 text-[13px] text-ash-3">
                    <Coal className="mt-1.5" />
                    <span>
                      <span className="text-ash-2">{s.k}:</span> {s.v}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Benchmark() {
  return (
    <Section tone="raised">
      <SectionHead
        eyebrow="Bureau Veritas — third-party tested"
        title="Against leading wood charcoal"
        sub="Not our marketing numbers. The comparative combustion study, reproduced in full and downloadable as the original PDF."
      />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              {benchmark.columns.map((c, i) => (
                <th
                  key={c}
                  className={`border-b border-line pb-3 pr-4 font-mono text-[11px] tracking-widest uppercase ${
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
                <td className="py-3.5 pr-4 text-ash-2">{r[0]}</td>
                <td className="py-3.5 pr-4 font-mono font-medium text-ash">
                  <span className="rounded bg-ember/10 px-2 py-1">{r[1]}</span>
                </td>
                <td className="py-3.5 pr-4 font-mono text-ash-3">{r[2]}</td>
                <td className="py-3.5 pr-4 font-mono text-ash-3">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/compliance">Open compliance hub</Button>
        <Button href={certificates[2].file} variant="outline" download>
          ⤓ Download the BV report
        </Button>
      </div>
    </Section>
  );
}

function TrustWall() {
  return (
    <Section tone="ink">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <Eyebrow className="mb-3">Documented, not claimed</Eyebrow>
          <h2 className="text-3xl font-extrabold text-ash">
            Every certificate is a download, not a photo
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ash-2">
            ISO 9001:2015, Sedex SMETA, the Bureau Veritas lab report and the
            MSDS/COA sheet — all four available as searchable PDFs before you
            send a single enquiry.
          </p>
          <Button to="/compliance" variant="outline" className="mt-7">
            All four documents
          </Button>
        </div>
        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {certificates.map((c) => (
              <a
                key={c.title}
                href={c.file}
                download
                className="panel flex flex-col gap-1 p-5 transition-colors hover:border-ember/40"
              >
                <Eyebrow>{c.tag}</Eyebrow>
                <p className="text-[15px] font-semibold text-ash">{c.title}</p>
                <p className="mt-2 font-mono text-[11px] text-glow">⤓ PDF</p>
              </a>
            ))}
          </div>
          <p className="eyebrow mt-10 mb-4">Booked with</p>
          <div className="flex flex-wrap gap-2">
            {shippingLines.map((l) => (
              <span
                key={l}
                className="rounded-md border border-line bg-ink-2 px-3 py-2 font-mono text-[12px] text-ash-3"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
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
                  className={`text-[15px] font-semibold ${
                    isOpen ? "text-glow" : "text-ash"
                  }`}
                >
                  {f.q}
                </span>
                <span className="font-mono text-lg text-ash-3">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="pb-6 pr-10 text-sm leading-relaxed text-ash-2">
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

function ClosingCTA() {
  const { t } = useMarket();
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink">
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
      <Grades />
      <ProductPeek />
      <Benchmark />
      <TrustWall />
      <Faq />
      <ClosingCTA />
    </>
  );
}

import { products, oem, grades } from "../data/site";
import { Section, SectionHead, Button, Eyebrow, Coal } from "../components/ui";
import PageHero from "../components/PageHero";
import CoalBed from "../components/CoalBed";

function Product({ p, flip }) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <Eyebrow className="mb-3">{p.kicker}</Eyebrow>
        <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
          {p.name}
        </h2>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ash-2">
          {p.blurb}
        </p>

        <dl className="mt-8 divide-y divide-line border-y border-line">
          {p.specs.map((s) => (
            <div key={s.k} className="flex items-baseline justify-between gap-6 py-3.5">
              <dt className="flex items-center gap-2 text-[13px] text-ash-3">
                <Coal /> {s.k}
              </dt>
              <dd className="text-end font-mono text-[13px] font-medium text-ash">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.shapes.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-3 py-1.5 text-[12px] text-ash-3"
            >
              {s}
            </span>
          ))}
        </div>

        <Button to="/export-quote" className="mt-8">
          {p.cta} →
        </Button>
      </div>
      <CoalBed label={`${p.name} — gallery`} note="Replace with product photography." />
    </div>
  );
}

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products & OEM"
        title={
          <>
            Built for commercial heat.{" "}
            <span className="ember-text">Packed for your label.</span>
          </>
        }
        sub="Coconut shell BBQ briquettes and natural fire starter cubes — supplied loose, retail-packed, or fully private-labelled under your own brand."
      />

      <Section tone="ink">
        <Product p={products[0]} />
      </Section>

      <Section tone="raised">
        <Product p={products[1]} flip />
      </Section>

      <Section tone="ink" id="oem">
        <SectionHead
          eyebrow="Export OEM"
          title="Private label & custom packaging desk"
          sub="Send us artwork and a target retail size. We return a dieline, a carton mock-up and a container capacity calculation."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {oem.map((o) => (
            <div key={o.title} className="panel p-7">
              <h3 className="text-[17px] font-bold text-ash">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ash-3">{o.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/export-quote">Request OEM packaging template</Button>
          <Button to="/export-quote#estimator" variant="outline">
            Calculate container capacity
          </Button>
        </div>
      </Section>

      <Section tone="raised">
        <SectionHead
          eyebrow="Grade comparison"
          title="All three grades, one table"
          sub="The same data as the homepage cards, laid out for procurement teams who want to paste it straight into a comparison sheet."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr>
                {["Grade", "Typical use", "Ash", "Moisture", "Burn", "Fixed carbon"].map(
                  (h) => (
                    <th
                      key={h}
                      className="border-b border-line pb-3 pr-4 font-mono text-[11px] tracking-widest text-ash-3 uppercase"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {grades.map((g) => (
                <tr key={g.name} className="border-b border-line/70">
                  <td className="py-3.5 pr-4 font-semibold text-ash">
                    {g.name}
                    {g.highlight && (
                      <span className="ms-2 font-mono text-[10px] text-ember">
                        ★
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 pr-4 text-ash-3">{g.use}</td>
                  <td className="py-3.5 pr-4 font-mono text-ash-2">{g.ash}</td>
                  <td className="py-3.5 pr-4 font-mono text-ash-2">{g.moisture}</td>
                  <td className="py-3.5 pr-4 font-mono text-ash-2">{g.burn}</td>
                  <td className="py-3.5 pr-4 font-mono text-ash-2">{g.fixedCarbon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}

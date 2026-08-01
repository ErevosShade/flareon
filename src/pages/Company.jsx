import { pillars, processSteps, company, metrics } from "../data/site";
import { Section, SectionHead, Button, Eyebrow, Coal } from "../components/ui";
import PageHero from "../components/PageHero";
import CoalBed from "../components/CoalBed";

export default function Company() {
  return (
    <>
      <PageHero
        eyebrow="Company & eco-infrastructure"
        title={
          <>
            The only fully integrated coconut charcoal{" "}
            <span className="ember-text">manufacturer in India</span>
          </>
        }
        sub="From coconut shell collection to activated carbon, briquette manufacturing and BBQ grill assembly — Universal Flareon Industries controls 100% of raw material quality."
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/export-quote">Book a factory visit</Button>
          <Button to="/compliance" variant="outline">
            Audit documents
          </Button>
        </div>
      </PageHero>

      <Section tone="raised">
        <SectionHead
          eyebrow="Manufacturing pillars"
          title="Three things competitors outsource. We own all three."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="panel p-7">
              <Eyebrow>{p.tag}</Eyebrow>
              <h3 className="mt-3 font-display text-xl font-bold text-ash">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash-3">{p.body}</p>
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] text-glow">
                <Coal /> {p.stat}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHead
          eyebrow="End-to-end process"
          title="Landfill shell to sealed carton"
          sub="Four controlled stages. Nothing sub-contracted, nothing chemically accelerated."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
          {processSteps.map((s) => (
            <li key={s.n} className="relative bg-ink-2 p-7">
              <span className="font-mono text-[13px] text-ember">{s.n}</span>
              <h3 className="mt-3 text-[17px] font-bold leading-snug text-ash">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ash-3">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="raised">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow className="mb-3">Sustainability impact</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
              Saving thousands of trees, every single year
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ash-2">
              By converting agricultural coconut shell waste into high-heat
              briquettes, Flareon displaces the deforestation that traditional
              wood charcoal production depends on. Our windmills generate 3.5 MW
              against a 2.8 MW plant draw — the surplus is what makes this export
              line carbon-negative.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.key} className="panel p-5">
                  <p className="font-display text-2xl font-extrabold text-ash">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[12px] text-ash-3">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <CoalBed
              label="Palladam plant & UV drying yard"
              note="55,000 sq. ft of UV-covered solar drying."
            />
            <div className="panel p-7">
              <Eyebrow>Facility</Eyebrow>
              <h3 className="mt-2 text-xl font-bold text-ash">{company.plant}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ash-3">
                Multi-acre industrial grounds with direct road access to{" "}
                {company.ports}.
              </p>
              <p className="mt-4 font-mono text-[12px] text-ash-3">
                {company.address}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

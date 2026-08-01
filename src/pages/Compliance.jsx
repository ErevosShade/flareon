import { benchmark, certificates } from "../data/site";
import { Section, SectionHead, Button, Eyebrow } from "../components/ui";
import PageHero from "../components/PageHero";

export default function Compliance() {
  return (
    <>
      <PageHero
        eyebrow="Quality specs & compliance hub"
        title={
          <>
            Third-party numbers.{" "}
            <span className="ember-text">Downloadable proof.</span>
          </>
        }
        sub="Bureau Veritas comparative combustion testing, ISO 9001:2015 by TÜV SÜD South Asia, a Sedex SMETA 2-pillar ethical audit, and the MSDS/COA sheet your customs broker will ask for."
      />

      <Section tone="raised">
        <SectionHead
          eyebrow="Lab data"
          title="Flareon vs leading wood charcoal"
          sub="Bureau Veritas comparative analysis study. Every row below appears in the downloadable report."
        />
        <div className="mt-10 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-ink-3">
                {benchmark.columns.map((c, i) => (
                  <th
                    key={c}
                    className={`px-5 py-4 font-mono text-[11px] tracking-widest uppercase ${
                      i === 1 ? "bg-ember/10 text-glow" : "text-ash-3"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benchmark.rows.map((r) => (
                <tr key={r[0]} className="border-t border-line">
                  <td className="px-5 py-4 text-ash-2">{r[0]}</td>
                  <td className="bg-ember/5 px-5 py-4 font-mono font-semibold text-ash">
                    {r[1]}
                  </td>
                  <td className="px-5 py-4 font-mono text-ash-3">{r[2]}</td>
                  <td className="px-5 py-4 font-mono text-ash-3">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-mono text-[11px] text-ash-3">
          Test basis: ASTM-aligned proximate analysis, third-party sampled at the
          Palladam plant.
        </p>
      </Section>

      <Section tone="ink">
        <SectionHead
          eyebrow="Downloads"
          title="Official certificates & audit documents"
          sub="All PDFs, no gated forms. Place the real files in /public/docs to activate these links."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certificates.map((c) => (
            <article
              key={c.title}
              className="panel flex flex-col p-7 transition-colors hover:border-ember/40"
            >
              <Eyebrow>{c.tag}</Eyebrow>
              <h3 className="mt-3 text-xl font-bold leading-snug text-ash">
                {c.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ash-3">
                {c.body}
              </p>
              <Button
                href={c.file}
                download
                variant="outline"
                size="sm"
                className="mt-6 w-fit"
              >
                ⤓ {c.cta}
              </Button>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="panel flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-ash">
              Need a document we haven't listed?
            </h2>
            <p className="mt-2 text-sm text-ash-2">
              Phytosanitary certificates, Certificate of Origin, fumigation
              records and packing lists are issued per shipment.
            </p>
          </div>
          <Button to="/export-quote">Ask the export desk</Button>
        </div>
      </Section>
    </>
  );
}

import {
  pillars,
  processSteps,
  carbonProcessSteps,
  sustainability,
  company,
} from "../data/site";
import { Section, SectionHead, Button, Eyebrow, Coal } from "../components/ui";
import PageHero from "../components/PageHero";
import { Figure } from "../components/Figure";
import media, { processImages, carbonProcessImages } from "../data/images";

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
        sub="From coconut shell collection to activated carbon, briquette manufacturing and BBQ grill assembly — Flareon Briquettes controls 100% of raw material quality."
        image={media.plant.machine}
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
            <article key={p.title} className="panel panel-hover p-7">
              <Eyebrow>{p.tag}</Eyebrow>
              <h3 className="mt-3 font-display text-xl font-bold text-ash">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ash-3">{p.body}</p>
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] text-glow">
                <Coal /> {p.stat}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-4 lg:sticky lg:top-28">
            <Figure image={media.material.rawSacks} ratio="photo" />
            <div className="grid grid-cols-2 gap-4">
              <Figure image={media.material.powder} ratio="square" />
              <Figure image={media.material.carbonSack} ratio="square" />
            </div>
          </div>

          <div>
            <Eyebrow className="mb-3">One shell, two product lines</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
              The same carbon feeds the briquette press and the activated carbon
              plant
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-ash">
                  Charcoal briquettes
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ash-2">
                  Coconut shell is one of the few agricultural residues dense
                  enough to carbonise into a genuinely high fixed-carbon fuel. We
                  take the coarse fraction of our own shell char, bind it with
                  food-grade potato starch and press it under high hydraulic
                  pressure into hexagonal, pillow, cube and honeycomb shapes. The
                  density is the point: a tighter particle structure burns slower
                  and hotter than lump wood charcoal, holds cooking temperature
                  for hours rather than minutes, and leaves a small volume of
                  clean white ash instead of a grate full of grit. Because there
                  are no nitrate accelerants anywhere in the recipe, nothing
                  chemical transfers to the food — which is what makes the
                  product acceptable to commercial barbecue kitchens, shisha
                  lounges and supermarket private-label buyers who have to answer
                  for what they sell.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-ash">
                  Activated carbon
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ash-2">
                  The finer fraction goes the other way. Steam activation at high
                  temperature blows open the internal pore structure of the same
                  shell char, turning a simple fuel into an adsorbent with an
                  enormous internal surface area — the material that pulls
                  chlorine, organics, colour and odour out of water, strips
                  solvents from air streams, and recovers gold from leach
                  solutions. Coconut shell is the preferred feedstock for it
                  worldwide precisely because its pores are predominantly
                  micropores, which is what makes it effective at low
                  concentrations where coal-based carbons underperform. Running
                  both lines off one intake is what lets us hold a grade: we
                  choose which fraction goes where, instead of accepting whatever
                  a trader delivers that week.
                </p>
              </div>
            </div>

            <Button to="/products" variant="outline" className="mt-8">
              See the product range
            </Button>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden border-y border-line py-20 md:py-28">
        <img
          src={media.logistics.yardLoading.src}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/90 to-ink" />
        <div className="shell relative">
          <SectionHead
            eyebrow="End-to-end process — briquettes"
            title="Landfill shell to sealed carton"
            sub="Four controlled stages. Nothing sub-contracted, nothing chemically accelerated."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
            {processSteps.map((s, i) => (
              <li key={s.n} className="relative bg-ink-2">
                {processImages[i] ? (
                  <img
                    src={processImages[i].src}
                    alt={processImages[i].alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-4/3 w-full border-b border-line object-cover"
                  />
                ) : (
                  <div className="grid aspect-4/3 w-full place-items-center border-b border-line bg-ink-3">
                    <span className="font-mono text-[12px] tracking-[0.2em] text-ash-3 uppercase">
                      Photo coming soon
                    </span>
                  </div>
                )}
                <div className="p-7">
                  <span className="font-mono text-[13px] text-ember">{s.n}</span>
                  <h3 className="mt-3 text-[17px] font-bold leading-snug text-ash">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ash-3">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-20">
            <SectionHead
              eyebrow="End-to-end process — activated carbon"
              title="Shell char to filtration-grade carbon"
              sub="The second line off the same raw material: activation, milling and testing before a sack is sealed."
            />
            <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
              {carbonProcessSteps.map((s, i) => (
                <li key={s.n} className="relative bg-ink-2">
                  <img
                    src={carbonProcessImages[i].src}
                    alt={carbonProcessImages[i].alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-4/3 w-full border-b border-line object-cover"
                  />
                  <div className="p-7">
                    <span className="font-mono text-[13px] text-ember">{s.n}</span>
                    <h3 className="mt-3 text-[17px] font-bold leading-snug text-ash">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ash-3">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Sustainability runs green — its own palette, drifting leaves, and the
          cursor smoke turns green inside it via data-smoke. */}
      <section
        data-smoke="green"
        className="relative overflow-hidden border-y border-[#1e3a2a] bg-[#08150f] py-20 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_0%,rgba(56,142,90,0.22),transparent_70%)]" />
        <Leaves />
        <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow className="mb-3 !text-[#8fc7a3]">Sustainability impact</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight text-[#eaf5ee] md:text-4xl">
              {sustainability.headline}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#c2dccb]">
              {sustainability.body}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {sustainability.stats.map((s) => (
                <div
                  key={s.value}
                  className="panel-hover rounded-xl border border-[#2d6648]/70 bg-[#0c1f16] p-5"
                >
                  <p className="font-display text-2xl font-extrabold text-[#eaf5ee]">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-[#8fc7a3]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-[#2d6648]/70 bg-[#0c1f16]">
            <img
              src={media.nature.grove.src}
              alt={media.nature.grove.alt}
              loading="lazy"
              decoding="async"
              className="aspect-4/3 w-full object-cover"
            />
            <figcaption className="border-t border-[#2d6648]/70 px-6 py-4">
              <p className="font-mono text-[11px] tracking-[0.16em] text-[#8fc7a3] uppercase">
                Renewable feedstock
              </p>
              <p className="mt-1 text-[14px] text-[#c2dccb]">
                Shell waste from working coconut plantations — a by-product
                stream, never a felled tree.
              </p>
            </figcaption>
          </figure>
        </div>
        </div>
      </section>
    </>
  );
}

// Slow leaf drift over the sustainability band.
const LEAVES = [
  { left: "6%", dur: "17s", delay: "0s", x: "60px", size: 18 },
  { left: "18%", dur: "22s", delay: "3s", x: "-40px", size: 13 },
  { left: "31%", dur: "19s", delay: "7s", x: "50px", size: 22 },
  { left: "45%", dur: "25s", delay: "1.5s", x: "-70px", size: 15 },
  { left: "58%", dur: "20s", delay: "9s", x: "35px", size: 19 },
  { left: "71%", dur: "23s", delay: "4.5s", x: "-55px", size: 14 },
  { left: "84%", dur: "18s", delay: "11s", x: "45px", size: 21 },
  { left: "93%", dur: "26s", delay: "6s", x: "-30px", size: 16 },
];

function Leaves() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {LEAVES.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width={l.size}
          height={l.size}
          fill="#4f9d6d"
          className="leaf absolute top-0"
          style={{
            left: l.left,
            "--leaf-dur": l.dur,
            "--leaf-delay": l.delay,
            "--leaf-x": l.x,
          }}
        >
          <path d="M21 3C10 3 4 9 4 17c0 1.4.3 2.7.8 3.9l1.9-1.9c1-3.7 3.6-6.6 8.3-8.2-3.6 2-6 4.7-7.2 8.2C15.6 20.4 21 14.6 21 3Z" />
        </svg>
      ))}
    </div>
  );
}

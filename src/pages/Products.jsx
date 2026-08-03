import { products, briquetteShapes, grades, oem } from "../data/site";
import { Section, SectionHead, Button, Eyebrow, Coal } from "../components/ui";
import PageHero from "../components/PageHero";
import { Figure } from "../components/Figure";
import media from "../data/images";

const shapeImage = {
  hexagon: media.shapes.hexagon,
  pillow: media.shapes.pillow,
  cube: media.shapes.cube,
  honeycomb: media.shapes.round,
};

// One card per pressed shape, with what actually sets it apart.
function ShapeCard({ shape }) {
  const image = shapeImage[shape.id];
  return (
    <article className="panel panel-hover group flex flex-col overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="aspect-4/3 w-full border-b border-line object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[19px] font-bold text-ash">{shape.name}</h3>
        <ul className="mt-4 space-y-2.5">
          {shape.points.map((pt) => (
            <li key={pt} className="flex gap-2.5 text-[14px] leading-snug text-ash-3">
              <Coal className="mt-1.5" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// Grade tiers, folded into the briquette section as cards.
function GradeCard({ g }) {
  return (
    <div
      className={`panel panel-hover relative p-6 ${
        g.highlight ? "border-ember/50" : ""
      }`}
    >
      {g.highlight && (
        <span className="absolute -top-2.5 left-6 rounded-full bg-linear-to-b from-ember to-ember-2 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-white uppercase">
          Most exported
        </span>
      )}
      <h4 className="font-display text-xl font-extrabold text-ash">{g.name}</h4>
      <p className="mt-1 text-[14px] text-ash-3">{g.use}</p>
      <dl className="mt-5 divide-y divide-line border-y border-line">
        {[
          ["Ash", g.ash],
          ["Moisture", g.moisture],
          ["Burn", g.burn],
          ["Fixed carbon", g.fixedCarbon],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between py-2.5">
            <dt className="text-[14px] text-ash-3">{k}</dt>
            <dd className="font-mono text-[14px] font-medium text-ash">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Briquettes() {
  const p = products[0];
  return (
    <Section tone="ink">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
            {p.name}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ash-2">
            {p.blurb}
          </p>
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-2.5 text-[15px] text-ash-2">
                <Coal className="mt-2" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <Button to="/export-quote" className="mt-8">
            {p.cta} →
          </Button>
        </div>
        <Figure
          image={media.fire.hexagon}
          ratio="wide"
          glow
          label="Four hours of steady heat"
          note="Pressed from carbonised coconut shell with a potato starch binder only."
        />
      </div>

      <div className="mt-20">
        <SectionHead
          eyebrow="Shapes we press"
          title="Four shapes, each doing a different job"
          sub="Every shape runs the same chemistry — the geometry is what changes how it lights, stacks and burns."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {briquetteShapes.map((s) => (
            <ShapeCard key={s.id} shape={s} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHead
          eyebrow="Grade comparison"
          title="Three grades of the same briquette"
          sub="Ash, moisture, burn time and fixed carbon, side by side — pick the tier that matches your market."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {grades.map((g) => (
            <GradeCard key={g.name} g={g} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ActivatedCarbon() {
  const p = products[1];
  return (
    <Section tone="raised">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:[&>*:first-child]:order-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
              {p.name}
            </h2>
            <span className="rounded-full border border-ember/40 bg-ember/10 px-3 py-1 font-mono text-[11px] tracking-widest text-glow uppercase">
              Coming soon
            </span>
          </div>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ash-2">
            {p.blurb}
          </p>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {["Grades", "Iodine value", "Mesh sizes", "Packing"].map((k) => (
              <div key={k} className="flex items-baseline justify-between gap-6 py-3.5">
                <dt className="flex items-center gap-2 text-[15px] text-ash-3">
                  <Coal /> {k}
                </dt>
                <dd className="text-end font-mono text-[14px] text-ash-3">
                  Coming soon
                </dd>
              </div>
            ))}
          </dl>

          <Button
            as="button"
            type="button"
            disabled
            aria-disabled="true"
            title="Activated carbon is not yet open for orders"
            className="mt-8 cursor-not-allowed"
          >
            {p.cta} — coming soon
          </Button>
        </div>
        <Figure
          image={media.material.carbonSack}
          ratio="wide"
          label="Coconut shell activated carbon"
          note="High adsorption, high purity — milled and packed at Palladam, Tamil Nadu, India."
        />
      </div>
    </Section>
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
        sub="Coconut shell charcoal briquettes for the grill, and activated carbon for filtration — supplied loose, retail-packed, or fully private-labelled under your own brand."
        image={media.fire.hexagon}
      />

      <Briquettes />
      <ActivatedCarbon />

      <Section tone="ink" id="oem">
        <SectionHead
          eyebrow="Export OEM"
          title="Private label & custom packaging desk"
          sub="Send us artwork and a target retail size. We return a dieline, a carton mock-up and a container capacity calculation."
        />
        <div className="mt-12 grid items-start gap-5 lg:grid-cols-[1fr_1.1fr]">
          <Figure
            image={media.logistics.retailBags}
            ratio="wide"
            label="Private label, printed and packed"
            note="Full CMYK cartons and retail bags — your brand, our line."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {oem.map((o) => (
              <div key={o.title} className="panel panel-hover p-7">
                <h3 className="text-[17px] font-bold text-ash">{o.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ash-3">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/export-quote">Request OEM packaging template</Button>
          <Button to="/export-quote#briquette-form" variant="outline">
            Open the export desk
          </Button>
        </div>
      </Section>
    </>
  );
}

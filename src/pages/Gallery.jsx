import { Section } from "../components/ui";
import PageHero from "../components/PageHero";
import media, { gallery } from "../data/images";

// Each frame keeps the aspect ratio the photo was shot at, so nothing is
// force-cropped into a square. The caption slides up on hover and on keyboard
// focus, so it is reachable without a pointer.
const ratios = {
  wide: "aspect-4/3",
  square: "aspect-square",
  tall: "aspect-3/4",
  cinema: "aspect-16/9",
};

function Tile({ item }) {
  return (
    <figure
      tabIndex={0}
      className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-xl border border-line bg-ink-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember/70"
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105 ${
          ratios[item.ratio] ?? "aspect-square"
        }`}
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-t from-ink via-ink/90 to-transparent px-4 pt-8 pb-3 text-[12px] leading-snug text-ash-2 transition-transform duration-300 group-hover:translate-y-0 group-focus:translate-y-0">
        {item.caption}
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            The plant, the material,{" "}
            <span className="ember-text">the burn.</span>
          </>
        }
        sub="Photographed on our own line in Palladam, Tamil Nadu, India — raw shell charcoal through pressing, drying, packing and despatch. Hover any frame for context."
        image={media.plant.conveyorCrates}
      />

      <Section tone="raised">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {gallery.map((item) => (
            <Tile key={item.src} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}

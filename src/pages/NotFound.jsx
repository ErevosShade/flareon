import { Button } from "../components/ui";
import media from "../data/images";

// With the host rewriting every unmatched path to index.html, a wrong URL used
// to render the homepage — a soft 404. This says so plainly instead.
export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <img
        src={media.fire.coals.src}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/85 to-ink" />
      <div className="grain absolute inset-0" />

      <div className="shell relative py-24 text-center md:py-32">
        <p className="font-mono text-[13px] tracking-[0.3em] text-ember uppercase">
          Error 404
        </p>
        <h1 className="mx-auto mt-6 max-w-2xl text-[2.4rem] font-black leading-[1.02] text-ash md:text-5xl">
          That page went up in <span className="ember-text">smoke.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ash-2">
          The link may be out of date, or the page may have moved. Everything we
          publish is one click away below.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            Back to home
          </Button>
          <Button to="/products" variant="outline" size="lg">
            View products
          </Button>
          <Button to="/export-quote" variant="outline" size="lg">
            Export desk
          </Button>
        </div>
      </div>
    </section>
  );
}

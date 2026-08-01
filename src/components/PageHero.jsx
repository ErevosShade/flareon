import { Eyebrow } from "./ui";

export default function PageHero({ eyebrow, title, sub, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(50%_60%_at_30%_0%,rgba(255,90,31,0.14),transparent_70%)]" />
      <div className="grain absolute inset-0" />
      <div className="shell relative py-16 md:py-20">
        <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-[2.2rem] font-black leading-[1.02] text-ash md:text-5xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ash-2">
            {sub}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

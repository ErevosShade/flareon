import { Link } from "react-router-dom";
import { company, exportTerms, activeDestinations } from "../data/site";
import { useMarket } from "../market-context";
import { Coal } from "./ui";

export default function Footer() {
  const { t } = useMarket();
  return (
    <footer className="border-t border-line bg-ink-2 grain">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="font-display text-2xl font-black tracking-[0.14em] text-ash">
            {company.brand}
          </div>
          <div className="mt-1 font-mono text-[11px] tracking-[0.22em] text-ember">
            {company.tagline}
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ash-3">
            {company.name} — {company.address}
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a
              href={company.whatsappHref}
              className="inline-flex w-fit items-center gap-2 text-ash-2 hover:text-glow"
            >
              <Coal /> WhatsApp {company.whatsapp}
            </a>
            {company.emails.map((e) => (
              <a
                key={e}
                href={`mailto:${e}`}
                className="inline-flex w-fit items-center gap-2 text-ash-2 hover:text-glow"
              >
                <Coal /> {e}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Export terms</p>
          <ul className="space-y-3 text-sm">
            {exportTerms.map((x) => (
              <li key={x.k}>
                <span className="block text-ash-3">{x.k}</span>
                <span className="text-ash-2">{x.v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            {[
              ["/", t("nav.home")],
              ["/company", t("nav.company")],
              ["/products", t("nav.products")],
              ["/compliance", t("nav.compliance")],
              ["/export-quote", t("nav.export")],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-ash-2 hover:text-glow">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-8 mb-3">Shipping now to</p>
          <div className="flex flex-wrap gap-2">
            {activeDestinations.map((d) => (
              <span
                key={d.name}
                className="rounded-full border border-line px-2.5 py-1 text-[12px] text-ash-3"
              >
                <span aria-hidden>{d.flag}</span> {d.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-5 text-[12px] text-ash-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-ash-2">Privacy Policy</a>
            <a href="#" className="hover:text-ash-2">Terms of Supply</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

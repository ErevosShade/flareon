import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMarket } from "../market-context";
import { company } from "../data/site";
import { Button } from "./ui";
import LanguageMenu from "./LanguageMenu";

// Slim utility strip — the facts a buyer scans for before anything else.
function UtilityBar() {
  return (
    <div className="border-b border-line bg-ink-2/90">
      <div className="shell flex flex-wrap items-center gap-x-5 gap-y-1 py-2 font-mono text-[11px] tracking-wide text-ash-3">
        <span>ISO 9001:2015 · Sedex SMETA</span>
        <span className="hidden text-line sm:inline">/</span>
        <span className="hidden sm:inline">MOQ from 1 × 20ft FCL</span>
        <span className="hidden text-line md:inline">/</span>
        <span className="hidden md:inline">T/T & irrevocable L/C</span>
        <a
          href={company.whatsappHref}
          className="ms-auto text-ash-2 transition-colors hover:text-glow"
        >
          WhatsApp {company.whatsapp}
        </a>
      </div>
    </div>
  );
}

const links = [
  { to: "/", key: "nav.home", end: true },
  { to: "/company", key: "nav.company" },
  { to: "/products", key: "nav.products" },
  { to: "/compliance", key: "nav.compliance" },
  { to: "/export-quote", key: "nav.export" },
];

export default function Header() {
  const { t } = useMarket();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]" : ""
      }`}
    >
      <UtilityBar />
      <div className="border-b border-line bg-ink/85">
        <div className="shell flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            {/* Ember mark: a coal at temperature */}
            <span className="relative grid size-9 place-items-center rounded-md bg-linear-to-b from-ink-4 to-ink-2 ring-1 ring-line">
              <span className="size-2.5 rounded-full bg-linear-to-b from-glow to-ember shadow-[0_0_12px_3px_rgba(255,90,31,0.6)]" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg font-black tracking-[0.14em] text-ash">
                {company.brand}
              </span>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-ember">
                {company.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ash"
                      : "text-ash-3 hover:bg-ink-3 hover:text-ash"
                  }`
                }
              >
                {t(l.key)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageMenu />
            <Button to="/export-quote" size="sm" className="hidden sm:inline-flex">
              {t("cta.quote")}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-md border border-line text-ash-2 lg:hidden"
            >
              <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="shell flex flex-col gap-1 border-t border-line py-3 lg:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-ink-3 text-ash" : "text-ash-2"
                  }`
                }
              >
                {t(l.key)}
              </NavLink>
            ))}
            <Button to="/export-quote" size="sm" className="mt-2 sm:hidden">
              {t("cta.quote")}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

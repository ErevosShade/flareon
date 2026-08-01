import { useMemo, useState } from "react";
import {
  company,
  exportTerms,
  containers,
  destinationPorts,
  activeDestinations,
  grades,
} from "../data/site";
import { Section, SectionHead, Button, Eyebrow, Coal } from "../components/ui";
import PageHero from "../components/PageHero";

const field =
  "w-full rounded-md border border-line bg-ink-2 px-4 py-3 text-sm text-ash placeholder:text-ash-3/70 focus:border-ember/60 focus:outline-none focus:ring-1 focus:ring-ember/40";
const label = "mb-2 block text-[13px] font-medium text-ash-2";

const CARTON_SIZES = [1, 3, 5, 10];

export default function ExportQuote() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    container: "20ft",
    port: destinationPorts[0].port,
    grade: "Premium",
    carton: 10,
    payment: "T/T wire transfer",
    notes: "",
  });

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // "Smart" part of the estimator: turn the container + carton choice into
  // real numbers a buyer can put into a purchase order.
  const estimate = useMemo(() => {
    const c = containers.find((x) => x.id === form.container) ?? containers[0];
    const tons = c.id === "20ft" ? 15 : 26;
    const cartons = Math.floor((tons * 1000) / Number(form.carton));
    const dest = destinationPorts.find((d) => d.port === form.port);
    return { ...c, tons, cartons, transit: dest?.transit ?? "Quoted on enquiry" };
  }, [form.container, form.carton, form.port]);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Export logistics & container desk"
        title={
          <>
            Tell us the port.{" "}
            <span className="ember-text">We'll quote FOB or CIF.</span>
          </>
        }
        sub="Flexible MOQ from a single 20ft FCL, T/T or irrevocable L/C from the first container, and same-day indicative pricing — not a callback request."
      />

      <Section tone="raised" id="estimator">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          {/* FORM */}
          <div className="panel p-7 md:p-9">
            <Eyebrow className="mb-2">Smart container estimator</Eyebrow>
            <h2 className="text-2xl font-extrabold text-ash">
              FOB / CIF inquiry
            </h2>

            {sent ? (
              <div className="mt-8 rounded-lg border border-ember/40 bg-ember/5 p-7">
                <p className="font-display text-xl font-bold text-ash">
                  Enquiry ready to send.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ash-2">
                  This build has no backend wired up yet. Hook the submit handler
                  in{" "}
                  <code className="font-mono text-[12px] text-glow">
                    src/pages/ExportQuote.jsx
                  </code>{" "}
                  to your CRM, email API or WhatsApp Business endpoint.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={company.whatsappHref} size="sm">
                    Send via WhatsApp instead
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSent(false)}
                  >
                    Edit enquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="name">
                      Full name
                    </label>
                    <input
                      id="name"
                      required
                      className={field}
                      placeholder="John Doe"
                      value={form.name}
                      onChange={set("name")}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="company">
                      Company name
                    </label>
                    <input
                      id="company"
                      required
                      className={field}
                      placeholder="Global Imports LLC"
                      value={form.company}
                      onChange={set("company")}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="email">
                      Business email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={field}
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="phone">
                      WhatsApp phone
                    </label>
                    <input
                      id="phone"
                      className={field}
                      placeholder="+971 ..."
                      value={form.phone}
                      onChange={set("phone")}
                    />
                  </div>
                </div>

                <div>
                  <span className={label}>Container load</span>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {containers.map((c) => {
                      const active = form.container === c.id;
                      return (
                        <button
                          type="button"
                          key={c.id}
                          onClick={() =>
                            setForm((f) => ({ ...f, container: c.id }))
                          }
                          className={`rounded-md border px-4 py-3.5 text-start transition-colors ${
                            active
                              ? "border-ember/60 bg-ember/10"
                              : "border-line bg-ink-2 hover:border-ash-3"
                          }`}
                        >
                          <span
                            className={`block text-sm font-semibold ${
                              active ? "text-glow" : "text-ash"
                            }`}
                          >
                            {c.label}
                          </span>
                          <span className="mt-0.5 block font-mono text-[11px] text-ash-3">
                            {c.tons} · {c.pallets}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="port">
                      Destination port
                    </label>
                    <select
                      id="port"
                      className={field}
                      value={form.port}
                      onChange={set("port")}
                    >
                      {destinationPorts.map((d) => (
                        <option key={d.port} value={d.port}>
                          {d.port}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="grade">
                      Grade
                    </label>
                    <select
                      id="grade"
                      className={field}
                      value={form.grade}
                      onChange={set("grade")}
                    >
                      {grades.map((g) => (
                        <option key={g.name} value={g.name}>
                          {g.name} — ash {g.ash}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="carton">
                      Master carton size
                    </label>
                    <select
                      id="carton"
                      className={field}
                      value={form.carton}
                      onChange={set("carton")}
                    >
                      {CARTON_SIZES.map((c) => (
                        <option key={c} value={c}>
                          {c} kg
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="payment">
                      Payment terms
                    </label>
                    <select
                      id="payment"
                      className={field}
                      value={form.payment}
                      onChange={set("payment")}
                    >
                      <option>T/T wire transfer</option>
                      <option>Irrevocable Letter of Credit (L/C)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={label} htmlFor="notes">
                    Anything else? (private label, factory visit dates, sample
                    request)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className={field}
                    value={form.notes}
                    onChange={set("notes")}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit container FOB / CIF quote request →
                </Button>
                <p className="text-center text-[12px] text-ash-3">
                  Indicative price band returned the same working day.
                </p>
              </form>
            )}
          </div>

          {/* LIVE ESTIMATE + TERMS */}
          <div className="space-y-5 lg:sticky lg:top-36">
            <div className="panel p-7">
              <Eyebrow>Live container estimate</Eyebrow>
              <p className="mt-3 font-display text-3xl font-extrabold text-ash">
                {estimate.label}
              </p>
              <dl className="mt-6 divide-y divide-line border-y border-line">
                {[
                  ["Net payload", `~${estimate.tons} tons`],
                  ["Master cartons", `~${estimate.cartons.toLocaleString()} × ${form.carton} kg`],
                  ["Pallet positions", estimate.pallets],
                  ["Grade", form.grade],
                  ["Destination", form.port],
                  ["Transit (from Tuticorin)", estimate.transit],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[13px] text-ash-3">{k}</dt>
                    <dd className="text-end font-mono text-[13px] text-ash">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[12px] leading-relaxed text-ash-3">
                Estimates only — final loadout depends on shape, carton dimensions
                and vessel weight limits.
              </p>
            </div>

            <div className="panel p-7">
              <Eyebrow>Shipping terms</Eyebrow>
              <ul className="mt-4 space-y-4">
                {exportTerms.map((x) => (
                  <li key={x.k} className="flex gap-3">
                    <Coal className="mt-2" />
                    <span>
                      <span className="block text-[13px] text-ash-3">{x.k}</span>
                      <span className="text-sm text-ash-2">{x.v}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel p-7">
              <Eyebrow>Direct export sales desk</Eyebrow>
              <p className="mt-3 font-semibold text-ash">{company.name}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ash-3">
                {company.address}
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
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHead
          eyebrow="Global reach"
          title="Containers already moving"
          align="center"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {activeDestinations.map((d) => (
            <span
              key={d.name}
              className="rounded-full border border-line bg-ink-2 px-5 py-3 text-sm text-ash-2"
            >
              <span aria-hidden className="me-2">{d.flag}</span>
              {d.name}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}

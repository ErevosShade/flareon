import { useState } from "react";
import {
  company,
  containers,
  destinationPorts,
  activeDestinations,
  grades,
} from "../data/site";
import { Section, SectionHead, Button, Eyebrow, Coal } from "../components/ui";
import PageHero from "../components/PageHero";
import media from "../data/images";

const field =
  "w-full rounded-md border border-line bg-ink-2 px-4 py-3 text-sm text-ash placeholder:text-ash-3/70 focus:border-ember/60 focus:outline-none focus:ring-1 focus:ring-ember/40";
const label = "mb-2 block text-[13px] font-medium text-ash-2";

const CARTON_SIZES = [1, 3, 5, 10];
const OTHER_PORT = "Other / custom port";

// Shared contact block at the top of both forms.
function ContactFields({ form, set, idPrefix }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor={`${idPrefix}-name`}>
          Full name
        </label>
        <input
          id={`${idPrefix}-name`}
          required
          className={field}
          placeholder="John Doe"
          value={form.name}
          onChange={set("name")}
        />
      </div>
      <div>
        <label className={label} htmlFor={`${idPrefix}-company`}>
          Company name
        </label>
        <input
          id={`${idPrefix}-company`}
          required
          className={field}
          placeholder="Global Imports LLC"
          value={form.company}
          onChange={set("company")}
        />
      </div>
      <div>
        <label className={label} htmlFor={`${idPrefix}-email`}>
          Business email
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          required
          className={field}
          placeholder="name@company.com"
          value={form.email}
          onChange={set("email")}
        />
      </div>
      <div>
        <label className={label} htmlFor={`${idPrefix}-phone`}>
          WhatsApp phone
        </label>
        <input
          id={`${idPrefix}-phone`}
          className={field}
          placeholder="+971 ..."
          value={form.phone}
          onChange={set("phone")}
        />
      </div>
    </div>
  );
}

// Destination port with a free-text fallback when the port isn't listed.
function PortFields({ form, set, setForm, idPrefix }) {
  return (
    <>
      <div>
        <label className={label} htmlFor={`${idPrefix}-port`}>
          Destination port
        </label>
        <select
          id={`${idPrefix}-port`}
          className={field}
          value={form.port}
          onChange={set("port")}
        >
          {destinationPorts.map((d) => (
            <option key={d.port}>{d.port}</option>
          ))}
        </select>
      </div>
      {form.port === OTHER_PORT && (
        <div>
          <label className={label} htmlFor={`${idPrefix}-customPort`}>
            Tell us the port
          </label>
          <input
            id={`${idPrefix}-customPort`}
            required
            className={field}
            placeholder="Port name, country"
            value={form.customPort}
            onChange={set("customPort")}
          />
        </div>
      )}
    </>
  );
}

function Sent({ onEdit }) {
  return (
    <div className="mt-8 rounded-lg border border-ember/40 bg-ember/5 p-7">
      <p className="font-display text-xl font-bold text-ash">
        Enquiry ready to send.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ash-2">
        This build has no backend wired up yet. Hook the submit handler in{" "}
        <code className="font-mono text-[12px] text-glow">
          src/pages/ExportQuote.jsx
        </code>{" "}
        to your CRM, email API or WhatsApp Business endpoint.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={company.whatsappHref} size="sm">
          Send via WhatsApp instead
        </Button>
        <Button variant="outline" size="sm" onClick={onEdit}>
          Edit enquiry
        </Button>
      </div>
    </div>
  );
}

function BriquetteForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    container: "20ft",
    port: destinationPorts[0].port,
    customPort: "",
    grade: "Premium",
    carton: 10,
    payment: "T/T wire transfer",
    notes: "",
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="panel p-7 md:p-9" id="briquette-form">
      <Eyebrow className="mb-2">Briquettes</Eyebrow>
      <h2 className="text-2xl font-extrabold text-ash">
        Charcoal briquette FOB / CIF inquiry
      </h2>

      {sent ? (
        <Sent onEdit={() => setSent(false)} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-8 space-y-5"
        >
          <ContactFields form={form} set={set} idPrefix="bq" />

          <div>
            <span className={label}>Container load</span>
            <div className="grid gap-3 sm:grid-cols-2">
              {containers.map((c) => {
                const active = form.container === c.id;
                return (
                  <button
                    type="button"
                    key={c.id}
                    onClick={() => setForm((f) => ({ ...f, container: c.id }))}
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
            <PortFields form={form} set={set} setForm={setForm} idPrefix="bq" />

            <div>
              <label className={label} htmlFor="bq-grade">
                Grade
              </label>
              <select
                id="bq-grade"
                className={field}
                value={form.grade}
                onChange={set("grade")}
              >
                {grades.map((g) => (
                  <option key={g.name}>{`${g.name} — ash ${g.ash}`}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={label} htmlFor="bq-carton">
                Master carton size
              </label>
              <select
                id="bq-carton"
                className={field}
                value={form.carton}
                onChange={set("carton")}
              >
                {CARTON_SIZES.map((c) => (
                  <option key={c} value={c}>{`${c} kg`}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={label} htmlFor="bq-payment">
                Payment terms
              </label>
              <select
                id="bq-payment"
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
            <label className={label} htmlFor="bq-notes">
              Anything else? (private label, factory visit dates, sample request)
            </label>
            <textarea
              id="bq-notes"
              rows={3}
              className={field}
              value={form.notes}
              onChange={set("notes")}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Submit briquette quote request →
          </Button>
          <p className="text-center text-[12px] text-ash-3">
            Indicative price band returned the same working day.
          </p>
        </form>
      )}
    </div>
  );
}

function CarbonForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    application: "Water treatment",
    grade: "Powdered (PAC)",
    quantity: "",
    port: destinationPorts[0].port,
    customPort: "",
    notes: "",
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="panel p-7 md:p-9" id="carbon-form">
      <div className="flex flex-wrap items-center gap-3">
        <Eyebrow>Activated carbon</Eyebrow>
        <span className="rounded-full border border-ember/40 bg-ember/10 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-glow uppercase">
          Coming soon
        </span>
      </div>
      <h2 className="mt-2 text-2xl font-extrabold text-ash">
        Activated carbon enquiry
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ash-2">
        The carbon line is not open for orders yet. Register your requirement and
        we will come back to you with grades and pricing the moment it is.
      </p>

      {sent ? (
        <Sent onEdit={() => setSent(false)} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-8 space-y-5"
        >
          <ContactFields form={form} set={set} idPrefix="ac" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="ac-application">
                Application
              </label>
              <select
                id="ac-application"
                className={field}
                value={form.application}
                onChange={set("application")}
              >
                <option>Water treatment</option>
                <option>Air &amp; gas purification</option>
                <option>Food &amp; beverage</option>
                <option>Gold recovery</option>
                <option>Other industrial use</option>
              </select>
            </div>

            <div>
              <label className={label} htmlFor="ac-grade">
                Grade of interest
              </label>
              <select
                id="ac-grade"
                className={field}
                value={form.grade}
                onChange={set("grade")}
              >
                <option>Powdered (PAC)</option>
                <option>Granular (GAC)</option>
                <option>Pelletised</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label className={label} htmlFor="ac-quantity">
                Indicative quantity
              </label>
              <input
                id="ac-quantity"
                className={field}
                placeholder="e.g. 10 MT per month"
                value={form.quantity}
                onChange={set("quantity")}
              />
            </div>

            <PortFields form={form} set={set} setForm={setForm} idPrefix="ac" />
          </div>

          <div>
            <label className={label} htmlFor="ac-notes">
              Specification notes (iodine value, mesh size, packing)
            </label>
            <textarea
              id="ac-notes"
              rows={3}
              className={field}
              value={form.notes}
              onChange={set("notes")}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Register carbon requirement →
          </Button>
          <p className="text-center text-[12px] text-ash-3">
            We'll contact you as soon as the line opens for orders.
          </p>
        </form>
      )}
    </div>
  );
}

function SalesDesk() {
  const { managingPartner } = company;
  return (
    <Section tone="raised">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow className="mb-3">Direct export sales desk</Eyebrow>
          <h2 className="text-3xl font-extrabold leading-tight text-ash md:text-4xl">
            Talk to a person, not a ticket queue
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ash-2">
            {company.name} — {company.address}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer noopener"
            className="panel panel-hover p-6"
          >
            <Eyebrow>WhatsApp</Eyebrow>
            <p className="mt-2 text-[17px] font-semibold text-ash">
              {company.whatsapp}
            </p>
            <p className="mt-2 text-[13px] text-ash-3">Fastest reply</p>
          </a>

          <a href={`mailto:${company.emails[0]}`} className="panel panel-hover p-6">
            <Eyebrow>Enquiries</Eyebrow>
            <p className="mt-2 break-all text-[17px] font-semibold text-ash">
              {company.emails[0]}
            </p>
            <p className="mt-2 text-[13px] text-ash-3">General export desk</p>
          </a>

          <a
            href={`mailto:${managingPartner.email}`}
            className="panel panel-hover p-6 sm:col-span-2"
          >
            <Eyebrow>{managingPartner.role}</Eyebrow>
            <p className="mt-2 break-all text-[17px] font-semibold text-ash">
              {managingPartner.email}
            </p>
            <p className="mt-2 text-[13px] text-ash-3">
              {managingPartner.name} — for partnerships and large contracts
            </p>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default function ExportQuote() {
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
        image={media.logistics.port}
      />

      <Section tone="ink" id="forms">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <BriquetteForm />
          <CarbonForm />
        </div>
      </Section>

      <SalesDesk />

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
              <span aria-hidden className="me-2">
                {d.flag}
              </span>
              {d.name}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}

"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { contact, IconName, navigation, services } from "./site-data";

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /><path d="M7.5 12h2l1.1-2.4 2.2 5 1.2-2.6h2.5" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.4 9.4 0 0 1-3.8-.9L3 21l1.7-5a8.6 8.6 0 1 1 16.3-4.5Z" /><path d="M8.2 8.4c.7 3 3 5.1 6 6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /><path d="m9 15 2 2 4-4" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
    activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    medical: <><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" /></>,
    mother: <><circle cx="12" cy="6" r="3" /><path d="M7.5 21v-4.5a4.5 4.5 0 0 1 9 0V21" /><path d="M8.4 12.8c.9 1.4 2 2.2 3.6 2.2s2.7-.8 3.6-2.2" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></>,
    document: <><path d="M6 2h9l4 4v16H6Z" /><path d="M14 2v5h5M9 13h6M9 17h6" /></>,
    accessibility: <><circle cx="12" cy="4" r="2" /><path d="M4 8h16M12 6v6M8 21l4-9 4 9" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Serene Home Care Services home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none">
          <path d="M22 38S7 30.8 7 19.2C7 13.6 13.6 10 18 14.7L22 19l4-4.3C30.4 10 37 13.6 37 19.2 37 30.8 22 38 22 38Z" stroke="currentColor" strokeWidth="2.5" />
          <path d="M13 23h5l2-4.2 4 8 2-3.8h5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>SERENE</strong>
        {!compact && <small>Home Care Services</small>}
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav id="primary-menu" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="nav-phone" href={`tel:${contact.phoneHref}`}>
            <Icon name="phone" size={19} /> {contact.phoneDisplay}
          </a>
          <a className="nav-whatsapp" href={contact.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="message" size={19} /> WhatsApp
          </a>
        </nav>
        <Link className="button button-primary header-cta" href="/#assessment">
          Book assessment
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export function AccessibilityTools() {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(() => typeof window === "undefined" ? 1 : Number(localStorage.getItem("serene-text-scale") || "1"));
  const [contrast, setContrast] = useState(() => typeof window !== "undefined" && localStorage.getItem("serene-contrast") === "true");
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && localStorage.getItem("serene-reduced-motion") === "true");

  useEffect(() => {
    document.documentElement.style.setProperty("--text-scale", String(scale));
    document.documentElement.dataset.contrast = String(contrast);
    document.documentElement.dataset.reducedMotion = String(reduced);
    localStorage.setItem("serene-text-scale", String(scale));
    localStorage.setItem("serene-contrast", String(contrast));
    localStorage.setItem("serene-reduced-motion", String(reduced));
  }, [scale, contrast, reduced]);

  return (
    <div className="accessibility-tools">
      <button
        className="accessibility-trigger"
        type="button"
        aria-expanded={open}
        aria-label="Open accessibility controls"
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name="accessibility" size={22} />
      </button>
      {open && (
        <div className="accessibility-panel" role="dialog" aria-label="Accessibility controls">
          <strong>Accessibility</strong>
          <div className="text-controls">
            <button type="button" onClick={() => setScale(Math.max(0.9, scale - 0.1))} aria-label="Decrease text size">A−</button>
            <button type="button" onClick={() => setScale(1)} aria-label="Reset text size">Reset</button>
            <button type="button" onClick={() => setScale(Math.min(1.2, scale + 0.1))} aria-label="Increase text size">A+</button>
          </div>
          <label><input type="checkbox" checked={contrast} onChange={(e) => setContrast(e.target.checked)} /> High contrast</label>
          <label><input type="checkbox" checked={reduced} onChange={(e) => setReduced(e.target.checked)} /> Reduce motion</label>
        </div>
      )}
    </div>
  );
}

export function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick contact">
      <a href={`tel:${contact.phoneHref}`}><Icon name="phone" size={21} /> Call</a>
      <a href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="message" size={21} /> WhatsApp</a>
    </div>
  );
}

type EnquiryFormProps = {
  title?: string;
  compact?: boolean;
  source?: string;
};

export function EnquiryForm({ title = "Book a care assessment", compact = false, source = "website" }: EnquiryFormProps) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Serene Home Care Services, I would like a care assessment.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Care need: ${data.get("need")}`,
      `Preferred contact: ${data.get("contactMethod")}`,
      `Source: ${source}`,
    ].join("\n");
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form className={`enquiry-form ${compact ? "is-compact" : ""}`} onSubmit={submit}>
      <div className="form-heading">
        <p className="eyebrow">No medical history needed here</p>
        <h2>{title}</h2>
        <p>Share only the basics. We’ll respond {contact.responseTime}.</p>
      </div>
      <div className="form-grid">
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required />
        </label>
        <label>
          Main care need
          <select name="need" defaultValue="" required>
            <option value="" disabled>Choose one</option>
            {services.map((service) => <option key={service.slug} value={service.title}>{service.shortTitle}</option>)}
            <option value="Not sure">I’m not sure</option>
          </select>
        </label>
        <label>
          Preferred reply
          <select name="contactMethod" defaultValue="WhatsApp">
            <option>WhatsApp</option>
            <option>Phone call</option>
          </select>
        </label>
      </div>
      <label className="consent-row">
        <input type="checkbox" required />
        <span>I agree that Serene may contact me about this enquiry. I understand this form is not for emergencies.</span>
      </label>
      <button className="button button-primary button-wide" type="submit">
        <Icon name="calendar" size={20} /> Continue on WhatsApp
      </button>
      {sent && <p className="form-status" role="status">WhatsApp opened with your enquiry. If it did not open, call {contact.phoneDisplay}.</p>}
    </form>
  );
}

const finderOptions = [
  { label: "Daily support for an older adult", slug: "elderly-dementia-care" },
  { label: "Help after leaving hospital", slug: "post-hospital-recovery" },
  { label: "A clinical or wound-care need", slug: "skilled-nursing-wound-care" },
  { label: "A break for a family caregiver", slug: "respite-family-support" },
  { label: "Mobility or exercise support", slug: "physiotherapy-rehabilitation" },
  { label: "Support before or after birth", slug: "antenatal-postnatal-care" },
];

export function CareFinder() {
  const [selected, setSelected] = useState("");
  const service = services.find((item) => item.slug === selected);

  return (
    <div className="care-finder">
      <div>
        <p className="eyebrow">Help me choose</p>
        <h2>What support are you looking for?</h2>
        <p>Choose the closest match. The assessment confirms the appropriate type of professional.</p>
      </div>
      <div className="finder-options" role="group" aria-label="Choose a care need">
        {finderOptions.map((option) => (
          <button
            className={selected === option.slug ? "is-selected" : ""}
            type="button"
            key={option.slug}
            onClick={() => setSelected(option.slug)}
          >
            {option.label}<Icon name="arrow" size={18} />
          </button>
        ))}
      </div>
      {service && (
        <div className="finder-result" aria-live="polite">
          <span className="icon-tile"><Icon name={service.icon} /></span>
          <div>
            <p className="eyebrow">A useful starting point</p>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <Link className="text-link" href={`/services/${service.slug}`}>See what’s included <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      )}
    </div>
  );
}

type RoutedFormProps = {
  kind: "career" | "referral";
};

export function RoutedForm({ kind }: RoutedFormProps) {
  const [sent, setSent] = useState(false);
  const career = kind === "career";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = career
      ? [
          "Hello Serene, I am interested in working with your care team.",
          `Name: ${data.get("name")}`,
          `Phone: ${data.get("phone")}`,
          `Role: ${data.get("role")}`,
          `Registration (if applicable): ${data.get("registration") || "Not provided"}`,
        ]
      : [
          "Hello Serene, I am a healthcare professional making a referral enquiry.",
          `Referrer: ${data.get("name")}`,
          `Organisation: ${data.get("organisation")}`,
          `Phone: ${data.get("phone")}`,
          `Service requested: ${data.get("service")}`,
          "No patient-identifying or medical information was submitted through the website.",
        ];
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form className="enquiry-form routed-form" onSubmit={submit}>
      <div className="form-heading">
        <p className="eyebrow">{career ? "Careers" : "Professional referrals"}</p>
        <h2>{career ? "Introduce yourself" : "Start a referral conversation"}</h2>
        <p>{career ? "Do not upload identity documents here. We request evidence through a secure follow-up process." : "Do not include a patient name, diagnosis or clinical record in this initial form."}</p>
      </div>
      <div className="form-grid">
        <label>Your name<input name="name" type="text" autoComplete="name" required /></label>
        {!career && <label>Organisation<input name="organisation" type="text" autoComplete="organization" required /></label>}
        <label>Phone number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required /></label>
        {career ? (
          <>
            <label>Role of interest<select name="role" defaultValue="" required><option value="" disabled>Choose one</option><option>Caregiver</option><option>Nurse</option><option>Physiotherapy / rehabilitation</option><option>Operations / coordination</option></select></label>
            <label>Professional registration, if applicable<input name="registration" type="text" /></label>
          </>
        ) : (
          <label>Service requested<select name="service" defaultValue="" required><option value="" disabled>Choose one</option>{services.map((service) => <option key={service.slug}>{service.title}</option>)}</select></label>
        )}
      </div>
      <label className="consent-row"><input type="checkbox" required /><span>I agree that Serene may contact me about this submission and understand this channel is not for emergencies.</span></label>
      <button className="button button-primary" type="submit"><Icon name="message" size={20} /> Send via WhatsApp</button>
      {sent && <p className="form-status" role="status">WhatsApp opened with your details.</p>}
    </form>
  );
}

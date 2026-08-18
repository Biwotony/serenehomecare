import Link from "next/link";
import { AccessibilityTools, Header, Icon, Logo, MobileActionBar } from "./components";
import { contact, IconName, services } from "./site-data";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      {children}
      <Footer />
      <AccessibilityTools />
      <MobileActionBar />
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Professional, person-centred home care planned around each client’s needs in Eldoret.</p>
          <p className="response-note"><Icon name="clock" size={19} /> Enquiries answered {contact.responseTime}</p>
        </div>
        <div>
          <h2>Care services</h2>
          <ul>
            {services.map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.shortTitle}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2>Information</h2>
          <ul>
            <li><Link href="/how-care-works">How care works</Link></li>
            <li><Link href="/resources">Care resources</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/referrals">Professional referrals</Link></li>
            <li><Link href="/privacy">Privacy & consent</Link></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <address>
            <p>{contact.location}<br />Visits and assessments by appointment</p>
            <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            <span>{contact.website}</span>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Serene Home Care Services.</p>
        <p><strong>Not an emergency service.</strong> For urgent or life-threatening symptoms, contact local emergency services or go to the nearest emergency department.</p>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="service-card">
      <span className="icon-tile"><Icon name={service.icon} /></span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link className="text-link" href={`/services/${service.slug}`}>Explore this care <Icon name="arrow" size={18} /></Link>
    </article>
  );
}

export function FeatureCard({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <article className="feature-card">
      <span className="icon-tile"><Icon name={icon} /></span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export function Callout({ title, children, tone = "navy" }: { title: string; children: React.ReactNode; tone?: "navy" | "teal" | "light" }) {
  return (
    <aside className={`callout callout-${tone}`}>
      <div>
        <p className="eyebrow">Care starts with a conversation</p>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <div className="button-group">
        <a className="button button-white" href={`tel:${contact.phoneHref}`}><Icon name="phone" size={20} /> Call {contact.phoneDisplay}</a>
        <Link className="button button-outline-light" href="/#assessment"><Icon name="calendar" size={20} /> Book assessment</Link>
      </div>
    </aside>
  );
}

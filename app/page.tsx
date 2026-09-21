import Link from "next/link";
import { EnquiryForm, Icon } from "./components";
import { ServiceCard, SiteShell, TeamPortraits } from "./site-shell";
import { contact, services } from "./site-data";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Serene Home Care Services | Eldoret",
  description:
    "Professional home care in Eldoret, including elderly care, recovery support, home nursing, respite, rehabilitation and maternal support.",
  path: "/",
});

export default function Home() {
  return (
    <SiteShell>
      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy fade-in">
              <p className="eyebrow"><span /> Home care in Eldoret</p>
              <h1>Professional care in the comfort of home</h1>
              <p className="lead">Daily support and qualified nursing care, matched to your needs.</p>
              <div className="button-group hero-actions">
                <a className="button button-primary" href={`tel:${contact.phoneHref}`}><Icon name="phone" size={20} /> Call {contact.phoneDisplay}</a>
                <a className="button button-secondary" href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="message" size={20} /> WhatsApp us</a>
              </div>
              <p className="hero-assurance"><Icon name="clock" size={19} /> We reply {contact.responseTime}.</p>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">Our services</p><h2>Care matched to the person</h2></div>
            </div>
            <div className="service-grid">
              {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
            </div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container team-grid">
            <TeamPortraits />
            <div className="team-copy">
              <p className="eyebrow">Our care team</p>
              <h2>Know who is coming to your home</h2>
              <p>We introduce the assigned professional, explain their role and verify the credentials required for their work.</p>
              <Link className="text-link" href="/about">About Serene <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="final-conversion" id="assessment">
          <div className="container conversion-grid">
            <div className="conversion-copy">
              <p className="eyebrow">Home care in Eldoret</p>
              <h2>Talk to Serene</h2>
              <p>Call now or send a short assessment request.</p>
              <div className="contact-lines">
                <a href={`tel:${contact.phoneHref}`}><Icon name="phone" /><span><small>Call</small>{contact.phoneDisplay}</span></a>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="message" /><span><small>WhatsApp</small>Start a conversation</span></a>
                <p><Icon name="home" /><span><small>Service area</small>{contact.location}</span></p>
              </div>
            </div>
            <EnquiryForm source="homepage" />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

import Image from "next/image";
import Link from "next/link";
import { EnquiryForm, Icon } from "./components";
import { ServiceCard, SiteShell } from "./site-shell";
import { contact, services } from "./site-data";

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
                <Link className="button button-secondary" href="#assessment"><Icon name="calendar" size={20} /> Book an assessment</Link>
              </div>
              <p className="hero-assurance"><Icon name="clock" size={19} /> We reply {contact.responseTime}.</p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Serene care commitments">
          <div className="container trust-grid">
            <div><Icon name="medical" /><span><strong>Right professional</strong>Caregiver or nurse</span></div>
            <div><Icon name="clipboard" /><span><strong>Personal care plan</strong>Agreed before care starts</span></div>
            <div><Icon name="shield" /><span><strong>Verified credentials</strong>Checked for the assigned role</span></div>
            <div><Icon name="home" /><span><strong>Serving Eldoret</strong>Subject to availability</span></div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">Our services</p><h2>Care matched to the person</h2></div>
              <p>Choose a service to see who it is for and what is included.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="how-care-works">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">How care starts</p>
              <h2>Three clear steps</h2>
            </div>
            <ol className="process-grid">
              <li><span className="step-number">01</span><Icon name="phone" /><h3>Talk to us</h3><p>Tell us the support you need.</p></li>
              <li><span className="step-number">02</span><Icon name="clipboard" /><h3>Agree the plan</h3><p>Confirm the role, tasks, schedule and cost.</p></li>
              <li><span className="step-number">03</span><Icon name="heart" /><h3>Start care</h3><p>Meet the assigned professional and begin.</p></li>
            </ol>
            <div className="center-action"><Link className="text-link" href="/how-care-works">See how care works <Icon name="arrow" size={18} /></Link></div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="container team-grid">
            <div className="team-image-wrap">
              <Image src="/images/serene-care-team.webp" alt="A member of the Serene care team in blue clinical uniform" width={1000} height={1250} sizes="(max-width: 800px) 100vw, 45vw" />
            </div>
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

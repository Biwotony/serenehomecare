import Image from "next/image";
import Link from "next/link";
import { CareFinder, EnquiryForm, Icon } from "./components";
import { FeatureCard, ServiceCard, SiteShell } from "./site-shell";
import { commonFaqs, contact, services } from "./site-data";

export default function Home() {
  return (
    <SiteShell>
      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy fade-in">
              <p className="eyebrow"><span /> Home care in Eldoret, Kenya</p>
              <h1>Professional home care in Eldoret</h1>
              <p className="lead">Practical daily support and qualified clinical care, planned around the person—not a one-size-fits-all package.</p>
              <div className="button-group hero-actions">
                <a className="button button-primary" href={`tel:${contact.phoneHref}`}><Icon name="phone" size={20} /> Call {contact.phoneDisplay}</a>
                <Link className="button button-secondary" href="#assessment"><Icon name="calendar" size={20} /> Book a care assessment</Link>
              </div>
              <p className="hero-assurance"><Icon name="clock" size={19} /> We acknowledge enquiries {contact.responseTime}. No medical history is requested online.</p>
            </div>
            <div className="hero-visual fade-in" aria-label="A calm visual summary of Serene’s care planning">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="care-plan-card">
                <span className="icon-tile icon-tile-large"><Icon name="home" size={31} /></span>
                <p className="eyebrow">Your care plan</p>
                <h2>Clear, personal, coordinated</h2>
                <ul className="check-list compact-list">
                  <li><Icon name="check" size={18} /> The right role for each task</li>
                  <li><Icon name="check" size={18} /> A schedule agreed with your family</li>
                  <li><Icon name="check" size={18} /> Updates and escalation contacts</li>
                </ul>
              </div>
              <div className="floating-note note-one"><Icon name="shield" size={20} /><span>Credentials checked</span></div>
              <div className="floating-note note-two"><Icon name="message" size={20} /><span>Family updates</span></div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Serene care commitments">
          <div className="container trust-grid">
            <div><Icon name="medical" /><span><strong>Role-matched care</strong>Caregiver or nurse, clearly explained</span></div>
            <div><Icon name="clipboard" /><span><strong>Personalised plan</strong>Built after a needs assessment</span></div>
            <div><Icon name="home" /><span><strong>Eldoret coverage</strong>Availability confirmed by location</span></div>
            <div><Icon name="clock" /><span><strong>Prompt first reply</strong>Within one business day</span></div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">Care for different needs</p><h2>What kind of support would help?</h2></div>
              <p>Start with the closest match. We’ll confirm the appropriate service and professional during assessment.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
            </div>
            <CareFinder />
          </div>
        </section>

        <section className="section section-soft" id="why-serene">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Why families choose Serene</p>
              <h2>Reassurance comes from clear standards</h2>
              <p>We explain who is providing care, what they are responsible for and how your family stays informed.</p>
            </div>
            <div className="feature-grid">
              <FeatureCard icon="shield" title="Checks before assignment">Identity, work history, references and role-appropriate professional credentials are checked before assignment. Evidence is available to discuss.</FeatureCard>
              <FeatureCard icon="users" title="Safeguarding in practice">Care professionals receive clear conduct, confidentiality and escalation expectations. Concerns are documented and handled promptly.</FeatureCard>
              <FeatureCard icon="message" title="Family communication">The plan identifies consent, preferred contacts, update frequency and who to call if the person’s needs change.</FeatureCard>
            </div>
            <div className="verification-note"><Icon name="document" /><p><strong>Our transparency standard</strong> Licence, registration and qualification details are published only after verification. Ask to see the relevant evidence for the professional assigned to clinical care.</p></div>
          </div>
        </section>

        <section className="section process-section" id="how-care-works">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">A simple care journey</p><h2>From first call to confident care</h2></div>
              <p>There is no pressure to commit during the first conversation. You receive the proposed scope and cost before care starts.</p>
            </div>
            <ol className="process-grid">
              <li><span className="step-number">01</span><Icon name="phone" /><h3>Talk and assess</h3><p>Tell us the basics. We arrange a needs and home-safety assessment, with the person’s consent.</p></li>
              <li><span className="step-number">02</span><Icon name="clipboard" /><h3>Agree the plan</h3><p>Review recommended tasks, professional role, schedule, communication, safeguarding and written quotation.</p></li>
              <li><span className="step-number">03</span><Icon name="heart" /><h3>Start and review</h3><p>Meet the assigned professional, begin care and review the plan when needs or circumstances change.</p></li>
            </ol>
            <div className="center-action"><Link className="button button-secondary" href="/how-care-works">See the full care journey <Icon name="arrow" size={19} /></Link></div>
          </div>
        </section>

        <section className="section team-section" id="team">
          <div className="container team-grid">
            <div className="team-image-wrap">
              <Image src="/images/serene-care-team.webp" alt="A member of the Serene care team in blue clinical uniform" width={1000} height={1250} sizes="(max-width: 800px) 100vw, 45vw" />
              <div className="image-caption"><Icon name="shield" size={21} /><span>Real Serene team photography</span></div>
            </div>
            <div className="team-copy">
              <p className="eyebrow">Know who enters your home</p>
              <h2>Meet your proposed care professional before care begins</h2>
              <p className="lead-small">Serene introduces the person, explains their role and confirms the credentials relevant to the work they will perform.</p>
              <ul className="check-list">
                <li><Icon name="check" size={19} /><span><strong>Named professional</strong> — identity and role shared before the first ongoing visit</span></li>
                <li><Icon name="check" size={19} /><span><strong>Verified scope</strong> — clinical tasks reserved for appropriately qualified professionals</span></li>
                <li><Icon name="check" size={19} /><span><strong>Clear back-up</strong> — continuity and replacement arrangements explained in advance</span></li>
              </ul>
              <div className="profile-disclosure"><strong>Profile details awaiting publication</strong><p>Serene will add the staff member’s name, title, qualifications and verified registration details here after written approval. We do not invent or assume them from a photograph.</p></div>
              <Link className="text-link" href="/about">Our standards and team approach <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="reviews">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Family feedback</p>
              <h2>Real experiences, shared responsibly</h2>
              <p>Healthcare testimonials need context and consent. Serene will never use invented quotes, stock identities or unverifiable star ratings.</p>
            </div>
            <div className="review-principles">
              <article><Icon name="users" /><h3>Named or clearly verified</h3><p>Each published review will identify a real source or explain how it was independently verified.</p></article>
              <article><Icon name="shield" /><h3>Published with consent</h3><p>Clients and families control whether names, photographs or care details may be shared.</p></article>
              <article><Icon name="document" /><h3>Accurate context</h3><p>Feedback will not promise that another person will experience the same result.</p></article>
            </div>
            <p className="empty-state">Verified family reviews will appear here after consent. During an assessment, ask what references or service evidence can be shared appropriately.</p>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro"><p className="eyebrow">Common questions</p><h2>Clear answers before you decide</h2><p>Understand cost, timing, staff roles and safety before agreeing to a care plan.</p><Link className="button button-secondary" href="/faq">View all FAQs</Link></div>
            <div className="accordion-list">
              {commonFaqs.slice(0, 5).map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="final-conversion" id="assessment">
          <div className="container conversion-grid">
            <div className="conversion-copy">
              <p className="eyebrow">Serving Eldoret, Kenya</p>
              <h2>Let’s understand what would make home feel safer and easier</h2>
              <p>Call now for a short conversation, or send the basics and we’ll reply {contact.responseTime}.</p>
              <div className="contact-lines">
                <a href={`tel:${contact.phoneHref}`}><Icon name="phone" /><span><small>Call Serene</small>{contact.phoneDisplay}</span></a>
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

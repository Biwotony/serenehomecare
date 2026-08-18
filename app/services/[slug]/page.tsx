import { notFound } from "next/navigation";
import { Icon } from "../../components";
import { Callout, SiteShell } from "../../site-shell";
import { services } from "../../site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <SiteShell>
      <main id="main-content">
        <section className="service-hero">
          <div className="container service-hero-grid">
            <div><p className="eyebrow">Serene home care · Eldoret</p><h1>{service.title}</h1><p className="lead">{service.summary}</p></div>
            <span className="service-hero-icon"><Icon name={service.icon} size={54} /></span>
          </div>
        </section>
        <section className="section">
          <div className="container detail-grid">
            <article className="detail-card"><p className="eyebrow">Who it’s for</p><h2>When this service may help</h2><ul className="check-list">{service.forWhom.map((item) => <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>)}</ul></article>
            <article className="detail-card"><p className="eyebrow">What may be included</p><h2>Tasks agreed in the care plan</h2><ul className="check-list">{service.tasks.map((item) => <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>)}</ul></article>
          </div>
        </section>
        <section className="section section-soft">
          <div className="container two-column-copy">
            <div><p className="eyebrow">The right professional</p><h2>Caregiver or clinical professional?</h2><p>{service.professional}</p></div>
            <div><p className="eyebrow">Availability</p><h2>How scheduling works</h2><p>{service.availability}</p><p>A start date is confirmed only after assessment and assignment checks.</p></div>
          </div>
        </section>
        <section className="section">
          <div className="container faq-layout">
            <div className="faq-intro"><p className="eyebrow">About this service</p><h2>Questions families ask</h2><p>We’ll answer questions specific to your situation during assessment.</p></div>
            <div className="accordion-list">{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
          </div>
        </section>
        <section className="section"><div className="container"><Callout title={`Discuss ${service.shortTitle.toLowerCase()} with Serene`}>A short initial enquiry helps us decide what assessment is needed. Do not send confidential medical records through WhatsApp.</Callout></div></section>
      </main>
    </SiteShell>
  );
}

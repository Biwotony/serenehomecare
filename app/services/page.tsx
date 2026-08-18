import { CareFinder } from "../components";
import { Callout, PageIntro, ServiceCard, SiteShell } from "../site-shell";
import { services } from "../site-data";

export const metadata = {
  title: "Home Care Services in Eldoret | Serene",
  description: "Explore Serene’s elderly care, recovery care, home nursing, respite, rehabilitation and maternal support in Eldoret.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <PageIntro eyebrow="Home care services" title="Support matched to the person and the task" description="Some needs call for a trained caregiver; others require a nurse or rehabilitation professional. Our assessment makes that distinction clear." />
        <section className="section">
          <div className="container">
            <div className="service-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
            <CareFinder />
          </div>
        </section>
        <section className="section section-soft">
          <div className="container role-comparison">
            <div className="section-heading centered"><p className="eyebrow">Know the difference</p><h2>Caregiver support and nursing care are not interchangeable</h2></div>
            <div className="comparison-grid">
              <article><h3>Caregiver</h3><p>Supports everyday routines, personal care, meals, mobility, companionship, reminders and observation within an agreed plan.</p><p><strong>Does not:</strong> diagnose, prescribe, change medication or perform clinical procedures outside training and scope.</p></article>
              <article><h3>Nurse or clinical professional</h3><p>Assesses and delivers defined clinical tasks within verified qualifications, registration and professional scope.</p><p><strong>May require:</strong> a current prescription, discharge instruction or treating clinician’s plan before care begins.</p></article>
            </div>
          </div>
        </section>
        <section className="section"><div className="container"><Callout title="Not sure which service fits?">Tell us what daily life looks like and what has changed. We’ll help identify a sensible next step without asking for medical history online.</Callout></div></section>
      </main>
    </SiteShell>
  );
}

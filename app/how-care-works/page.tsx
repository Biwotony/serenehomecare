import Link from "next/link";
import { EnquiryForm, Icon } from "../components";
import { PageIntro, SiteShell } from "../site-shell";

export const metadata = {
  title: "How Home Care Works | Serene Eldoret",
  description: "Understand Serene’s assessment, care planning, costs, hospital discharge support and care review process.",
};

const dischargeChecklist = [
  "Written discharge summary and follow-up instructions",
  "Current medicines list and who is responsible for each task",
  "Mobility, transfer and fall-risk guidance",
  "Wound, equipment or therapy instructions, if applicable",
  "Warning signs and the clinician or facility to contact",
  "Consent for relevant information to be shared with the care team",
];

export default function HowCareWorksPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <PageIntro eyebrow="How care works" title="A clear path from concern to the right support" description="Understand each decision, meet the proposed professional and approve the written plan before care begins." />
        <section className="section">
          <div className="container journey-list">
            <article><span>01</span><div><Icon name="phone" /><h2>First conversation</h2><p>We ask who needs support, where in Eldoret they live, the broad care need and the best contact. The initial form does not request medical history.</p></div></article>
            <article><span>02</span><div><Icon name="clipboard" /><h2>Care assessment</h2><p>With consent, we explore daily routines, goals, mobility, home safety, clinical instructions, communication preferences and family involvement.</p></div></article>
            <article><span>03</span><div><Icon name="document" /><h2>Written plan and quotation</h2><p>You receive the proposed tasks, professional role, schedule, boundaries, review plan and cost. Ask questions before agreeing.</p></div></article>
            <article><span>04</span><div><Icon name="users" /><h2>Professional introduction</h2><p>Meet the proposed professional and understand their role, verified credentials, supervision and back-up arrangements.</p></div></article>
            <article><span>05</span><div><Icon name="heart" /><h2>Start, communicate and review</h2><p>Care begins against the agreed plan. Updates follow the client’s consent and the plan is reviewed when needs change.</p></div></article>
          </div>
        </section>
        <section className="section section-soft">
          <div className="container cost-grid">
            <div><p className="eyebrow">Understanding cost</p><h2>What shapes a home-care quotation?</h2><p>Serene does not use one price for every situation. Cost depends on the role required, visit length and frequency, timing, location, continuity needs and any specialist supervision.</p><ul className="check-list"><li><Icon name="check" size={19} /><span>No payment information in the initial form</span></li><li><Icon name="check" size={19} /><span>Written scope and quotation before care starts</span></li><li><Icon name="check" size={19} /><span>Changes discussed before they affect ongoing cost</span></li></ul></div>
            <aside className="payment-safety"><Icon name="shield" size={34} /><h3>Payment safety</h3><p>Pay only against an official Serene invoice issued after assessment. Confirm unexpected account changes through <strong>0703 862 025</strong> before paying.</p><Link className="text-link" href="/payments">Read payment guidance <Icon name="arrow" size={18} /></Link></aside>
          </div>
        </section>
        <section className="section">
          <div className="container discharge-grid">
            <div><p className="eyebrow">Leaving hospital</p><h2>Plan the first days at home before discharge</h2><p>Contacting Serene early gives the family time to understand instructions, prepare the home and arrange the right role.</p><p className="emergency-note"><strong>Important:</strong> Home care does not replace medical follow-up or emergency treatment.</p></div>
            <div className="checklist-card"><h3>Hospital-discharge checklist</h3><ul className="check-list">{dischargeChecklist.map((item) => <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>)}</ul></div>
          </div>
        </section>
        <section className="final-conversion"><div className="container conversion-grid"><div className="conversion-copy"><p className="eyebrow">Ready for the first step?</p><h2>Book a care assessment</h2><p>Share only the basics. A coordinator will follow up within one business day to understand the next step.</p></div><EnquiryForm source="how-care-works" compact /></div></section>
      </main>
    </SiteShell>
  );
}

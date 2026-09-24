import Image from "next/image";
import { Icon } from "../components";
import { Callout, FeatureCard, PageIntro, SiteShell, TeamPortraits } from "../site-shell";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "About Serene Home Care Services | Eldoret",
  description: "Serene Home Care Services provides home visits in Eldoret and surrounding areas, with 24-hour availability. Learn about our team and care standards.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <PageIntro eyebrow="About Serene" title="Care that respects the person, the home and the family" description="Serene Home Care Services is a home-care provider with an office on Kenyatta Street in Eldoret, Kenya. We visit clients at home in Eldoret and surrounding areas, with 24-hour availability. Contact us on 0703 862 025 to discuss the support you need." />
        <section className="page-visual-section" aria-label="Care team illustration">
          <div className="container">
            <figure className="page-visual">
              <div className="page-visual-frame">
                <Image src="/images/serene-nursing-team-portrait.webp" alt="Illustrative portrait of a coordinated home-care nursing team" fill sizes="(max-width: 860px) 92vw, 1160px" style={{ objectPosition: "center top" }} unoptimized />
              </div>
            </figure>
          </div>
        </section>
        <section className="section">
          <div className="container team-grid">
            <TeamPortraits />
            <div className="team-copy">
              <p className="eyebrow">Our team approach</p>
              <h2>The client should know who is coming and why</h2>
              <p>Before ongoing care, Serene explains the proposed professional’s name, role, verified qualifications or registration where relevant, tasks and supervision.</p>
              <ul className="check-list">
                <li><Icon name="check" size={19} /><span>Introduction before ongoing care</span></li>
                <li><Icon name="check" size={19} /><span>Role boundaries recorded in the plan</span></li>
                <li><Icon name="check" size={19} /><span>Family communication follows client consent</span></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section section-soft"><div className="container"><div className="section-heading centered"><p className="eyebrow">Care standards</p><h2>What Serene checks and documents</h2></div><div className="feature-grid"><FeatureCard icon="shield" title="Suitability and safeguarding">Identity, role-appropriate work history, references, conduct expectations and safeguarding awareness are reviewed before assignment.</FeatureCard><FeatureCard icon="medical" title="Professional scope">Clinical qualifications and current registration are verified where the work requires them. Caregivers are not presented as nurses.</FeatureCard><FeatureCard icon="clipboard" title="Accountable care plan">Tasks, risks, consent, contacts, records, escalation and review points are written down and agreed.</FeatureCard></div><div className="verification-note"><Icon name="document" /><p><strong>Home visits in Eldoret and surrounding areas</strong> We are available 24 hours. Call 0703 862 025 to confirm coverage, the appropriate professional and arrangements for your visit. Home care is not an emergency response service.</p></div></div></section>
        <section className="section"><div className="container"><Callout title="Ask us to show the evidence relevant to your care">Trust should be specific. During assessment, ask about the assigned professional’s identity, qualifications, registration, checks, supervision and complaint route.</Callout></div></section>
      </main>
    </SiteShell>
  );
}

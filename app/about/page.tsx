import Image from "next/image";
import { Icon } from "../components";
import { Callout, FeatureCard, PageIntro, SiteShell } from "../site-shell";

export const metadata = {
  title: "About Serene Home Care Services | Eldoret",
  description: "Learn about Serene’s person-centred approach, staff checks, safeguarding and communication standards.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <PageIntro eyebrow="About Serene" title="Care that respects the person, the home and the family" description="Serene exists to make home support easier to understand: who will help, what they will do, how safety is managed and when the plan will be reviewed." />
        <section className="section"><div className="container team-grid"><div className="team-image-wrap"><Image src="/images/serene-care-team.webp" alt="A member of the Serene care team in blue clinical uniform" width={1000} height={1250} sizes="(max-width: 800px) 100vw, 45vw" /><div className="image-caption"><Icon name="users" size={21} /><span>Serene care team · Eldoret</span></div></div><div className="team-copy"><p className="eyebrow">Our team approach</p><h2>The client should know who is coming and why</h2><p>Before ongoing care, Serene explains the proposed professional’s name, role, verified qualifications or registration where relevant, tasks and supervision.</p><div className="profile-disclosure"><strong>Staff profile verification</strong><p>The supplied team portrait is authentic Serene photography. The person’s name, role and qualifications have not been provided, so they are intentionally not stated. Add them only after confirmation and consent.</p></div><ul className="check-list"><li><Icon name="check" size={19} /><span>Introduction before ongoing care</span></li><li><Icon name="check" size={19} /><span>Role boundaries recorded in the plan</span></li><li><Icon name="check" size={19} /><span>Family communication follows client consent</span></li></ul></div></div></section>
        <section className="section section-soft"><div className="container"><div className="section-heading centered"><p className="eyebrow">Care standards</p><h2>What Serene checks and documents</h2></div><div className="feature-grid"><FeatureCard icon="shield" title="Suitability and safeguarding">Identity, role-appropriate work history, references, conduct expectations and safeguarding awareness are reviewed before assignment.</FeatureCard><FeatureCard icon="medical" title="Professional scope">Clinical qualifications and current registration are verified where the work requires them. Caregivers are not presented as nurses.</FeatureCard><FeatureCard icon="clipboard" title="Accountable care plan">Tasks, risks, consent, contacts, records, escalation and review points are written down and agreed.</FeatureCard></div><div className="verification-note"><Icon name="document" /><p><strong>Publication notice</strong> The business registration/licence number, named leadership, exact physical address and confirmed opening hours should be added here after Serene supplies and verifies them. Eldoret is the currently confirmed public location.</p></div></div></section>
        <section className="section"><div className="container"><Callout title="Ask us to show the evidence relevant to your care">Trust should be specific. During assessment, ask about the assigned professional’s identity, qualifications, registration, checks, supervision and complaint route.</Callout></div></section>
      </main>
    </SiteShell>
  );
}

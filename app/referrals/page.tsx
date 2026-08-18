import { RoutedForm } from "../components";
import { Icon } from "../components";
import { PageIntro, SiteShell } from "../site-shell";

export const metadata = { title: "Healthcare Professional Referrals | Serene", description: "Start a home-care referral conversation with Serene Home Care Services in Eldoret without sending patient medical details online." };

export default function ReferralsPage() {
  return (
    <SiteShell><main id="main-content"><PageIntro eyebrow="Professional referrals" title="Coordinate the move from clinical advice to practical home support" description="Clinicians, hospitals and allied health professionals can start a referral conversation here. Patient-identifying and medical information should follow only through an agreed secure channel and with consent." /><section className="section"><div className="container form-page-grid"><div><p className="eyebrow">Referral pathway</p><h2>What happens next</h2><ol className="numbered-list"><li><span>01</span><p>Send only your professional contact details and the broad service requested.</p></li><li><span>02</span><p>Serene confirms the appropriate secure route and the client’s consent position.</p></li><li><span>03</span><p>Relevant discharge or clinical instructions are reviewed by the appropriate professional.</p></li><li><span>04</span><p>Serene assesses home needs, role, availability and boundaries.</p></li><li><span>05</span><p>A written care proposal is shared with authorised people.</p></li></ol><div className="emergency-note"><Icon name="medical" /><p><strong>Not for urgent referrals.</strong> Use the relevant emergency or hospital pathway when delay could place someone at risk.</p></div></div><RoutedForm kind="referral" /></div></section></main></SiteShell>
  );
}

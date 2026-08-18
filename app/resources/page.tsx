import { Icon } from "../components";
import { Callout, PageIntro, SiteShell } from "../site-shell";

export const metadata = { title: "Home Care Guides | Serene Eldoret", description: "Practical guides for choosing home care, preparing for hospital discharge and supporting family caregivers." };

const guides = [
  { id: "choosing-care", icon: "shield" as const, label: "Choosing care", title: "Questions to ask before inviting a care professional into the home", intro: "Good care should be easy to explain and verify.", items: ["What exact tasks will be included—and excluded?", "Does the work need a caregiver, nurse or rehabilitation professional?", "Which identity, reference and credential checks were completed?", "Who supervises the work and receives concerns?", "How are consent, records and family updates managed?", "What happens if the regular professional is unavailable?"] },
  { id: "hospital-discharge", icon: "home" as const, label: "Hospital discharge", title: "Preparing for the first days at home", intro: "Begin planning before discharge where possible.", items: ["Ask for the written discharge summary and follow-up plan.", "Confirm the current medicines list and who may administer or remind.", "Understand mobility, wound, equipment and therapy instructions.", "Prepare safe routes, lighting, sleeping arrangements and essential supplies.", "Write down warning signs and the right clinical contact.", "Share only necessary information, and only with the client’s consent."] },
  { id: "family-caregivers", icon: "users" as const, label: "Family caregivers", title: "Recognising when the family needs more support", intro: "Seeking help early can protect both the client and the caregiver.", items: ["Daily care is affecting sleep, work, health or relationships.", "Transfers or personal care no longer feel safe.", "The person’s needs have become clinical or unpredictable.", "Family members disagree about tasks, contacts or responsibility.", "Appointments, meals or medicines support are becoming difficult to coordinate.", "There is no realistic back-up if the main caregiver is unavailable."] },
];

export default function ResourcesPage() {
  return (
    <SiteShell><main id="main-content"><PageIntro eyebrow="Care resources" title="Practical guidance for safer decisions at home" description="Use these guides to prepare questions and conversations. They are general information, not a diagnosis or substitute for advice from a qualified clinician." />
      <section className="section"><div className="container resource-cards">{guides.map((guide) => <a href={`#${guide.id}`} key={guide.id}><Icon name={guide.icon} /><span><small>{guide.label}</small><strong>{guide.title}</strong></span><Icon name="arrow" size={20} /></a>)}</div></section>
      {guides.map((guide, index) => <section className={`section resource-article ${index % 2 ? "section-soft" : ""}`} id={guide.id} key={guide.id}><article className="container article-layout"><div><p className="eyebrow">{guide.label}</p><h2>{guide.title}</h2><p>{guide.intro}</p></div><ol>{guide.items.map((item, itemIndex) => <li key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></article></section>)}
      <section className="section"><div className="container"><div className="emergency-banner"><Icon name="medical" size={30} /><div><h2>When not to wait for home care</h2><p>Serene is not an emergency service. If someone is seriously unwell, has sudden severe symptoms or is in immediate danger, contact local emergency services or go to the nearest emergency department.</p></div></div><Callout title="Turn your questions into a care plan">An assessment helps define the safest role, tasks, schedule and communication process for your home.</Callout></div></section>
    </main></SiteShell>
  );
}

import { commonFaqs, services } from "../site-data";
import { Callout, PageIntro, SiteShell } from "../site-shell";
import { pageMetadata, siteUrl } from "../seo";

export const metadata = pageMetadata({ title: "Home Care FAQs | Serene Eldoret", description: "Answers about home-care cost, timing, services, care professionals, safety and hospital discharge in Eldoret.", path: "/faq" });

export default function FaqPage() {
  const serviceFaqs = services.flatMap((service) => service.faqs.map((faq) => ({ ...faq, service: service.shortTitle })));
  const allFaqs = [...commonFaqs, ...serviceFaqs];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${siteUrl}/faq/#page`,
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Frequently asked questions", item: `${siteUrl}/faq` },
      ],
    },
  ];
  return (
    <SiteShell><main id="main-content"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><PageIntro eyebrow="Frequently asked questions" title="What families should know before arranging care" description="Straightforward information about pricing, availability, staff roles, service scope, safety and choosing a care professional." /><section className="section"><div className="container faq-page-grid"><aside><h2>On this page</h2><a href="#planning">Planning and trust</a><a href="#services">Service questions</a><p><strong>Still unsure?</strong><br />Call 0703 862 025. Do not use this site for an emergency.</p></aside><div><div className="faq-group" id="planning"><p className="eyebrow">Planning and trust</p><div className="accordion-list">{commonFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div><div className="faq-group" id="services"><p className="eyebrow">Specific services</p><div className="accordion-list">{serviceFaqs.map((faq) => <details key={`${faq.service}-${faq.question}`}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p className="faq-tag">{faq.service}</p><p>{faq.answer}</p></details>)}</div></div></div></div></section><section className="section"><div className="container"><Callout title="A care assessment turns general answers into a clear plan">We’ll explain the appropriate role, tasks, schedule, checks, quotation and next steps for your situation.</Callout></div></section></main></SiteShell>
  );
}

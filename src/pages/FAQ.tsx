import { siteContent } from "@/content/siteContent"
import { FAQAccordion, PageHeader } from "@/components/sections/Sections"
import { trackEvent } from "@/lib/analytics/events"
import { usePageMeta } from "@/lib/seo/metadata"

export default function FAQ() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | FAQ`,
    description: "Clear answers to the most common questions about Homeown.",
    url: `${siteContent.seo.baseUrl}/faq`,
  })

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <PageHeader title={siteContent.faq.title} subtitle="Straight answers and clear boundaries." />
      <div className="section-pad">
        <div className="mx-auto w-full max-w-4xl px-6">
          <FAQAccordion
            items={siteContent.faq.items}
            onToggle={(id) => trackEvent("faq_expand", { id })}
          />
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

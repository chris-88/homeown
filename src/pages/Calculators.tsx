import { siteContent } from "@/content/siteContent"
import { PageHeader } from "@/components/sections/Sections"
import { trackEvent } from "@/lib/analytics/events"
import { usePageMeta } from "@/lib/seo/metadata"

export default function Calculators() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Calculators`,
    description: siteContent.calculators.subtitle,
    url: `${siteContent.seo.baseUrl}/calculators`,
  })

  return (
    <>
      <PageHeader title={siteContent.calculators.title} subtitle={siteContent.calculators.subtitle} />
      <div className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-3">
          {siteContent.calculators.cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-border bg-white/80 p-6 transition hover:-translate-y-1 hover:border-primary/40"
              onClick={() => trackEvent("calculator_click", { label: card.title })}
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Open calculator
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

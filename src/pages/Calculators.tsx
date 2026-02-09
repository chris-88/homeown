import { siteContent } from "@/content/siteContent"
import { trackEvent } from "@/lib/analytics/events"
import { usePageMeta } from "@/lib/seo/metadata"
import { PageHeader } from "@/components/blocks/PageHeader"
import { CalculatorGrid } from "@/components/blocks/CalculatorGrid"

export default function Calculators() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Calculators`,
    description: siteContent.calculators.subtitle,
    url: `${siteContent.seo.baseUrl}/calculators`,
  })

  return (
    <>
      <PageHeader title={siteContent.calculators.title} subtitle={siteContent.calculators.subtitle} />
      <CalculatorGrid
        cards={siteContent.calculators.cards}
        onClick={(label) => trackEvent("calculator_click", { label })}
      />
    </>
  )
}

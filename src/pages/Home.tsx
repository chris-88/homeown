import { siteContent } from "@/content/siteContent"
import { trackEvent } from "@/lib/analytics/events"
import { usePageMeta } from "@/lib/seo/metadata"
import { HeroBlock } from "@/components/blocks/HeroBlock"
import { WhoItsFor } from "@/components/blocks/WhoItsFor"
import { StepTimeline } from "@/components/blocks/StepTimeline"
import { SplitPanel } from "@/components/blocks/SplitPanel"
import { OutcomeCompare } from "@/components/blocks/OutcomeCompare"
import { CTABand } from "@/components/blocks/CTABand"

export default function Home() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Home`,
    description: siteContent.seo.baseDescription,
    url: `${siteContent.seo.baseUrl}/`,
  })

  return (
    <>
      <HeroBlock
        title={siteContent.hero.title}
        subtitle={siteContent.hero.subtitle}
        primaryCta={siteContent.hero.primaryCta}
        secondaryCta={siteContent.hero.secondaryCta}
        disclaimer={siteContent.hero.disclaimer}
        onPrimaryClick={() => trackEvent("cta_click", { location: "hero", label: "calculator" })}
        onSecondaryClick={() => trackEvent("cta_click", { location: "hero", label: "register" })}
      />
      <WhoItsFor title={siteContent.whoItsFor.title} cards={siteContent.whoItsFor.cards} />
      <StepTimeline steps={siteContent.howItWorksSteps.slice(0, 4)} />
      <SplitPanel left={siteContent.whatItIs} right={siteContent.whatItIsNot} />
      <OutcomeCompare
        title={siteContent.mqmPpa.title}
        body={siteContent.mqmPpa.body}
        points={["MQM is a monthly marker", "PPA applies only at completion", "No accumulation language"]}
        showDefinitions
        variant="chips"
      />
      <OutcomeCompare
        title={siteContent.trust.title}
        body={siteContent.trust.body}
        points={siteContent.trust.points}
        showDefinitions={false}
        variant="cards"
      />
      <CTABand
        title="Ready to see where you stand?"
        body="Use the calculators to understand your current position."
        ctas={[
          {
            label: "Go to calculators",
            href: "/calculators",
            variant: "outline",
            onClick: () => trackEvent("cta_click", { location: "cta_band", label: "calculators" }),
          },
        ]}
      />
    </>
  )
}

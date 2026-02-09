import { siteContent } from "@/content/siteContent"
import { trackEvent } from "@/lib/analytics/events"
import {
  CardGrid,
  CTASection,
  Hero,
  HighlightBand,
  SplitPanel,
  Stepper,
} from "@/components/sections/Sections"
import { usePageMeta } from "@/lib/seo/metadata"

export default function Home() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Home`,
    description: siteContent.seo.baseDescription,
    url: `${siteContent.seo.baseUrl}/`,
  })

  return (
    <>
      <Hero
        title={siteContent.hero.title}
        subtitle={siteContent.hero.subtitle}
        primaryCta={siteContent.hero.primaryCta}
        secondaryCta={siteContent.hero.secondaryCta}
        onPrimaryClick={() => trackEvent("cta_click", { location: "hero", label: "calculator" })}
        onSecondaryClick={() => trackEvent("cta_click", { location: "hero", label: "register" })}
      />
      <CardGrid title={siteContent.whoItsFor.title} cards={siteContent.whoItsFor.cards} />
      <Stepper steps={siteContent.howItWorksSteps.slice(0, 4)} />
      <SplitPanel left={siteContent.whatItIs} right={siteContent.whatItIsNot} />
      <HighlightBand
        title={siteContent.mqmPpa.title}
        body={siteContent.mqmPpa.body}
        points={["MQM is a monthly marker", "PPA applies only at completion", "No accumulation language"]}
      />
      <HighlightBand
        title={siteContent.trust.title}
        body={siteContent.trust.body}
        points={siteContent.trust.points}
      />
      <CTASection
        title="Ready to see where you stand?"
        body="Use the calculators or register interest. Calm, clear next steps."
        ctas={[
          {
            label: "Go to calculators",
            href: "/calculators",
            onClick: () => trackEvent("cta_click", { location: "cta_band", label: "calculators" }),
          },
          {
            label: "Register interest",
            href: "/register",
            variant: "outline",
            onClick: () => trackEvent("cta_click", { location: "cta_band", label: "register" }),
          },
        ]}
      />
    </>
  )
}

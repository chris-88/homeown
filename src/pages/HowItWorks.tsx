import { siteContent } from "@/content/siteContent"
import { usePageMeta } from "@/lib/seo/metadata"
import { PageHeader } from "@/components/blocks/PageHeader"
import { StepTimeline } from "@/components/blocks/StepTimeline"

export default function HowItWorks() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | How It Works`,
    description:
      "A clear end-to-end pathway: discover affordability, occupy under licence, and complete via a regulated mortgage.",
    url: `${siteContent.seo.baseUrl}/how-it-works`,
  })

  return (
    <>
      <PageHeader
        title="How it works"
        subtitle="A calm, step-by-step explanation of the pathway from discovery to completion."
      />
      <StepTimeline steps={siteContent.howItWorksSteps} />
    </>
  )
}

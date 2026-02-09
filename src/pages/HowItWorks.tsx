import { siteContent } from "@/content/siteContent"
import { PageHeader, Timeline } from "@/components/sections/Sections"
import { usePageMeta } from "@/lib/seo/metadata"

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
      <div className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Timeline steps={siteContent.howItWorksSteps} />
        </div>
      </div>
    </>
  )
}

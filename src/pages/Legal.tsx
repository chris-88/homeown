import { siteContent } from "@/content/siteContent"
import { usePageMeta } from "@/lib/seo/metadata"
import { PageHeader } from "@/components/blocks/PageHeader"
import { LegalSections } from "@/components/blocks/LegalSections"

export default function Legal() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Legal`,
    description: "Privacy policy, terms, and key disclosures for Homeown.",
    url: `${siteContent.seo.baseUrl}/legal`,
  })

  return (
    <>
      <PageHeader title={siteContent.legal.title} subtitle="Plain-language disclosures and policies." />
      <LegalSections sections={siteContent.legal.sections} />
    </>
  )
}

import { siteContent } from "@/content/siteContent"
import { PageHeader } from "@/components/sections/Sections"
import { usePageMeta } from "@/lib/seo/metadata"

export default function Legal() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Legal`,
    description: "Privacy policy, terms, and key disclosures for Homeown.",
    url: `${siteContent.seo.baseUrl}/legal`,
  })

  return (
    <>
      <PageHeader title={siteContent.legal.title} subtitle="Plain-language disclosures and policies." />
      <div className="section-pad">
        <div className="mx-auto w-full max-w-4xl space-y-6 px-6">
          {siteContent.legal.sections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-border bg-white/80 p-6">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

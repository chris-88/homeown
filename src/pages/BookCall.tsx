import { siteContent } from "@/content/siteContent"
import { PageHeader } from "@/components/sections/Sections"
import { trackEvent } from "@/lib/analytics/events"
import { usePageMeta } from "@/lib/seo/metadata"

export default function BookCall() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Book a Call`,
    description: siteContent.bookCall.subtitle,
    url: `${siteContent.seo.baseUrl}/book-call`,
  })

  return (
    <>
      <PageHeader title={siteContent.bookCall.title} subtitle={siteContent.bookCall.subtitle} />
      <div className="section-pad">
        <div className="mx-auto w-full max-w-3xl px-6">
          <div className="rounded-3xl border border-border bg-white/80 p-8">
            <p className="text-sm text-muted-foreground">{siteContent.bookCall.note}</p>
            <a
              href={siteContent.bookCall.href}
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              onClick={() => trackEvent("cta_click", { location: "book_call", label: "schedule" })}
            >
              Open scheduling
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

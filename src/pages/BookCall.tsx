import { siteContent } from "@/content/siteContent"
import { usePageMeta } from "@/lib/seo/metadata"
import { PageHeader } from "@/components/blocks/PageHeader"
import { BookCallBlock } from "@/components/blocks/BookCallBlock"

export default function BookCall() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Book a Call`,
    description: siteContent.bookCall.subtitle,
    url: `${siteContent.seo.baseUrl}/book-call`,
  })

  return (
    <>
      <PageHeader title={siteContent.bookCall.title} subtitle={siteContent.bookCall.subtitle} />
      <BookCallBlock href={siteContent.bookCall.href} note={siteContent.bookCall.note} />
    </>
  )
}

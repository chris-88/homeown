import { siteContent } from "@/content/siteContent"
import { usePageMeta } from "@/lib/seo/metadata"
import { PageHeader } from "@/components/blocks/PageHeader"
import { RegisterForm } from "@/components/blocks/RegisterForm"

export default function Register() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Register Interest`,
    description: "Register interest in the Homeown pathway with a short, clear form.",
    url: `${siteContent.seo.baseUrl}/register`,
  })

  return (
    <>
      <PageHeader title={siteContent.register.title} subtitle={siteContent.register.subtitle} />
      <section className="section-pad bg-green text-cream">
        <div className="mx-auto w-full max-w-2xl px-6">
          <div className="surface p-6 md:p-8">
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  )
}

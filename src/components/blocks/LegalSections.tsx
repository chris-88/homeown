import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function LegalSections({
  sections,
}: {
  sections: { title: string; body: string }[]
}) {
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-4xl space-y-6 px-6">
        <div className="surface p-6 md:p-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.body}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

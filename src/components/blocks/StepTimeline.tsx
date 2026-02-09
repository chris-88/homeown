import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function StepTimeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
        <div className="surface mt-8 space-y-6 p-6 md:p-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-12 bg-cream-7 text-sm font-semibold text-cream">
                  {index + 1}
                </div>
                {index < steps.length - 1 && <div className="mt-2 h-full w-px bg-cream-10" />}
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.body}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

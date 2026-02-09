import { Check } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function SplitPanel({
  left,
  right,
}: {
  left: { title: string; items: string[] }
  right: { title: string; items: string[] }
}) {
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="surface p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {[left, right].map((panel) => (
              <Card key={panel.title}>
                <CardHeader>
                  <CardTitle>{panel.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <ul className="space-y-3 text-base leading-7 text-cream-70 md:text-lg">
                    {panel.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 text-cream" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

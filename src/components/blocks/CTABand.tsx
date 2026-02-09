import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CTABand({
  title,
  body,
  ctas,
}: {
  title: string
  body: string
  ctas: { label: string; href: string; variant?: "default" | "outline"; onClick?: () => void }[]
}) {
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="surface p-6 md:p-8">
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-7 text-cream-80 md:text-lg max-w-[65ch]">{body}</p>
              <div className="flex flex-wrap gap-3">
                {ctas.map((cta) => (
                  <Button
                    key={cta.label}
                    asChild
                    variant={cta.variant ?? "default"}
                    className={cta.variant === "outline" ? "rounded-full border-cream-12 text-cream" : "rounded-full"}
                  >
                    <Link to={cta.href} onClick={cta.onClick}>
                      {cta.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DisclosureAlert } from "@/components/blocks/DisclosureAlert"

export function HeroBlock({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  disclaimer,
  onPrimaryClick,
  onSecondaryClick,
}: {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  disclaimer: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}) {
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface space-y-6 p-6 md:p-8">
            <Badge>Homeown</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="text-base leading-7 text-cream-80 md:text-lg max-w-[65ch]">{subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to={primaryCta.href} onClick={onPrimaryClick}>
                  {primaryCta.label}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-cream-12 text-cream">
                <Link to={secondaryCta.href} onClick={onSecondaryClick}>
                  {secondaryCta.label}
                </Link>
              </Button>
            </div>
            <DisclosureAlert title="Disclosure" description={disclaimer} />
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <Badge variant="outline">Structured pathway</Badge>
                <CardTitle>A structured pathway</CardTitle>
                <CardDescription>
                  Clear eligibility steps, licence to occupy, and regulated mortgage completion.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Clear eligibility steps", "Licence to occupy", "Regulated mortgage completion"].map(
                  (item) => (
                    <div key={item} className="flex items-start gap-3 text-cream">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cream" />
                      <span className="text-base leading-7 md:text-lg">{item}</span>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="outline">Eligibility</Badge>
                <CardTitle>Eligibility steps</CardTitle>
                <CardDescription>We confirm the pathway fits your situation and the chosen home.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Education-first affordability check", "Property criteria confirmation", "Licence to occupy terms"].map(
                  (item) => (
                    <div key={item} className="flex items-start gap-3 text-cream">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cream" />
                      <span className="text-base leading-7 md:text-lg">{item}</span>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="outline">Disclosure</Badge>
                <CardTitle>Clear boundaries</CardTitle>
              </CardHeader>
              <CardContent>
                <DisclosureAlert title="Disclosure" description={disclaimer} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

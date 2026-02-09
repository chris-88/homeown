import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>{children}</div>
}

export function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <section className={cn("section-pad", className)}>{children}</section>
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
  disclaimer,
}: {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  disclaimer: string
}) {
  return (
    <Section className="bg-green pt-24 text-cream">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-cream/70">Homeown</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-base leading-7 text-cream/80 md:text-lg max-w-[65ch]">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to={primaryCta.href} onClick={onPrimaryClick}>
                {primaryCta.label}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-cream/50 text-cream hover:opacity-80"
            >
              <Link to={secondaryCta.href} onClick={onSecondaryClick}>
                {secondaryCta.label}
              </Link>
            </Button>
          </div>
          <p className="text-sm text-cream/70 max-w-[65ch]">{disclaimer}</p>
        </div>
        <div className="card-structural border border-green-30 bg-secondary p-6 md:p-8">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-cream/70">
              A structured pathway
            </p>
            <div className="space-y-4">
              {["Clear eligibility steps", "Licence to occupy", "Regulated mortgage completion"].map(
                (item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-green" />
                    <p className="text-base text-cream">{item}</p>
                  </div>
                ),
              )}
            </div>
            <div className="rounded-2xl border border-green-30 bg-secondary p-4">
              <p className="text-sm text-cream/70">
                Homeown is not a loan, tenancy, or savings product. No ownership exists until completion.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function CardGrid({
  title,
  cards,
}: {
  title: string
  cards: { title: string; body: string }[]
}) {
  return (
    <Section className="bg-secondary">
      <Container>
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-semibold text-cream md:text-3xl">{title}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <div key={card.title} className="card-structural p-6">
                <h3 className="text-xl font-semibold text-cream">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-cream/70 md:text-lg">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function Stepper({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <Section className="bg-green text-cream">
      <Container>
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-green-30 bg-secondary p-6 text-cream">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green text-sm font-semibold text-cream">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-cream/70 md:text-lg">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function SplitPanel({
  left,
  right,
}: {
  left: { title: string; items: string[] }
  right: { title: string; items: string[] }
}) {
  return (
    <Section className="bg-secondary">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {[left, right].map((panel) => (
            <div key={panel.title} className="rounded-3xl border border-green-30 bg-secondary p-8">
              <h3 className="text-2xl font-semibold text-cream">{panel.title}</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-cream/70 md:text-lg">
                {panel.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function CTASection({
  title,
  body,
  ctas,
}: {
  title: string
  body: string
  ctas: {
    label: string
    href: string
    variant?: "default" | "outline"
    onClick?: () => void
  }[]
}) {
  return (
    <Section className="bg-green text-cream">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-green-30 bg-green p-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-base leading-7 text-cream/80 max-w-[65ch] md:text-lg">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                asChild
                variant={cta.variant ?? "default"}
                className={cn(
                  "rounded-full",
                  cta.variant === "outline" && "border-cream/50 text-cream hover:opacity-80",
                )}
              >
                <Link to={cta.href} onClick={cta.onClick}>
                  {cta.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function HighlightBand({ title, body, points }: { title: string; body: string; points: string[] }) {
  return (
    <Section className="bg-green text-cream">
      <Container>
        <div className="grid gap-6 rounded-3xl border border-green-30 bg-green p-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-base leading-7 text-cream/80 max-w-[65ch] md:text-lg">{body}</p>
          </div>
          <div className="space-y-3">
            {points.map((point) => (
              <div key={point} className="rounded-2xl border border-green-30 bg-secondary px-4 py-3 text-cream">
                <p className="text-sm font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export type FaqItem = { id: string; question: string; answer: string }

export function FAQAccordion({
  items,
  onToggle,
}: {
  items: FaqItem[]
  onToggle?: (id: string) => void
}) {
  const [openId, setOpenId] = useState<string | null>(null)
  const ids = useMemo(() => new Set(items.map((item) => item.id)), [items])

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash && ids.has(hash)) {
      setOpenId(hash)
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [ids])

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} id={item.id} className="rounded-2xl border border-green-30 bg-secondary">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => {
                setOpenId(isOpen ? null : item.id)
                window.history.replaceState(null, "", `#${item.id}`)
                onToggle?.(item.id)
              }}
            >
              <span className="text-base font-semibold text-cream">{item.question}</span>
              <span className="text-lg text-cream/70">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-base leading-7 text-cream/70 md:text-lg">
                {item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function Timeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={step.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 rounded-full border border-green-30 bg-secondary text-sm font-semibold text-cream flex items-center justify-center">
              {index + 1}
            </div>
            {index < steps.length - 1 && <div className="mt-2 h-full w-px bg-green/30" />}
          </div>
          <div className="rounded-2xl border border-green-30 bg-secondary p-5">
            <h4 className="text-lg font-semibold text-cream">{step.title}</h4>
            <p className="mt-2 text-base leading-7 text-cream/70 md:text-lg">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Section className="bg-green pt-20 text-cream">
      <Container>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="text-base leading-7 text-cream/80 max-w-[65ch] md:text-lg">{subtitle}</p>
        </div>
      </Container>
    </Section>
  )
}

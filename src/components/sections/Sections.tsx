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
}: {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}) {
  return (
    <Section className="pt-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Homeown</p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to={primaryCta.href} onClick={onPrimaryClick}>
                {primaryCta.label}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to={secondaryCta.href} onClick={onSecondaryClick}>
                {secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
        <div className="glass-card rounded-3xl border border-white/60 p-6 md:p-8">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              A structured pathway
            </p>
            <div className="space-y-4">
              {["Clear eligibility steps", "Licence to occupy", "Regulated mortgage completion"].map(
                (item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-base text-foreground">{item}</p>
                  </div>
                ),
              )}
            </div>
            <div className="rounded-2xl border border-border bg-white/60 p-4">
              <p className="text-sm text-muted-foreground">
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
    <Section>
      <Container>
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <div key={card.title} className="glass-card rounded-2xl border border-border p-6">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
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
    <Section className="bg-white/60">
      <Container>
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-border bg-white/80 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{step.body}</p>
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
    <Section>
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {[left, right].map((panel) => (
            <div key={panel.title} className="rounded-3xl border border-border bg-white/80 p-8">
              <h3 className="text-2xl font-semibold">{panel.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {panel.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
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
    <Section className="bg-secondary/60">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-white/70 p-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                asChild
                variant={cta.variant ?? "default"}
                className="rounded-full"
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
    <Section>
      <Container>
        <div className="grid gap-6 rounded-3xl border border-border bg-white/80 p-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{body}</p>
          </div>
          <div className="space-y-3">
            {points.map((point) => (
              <div key={point} className="rounded-2xl border border-border bg-white/70 px-4 py-3">
                <p className="text-sm font-medium text-foreground">{point}</p>
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
          <div key={item.id} id={item.id} className="rounded-2xl border border-border bg-white/80">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => {
                setOpenId(isOpen ? null : item.id)
                window.history.replaceState(null, "", `#${item.id}`)
                onToggle?.(item.id)
              }}
            >
              <span className="text-base font-semibold">{item.question}</span>
              <span className="text-lg text-muted-foreground">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <div className="px-6 pb-6 text-sm text-muted-foreground">{item.answer}</div>}
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
            <div className="h-10 w-10 rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary flex items-center justify-center">
              {index + 1}
            </div>
            {index < steps.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
          </div>
          <div className="rounded-2xl border border-border bg-white/80 p-5">
            <h4 className="text-lg font-semibold">{step.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Section className="pt-20">
      <Container>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="text-base text-muted-foreground">{subtitle}</p>
        </div>
      </Container>
    </Section>
  )
}

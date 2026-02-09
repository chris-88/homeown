import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function CalculatorGrid({
  cards,
  onClick,
}: {
  cards: { title: string; body: string; href: string }[]
  onClick?: (label: string) => void
}) {
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="surface p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <a key={card.title} href={card.href} onClick={() => onClick?.(card.title)}>
                <Card>
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.body}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream">Open calculator</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Home, ShieldCheck, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function WhoItsFor({ title, cards }: { title: string; cards: { title: string; body: string }[] }) {
  const icons = [Users, Home, ShieldCheck]
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="surface p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <Separator className="my-6" />
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, index) => {
              const Icon = icons[index % icons.length]
              return (
                <Card key={card.title}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-cream" />
                      <Badge variant="outline">Who it fits</Badge>
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.body}</CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

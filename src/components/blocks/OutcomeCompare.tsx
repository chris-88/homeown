import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip } from "@/components/ui/tooltip"

export function OutcomeCompare({
  title,
  body,
  points,
  showDefinitions = false,
  variant = "cards",
}: {
  title: string
  body: string
  points: string[]
  showDefinitions?: boolean
  variant?: "cards" | "chips"
}) {
  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="surface p-6 md:p-8">
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                {body}
                {showDefinitions && (
                  <>
                    {" "}
                    <Tooltip content="MQM is a monthly good-standing marker, not money.">MQM</Tooltip>{" "}
                    and{" "}
                    <Tooltip content="PPA applies only at completion via a regulated mortgage.">PPA</Tooltip>{" "}
                    are definitions of state, not balances.
                  </>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {variant === "chips" ? (
                <div className="flex flex-wrap gap-2">
                  {points.map((point) => (
                    <Badge key={point} variant="outline">
                      {point}
                    </Badge>
                  ))}
                </div>
              ) : (
                <div className="grid gap-3 md:grid-cols-3">
                  {points.map((point) => (
                    <Card key={point}>
                      <CardContent>
                        <p className="text-sm font-medium text-cream">{point}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

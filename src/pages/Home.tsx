import { Link } from "react-router-dom"
import { Home as HomeIcon, ShieldCheck, Users } from "lucide-react"

import { siteContent } from "@/content/siteContent"
import { trackEvent } from "@/lib/analytics/events"
import { usePageMeta } from "@/lib/seo/metadata"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PageShell } from "@/components/blocks/PageShell"
import { Panel, PanelActions, PanelRow } from "@/components/blocks/Panel"

export default function Home() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Home`,
    description: siteContent.seo.baseDescription,
    url: `${siteContent.seo.baseUrl}/`,
  })

  return (
    <PageShell>
      <Panel
        eyebrow="HOMEOWN"
        title={siteContent.hero.title}
        description={siteContent.hero.subtitle}
        footer={
          <PanelActions
            primary={
              <Button asChild className="rounded-full" size="lg">
                <Link
                  to={siteContent.hero.primaryCta.href}
                  onClick={() => trackEvent("cta_click", { location: "panel_intro", label: "calculator" })}
                >
                  {siteContent.hero.primaryCta.label}
                </Link>
              </Button>
            }
            secondary={
              <Button asChild variant="outline" className="rounded-full border-cream-12 text-cream" size="lg">
                <Link
                  to={siteContent.hero.secondaryCta.href}
                  onClick={() => trackEvent("cta_click", { location: "panel_intro", label: "register" })}
                >
                  {siteContent.hero.secondaryCta.label}
                </Link>
              </Button>
            }
          />
        }
      >
        <Alert>
          <AlertTitle>Disclosure</AlertTitle>
          <AlertDescription>{siteContent.hero.disclaimer}</AlertDescription>
        </Alert>
      </Panel>

      <Panel
        title="Who this is for"
        description="Qualification-first, calm and precise."
      >
        <div className="space-y-5">
          <PanelRow
            icon={<Users className="h-4 w-4" />}
            title={siteContent.whoItsFor.cards[0].title}
            description={siteContent.whoItsFor.cards[0].body}
          />
          <PanelRow
            icon={<HomeIcon className="h-4 w-4" />}
            title={siteContent.whoItsFor.cards[1].title}
            description={siteContent.whoItsFor.cards[1].body}
          />
          <PanelRow
            icon={<ShieldCheck className="h-4 w-4" />}
            title={siteContent.whoItsFor.cards[2].title}
            description={siteContent.whoItsFor.cards[2].body}
          />
        </div>
      </Panel>

      <Panel title="How it works" description="A step-by-step pathway, structured like a tool.">
        <div className="space-y-5">
          {siteContent.howItWorksSteps.map((step, index) => (
            <PanelRow
              key={step.title}
              icon={<Badge variant="outline">{index + 1}</Badge>}
              title={step.title}
              description={step.body}
            />
          ))}
        </div>
      </Panel>

      <Panel title="What it is / what it isn't">
        <div className="space-y-4">
          <div className="space-y-3">
            <p className="text-xs text-cream-55">What it is</p>
            {siteContent.whatItIs.items.map((item) => (
              <PanelRow key={item} title={item} />
            ))}
          </div>
          <Separator />
          <div className="space-y-3">
            <p className="text-xs text-cream-55">What it isn't</p>
            {siteContent.whatItIsNot.items.map((item) => (
              <PanelRow key={item} title={item} />
            ))}
          </div>
        </div>
      </Panel>

      <Panel
        title={siteContent.mqmPpa.title}
        description={siteContent.mqmPpa.body}
        dense
      >
        <div className="flex flex-wrap gap-2">
          {["MQM is a monthly marker", "PPA applies only at completion", "No accumulation language"].map((chip) => (
            <Badge key={chip} variant="outline">
              {chip}
            </Badge>
          ))}
        </div>
      </Panel>

      <Panel
        title={siteContent.trust.title}
        description={siteContent.trust.body}
      >
        <div className="space-y-4">
          {siteContent.trust.points.map((point) => (
            <PanelRow key={point} title={point} />
          ))}
        </div>
      </Panel>

      <Panel
        title="Ready to see where you stand?"
        description="Use the calculators to understand your current position."
        footer={
          <PanelActions
            primary={
              <Button asChild className="rounded-full" size="lg">
                <Link
                  to="/calculators"
                  onClick={() => trackEvent("cta_click", { location: "panel_next", label: "calculators" })}
                >
                  Go to calculators
                </Link>
              </Button>
            }
            secondary={
              <Button asChild variant="outline" className="rounded-full border-cream-12 text-cream" size="lg">
                <Link
                  to="/register"
                  onClick={() => trackEvent("cta_click", { location: "panel_next", label: "register" })}
                >
                  Register interest
                </Link>
              </Button>
            }
          />
        }
      />
    </PageShell>
  )
}

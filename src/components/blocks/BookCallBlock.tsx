import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DisclosureAlert } from "@/components/blocks/DisclosureAlert"

export function BookCallBlock({
  href,
  note,
}: {
  href: string
  note: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <section className="section-pad bg-green text-cream">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="surface p-6 md:p-8">
          <Card>
            <CardHeader>
              <CardTitle>Book a call</CardTitle>
              <CardDescription>{note}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <DisclosureAlert
                title="Before you book"
                description="Homeown is a service pathway, not a loan or tenancy. Calls are informational only."
              />
              <Button className="rounded-full" onClick={() => setOpen(true)}>
                Open scheduling
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pre-booking disclosure</DialogTitle>
            <DialogDescription>
              You are booking an informational call about a service pathway that may end in a regulated mortgage
              purchase. No mortgage guarantee is provided.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" className="rounded-full border-cream-12 text-cream" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              className="rounded-full"
              onClick={() => {
                window.location.href = href
                toast.success("Opening scheduling")
              }}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

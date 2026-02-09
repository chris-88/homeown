import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { submitLead } from "@/lib/forms/submit"
import { trackEvent } from "@/lib/analytics/events"

export type RegisterFormValues = {
  name: string
  email: string
  phone?: string
  area?: string
  timeframe?: string
  blocker?: string
  consent: boolean
}

export function RegisterForm() {
  const [submitting, setSubmitting] = useState(false)
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      area: "",
      timeframe: "",
      blocker: "",
      consent: false,
    },
  })

  const onSubmit = async (values: RegisterFormValues) => {
    setSubmitting(true)
    const result = await submitLead({
      name: values.name,
      email: values.email,
      phone: values.phone || undefined,
      area: values.area || undefined,
      timeframe: values.timeframe || undefined,
      blocker: values.blocker || undefined,
    })
    setSubmitting(false)

    if (result.ok) {
      toast.success("Thanks. We will be in touch shortly.")
      form.reset()
      trackEvent("form_submit", { form: "register_interest" })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register interest</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, () =>
              trackEvent("form_error", { form: "register_interest" }),
            )}
            className="space-y-5"
            onFocus={() => trackEvent("form_start", { form: "register_interest" })}
          >
            <FormField
              name="name"
              rules={{ required: "Name is required." }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Full name</FormLabel>
                  <FormControl>
                    <Input id="name" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              rules={{
                required: "Email is required.",
                pattern: { value: /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/, message: "Enter a valid email." },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input id="email" type="email" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phone">Phone (optional)</FormLabel>
                  <FormControl>
                    <Input id="phone" type="tel" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="area">Area (optional)</FormLabel>
                  <FormControl>
                    <Input id="area" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="timeframe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="timeframe">Timeframe (optional)</FormLabel>
                  <FormControl>
                    <Select id="timeframe" {...field}>
                      <option value="">Select a timeframe</option>
                      <option value="0-6">0-6 months</option>
                      <option value="6-12">6-12 months</option>
                      <option value="12-24">12-24 months</option>
                      <option value="24+">24+ months</option>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="blocker"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="blocker">Biggest blocker (optional)</FormLabel>
                  <FormControl>
                    <Select id="blocker" {...field}>
                      <option value="">Select an option</option>
                      <option value="deposit">Deposit readiness</option>
                      <option value="income">Income documentation</option>
                      <option value="timeline">Timeline uncertainty</option>
                      <option value="property">Finding a suitable home</option>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="consent"
              rules={{ required: "Consent is required." }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start gap-3">
                    <FormControl>
                      <Checkbox id="consent" {...field} />
                    </FormControl>
                    <FormLabel htmlFor="consent">
                      I agree to be contacted and accept the privacy policy. See legal.
                    </FormLabel>
                  </div>
                  <FormMessage>{form.formState.errors.consent?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="rounded-full" disabled={submitting}>
              {submitting ? "Submitting..." : "Register interest"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

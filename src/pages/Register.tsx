import { useMemo, useState } from "react"
import { siteContent } from "@/content/siteContent"
import { PageHeader } from "@/components/sections/Sections"
import { trackEvent } from "@/lib/analytics/events"
import { submitLead } from "@/lib/forms/submit"
import { usePageMeta } from "@/lib/seo/metadata"

const initialState = {
  name: "",
  email: "",
  phone: "",
  area: "",
  timeframe: "",
  blocker: "",
  consent: false,
}

export default function Register() {
  usePageMeta({
    title: `${siteContent.seo.baseTitle} | Register Interest`,
    description: "Register interest in the Homeown pathway with a short, clear form.",
    url: `${siteContent.seo.baseUrl}/register`,
  })

  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [started, setStarted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onStart = () => {
    if (!started) {
      setStarted(true)
      trackEvent("form_start", { form: "register_interest" })
    }
  }

  const validate = useMemo(() => {
    const nextErrors: Record<string, string> = {}
    if (!form.name.trim()) nextErrors.name = "Name is required."
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email."
    }
    if (!form.consent) nextErrors.consent = "Consent is required."
    return nextErrors
  }, [form])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      trackEvent("form_error", { form: "register_interest" })
      return
    }

    setIsSubmitting(true)
    const result = await submitLead({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      area: form.area || undefined,
      timeframe: form.timeframe || undefined,
      blocker: form.blocker || undefined,
    })
    setIsSubmitting(false)

    if (result.ok) {
      setSubmitted(true)
      trackEvent("form_submit", { form: "register_interest" })
      setForm(initialState)
    }
  }

  return (
    <>
      <PageHeader title={siteContent.register.title} subtitle={siteContent.register.subtitle} />
      <div className="section-pad">
        <div className="mx-auto w-full max-w-2xl px-6">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-border bg-white/80 p-8">
            <div className="grid gap-4">
              <label className="text-sm font-medium">
                Full name
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  onFocus={onStart}
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm"
                  placeholder="Jane Murphy"
                />
                {errors.name && <span className="mt-2 block text-xs text-destructive">{errors.name}</span>}
              </label>
              <label className="text-sm font-medium">
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  onFocus={onStart}
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm"
                  placeholder="you@email.com"
                />
                {errors.email && <span className="mt-2 block text-xs text-destructive">{errors.email}</span>}
              </label>
              <label className="text-sm font-medium">
                Phone (optional)
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  onFocus={onStart}
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm"
                  placeholder="08X XXX XXXX"
                />
              </label>
              <label className="text-sm font-medium">
                Area (optional)
                <input
                  type="text"
                  value={form.area}
                  onChange={(event) => setForm({ ...form, area: event.target.value })}
                  onFocus={onStart}
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm"
                  placeholder="Dublin 8"
                />
              </label>
              <label className="text-sm font-medium">
                Timeframe (optional)
                <select
                  value={form.timeframe}
                  onChange={(event) => setForm({ ...form, timeframe: event.target.value })}
                  onFocus={onStart}
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm"
                >
                  <option value="">Select a timeframe</option>
                  <option value="0-6">0-6 months</option>
                  <option value="6-12">6-12 months</option>
                  <option value="12-24">12-24 months</option>
                  <option value="24+">24+ months</option>
                </select>
              </label>
              <label className="text-sm font-medium">
                Biggest blocker (optional)
                <select
                  value={form.blocker}
                  onChange={(event) => setForm({ ...form, blocker: event.target.value })}
                  onFocus={onStart}
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="deposit">Deposit readiness</option>
                  <option value="income">Income documentation</option>
                  <option value="timeline">Timeline uncertainty</option>
                  <option value="property">Finding a suitable home</option>
                </select>
              </label>
            </div>

            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) => setForm({ ...form, consent: event.target.checked })}
                onFocus={onStart}
                className="mt-1 h-4 w-4 rounded border-border"
              />
              <span>
                I agree to be contacted and accept the privacy policy. See <a href="/legal">legal</a>.
              </span>
            </label>
            {errors.consent && <span className="block text-xs text-destructive">{errors.consent}</span>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {isSubmitting ? "Submitting..." : "Register interest"}
            </button>

            {submitted && (
              <p className="text-sm text-primary">Thanks. We will be in touch shortly.</p>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export type AnalyticsEventName =
  | "cta_click"
  | "form_start"
  | "form_submit"
  | "form_error"
  | "calculator_click"
  | "faq_expand"

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  // Lightweight default handler. Swap with vendor SDK later.
  // eslint-disable-next-line no-console
  console.info(`[analytics] ${name}`, payload)
}

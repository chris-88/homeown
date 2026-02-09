import { getUtmParams } from "../analytics/utm"

export type LeadFormPayload = {
  name: string
  email: string
  phone?: string
  area?: string
  timeframe?: string
  blocker?: string
}

export async function submitLead(payload: LeadFormPayload) {
  const utm = getUtmParams()
  const submission = { ...payload, utm }

  // Mock submission. Replace with real API call later.
  await new Promise((resolve) => setTimeout(resolve, 450))
  // eslint-disable-next-line no-console
  console.info("[form] submitLead", submission)

  return { ok: true }
}

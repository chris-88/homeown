import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function DisclosureAlert({ title, description }: { title: string; description: string }) {
  return (
    <Alert>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}

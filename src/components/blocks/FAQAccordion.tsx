import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export type FaqItem = { id: string; question: string; answer: string }

export function FAQAccordion({
  items,
  onToggle,
}: {
  items: FaqItem[]
  onToggle?: (id: string) => void
}) {
  const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : ""

  return (
    <Accordion defaultValue={hash}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger
            value={item.id}
            onClick={() => {
              onToggle?.(item.id)
              window.history.replaceState(null, "", `#${item.id}`)
            }}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent value={item.id}>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

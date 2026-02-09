import * as React from "react"

import { cn } from "@/lib/utils"

type AccordionContextValue = {
  openItem: string | null
  setOpenItem: (value: string | null) => void
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

type AccordionProps = {
  type?: "single"
  collapsible?: boolean
  defaultValue?: string
  children: React.ReactNode
}

export function Accordion({ children, defaultValue }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(defaultValue ?? null)
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className="space-y-4">{children}</div>
    </AccordionContext.Provider>
  )
}

type AccordionItemProps = {
  value: string
  children: React.ReactNode
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <div data-value={value} className="card-elevated">
      {children}
    </div>
  )
}

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string
}

export function AccordionTrigger({ value, className, children, ...props }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext)
  if (!context) return null
  const isOpen = context.openItem === value

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-cream",
        className,
      )}
      onClick={() => context.setOpenItem(isOpen ? null : value)}
      {...props}
    >
      <span className="text-base font-semibold">{children}</span>
      <span className="text-lg text-cream-70">{isOpen ? "–" : "+"}</span>
    </button>
  )
}

type AccordionContentProps = {
  value: string
  children: React.ReactNode
}

export function AccordionContent({ value, children }: AccordionContentProps) {
  const context = React.useContext(AccordionContext)
  if (!context) return null
  const isOpen = context.openItem === value

  if (!isOpen) return null

  return <div className="px-6 pb-6 text-base leading-7 text-cream-70 md:text-lg">{children}</div>
}

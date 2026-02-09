import * as React from "react"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"

type DialogContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextValue | undefined>(undefined)

export function Dialog({ open, onOpenChange, children }: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = typeof open === "boolean"
  const currentOpen = isControlled ? open : internalOpen

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next)
    onOpenChange?.(next)
  }

  return (
    <DialogContext.Provider value={{ open: currentOpen, setOpen }}>{children}</DialogContext.Provider>
  )
}

export function DialogTrigger({ children }: { children: React.ReactNode }) {
  const context = React.useContext(DialogContext)
  if (!context) return null

  return (
    <span
      onClick={() => context.setOpen(true)}
      onKeyDown={(event) => event.key === "Enter" && context.setOpen(true)}
      role="button"
      tabIndex={0}
    >
      {children}
    </span>
  )
}

export function DialogContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const context = React.useContext(DialogContext)
  if (!context || !context.open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className={cn("w-full max-w-lg card-elevated p-6", className)}>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-cream">{children}</h3>
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-7 text-cream-70">{children}</p>
}

export function DialogFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 flex flex-wrap gap-3">{children}</div>
}

export function DialogClose({ children }: { children: React.ReactNode }) {
  const context = React.useContext(DialogContext)
  if (!context) return null

  return (
    <span
      onClick={() => context.setOpen(false)}
      onKeyDown={(event) => event.key === "Enter" && context.setOpen(false)}
      role="button"
      tabIndex={0}
    >
      {children}
    </span>
  )
}

import * as React from "react"

type TooltipProps = {
  content: string
  children: React.ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <span className="cursor-help underline decoration-dotted underline-offset-4" title={content}>
      {children}
    </span>
  )
}

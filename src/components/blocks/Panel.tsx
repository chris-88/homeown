import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export function Panel({
  title,
  description,
  eyebrow,
  footer,
  dense = false,
  children,
  className,
}: {
  title?: string
  description?: string
  eyebrow?: string
  footer?: React.ReactNode
  dense?: boolean
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Card className={cn("panel", className)}>
      {(eyebrow || title || description) && (
        <CardHeader className={dense ? "pb-2" : undefined}>
          {eyebrow && <Badge variant="outline">{eyebrow}</Badge>}
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent className={dense ? "pt-0" : undefined}>{children}</CardContent>}
      {footer && (
        <>
          <Separator />
          <CardContent className="pt-4">{footer}</CardContent>
        </>
      )}
    </Card>
  )
}

export function PanelRow({
  icon,
  label,
  title,
  description,
}: {
  icon?: React.ReactNode
  label?: string
  title: string
  description?: string
}) {
  return (
    <div className="flex items-start gap-4">
      {icon && <div className="mt-1 text-cream">{icon}</div>}
      <div className="space-y-1">
        {label && <p className="text-xs text-cream-55">{label}</p>}
        <p className="text-base font-semibold text-cream">{title}</p>
        {description && <p className="text-base leading-7 text-cream-70 md:text-lg">{description}</p>}
      </div>
    </div>
  )
}

export function PanelActions({
  primary,
  secondary,
}: {
  primary: React.ReactNode
  secondary?: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {primary}
      {secondary}
    </div>
  )
}

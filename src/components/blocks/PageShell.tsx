import { cn } from "@/lib/utils"

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("bg-green text-cream", className)}>
      <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-10 md:py-14">{children}</div>
    </div>
  )
}

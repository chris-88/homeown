import { Link, NavLink } from "react-router-dom"
import { siteContent } from "@/content/siteContent"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-transparent">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {siteContent.brand.name}
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            {siteContent.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn("transition hover:text-foreground", isActive && "text-foreground")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button asChild className="rounded-full" size="sm">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border/60 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold">{siteContent.brand.name}</p>
            <p className="text-xs text-muted-foreground">{siteContent.brand.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <Link to="/legal" className="hover:text-foreground">
              Legal & Disclosures
            </Link>
            <span>© {new Date().getFullYear()} Homeown</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

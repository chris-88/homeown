import { Toaster as SonnerToaster } from "sonner"

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        classNames: {
          toast: "bg-cream-7 text-cream border border-cream-12",
          title: "text-cream",
          description: "text-cream-70",
        },
      }}
    />
  )
}

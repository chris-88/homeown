import { useEffect } from "react"

export type PageMeta = {
  title: string
  description: string
  image?: string
  url?: string
}

function setMetaTag(selector: string, attrs: Record<string, string>) {
  let tag = document.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement("meta")
    const key = selector.includes("property=") ? "property" : "name"
    const value = selector.split("=")[1]?.replace(/"/g, "")
    if (value) {
      tag.setAttribute(key, value)
    }
    document.head.appendChild(tag)
  }
  Object.entries(attrs).forEach(([name, value]) => {
    tag?.setAttribute(name, value)
  })
}

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    document.title = meta.title
    setMetaTag('meta[name="description"]', { content: meta.description })
    setMetaTag('meta[property="og:title"]', { content: meta.title })
    setMetaTag('meta[property="og:description"]', { content: meta.description })
    if (meta.url) {
      setMetaTag('meta[property="og:url"]', { content: meta.url })
    }
    if (meta.image) {
      setMetaTag('meta[property="og:image"]', { content: meta.image })
    }
    setMetaTag('meta[name="twitter:card"]', { content: "summary_large_image" })
    setMetaTag('meta[name="twitter:title"]', { content: meta.title })
    setMetaTag('meta[name="twitter:description"]', { content: meta.description })
  }, [meta.description, meta.image, meta.title, meta.url])
}

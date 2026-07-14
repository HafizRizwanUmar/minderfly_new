import { useEffect } from 'react'

/**
 * SEOHead — Dynamically sets <title>, <meta description>, Open Graph,
 * Twitter Card, canonical, and JSON-LD structured data per page.
 *
 * Usage:
 *   <SEOHead
 *     title="Page Title | Minderfly"
 *     description="Meta description here."
 *     canonical="https://minderfly.com/page"
 *     ogImage="https://minderfly.com/og-image.png"
 *     schema={...jsonLdObject}
 *   />
 */
export default function SEOHead({
  title = 'Minderfly — We Build & Scale Startups Worldwide',
  description = 'Turn your startup idea into a real product. Minderfly builds software used in 100+ countries. Desktop apps, mobile apps, web apps, VS Code extensions.',
  canonical = 'https://minderfly.com',
  ogImage = 'https://minderfly.com/og-image.png',
  schema = null,
}) {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────
    document.title = title

    // ── Helper: set or create a <meta> tag ─────────────────────────
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [k, v] = attr.split('=')
        el.setAttribute(k.trim(), v?.replace(/"/g, '').trim() || '')
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    // ── Helper: set or create a <link> tag ─────────────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // ── Standard Meta ──────────────────────────────────────────────
    setMeta('meta[name="description"]', 'name="description"', description)
    setMeta('meta[name="robots"]', 'name="robots"', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setMeta('meta[name="author"]', 'name="author"', 'Minderfly')

    // ── Open Graph ────────────────────────────────────────────────
    setMeta('meta[property="og:title"]', 'property="og:title"', title)
    setMeta('meta[property="og:description"]', 'property="og:description"', description)
    setMeta('meta[property="og:image"]', 'property="og:image"', ogImage)
    setMeta('meta[property="og:url"]', 'property="og:url"', canonical)
    setMeta('meta[property="og:type"]', 'property="og:type"', 'website')
    setMeta('meta[property="og:site_name"]', 'property="og:site_name"', 'Minderfly')
    setMeta('meta[property="og:locale"]', 'property="og:locale"', 'en_US')

    // ── Twitter Card ──────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', 'name="twitter:card"', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title)
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description)
    setMeta('meta[name="twitter:image"]', 'name="twitter:image"', ogImage)
    setMeta('meta[name="twitter:site"]', 'name="twitter:site"', '@minderfly')

    // ── Canonical ─────────────────────────────────────────────────
    setLink('canonical', canonical)

    // ── JSON-LD Structured Data ───────────────────────────────────
    const SCHEMA_ID = 'minderfly-json-ld'
    let scriptEl = document.getElementById(SCHEMA_ID)
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script')
        scriptEl.id = SCHEMA_ID
        scriptEl.type = 'application/ld+json'
        document.head.appendChild(scriptEl)
      }
      scriptEl.textContent = JSON.stringify(schema)
    } else if (scriptEl) {
      scriptEl.remove()
    }

    // ── Cleanup: restore defaults on unmount ──────────────────────
    return () => {
      document.title = 'Minderfly — We Build & Scale Startups Worldwide'
    }
  }, [title, description, canonical, ogImage, schema])

  return null
}

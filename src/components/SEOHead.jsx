import { useEffect } from 'react'

/**
 * SEOHead — Dynamically sets <title>, <meta description>, Open Graph,
 * Twitter Card, canonical, keywords, and JSON-LD structured data per page.
 *
 * Usage:
 *   <SEOHead
 *     title="Page Title | Minderfly"
 *     description="Meta description here."
 *     canonical="https://minderfly.com/page"
 *     ogImage="https://minderfly.com/og-image.png"
 *     ogType="article"                    // optional: 'website' | 'article'
 *     publishedTime="2026-08-20"          // optional: ISO date for articles
 *     keywords="keyword1, keyword2"       // optional: comma-separated keywords
 *     schema={...jsonLdObject}            // single schema OR array of schemas
 *   />
 */
export default function SEOHead({
  title = 'Minderfly — We Build & Scale Startups Worldwide',
  description = 'Turn your startup idea into a real product. Minderfly builds software used in 100+ countries. Desktop apps, mobile apps, web apps, VS Code extensions.',
  canonical = 'https://minderfly.com',
  ogImage = 'https://minderfly.com/og-image.png',
  ogType = 'website',
  publishedTime = null,
  keywords = null,
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

    // ── Helper: remove a <meta> tag ────────────────────────────────
    const removeMeta = (selector) => {
      const el = document.querySelector(selector)
      if (el) el.remove()
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

    // ── Keywords ──────────────────────────────────────────────────
    if (keywords) {
      setMeta('meta[name="keywords"]', 'name="keywords"', keywords)
    } else {
      removeMeta('meta[name="keywords"]')
    }

    // ── Open Graph ────────────────────────────────────────────────
    setMeta('meta[property="og:title"]', 'property="og:title"', title)
    setMeta('meta[property="og:description"]', 'property="og:description"', description)
    setMeta('meta[property="og:image"]', 'property="og:image"', ogImage)
    setMeta('meta[property="og:url"]', 'property="og:url"', canonical)
    setMeta('meta[property="og:type"]', 'property="og:type"', ogType)
    setMeta('meta[property="og:site_name"]', 'property="og:site_name"', 'Minderfly')
    setMeta('meta[property="og:locale"]', 'property="og:locale"', 'en_US')
    setMeta('meta[property="og:image:width"]', 'property="og:image:width"', '1200')
    setMeta('meta[property="og:image:height"]', 'property="og:image:height"', '630')

    // ── Article-specific OG tags ──────────────────────────────────
    if (ogType === 'article' && publishedTime) {
      setMeta('meta[property="article:published_time"]', 'property="article:published_time"', publishedTime)
      setMeta('meta[property="article:author"]', 'property="article:author"', 'https://minderfly.com/our-values/team')
      setMeta('meta[property="article:publisher"]', 'property="article:publisher"', 'https://minderfly.com')
    } else {
      removeMeta('meta[property="article:published_time"]')
      removeMeta('meta[property="article:author"]')
      removeMeta('meta[property="article:publisher"]')
    }

    // ── Twitter Card ──────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', 'name="twitter:card"', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title)
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description)
    setMeta('meta[name="twitter:image"]', 'name="twitter:image"', ogImage)
    setMeta('meta[name="twitter:site"]', 'name="twitter:site"', '@minderfly')
    setMeta('meta[name="twitter:creator"]', 'name="twitter:creator"', '@minderfly')

    // ── Canonical ─────────────────────────────────────────────────
    setLink('canonical', canonical)

    // ── JSON-LD Structured Data (supports single object or array) ──
    // Remove all previously injected schema scripts
    document.querySelectorAll('script[data-minderfly-schema]').forEach(s => s.remove())

    const schemas = schema
      ? (Array.isArray(schema) ? schema : [schema])
      : []

    schemas.forEach((s, i) => {
      const scriptEl = document.createElement('script')
      scriptEl.type = 'application/ld+json'
      scriptEl.setAttribute('data-minderfly-schema', i)
      scriptEl.textContent = JSON.stringify(s)
      document.head.appendChild(scriptEl)
    })

    // ── Cleanup: restore defaults on unmount ──────────────────────
    return () => {
      document.title = 'Minderfly — We Build & Scale Startups Worldwide'
      document.querySelectorAll('script[data-minderfly-schema]').forEach(s => s.remove())
      removeMeta('meta[name="keywords"]')
      removeMeta('meta[property="article:published_time"]')
      removeMeta('meta[property="article:author"]')
      removeMeta('meta[property="article:publisher"]')
    }
  }, [title, description, canonical, ogImage, ogType, publishedTime, keywords, schema])

  return null
}

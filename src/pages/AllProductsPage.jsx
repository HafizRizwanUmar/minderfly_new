import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import cinemaflyLogo from '../assets/product logos/cinemafly.png'
import docsignerLogo from '../assets/product logos/docsigner.png'
import sanadLogo from '../assets/product logos/sanad.png'
import inklessLogo from '../assets/product logos/inkless.png'
import emulatorLogo from '../assets/product logos/Emulator.png'
import lunarLogo from '../assets/product logos/lunar.png'
import minimalLogo from '../assets/product logos/minimal.png'
import pastelLogo from '../assets/product logos/pastel.png'

const CATEGORIES = ['All', 'Desktop Apps', 'Web Apps', 'Extensions', 'Themes']

const PRODUCTS = [
  {
    name: 'Cinemafly',
    img: cinemaflyLogo,
    link: '/products/cinemafly',
    category: 'Desktop Apps',
    platform: 'Windows',
    desc: 'A beautiful Windows desktop app for cinephiles to track, rate and discover films.',
    badge: 'Windows',
  },
  {
    name: 'DocSigner',
    img: docsignerLogo,
    link: '/products/docsigner',
    category: 'Desktop Apps',
    platform: 'Windows',
    desc: 'PKI-based digital signatures for PDFs. Legally valid in 60+ countries.',
    badge: 'Windows',
  },
  {
    name: 'Sanad PDF Editor',
    img: sanadLogo,
    link: '/products/sanad-pdf-editor',
    category: 'Desktop Apps',
    platform: 'Windows',
    desc: 'Full-featured PDF editor at a one-time price. The Acrobat alternative.',
    badge: 'Windows',
  },
  {
    name: 'InklessLMS',
    img: inklessLogo,
    link: '/products/inkless-lms',
    category: 'Web Apps',
    platform: 'Web',
    desc: 'Cloud-based Learning Management System for modern educators.',
    badge: 'Web',
  },
  {
    name: 'Flutter Web Emulator',
    img: emulatorLogo,
    link: '/products/flutter-web-emulator',
    category: 'Extensions',
    platform: 'VS Code',
    desc: 'Preview your Flutter web app live inside VS Code — no browser switching.',
    badge: 'VS Code',
  },
  {
    name: 'Minimal Desk Theme',
    img: minimalLogo,
    link: '/products/minimal-desk-theme',
    category: 'Themes',
    platform: 'Chrome',
    desc: 'A clean, distraction-free Chrome theme for focused work sessions.',
    badge: 'Chrome',
  },
  {
    name: 'Pastel Aurora',
    img: pastelLogo,
    link: '/products/pastel-aurora',
    category: 'Themes',
    platform: 'Chrome',
    desc: 'Soft pastel gradients that bring calm and colour to your browser.',
    badge: 'Chrome',
  },
  {
    name: 'Lunar Leap Theme',
    img: lunarLogo,
    link: '/products/lunar-leap-theme',
    category: 'Themes',
    platform: 'Chrome',
    desc: 'A sleek dark-space aesthetic for night-mode Chrome users.',
    badge: 'Chrome',
  },
]

const BADGE_COLOR = {
  Windows: { bg: '#EFF6FF', color: '#1D4ED8' },
  Web:     { bg: '#F0FDF4', color: '#15803D' },
  'VS Code': { bg: '#F5F3FF', color: '#6D28D9' },
  Chrome:  { bg: '#FFF7ED', color: '#C2410C' },
}

const STATS = [
  { value: '8+',    label: 'Products launched' },
  { value: '100+',  label: 'Countries reached' },
  { value: '50K+',  label: 'Downloads & installs' },
  { value: '3',     label: 'Team members' },
]

export default function AllProductsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      <SEOHead
        title="All Products — Minderfly | Desktop, Web & Extensions"
        description="Browse all Minderfly products — desktop apps, web apps, VS Code extensions, and Chrome themes used in 100+ countries."
        canonical="https://minderfly.com/all-products"
      />

      {/* ── Hero ── */}
      <section style={{ padding: '96px 0 80px', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '20px' }}>
            All Products
          </p>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '700', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px', maxWidth: '760px', margin: '0 auto 24px' }}>
            Software that ships and scales
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 48px', lineHeight: 1.6 }}>
            Every product we build starts with a real problem. Here's everything we've shipped.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {STATS.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-1px' }}>{s.value}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Tabs + Grid ── */}
      <section style={{ padding: '72px 0 100px' }}>
        <div className="gfe-container">

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '52px' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  border: active === cat ? '1.5px solid var(--google-blue-600)' : '1.5px solid var(--border-color)',
                  background: active === cat ? 'var(--google-blue-600)' : 'var(--white)',
                  color: active === cat ? '#fff' : 'var(--text-secondary)',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {filtered.map((product) => (
              <Link
                key={product.name}
                to={product.link}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '28px',
                    background: 'var(--white)',
                    transition: 'all 0.2s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(60,64,67,0.12)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.borderColor = 'transparent'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.borderColor = 'var(--border-color)'
                  }}
                >
                  {/* Top row: logo + badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img src={product.img} alt={product.name} style={{ width: '44px', height: '44px', objectFit: 'contain', borderRadius: '10px' }} />
                    <span style={{
                      fontSize: '11px', fontWeight: '600', letterSpacing: '0.4px',
                      padding: '4px 10px', borderRadius: '100px',
                      background: BADGE_COLOR[product.badge]?.bg,
                      color: BADGE_COLOR[product.badge]?.color,
                    }}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Name + desc */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '17px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {product.name}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {product.desc}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: 'var(--google-blue-600)' }}>
                    View product
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)', background: 'var(--grey-50)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', letterSpacing: '-1px', marginBottom: '16px' }}>
            Have an idea for a product?
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.6 }}>
            We partner with founders to design, build, and scale from zero to global.
          </p>
          <Link to="/contact" className="gfe-button gfe-button--primary" style={{ height: '52px', fontSize: '16px', padding: '0 36px', borderRadius: '12px' }}>
            Start a project with us
          </Link>
        </div>
      </section>
    </div>
  )
}

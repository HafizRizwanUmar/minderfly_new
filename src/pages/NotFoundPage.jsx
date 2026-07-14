import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'All Products', href: '/all-products' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Our Team', href: '/our-values/team' },
]

export default function NotFoundPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SEOHead
        title="Page Not Found — Minderfly"
        description="The page you're looking for doesn't exist. Explore Minderfly's products, solutions, and more."
        canonical="https://minderfly.com/404"
      />

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
      }}>

        {/* 404 */}
        <div style={{
          fontSize: 'clamp(120px, 22vw, 200px)',
          fontWeight: '800',
          lineHeight: 1,
          letterSpacing: '-8px',
          color: '#000000',
          userSelect: 'none',
          marginBottom: '32px',
        }}>
          404
        </div>

        <h1 style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '16px',
          letterSpacing: '-0.5px',
        }}>
          Looks like you got a bit lost
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          maxWidth: '480px',
          lineHeight: '1.6',
          marginBottom: '48px',
        }}>
          This page doesn't exist on Minderfly's website. Maybe the link is broken, or the page was moved. Let's get you back on track.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}>
          <Link to="/" className="gfe-button gfe-button--primary" style={{ height: '52px', fontSize: '16px', padding: '0 32px', borderRadius: '12px' }}>
            Back to Minderfly
          </Link>
          <Link to="/all-products" className="gfe-button gfe-button--outline" style={{ height: '52px', fontSize: '16px', padding: '0 32px', borderRadius: '12px' }}>
            Explore Products
          </Link>
        </div>

        {/* Quick Links */}
        <div style={{ width: '100%', maxWidth: '520px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--grey-500)', marginBottom: '20px' }}>
            Or jump to
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '12px',
          }}>
            {QUICK_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 12px',
                  background: 'var(--grey-50)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--white)'
                  e.currentTarget.style.borderColor = 'var(--google-blue-600)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,115,232,0.12)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--grey-50)'
                  e.currentTarget.style.borderColor = 'var(--border-color)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      <div style={{
        borderTop: '1px solid var(--border-color)',
        padding: '20px 24px',
        textAlign: 'center',
        color: 'var(--grey-500)',
        fontSize: '14px',
      }}>
        © {new Date().getFullYear()} Minderfly — Building startup products used in 100+ countries.
      </div>
    </div>
  )
}

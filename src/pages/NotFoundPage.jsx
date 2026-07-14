import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const QUICK_LINKS = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'All Products', href: '/all-products', icon: '🚀' },
  { label: 'Contact Us', href: '/contact', icon: '💬' },
  { label: 'Our Team', href: '/our-values/team', icon: '👥' },
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

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
      }}>

        {/* Big 404 */}
        <div style={{
          fontSize: 'clamp(100px, 20vw, 180px)',
          fontWeight: '800',
          lineHeight: 1,
          letterSpacing: '-8px',
          background: 'linear-gradient(135deg, #e8eaed 0%, #c5c8ce 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          userSelect: 'none',
          marginBottom: '32px',
        }}>
          404
        </div>

        {/* Minderfly logo mark above heading */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          background: 'var(--google-blue-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          boxShadow: '0 8px 24px rgba(26,115,232,0.3)',
        }}>
          <span style={{ fontSize: '28px', color: '#fff', fontWeight: '800', letterSpacing: '-1px' }}>M</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(24px, 5vw, 36px)',
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

        {/* Primary CTA */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}>
          <Link to="/" className="gfe-button gfe-button--primary" style={{ height: '52px', fontSize: '16px', padding: '0 32px', borderRadius: '12px' }}>
            Back to Minderfly
          </Link>
          <Link to="/all-products" className="gfe-button gfe-button--outline" style={{ height: '52px', fontSize: '16px', padding: '0 32px', borderRadius: '12px' }}>
            Explore Products
          </Link>
        </div>

        {/* Quick Links */}
        <div style={{ width: '100%', maxWidth: '560px' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--grey-500)', marginBottom: '20px' }}>
            Or jump to
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '12px',
          }}>
            {QUICK_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '20px 12px',
                  background: 'var(--grey-50)',
                  borderRadius: '14px',
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
                <span style={{ fontSize: '24px' }}>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
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

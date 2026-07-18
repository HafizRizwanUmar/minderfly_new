import { Link } from 'react-router-dom'

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const FOOTER_LINKS = {
  'Desktop & Web Apps': [
    { label: 'Cinemafly', href: '/products/cinemafly' },
    { label: 'DocSigner', href: '/products/docsigner' },
    { label: 'SanadPdf Editor', href: '/products/sanad-pdf-editor' },
    { label: 'InklessLMS', href: '/products/inkless-lms' },
  ],
  'Mobile Apps': [
    { label: 'Muhasba', href: '/products/muhasba' },
  ],
  'Extensions & Themes': [
    { label: 'Flutter Web Emulator', href: '/products/flutter-web-emulator' },
    { label: 'Minimal Desk Theme', href: '/products/minimal-desk-theme' },
    { label: 'Pastel Aurora', href: '/products/pastel-aurora' },
    { label: 'Lunar Leap Theme', href: '/products/lunar-leap-theme' },
  ],
  'Our Values': [
    { label: 'Our Commitment', href: '/our-values/our-commitment' },
    { label: 'Security & Privacy', href: '/our-values/privacy' },
    { label: 'Our Team', href: '/our-values/team' },
  ],
  Resources: [
    { label: 'How We Build', href: '/how-we-build' },
    { label: 'News & Updates', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="gfe-footer">
      {/* Newsletter strip */}
      <div style={{ borderBottom: '1px solid var(--border-color)', padding: '0 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 0' }}>
          <Link to="/contact" className="gfe-footer__newsletter-link">
            <EmailIcon />
            <span>Sign up for updates, insights, resources, and more</span>
          </Link>
        </div>
      </div>

      {/* Main links */}
      <div className="gfe-footer__top">
        {/* Brand column */}
        <div className="gfe-footer__brand">
          <Link to="/" className="gfe-footer__logo">
            <span className="gfe-footer__logo-text">Minderfly</span>
          </Link>
          <p className="gfe-footer__tagline">
            Empowering founders with tools, resources, and technology to build and scale their startups.
          </p>
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '20px' }}>
            <a href="https://www.instagram.com/minderflyofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--grey-600)', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--grey-600)'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.youtube.com/@minderflyofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: 'var(--grey-600)', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--grey-600)'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://x.com/x_minderfly" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{ color: 'var(--grey-600)', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--grey-600)'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <span className="gfe-footer__col-title">{title}</span>
            <ul className="gfe-footer__col-links">
              {links.map((link, i) => (
                <li key={i}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="gfe-footer__col-link">{link.label}</Link>
                  ) : (
                    <a href={link.href} className="gfe-footer__col-link">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="gfe-footer__bottom">
        <p className="gfe-footer__copyright">© {new Date().getFullYear()} Minderfly. All rights reserved.</p>
        <nav className="gfe-footer__legal-links" aria-label="Legal">
          <Link to="/our-values/privacy" className="gfe-footer__legal-link">Privacy</Link>
          <Link to="/our-values/privacy" className="gfe-footer__legal-link">Terms</Link>
          <Link to="/our-values/our-commitment" className="gfe-footer__legal-link">About Minderfly</Link>
          <Link to="/all-products" className="gfe-footer__legal-link">All Products</Link>
        </nav>
      </div>
    </footer>
  )
}

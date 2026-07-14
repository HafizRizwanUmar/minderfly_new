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

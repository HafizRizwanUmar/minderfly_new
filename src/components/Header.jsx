import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  {
    label: 'Our values',
    items: [
      { label: 'Our commitment', href: '/our-values/our-commitment' },
      { label: 'Security and privacy', href: '/our-values/privacy' },
      { label: 'Our team', href: '/our-values/team' },
    ]
  },
  {
    label: 'Products',
    megaMenu: {
      leftSide: {
        title: 'SaaS Based Products',
        columns: [
          {
            title: 'Desktop Applications',
            links: [
              { label: 'Cinemafly', href: '/products/cinemafly' },
              { label: 'DocSigner', href: '/products/docsigner' },
              { label: 'SanadPdf Editor', href: '/products/sanad-pdf-editor' },
            ]
          },
          {
            title: 'Web Applications',
            links: [
              { label: 'InklessLMS', href: '/products/inkless-lms' },
            ]
          },
          {
            title: 'Extensions',
            links: [
              { label: 'Flutter Web Emulator', href: '/products/flutter-web-emulator' },
            ]
          }
        ]
      },
      rightSide: {
        title: 'Chrome Themes',
        columns: [
          {
            title: '',
            links: [
              { label: 'Minimal Desk Theme', href: '/products/minimal-desk-theme' },
              { label: 'Pastel Aurora', href: '/products/pastel-aurora' },
              { label: 'Lunar Leap Theme', href: '/products/lunar-leap-theme' },
            ]
          }
        ]
      },
      footerLinks: [
        { label: 'Explore All Products', href: '/all-products' },
        { label: 'Product demos', href: '#' },
        { label: 'App Hub', href: '#' }
      ]
    }
  },
  {
    label: 'Solutions',
    items: [
      { label: 'For Dr. Hammad Lakhvi', href: '/solutions/dr-hammad' },
      { label: 'For Quran O Itrat Academy', href: '/solutions/quran-academy' },
      { label: 'For Almiraal', href: '/solutions/almiraal' },
    ]
  },
  {
    label: 'Resources',
    items: [
      { label: 'How We Build', href: '/how-we-build' },
      { label: 'News & Updates', href: '/news' },
    ]
  }
]

const GoogleLogoSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" style={{height:'27px', width:'75px'}}>
    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
    <path fill="#4285F4" d="M35.29 41.41V32h31.36c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 35.28.36 16.67 16.32 1.21 35.14 1.21c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.33.27z"/>
  </svg>
)

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
)

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
)

const ArrowForwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
  </svg>
)

const ArrowForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [butterBarVisible, setButterBarVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {butterBarVisible && (
        <div className="butter-bar">
          <span>Have a bold startup idea? We'll design, build, and scale it for you. <Link to="/contact">Start your project</Link></span>
          <button className="butter-bar__close" onClick={() => setButterBarVisible(false)} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      )}

      <header className={`gfe-header${scrolled ? ' scrolled' : ''}`}>
        <div className="gfe-header__inner gfe-container--wide">
          {/* Hamburger (mobile) */}
          <button
            className="gfe-header__hamburger"
            aria-label="Open navigation"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </button>

          {/* Logo */}
          <Link to="/" className="gfe-header__logo">
            <span className="gfe-header__logo-name">Minderfly</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="gfe-nav" aria-label="Main navigation">
            <ul className="gfe-nav__list">
              {NAV_ITEMS.map((item, idx) => (
                <li key={idx} className={`gfe-nav__item ${item.megaMenu ? 'has-mega-menu' : ''}`}
                  onMouseEnter={() => (item.items || item.megaMenu) && setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.megaMenu ? (
                    <>
                      <button
                        className={`gfe-nav__button${activeDropdown === idx ? ' active' : ''}`}
                        aria-expanded={activeDropdown === idx}
                      >
                        {item.label}
                      </button>
                      <div className={`gfe-nav__mega-menu-container${activeDropdown === idx ? ' open' : ''}`}>
                        <div className="mega-menu">
                          <div className="mega-menu__main">
                            <div className="mega-menu__left">
                              <h3 className="mega-menu__section-title">{item.megaMenu.leftSide.title}</h3>
                              <div className="mega-menu__columns">
                                {item.megaMenu.leftSide.columns.map((col, ci) => (
                                  <div key={ci} className="mega-menu__column">
                                    <h4 className="mega-menu__column-title">{col.title}</h4>
                                    <ul className="mega-menu__links">
                                      {col.links.map((link, li) => (
                                        <li key={li}><Link to={link.href} onClick={() => setActiveDropdown(null)}>{link.label}</Link></li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="mega-menu__right">
                              <h3 className="mega-menu__section-title">{item.megaMenu.rightSide.title}</h3>
                              <div className="mega-menu__columns">
                                {item.megaMenu.rightSide.columns.map((col, ci) => (
                                  <div key={ci} className="mega-menu__column">
                                    {col.title && <h4 className="mega-menu__column-title">{col.title}</h4>}
                                    <ul className="mega-menu__links">
                                      {col.links.map((link, li) => (
                                        <li key={li}><Link to={link.href} onClick={() => setActiveDropdown(null)}>{link.label}</Link></li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mega-menu__footer">
                            <ul className="mega-menu__footer-links">
                              {item.megaMenu.footerLinks.map((link, li) => (
                                <li key={li}>
                                  <Link to={link.href} onClick={() => setActiveDropdown(null)}>
                                    {link.label}
                                    {link.hasIcon && <ArrowForwardIcon />}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : item.items ? (
                    <>
                      <button
                        className={`gfe-nav__button${activeDropdown === idx ? ' active' : ''}`}
                        aria-expanded={activeDropdown === idx}
                      >
                        {item.label}
                      </button>
                      <div className={`gfe-nav__dropdown${activeDropdown === idx ? ' open' : ''}`}>
                        {item.items.map((sub, si) => (
                          sub.href.startsWith('/') ? (
                            <Link key={si} to={sub.href} className="gfe-nav__dropdown-link" onClick={() => setActiveDropdown(null)}>{sub.label}</Link>
                          ) : (
                            <a key={si} href={sub.href} className="gfe-nav__dropdown-link">{sub.label}</a>
                          )
                        ))}
                      </div>
                    </>
                  ) : (
                    <a href={item.href} className="gfe-nav__link">{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Right */}
          <div className="gfe-header__right">
            <Link to="/contact" className="gfe-button gfe-button--primary">Get started</Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`} onClick={(e) => e.target.classList.contains('mobile-drawer__backdrop') && setDrawerOpen(false)}>
        <div className="mobile-drawer__backdrop" onClick={() => setDrawerOpen(false)} />
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__header">
            <button className="mobile-drawer__close" onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </button>
            <Link to="/" className="gfe-header__logo" onClick={() => setDrawerOpen(false)}>
              <span className="gfe-header__logo-name" style={{fontSize:'18px'}}>minderfly</span>
            </Link>
          </div>
          <nav className="mobile-drawer__nav">
            {NAV_ITEMS.map((item, idx) => (
              <a key={idx} href={item.href || '#'} className="mobile-drawer__nav-link" onClick={() => setDrawerOpen(false)}>
                <span>{item.label}</span>
                {item.items && <ArrowForward />}
              </a>
            ))}
            <hr className="mobile-drawer__separator" />
          </nav>
          <div className="mobile-drawer__footer">
            <Link to="/contact" className="gfe-button gfe-button--primary" onClick={() => setDrawerOpen(false)}>Get started</Link>
          </div>
        </div>
      </div>
    </>
  )
}

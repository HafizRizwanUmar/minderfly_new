import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-section" ref={sectionRef} id="hero">

      {/* Centered Hero Content */}
      <div className="hero-content">
        <h1 className="hero-headline reveal reveal-delay-1">
          Your idea deserves<br />to change the world.
        </h1>

        <p className="hero-body reveal reveal-delay-2">
          We partner with visionary founders to turn bold ideas into market-ready products —<br />
          then scale them globally. From MVP to 100 countries, we build it all.
        </p>

        <div className="hero-cta reveal reveal-delay-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" className="gfe-button gfe-button--primary hero-button" style={{ padding: '16px 32px', height: 'auto', fontSize: '16px' }}>
            Start Building Your Startup
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero-trust reveal reveal-delay-3">
          <span className="hero-trust__item">✦ 100+ Countries</span>
          <span className="hero-trust__divider">|</span>
          <span className="hero-trust__item">✦ Multiple Shipped Products</span>
          <span className="hero-trust__divider">|</span>
          <span className="hero-trust__item">✦ End-to-End Partnership</span>
        </div>
      </div>

      <a href="#products" className="hero-arrow reveal reveal-delay-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </a>
    </section>
  )
}

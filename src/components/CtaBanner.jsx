import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function CtaBanner() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.2 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cta-banner-section section-light" ref={ref}>
      <div className="gfe-container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="cta-banner__inner reveal">
          <div className="cta-banner__content">
            <h2 className="cta-banner__headline">Ready to build your startup?</h2>

            <div className="cta-banner__right">
              <p className="cta-banner__body">
                Join the founders who trusted us to turn their ideas into global products.
                Let's have a free discovery call — no commitment required.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="cta-banner__btn-primary">
                  Book a free call
                </Link>
                <Link to="/all-products" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  border: '1px solid #dadce0',
                  color: '#202124',
                  fontSize: '14px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                  background: 'white',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f8f9fa'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}
                >
                  See our work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'

export default function OurCommitmentPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      <SEOHead
        title="Our Commitment — Minderfly | Building Startup Products"
        description="Minderfly's commitment to building world-class software. We partner with founders to turn ideas into scalable digital products across 100+ countries."
        canonical="https://minderfly.com/our-values/our-commitment"
      />
      {/* Hero Section */}
      <section style={{ padding: '80px 0', background: 'var(--grey-50)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h1 className="gfe-headline-1" style={{ marginBottom: '24px' }}>Our Commitment</h1>
          <p className="gfe-body" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            At Minderfly, we believe that great software can change the world. Our mission is to partner with visionary founders and empower them with the technical expertise needed to turn bold ideas into globally scalable digital products.
          </p>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container">
          <div className="gfe-responsive-row">
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Building for Scale & Excellence</h2>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                We design our tools to be robust, performant, and delightful to use. By prioritizing cutting-edge architecture and inclusive design, we ensure your product is ready for day one and year ten.
              </p>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>Beautiful, intuitive UI/UX design.</li>
                <li>Highly scalable cloud infrastructure.</li>
                <li>Cross-platform availability (Desktop, Web, Mobile).</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', background: 'var(--grey-50)', height: '300px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '48px' }}>🚀</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnering with Founders */}
      <section style={{ padding: '80px 0', background: 'var(--grey-50)' }}>
        <div className="gfe-container">
          <div className="gfe-responsive-row" style={{ flexDirection: 'row-reverse' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Partnering with Founders</h2>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                Founders are at the heart of innovation. We are committed to taking on the technical heavy-lifting so you can focus on what you do best: growing your business, talking to users, and closing sales. From MVP to Series A, we are your technical partner.
              </p>
            </div>
            <div style={{ flex: '1 1 400px', background: 'var(--white)', height: '300px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-1)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '48px' }}>🤝</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Engineering */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Sustainable Engineering</h2>
          <p className="gfe-body" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 40px' }}>
            We write clean, maintainable code and architect systems that minimize server bloat and reduce cloud energy waste, ensuring a sustainable footprint for your digital products.
          </p>
          <a href="/how-we-build" className="gfe-button gfe-button--primary gfe-button--large">See How We Build</a>
        </div>
      </section>
    </div>
  )
}

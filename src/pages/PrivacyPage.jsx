import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'

export default function PrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      <SEOHead
        title="Privacy & Security — Minderfly | GDPR Compliant, No Data Selling"
        description="How Minderfly protects your data. AES-256 encryption, GDPR & CCPA compliant, no data selling, no advertising targeting. Built with privacy as a fundamental right."
        canonical="https://minderfly.com/our-values/privacy"
      />
      {/* Hero Section */}
      <section style={{ padding: '80px 0', background: 'var(--grey-50)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h1 className="gfe-headline-1" style={{ marginBottom: '24px' }}>Security & Privacy</h1>
          <p className="gfe-body" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            We believe that privacy is a fundamental right. Whether you're using our desktop apps, web tools, or partnering with us to build a startup, Minderfly is built from the ground up to protect your data with industry-leading security practices and strict compliance standards.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container">
          <h2 className="gfe-headline-2" style={{ textAlign: 'center', marginBottom: '60px' }}>Our Core Principles</h2>
          <div className="gfe-responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ padding: '40px', background: 'var(--grey-50)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🔒</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '16px' }}>Your Data is Yours</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                We never sell your data to third parties, and we never use your business or personal data for targeted advertising. You retain full ownership of everything you create, store, and build with us.
              </p>
            </div>
            <div style={{ padding: '40px', background: 'var(--grey-50)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🛡️</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '16px' }}>Enterprise-Grade Security</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                All data is encrypted in transit and at rest using AES-256 encryption. We employ continuous monitoring and regular third-party penetration testing to ensure our infrastructure and the products we ship remain secure.
              </p>
            </div>
            <div style={{ padding: '40px', background: 'var(--grey-50)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>✅</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '16px' }}>Strict Compliance</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                We strictly adhere to global privacy regulations including GDPR, CCPA, and SOC2 guidelines. Our systems are audited regularly to ensure we meet the highest standards of data protection for our users and enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section style={{ padding: '80px 0', background: 'var(--grey-50)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Transparency & Control</h2>
          <p className="gfe-body" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 40px' }}>
            We give you granular control over your account, data sharing, and retention policies. You can export or delete your data at any time with a single click. No dark patterns, just honest software.
          </p>
          <a href="/contact" className="gfe-button gfe-button--secondary">Contact Privacy Team</a>
        </div>
      </section>
    </div>
  )
}

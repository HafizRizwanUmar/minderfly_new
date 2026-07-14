import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      <SEOHead
        title="Contact Minderfly — Hire a Startup Builder | Build Your App Idea"
        description="Have a startup idea? Talk to Minderfly. We build desktop apps, mobile apps, web apps and extensions for founders. Book a free call today and turn your idea into a real product."
        canonical="https://minderfly.com/contact"
      />
      {/* Hero Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h1 className="gfe-headline-1" style={{ marginBottom: '24px' }}>Get Started with Minderfly</h1>
          <p className="gfe-body" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 40px' }}>
            We're here to help you transform your educational and business tools. Reach out to our team to request a demo, ask a question, or explore partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Send Us a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '1rem' }} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '1rem' }} />
                </div>
                <div>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Subject</label>
                  <select id="subject" name="subject" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '1rem', background: 'var(--white)' }}>
                    <option>Product Inquiry</option>
                    <option>Request a Demo</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}></textarea>
                </div>
                <button type="button" className="gfe-button gfe-button--primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            </div>
            
            <div style={{ flex: '1 1 400px', background: 'var(--bg-light)', padding: '40px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h3 className="gfe-headline-3" style={{ marginBottom: '24px' }}>Contact Information</h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Email Support</h4>
                <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>support@minderfly.com</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Sales</h4>
                <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>sales@minderfly.com</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Headquarters</h4>
                <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                  123 Tech Valley<br />
                  Innovation City, CA 94043
                </p>
              </div>
              <hr style={{ borderTop: '1px solid var(--border-color)', margin: '30px 0' }} />
              <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>Connect with us</h4>
              <div style={{ display: 'flex', gap: '16px', fontSize: '24px', color: 'var(--text-secondary)' }}>
                <span style={{ cursor: 'pointer' }}>𝕏</span>
                <span style={{ cursor: 'pointer' }}>in</span>
                <span style={{ cursor: 'pointer' }}>f</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImpactSection from '../components/ImpactSection'
import FaqSection from '../components/FaqSection'
import SEOHead from '../components/SEOHead'

/* ─── DocSigner ─────────────────────────────────────────────────────────────
   Product: Windows Desktop App for signing PDFs digitally (PKI-based).
   Hero: Clean white page with a large centered layout, document card aesthetic.
───────────────────────────────────────────────────────────────────────────── */

const STORE_URL = 'https://apps.microsoft.com/detail/9p4n2c9vj8qb?hl=en-US&gl=PK'

const features = [
  { icon: <PenTool size={24} />, title: 'Digital Signatures', desc: 'PKI-based, legally recognized in 60+ countries. Draw, type, or upload. Complies with eIDAS, ESIGN, UETA.' },
  { icon: <FileText size={24} />, title: 'PDF Annotation', desc: 'Highlight, sticky notes, freehand shapes, redaction. Editable annotation layer for real-time collaboration.' },
  { icon: <Package size={24} />, title: 'Batch Signing', desc: 'Sign hundreds of PDFs in one go. Background processing, unique certificates per document, detailed batch reports.' },
  { icon: <Award size={24} />, title: 'Certificate Management', desc: 'Integrates with DigiCert, GlobalSign, Comodo. Encrypted local vault, real-time revocation checking.' },
  { icon: <BarChart size={24} />, title: 'Audit Trail', desc: 'Tamper-evident log with RFC 3161 trusted timestamps. SOX, HIPAA, ISO 27001 ready. Export as PDF or CSV.' },
  { icon: <Cloud size={24} />, title: 'Cloud Sync', desc: 'OneDrive, SharePoint, Google Drive, Dropbox. SSO auth, role-based access, data residency control.' },
]

const buildStory = [
  { year: '2021', title: 'The Problem', body: 'Legal teams were drowning in paperwork; printing, signing, scanning 50-page contracts was costing law firms hours daily.' },
  { year: 'Early 2022', title: 'Research', body: 'We studied PKI infrastructure, eIDAS/ESIGN compliance, and integrated with DigiCert and GlobalSign for reliable certificate validation.' },
  { year: 'Mid 2022', title: 'Building', body: 'We built the batch signing engine first — the feature that would save the most time. Audit trail was built in from day one with RFC 3161 timestamps.' },
  { year: 'Late 2022', title: 'Microsoft Store Launch', body: 'Legal firms and HR departments adopted it immediately. We hit our first 1,000 downloads in 72 hours.' },
  { year: '2023+', title: 'Pro & Expansion', body: 'Introduced batch signing for 100s of documents, cloud sync with OneDrive/SharePoint, and expanded to 60+ countries of legal recognition.' },
]

const faqs = [
  { q: 'Is DocSigner legally valid?', a: 'Yes — and this is not a grey area. DocSigner uses Public Key Infrastructure (PKI) certificates to produce qualified digital signatures that comply with eIDAS (EU), ESIGN Act (US), and UETA (US). These signatures are legally recognized and court-admissible in 60+ countries. Each signed document embeds a tamper-evident certificate with an RFC 3161 trusted timestamp, proving the exact time of signing.' },
  { q: 'What is the pricing model?', a: 'DocSigner offers a 3-day full Pro trial with no credit card required. After the trial, the free tier limits you to 10 document signings per month with basic features. Pro is a one-time $9.99 payment for unlimited lifetime access — no annual fee, no subscription, no hidden costs. One purchase covers you permanently, including all future updates.' },
  { q: 'Can I sign documents offline?', a: "Yes. Once a certificate is imported, you can sign documents entirely offline. DocSigner does not require an internet connection to apply a signature. Internet is only needed for initial certificate validation from a CA (like DigiCert or GlobalSign) and for cloud sync features. Your signed documents are always stored locally first." },
  { q: 'What certificate authorities are supported?', a: 'DocSigner integrates natively with DigiCert, GlobalSign, and Comodo. It also supports enterprise Certificate Authorities, smart card readers, USB hardware tokens (e.g. SafeNet, Gemalto), and HSM devices. If your organization has a private PKI infrastructure, our Enterprise integration guide covers custom CA configuration step by step.' },
  { q: 'How is batch signing different from signing one at a time?', a: "Batch signing lets you queue hundreds of PDF documents and sign all of them in a single background job — each with its own unique certificate and audit trail. DocSigner generates a detailed batch report upon completion showing the success/failure status of every document. This is the feature that saves legal teams, HR departments, and finance teams hours of manual work every week." },
]

const DOCSIGNER_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DocSigner',
  operatingSystem: 'Windows',
  applicationCategory: 'BusinessApplication',
  description: 'DocSigner is a Windows desktop app for PKI-based digital PDF signing. Legally recognized in 60+ countries. eIDAS, ESIGN, UETA compliant. Batch signing, audit trail, cloud sync.',
  offers: { '@type': 'Offer', price: '9.99', priceCurrency: 'USD' },
  url: 'https://minderfly.com/products/docsigner',
}

export default function DocSignerPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title="DocSigner — PDF Digital Signature Software for Windows | eIDAS Compliant"
        description="Sign PDFs digitally with PKI-based signatures legally recognized in 60+ countries. eIDAS, ESIGN & UETA compliant. Batch sign hundreds of PDFs. Lifetime $9.99. 3-day free trial."
        canonical="https://minderfly.com/products/docsigner"
        schema={DOCSIGNER_SCHEMA}
      />

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '60px 24px', background: 'var(--white)', borderBottom: '1px solid var(--border-color)', backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        <div className="gfe-container gfe-responsive-row" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
          
          {/* Left — Mockup Document */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '1/1.4',
              background: 'var(--white)',
              borderRadius: '12px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.1)',
              border: '1px solid var(--border-color)',
              borderLeft: '4px solid var(--google-blue-600)',
              transform: 'rotate(-3deg)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Fake text lines */}
              <div style={{ width: '40%', height: '12px', background: 'var(--grey-100)', borderRadius: '4px', marginBottom: '32px' }} />
              <div style={{ width: '100%', height: '8px', background: 'var(--grey-100)', borderRadius: '4px', marginBottom: '16px' }} />
              <div style={{ width: '95%', height: '8px', background: 'var(--grey-100)', borderRadius: '4px', marginBottom: '16px' }} />
              <div style={{ width: '98%', height: '8px', background: 'var(--grey-100)', borderRadius: '4px', marginBottom: '16px' }} />
              <div style={{ width: '70%', height: '8px', background: 'var(--grey-100)', borderRadius: '4px', marginBottom: '48px' }} />
              
              {/* Signature area */}
              <div style={{ marginTop: 'auto', alignSelf: 'flex-end', width: '180px' }}>
                <div style={{ fontFamily: 'cursive', fontSize: '28px', color: 'var(--google-blue-600)', marginBottom: '4px', transform: 'rotate(-5deg)' }}>John Doe</div>
                <div style={{ borderTop: '2px solid var(--border-color)', paddingTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '16px', height: '16px', background: 'var(--google-blue-600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', border: '2px solid white', borderTop: 0, borderRight: 0, transform: 'rotate(-45deg)' }} />
                  </div>
                  <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>Verified Signature</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--text-primary)', borderRadius: '100px', padding: '6px 16px', fontSize: '12px', fontWeight: '700', color: 'var(--white)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '32px', width: 'fit-content' }}>
              <Monitor size={14} style={{marginTop: '-2px'}} /> Windows Desktop App
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: '800', lineHeight: '1.1', color: 'var(--text-primary)', marginBottom: '24px' }}>
              Digital signatures,<br />
              legally binding.
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '480px', marginBottom: '40px' }}>
              Stop printing and scanning. Sign, annotate, and batch process PDFs with a PKI-based app that ensures your documents are compliant in 60+ countries.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '28px', width: 'fit-content' }}>
              <span style={{ color: 'var(--google-green)', fontWeight: '700' }}>Free 3-day trial</span>
              <span style={{ color: 'var(--grey-400)' }}>·</span>
              <span>Pro <strong style={{ color: 'var(--text-primary)' }}>$9.99</strong> lifetime</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="gfe-button gfe-button--primary" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                <Download size={18} /> Download on Microsoft Store
              </a>
              <Link to="/contact" className="gfe-button gfe-button--outline" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                Build something like this
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BUILD STORY — Timeline ═════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '12px' }}>The story behind the product</p>
            <h2 className="gfe-headline-2">How we built DocSigner</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '16px', lineHeight: '1.7' }}>From a legal sector pain point to a trusted compliance tool.</p>
          </div>

          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            <div style={{ position: 'absolute', left: '11px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(to bottom, var(--google-blue-600), var(--border-color))' }} />
            {buildStory.map((t, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '52px', paddingLeft: '24px' }}>
                <div style={{ position: 'absolute', left: '-29px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--google-blue-600)', border: '3px solid var(--grey-50)', boxShadow: '0 0 0 3px var(--google-blue-100)' }} />
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '6px' }}>{t.year}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>{t.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--white)' }}>
        <div className="gfe-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="gfe-headline-2">Everything a modern firm needs</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '560px', margin: '16px auto 0', lineHeight: '1.6' }}>Built for compliance, designed for speed.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ padding: '32px', background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '16px', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ IMPACT SECTION ══════════════════════════════════════════════════ */}
      <ImpactSection />

      {/* ══ PRICING ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'var(--grey-50)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="gfe-headline-2">Compliance shouldn't cost a fortune</h2>
            <p className="gfe-body" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>A one-time payment for lifetime access. Includes a 3-day full Pro trial.</p>
          </div>

          <div className="gfe-responsive-grid">
            {/* Free Tier */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '40px 32px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>Free</div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: 1, marginBottom: '8px' }}>$0</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '32px' }}>3-day full trial, then free tier</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Basic signing (up to 10 docs/mo)', 'Standard annotation', 'Manual certificate import', 'Full Pro for 3 days'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    <span style={{ color: 'var(--google-green)', fontWeight: '700' }}><Check size={16} /></span> {item}
                  </li>
                ))}
              </ul>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="gfe-button gfe-button--outline" style={{ width: '100%', justifyContent: 'center', padding: '12px', height: 'auto', borderRadius: '8px' }}>
                Download Free
              </a>
            </div>
            {/* Pro */}
            <div style={{ background: 'var(--google-blue-600)', border: '1px solid var(--google-blue-700)', borderRadius: '20px', padding: '40px 32px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-1px', right: '24px', background: '#FBBC04', color: 'var(--text-primary)', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '0 0 8px 8px' }}>Lifetime</div>
              <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>Pro</div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--white)', lineHeight: 1, marginBottom: '8px' }}>$9.99</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '32px' }}>One-time payment</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Unlimited document signing', 'Batch signing', 'Full certificate management', 'RFC 3161 audit trail & cloud sync', '3-day full trial included'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                    <span style={{ color: '#FBBC04', fontWeight: '700' }}><Check size={16} /></span> {item}
                  </li>
                ))}
              </ul>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px', borderRadius: '8px', background: 'var(--white)', color: 'var(--google-blue-600)', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                Get Pro — $9.99
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <FaqSection faqs={faqs} title="DocSigner — FAQ" subtitle="Everything about digital signatures, compliance, and pricing." />

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--white)', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container">
          <h2 className="gfe-headline-2" style={{ marginBottom: '20px' }}>Sign your first PDF in under 2 minutes.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Stop wasting time printing contracts. Get started with DocSigner today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="gfe-button gfe-button--primary" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
              <Download size={18} /> Download on Microsoft Store
            </a>
            <Link to="/contact" className="gfe-button gfe-button--outline" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
              Build something like this →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Film, Zap, Moon, FileText, Music, ListVideo, Monitor, Download, PenTool, Package, Award, BarChart, Cloud, Image, Files, Search, Save, Eye, Briefcase, Smartphone, Ban, Puzzle, Box, Video, CircleDot, Bot, Globe, Settings, Calendar, Check, Mailbox } from 'lucide-react'

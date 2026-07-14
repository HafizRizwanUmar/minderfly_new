import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImpactSection from '../components/ImpactSection'
import FaqSection from '../components/FaqSection'
import SEOHead from '../components/SEOHead'

/* ─── Sanad PDF Editor ──────────────────────────────────────────────────────
   Product: Windows Desktop App for editing PDFs.
   Hero: Editorial/Creative aesthetic with cream/off-white background.
───────────────────────────────────────────────────────────────────────────── */

const STORE_URL = '#'

const features = [
  { icon: <FileText size={24} />, title: 'Text Editing', desc: 'Edit any text in a PDF directly. Change fonts, sizes, colors. Add new text boxes anywhere on the page.' },
  { icon: <Image size={24} />, title: 'Image Management', desc: 'Insert, resize, move, or replace images. Supports PNG, JPEG, SVG. Adjust opacity and layering.' },
  { icon: <Files size={24} />, title: 'Page Operations', desc: 'Reorder, rotate, delete, split, or merge pages. Drag-and-drop page thumbnails panel.' },
  { icon: <PenTool size={24} />, title: 'Digital Signatures', desc: 'Built-in PKI signing. Sign your edited PDFs without switching apps.' },
  { icon: <Search size={24} />, title: 'OCR Recognition', desc: 'Extract text from scanned PDFs and image-based documents. Supports 20+ languages.' },
  { icon: <Save size={24} />, title: 'Export Options', desc: 'Export to PDF/A (archival), Word, Excel, PowerPoint, or plain images. Compress PDFs for email.' },
]

const buildStory = [
  { year: '2022', title: 'The Gap', body: 'Adobe Acrobat cost $180/year. Students, freelancers, and small teams needed a capable PDF editor that didn\'t drain their budget.' },
  { year: 'Early 2023', title: 'Foundation', body: 'We built the PDF rendering engine from scratch using native Windows APIs for sharp text rendering at all zoom levels.' },
  { year: 'Mid 2023', title: 'Features', body: 'Text editing, image insertion, page rearrangement, form filling — built in priority order based on user research interviews.' },
  { year: 'Late 2023', title: 'Launch', body: '5,000 downloads in the first two weeks. The $9.99 lifetime price point resonated immediately vs. subscription alternatives.' },
  { year: '2024+', title: 'Expansion', body: 'We integrated digital signatures, OCR text recognition, and cloud storage APIs. Now actively used in 35+ countries.' },
]

const faqs = [
  { q: 'Is it actually a lifetime purchase?', a: 'Yes. $9.99 once, forever. No annual fee, no subscription, no hidden costs.' },
  { q: 'Can I edit any PDF?', a: 'Yes — text, images, forms, pages. Scanned PDFs need the OCR feature to become editable.' },
  { q: 'How does it compare to Adobe Acrobat?', a: 'Sanad covers 90% of everyday PDF editing needs at a one-time cost vs Adobe\'s $180/year subscription.' },
  { q: 'Does it support digital signatures?', a: 'Yes, full PKI-based digital signatures are built in, included in the Pro tier.' },
  { q: 'What\'s the trial like?', a: 'Full Pro access for 3 days — all features, no restrictions. No credit card needed to start.' },
]

const SANAD_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sanad PDF Editor',
  operatingSystem: 'Windows',
  applicationCategory: 'BusinessApplication',
  description: 'Sanad PDF Editor is a Windows desktop PDF editor. Edit text, images, pages, add digital signatures and OCR. A capable Adobe Acrobat alternative at a one-time $9.99 lifetime price.',
  offers: { '@type': 'Offer', price: '9.99', priceCurrency: 'USD' },
  url: 'https://minderfly.com/products/sanad-pdf-editor',
}

export default function SanadPdfEditorPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title="Sanad PDF Editor — Edit PDFs on Windows | $9.99 Lifetime | Adobe Acrobat Alternative"
        description="Edit PDF text, images, and pages on Windows. OCR, digital signatures, page merging. No subscription — $9.99 one-time lifetime purchase. 3-day free trial. Better than Adobe Acrobat for most users."
        canonical="https://minderfly.com/products/sanad-pdf-editor"
        schema={SANAD_SCHEMA}
      />

      {/* ── HERO ── */}
      <section style={{ padding: '60px 24px', background: 'var(--white)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container gfe-responsive-row" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
          
          {/* Left — Content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--text-primary)', borderRadius: '100px', padding: '6px 16px', fontSize: '12px', fontWeight: '700', color: 'var(--white)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '32px', width: 'fit-content' }}>
              <Monitor size={14} style={{marginTop: '-2px'}} /> Windows Desktop App
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', fontWeight: '800', lineHeight: '1.1', color: 'var(--text-primary)', marginBottom: '24px' }}>
              Edit PDFs without the
              <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '110%', height: '40%', background: 'var(--google-blue-600)', zIndex: 0, opacity: 0.2, transform: 'rotate(-2deg)' }}></span>
                <span style={{ position: 'relative', zIndex: 1, color: 'var(--text-primary)' }}>subscription.</span>
              </span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '480px', marginBottom: '40px' }}>
              A capable, fast, lifetime-access PDF editor for Windows. Change text, swap images, and merge pages without paying $180 a year.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '28px', width: 'fit-content' }}>
              <span style={{ color: 'var(--google-green)', fontWeight: '700' }}>Free 3-day trial</span>
              <span style={{ color: 'var(--grey-400)' }}>·</span>
              <span>Pro <strong style={{ color: 'var(--text-primary)' }}>$9.99</strong> lifetime</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="gfe-button gfe-button--primary" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                <Download size={18} /> Try Sanad Free
              </a>
              <Link to="/contact" className="gfe-button gfe-button--outline" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                Build something like this
              </Link>
            </div>
          </div>

          {/* Right — CSS PDF Icon Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              width: '180px',
              height: '240px',
              background: 'var(--white)',
              borderRadius: '8px 40px 8px 8px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.1)',
              border: '1px solid var(--border-color)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'scale(1.5) rotate(5deg)'
            }}>
              {/* Folded corner */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '40px',
                background: '#FAFAF8',
                borderBottomLeftRadius: '8px',
                boxShadow: '-4px 4px 10px rgba(0,0,0,0.05)',
                borderBottom: '1px solid var(--border-color)',
                borderLeft: '1px solid var(--border-color)'
              }}></div>
              
              <div style={{ fontSize: '48px', fontWeight: '800', color: '#EF4444', letterSpacing: '-2px' }}>
                PDF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BUILD STORY — Timeline ═════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--white)', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '12px' }}>The story behind the product</p>
            <h2 className="gfe-headline-2">How we built Sanad</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '16px', lineHeight: '1.7' }}>A journey to democratize PDF editing.</p>
          </div>

          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            <div style={{ position: 'absolute', left: '11px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(to bottom, var(--google-blue-600), var(--border-color))' }} />
            {buildStory.map((t, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '52px', paddingLeft: '24px' }}>
                <div style={{ position: 'absolute', left: '-29px', top: '5px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--google-blue-600)', border: '3px solid var(--white)', boxShadow: '0 0 0 3px var(--google-blue-100)' }} />
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '6px' }}>{t.year}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>{t.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="gfe-headline-2">All the tools you need</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '560px', margin: '16px auto 0', lineHeight: '1.6' }}>We cover 90% of your everyday PDF editing tasks.</p>
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

      {/* ── PRICING ── */}
      <section style={{ padding: '80px 24px', background: 'var(--grey-50)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="gfe-headline-2">Simple, transparent pricing</h2>
            <p className="gfe-body" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>Start with a full 3-day trial. No credit card required.</p>
          </div>

          <div className="gfe-responsive-grid">
            {/* Free */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '40px 32px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>Free</div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: 1, marginBottom: '8px' }}>$0</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '32px' }}>3-day full trial, then free tier</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Basic viewing and minor text edits', 'Standard page rotation', 'Watermarked exports on free tier', 'Full Pro for 3 days'].map((item, i) => (
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
                {['Advanced text & image editing', 'Full page operations', 'OCR and digital signatures', 'No watermarks, priority support', '3-day full trial included'].map((item, i) => (
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
      <FaqSection faqs={faqs} title="Sanad PDF Editor — FAQ" subtitle="Questions about editing, pricing, and what's possible." />

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: '#FAFAF8', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container">
          <h2 className="gfe-headline-2" style={{ marginBottom: '20px' }}>Edit your first PDF free — no credit card.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Experience powerful PDF editing tools natively on Windows.
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

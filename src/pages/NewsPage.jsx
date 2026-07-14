import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

/* ─── News & Updates ────────────────────────────────────────────────────────
   Minderfly company news hub — product launches, milestones, founder stories
───────────────────────────────────────────────────────────────────────────── */

const CATEGORIES = ['All', 'Product Updates', 'Company News', 'Founder Stories', 'Milestones']

const NEWS = [
  {
    category: 'Milestones',
    date: 'July 10, 2026',
    tag: '100+ Countries',
    title: 'Minderfly products now reach 100+ countries',
    excerpt: 'We are proud to announce that our portfolio of software products is now actively used by people in over 100 countries. From DocSigner in legal firms across Europe to InklessLMS in schools across South Asia, our reach keeps growing.',
    readTime: '3 min read',
    featured: true,
  },
  {
    category: 'Product Updates',
    date: 'June 28, 2026',
    tag: 'Cinemafly',
    title: 'Cinemafly crosses 50,000 downloads on Microsoft Store',
    excerpt: 'We shipped Cinemafly in late 2023 and it just hit 50,000 downloads — entirely organic, entirely community-driven. Film lovers on Reddit and Discord discovered it and never looked back. The AI recommendation engine is our most celebrated feature.',
    readTime: '4 min read',
    featured: true,
  },
  {
    category: 'Product Updates',
    date: 'June 15, 2026',
    tag: 'Flutter Emulator',
    title: 'Flutter Web Emulator v2.0 — device simulation is here',
    excerpt: 'Version 2.0 of our VS Code extension is out. We\'ve added iPhone, iPad, and Pixel device frame simulation, improved hot reload stability, and dropped session time limits for Pro users. $1 lifetime — no brainer.',
    readTime: '2 min read',
    featured: false,
  },
  {
    category: 'Founder Stories',
    date: 'May 30, 2026',
    tag: 'Founder Spotlight',
    title: 'How Quran O Itrat Academy scaled their digital learning with InklessLMS',
    excerpt: 'We sat down with the team at Quran O Itrat Academy to talk about how they moved 3,000+ students online using InklessLMS — and what they learned about running digital education at scale.',
    readTime: '6 min read',
    featured: false,
  },
  {
    category: 'Company News',
    date: 'May 12, 2026',
    tag: 'Company',
    title: 'Minderfly is now building for external founders',
    excerpt: 'We\'ve built products for years. Now we\'re opening our capabilities to founders who have ideas and need a technical partner to turn them into reality. If you have a startup idea, we want to talk.',
    readTime: '3 min read',
    featured: false,
  },
  {
    category: 'Product Updates',
    date: 'April 22, 2026',
    tag: 'DocSigner',
    title: 'DocSigner Pro gets batch signing for unlimited documents',
    excerpt: 'The most-requested feature is live. DocSigner Pro users can now batch-sign unlimited PDFs in a single job. Sign 500 contracts with one click. The batch engine runs in the background so you can keep working.',
    readTime: '2 min read',
    featured: false,
  },
  {
    category: 'Milestones',
    date: 'March 5, 2026',
    tag: 'Sanad PDF Editor',
    title: 'Sanad PDF Editor reaches 35 countries — a journey from a $9.99 idea',
    excerpt: 'When we launched Sanad at $9.99 lifetime, we didn\'t know if anyone would buy a PDF editor from an unknown team. 35 countries later, we know the answer. Here\'s the story of how we built it and what surprised us.',
    readTime: '5 min read',
    featured: false,
  },
  {
    category: 'Founder Stories',
    date: 'February 18, 2026',
    tag: 'Partner Story',
    title: 'How Dr. Hammad Lakhvi built a digital medical education platform with us',
    excerpt: 'Dr. Hammad came to us with a vision — bring medical education online in a way that preserves the rigor of traditional teaching. We built it. Here\'s how the project went from whiteboard to platform.',
    readTime: '7 min read',
    featured: false,
  },
]

export default function NewsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? NEWS
    : NEWS.filter(n => n.category === activeCategory)

  const featured = filtered.filter(n => n.featured)
  const regular = filtered.filter(n => !n.featured)

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title="Minderfly News & Updates — Product Launches, Milestones & Founder Stories"
        description="Latest news from Minderfly. Product launches, company milestones, founder partnerships, and software updates. Stay up to date with everything we're building across 100+ countries."
        canonical="https://minderfly.com/news"
      />

      {/* ── HERO ── */}
      <section style={{ padding: '80px 24px 60px', background: 'var(--grey-50)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container">
          <div style={{ maxWidth: '640px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '16px' }}>Minderfly</p>
            <h1 className="section-intro__headline" style={{ marginBottom: '20px', textAlign: 'left' }}>News & Updates</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Product launches, company milestones, founder partnerships, and stories from the Minderfly team. Stay up to date with everything we're building.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section style={{ borderBottom: '1px solid var(--border-color)', padding: '0 24px', background: 'var(--white)', position: 'sticky', top: '64px', zIndex: 50 }}>
        <div className="gfe-container">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '16px 20px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeCategory === cat ? '2px solid var(--google-blue-600)' : '2px solid transparent',
                  color: activeCategory === cat ? 'var(--google-blue-600)' : 'var(--text-secondary)',
                  fontWeight: activeCategory === cat ? '700' : '500',
                  fontSize: '14px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLES ── */}
      {featured.length > 0 && (
        <section style={{ padding: '60px 24px 0', background: 'var(--white)' }}>
          <div className="gfe-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              {featured.map((article, i) => (
                <a key={i} href="#" style={{ textDecoration: 'none', display: 'block', background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '20px', overflow: 'hidden', transition: 'box-shadow 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  {/* Color banner */}
                  <div style={{ height: '8px', background: 'linear-gradient(90deg, var(--google-blue-600), #7C3AED)' }} />
                  <div style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <span style={{ padding: '4px 12px', background: 'var(--google-blue-100)', color: 'var(--google-blue-700)', borderRadius: '100px', fontSize: '12px', fontWeight: '700' }}>{article.tag}</span>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{article.date}</span>
                    </div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px', lineHeight: '1.3' }}>{article.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px', marginBottom: '24px' }}>{article.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{article.readTime}</span>
                      <span style={{ color: 'var(--google-blue-600)', fontWeight: '600', fontSize: '14px' }}>Read more →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── REGULAR ARTICLES ── */}
      <section style={{ padding: featured.length > 0 ? '0 24px 80px' : '60px 24px 80px', background: 'var(--white)' }}>
        <div className="gfe-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {regular.map((article, i) => (
              <a key={i} href="#" style={{ textDecoration: 'none', display: 'flex', gap: '24px', padding: '28px', background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '16px', alignItems: 'flex-start', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.borderColor = 'var(--google-blue-300)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)' }}>
                {/* Category dot */}
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--grey-50)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                  {article.tag.split(' ')[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span style={{ padding: '2px 10px', background: 'var(--grey-100)', color: 'var(--text-secondary)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{article.category}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{article.date}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>· {article.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px', lineHeight: '1.3' }}>{article.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '14px' }}>{article.excerpt}</p>
                </div>
                <div style={{ color: 'var(--google-blue-600)', fontWeight: '600', fontSize: '18px', flexShrink: 0, marginTop: '4px' }}>→</div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--text-secondary)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}><Mailbox size={48} color="var(--text-secondary)" /></div>
              <p style={{ fontSize: '1.1rem' }}>No articles in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER STRIP ── */}
      <section style={{ padding: '80px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <h2 className="gfe-headline-2" style={{ marginBottom: '16px' }}>Stay in the loop</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
            Get Minderfly news, product launches, and founder stories delivered straight to your inbox. No spam, ever.
          </p>
          <div style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{ flex: 1, minWidth: '200px', padding: '14px 20px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '15px', fontFamily: 'var(--font-display)', outline: 'none', color: 'var(--text-primary)', background: 'var(--white)' }}
            />
            <button className="gfe-button gfe-button--primary" style={{ padding: '14px 24px', height: 'auto', borderRadius: '8px', flexShrink: 0 }}>
              Subscribe
            </button>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '16px' }}>
            We send updates when there's something worth sharing. Typically 1–2 emails per month.
          </p>
        </div>
      </section>

      {/* ── FOUNDER CTA ── */}
      <section style={{ padding: '80px 24px', background: 'var(--white)', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="gfe-container" style={{ maxWidth: '600px' }}>
          <h2 className="gfe-headline-2" style={{ marginBottom: '16px' }}>Have a startup idea?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
            Everything we've built, we built to prove we could build yours too. Let's talk about your idea.
          </p>
          <Link to="/contact" className="gfe-button gfe-button--primary" style={{ padding: '15px 36px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
            Book a free call →
          </Link>
        </div>
      </section>
    </div>
  )
}

import { Film, Zap, Moon, FileText, Music, ListVideo, Monitor, Download, PenTool, Package, Award, BarChart, Cloud, Image, Files, Search, Save, Eye, Briefcase, Smartphone, Ban, Puzzle, Box, Video, CircleDot, Bot, Globe, Settings, Calendar, Check, Mailbox } from 'lucide-react'

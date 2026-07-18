import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImpactSection from '../components/ImpactSection'
import FaqSection from '../components/FaqSection'
import SEOHead from '../components/SEOHead'
import { 
  Smartphone, Compass, BookOpen, Clock, Activity, 
  ShieldCheck, SmartphoneNfc, Layout, Database, Star, Check 
} from 'lucide-react'

/* ─── Muhasba App ────────────────────────────────────────────────────────────
   Nature: Premium Islamic Lifestyle & Daily Reflection App
   Hero: Dark-themed UI with beautiful gold accents and glassmorphism
   Colors: Dark mode backgrounds with rich gold highlights
───────────────────────────────────────────────────────────────────────────── */

const PLAY_STORE_URL = '#'

const features = [
  { icon: <Clock size={24} />, title: 'Real-time Prayer Tracking', desc: 'Accurate prayer times based on your precise location, featuring beautiful Adhan notifications that alert you softly.' },
  { icon: <Compass size={24} />, title: 'GPS Qibla Compass', desc: 'A highly accurate, hardware-accelerated compass that uses your device\'s location to find the exact Qibla direction, anywhere.' },
  { icon: <BookOpen size={24} />, title: 'Comprehensive Duas', desc: 'A curated collection of daily authentic Duas, categorized for every occasion, featuring clear Arabic script and translations.' },
  { icon: <SmartphoneNfc size={24} />, title: 'Digital Tasbeeh', desc: 'A sleek, distraction-free Tasbeeh counter featuring subtle haptic feedback so you can focus on your Dhikr without looking at the screen.' },
  { icon: <Activity size={24} />, title: 'Jaiza (Daily Reflection)', desc: 'Track your daily spiritual consistency. A private, secure diary to log your prayers, reflections, and personal growth.' },
]

const MUHASBA_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Muhasba',
  operatingSystem: 'Android, iOS',
  applicationCategory: 'LifestyleApplication',
  description: 'Muhasba is a premium, ad-free Islamic lifestyle app featuring real-time prayer tracking, Qibla compass, Duas, and a digital Tasbeeh.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://minderfly.com/products/muhasba',
}

export default function MuhasbaPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: '#0A0A0A', color: '#F3F4F6', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title="Muhasba App — Premium Islamic Lifestyle & Daily Reflection"
        description="Muhasba is a beautifully designed, ad-free Islamic app for real-time prayer tracking, accurate Qibla compass, Duas, and daily reflection. 100% private."
        canonical="https://minderfly.com/products/muhasba"
        schema={MUHASBA_SCHEMA}
      />

      {/* ══ HERO ── */}
      <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0) 70%)', pointerEvents: 'none' }} />

        <div className="gfe-container gfe-responsive-row" style={{ position: 'relative', zIndex: 1 }}>
          {/* Left — content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '100px', padding: '6px 16px', fontSize: '12px', fontWeight: '700', color: '#D4AF37', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '32px', width: 'fit-content' }}>
              <Smartphone size={14} style={{marginTop: '-2px'}} /> Mobile App
            </div>

            <h1 style={{ fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-1.5px', color: '#FFFFFF', marginBottom: '24px' }}>
              Your Guide for <br />
              <span style={{ color: '#D4AF37' }}>Sacred Journeys.</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#A1A1AA', lineHeight: '1.7', maxWidth: '480px', marginBottom: '40px' }}>
              A premium Islamic lifestyle and daily reflection app. Real-time prayers, accurate Qibla, digital Tasbeeh, and your personal 'Jaiza' — wrapped in a stunning, ad-free experience.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="gfe-button" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px', background: '#D4AF37', color: '#000000', fontWeight: '700', border: 'none' }}>
                Download for Free
              </a>
              <Link to="/products/muhasba/privacy" className="gfe-button" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}>
                Read Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right — Glassmorphism Phone Mockup */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 0' }}>
            <div style={{ 
              width: '300px',
              height: '620px',
              background: 'rgba(20, 20, 20, 0.6)', 
              borderRadius: '40px', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '2px solid rgba(212,175,55,0.2)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 0 20px rgba(212,175,55,0.05)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              {/* Phone Notch */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '24px', background: '#000000', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 10 }}></div>
              
              {/* App UI Mockup */}
              <div style={{ flex: 1, padding: '40px 20px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <div style={{ fontSize: '14px', color: '#D4AF37', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>Fajr</div>
                  <div style={{ fontSize: '48px', color: '#FFFFFF', fontWeight: '300', fontFamily: 'var(--font-display)', margin: '8px 0' }}>05:12</div>
                  <div style={{ fontSize: '13px', color: '#A1A1AA' }}>Next prayer in 2h 14m</div>
                </div>

                {/* Cards */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: 'rgba(212,175,55,0.1)', padding: '12px', borderRadius: '12px', color: '#D4AF37' }}><Compass size={24} /></div>
                  <div>
                    <div style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '600' }}>Qibla Direction</div>
                    <div style={{ fontSize: '13px', color: '#A1A1AA' }}>281° NW</div>
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: 'rgba(212,175,55,0.1)', padding: '12px', borderRadius: '12px', color: '#D4AF37' }}><Activity size={24} /></div>
                  <div>
                    <div style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '600' }}>Daily Jaiza</div>
                    <div style={{ fontSize: '13px', color: '#A1A1AA' }}>3/5 Prayers Logged</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Nav */}
              <div style={{ height: '60px', background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0 10px' }}>
                <div style={{ color: '#D4AF37' }}><Clock size={20} /></div>
                <div style={{ color: '#A1A1AA' }}><BookOpen size={20} /></div>
                <div style={{ color: '#A1A1AA' }}><SmartphoneNfc size={20} /></div>
                <div style={{ color: '#A1A1AA' }}><Activity size={20} /></div>
              </div>
            </div>

            {/* Floating feature badge */}
            <div style={{ position: 'absolute', bottom: '60px', right: '-20px', background: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(16px)', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 12px 32px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(212,175,55,0.2)', zIndex: 10 }}>
              <div style={{ fontSize: '24px' }}><ShieldCheck size={24} color="#D4AF37" /></div>
              <div>
                <div style={{ fontSize: '12px', color: '#A1A1AA', fontWeight: '600' }}>Privacy First</div>
                <div style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: '800' }}>100% Ad-Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE CHALLENGE ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="gfe-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', color: '#D4AF37', marginBottom: '24px' }}>
            <Star size={24} />
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: '700', color: '#FFFFFF', marginBottom: '24px' }}>The Challenge</h2>
          <p style={{ fontSize: '1.2rem', color: '#A1A1AA', lineHeight: '1.8', margin: '0 auto' }}>
            The app stores are flooded with Islamic apps, but most of them share the same flaws: cluttered interfaces, intrusive full-screen ads, and questionable privacy practices that track your location data. We set out to build something different. An all-in-one Islamic app that feels truly premium, respects your digital privacy, and provides a serene experience for daily reflection.
          </p>
        </div>
      </section>

      {/* ══ FEATURES / THE SOLUTION ═══════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: '#0A0A0A' }}>
        <div className="gfe-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px' }}>The Solution</h2>
            <p style={{ color: '#A1A1AA', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto', lineHeight: '1.6' }}>Everything you need for your daily sacred journey, built with care.</p>
          </div>
          <div className="gfe-responsive-grid">
            {features.map((f, i) => (
              <div key={i} style={{ padding: '32px', background: '#111111', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ color: '#D4AF37', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ color: '#A1A1AA', lineHeight: '1.6', fontSize: '0.95rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESIGN & TECH STACK ═══════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: '#111111', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="gfe-container" style={{ maxWidth: '1000px' }}>
          <div className="gfe-responsive-row" style={{ alignItems: 'flex-start' }}>
            
            {/* Design & Typography */}
            <div style={{ flex: 1, padding: '32px', background: '#0A0A0A', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#D4AF37', marginBottom: '20px' }}><Layout size={32} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px' }}>Design & Typography</h3>
              <p style={{ color: '#A1A1AA', lineHeight: '1.7', marginBottom: '24px' }}>
                We believe spiritual apps should feel elegant and calm. We crafted a cohesive visual hierarchy using hand-picked typography:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: '#FFFFFF' }}>Outfit:</strong> Clean, modern sans-serif for main UI components.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: '#FFFFFF' }}>Lora:</strong> Elegant serif for English headings and reflection quotes.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: '#FFFFFF' }}>Cairo:</strong> Crisp and highly legible Arabic UI text.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: '#FFFFFF' }}>Amiri:</strong> Beautiful, traditional Naskh script for Quranic text and Duas.</div>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div style={{ flex: 1, padding: '32px', background: '#0A0A0A', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#D4AF37', marginBottom: '20px' }}><Database size={32} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '16px' }}>Under the Hood</h3>
              <p style={{ color: '#A1A1AA', lineHeight: '1.7', marginBottom: '24px' }}>
                Performance and privacy were our top priorities. The app is built to run flawlessly without compromising user data.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: '#FFFFFF' }}>Flutter & Dart:</strong> A unified, cross-platform codebase ensuring smooth 60fps animations on both iOS and Android.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: '#FFFFFF' }}>Local Storage:</strong> All user data (Tasbeeh counts, Jaiza reflections) is saved entirely offline via Shared Preferences. No servers.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="#D4AF37" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: '#FFFFFF' }}>Background Services:</strong> Advanced local notification scheduling guarantees Adhan alerts trigger precisely on time without requiring constant active internet.</div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: '#0A0A0A', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="gfe-container">
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: '700', color: '#FFFFFF', marginBottom: '20px' }}>Begin your journey today.</h2>
          <p style={{ color: '#A1A1AA', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Experience the most beautiful, privacy-first Islamic app available. Free forever.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="gfe-button" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px', background: '#D4AF37', color: '#000000', fontWeight: '700', border: 'none' }}>
              Download for Android
            </a>
            <Link to="/products/muhasba/privacy" className="gfe-button" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px', background: 'transparent', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)' }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

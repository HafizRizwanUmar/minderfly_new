import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImpactSection from '../components/ImpactSection'
import FaqSection from '../components/FaqSection'
import SEOHead from '../components/SEOHead'
import { 
  Smartphone, Compass, BookOpen, Clock, Activity, 
  ShieldCheck, SmartphoneNfc, Layout, Database, Star, Check,
  MapPin, Bell, Calendar, Heart, List, Moon, Repeat, Lock
} from 'lucide-react'

/* ─── Muhasba App ────────────────────────────────────────────────────────────
   Nature: Premium Islamic Lifestyle & Daily Reflection App
   Hero: Website's standard light theme with Google-esque brand colors
───────────────────────────────────────────────────────────────────────────── */

const APK_URL = '/products/apk/muhasba.apk'

const features = [
  { icon: <Clock size={24} />, title: 'Live Prayer Times', desc: 'Automatically fetches accurate prayer times based on your GPS coordinates using the Aladhan API. Includes live countdowns to the next prayer and beautiful Adhan notifications.' },
  { icon: <Compass size={24} />, title: 'GPS Qibla Finder', desc: 'A hardware-accelerated compass that uses your device\'s location to find the exact Qibla direction from anywhere in the world, instantly and accurately.' },
  { icon: <BookOpen size={24} />, title: 'Salah & Hajj Guides', desc: 'Step-by-step illustrated instructions on how to perform daily prayers (Salah), plus a comprehensive Hajj & Umrah guide for the two sacred pilgrimages.' },
  { icon: <Calendar size={24} />, title: 'Islamic Hijri Calendar', desc: 'A full Hijri calendar viewer showing accurate Islamic dates, upcoming Islamic events, and holidays synced to the current year.' },
  { icon: <Heart size={24} />, title: 'Duas Collection', desc: 'A categorized library of authentic daily supplications (Duas) with clear Arabic script, transliteration, and full English translations.' },
  { icon: <List size={24} />, title: '99 Names of Allah', desc: 'Browse all 99 Asma ul Husna with beautiful Arabic text, accurate transliteration, and deep meaning explanations for each name.' },
  { icon: <SmartphoneNfc size={24} />, title: 'Digital Tasbeeh Counter', desc: 'A sleek, distraction-free Tasbeeh counter with haptic feedback for daily Dhikr and Zikr repetitions. No screen-looking needed.' },
  { icon: <Activity size={24} />, title: 'Jaiza (Self-Evaluation)', desc: 'A private daily spiritual journaling and self-evaluation tool to track your prayers, good deeds, and personal growth. All data stays on your device.' },
  { icon: <Repeat size={24} />, title: 'Smart To-Do List', desc: 'A daily goal and task management system that automatically rolls over any unfinished tasks to the next day, keeping you consistently on track.' },
  { icon: <Moon size={24} />, title: 'Memories & Milestones', desc: 'A personal journal to log life events, Islamic milestones, and cherished memories — your own private digital diary.' },
  { icon: <Bell size={24} />, title: 'Smart Notifications', desc: 'Local alerts for prayer times, Jummah (Friday) reminders, and daily Islamic notifications — all running offline, no internet needed.' },
  { icon: <Lock size={24} />, title: 'Pro Access via Gumroad', desc: 'Unlock premium features using Gumroad license verification. Your one-time purchase grants lifetime access with no recurring fees.' },
]

const MUHASBA_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Muhasba — Islamic Lifestyle App',
  operatingSystem: 'Android',
  applicationCategory: 'LifestyleApplication',
  description: 'Muhasba is a premium, ad-free Islamic lifestyle app featuring real-time prayer times, Qibla finder, Duas library, 99 Names of Allah, Tasbeeh counter, Hajj guide, Islamic calendar, and a daily reflection journal. Built with Flutter. 100% free, no ads, privacy-first.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  url: 'https://minderfly.com/products/muhasba',
  downloadUrl: 'https://minderfly.com/products/apk/muhasba.apk',
  featureList: 'Live Prayer Times, GPS Qibla Compass, Duas Collection, 99 Names of Allah, Tasbeeh Counter, Salah Guide, Hajj & Umrah Guide, Islamic Calendar, Daily Jaiza Journal, Smart To-Do List, Memories Journal, Prayer Notifications, Pro License via Gumroad',
  author: { '@type': 'Organization', name: 'Minderfly', url: 'https://minderfly.com' },
}

export default function MuhasbaPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title="Muhasba App — Free Islamic App with Prayer Times, Qibla, Duas & Tasbeeh"
        description="Download Muhasba APK — a free, ad-free Islamic lifestyle app for Android. Features live prayer times, GPS Qibla finder, Duas, 99 Names of Allah, Tasbeeh counter, Hajj guide, Islamic calendar, and a daily reflection journal. Built by Minderfly."
        canonical="https://minderfly.com/products/muhasba"
        schema={MUHASBA_SCHEMA}
      />

      {/* ══ HERO ── */}
      <section style={{ padding: '60px 24px', background: 'var(--white)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <div className="gfe-container gfe-responsive-row" style={{ position: 'relative', zIndex: 1, padding: '60px 24px' }}>
          
          {/* Left — content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--google-blue-600)', borderRadius: '100px', padding: '6px 16px', fontSize: '12px', fontWeight: '700', color: 'var(--white)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '32px', width: 'fit-content' }}>
              <Smartphone size={14} style={{marginTop: '-2px'}} /> Mobile App
            </div>

            <h1 style={{ fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-1.5px', color: 'var(--text-primary)', marginBottom: '24px' }}>
              Your Guide for <br />
              <span style={{ color: 'var(--google-blue-600)' }}>Sacred Journeys.</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '480px', marginBottom: '40px' }}>
              A premium Islamic lifestyle and daily reflection app. Real-time prayers, accurate Qibla, digital Tasbeeh, and your personal 'Jaiza' — wrapped in a stunning, ad-free experience.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--grey-50)', border: '1px solid var(--border-color)', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '28px', width: 'fit-content' }}>
              <span style={{ color: 'var(--google-green)', fontWeight: '700' }}>100% Free & Ad-Free</span>
              <span style={{ color: 'var(--grey-400)' }}>·</span>
              <span>Available on <strong style={{ color: 'var(--text-primary)' }}>Android</strong></span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={APK_URL} download="muhasba.apk" className="gfe-button gfe-button--primary" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                ⬇ Download APK for Android
              </a>
              <Link to="/products/muhasba/privacy" className="gfe-button gfe-button--outline" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                Read Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right — Glassmorphism Phone Mockup (Now using website's light theme colors) */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ 
              width: '300px',
              height: '620px',
              background: 'var(--white)', 
              borderRadius: '40px', 
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-2)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              {/* Phone Notch */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '24px', background: 'var(--grey-200)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 10 }}></div>
              
              {/* App UI Mockup */}
              <div style={{ flex: 1, padding: '40px 20px 20px', display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--grey-50)' }}>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--google-blue-600)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>Fajr</div>
                  <div style={{ fontSize: '48px', color: 'var(--text-primary)', fontWeight: '300', fontFamily: 'var(--font-display)', margin: '8px 0' }}>05:12</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Next prayer in 2h 14m</div>
                </div>

                {/* Cards */}
                <div style={{ background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: 'var(--shadow-1)' }}>
                  <div style={{ background: 'var(--google-blue-100)', padding: '12px', borderRadius: '12px', color: 'var(--google-blue-600)' }}><Compass size={24} /></div>
                  <div>
                    <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '600' }}>Qibla Direction</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>281° NW</div>
                  </div>
                </div>

                <div style={{ background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: 'var(--shadow-1)' }}>
                  <div style={{ background: 'var(--google-blue-100)', padding: '12px', borderRadius: '12px', color: 'var(--google-blue-600)' }}><Activity size={24} /></div>
                  <div>
                    <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '600' }}>Daily Jaiza</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>3/5 Prayers Logged</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Nav */}
              <div style={{ height: '60px', background: 'var(--white)', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0 10px' }}>
                <div style={{ color: 'var(--google-blue-600)' }}><Clock size={20} /></div>
                <div style={{ color: 'var(--grey-400)' }}><BookOpen size={20} /></div>
                <div style={{ color: 'var(--grey-400)' }}><SmartphoneNfc size={20} /></div>
                <div style={{ color: 'var(--grey-400)' }}><Activity size={20} /></div>
              </div>
            </div>

            {/* Floating feature badge */}
            <div style={{ position: 'absolute', bottom: '20px', right: '-20px', background: 'var(--white)', borderRadius: '16px', padding: '16px 24px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '24px' }}><ShieldCheck size={24} color="var(--google-green)" /></div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Privacy First</div>
                <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '800' }}>100% Ad-Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE CHALLENGE ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'var(--google-blue-100)', color: 'var(--google-blue-600)', marginBottom: '24px' }}>
            <Star size={24} />
          </div>
          <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>The Challenge</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: '0 auto' }}>
            The app stores are flooded with Islamic apps, but most of them share the same flaws: cluttered interfaces, intrusive full-screen ads, and questionable privacy practices that track your location data. We set out to build something different. An all-in-one Islamic app that feels truly premium, respects your digital privacy, and provides a serene experience for daily reflection.
          </p>
        </div>
      </section>

      {/* ══ FEATURES / THE SOLUTION ═══════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--white)' }}>
        <div className="gfe-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="gfe-headline-2" style={{ marginBottom: '16px' }}>The Solution</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto', lineHeight: '1.6' }}>Everything you need for your daily sacred journey, built with care.</p>
          </div>
          <div className="gfe-responsive-grid">
            {features.map((f, i) => (
              <div key={i} style={{ padding: '32px', background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '16px', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ color: 'var(--google-blue-600)', marginBottom: '20px', fontSize: '2.2rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DESIGN & TECH STACK ═══════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '1000px' }}>
          <div className="gfe-responsive-row" style={{ alignItems: 'flex-start' }}>
            
            {/* Design & Typography */}
            <div style={{ flex: 1, padding: '32px', background: 'var(--white)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--google-blue-600)', marginBottom: '20px' }}><Layout size={32} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>Design & Typography</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                We believe spiritual apps should feel elegant and calm. We crafted a cohesive visual hierarchy using hand-picked typography:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: 'var(--text-primary)' }}>Outfit:</strong> Clean, modern sans-serif for main UI components.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: 'var(--text-primary)' }}>Lora:</strong> Elegant serif for English headings and reflection quotes.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: 'var(--text-primary)' }}>Cairo:</strong> Crisp and highly legible Arabic UI text.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: 'var(--text-primary)' }}>Amiri:</strong> Beautiful, traditional Naskh script for Quranic text and Duas.</div>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div style={{ flex: 1, padding: '32px', background: 'var(--white)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--google-blue-600)', marginBottom: '20px' }}><Database size={32} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>Under the Hood</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                Performance and privacy were our top priorities. The app is built to run flawlessly without compromising user data.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: 'var(--text-primary)' }}>Flutter & Dart:</strong> A unified, cross-platform codebase ensuring smooth 60fps animations on both iOS and Android.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: 'var(--text-primary)' }}>Local Storage:</strong> All user data (Tasbeeh counts, Jaiza reflections) is saved entirely offline via Shared Preferences. No servers.</div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Check size={20} color="var(--google-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div><strong style={{ color: 'var(--text-primary)' }}>Background Services:</strong> Advanced local notification scheduling guarantees Adhan alerts trigger precisely on time without requiring constant active internet.</div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--white)', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container">
          <h2 className="gfe-headline-2" style={{ marginBottom: '20px' }}>Begin your journey today.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Experience the most beautiful, privacy-first Islamic app available. Free forever.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={APK_URL} download="muhasba.apk" className="gfe-button gfe-button--primary" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              ⬇ Download APK for Android
            </a>
            <Link to="/products/muhasba/privacy" className="gfe-button gfe-button--outline" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

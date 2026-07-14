import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImpactSection from '../components/ImpactSection'
import FaqSection from '../components/FaqSection'
import SEOHead from '../components/SEOHead'

/* ─── Cinemafly ─────────────────────────────────────────────────────────────
   Nature: Windows Desktop Video Player (plays what Windows 11 doesn't, beautiful UX)
   Hero: Full-width modern video player aesthetic
   Colors: Standard site palette — white, grey-50, google-blue-600
───────────────────────────────────────────────────────────────────────────── */

const STORE_URL = 'https://apps.microsoft.com/detail/9p5xw3mzlqb0?hl=en-US&gl=BS'

const features = [
  { icon: <Film size={24} />, title: 'Universal Format Support', desc: 'Plays MKV, HEVC, AV1, WebM, FLV, and 50+ other formats out of the box. No external codec packs required.' },
  { icon: <Zap size={24} />, title: 'Hardware Acceleration', desc: 'Silky smooth 4K and 8K playback that uses your GPU to save battery life on laptops and run efficiently.' },
  { icon: <Moon size={24} />, title: 'Beautiful Cinematic UI', desc: 'A sleek, borderless, dark-themed interface that fades away when you\'re watching. Built for Windows 11 with glassmorphism effects.' },
  { icon: <FileText size={24} />, title: 'Advanced Subtitles', desc: 'Auto-detects local subtitles, lets you search online directly from the player, and offers full customization of font, size, and sync delays.' },
  { icon: <Music size={24} />, title: 'Spatial Audio & EQ', desc: 'Support for surround sound formats (Dolby, DTS), volume boosting for quiet movies, and a 10-band equalizer.' },
  { icon: <ListVideo size={24} />, title: 'Chapters & Playlists', desc: 'Seamlessly navigate MKV chapters, create continuous playlists, and automatically resume where you left off.' },
]

const buildStory = [
  { year: '2022', title: 'The Frustration', body: "The default Windows 11 Media Player couldn't play HEVC without a paid extension. VLC played everything, but its UI felt stuck in 2005. We wanted both: universal compatibility and beautiful design." },
  { year: 'Early 2023', title: 'Core Engine', body: "We started by building a robust playback engine on top of powerful open-source decoders, prioritizing hardware acceleration to ensure 4K video wouldn't drain laptop batteries." },
  { year: 'Mid 2023', title: 'Designing the UI', body: "We stripped away everything distracting. We built a borderless window, added native Windows 11 acrylic/mica materials, and designed controls that smoothly fade out to let the video shine." },
  { year: 'Late 2023', title: 'Microsoft Store Launch', body: "We published Cinemafly to the Microsoft Store. Without any marketing, it hit 10,000 downloads in the first month as users searched for a player that 'just works'." },
  { year: '2024+', title: 'Pro & Polish', body: "We launched the Pro tier for $4.99 one-time. Added advanced subtitle search, spatial audio routing, and seamless chapter navigation. Now actively used in over 40 countries." },
]

const faqs = [
  { q: 'Is Cinemafly free?', a: 'Cinemafly comes with a 3-day free trial granting full Pro access. After the trial, the free tier includes basic playback with some session limitations. Pro is a one-time $4.99 purchase for unlimited lifetime access.' },
  { q: 'Do I need to download codecs?', a: 'No. Cinemafly has all necessary codecs built-in. It plays HEVC, MKV, AV1, MP4, WebM, and almost any other format right out of the box.' },
  { q: 'Is it better than VLC?', a: 'While VLC is a great tool, Cinemafly is designed specifically for modern Windows users. It offers similar format support but wraps it in a significantly more beautiful, intuitive, and native-feeling user interface.' },
  { q: 'Can it cast to my TV?', a: 'We are currently optimizing the DLNA and Chromecast casting engine, which will be available in an upcoming free update for all Pro users.' },
  { q: "What's included in the 3-day trial?", a: "The trial gives you 100% full Pro access with no restrictions. No credit card is required to start." },
]

const CINEMAFLY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Cinemafly',
  operatingSystem: 'Windows 11, Windows 10',
  applicationCategory: 'MultimediaApplication',
  description: 'Cinemafly is a beautiful video player for Windows 11 that plays MKV, HEVC, AV1, and 50+ formats with hardware acceleration. A powerful VLC alternative with a modern UI.',
  offers: { '@type': 'Offer', price: '4.99', priceCurrency: 'USD' },
  url: 'https://minderfly.com/products/cinemafly',
}

export default function CinemaflyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title="Cinemafly — Video Player for Windows 11 | MKV, HEVC, AV1 Support"
        description="Play any video on Windows 11. Cinemafly plays MKV, HEVC, AV1 and 50+ formats with GPU hardware acceleration. Beautiful cinematic UI. Better than VLC. 3-day free trial, Pro $4.99."
        canonical="https://minderfly.com/products/cinemafly"
        schema={CINEMAFLY_SCHEMA}
      />

      {/* ══ HERO ── */}
      <section style={{ padding: '60px 24px', background: 'var(--white)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <div className="gfe-container gfe-responsive-row" style={{ position: 'relative', zIndex: 1, padding: '60px 24px' }}>
          
          {/* Left — content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--text-primary)', borderRadius: '100px', padding: '6px 16px', fontSize: '12px', fontWeight: '700', color: 'var(--white)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '32px', width: 'fit-content' }}>
              <Monitor size={14} style={{marginTop: '-2px'}} /> Windows Desktop App
            </div>

            <h1 style={{ fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-1.5px', color: 'var(--text-primary)', marginBottom: '24px' }}>
              Plays anything.<br />
              <span>Looks beautiful.</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '480px', marginBottom: '40px' }}>
              The video player Windows 11 deserves. Plays MKV, HEVC, and 50+ formats out of the box with zero codec packs. Designed to be powerful, hardware-accelerated, and gorgeous.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--grey-50)', border: '1px solid var(--border-color)', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '28px', width: 'fit-content' }}>
              <span style={{ color: 'var(--google-green)', fontWeight: '700' }}>Free 3-day trial</span>
              <span style={{ color: 'var(--grey-400)' }}>·</span>
              <span>Pro <strong style={{ color: 'var(--text-primary)' }}>$4.99</strong> one-time</span>
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

          {/* Right — CSS Mockup of the Player */}
          <div style={{ position: 'relative' }}>
            {/* The Player Window Mockup */}
            <div style={{ 
              background: '#0a0a0c', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              boxShadow: '0 24px 80px rgba(0,0,0,0.15)',
              border: '1px solid var(--border-color)',
              aspectRatio: '16/9',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Window Controls */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)', zIndex: 10, display: 'flex', justifyContent: 'flex-end', padding: '12px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                </div>
              </div>

              {/* Video Area */}
              <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 {/* Fake video poster/gradient */}
                 <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a0c 100%)' }}></div>
                 {/* Play Button Center */}
                 <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                    <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid var(--white)', marginLeft: '6px' }}></div>
                 </div>
              </div>

              {/* Player Controls Bar */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(10,10,12,0.85)', backdropFilter: 'blur(16px)', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Progress bar */}
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '45%', background: 'var(--google-blue-600)', borderRadius: '2px' }} />
                  <div style={{ position: 'absolute', left: '45%', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', background: 'var(--white)', borderRadius: '50%', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} />
                </div>
                {/* Icons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                     <div style={{ width: '16px', height: '16px', background: 'rgba(255,255,255,0.8)', borderRadius: '2px' }}></div> {/* Fake play */}
                     <div style={{ width: '16px', height: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}></div> {/* Fake skip */}
                     <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontFamily: 'monospace' }}>24:12 / 1:52:08</span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                     <div style={{ width: '16px', height: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}></div>
                     <div style={{ width: '16px', height: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating feature badge */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--white)', borderRadius: '16px', padding: '16px 24px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '24px' }}><Zap size={24} color="#EF4444" /></div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Hardware Accelerated</div>
                <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '800' }}>4K HEVC Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BUILD STORY — Timeline ═════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '12px' }}>The story behind the product</p>
            <h2 className="gfe-headline-2">How we built Cinemafly</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '16px', lineHeight: '1.7' }}>From a playback frustration to a 10,000-download Windows app.</p>
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
            <h2 className="gfe-headline-2">A player that respects your media</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '560px', margin: '16px auto 0', lineHeight: '1.6' }}>Six reasons why Cinemafly is replacing the default player.</p>
          </div>
          <div className="gfe-responsive-grid">
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

      {/* ── PRICING ── */}
      <section style={{ padding: '80px 24px', background: 'var(--grey-50)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="gfe-headline-2">Simple, transparent pricing</h2>
            <p className="gfe-body" style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>Start with a full 3-day trial. No credit card required.</p>
          </div>

          <div className="gfe-responsive-grid">
            {/* Free Tier */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '40px 32px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>Free</div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: 1, marginBottom: '8px' }}>$0</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '32px' }}>3-day full trial, then free tier</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Basic format playback', 'Standard UI features', 'Local subtitle loading', 'Full Pro access for 3 days'].map((item, i) => (
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
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--white)', lineHeight: 1, marginBottom: '8px' }}>$4.99</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '32px' }}>One-time payment</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Unlimited format support (MKV, HEVC)', 'Hardware acceleration', 'Advanced subtitle search', 'Spatial audio & equalizer', '3-day full trial included'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                    <span style={{ color: '#FBBC04', fontWeight: '700' }}><Check size={16} /></span> {item}
                  </li>
                ))}
              </ul>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px', borderRadius: '8px', background: 'var(--white)', color: 'var(--google-blue-600)', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                Get Pro — $4.99
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS — reuses homepage ImpactSection styling ═════════════════════ */}
      <ImpactSection />

      {/* ══ FAQ — reuses homepage FaqSection styling ══════════════════════════ */}
      <FaqSection faqs={faqs} title="Cinemafly — FAQ" subtitle="Everything you need to know before downloading." />

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--grey-50)', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div className="gfe-container">
          <h2 className="gfe-headline-2" style={{ marginBottom: '20px' }}>Your media, played perfectly.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Join the community replacing their default Windows player. 3-day full trial, then free — or Pro for just $4.99.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="gfe-button gfe-button--primary" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
              <Download size={18} /> Download Free on Windows
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

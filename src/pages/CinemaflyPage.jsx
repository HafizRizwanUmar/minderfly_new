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
  { icon: <Film size={24} />, title: 'Universal Format Support', desc: 'Plays MKV, MP4, AVI, MOV, WMV, FLV, WebM, HEVC, AV1, and 50+ other formats out of the box. No external codec packs required.' },
  { icon: <Video size={24} />, title: 'Native HEVC (H.265) + 4K/UHD', desc: 'Built-in H.265 decoding with full 4K and Ultra HD support — no paid Microsoft Store codec add-ons, no third-party codec packs, ever.' },
  { icon: <Zap size={24} />, title: 'Hardware Acceleration', desc: 'Silky smooth 4K and 8K playback that uses your GPU to save battery life on laptops and run efficiently, even on modest hardware.' },
  { icon: <Moon size={24} />, title: 'Beautiful Cinematic UI', desc: 'A sleek, borderless, dark-themed interface that fades away when you\'re watching. Built for Windows 11 with glassmorphism effects.' },
  { icon: <Eye size={24} />, title: 'Cinema Mode', desc: 'A refined, distraction-free viewing mode with auto-hide controls that fade out smoothly, recreating the focus of a real movie theater.' },
  { icon: <FileText size={24} />, title: 'Advanced Subtitles', desc: 'Auto-detects local subtitles, lets you search online directly from the player, and offers full customization of font, size, and sync delays.' },
  { icon: <Music size={24} />, title: 'Dolby Atmos & DTS-HD Passthrough', desc: 'Automatic bitstream passthrough to your AV receiver or soundbar, plus a 10-band equalizer and volume boosting for quiet movies.' },
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
  { q: 'Is Cinemafly free to try?', a: 'Yes. The 3-day trial gives you full, unrestricted Pro access — every feature, no credit card required. After the trial you can continue with the free tier (basic playback with session limits) or upgrade to Pro with a one-time $4.99 payment for lifetime unlimited access. No subscriptions, ever.' },
  { q: 'Do I need to install codecs separately?', a: 'No — and this is one of the biggest advantages over alternatives. Cinemafly ships with every codec pre-installed: HEVC/H.265, AV1, MKV, VP9, MP4, WebM, FLAC, and more. Install once, play anything. No hunting for codec packs, no error messages.' },
  { q: 'How does it compare to VLC or Windows Media Player?', a: "VLC is powerful but built for technicians. Windows Media Player is outdated. Cinemafly is built specifically for modern Windows 11 users who want world-class format support wrapped in a beautiful, polished interface. You get the same format breadth as VLC with none of the visual clutter, plus features like watch history, subtitle sync, and playlist management that feel native to Windows." },
  { q: 'Is the $4.99 price really one-time?', a: 'Yes — one payment, lifetime access. No monthly subscription. No annual renewal. When you buy Pro you own it. All future updates within the Pro version are included at no extra cost. We believe great software should be affordable and permanent.' },
  { q: 'What happens after the 3-day trial?', a: "After your trial ends, you're moved to the free tier automatically — no charge, no action required. The free tier lets you continue using Cinemafly for everyday playback with a few limitations. Upgrade to Pro whenever you're ready, directly from the app or via the Microsoft Store." },
  { q: 'Does Cinemafly play HEVC (H.265) videos from my iPhone?', a: "Yes. HEVC decoding is built directly into Cinemafly, so .mov and .mp4 files recorded on iPhone, Android, or any modern camera or drone open and play immediately — no Microsoft Store HEVC extension purchase and no third-party codec pack needed." },
  { q: 'Can Cinemafly play 4K and Ultra HD (UHD) video smoothly?', a: "Yes. Cinemafly is built to handle true 4K/UHD (3840×2160) playback with accurate HDR color and responsive seeking, using hardware acceleration so even laptops with integrated graphics can play 4K HEVC content without stutter or dropped frames." },
  { q: 'Which file formats does Cinemafly support?', a: "Cinemafly supports MKV, MP4, AVI, MOV, WMV, FLV, WEBM, and 50+ other container and codec combinations — including HEVC, AV1, and VP9 — so a single install covers your entire media library, old and new." },
  { q: 'Does Cinemafly support Dolby Atmos and DTS-HD passthrough?', a: "Yes. When a compatible AV receiver or Atmos-capable soundbar is connected, Cinemafly automatically passes through the original Dolby Atmos or DTS-HD Master Audio bitstream instead of downmixing it, so your home theater system decodes full, uncompromised surround sound." },
  { q: 'Is Cinemafly good for low-end or budget laptops?', a: "Yes. Hardware-accelerated decoding offloads the heavy lifting to your GPU's video engine instead of the CPU, so Cinemafly runs smoothly on budget and mid-range hardware, with lower battery drain and less fan noise than software-only players." },
  { q: 'Does Cinemafly collect my viewing data or upload my videos?', a: "No. Cinemafly is an offline-first, privacy-focused desktop app. Your video files stay on your device, there's no account requirement, and there's no background telemetry tracking what or how you watch." },
]

const CINEMAFLY_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Cinemafly',
  operatingSystem: 'Windows 11, Windows 10',
  applicationCategory: 'MultimediaApplication',
  description: 'Cinemafly is a beautiful video player for Windows 11 that plays MKV, HEVC, AV1, and 50+ formats with hardware acceleration, native 4K/UHD playback, and Dolby Atmos & DTS-HD passthrough. A powerful VLC alternative with a modern UI.',
  offers: { '@type': 'Offer', price: '4.99', priceCurrency: 'USD' },
  url: 'https://minderfly.com/products/cinemafly',
  featureList: [
    'Native HEVC (H.265) decoding',
    '4K and Ultra HD (UHD) video playback',
    'Support for MKV, MP4, AVI, MOV, WMV, FLV, WEBM and 50+ formats',
    'Modern dark-themed user interface',
    'Hardware accelerated playback (Intel Quick Sync, NVIDIA NVDEC, AMD)',
    'Cinema Mode — distraction-free auto-hide controls',
    'Lightweight, offline, and privacy-focused',
    'Automatic Dolby Atmos and DTS-HD Master Audio passthrough',
  ],
}

export default function CinemaflyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title="Cinemafly — Best 4K HEVC Video Player for Windows 11 | MKV, AV1, Dolby Atmos"
        description="Cinemafly is a beautiful Windows media player with native HEVC (H.265) decoding, 4K/UHD playback, and support for MKV, MP4, AVI, MOV, WMV, FLV, WEBM, AV1 and more — no codec packs needed. Hardware-accelerated, dark-themed Cinema Mode, Dolby Atmos & DTS-HD passthrough. One-time $4.99 lifetime — 3-day free trial."
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
              <ms-store-badge 
                productid="9p5xw3mzlqb0" 
                productname="Cinemafly - HEVC & 4K Video Player" 
                window-mode="direct" 
                theme="auto" 
                size="large" 
                language="en-us" 
                animation="on"
              ></ms-store-badge>
              <Link to="/contact" className="gfe-button gfe-button--outline" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                Build something like this
              </Link>
            </div>
          </div>

          {/* Right — Screenshots */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: '-16px', borderRadius: '24px', filter: 'blur(40px)', opacity: 0.15, background: 'var(--google-blue-600)' }} />
              <div style={{ position: 'relative', display: 'flex', width: '110%', marginLeft: '5%' }}>
                <img src="/products/screenshot/cinemafly/cinemafly1.png" alt="Cinemafly Window" style={{ position: 'relative', zIndex: 1, borderRadius: '16px', boxShadow: 'var(--shadow-2)', width: '60%', objectFit: 'cover', border: '1px solid var(--border-color)', transform: 'translateY(-10px)' }} />
                <img src="/products/screenshot/cinemafly/cinemafly2.png" alt="Cinemafly Playback" style={{ position: 'relative', zIndex: 2, borderRadius: '16px', boxShadow: '0 24px 60px rgba(0,0,0,0.15)', width: '60%', objectFit: 'cover', border: '1px solid var(--border-color)', marginLeft: '-20%', transform: 'translateY(30px)' }} />
              </div>
            </div>
            
            {/* Floating feature badge */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--white)', borderRadius: '16px', padding: '16px 24px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--border-color)', zIndex: 10, whiteSpace: 'nowrap' }}>
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

      {/* ══ IN-DEPTH GUIDE — long-form SEO content ═══════════════════════════ */}
      <section style={{ padding: '100px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '12px' }}>The complete guide</p>
            <h2 className="gfe-headline-2">Everything Cinemafly does — explained</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '16px', lineHeight: '1.7' }}>
              A closer look at why Cinemafly is one of the best free HEVC and 4K video players for Windows 11 and Windows 10.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Native HEVC (H.265) playback — no paid codec required</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem' }}>
                Most iPhone videos, 4K Blu-ray rips, and drone footage are encoded in HEVC (H.265) — a format Windows 11's default player still can't open without a separate paid Microsoft Store extension. Cinemafly ships with HEVC decoding built directly into the app, so <strong>.mp4</strong> and <strong>.mov</strong> files recorded on any modern iPhone or Android device just open and play, with no codec pack, no browser download, and no hidden fee.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>4K and Ultra HD (UHD) video playback</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem' }}>
                Cinemafly decodes and renders true 3840×2160 4K and Ultra HD content smoothly, with accurate HDR10 color handling and responsive seeking even on large, multi-gigabyte files. Combined with hardware acceleration, 4K HEVC movies play without dropped frames — on both high-end desktops and everyday laptops.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>MKV, MP4, AVI, MOV, WMV, FLV, WEBM — one player for every format</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem' }}>
                Real media libraries are messy — old AVI home videos, MOV clips from an iPhone, MKV rips with multiple audio and subtitle tracks, and the occasional legacy WMV or FLV file. Cinemafly opens all of it through a single, consistent interface, so you never have to keep three different players installed just to cover your whole collection.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Modern, immersive dark-themed interface</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem' }}>
                A dark UI isn't just a style choice — it keeps the video itself the brightest thing on screen, reduces eye strain in the dim rooms most people actually watch movies in, and matches the dark interfaces already standard across every major streaming platform.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Hardware accelerated playback for smooth performance</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem' }}>
                Cinemafly automatically offloads decoding to your GPU's dedicated video engine — Intel Quick Sync, NVIDIA NVDEC, or AMD's decode hardware — instead of leaning on the CPU. The result: lower battery drain, less fan noise, and smooth playback even on budget and mid-range laptops.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Cinema Mode: distraction-free, auto-hide controls</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem' }}>
                Playback controls fade away the moment you stop needing them and reappear instantly when you move your mouse — recreating the focused, lights-down feeling of an actual movie theater, without ever getting in the way.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Lightweight, offline, and privacy-focused by design</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem' }}>
                Cinemafly is a local, offline-first app. Your video files and viewing habits never get uploaded anywhere — there's no cloud sync, no account requirement, and no background telemetry. It's a small install that starts fast and stays out of your way.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Automatic Dolby Atmos and DTS-HD passthrough</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.98rem' }}>
                When a capable AV receiver or Atmos soundbar is connected, Cinemafly passes the original, undecoded audio bitstream straight through instead of quietly downmixing it to stereo — so your surround sound hardware renders full object-based Atmos audio and lossless DTS-HD Master Audio exactly as mastered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ padding: '80px 24px', background: 'var(--white)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container">
          <h2 className="gfe-headline-2" style={{ textAlign: 'center', marginBottom: '48px' }}>Interface & Screenshots</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              '/products/screenshot/cinemafly/cinemafly1.png',
              '/products/screenshot/cinemafly/cinemafly2.png',
              '/products/screenshot/cinemafly/cinemafly3.png'
            ].map((imgUrl, idx) => (
              <div key={idx} style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-1)' }}>
                <img src={imgUrl} alt={`Cinemafly screenshot ${idx + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
            <ms-store-badge 
              productid="9p5xw3mzlqb0" 
              productname="Cinemafly - HEVC & 4K Video Player" 
              window-mode="direct" 
              theme="auto" 
              size="large" 
              language="en-us" 
              animation="on"
            ></ms-store-badge>
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

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

/* ─── How We Build ─────────────────────────────────────────────────────────
   Shows founders exactly how Minderfly builds each type of product:
   Desktop Apps, Mobile Apps, Web Apps, Browser Extensions
───────────────────────────────────────────────────────────────────────────── */

const platforms = [
  {
    id: 'desktop',
    icon: <Monitor size={24} />,
    type: 'Desktop Application',
    color: 'var(--google-blue-600)',
    colorLight: 'var(--google-blue-100)',
    colorDark: 'var(--google-blue-700)',
    tagline: 'Powerful, native, offline-first.',
    description: 'Desktop applications live on your users\' machines — fast, capable, and independent of internet connectivity. They can leverage the full power of the operating system: native notifications, file system access, hardware integration, and memory-intensive processing.',
    whenToChoose: [
      'Your app needs to work fully offline',
      'You need deep OS integration (file system, hardware)',
      'Performance is critical (video processing, large datasets)',
      'Your users are power users who stay on one device',
      'You want to distribute on Microsoft Store or Mac App Store',
    ],
    ourProcess: [
      { step: '01', title: 'Platform Discovery', body: 'We identify your target OS (Windows/Mac/Linux), map out the native features you need, and choose the right framework — WPF, WinUI 3, Electron, or Tauri — based on your performance and distribution requirements.' },
      { step: '02', title: 'UX Design for Desktop', body: 'Desktop UX is different from web. We design for keyboard shortcuts, window management, multi-monitor setups, and system theme integration. Every interaction pattern is native and familiar.' },
      { step: '03', title: 'Build & Offline Architecture', body: 'We architect your data layer for offline-first operation — local SQLite or LevelDB, sync engine for cloud backup, and conflict resolution. Your app works perfectly with or without internet.' },
      { step: '04', title: 'Store Submission', body: 'We handle the Microsoft Store / Mac App Store submission process — signing certificates, privacy policies, compliance requirements, and automated update delivery.' },
    ],
    techStack: ['Windows: WinUI 3, WPF, .NET', 'Cross-platform: Electron, Tauri', 'Database: SQLite, LevelDB', 'Distribution: Microsoft Store, Mac App Store', 'CI/CD: GitHub Actions, Fastlane'],
    timeline: '10–18 weeks to launch',
    examples: ['Cinemafly', 'DocSigner', 'Sanad PDF Editor'],
    exampleLinks: ['/products/cinemafly', '/products/docsigner', '/products/sanad-pdf-editor'],
  },
  {
    id: 'mobile',
    icon: <Smartphone size={24} />,
    type: 'Mobile Application',
    color: 'var(--google-green)',
    colorLight: 'var(--google-green-100)',
    colorDark: 'var(--google-green-700)',
    tagline: 'Native on iOS and Android — built once with Flutter.',
    description: 'Mobile apps reach users where they are — in their pockets, 24/7. We build with Flutter so your app runs natively on both iOS and Android from a single codebase, saving time and budget without sacrificing quality.',
    whenToChoose: [
      'Your users are primarily on smartphones',
      'You need push notifications, GPS, camera, or biometrics',
      'You want to be discoverable on App Store / Google Play',
      'Your product has a social or real-time component',
      'You want to reach both iOS and Android efficiently',
    ],
    ourProcess: [
      { step: '01', title: 'Mobile UX Research', body: 'We study your target users\' mobile behaviour — gestures, thumb zones, session duration. We design for one-handed use, small screens, and the interrupted attention spans of mobile contexts.' },
      { step: '02', title: 'Flutter Development', body: 'We build with Flutter for true native performance on both platforms. One codebase, two stores. We integrate native APIs — camera, GPS, biometrics, push notifications — through Flutter\'s platform channel system.' },
      { step: '03', title: 'Backend & Real-time', body: 'Mobile apps need reliable backends. We build with Firebase, Supabase, or custom APIs — handling authentication, real-time sync, offline data, and push notification infrastructure.' },
      { step: '04', title: 'App Store Launch', body: 'We manage both App Store (Apple) and Google Play submissions — screenshots, metadata, review compliance, and staged rollout to ensure a smooth launch.' },
    ],
    techStack: ['Framework: Flutter (Dart)', 'Backend: Firebase, Supabase, Node.js', 'Push: FCM, APNs', 'Auth: Firebase Auth, Supabase Auth', 'Distribution: App Store, Google Play'],
    timeline: '12–20 weeks to launch',
    examples: ['InklessLMS Mobile', 'Custom Founder Projects'],
    exampleLinks: ['/products/inkless-lms', '/contact'],
  },
  {
    id: 'web',
    icon: <Globe size={24} />,
    type: 'Web Application',
    color: '#7C3AED',
    colorLight: '#EDE9FE',
    colorDark: '#6D28D9',
    tagline: 'Global reach. Zero installation. Infinite scale.',
    description: 'Web applications run in the browser — accessible to anyone with a URL, on any device. They\'re the fastest way to reach a global audience, iterate based on feedback, and scale without friction. Perfect for SaaS, marketplaces, dashboards, and platforms.',
    whenToChoose: [
      'You want maximum reach without installation barriers',
      'Your product is a SaaS, marketplace, or platform',
      'You need real-time collaboration features',
      'You\'re targeting businesses that need browser-based access',
      'You want to iterate fast and ship weekly',
    ],
    ourProcess: [
      { step: '01', title: 'Architecture Planning', body: 'We choose your stack based on your needs — Next.js for SEO-critical apps, React + Vite for SPAs, or a headless approach for content-heavy products. We design for performance from day one.' },
      { step: '02', title: 'Backend & Database', body: 'We build robust APIs with Node.js, FastAPI, or serverless functions. Database selection depends on your data model — PostgreSQL for relational, MongoDB for flexible schemas, Redis for real-time.' },
      { step: '03', title: 'Scalable Infrastructure', body: 'We deploy on AWS, GCP, or Vercel with auto-scaling, CDN delivery, and monitoring built in. Your app handles 100 users or 100,000 users without architecture changes.' },
      { step: '04', title: 'Launch & Iteration', body: 'Web apps launch without app store delays. We ship to production, monitor in real-time, and iterate weekly based on user analytics and feedback.' },
    ],
    techStack: ['Frontend: React, Next.js, Vite', 'Backend: Node.js, FastAPI, Serverless', 'Database: PostgreSQL, MongoDB, Redis', 'Infra: AWS, GCP, Vercel, Cloudflare', 'Auth: Supabase, Auth0, custom JWT'],
    timeline: '8–16 weeks to launch',
    examples: ['InklessLMS', 'Custom Founder Projects'],
    exampleLinks: ['/products/inkless-lms', '/contact'],
  },
  {
    id: 'extension',
    icon: <Puzzle size={24} />,
    type: 'Browser Extension',
    color: '#D97706',
    colorLight: '#FEF3C7',
    colorDark: '#B45309',
    tagline: 'Lives in the browser. Works everywhere.',
    description: 'Browser extensions sit directly in the user\'s workflow — always one click away, injecting into any webpage, intercepting requests, and adding superpowers to the browser itself. They\'re surprisingly powerful and often underestimated as a distribution channel.',
    whenToChoose: [
      'Your product enhances existing websites or tools',
      'You need to modify webpage content or behaviour',
      'You want a persistent UI in the browser toolbar',
      'Your audience spends hours in the browser daily',
      'Chrome Web Store gives you built-in distribution',
    ],
    ourProcess: [
      { step: '01', title: 'Extension Architecture', body: 'We design around Chrome\'s Manifest V3 — background service workers, content scripts, popup UIs, and side panels. We plan permissions carefully to build user trust and pass Chrome Web Store review.' },
      { step: '02', title: 'Build & Injection', body: 'Content scripts allow your extension to read and modify any webpage. We build injection logic carefully — efficient, non-intrusive, and compatible with React/vanilla JS environments.' },
      { step: '03', title: 'Cross-browser Support', body: 'Most extensions work in both Chrome and Edge with minimal changes. We build with compatibility in mind so you can reach both audiences from day one.' },
      { step: '04', title: 'Web Store Publishing', body: 'We handle Chrome Web Store submission — privacy policy, screenshots, permission justifications, and compliance review. Extensions can be free, freemium, or paid via Chrome\'s built-in payments.' },
    ],
    techStack: ['API: Chrome Extensions Manifest V3', 'UI: React, Vanilla JS', 'Storage: chrome.storage, IndexedDB', 'Distribution: Chrome Web Store', 'Backend: Optional — REST API or Firebase'],
    timeline: '4–10 weeks to launch',
    examples: ['Flutter Web Emulator', 'Minimal Desk Theme', 'Pastel Aurora', 'Lunar Leap Theme'],
    exampleLinks: ['/products/flutter-web-emulator', '/products/minimal-desk-theme', '/products/pastel-aurora', '/products/lunar-leap-theme'],
  },
]

export default function HowWeBuildPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title="How We Build Startups — Desktop, Mobile, Web & Extension Development | Minderfly"
        description="See exactly how Minderfly builds startup products from idea to global scale. We build Windows desktop apps, iOS & Android apps, web apps, and VS Code extensions. End-to-end, 100+ countries."
        canonical="https://minderfly.com/how-we-build"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How Minderfly Builds Startup Products',
          description: 'Our end-to-end process for turning a startup idea into a real, globally scaled software product.',
          step: [
            { '@type': 'HowToStep', name: 'Share Your Vision', text: 'Tell us your idea. We define your market, users, and product strategy.' },
            { '@type': 'HowToStep', name: 'Design & Prototype', text: 'Our designers create beautiful interfaces before a single line of code.' },
            { '@type': 'HowToStep', name: 'Build & Ship', text: 'Expert engineers build fast, iterate on feedback, ship to production.' },
            { '@type': 'HowToStep', name: 'Scale Globally', text: 'We handle localization, compliance, and infrastructure for global markets.' },
          ],
        }}
      />

      {/* ── HERO ── */}
      <section style={{ padding: '100px 24px 80px', background: 'var(--grey-50)', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="gfe-container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--google-blue-100)', borderRadius: '100px', padding: '6px 18px', fontSize: '12px', fontWeight: '700', color: 'var(--google-blue-700)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '32px' }}>
            Behind the build
          </div>
          <h1 className="section-intro__headline" style={{ marginBottom: '24px' }}>
            How we build your product
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '640px', margin: '0 auto 40px' }}>
            Every startup idea has a right form — desktop, mobile, web, or extension. Here's exactly how we approach each one, what you should expect, and what we've already shipped.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {platforms.map(p => (
              <a key={p.id} href={`#${p.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '100px', border: '1px solid var(--border-color)', background: 'var(--white)', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-1)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                {p.icon} {p.type}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM SECTIONS ── */}
      {platforms.map((p, pi) => (
        <section key={p.id} id={p.id} style={{ padding: '100px 24px', background: pi % 2 === 0 ? 'var(--white)' : 'var(--grey-50)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="gfe-container">

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '64px', flexWrap: 'wrap' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: p.colorLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
                {p.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: p.color, marginBottom: '8px' }}>{p.type}</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: '1.1' }}>{p.tagline}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '720px' }}>{p.description}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px' }}>

              {/* When to choose */}
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: p.colorLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}><Check size={16} /></span>
                  When to choose this
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {p.whenToChoose.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.5' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.color, marginTop: '8px', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack + timeline */}
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: p.colorLight, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}><Settings size={18} /></span>
                  Tech stack
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {p.techStack.map((tech, i) => (
                    <span key={i} style={{ padding: '6px 12px', background: p.colorLight, color: p.colorDark, borderRadius: '100px', fontSize: '13px', fontWeight: '500' }}>{tech}</span>
                  ))}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'var(--white)', border: `1px solid ${p.color}`, borderRadius: '12px' }}>
                  <span style={{ fontSize: '1.2rem' }}><Calendar size={18} /></span>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Typical timeline</div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>{p.timeline}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our process steps */}
            <div style={{ marginTop: '64px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '32px' }}>Our process</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {p.ourProcess.map((step, i) => (
                  <div key={i} style={{ padding: '28px', background: pi % 2 === 0 ? 'var(--grey-50)' : 'var(--white)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: '800', color: p.color, marginBottom: '12px', lineHeight: 1 }}>{step.step}</div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>{step.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples from our portfolio */}
            <div style={{ marginTop: '48px', padding: '28px', background: p.colorLight, borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: p.colorDark, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>From our portfolio</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {p.examples.map((ex, i) => (
                    <Link key={i} to={p.exampleLinks[i]} style={{ padding: '6px 14px', background: 'var(--white)', border: `1px solid ${p.color}`, borderRadius: '100px', fontSize: '13px', fontWeight: '600', color: p.color, textDecoration: 'none' }}>
                      {ex}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="gfe-button gfe-button--primary" style={{ padding: '12px 24px', height: 'auto', borderRadius: '8px', flexShrink: 0 }}>
                Build a {p.type} →
              </Link>
            </div>

          </div>
        </section>
      ))}

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: '100px 24px', background: 'var(--google-blue-600)', textAlign: 'center' }}>
        <div className="gfe-container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: 'var(--white)', marginBottom: '20px' }}>
            Know what you want to build?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '40px' }}>
            Let's talk. We'll tell you exactly which platform fits your idea, your users, and your budget — in a free 30-minute call.
          </p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--white)', color: 'var(--google-blue-600)', padding: '16px 40px', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none' }}>
            Book a free discovery call →
          </Link>
        </div>
      </section>
    </div>
  )
}

import { Film, Zap, Moon, FileText, Music, ListVideo, Monitor, Download, PenTool, Package, Award, BarChart, Cloud, Image, Files, Search, Save, Eye, Briefcase, Smartphone, Ban, Puzzle, Box, Video, CircleDot, Bot, Globe, Settings, Calendar, Check, Mailbox } from 'lucide-react'

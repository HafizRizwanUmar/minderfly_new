import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImpactSection from '../components/ImpactSection'
import FaqSection from '../components/FaqSection'
import SEOHead from '../components/SEOHead'

// ─── Data ────────────────────────────────────────────────────────────────────

const BUILD_STORY = [
  {
    year: '2023',
    title: 'Developer pain',
    body: "Every Flutter dev knows the Alt+Tab loop — edit in VS Code, switch to Chrome, wait for refresh, find bug, switch back. It kills flow state.",
  },
  {
    year: 'Early 2023',
    title: 'Exploration',
    body: "Explored VS Code WebView API. Turns out you can embed a live web content panel inside the editor — we just had to wire it to Flutter's local dev server.",
  },
  {
    year: 'Mid 2023',
    title: 'First build',
    body: "Built the core extension in 3 weeks. The resizable viewport was the hardest part — making it feel native to VS Code's split pane system.",
  },
  {
    year: 'Late 2023',
    title: 'Marketplace launch',
    body: "Published to VS Code Marketplace. Flutter community found it immediately. 2,000 installs in the first month without any marketing.",
  },
  {
    year: '2024+',
    title: 'Device simulation',
    body: "Added iPhone/iPad/Pixel device frame simulation, hot reload sync, and zero-config startup. Now used by developers in 25+ countries.",
  },
]

const FEATURES = [
  {
    icon: <Eye size={24} />,
    title: 'Live Inline Preview',
    desc: 'Your Flutter web app renders in a VS Code WebView panel. Interact with it exactly as you would in a real browser — without leaving the editor.',
  },
  {
    icon: '<Zap size={24} color="#EF4444" />',
    title: 'Hot Reload Support',
    desc: 'Hit Ctrl+S and watch your UI update instantly in the preview panel. No state loss, no manual refresh.',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Resizable Viewport',
    desc: 'Drag the VS Code split pane to test responsive layouts. Watch your UI adapt from mobile to desktop in real time.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Device Simulation',
    desc: 'Toggle iPhone, iPad, and Pixel device profiles to force specific viewport dimensions.',
  },
  {
    icon: <Ban size={24} />,
    title: 'No Browser Required',
    desc: 'Save RAM and battery. No need to keep Chrome running just to preview your Flutter web app.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Zero Configuration',
    desc: "Install the extension, open a Flutter web project, run 'Flutter Web Emulator: Start'. Done. No JSON configs.",
  },
]

const FREE_FEATURES = [
  '30-min preview sessions',
  'Basic hot reload',
  'Standard viewport',
]

const PRO_FEATURES = [
  'Unlimited session time',
  'All device simulations',
  'Full hot reload',
  'Priority support',
  '3-day trial included',
]

const FAQS = [
  {
    q: 'How do I install Flutter Web Emulator?',
    a: "Open VS Code, go to the Extensions panel (Ctrl+Shift+X), and search 'Flutter Web Emulator'. Click Install — that's it. Alternatively, visit the VS Code Marketplace page and click the green Install button, which will open directly in your editor. The extension is live in your editor within 30 seconds.",
  },
  {
    q: 'Does it need any configuration or setup?',
    a: "Zero configuration. Open any Flutter web project in VS Code, open the Command Palette (Ctrl+Shift+P), and run 'Flutter Web Emulator: Start'. The extension automatically detects your Flutter SDK path, starts your dev server, and opens a live preview panel inside VS Code. No JSON configs, no port setup, no manual steps.",
  },
  {
    q: 'Is the $1 lifetime price real?',
    a: "Yes — $1 once, forever. We set the price this way intentionally. Developer tools should be accessible to every developer, not just those at well-funded companies. One dollar buys you permanent, unlimited access. No subscription, no annual renewal, no usage caps.",
  },
  {
    q: 'Does Hot Reload actually work inside the panel?',
    a: "Yes — and this is the core value of the extension. Flutter Web Emulator hooks directly into Flutter's existing hot reload mechanism. Save your file (Ctrl+S) and you'll see changes reflected in the in-editor panel in under one second. State is preserved between hot reloads, exactly as it is in Flutter's native hot reload behavior.",
  },
  {
    q: "What's the difference between the trial and the free tier?",
    a: "The 3-day trial gives you full, unrestricted Pro access — unlimited session time, all device simulation profiles, full hot reload. No credit card needed. After 3 days, the free tier limits preview sessions to 30 minutes before requiring a manual restart. Pro removes all time limits for $1 one-time.",
  },
]

// ─── VS Code Mockup ───────────────────────────────────────────────────────────

function VSCodeMockup() {
  return (
    <div
      style={{
        background: '#1E1E1E',
        borderRadius: '12px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
        flexShrink: 0,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: '#3C3C3C',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          gap: '6px',
        }}
      >
        <span
          style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444', display: 'block' }}
        />
        <span
          style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EAB308', display: 'block' }}
        />
        <span
          style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22C55E', display: 'block' }}
        />
        <span style={{ marginLeft: '8px', color: '#9CA3AF', fontSize: '11px' }}>
          flutter_web_emulator — VS Code
        </span>
      </div>

      {/* Tab bar */}
      <div
        style={{
          background: '#252526',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 0 0 16px',
        }}
      >
        <div
          style={{
            background: '#1E1E1E',
            color: '#CCC',
            padding: '6px 16px',
            fontSize: '12px',
            borderTop: '2px solid #007ACC',
            borderRight: '1px solid #333',
          }}
        >
          main.dart
        </div>
        <div
          style={{
            color: '#6B6B6B',
            padding: '6px 16px',
            fontSize: '12px',
          }}
        >
          pubspec.yaml
        </div>
      </div>

      {/* Editor area */}
      <div style={{ display: 'flex', height: '260px' }}>
        {/* Left pane — code */}
        <div
          style={{
            width: '60%',
            background: '#1E1E1E',
            padding: '16px',
            fontFamily: "'Fira Code', 'Cascadia Code', monospace",
            fontSize: '12px',
            lineHeight: '1.6',
            overflowY: 'auto',
          }}
        >
          <div>
            <span style={{ color: '#6A9955' }}>// Flutter Web App entry point</span>
          </div>
          <div>
            <span style={{ color: '#569CD6' }}>import </span>
            <span style={{ color: '#CE9178' }}>'package:flutter/material.dart'</span>
            <span style={{ color: '#D4D4D4' }}>;</span>
          </div>
          <div style={{ marginTop: '8px' }}>
            <span style={{ color: '#569CD6' }}>void </span>
            <span style={{ color: '#DCDCAA' }}>main</span>
            <span style={{ color: '#D4D4D4' }}>() {'{'}</span>
          </div>
          <div style={{ paddingLeft: '16px' }}>
            <span style={{ color: '#DCDCAA' }}>runApp</span>
            <span style={{ color: '#D4D4D4' }}>(</span>
            <span style={{ color: '#4EC9B0' }}>MyApp</span>
            <span style={{ color: '#D4D4D4' }}>());</span>
          </div>
          <div>
            <span style={{ color: '#D4D4D4' }}>{'}'}</span>
          </div>
          <div style={{ marginTop: '8px' }}>
            <span style={{ color: '#569CD6' }}>class </span>
            <span style={{ color: '#4EC9B0' }}>MyApp </span>
            <span style={{ color: '#569CD6' }}>extends </span>
            <span style={{ color: '#4EC9B0' }}>StatelessWidget </span>
            <span style={{ color: '#D4D4D4' }}>{'{'}</span>
          </div>
          <div style={{ paddingLeft: '16px' }}>
            <span style={{ color: '#D4D4D4' }}>@</span>
            <span style={{ color: '#DCDCAA' }}>override</span>
          </div>
          <div style={{ paddingLeft: '16px' }}>
            <span style={{ color: '#4EC9B0' }}>Widget </span>
            <span style={{ color: '#DCDCAA' }}>build</span>
            <span style={{ color: '#D4D4D4' }}>(</span>
            <span style={{ color: '#4EC9B0' }}>BuildContext </span>
            <span style={{ color: '#9CDCFE' }}>ctx</span>
            <span style={{ color: '#D4D4D4' }}>) {'{'}</span>
          </div>
          <div style={{ paddingLeft: '32px' }}>
            <span style={{ color: '#C586C0' }}>return </span>
            <span style={{ color: '#4EC9B0' }}>MaterialApp</span>
            <span style={{ color: '#D4D4D4' }}>(</span>
          </div>
          <div style={{ paddingLeft: '48px' }}>
            <span style={{ color: '#9CDCFE' }}>title</span>
            <span style={{ color: '#D4D4D4' }}>: </span>
            <span style={{ color: '#CE9178' }}>'My App'</span>
            <span style={{ color: '#D4D4D4' }}>,</span>
          </div>
          <div style={{ paddingLeft: '48px' }}>
            <span style={{ color: '#9CDCFE' }}>home</span>
            <span style={{ color: '#D4D4D4' }}>: </span>
            <span style={{ color: '#4EC9B0' }}>HomePage</span>
            <span style={{ color: '#D4D4D4' }}>(),</span>
          </div>
          <div style={{ paddingLeft: '32px' }}>
            <span style={{ color: '#D4D4D4' }}>);</span>
          </div>
          <div style={{ paddingLeft: '16px' }}>
            <span style={{ color: '#D4D4D4' }}>{'}'}</span>
          </div>
          <div>
            <span style={{ color: '#D4D4D4' }}>{'}'}</span>
          </div>
        </div>

        {/* Right pane — phone preview */}
        <div
          style={{
            width: '40%',
            background: '#F5F5F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: '1px solid #333',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '180px',
              background: 'white',
              borderRadius: '14px',
              border: '6px solid #333',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            {/* Phone status bar */}
            <div
              style={{ height: '12px', background: '#007ACC', flexShrink: 0 }}
            />
            {/* App bar */}
            <div
              style={{
                height: '22px',
                background: '#1565C0',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                padding: '0 6px',
              }}
            >
              <span style={{ color: '#fff', fontSize: '7px', fontWeight: '600' }}>
                My App
              </span>
            </div>
            {/* Content area */}
            <div style={{ flex: 1, padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div
                style={{ height: '8px', background: '#E3F2FD', borderRadius: '3px' }}
              />
              <div
                style={{ height: '8px', background: '#E3F2FD', borderRadius: '3px', width: '75%' }}
              />
              <div
                style={{ height: '8px', background: '#E3F2FD', borderRadius: '3px', width: '90%' }}
              />
              <div
                style={{ height: '24px', background: '#42A5F5', borderRadius: '4px', marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <span style={{ color: '#fff', fontSize: '6px', fontWeight: '700' }}>
                  GET STARTED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          background: '#007ACC',
          height: '22px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          gap: '16px',
        }}
      >
        <span style={{ color: '#fff', fontSize: '11px' }}>⎇ main</span>
        <span style={{ color: '#fff', fontSize: '11px' }}>Flutter Web Emulator: Running ●</span>
      </div>
    </div>
  )
}

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '28px 24px',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        boxShadow: hovered ? 'var(--shadow-2)' : 'var(--shadow-1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{icon}</div>
      <h3
        style={{
          fontSize: '1.05rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '10px',
        }}
      >
        {title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', fontSize: '0.95rem' }}>
        {desc}
      </p>
    </div>
  )
}

// ─── Pricing Card ─────────────────────────────────────────────────────────────

function PricingCard({ tier, price, sub, features, badge, isPro, storeUrl }) {
  return (
    <div
      style={{
        background: 'var(--white)',
        border: isPro ? '2px solid var(--google-blue-600)' : '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '36px 32px',
        flex: '1',
        minWidth: '260px',
        maxWidth: '340px',
        position: 'relative',
        boxShadow: isPro ? 'var(--shadow-2)' : 'var(--shadow-1)',
      }}
    >
      {badge && (
        <div
          style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--google-blue-600)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            padding: '4px 14px',
            borderRadius: '20px',
          }}
        >
          {badge}
        </div>
      )}
      <p
        style={{
          fontWeight: '700',
          fontSize: '0.9rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: isPro ? 'var(--google-blue-600)' : 'var(--text-secondary)',
          marginBottom: '12px',
        }}
      >
        {tier}
      </p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
        <span
          style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            lineHeight: '1',
          }}
        >
          {price}
        </span>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '28px' }}>
        {sub}
      </p>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {features.map((f, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              fontSize: '0.93rem',
              color: 'var(--text-primary)',
            }}
          >
            <span style={{ color: 'var(--google-blue-600)', fontWeight: '700', flexShrink: 0 }}>
              <Check size={16} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={storeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={isPro ? 'gfe-button gfe-button--primary' : 'gfe-button gfe-button--outline'}
        style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
      >
        {isPro ? 'Get Lifetime Access — $1' : 'Start Free Trial'}
      </a>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FlutterEmulatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      <SEOHead
        title="Flutter Web Emulator — VS Code Extension | Live Flutter Preview in Editor"
        description="Preview your Flutter web app live inside VS Code without opening a browser. Hot Reload support, device simulation, zero configuration. Install from VS Code Marketplace. $1 one-time lifetime — 3-day free trial."
        canonical="https://minderfly.com/products/flutter-web-emulator"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Flutter Web Emulator',
          operatingSystem: 'Windows, macOS, Linux',
          applicationCategory: 'DeveloperApplication',
          description: 'Flutter Web Emulator is a VS Code extension that lets you preview and interact with your Flutter web app live inside the editor with hot reload and device simulation.',
          offers: { '@type': 'Offer', price: '1.00', priceCurrency: 'USD' },
          url: 'https://minderfly.com/products/flutter-web-emulator',
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--grey-50)', padding: '80px 0 72px' }}>
        <div
          className="gfe-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '60px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left — text */}
          <div style={{ flex: '1', minWidth: '280px' }}>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#E8E0FF',
                color: '#6B21A8',
                fontSize: '13px',
                fontWeight: '700',
                padding: '6px 14px',
                borderRadius: '20px',
                marginBottom: '24px',
                letterSpacing: '0.2px',
              }}
            >
              <Puzzle size={14} style={{marginTop: '-2px'}} /> VS Code Extension
            </div>

            <h1
              className="gfe-headline-1"
              style={{ marginBottom: '20px', lineHeight: '1.15' }}
            >
              Flutter web, right inside{' '}
              <span style={{ color: 'var(--google-blue-600)' }}>VS Code.</span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '36px',
                maxWidth: '520px',
              }}
            >
              Stop switching context. Run and preview your Flutter web app in a
              live panel directly in your editor — with full Hot Reload support.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=HafizRizwanUmar.flutter-web-emulator"
                target="_blank"
                rel="noopener noreferrer"
                className="gfe-button gfe-button--primary"
                style={{ textDecoration: 'none' }}
              >
                Install on VS Code
              </a>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=HafizRizwanUmar.flutter-web-emulator"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--google-blue-600)',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                View on Marketplace →
              </a>
            </div>

            {/* Trust signals */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                marginTop: '32px',
              }}
            >
              {[
                { label: '2K+ installs', icon: <Package size={24} /> },
                { label: '25+ countries', icon: '🌍' },
                { label: '$1 lifetime', icon: '💰' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    fontWeight: '500',
                  }}
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — VS Code mockup */}
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
            <VSCodeMockup />
          </div>
        </div>
      </section>

      {/* ── BUILD STORY ──────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container" style={{ maxWidth: '760px' }}>
          <p
            style={{
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--google-blue-600)',
              marginBottom: '12px',
            }}
          >
            How it was built
          </p>
          <h2 className="gfe-headline-2" style={{ marginBottom: '52px' }}>
            The story behind the extension
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '18px',
                top: '6px',
                bottom: '6px',
                width: '2px',
                background: 'var(--google-blue-600)',
                opacity: 0.2,
                borderRadius: '2px',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {BUILD_STORY.map((entry, i) => (
                <div key={i} style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
                  {/* Dot */}
                  <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'var(--google-blue-600)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 0 4px #EFF6FF',
                      }}
                    >
                      <span style={{ color: '#fff', fontSize: '13px', fontWeight: '700' }}>
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ paddingTop: '6px' }}>
                    <p
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: 'var(--google-blue-600)',
                        marginBottom: '4px',
                      }}
                    >
                      {entry.year}
                    </p>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '8px',
                      }}
                    >
                      {entry.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                      {entry.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--grey-50)' }}>
        <div className="gfe-container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 52px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--google-blue-600)',
                marginBottom: '12px',
              }}
            >
              Everything you need
            </p>
            <h2 className="gfe-headline-2">
              Built for Flutter developers who value focus
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container">
          <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 52px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--google-blue-600)',
                marginBottom: '12px',
              }}
            >
              Simple pricing
            </p>
            <h2 className="gfe-headline-2" style={{ marginBottom: '14px' }}>
              One dollar. Lifetime access.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              We believe great developer tools shouldn't cost a fortune. Try free for 3 days, then unlock forever for $1.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '28px',
              alignItems: 'stretch',
            }}
          >
            <PricingCard
              tier="Free"
              price="$0"
              sub="3-day trial, then free with limited sessions"
              features={FREE_FEATURES}
              isPro={false}
              storeUrl="https://marketplace.visualstudio.com/items?itemName=HafizRizwanUmar.flutter-web-emulator"
            />
            <PricingCard
              tier="Pro"
              price="$1"
              sub="One-time payment — yours forever"
              features={PRO_FEATURES}
              badge="Best Value"
              isPro={true}
              storeUrl="https://marketplace.visualstudio.com/items?itemName=HafizRizwanUmar.flutter-web-emulator"
            />
          </div>
        </div>
      </section>

      {/* ── IMPACT ───────────────────────────────────────────────────────── */}
      <ImpactSection />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FaqSection
        faqs={FAQS}
        title="Questions about Flutter Web Emulator"
        subtitle="Everything you need to know before installing."
      />

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '96px 0',
          background: 'var(--grey-50)',
          textAlign: 'center',
        }}
      >
        <div className="gfe-container" style={{ maxWidth: '680px' }}>
          {/* Icon */}
          <div
            style={{
              width: '64px',
              height: '64px',
              background: 'var(--google-blue-100)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              margin: '0 auto 28px',
            }}
          >
            ⚡
          </div>

          <h2
            className="gfe-headline-2"
            style={{ marginBottom: '16px' }}
          >
            Stop switching context.{' '}
            <span style={{ color: 'var(--google-blue-600)' }}>
              Start building faster.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '40px',
            }}
          >
            Install the Flutter Web Emulator extension in seconds and reclaim
            your focus. Your entire Flutter workflow, in one window.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <a
              href="https://marketplace.visualstudio.com/items?itemName=HafizRizwanUmar.flutter-web-emulator"
              target="_blank"
              rel="noopener noreferrer"
              className="gfe-button gfe-button--primary"
              style={{ textDecoration: 'none' }}
            >
              Install on VS Code
            </a>
            <Link
              to="/contact"
              style={{
                fontSize: '0.95rem',
                color: 'var(--google-blue-600)',
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              Build something like this →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

import { Film, Zap, Moon, FileText, Music, ListVideo, Monitor, Download, PenTool, Package, Award, BarChart, Cloud, Image, Files, Search, Save, Eye, Briefcase, Smartphone, Ban, Puzzle, Box, Video, CircleDot, Bot, Globe, Settings, Calendar, Check, Mailbox } from 'lucide-react'

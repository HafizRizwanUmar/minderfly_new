import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import SEOHead from '../components/SEOHead';

const STORE_URL = '#';

const PALETTE = [
  { name: 'Deep Black', hex: '#0A0A1A' },
  { name: 'Cosmic Purple', hex: '#6C35DE' },
  { name: 'Lunar Silver', hex: '#C0C0C0' },
  { name: 'Star Gold', hex: '#FFD700' },
];

const features = [
  {
    icon: '🌌',
    title: 'Deep Space Background',
    desc: 'Authentic cosmic starfield transforms your new tab into a portal to the universe. Built from real astronomical imagery.',
  },
  {
    icon: '🌑',
    title: 'Dark-Native Design',
    desc: 'Built dark-first, not an inversion. Deep blacks reduce blue light, ease eye strain, and blend with dark-mode websites perfectly.',
  },
  {
    icon: '💜',
    title: 'Cosmic Color Scheme',
    desc: 'Space black, cosmic purple, lunar silver, and star gold — fine-tuned for beauty and usability across all monitors.',
  },
  {
    icon: '🚀',
    title: 'Free for the Community',
    desc: 'Space is free. So is this theme. No account, no subscription, no data collection.',
  },
];

const faqs = [
  {
    question: 'Is Lunar Leap Theme free?',
    answer: 'Yes — completely free, with no strings attached. No account required, no in-app purchases, no data collection of any kind. Chrome themes are passive visual overlays. Install it in one click from the Chrome Web Store and it works immediately.',
  },
  {
    question: 'How do I install it?',
    answer: "Visit the Chrome Web Store page and click 'Add to Chrome'. The theme applies instantly — no browser restart needed. The entire install takes under 10 seconds.",
  },
  {
    question: 'Will it affect browser performance or battery life?',
    answer: 'Not at all. Chrome themes are purely visual — they change the colors and textures of browser chrome UI (toolbars, tabs, frame). They contain no JavaScript, run no background processes, and consume zero additional CPU or memory. There is no performance impact whatsoever.',
  },
  {
    question: 'Can I revert to my old theme?',
    answer: 'Yes, easily. Go to Chrome Settings → Appearance → Reset to default, and your previous theme is restored immediately. You can also switch between installed themes at any time without uninstalling.',
  },
];

/* Tiny CSS star generator */
function Stars({ count = 60, seed = 42 }) {
  const stars = [];
  let s = seed;
  const rand = () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
  for (let i = 0; i < count; i++) {
    const x = rand() * 100;
    const y = rand() * 100;
    const size = rand() * 1.8 + 0.4;
    const opacity = rand() * 0.6 + 0.3;
    stars.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          left: `${x}%`,
          top: `${y}%`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          background: 'white',
          opacity,
        }}
      />
    );
  }
  return <>{stars}</>;
}

function SpaceBrowserMockup() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(108,53,222,0.25)',
        border: '1px solid rgba(108,53,222,0.3)',
      }}
    >
      {/* Browser chrome — dark space */}
      <div
        style={{
          background: '#0D0D1F',
          borderBottom: '1px solid rgba(108,53,222,0.35)',
          padding: '10px 14px 0 14px',
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }}
          />
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }}
          />
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }}
          />
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end' }}>
          <div
            style={{
              background: '#1A1A2E',
              borderRadius: '8px 8px 0 0',
              padding: '6px 18px',
              fontSize: '11px',
              color: '#C0C0C0',
              fontWeight: '500',
              border: '1px solid rgba(108,53,222,0.4)',
              borderBottom: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>🌌</span> New Tab
          </div>
          <div
            style={{
              background: '#0A0A1A',
              borderRadius: '8px 8px 0 0',
              padding: '6px 14px',
              fontSize: '11px',
              color: '#4B5563',
              border: '1px solid rgba(108,53,222,0.15)',
              borderBottom: 'none',
            }}
          >
            Deep Work
          </div>
        </div>
        {/* URL bar */}
        <div
          style={{
            background: '#0D0D1F',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderTop: '1px solid rgba(108,53,222,0.2)',
          }}
        >
          <div
            style={{
              flex: 1,
              background: '#1A1A2E',
              borderRadius: '20px',
              padding: '5px 14px',
              fontSize: '11px',
              color: '#9CA3AF',
            }}
          >
            New Tab
          </div>
        </div>
      </div>

      {/* Dark space content area */}
      <div
        style={{
          background: '#0A0A1A',
          position: 'relative',
          overflow: 'hidden',
          padding: '44px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          minHeight: '200px',
          justifyContent: 'center',
        }}
      >
        {/* Nebula glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '260px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(108,53,222,0.22) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Stars count={70} seed={123} />

        {/* Clock */}
        <div
          style={{
            position: 'relative',
            fontSize: '34px',
            fontWeight: '200',
            color: '#E2E8F0',
            letterSpacing: '-1px',
            textShadow: '0 0 20px rgba(108,53,222,0.5)',
          }}
        >
          09:41
        </div>
        <div style={{ position: 'relative', fontSize: '13px', color: '#FFD700', fontWeight: '400' }}>
          Ad astra per aspera ✦
        </div>
        <div
          style={{
            position: 'relative',
            marginTop: '14px',
            background: 'rgba(26,26,46,0.85)',
            border: '1px solid rgba(108,53,222,0.35)',
            borderRadius: '24px',
            padding: '8px 22px',
            fontSize: '12px',
            color: '#9CA3AF',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>🔍</span> Search or type a URL
        </div>
      </div>
    </div>
  );
}

function ColorSwatch({ name, hex }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: hex,
          boxShadow:
            hex === '#0A0A1A'
              ? '0 0 0 2px #333, 0 4px 16px rgba(0,0,0,0.4)'
              : '0 4px 16px rgba(0,0,0,0.15)',
          border: hex === '#C0C0C0' ? '2px solid #E5E7EB' : 'none',
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
          {name}
        </div>
        <div
          style={{
            fontSize: '11px',
            color: 'var(--text-secondary)',
            fontFamily: 'monospace',
            marginTop: '2px',
          }}
        >
          {hex}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '32px 28px',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        boxShadow: hovered
          ? '0 16px 40px rgba(108,53,222,0.12)'
          : '0 2px 12px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: '28px', marginBottom: '14px' }}>{icon}</div>
      <h3
        style={{
          fontSize: '17px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          margin: '0 0 10px 0',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '15px',
          color: 'var(--text-secondary)',
          lineHeight: '1.65',
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function LunarLeapThemePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <SEOHead
        title="Lunar Leap Theme — Free Dark Space Chrome Browser Theme | Night Mode"
        description="A dark cosmic Chrome theme with deep space black, cosmic purple, lunar silver, and star gold. Built dark-first for night owls and late-night coders. Free Chrome extension. Install now."
        canonical="https://minderfly.com/products/lunar-leap-theme"
      />
      {/* ── HERO ── */}
      <section
        style={{
          background: 'var(--white)',
          padding: '80px 24px 72px',
          textAlign: 'center',
        }}
      >
        <div className="gfe-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#0F172A',
              color: '#E2E8F0',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: '500',
              marginBottom: '28px',
            }}
          >
            <Puzzle size={14} style={{marginTop: '-2px'}} /> Chrome Extension
          </div>

          {/* Eyebrow */}
          <p
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9CA3AF',
              margin: '0 0 16px 0',
            }}
          >
            Free Dark Space Theme
          </p>

          {/* Headline */}
          <h1
            className="gfe-headline-2"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              lineHeight: '1.12',
              letterSpacing: '-2px',
              margin: '0 0 20px 0',
            }}
          >
            Launch your browser{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6C35DE, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              into orbit.
            </span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-secondary)',
              lineHeight: '1.65',
              maxWidth: '520px',
              margin: '0 auto 48px',
            }}
          >
            Lunar Leap wraps your browser in deep space — starfields, cosmic purple, and
            lunar silver for the night-owl developer in you.
          </p>

          {/* Dark space browser mockup */}
          <SpaceBrowserMockup />

          {/* Color swatch row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '36px',
              flexWrap: 'wrap',
              marginTop: '44px',
              padding: '28px 32px',
              background: 'var(--grey-50)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
            }}
          >
            {PALETTE.map((p) => (
              <ColorSwatch key={p.hex} name={p.name} hex={p.hex} />
            ))}
          </div>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              marginTop: '44px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gfe-button gfe-button--primary"
            >
              Add to Chrome — It's Free
            </a>
            <Link to="/contact" className="gfe-button gfe-button--outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        style={{
          background: 'var(--grey-50)',
          padding: '80px 24px',
        }}
      >
        <div className="gfe-container">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2
              className="gfe-headline-2"
              style={{ marginBottom: '14px', margin: '0 0 14px 0' }}
            >
              Built for the cosmos
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '16px',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              Four features designed for dark-mode devotees and late-night builders.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR INSPIRATION ── */}
      <section style={{ background: 'var(--white)', padding: '80px 24px' }}>
        <div
          className="gfe-container"
          style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6C35DE',
              margin: '0 0 24px 0',
            }}
          >
            Our inspiration
          </p>
          <blockquote
            style={{
              fontSize: 'clamp(17px, 2.3vw, 22px)',
              fontWeight: '400',
              color: '#374151',
              lineHeight: '1.75',
              fontStyle: 'italic',
              margin: '0',
              padding: '32px 36px',
              background: '#0A0A1A',
              color: '#E2E8F0',
              borderRadius: '16px',
              border: '1px solid rgba(108,53,222,0.3)',
              boxShadow: '0 8px 32px rgba(108,53,222,0.12)',
            }}
          >
            "Late-night coding sessions inspired this theme. When you're deep in flow
            state after midnight, your screen shouldn't be fighting you. Lunar Leap
            brings the calm of outer space to your browser.{' '}
            <span style={{ color: '#FFD700' }}>Look up from your code and see stars.</span>"
          </blockquote>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection faqs={faqs} />

      {/* ── BOTTOM CTA ── */}
      <section
        style={{
          background: 'var(--white)',
          borderTop: '1px solid var(--border-color)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div className="gfe-container" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2
            className="gfe-headline-2"
            style={{ marginBottom: '16px', margin: '0 0 16px 0' }}
          >
            Explore the universe from your browser.
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '16px',
              margin: '0 0 36px 0',
            }}
          >
            Free, instant, zero setup. The cosmos, one click away.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gfe-button gfe-button--primary"
            >
              Add to Chrome
            </a>
            <Link to="/contact" className="gfe-button gfe-button--outline">
              Build something like this →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Film, Zap, Moon, FileText, Music, ListVideo, Monitor, Download, PenTool, Package, Award, BarChart, Cloud, Image, Files, Search, Save, Eye, Briefcase, Smartphone, Ban, Puzzle, Box, Video, CircleDot, Bot, Globe, Settings, Calendar, Check, Mailbox } from 'lucide-react'

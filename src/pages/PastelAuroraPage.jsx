import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import SEOHead from '../components/SEOHead';

const STORE_URL =
  'https://chromewebstore.google.com/detail/pastel-aurora/lmggijfeinibhlmbnjlkiobndeiogimo?authuser=0&hl=en-GB';

const PASTEL = {
  pink: '#EC4899',
  purple: '#8B5CF6',
  mint: '#10B981',
  sky: '#0EA5E9',
};

const features = [
  {
    icon: '🌌',
    title: 'Aurora Gradient Palette',
    desc: 'Soft transitions between pink, lavender, mint, and sky blue. Inspired by the northern lights above the Arctic Circle.',
    borderColor: PASTEL.pink,
  },
  {
    icon: '🧘',
    title: 'Mood-Lifting Colors',
    desc: 'Pastel tones are psychologically linked to calm and creativity. Your browser becomes a peaceful, inspiring workspace.',
    borderColor: PASTEL.purple,
  },
  {
    icon: <Monitor size={24} />,
    title: 'Works Everywhere',
    desc: 'Looks beautiful at all screen sizes. Tested on laptops, desktops, and ultrawide monitors.',
    borderColor: PASTEL.mint,
  },
  {
    icon: '✨',
    title: 'Free & Instant',
    desc: 'One click to transform your browser. No setup, no account, no cost.',
    borderColor: PASTEL.sky,
  },
];

const faqs = [
  {
    question: 'Is Pastel Aurora free?',
    answer: 'Yes — fully free, forever. No account, no premium tier, no personal data collected. Chrome themes are cosmetic-only and require no sensitive permissions. Install from the Chrome Web Store in one click.',
  },
  {
    question: 'How do I install it?',
    answer: "Visit the Pastel Aurora page on the Chrome Web Store and click 'Add to Chrome'. The soft pastel gradient applies to your browser instantly — no restart, no configuration, no sign-in required.",
  },
  {
    question: 'Will it affect my browser performance?',
    answer: 'Zero impact. Chrome themes are static image assets applied to the browser frame — toolbars, tab strip, and background. They run no JavaScript, consume no CPU cycles after load, and add no memory overhead. Your browser runs exactly as fast as before.',
  },
  {
    question: 'Can I uninstall or change themes anytime?',
    answer: 'Yes, completely. Open Chrome Settings → Appearance → Reset to default to remove the theme instantly. Or install any other Chrome theme and it will automatically replace Pastel Aurora.',
  },
];

function FeatureCard({ icon, title, desc, borderColor }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border-color)',
        borderLeft: `3px solid ${borderColor}`,
        borderRadius: '16px',
        padding: '32px 28px',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        boxShadow: hovered
          ? `0 16px 40px rgba(0,0,0,0.10)`
          : '0 2px 12px rgba(0,0,0,0.04)',
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

function AuroraBrowserMockup() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 24px 72px rgba(139,92,246,0.18)',
        border: '1px solid rgba(236,72,153,0.15)',
      }}
    >
      {/* Browser chrome bar — aurora gradient */}
      <div
        style={{
          background: 'linear-gradient(90deg, #FDF2F8 0%, #EEF2FF 55%, #F0FDF4 100%)',
          borderBottom: '1px solid rgba(139,92,246,0.18)',
          padding: '10px 14px 0 14px',
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#FDA4AF' }}
          />
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#C4B5FD' }}
          />
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#6EE7B7' }}
          />
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(8px)',
              borderRadius: '8px 8px 0 0',
              padding: '6px 18px',
              fontSize: '11px',
              color: '#6D28D9',
              fontWeight: '500',
              border: '1px solid rgba(196,181,253,0.4)',
              borderBottom: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>🌈</span> New Tab
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.45)',
              borderRadius: '8px 8px 0 0',
              padding: '6px 14px',
              fontSize: '11px',
              color: '#9CA3AF',
              border: '1px solid rgba(196,181,253,0.2)',
              borderBottom: 'none',
            }}
          >
            Inspiration
          </div>
        </div>
        {/* URL bar */}
        <div
          style={{
            background: 'rgba(255,255,255,0.7)',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderTop: '1px solid rgba(196,181,253,0.2)',
          }}
        >
          <div
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.85)',
              borderRadius: '20px',
              padding: '5px 14px',
              fontSize: '11px',
              color: '#7C3AED',
              letterSpacing: '0.01em',
            }}
          >
            New Tab
          </div>
        </div>
      </div>
      {/* Content area */}
      <div
        style={{
          background:
            'linear-gradient(135deg, #FDF2F8 0%, #EEF2FF 50%, #F0FDF4 100%)',
          padding: '44px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          minHeight: '180px',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: '30px',
            fontWeight: '300',
            background: 'linear-gradient(90deg, #EC4899, #8B5CF6, #10B981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px',
          }}
        >
          09:41
        </div>
        <div style={{ fontSize: '13px', color: '#7C3AED', fontWeight: '400' }}>
          Dream big today ✨
        </div>
        <div
          style={{
            marginTop: '14px',
            background: 'rgba(255,255,255,0.75)',
            border: '1px solid rgba(196,181,253,0.35)',
            borderRadius: '24px',
            padding: '8px 22px',
            fontSize: '12px',
            color: '#6D28D9',
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

export default function PastelAuroraPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <SEOHead
        title="Pastel Aurora — Soft Pastel Chrome Theme | Free Browser Theme"
        description="Transform your Chrome browser with soft pastel aurora gradients. A calming, beautiful theme for everyday browsing. Free on the Chrome Web Store. No account needed, zero performance impact."
        canonical="https://minderfly.com/products/pastel-aurora"
      />
      {/* ── HERO ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #FDF2F8 0%, #EEF2FF 50%, #F0FDF4 100%)',
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
              background: '#F3E8FF',
              color: '#7C3AED',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: '500',
              marginBottom: '28px',
            }}
          >
            <Puzzle size={14} style={{marginTop: '-2px'}} /> Chrome Extension
          </div>

          {/* Headline */}
          <h1
            className="gfe-headline-2"
            style={{
              fontSize: 'clamp(36px, 5vw, 62px)',
              fontWeight: '700',
              lineHeight: '1.12',
              letterSpacing: '-2px',
              marginBottom: '20px',
              margin: '0 0 20px 0',
              color: 'var(--text-primary)',
            }}
          >
            Your browser,{' '}
            <span style={{ color: PASTEL.pink }}>dreamy</span>,{' '}
            <span style={{ color: PASTEL.purple }}>vibrant</span>, &{' '}
            <span style={{ color: PASTEL.mint }}>alive</span>.
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
            Pastel Aurora fills your browser with the soft, shifting colors of the
            northern lights. Beautiful, calming, free.
          </p>

          {/* Browser mockup */}
          <AuroraBrowserMockup />

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
          background: 'var(--white)',
          padding: '80px 24px',
        }}
      >
        <div className="gfe-container">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2
              className="gfe-headline-2"
              style={{ marginBottom: '14px', margin: '0 0 14px 0' }}
            >
              Colors that inspire
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '16px',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              Everything you need for a beautiful, joyful browser experience.
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

      {/* ── WHY WE MADE IT ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #FDF2F8 0%, #EEF2FF 50%, #F0FDF4 100%)',
          padding: '80px 24px',
        }}
      >
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
              color: '#7C3AED',
              marginBottom: '24px',
              margin: '0 0 24px 0',
            }}
          >
            Why we made it
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
              background: 'rgba(255,255,255,0.65)',
              borderRadius: '16px',
              border: '1px solid rgba(196,181,253,0.3)',
            }}
          >
            "We were tired of dark themes and minimal whites. Sometimes you want your
            workspace to feel joyful. Pastel Aurora is for the designers, dreamers, and
            anyone who believes their tools should make them happy."
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
            Make your browser as beautiful as your ideas.
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '16px',
              marginBottom: '36px',
              margin: '0 0 36px 0',
            }}
          >
            Free, instant, joyful. One click and your browser transforms.
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

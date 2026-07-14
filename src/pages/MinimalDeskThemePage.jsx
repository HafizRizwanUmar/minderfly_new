import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import SEOHead from '../components/SEOHead';

const STORE_URL =
  'https://chromewebstore.google.com/detail/minimal-desk-theme/heglnbpgkcbfdochddocpdhfjcggnpnf?authuser=0&hl=en-GB';

const features = [
  {
    icon: '🎨',
    title: 'Clean Neutral Palette',
    desc: 'Soft greys and warm whites. Designed to disappear into your workflow so your content takes center stage.',
  },
  {
    icon: '📓',
    title: 'Desk-Inspired Textures',
    desc: 'Subtle surface textures that add depth without distraction. Like a premium notebook on your screen.',
  },
  {
    icon: <Search size={24} />,
    title: 'Focus-Mode Ready',
    desc: 'Minimal chrome elements reduce visual noise. Works perfectly with productivity tools and full-screen apps.',
  },
  {
    icon: '🎁',
    title: 'Free Forever',
    desc: 'No account, no subscription, no permissions. Install in 10 seconds and your browser is transformed.',
  },
];

const faqs = [
  {
    question: 'Is it really free?',
    answer: 'Yes, 100% free. No account, no in-app purchases, no data collection.',
  },
  {
    question: 'How do I install it?',
    answer: "Click 'Add to Chrome' on the Web Store. Done in under 10 seconds.",
  },
  {
    question: 'Will it slow my browser?',
    answer:
      'Not at all. Chrome themes are purely visual — no scripts, no background processes.',
  },
  {
    question: 'Can I switch back to my old theme?',
    answer:
      'Yes. Chrome › Settings › Appearance › Reset to default, anytime.',
  },
];

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
          ? '0 16px 40px rgba(0,0,0,0.10)'
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
          marginBottom: '10px',
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

function BrowserMockup() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,0.10)',
        border: '1px solid #E5E7EB',
      }}
    >
      {/* Browser chrome bar */}
      <div
        style={{
          background: '#F9FAFB',
          borderBottom: '1px solid #E5E7EB',
          padding: '10px 14px 0 14px',
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#F87171' }}
          />
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#FBBF24' }}
          />
          <div
            style={{ width: 11, height: 11, borderRadius: '50%', background: '#34D399' }}
          />
        </div>
        {/* Tabs row */}
        <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end' }}>
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '8px 8px 0 0',
              padding: '6px 16px',
              fontSize: '11px',
              color: '#374151',
              fontWeight: '500',
              border: '1px solid #E5E7EB',
              borderBottom: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '10px' }}>🏠</span> New Tab
          </div>
          <div
            style={{
              background: '#F3F4F6',
              borderRadius: '8px 8px 0 0',
              padding: '6px 14px',
              fontSize: '11px',
              color: '#9CA3AF',
              border: '1px solid #E5E7EB',
              borderBottom: 'none',
            }}
          >
            Work Doc
          </div>
        </div>
        {/* URL bar */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '0 0 0 0',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderTop: '1px solid #E5E7EB',
          }}
        >
          <div
            style={{
              flex: 1,
              background: '#F3F4F6',
              borderRadius: '20px',
              padding: '5px 14px',
              fontSize: '11px',
              color: '#6B7280',
              letterSpacing: '0.01em',
            }}
          >
            New Tab
          </div>
        </div>
      </div>
      {/* New tab content area */}
      <div
        style={{
          background: '#FAFAFA',
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          minHeight: '180px',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: '32px',
            fontWeight: '200',
            color: '#374151',
            letterSpacing: '-1px',
            fontFamily: 'Georgia, serif',
          }}
        >
          09:41
        </div>
        <div style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: '400' }}>
          Good morning. Ready to focus?
        </div>
        <div
          style={{
            marginTop: '16px',
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '24px',
            padding: '8px 22px',
            fontSize: '12px',
            color: '#6B7280',
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

export default function MinimalDeskThemePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <SEOHead
        title="Minimal Desk Theme — Free Minimal Chrome Browser Theme | Productivity"
        description="A clean, minimal Chrome browser theme designed to disappear into your workflow. Soft greys, warm whites, desk-inspired textures. Free forever. Install in 10 seconds."
        canonical="https://minderfly.com/products/minimal-desk-theme"
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
              background: '#F0FDF4',
              color: '#166534',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: '500',
              marginBottom: '24px',
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
              marginBottom: '16px',
              margin: '0 0 16px 0',
            }}
          >
            Free Browser Theme
          </p>

          {/* Headline */}
          <h1
            className="gfe-headline-2"
            style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: '300',
              color: 'var(--text-primary)',
              lineHeight: '1.15',
              letterSpacing: '-1.5px',
              marginBottom: '20px',
              margin: '0 0 20px 0',
            }}
          >
            Your browser,{' '}
            <span style={{ color: '#9CA3AF', fontWeight: '200' }}>distraction-free.</span>
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
            Minimal Desk transforms Chrome into a calm, neutral workspace.
            Soft greys, warm whites — nothing competing for your attention.
          </p>

          {/* Browser mockup */}
          <BrowserMockup />

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
              Thoughtfully minimal
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '16px',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              Four features — nothing unnecessary.
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

      {/* ── WHY WE BUILT IT ── */}
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
              color: '#9CA3AF',
              marginBottom: '24px',
              margin: '0 0 24px 0',
            }}
          >
            Why we built it
          </p>
          <blockquote
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: '300',
              color: 'var(--text-primary)',
              lineHeight: '1.7',
              fontStyle: 'italic',
              margin: 0,
              borderLeft: '3px solid var(--border-color)',
              paddingLeft: '28px',
              textAlign: 'left',
            }}
          >
            "Most browser themes are loud. Gradients, patterns, vivid colors fighting for
            your attention. We wanted the opposite — a theme so restrained it feels like
            breathing space. Minimal Desk is the theme for people who think good design
            is invisible design."
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
            Give your browser room to breathe.
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '16px',
              marginBottom: '36px',
              margin: '0 0 36px 0',
            }}
          >
            Free, instant, zero setup. A calmer browser in under 10 seconds.
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

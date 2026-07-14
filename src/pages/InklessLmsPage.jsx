import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImpactSection from '../components/ImpactSection'
import FaqSection from '../components/FaqSection'
import SEOHead from '../components/SEOHead'

// ─── Data ────────────────────────────────────────────────────────────────────

const BUILD_STORY = [
  {
    year: '2021',
    title: 'The problem',
    body: "Schools were stuck with outdated, expensive LMS platforms that required IT departments to run. Teachers couldn't create content without technical help.",
  },
  {
    year: 'Early 2022',
    title: 'User research',
    body: "40 interviews with teachers, school admins, and corporate trainers. The #1 complaint: existing platforms were too complex to use without training.",
  },
  {
    year: 'Mid 2022',
    title: 'Design sprint',
    body: "Built the drag-and-drop course builder first. Ran usability tests until a non-technical teacher could create a full course in under 10 minutes.",
  },
  {
    year: 'Late 2022',
    title: 'Launch',
    body: "Launched with 20 beta schools. 95% of teachers created their first course in the first session. Word spread fast.",
  },
  {
    year: '2023+',
    title: 'Scale',
    body: "Now serving 500+ institutions, 50K+ students. Added AI learning assistant, live class integration, custom certificates. Used in 30+ countries.",
  },
]

const FEATURES = [
  {
    icon: <Box size={24} />,
    title: 'Drag & Drop Course Builder',
    desc: 'Create structured courses in minutes. Organize modules, upload resources, set completion rules. Zero coding required.',
  },
  {
    icon: <Video size={24} />,
    title: 'Interactive Video Lessons',
    desc: 'Host HD videos with in-video quizzes and interactive markers. Keep students engaged throughout every lecture.',
  },
  {
    icon: <FileText size={24} />,
    title: 'Advanced Assessments',
    desc: 'Quizzes, timed exams, peer-reviewed assignments. Multiple question types with automated grading.',
  },
  {
    icon: <BarChart size={24} />,
    title: 'Analytics Dashboard',
    desc: 'Track student progress, course engagement, and completion rates. Visual dashboards with exportable reports.',
  },
  {
    icon: <Award size={24} />,
    title: 'Custom Certificates',
    desc: 'Auto-generate branded, verifiable digital certificates on course completion.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Native Mobile App',
    desc: 'iOS and Android apps for learning on the go. Offline content, push notifications.',
  },
  {
    icon: <CircleDot size={24} />,
    title: 'Live Virtual Classes',
    desc: 'Zoom and Google Meet integration. Schedule, host, and record live sessions from the dashboard.',
  },
  {
    icon: <Bot size={24} />,
    title: 'AI Learning Assistant',
    desc: '24/7 student support. Answers questions, recommends resources, identifies struggling learners.',
  },
]

const WHO_ITS_FOR = [
  {
    icon: '🏫',
    title: 'Schools & Universities',
    desc: 'Centralize your courses, student records, live classes, and assessments in one beautiful platform. No IT department required.',
    tags: ['Grade Management', 'Live Classes', 'Student Portals'],
  },
  {
    icon: '🏢',
    title: 'Corporate Training',
    desc: 'Onboard employees faster, track completion, and issue verifiable certificates for compliance and professional development.',
    tags: ['Onboarding', 'Compliance Tracking', 'Certificates'],
  },
  {
    icon: '🎓',
    title: 'Online Course Creators',
    desc: 'Turn your expertise into revenue. Build, sell, and deliver professional online courses with full branding control.',
    tags: ['Course Monetization', 'Custom Branding', 'Student Analytics'],
  },
]

const FAQS = [
  {
    q: 'Is InklessLMS really easy to use?',
    a: "Yes — 95% of teachers create their first course in their first session. No technical knowledge required.",
  },
  {
    q: 'Does it work on mobile?',
    a: "Native iOS and Android apps. Students can download content for offline viewing.",
  },
  {
    q: 'Can I issue certificates?',
    a: "Yes — branded, verifiable digital certificates are automatically generated on course completion.",
  },
  {
    q: 'What integrations are available?',
    a: "Zoom, Google Meet for live classes. More integrations added regularly.",
  },
  {
    q: 'How do I get started?',
    a: "Visit inklesslms.com and start a free trial. No credit card needed.",
  },
]

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

// ─── Who It's For Card ────────────────────────────────────────────────────────

function AudienceCard({ icon, title, desc, tags }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '36px 28px',
        flex: '1',
        minWidth: '260px',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        boxShadow: hovered ? 'var(--shadow-2)' : 'var(--shadow-1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          background: 'var(--google-blue-100)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          marginBottom: '20px',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '20px' }}>
        {desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: 'var(--google-blue-100)',
              color: 'var(--google-blue-700)',
              fontSize: '11px',
              fontWeight: '600',
              padding: '4px 10px',
              borderRadius: '20px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function HeroStatCard({ icon, value, label }) {
  return (
    <div
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        boxShadow: 'var(--shadow-1)',
        flex: '1',
        minWidth: '160px',
      }}
    >
      <span style={{ fontSize: '1.5rem' }}>{icon}</span>
      <div>
        <p style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.2' }}>
          {value}
        </p>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
          {label}
        </p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InklessLmsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      <SEOHead
        title="InklessLMS — Cloud Learning Management System for Schools & Institutions"
        description="A powerful, easy-to-use LMS trusted by 500+ institutions and 50K+ students. Drag-and-drop course builder, video lessons, AI assistant, live classes. Start free at inklesslms.com."
        canonical="https://minderfly.com/products/inkless-lms"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'InklessLMS',
          operatingSystem: 'Web',
          applicationCategory: 'EducationApplication',
          description: 'InklessLMS is a cloud-based Learning Management System used by 500+ institutions and 50K+ students. Features drag-and-drop course builder, video lessons, AI learning assistant, and live class integration.',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free trial available' },
          url: 'https://inklesslms.com',
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 40%)',
          padding: '80px 0 72px',
        }}
      >
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <span
              style={{
                background: 'var(--google-blue-100)',
                color: 'var(--google-blue-700)',
                fontSize: '13px',
                fontWeight: '700',
                padding: '6px 16px',
                borderRadius: '20px',
                letterSpacing: '0.2px',
              }}
            >
              <Globe size={14} style={{marginTop: '-2px'}} /> Web Application
            </span>
          </div>

          {/* Headline */}
          <h1
            className="gfe-headline-1"
            style={{ marginBottom: '20px', lineHeight: '1.15', maxWidth: '720px', margin: '0 auto 20px' }}
          >
            The LMS that teachers{' '}
            <span style={{ color: 'var(--google-blue-600)' }}>actually love.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              maxWidth: '580px',
              margin: '0 auto 36px',
            }}
          >
            InklessLMS is the modern cloud-based learning management system
            built for schools, universities, and corporate teams. No IT department required.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '52px',
            }}
          >
            <a
              href="https://inklesslms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gfe-button gfe-button--primary"
              style={{ textDecoration: 'none' }}
            >
              Start Free Trial on InklessLMS
            </a>
            <a
              href="https://inklesslms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gfe-button gfe-button--outline"
              style={{ textDecoration: 'none' }}
            >
              See a demo
            </a>
          </div>

          {/* Floating stat cards */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            <HeroStatCard icon="🏫" value="500+ Institutions" label="Actively using InklessLMS" />
            <HeroStatCard icon="🎓" value="50K+ Students" label="Learning on the platform" />
            <HeroStatCard icon="⭐" value="4.9 / 5 Rating" label="Average user satisfaction" />
          </div>
        </div>
      </section>

      {/* ── QUICK TRUST BAR ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: '28px 0',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          background: 'var(--white)',
        }}
      >
        <div
          className="gfe-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {[
            '<Check size={16} /> No credit card needed',
            '<Check size={16} /> Setup in under 10 minutes',
            '<Check size={16} /> 30+ countries',
            '<Check size={16} /> SOC2 compliant infrastructure',
            '<Check size={16} /> Free forever for small teams',
          ].map((item) => (
            <span
              key={item}
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: 'var(--text-secondary)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── BUILD STORY ──────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--grey-50)' }}>
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
            From one frustrated teacher to 50,000 students
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
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
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
              Platform features
            </p>
            <h2 className="gfe-headline-2">
              Everything a modern learning platform needs
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
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
              Who it's for
            </p>
            <h2 className="gfe-headline-2">
              Built for every kind of educator
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginTop: '14px',
              }}
            >
              Whether you're running a K-12 school, a Fortune 500 training program, or a one-person online course, InklessLMS scales with you.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              justifyContent: 'center',
            }}
          >
            {WHO_ITS_FOR.map((card) => (
              <AudienceCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BANNER ──────────────────────────────────────────── */}
      <section
        style={{
          padding: '60px 0',
          background: 'var(--white)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
            }}
          >
            Trusted by educators worldwide
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            {[
              {
                quote: "Our teachers went from 0 to publishing their first course in one afternoon. That has never happened with any other tool.",
                name: "Dr. Amira Hassan",
                role: "Academic Director, Cairo University",
              },
              {
                quote: "The analytics dashboard alone saved us 6 hours of admin work per week. The AI assistant is a genuine game changer.",
                name: "James Okafor",
                role: "L&D Manager, Accenture Nigeria",
              },
              {
                quote: "I launched my online course business in 3 days. The certificate builder and Zoom integration are exactly what I needed.",
                name: "Sofia Marchetti",
                role: "Independent Course Creator",
              },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--grey-50)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '14px',
                  padding: '28px',
                  maxWidth: '340px',
                  flex: '1',
                  minWidth: '260px',
                  textAlign: 'left',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    color: 'var(--google-blue-600)',
                    opacity: 0.12,
                    lineHeight: '1',
                    position: 'absolute',
                    top: '16px',
                    left: '20px',
                  }}
                >
                  "
                </div>
                <p
                  style={{
                    color: 'var(--text-primary)',
                    lineHeight: '1.7',
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    position: 'relative',
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      background: 'var(--google-blue-600)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: '700',
                      fontSize: '14px',
                      flexShrink: 0,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9rem' }}>
                      {t.name}
                    </strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ───────────────────────────────────────────────────────── */}
      <ImpactSection />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FaqSection
        faqs={FAQS}
        title="Questions about InklessLMS"
        subtitle="Everything you need to know before starting your free trial."
      />

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '96px 0',
          background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)',
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
            🎓
          </div>

          <h2
            className="gfe-headline-2"
            style={{ marginBottom: '16px' }}
          >
            Transform learning at{' '}
            <span style={{ color: 'var(--google-blue-600)' }}>your institution.</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '40px',
            }}
          >
            Join 500+ institutions and 50,000+ students on the LMS that puts
            teachers first. Start your free trial — no credit card, no setup fee.
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
              href="https://inklesslms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gfe-button gfe-button--primary"
              style={{ textDecoration: 'none' }}
            >
              Start Free Trial
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
              Learn how we built this →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

import { Film, Zap, Moon, FileText, Music, ListVideo, Monitor, Download, PenTool, Package, Award, BarChart, Cloud, Image, Files, Search, Save, Eye, Briefcase, Smartphone, Ban, Puzzle, Box, Video, CircleDot, Bot, Globe, Settings, Calendar, Check, Mailbox } from 'lucide-react'

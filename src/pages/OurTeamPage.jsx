import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const TEAM = [
  {
    name: 'Hafiz Rizwan Umar',
    role: 'Founder & CEO',
    desc: 'Rizwan leads Minderfly with a focus on building software that solves real problems at scale. He oversees product strategy, engineering direction, and partnerships across 100+ countries.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ammara Lohani',
    role: 'Lead Product Designer',
    desc: 'Ammara defines the visual language and user experience across all Minderfly products. She turns complex workflows into interfaces that feel effortless and delightful to use.',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Eisha Ashfaq',
    role: 'Engineering Manager',
    desc: 'Eisha leads the technical team, owning architecture decisions and shipping velocity. She ensures every product we release is fast, secure, and built to last.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
]

const VALUES = [
  {
    title: 'Ship real things',
    desc: 'We build products that reach real users. We move fast, iterate in public, and take pride in every release.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
  },
  {
    title: 'Stay small, think big',
    desc: 'A small team with high conviction can build software used in 100+ countries. Size is not a limitation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  },
  {
    title: 'Own the outcome',
    desc: 'Everyone on the team owns what they ship. No blame, no excuses — just clear accountability and shared wins.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
]

const OPEN_ROLES = [
  { title: 'Full-Stack Developer', type: 'Engineering', location: 'Remote', time: 'Full-time' },
  { title: 'UI/UX Designer', type: 'Design', location: 'Remote', time: 'Full-time' },
]

const TYPE_COLORS = {
  Engineering: { bg: '#FDF2F8', color: '#C11574' },
  Design:      { bg: '#EFF8FF', color: '#175CD3' },
}

export default function OurTeamPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      <SEOHead
        title="Our Team — Minderfly"
        description="Meet the three-person team behind Minderfly — building startup software used across 100+ countries."
        canonical="https://minderfly.com/our-values/team"
      />

      {/* ── Hero ── */}
      <section style={{ padding: '96px 0 80px', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '20px' }}>
            Our Team
          </p>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: '700', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '24px' }}>
            Three people.<br />Global products.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px' }}>
            Minderfly is a small, focused team that moves fast and ships software used in over 100 countries. We believe the best products come from tight-knit teams with high conviction.
          </p>
          <Link to="/contact" className="gfe-button gfe-button--primary" style={{ height: '50px', padding: '0 32px', borderRadius: '12px', fontSize: '15px' }}>
            Work with us
          </Link>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section style={{ padding: '80px 0 100px' }}>
        <div className="gfe-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {TEAM.map((member) => (
              <div
                key={member.name}
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'var(--white)',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(60,64,67,0.1)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                {/* Photo */}
                <div style={{ height: '280px', overflow: 'hidden', background: 'var(--grey-100)' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: '24px 28px 28px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '8px' }}>
                    {member.role}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '-0.3px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'var(--grey-50)' }}>
        <div className="gfe-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '16px' }}>
              How we work
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text-primary)' }}>
              Principles we live by
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ padding: '32px', border: '1px solid var(--border-color)', borderRadius: '16px', background: 'var(--white)' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'var(--grey-50)', border: '1px solid var(--border-color)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px', color: 'var(--text-primary)',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section style={{ padding: '80px 0 100px' }} id="careers">
        <div className="gfe-container" style={{ maxWidth: '760px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '16px' }}>
              Careers
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '700', letterSpacing: '-1px', color: 'var(--text-primary)', marginBottom: '16px' }}>
              Open positions
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
              We're a remote-first team. If you're great at what you do, we'd love to talk.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {OPEN_ROLES.map((role, i) => (
              <div
                key={role.title}
                style={{
                  padding: '28px 0',
                  borderTop: i === 0 ? '1px solid var(--border-color)' : 'none',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '17px', fontWeight: '600', color: 'var(--text-primary)' }}>{role.title}</span>
                    <span style={{
                      fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px',
                      background: TYPE_COLORS[role.type]?.bg,
                      color: TYPE_COLORS[role.type]?.color,
                    }}>
                      {role.type}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                    <span>{role.location}</span>
                    <span>·</span>
                    <span>{role.time}</span>
                  </div>
                </div>
                <Link to="/contact" className="gfe-button gfe-button--outline" style={{ height: '40px', padding: '0 20px', borderRadius: '10px', fontSize: '14px', whiteSpace: 'nowrap' }}>
                  Apply now
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Don't see a role that fits? We still want to hear from you.
            </p>
            <Link to="/contact" className="gfe-button gfe-button--primary" style={{ height: '46px', padding: '0 28px', borderRadius: '10px', fontSize: '15px' }}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

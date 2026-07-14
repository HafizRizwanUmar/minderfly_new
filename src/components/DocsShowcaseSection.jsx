import { useRef, useEffect } from 'react';

import { Lightbulb, Palette, Settings, Globe } from 'lucide-react';

const JOURNEY_STEPS = [
  {
    icon: <Lightbulb size={36} color="#1a73e8" />,
    step: '01',
    title: 'Share Your Vision',
    description: 'Tell us about your idea. We dive deep to understand your market, users, and goals — then craft a concrete product strategy.',
  },
  {
    icon: <Palette size={36} color="#1a73e8" />,
    step: '02',
    title: 'Design & Prototype',
    description: 'Our designers create beautiful, user-centered interfaces. You see your product take shape before a single line of code is written.',
  },
  {
    icon: <Settings size={36} color="#1a73e8" />,
    step: '03',
    title: 'Build & Ship',
    description: 'Expert engineers bring your product to life. We ship fast, iterate based on real user feedback, and maintain quality at every step.',
  },
  {
    icon: <Globe size={36} color="#1a73e8" />,
    step: '04',
    title: 'Scale Globally',
    description: 'Once validated, we help you expand into new markets. Localization, compliance, infrastructure — we handle the complexity so you can focus on growth.',
  },
];

export default function DocsShowcaseSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="docs-showcase-section section-light" ref={ref} style={{ padding: '100px 0' }}>
      <div className="gfe-container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section Header */}
        <div className="section-intro reveal" style={{ marginBottom: '64px' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1a73e8', marginBottom: '12px' }}>
            The Founder Journey
          </p>
          <h2 className="section-intro__headline">From first idea to global scale</h2>
          <p className="section-intro__body">
            We've refined a proven, end-to-end process for turning startup ideas into thriving products used by people worldwide.
          </p>
        </div>

        {/* Journey Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '32px',
        }}>
          {JOURNEY_STEPS.map((step, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div style={{
                background: '#fff',
                border: '1px solid #e8eaed',
                borderRadius: '20px',
                padding: '36px 28px',
                height: '100%',
                transition: 'box-shadow 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,115,232,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {/* Step number */}
                <div style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  color: '#1a73e8',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}>
                  Step {step.step}
                </div>
                {/* Icon */}
                <div style={{ fontSize: '36px', marginBottom: '16px', lineHeight: 1 }}>
                  {step.icon}
                </div>
                {/* Title */}
                <h3 style={{
                  fontFamily: 'Google Sans, Roboto, sans-serif',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#202124',
                  marginBottom: '12px',
                }}>
                  {step.title}
                </h3>
                {/* Description */}
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5f6368',
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal reveal-delay-2" style={{ textAlign: 'center', marginTop: '60px' }}>
          <a href="/contact" className="gfe-button gfe-button--primary" style={{
            padding: '16px 40px',
            fontSize: '16px',
            height: 'auto',
            borderRadius: '30px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            Start your journey with us →
          </a>
        </div>

      </div>
    </section>
  );
}

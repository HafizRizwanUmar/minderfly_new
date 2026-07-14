import { useState, useEffect, useRef } from 'react'

const TABS = [
  {
    id: 'idea-stage',
    label: 'Idea Stage',
    headline: 'You have a vision. We help you validate it.',
    body: "Not sure if your idea is viable? We run structured discovery workshops to validate your concept, map out your target market, and identify the key features that matter most. You'll leave with clarity, confidence, and a product roadmap.",
    cta: 'Start a discovery session',
    ctaHref: '/contact',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80',
    imgAlt: 'Founders brainstorming a startup idea',
  },
  {
    id: 'pre-seed',
    label: 'Pre-Seed',
    headline: 'Build fast. Raise with confidence.',
    body: 'We build investor-ready MVPs that showcase your idea compellingly. Our products have helped founders raise pre-seed rounds by demonstrating traction early. We know what investors look for — and we build it.',
    cta: 'Build your MVP',
    ctaHref: '/contact',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80',
    imgAlt: 'Startup team building an MVP',
  },
  {
    id: 'seed',
    label: 'Seed Stage',
    headline: 'Grow your user base. Refine your product.',
    body: 'At seed stage, speed and quality both matter. We embed as your technical co-founders — shipping features, fixing pain points, and helping you achieve the product-market fit investors and users demand.',
    cta: 'Accelerate your growth',
    ctaHref: '/contact',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80',
    imgAlt: 'Team reviewing product metrics',
  },
  {
    id: 'series-a',
    label: 'Series A+',
    headline: 'Scale to new markets. Dominate globally.',
    body: "You've found product-market fit. Now it's time to scale. We help you expand into new geographies, handle enterprise compliance, optimize infrastructure for millions of users, and build the teams needed to sustain global growth.",
    cta: 'Plan your global expansion',
    ctaHref: '/contact',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    imgAlt: 'Global map showing product expansion',
  },
  {
    id: 'non-technical',
    label: 'Non-Technical Founders',
    headline: "No code? No problem. We're your tech team.",
    body: "You don't need to know how to code to build a great product. We act as your complete technical team — from CTO-level strategy to day-to-day development — so you can focus on customers, partnerships, and vision.",
    cta: 'Meet your tech co-founder',
    ctaHref: '/contact',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80',
    imgAlt: 'Non-technical founder working with a developer',
  },
]

export default function SolutionsSection() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const tab = TABS[active]

  return (
    <section className="solutions-section" ref={ref} id="solutions">
      <div className="section-intro reveal">
        <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1a73e8', marginBottom: '12px' }}>
          For every founder
        </p>
        <h2 className="section-intro__headline">We meet you where you are</h2>
        <p className="section-intro__body">
          Whether you're scribbling on a napkin or preparing for Series A, we have the expertise to take you to the next level.
        </p>
      </div>

      {/* Tab buttons */}
      <div className="solutions-tabs reveal">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            className={`solutions-tab-btn${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
            aria-selected={active === i}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="solutions-content reveal reveal-delay-1" key={active}>
        <div className="solutions-content__image">
          <img src={tab.image} alt={tab.imgAlt} loading="lazy" />
        </div>
        <div className="solutions-content__text">
          <h3 className="solutions-content__headline">{tab.headline}</h3>
          <p className="solutions-content__body">{tab.body}</p>
          <a href={tab.ctaHref} className="gfe-button gfe-button--low-emphasis" style={{display:'inline-flex', marginTop:'24px'}}>
            {tab.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

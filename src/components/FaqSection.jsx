import { useState, useRef, useEffect } from 'react'

const DEFAULT_FAQS = [
  {
    q: 'Who is Minderfly for?',
    a: "Minderfly is built for founders who have a real problem to solve and need a technical team that can make it a reality. Whether you're at the idea stage, have early users but need to scale, or are a business that needs a custom software product — we are your engineering and product partner. We've built products used in 100+ countries across EdTech, LegalTech, developer tools, and consumer software.",
  },
  {
    q: 'Do I need a technical background to work with you?',
    a: "Absolutely not. In fact, most of our strongest partnerships are with non-technical founders. You bring the domain expertise, customer insight, and vision — we bring the architecture, engineering, design, and execution. We act as your technical co-founder: we ask the right questions, make the right trade-offs, and ship products that work at scale. You stay in full control without needing to understand a single line of code.",
  },
  {
    q: 'How quickly can you build my MVP?',
    a: "Most focused MVPs ship in 6 to 12 weeks. We start with a structured Discovery Sprint — typically one week — to define scope, user flows, and technical architecture before a single line of code is written. This prevents scope creep and ensures we build the right thing fast. We've shipped production-ready products to real users in as few as 4 weeks for simple concepts, and up to 16 weeks for complex multi-platform products.",
  },
  {
    q: 'Can you help me scale to new countries?',
    a: "Yes — and this is one of our proven strengths. We've successfully shipped software used across 100+ countries. We handle localization (multi-language UI, RTL support), regional compliance and data residency requirements, currency and payment gateway integrations, and cloud infrastructure that scales globally without performance degradation. Reaching a new market is a product problem as much as a business one — and we solve both sides.",
  },
  {
    q: 'What kinds of products have you built?',
    a: "We've built across a wide range of product categories. Our portfolio includes a PKI-based digital signature desktop app (DocSigner), a full PDF editing suite (Sanad PDF Editor), a cloud-based LMS platform (InklessLMS), a VS Code extension for Flutter developers (Flutter Web Emulator), a media player (Cinemafly), and multiple Chrome themes with 50,000+ combined installs. We're equally comfortable building SaaS platforms, Windows desktop applications, web apps, and developer tools.",
  },
  {
    q: 'How do I get started working with Minderfly?',
    a: "Reach out via our Contact page and briefly describe your idea, the problem you're solving, and the stage you're at. We'll schedule a free 30-minute discovery call — no pitch, no commitment — just a real conversation about whether we're a good fit. If we move forward, we'll produce a detailed scope document, timeline, and fixed-cost proposal within a few days. There are no surprises.",
  },
]

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-item__trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <h3 className="faq-item__question">{faq.q}</h3>
        <div
          className="faq-item__icon-wrapper"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="faq-item__icon">
            <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </div>
      </button>
      <div className="faq-item__answer" style={{ maxHeight: open ? '500px' : '0' }}>
        <p>{faq.a}</p>
      </div>
    </div>
  )
}

export default function FaqSection({ faqs, title, subtitle }) {
  const ref = useRef(null)
  const items = faqs || DEFAULT_FAQS
  const heading = title || 'Founder FAQs — answered'
  const body = subtitle || 'Curious about working with us? Here are the questions we hear most from founders.'

  // ── Inject FAQPage JSON-LD schema for Google rich results ────────
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-faq-schema', 'true')
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => { script.remove() }
  }, [items])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="faq-section section-light" ref={ref} id="faqs">
      <div className="section-intro reveal">
        <h2 className="section-intro__headline">{heading}</h2>
        <p className="section-intro__body" style={{ marginTop: '12px' }}>
          {body}
        </p>
      </div>

      <div className="faq-list reveal reveal-delay-1">
        {items.map((faq, i) => (
          <FaqItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  )
}

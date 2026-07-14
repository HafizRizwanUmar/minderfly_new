import { useState, useRef, useEffect } from 'react'

const DEFAULT_FAQS = [
  {
    q: 'Who is Minderfly for?',
    a: "Minderfly is for founders with an idea who want a trusted technical partner to build, launch, and scale their product. Whether you're at the idea stage or post-revenue looking to expand globally, we have the expertise to help you succeed.",
  },
  {
    q: 'Do I need to have a technical background to work with you?',
    a: "Not at all. Many of our best partnerships are with non-technical founders. We become your engineering team, your CTO, and your product partner all in one. You focus on the vision, customers, and business — we handle all the technical execution.",
  },
  {
    q: 'How quickly can you build my MVP?',
    a: "Depending on complexity, most MVPs take between 6 to 14 weeks to ship. We start with a structured discovery phase to define scope clearly, then execute with speed and quality. Our goal is to get you to market, and to your first users, as fast as possible.",
  },
  {
    q: 'Can you help me scale to new countries?',
    a: "Yes — this is one of our core strengths. We have successfully expanded products into 100+ countries, handling everything from localization and regional compliance to infrastructure scaling and local go-to-market strategies. Growth without limits is what we're built for.",
  },
  {
    q: 'What kinds of products have you built?',
    a: 'We have built across a wide range of verticals including EdTech (InklessLMS), Legal & Document Tech (DocSigner, Sanad PDF Editor), Entertainment (Cinemafly), Developer Tools (Flutter Web Emulator), and more. Our team is experienced with mobile apps, web platforms, SaaS, and enterprise software.',
  },
  {
    q: 'How do I get started?',
    a: "Simply reach out to us via our Contact page and tell us about your idea. We'll schedule an initial discovery call — no cost, no commitment — to understand your vision and see how we can help. Great things start with a conversation.",
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

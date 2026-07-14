import { useState, useEffect, useRef } from 'react'

const ArrowForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
)

const PlusIcon = ({ rotated }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"
    style={{ transition: 'transform 0.3s ease', transform: rotated ? 'rotate(45deg)' : 'none' }}>
    <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
)

const CARDS = [
  {
    color: 'red',
    headline: 'From Idea to MVP in Record Time',
    frontImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    backImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    backText: 'We take your raw idea through discovery, design, and development — shipping a fully functional MVP faster than any agency. Our battle-tested process eliminates guesswork and gets you to market quickly.',
    ctaLabel: 'Learn about our process',
    ctaHref: '/our-values/our-commitment',
  },
  {
    color: 'yellow',
    headline: 'World-Class Engineering, Built for Scale',
    frontImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    backImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    backText: 'Our engineers use modern, battle-tested stacks — Flutter, React, Node, cloud-native infrastructure — to build products that scale from your first 100 users to millions across 100+ countries.',
    ctaLabel: 'See our products',
    ctaHref: '/all-products',
  },
  {
    color: 'green',
    headline: 'Design That Converts & Delights',
    frontImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    backImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    backText: 'Great software starts with great design. We craft beautiful, intuitive user experiences that keep users engaged, reduce churn, and turn your product into a brand people love.',
    ctaLabel: 'View our portfolio',
    ctaHref: '/all-products',
  },
  {
    color: 'blue',
    headline: 'Global Scaling & Market Expansion',
    frontImage: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80',
    backImage: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80',
    backText: 'We don\'t just build — we help you grow. From localization and regional compliance to go-to-market strategy, we\'ve successfully expanded products into 100+ countries and counting.',
    ctaLabel: 'Start scaling today',
    ctaHref: '/contact',
  },
]

function FlipCard({ card, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`flip-card flip-card--${card.color}${flipped ? ' flipped' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flip-card__inner">
        {/* Front */}
        <div className="flip-card__front">
          <h3 className="flip-card__headline">{card.headline}</h3>
          <div className="flip-card__image">
            <img
              src={card.frontImage}
              alt={card.headline}
              loading="lazy"
            />
          </div>
        </div>

        {/* Back */}
        <div className="flip-card__back">
          <img
            src={card.backImage}
            alt=""
            className="flip-card__back-image"
            loading="lazy"
          />
          <p className="flip-card__back-text">{card.backText}</p>
          <a href={card.ctaHref} className="gfe-button gfe-button--medium-emphasis">
            {card.ctaLabel} <ArrowForward />
          </a>
        </div>
      </div>

      {/* Toggle button */}
      <button
        className="flip-card__toggle"
        aria-label={flipped ? 'Show front' : 'Show more'}
        onClick={() => setFlipped(f => !f)}
      >
        <PlusIcon rotated={flipped} />
      </button>
    </div>
  )
}

export default function ProductsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="products-section section-light" id="products" ref={sectionRef}>
      <div className="section-intro reveal">
        <h2 className="section-intro__headline">Everything you need to launch &amp; scale</h2>
        <p className="section-intro__body">
          We've built the playbook for taking startups from zero to global. Here's how we support founders at every stage of the journey.
        </p>
      </div>

      <div className="cards-grid">
        {CARDS.map((card, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <FlipCard card={card} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}

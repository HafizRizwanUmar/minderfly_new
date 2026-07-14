import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

const STATS = [
  { number: 100, suffix: '+', label: 'Countries where our products are actively used by real users' },
  { number: 8, suffix: '+', label: 'Software products shipped and scaled across multiple industries' },
  { number: 50, suffix: 'K+', label: 'End users served by the products we have built and launched' },
]

function StatItem({ stat, started, index }) {
  const count = useCountUp(stat.number, 2200, started)

  return (
    <div className="impact-stat reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
      <div className="impact-stat__number">
        {count}{stat.suffix}
      </div>
      <p className="impact-stat__label">{stat.label}</p>
    </div>
  )
}

export default function ImpactSection() {
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setStarted(true)
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach(el => observer.observe(el))
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="impact-section section-grey2" ref={sectionRef}>
      <div className="section-intro reveal" style={{ marginBottom: '0', paddingBottom: '48px' }}>
        <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1a73e8', marginBottom: '12px' }}>
          Our track record
        </p>
        <h2 className="section-intro__headline">Numbers that prove our impact</h2>
        <p className="section-intro__body">
          We don't just talk about building startups — we've done it, repeatedly, at a global scale.
        </p>
      </div>
      <div className="impact-grid">
        {STATS.map((stat, i) => (
          <StatItem key={i} stat={stat} started={started} index={i} />
        ))}
      </div>
    </section>
  )
}

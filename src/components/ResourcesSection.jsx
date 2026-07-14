import { useEffect, useRef } from 'react'

const RESOURCES = [
  {
    tag: 'Guide',
    image: 'https://lh3.googleusercontent.com/UV6LTxTigLSrR-cfNium-YZNasHGzwnFpNQRk-2NRFAM1tETQP_99EWZbpYTT4Um4gFlp6J91_piC9J4nUMVq-nJkj7tPb5nE3_CDyvkcIYhZ58yP5o=w600-v1-rw-e30',
    title: 'Getting started with Google Classroom',
    href: '#',
  },
  {
    tag: 'Training',
    image: 'https://lh3.googleusercontent.com/c6A6kfFi5E9WVieCECjKTEEe_a1XMoDthoLv-_KWRXflv92z9_PdXWu31A6ak6PB-NbPK_oAPNKWwojt_cDqITv3GihIazsT9WkIO11NCLkm7h8lGQ=w600-v1-rw-e30',
    title: 'Educator certification programs',
    href: '#',
  },
  {
    tag: 'Lesson Plans',
    image: 'https://lh3.googleusercontent.com/TuVNcBI4cKD5r6o4TM7sP5skfNTy5ZgozewF058h0bvsvbvmslPOTli6b5aAyScX9TMTVmx9PibtReHxej_ABJFqvbzbgs9A34HTJrKvf8-lRCCU3Z8=w600-v1-rw-e30',
    title: 'Interactive lesson plans and activities',
    href: '#',
  },
  {
    tag: 'Webinar',
    image: 'https://lh3.googleusercontent.com/DpO-BN1eoGD-Qn_yKoZwC-3c7L_Jli1eWGYeQV1IGEr8fFj1zchxB1JulxXwyQdTPh43K79Rw7mXPQu9GrsRffbc3_Tn_U9gMMQ_K_Hr8RGBUfg2Dt0=w600-v1-rw-e30',
    title: 'Live & on-demand professional development webinars',
    href: '#',
  },
]

export default function ResourcesSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="resources-section section-light" ref={ref} id="resources">
      <div className="section-intro reveal">
        <h2 className="section-intro__headline">Resources for educators</h2>
        <p className="section-intro__body">
          Free tools, training, and curriculum guides to help every teacher thrive.
        </p>
      </div>

      <div className="resources-grid">
        {RESOURCES.map((res, i) => (
          <a key={i} href={res.href} className="resource-card reveal" style={{ transitionDelay: `${i * 0.1}s`, textDecoration: 'none' }}>
            <img src={res.image} alt={res.title} className="resource-card__image" loading="lazy" />
            <div className="resource-card__content">
              <span className="resource-card__tag">{res.tag}</span>
              <p className="resource-card__title">{res.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'

const ArrowForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
)

const GeminiStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
    <defs>
      <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4"/>
        <stop offset="100%" stopColor="#9C27B0"/>
      </linearGradient>
    </defs>
    <path fill="url(#g1)" d="M24 4 L27.5 20.5 L44 24 L27.5 27.5 L24 44 L20.5 27.5 L4 24 L20.5 20.5 Z"/>
  </svg>
)

export default function GeminiSection() {
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
    <section className="gemini-section" ref={ref} id="gemini">
      <div className="gemini-section__inner">
        <div className="gemini-section__content reveal">
          <div className="gemini-section__tag">
            <GeminiStar />
            New from Google
          </div>
          <h2 className="gemini-section__headline">
            AI-powered tools for every classroom
          </h2>
          <p className="gemini-section__body">
            Gemini for Google Workspace for Education brings AI-powered tools to the classroom, helping educators save time on administrative tasks while enabling students to explore, create, and learn more effectively.
          </p>
          <a href="#" className="gfe-button gfe-button--primary gfe-button--large" style={{borderRadius:'4px'}}>
            Explore Gemini for Education <ArrowForward />
          </a>
        </div>

        <div className="gemini-section__visual reveal reveal-delay-2">
          <img
            src="https://lh3.googleusercontent.com/YYkB0dVq1er2-qQN30GFmN4LilQTh3ylrgn8n0PtBk2AjrXmZKmkjZdgMHBRvCwDY9Ix4f7MdO0sfhk2D0bxEps32I_d0OzOPGapjBEmfwYIUrunhoU=w900-v1-rw-e30"
            alt="Gemini for Education interface showing AI tools in a classroom environment"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

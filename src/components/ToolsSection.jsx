import { useEffect, useRef } from 'react'

const ArrowForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
)

const TOOLS = [
  {
    iconUrl: 'https://lh3.googleusercontent.com/2Qy90Vhl7ynj1BcIB04YVQ18_RG1t4D_kwUT5b0tnSCftK0-ULa-gEJWOXF4sBF9YHT1zTphf_aGu6iUnE-YHvKDpWlDZkzg5y2nGPMxUzcoTITzcg=w80-v1-rw-e30',
    iconBg: '#e8f0fe',
    title: 'Google Classroom',
    body: 'Simplify teaching, learning, and collaboration—all from one place. Create, distribute, and grade assignments seamlessly.',
    href: '#',
  },
  {
    iconUrl: 'https://lh3.googleusercontent.com/Rd73BCgv_INtBizqIirU30qMF40VtXXt3RlNcop3ex0y_ZBZodbGo1L0JBQxt8_MN00JQfxsv_XtNT0wLIa_F6TI5ZlyNA0JC2imCw3BpvDvwpXWjLs=w80-v1-rw-e30',
    iconBg: '#e6f4ea',
    title: 'Google Workspace for Education',
    body: 'Collaboration tools designed to help students and educators connect, create, and learn together in real time.',
    href: '#',
  },
  {
    iconUrl: 'https://lh3.googleusercontent.com/7OzZ-fo-8YwpohUpu_YFtNAXBwhk3XLkKrC2BsQCe8T3Ln1clHwco5oOsUjrcVb-iiTnKb6Q-9rPYWgC9tJqeFVnN5mdWXFVvNKzd6wpCCsMze8ACCA=w80-v1-rw-e30',
    iconBg: '#fef7e0',
    title: 'Chromebooks',
    body: 'Purpose-built for learning—fast, secure, and easy to manage. Chromebooks give every student access to powerful educational tools.',
    href: '#',
  },
  {
    iconUrl: 'https://lh3.googleusercontent.com/hWrtSQyrUtPxeRkJXxaXC6_JPtzT7KNxZ_CWc9oCTlBvNymmHBTREu30MCktfFen5R3eZUPv3Pm9hjXaHmKOiRdoShyBtNi5owSL3buoHlhlV3NSHQ=w80-v1-rw-e30',
    iconBg: '#fce8e6',
    title: 'Google Meet',
    body: 'Connect face-to-face from anywhere. High-quality video calling for virtual classrooms, parent-teacher meetings, and staff collaboration.',
    href: '#',
  },
  {
    iconUrl: 'https://lh3.googleusercontent.com/8oS_CL4o17ghs4KaWUVC9JfKpzB4_W0518jfHbvBE6NfP0i_ObgKG97XZLtoZ3c6DeMX-T5bSNYr8DTcEZkmjFgwsSV1JN8hMXCQxl709sTT2ErhTMo=w80-v1-rw-e30',
    iconBg: '#e8f0fe',
    title: 'Google Drive',
    body: 'Safe, secure cloud storage for all your school files. Share, collaborate, and access resources from any device.',
    href: '#',
  },
  {
    iconUrl: 'https://lh3.googleusercontent.com/oGWMcMSrOl6w7-k9ZgiKRSb8G32g3NZMuoWFMKi5OJqvmQI-Y69l2z4U1REGOIs8M8-baN63sGhjd2nSmYggZIrkkiJtxayu6PMYyp0RwWiUPyTVvLo=w80-v1-rw-e30',
    iconBg: '#e6f4ea',
    title: 'Google Sites',
    body: 'Build beautiful, collaborative websites together. Perfect for student portfolios, classroom pages, and school projects.',
    href: '#',
  },
]

export default function ToolsSection() {
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
    <section className="tools-section section-light" ref={ref} id="tools">
      <div className="section-intro reveal">
        <h2 className="section-intro__headline">Tools for every learning need</h2>
        <p className="section-intro__body">
          From collaboration to communication, Google's suite of education tools helps every student and teacher succeed.
        </p>
      </div>

      <div className="tools-grid">
        {TOOLS.map((tool, i) => (
          <div key={i} className="tool-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
            <div className="tool-card__icon" style={{ background: tool.iconBg }}>
              <img src={tool.iconUrl} alt={tool.title} loading="lazy" />
            </div>
            <h3 className="tool-card__headline">{tool.title}</h3>
            <p className="tool-card__body">{tool.body}</p>
            <a href={tool.href} className="tool-card__link">
              Learn more <ArrowForward />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

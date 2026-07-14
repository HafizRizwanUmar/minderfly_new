import { useEffect, useRef } from 'react'

const STORIES = [
  {
    tag: 'Case Study',
    image: 'https://lh3.googleusercontent.com/YnyNpejk2aMbCWooLj83__iyyBGSZFfk8QyLvNiDtPHH4y7gLNGzZH0nA5iWeP0VfanJifmH7ntlZdFDeuf924qNg4io7tHLoYwoOmSgCKAZCSO2xw=w800-v1-rw-e30',
    headline: 'How schools are transforming learning with Chromebooks and Google Classroom',
    body: 'Discover how educators around the world are using Google tools to personalize learning and improve student outcomes.',
    href: '#',
  },
  {
    tag: 'Blog',
    image: 'https://lh3.googleusercontent.com/8q5ADS242hG8cHB6smjH9ht0QOSIZ4olc3hLKrOXK398htfW95BtzjBv4U50ARwqdURJRk02t1jVIu28Q_0Z0jOn455E5d-H9Vj8Y3wFjGSqpLflK0G2=w800-v1-rw-e30',
    headline: 'Bringing AI into the classroom: What educators need to know',
    body: 'Explore how teachers are using Gemini and AI tools to spark curiosity, save time, and inspire students to go further.',
    href: '#',
  },
  {
    tag: 'Research',
    image: 'https://lh3.googleusercontent.com/WgPVu_yRgXgYAxHmOCE9c2q1hbkdCKz702v9GPfWsR67kuYALuZmIYg0DUF0zuu_r_6Tu6lWUm7tDnwfTshEczh3Monmxfxh_4tYZbq7LI1w1uSBU1hF=w800-v1-rw-e30',
    headline: 'Research insights: How technology supports student engagement and achievement',
    body: 'New studies reveal the positive impacts of personalized, tech-enabled learning environments on student motivation and performance.',
    href: '#',
  },
]

export default function StoriesSection() {
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
    <section className="stories-section section-grey" ref={ref} id="stories">
      <div className="section-intro reveal">
        <h2 className="section-intro__headline">Stories from educators and learners</h2>
        <p className="section-intro__body">
          See how Google for Education is making a real difference in classrooms around the world.
        </p>
      </div>

      <div className="stories-grid">
        {STORIES.map((story, i) => (
          <a key={i} href={story.href} className="story-card reveal" style={{ transitionDelay: `${i * 0.1}s`, textDecoration: 'none' }}>
            <img src={story.image} alt={story.headline} className="story-card__image" loading="lazy" />
            <div className="story-card__content">
              <span className="story-card__tag">{story.tag}</span>
              <h3 className="story-card__headline">{story.headline}</h3>
              <p className="story-card__body">{story.body}</p>
            </div>
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a href="#" className="gfe-button gfe-button--outline gfe-button--large">
          View all stories
        </a>
      </div>
    </section>
  )
}

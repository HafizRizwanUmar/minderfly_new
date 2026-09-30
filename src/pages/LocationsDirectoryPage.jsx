import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { CITIES } from '../data/locations'

const SERVICES = [
  { slug: 'mobile-app-development-company', name: 'Mobile App Development' },
  { slug: 'web-app-development-company', name: 'Web App Development' },
  { slug: 'saas-development-company', name: 'SaaS Development' },
  { slug: 'flutter-development-company', name: 'Flutter Development' },
  { slug: 'ui-ux-design-agency', name: 'UI/UX Design' },
]

export default function LocationsDirectoryPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', minHeight: '100vh', padding: '120px 24px 80px' }}>
      <SEOHead
        title="Service Locations Directory | Minderfly"
        description="Browse all the global cities and regions where Minderfly provides world-class mobile app, web app, and SaaS development services."
        canonical="https://minderfly.com/locations"
      />
      <div className="gfe-container" style={{ maxWidth: '1000px' }}>
        <h1 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Global Service Locations</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '64px', maxWidth: '600px', lineHeight: 1.6 }}>
          We provide top-tier engineering and design services to startups and enterprises across the globe. Browse our services by location.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {SERVICES.map(service => (
            <div key={service.slug}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
                {service.name}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {CITIES.map(city => (
                  <Link 
                    key={city} 
                    to={`/services/${service.slug}/${city.toLowerCase()}`}
                    style={{ color: 'var(--google-blue-600)', textDecoration: 'none', fontSize: '0.95rem' }}
                  >
                    {city.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

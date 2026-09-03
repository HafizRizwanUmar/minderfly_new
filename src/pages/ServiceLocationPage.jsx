import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CITIES } from '../data/locations';
import { ArrowRight, Code, Smartphone, Globe, CheckCircle, Layout } from 'lucide-react';

const SERVICES = {
  'mobile-app-development': {
    name: 'Mobile App Development',
    titlePrefix: 'Top Mobile App Development Company in',
    desc: 'Looking for the best mobile app developers in {city}? Minderfly builds scalable iOS and Android apps for startups. Get a free quote today.',
    heroText: 'We help startups and enterprises in {city} build scalable, world-class iOS and Android applications. From MVP to global launch, we are your technical partners.',
    icon: <Smartphone size={32} />
  },
  'custom-web-app-development': {
    name: 'Custom Web App Development',
    titlePrefix: 'Custom Web App Development Company in',
    desc: 'Hire top web app developers serving {city}. We build fast, secure, and scalable custom web applications using React, Next.js, and Node.js.',
    heroText: 'Need a powerful web application? We partner with businesses in {city} to engineer custom web platforms, portals, and progressive web apps (PWAs).',
    icon: <Code size={32} />
  },
  'saas-development-agency': {
    name: 'SaaS Development',
    titlePrefix: 'Expert SaaS Development Agency serving',
    desc: 'Build your SaaS product with the leading agency for {city}. We architect multi-tenant SaaS platforms with robust subscription and billing systems.',
    heroText: 'Launch your Software-as-a-Service business with confidence. We help founders in {city} build secure, multi-tenant architectures that scale to thousands of users.',
    icon: <Globe size={32} />
  },
  'flutter-development-company': {
    name: 'Flutter Development',
    titlePrefix: 'Top Flutter Development Company in',
    desc: 'Hire expert Flutter developers in {city}. We build beautiful, high-performance cross-platform apps for iOS, Android, and Web from a single codebase.',
    heroText: 'Cut your development time in half without sacrificing quality. Our Flutter experts build stunning apps for clients in {city} that work flawlessly on every device.',
    icon: <Smartphone size={32} />
  },
  'ui-ux-design-agency': {
    name: 'UI/UX Design',
    titlePrefix: 'Premium UI/UX Design Agency in',
    desc: 'Looking for a UI/UX design agency in {city}? We design beautiful, intuitive, and high-converting digital products for startups and enterprises.',
    heroText: 'Design is how it works. We help companies in {city} craft world-class user interfaces and user experiences that drive engagement and retention.',
    icon: <Layout size={32} />
  }
};

export default function ServiceLocationPage() {
  const { serviceSlug, city } = useParams();
  
  const isValidCity = CITIES.includes(city);
  const service = SERVICES[serviceSlug];
  
  const formattedCity = city ? city.replace(/-/g, ' ') : '';

  useEffect(() => { window.scrollTo(0, 0) }, [city, serviceSlug]);

  if (!isValidCity || !service) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Page Not Found</h1>
        <Link to="/" className="gfe-button gfe-button--primary" style={{ marginTop: '1rem', padding: '12px 24px', borderRadius: '12px' }}>Go Home</Link>
      </div>
    );
  }

  const title = \`\${service.titlePrefix} \${formattedCity} | Minderfly\`;
  const description = service.desc.replace('{city}', formattedCity);
  const heroText = service.heroText.replace('{city}', formattedCity);
  const url = \`https://minderfly.com/services/\${serviceSlug}/\${city}\`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'Minderfly',
      url: 'https://minderfly.com'
    },
    areaServed: {
      '@type': 'City',
      name: formattedCity
    },
    description: description
  };

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <SEOHead title={title} description={description} canonical={url} schema={schema} />

      {/* Hero */}
      <section style={{ padding: '100px 24px 80px', background: 'var(--grey-50)', textAlign: 'center' }}>
        <div className="gfe-container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--google-blue-100)', color: 'var(--google-blue-700)', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '24px' }}>
            <Globe size={16} /> Serving {formattedCity} & Worldwide
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>
            {service.titlePrefix} <span style={{ color: 'var(--google-blue-600)' }}>{formattedCity}</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            {heroText}
          </p>
          <Link to="/contact" className="gfe-button gfe-button--primary" style={{ padding: '16px 32px', fontSize: '1.1rem', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Discuss your project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 24px' }}>
        <div className="gfe-container">
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 800, marginBottom: '48px' }}>Our Expertise for {formattedCity}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: service.icon, title: service.name, desc: \`World-class \${service.name.toLowerCase()} tailored to your specific business requirements.\` },
              { icon: <CheckCircle size={32} />, title: 'Startup DNA', desc: 'We do not just write code; we help you architect the product, design the user experience, and plan for scale from day one.' },
              { icon: <Code size={32} />, title: 'Modern Tech Stack', desc: 'Built in-house using modern technologies like Flutter, React Native, React, Next.js, and Supabase.' }
            ].map((s, i) => (
              <div key={i} style={{ padding: '32px', border: '1px solid var(--border-color)', borderRadius: '16px', background: 'var(--white)' }}>
                <div style={{ color: 'var(--google-blue-600)', marginBottom: '20px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section style={{ padding: '80px 24px', background: 'var(--grey-50)' }}>
        <div className="gfe-container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px' }}>Why Choose Minderfly in {formattedCity}?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
            Finding the right software development agency in {formattedCity} can be challenging. Many agencies outsource their work or use outdated technologies. At Minderfly, we build everything in-house using modern stacks. 
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
            Whether you need a consumer-facing social app, an internal enterprise tool, or an educational platform, our team has the experience to deliver. We have shipped products used in 100+ countries, meaning your project is in safe hands.
          </p>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/contact" className="gfe-button gfe-button--outline" style={{ padding: '12px 24px', borderRadius: '8px' }}>
              Contact our {formattedCity} team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

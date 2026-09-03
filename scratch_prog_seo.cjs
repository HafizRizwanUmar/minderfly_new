const fs = require('fs');

const cities = [
  "New-York", "Los-Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San-Antonio", "San-Diego", "Dallas", "San-Jose",
  "Austin", "Jacksonville", "Fort-Worth", "Columbus", "San-Francisco", "Charlotte", "Indianapolis", "Seattle", "Denver", "Washington-DC",
  "Boston", "El-Paso", "Nashville", "Detroit", "Oklahoma-City", "Portland", "Las-Vegas", "Memphis", "Louisville", "Baltimore",
  "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Mesa", "Sacramento", "Atlanta", "Kansas-City", "Colorado-Springs", "Omaha",
  "Raleigh", "Miami", "Long-Beach", "Virginia-Beach", "Oakland", "Minneapolis", "Tulsa", "Arlington", "Tampa", "New-Orleans",
  "London", "Birmingham", "Manchester", "Glasgow", "Newcastle", "Sheffield", "Leeds", "Bristol", "Nottingham", "Southampton",
  "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec-City", "Hamilton", "Kitchener",
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold-Coast", "Canberra", "Newcastle-AU", "Wollongong", "Logan-City",
  "Dubai", "Abu-Dhabi", "Sharjah", "Riyadh", "Jeddah", "Mecca", "Medina", "Doha", "Kuwait-City", "Manama",
  "Berlin", "Munich", "Frankfurt", "Hamburg", "Stuttgart", "Paris", "Lyon", "Marseille", "Toulouse", "Nice",
  "Rome", "Milan", "Naples", "Turin", "Palermo", "Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza",
  "Amsterdam", "Rotterdam", "The-Hague", "Utrecht", "Eindhoven", "Stockholm", "Gothenburg", "Malmo", "Oslo", "Bergen",
  "Copenhagen", "Aarhus", "Helsinki", "Espoo", "Dublin", "Cork", "Zurich", "Geneva", "Basel", "Vienna",
  "Singapore", "Kuala-Lumpur", "Jakarta", "Bangkok", "Manila", "Ho-Chi-Minh-City", "Hanoi", "Tokyo", "Osaka", "Seoul",
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Gujranwala", "Sialkot",
  "Cairo", "Alexandria", "Giza", "Cape-Town", "Johannesburg", "Durban", "Pretoria", "Nairobi", "Mombasa", "Lagos",
  "Sao-Paulo", "Rio-de-Janeiro", "Brasilia", "Salvador", "Fortaleza", "Buenos-Aires", "Cordoba", "Rosario", "Bogota", "Medellin",
  "Lima", "Arequipa", "Santiago", "Valparaiso", "Caracas", "Maracaibo", "Quito", "Guayaquil", "Montevideo", "Asuncion",
  "Mexico-City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "San-Juan", "Havana", "Santo-Domingo", "Panama-City", "San-Jose-CR"
];

const locationsContent = \`export const CITIES = [
  \${cities.map(c => \`"\${c}"\`).join(',\\n  ')}
];
\`;

fs.writeFileSync('src/data/locations.js', locationsContent, 'utf8');
console.log('Created locations.js with ' + cities.length + ' cities.');

// 2. Create the React Component
const componentContent = \`import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { CITIES } from '../data/locations';
import { ArrowRight, Code, Smartphone, Globe, CheckCircle } from 'lucide-react';

export default function ServiceLocationPage() {
  const { city } = useParams();
  
  // Validate city exists to avoid 404s, format it nicely
  const isValidCity = CITIES.includes(city);
  const formattedCity = city ? city.replace(/-/g, ' ') : '';

  useEffect(() => { window.scrollTo(0, 0) }, [city]);

  if (!isValidCity) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Location Not Found</h1>
        <Link to="/" className="gfe-button gfe-button--primary" style={{ marginTop: '1rem', padding: '12px 24px', borderRadius: '12px' }}>Go Home</Link>
      </div>
    );
  }

  const title = \`Top Mobile App Development Company in \${formattedCity} | Minderfly\`;
  const description = \`Looking for the best mobile app developers in \${formattedCity}? Minderfly builds scalable iOS and Android apps for startups. Get a free quote today.\`;
  const url = \`https://minderfly.com/services/mobile-app-development/\${city}\`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Mobile App Development',
    provider: {
      '@type': 'Organization',
      name: 'Minderfly',
      url: 'https://minderfly.com'
    },
    areaServed: {
      '@type': 'City',
      name: formattedCity
    },
    description: \`Custom iOS and Android mobile app development services for businesses in \${formattedCity}.\`
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
            Top Mobile App Development Company in <span style={{ color: 'var(--google-blue-600)' }}>{formattedCity}</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            We help startups and enterprises in {formattedCity} build scalable, world-class iOS and Android applications. From MVP to global launch, we are your technical partners.
          </p>
          <Link to="/contact" className="gfe-button gfe-button--primary" style={{ padding: '16px 32px', fontSize: '1.1rem', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Discuss your project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 24px' }}>
        <div className="gfe-container">
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 800, marginBottom: '48px' }}>Our App Development Services for {formattedCity}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: <Smartphone size={32} />, title: 'iOS & Android Apps', desc: 'Cross-platform development using Flutter and React Native for blazing fast performance on both platforms.' },
              { icon: <Code size={32} />, title: 'Custom SaaS Platforms', desc: 'Scalable web applications and administrative dashboards to power your mobile app backend.' },
              { icon: <CheckCircle size={32} />, title: 'MVP Development', desc: 'We help founders launch their Minimum Viable Product in 4-8 weeks to start gathering user feedback fast.' }
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
            Finding the right software development agency in {formattedCity} can be challenging. Many agencies outsource their work or use outdated technologies. At Minderfly, we build everything in-house using modern stacks like Flutter, React Native, and Supabase. 
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
            Whether you need a consumer-facing social app, an internal enterprise tool, or an educational platform, our team has the experience to deliver. We don't just write code; we help you architect the product, design the user experience, and plan for scale from day one.
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
\`;

fs.writeFileSync('src/pages/ServiceLocationPage.jsx', componentContent, 'utf8');
console.log('Created ServiceLocationPage.jsx');

import { useRef, useEffect } from 'react';
import cinemaflyLogo from '../assets/product logos/cinemafly.png'
import docsignerLogo from '../assets/product logos/docsigner.png'
import inklessLogo from '../assets/product logos/inkless.png'
import sanadLogo from '../assets/product logos/sanad.png'
import emulatorLogo from '../assets/product logos/Emulator.png'

export default function SuiteSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const productLogos = [
    { name: 'Cinemafly', src: cinemaflyLogo },
    { name: 'DocSigner', src: docsignerLogo },
    { name: 'SanadPdf Editor', src: sanadLogo },
    { name: 'InklessLMS', src: inklessLogo },
    { name: 'Flutter Web Emulator', src: emulatorLogo },
  ];

  return (
    <section className="suite-section section-light" ref={ref} style={{ padding: '80px 0', borderTop: '1px solid #dadce0' }}>
      <div className="gfe-container" style={{ maxWidth: '900px' }}>

        {/* Products we've built */}
        <div className="section-intro reveal" style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1a73e8', marginBottom: '12px' }}>
            Real products. Real users. Real impact.
          </p>
          <h2 className="section-intro__headline">Proven software, shipped globally</h2>
          <p className="section-intro__body">
            We've built and scaled multiple software products — each trusted by thousands of users worldwide.
            When you work with us, you're backed by a team with a real track record.
          </p>
        </div>

        {/* Product Logo Grid */}
        <div className="suite-icons reveal" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '32px',
          marginBottom: '56px',
          padding: '0 40px'
        }}>
          {productLogos.map((logo, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f8f9fa',
                borderRadius: '16px',
                padding: '8px',
                boxShadow: '0 1px 4px rgba(60,64,67,0.15)',
              }}>
                <img src={logo.src} alt={logo.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={{ fontSize: '11px', color: '#5f6368', fontWeight: '500', textAlign: 'center' }}>{logo.name}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="suite-cta reveal reveal-delay-2" style={{ textAlign: 'center' }}>
          <a href="/all-products" className="gfe-button" style={{
            display: 'inline-block',
            padding: '14px 32px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#1a73e8',
            background: 'white',
            border: '1px solid #dadce0',
            borderRadius: '30px',
            textDecoration: 'none',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.target.style.background = '#f8f9fa'}
          onMouseOut={(e) => e.target.style.background = 'white'}
          >
            Explore all our products →
          </a>
        </div>

      </div>
    </section>
  );
}

import { useEffect, useState } from 'react'
import cinemaflyLogo from '../assets/product logos/cinemafly.png'
import docsignerLogo from '../assets/product logos/docsigner.png'
import sanadLogo from '../assets/product logos/sanad.png'
import inklessLogo from '../assets/product logos/inkless.png'
import emulatorLogo from '../assets/product logos/Emulator.png'
import lunarLogo from '../assets/product logos/lunar.png'
import minimalLogo from '../assets/product logos/minimal.png'
import pastelLogo from '../assets/product logos/pastel.png'

export default function AllProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

  const handlePrev = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  const handleNext = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))

  const products = [
    { name: 'Cinemafly', img: cinemaflyLogo, link: '/products/cinemafly' },
    { name: 'DocSigner', img: docsignerLogo, link: '/products/docsigner' },
    { name: 'SanadPdf Editor', img: sanadLogo, link: '/products/sanad-pdf-editor' },
    { name: 'InklessLMS', img: inklessLogo, link: '/products/inkless-lms' },
    { name: 'Flutter Web Emulator', img: emulatorLogo, link: '/products/flutter-web-emulator' },
    { name: 'Minimal Desk Theme', img: minimalLogo, link: '/products/minimal-desk-theme' },
    { name: 'Pastel Aurora', img: pastelLogo, link: '/products/pastel-aurora' },
    { name: 'Lunar Leap Theme', img: lunarLogo, link: '/products/lunar-leap-theme' },
  ]

  // Duplicate for infinite marquee
  const marqueeItems = [...products, ...products, ...products]

  return (
    <div style={{ background: '#fff', fontFamily: '"Google Sans", Roboto, Arial, sans-serif' }}>
      <style>{`
        .all-products-marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          padding: 0 0 40px;
          border-bottom: 1px solid #e0e0e0;
          margin-bottom: 40px;
          position: relative;
        }
        .all-products-marquee {
          display: inline-block;
          animation: marqueeScroll 30s linear infinite;
        }
        .all-products-marquee:hover {
          animation-play-state: paused;
        }
        .marquee-icon {
          font-size: 32px;
          margin: 0 40px;
          display: inline-block;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Translates exactly one set of products */
        }
        .product-grid-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border: 1px solid #dadce0;
          border-radius: 12px;
          background: #fff;
          text-decoration: none;
          color: #202124;
          transition: background-color 0.2s, box-shadow 0.2s;
        }
        .product-grid-card:hover {
          background-color: #f8f9fa;
          box-shadow: 0 1px 3px rgba(60,64,67,0.3);
        }
        .carousel-container {
          background: #e8f0fe;
          border-radius: 24px;
          padding: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          max-width: 1200px;
          margin: 0 auto 80px;
          overflow: hidden;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #dadce0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .carousel-btn:hover {
          background: #f1f3f4;
        }
        .carousel-btn.prev { left: 20px; }
        .carousel-btn.next { right: 20px; }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
        }
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid #5f6368;
          cursor: pointer;
        }
        .carousel-dot.active {
          background: #202124;
          border-color: #202124;
        }
      `}</style>

      {/* 1. Hero Section (Marquee & Headline) */}
      <section style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '80px' }}>
        <div className="all-products-marquee-container">
          <div className="all-products-marquee">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="marquee-icon">
                {item.img ? (
                  <img src={item.img} alt={item.name} style={{ width: '32px', height: '32px', verticalAlign: 'middle', objectFit: 'contain' }} />
                ) : (
                  item.icon
                )}
              </span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', padding: '0 20px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '400', color: '#202124', margin: '0' }}>
            Helpful products, built with you in mind
          </h1>
        </div>
      </section>

      {/* 2. Featured Carousel */}
      <div style={{ padding: '0 20px' }}>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <div style={{ flex: '1', maxWidth: '400px', marginLeft: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '400', color: '#202124', marginBottom: '16px' }}>
              Minderfly Live
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#5f6368', marginBottom: '32px', lineHeight: '1.5' }}>
              Experience the next generation of intuitive software solutions. Work smarter, not harder.
            </p>
            <a href="#" className="gfe-button gfe-button--primary" style={{ padding: '12px 32px', borderRadius: '24px' }}>
              Talk it out
            </a>
          </div>

          <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: '#000', borderRadius: '24px', width: '300px', height: '400px', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.2)' }}>
               {/* Mock Phone Screen */}
               <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" alt="Tech" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
               <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.2)', padding: '12px 24px', borderRadius: '32px', backdropFilter: 'blur(10px)' }}>
                 <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}></div>
                 <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}></div>
                 <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }}></div>
               </div>
            </div>
          </div>

          <button className="carousel-btn next" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div className="carousel-dots">
          {[...Array(totalSlides)].map((_, i) => (
            <div key={i} className={`carousel-dot ${currentSlide === i ? 'active' : ''}`} onClick={() => setCurrentSlide(i)}></div>
          ))}
        </div>
      </div>

      {/* 3. Products Grid */}
      <section style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '400', color: '#202124', textAlign: 'center', marginBottom: '40px' }}>
          Minderfly products
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px', gap: '16px' }}>
          <span style={{ color: '#5f6368', fontSize: '1rem' }}>Filter by:</span>
          <select style={{ padding: '8px 40px 8px 16px', fontSize: '1rem', border: '1px solid #dadce0', borderRadius: '4px', background: '#fff', color: '#202124', appearance: 'none', cursor: 'pointer' }}>
            <option>Featured</option>
            <option>All</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {products.map((product, index) => (
            <a key={index} href={product.link} className="product-grid-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {product.img ? (
                  <img src={product.img} alt={product.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                ) : (
                  <span style={{ fontSize: '32px', width: '32px', display: 'inline-block', textAlign: 'center' }}>{product.icon}</span>
                )}
                <span style={{ fontSize: '1rem', fontWeight: '500' }}>{product.name}</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star, Download, ArrowRight, ChevronDown, ChevronUp,
  Shield, Zap, Award, Users, Globe, Check, Newspaper,
  ArrowLeft, ExternalLink, Monitor, Smartphone, LayoutGrid
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getProduct } from '../data/products/index';

const renderBody = (body) =>
  body.split('\n\n').map((para, i) => {
    if (para.startsWith('**') && para.trim().endsWith('**') && !para.slice(2).includes('**')) {
      return <h3 key={i} style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.75rem' }}>{para.replace(/\*\*/g, '')}</h3>;
    }
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((p, j) =>
      p.startsWith('**') ? <strong key={j} style={{ color: 'var(--text-primary)' }}>{p.replace(/\*\*/g, '')}</strong> : p
    );
    return (
      <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' }}>
        {rendered}
      </p>
    );
  });

const RatingStars = ({ rating }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} size={14} style={{ fill: s <= Math.round(rating) ? '#FBBC05' : 'none', color: s <= Math.round(rating) ? '#FBBC05' : 'var(--grey-400)' }} />
    ))}
    <span style={{ marginLeft: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{rating}</span>
  </div>
);

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div style={{ border: '1px solid var(--border-color)', borderRadius: '16px', overflow: 'hidden', marginBottom: '10px', background: 'var(--white)' }}>
    <button
      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
      onClick={onToggle}
    >
      <span style={{ fontWeight: 600, color: 'var(--text-primary)', paddingRight: '16px', fontSize: '1rem' }}>{faq.q}</span>
      {isOpen ? <ChevronUp size={18} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
          <p style={{ padding: '0 24px 20px', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{faq.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProduct(slug);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => { window.scrollTo(0, 0) }, [slug]);

  if (!product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="gfe-headline-2">Product Not Found</h1>
        <Link to="/" className="gfe-button gfe-button--primary" style={{ marginTop: '20px' }}>Go Home</Link>
      </div>
    );
  }

  const contentSections = product.sections.filter((s) => s.id !== 'faq');
  const isDesktop = product.platforms.includes('Windows') || product.platforms.includes('macOS');
  const isMobile = product.platforms.includes('iOS') || product.platforms.includes('Android');
  const PlatformIcon = isMobile && !isDesktop ? Smartphone : (isDesktop && !isMobile ? Monitor : LayoutGrid);

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
      <SEOHead
        title={`${product.name} | Minderfly`}
        description={product.shortDesc}
        canonical={`https://minderfly.com/products/${product.slug}`}
      />

      {/* ── HERO ── */}
      <section style={{ padding: '60px 24px', background: 'var(--white)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <div className="gfe-container gfe-responsive-row" style={{ position: 'relative', zIndex: 1, padding: '20px 0 60px' }}>
          
          {/* Left — content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '1.5rem', width: 'fit-content' }}>
              <ArrowLeft size={14} /> Back
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-1)', border: '1px solid var(--border-color)' }}>
                <img src={product.logo} alt={`${product.name} logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--text-primary)', borderRadius: '100px', padding: '6px 14px', fontSize: '11px', fontWeight: '700', color: 'var(--white)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                <PlatformIcon size={14} style={{marginTop: '-2px'}} /> {product.category}
              </div>
            </div>

            <h1 style={{ fontSize: 'clamp(2.8rem, 4vw, 4.5rem)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-1.5px', color: 'var(--text-primary)', marginBottom: '16px' }}>
              {product.name}
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'var(--google-blue-600)', fontWeight: 600, marginBottom: '20px' }}>
              {product.tagline}
            </p>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '480px', marginBottom: '32px' }}>
              {product.shortDesc}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <RatingStars rating={product.rating} />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{product.reviews.toLocaleString()} reviews</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>v{product.version}</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <a href={product.appStoreLink} className="gfe-button gfe-button--primary" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                <Download size={18} /> Download Free
              </a>
              <a href={product.playStoreLink} className="gfe-button gfe-button--outline" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                <ExternalLink size={18} /> Visit Store
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {product.platforms.map((p) => (
                <span key={p} style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: '999px', background: 'var(--grey-50)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', fontWeight: 500 }}>{p}</span>
              ))}
            </div>
          </div>

          {/* Right — Screenshot */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {product.screenshot ? (
              <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: '-16px', borderRadius: '24px', filter: 'blur(40px)', opacity: 0.15, background: product.accentColor || 'var(--google-blue-600)' }} />
                {product.screenshot2 ? (
                  <div style={{ position: 'relative', display: 'flex', width: '110%', marginLeft: '5%' }}>
                    <img src={product.screenshot} alt={`${product.name} screenshot 1`} style={{ position: 'relative', zIndex: 1, borderRadius: '16px', boxShadow: 'var(--shadow-2)', width: '60%', objectFit: 'cover', border: '1px solid var(--border-color)', transform: 'translateY(-10px)' }} />
                    <img src={product.screenshot2} alt={`${product.name} screenshot 2`} style={{ position: 'relative', zIndex: 2, borderRadius: '16px', boxShadow: '0 24px 60px rgba(0,0,0,0.15)', width: '60%', objectFit: 'cover', border: '1px solid var(--border-color)', marginLeft: '-20%', transform: 'translateY(30px)' }} />
                  </div>
                ) : (
                  <img src={product.screenshot} alt={`${product.name} screenshot`} style={{ position: 'relative', borderRadius: '18px', boxShadow: '0 24px 80px rgba(0,0,0,0.1)', maxWidth: '100%', maxHeight: '420px', objectFit: 'cover', border: '1px solid var(--border-color)' }} />
                )}
              </div>
            ) : (
              <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', background: 'var(--grey-50)', border: '1px solid var(--border-color)' }}>🖥️</div>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'var(--grey-50)', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: Star, label: 'Rating', value: `${product.rating} / 5` },
            { icon: Users, label: 'Reviews', value: product.reviews.toLocaleString() },
            { icon: Globe, label: 'Platforms', value: product.platforms.length },
            { icon: Shield, label: 'App Size', value: product.size },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--white)', borderRadius: '16px', padding: '20px 24px', boxShadow: 'var(--shadow-1)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--google-blue-100)' }}>
                <Icon size={20} style={{ color: 'var(--google-blue-600)' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, margin: 0 }}>{label}</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTENT TABS ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '3.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
          {contentSections.map((sec, i) => (
            <button key={sec.id} onClick={() => setActiveSection(i)}
              style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.2s', background: activeSection === i ? 'var(--google-blue-100)' : 'transparent', color: activeSection === i ? 'var(--google-blue-700)' : 'var(--text-secondary)' }}>
              {sec.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {contentSections.map((sec, i) =>
            activeSection === i ? (
              <motion.div key={sec.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '4rem' }}>
                  <div>
                    <h2 className="gfe-headline-3" style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2rem' }}>{sec.title}</h2>
                    {renderBody(sec.body)}
                  </div>
                  <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                    <div style={{ borderRadius: '20px', padding: '32px 24px', border: '1px solid var(--border-color)', background: 'var(--white)', boxShadow: 'var(--shadow-1)' }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--google-blue-600)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Highlights</p>
                      {[
                        { icon: Zap, text: 'Lightning-fast performance' },
                        { icon: Shield, text: 'Enterprise-grade security' },
                        { icon: Globe, text: 'Works on all platforms' },
                        { icon: Award, text: 'Trusted by professionals' },
                        { icon: Check, text: 'Regular free updates' },
                      ].map(({ icon: Icon, text }) => (
                        <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--grey-100)' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--grey-50)' }}>
                            <Icon size={16} style={{ color: 'var(--text-secondary)' }} />
                          </div>
                          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>{text}</span>
                        </div>
                      ))}
                      <div style={{ marginTop: '2rem', padding: '24px', borderRadius: '16px', textAlign: 'center', background: 'var(--grey-50)', border: '1px solid var(--border-color)' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 8px' }}>Available on</p>
                        <p style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 16px' }}>{product.platforms.join(' · ')}</p>
                        <a href={product.appStoreLink} className="gfe-button gfe-button--primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '8px' }}>Download Free</a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </section>

      {/* ── FAQ ── */}
      {product.faqs?.length > 0 && (
        <section style={{ background: 'var(--grey-50)', padding: '5rem 2rem', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ display: 'inline-block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--google-blue-600)', marginBottom: '1rem' }}>FAQ</span>
              <h2 className="gfe-headline-2" style={{ margin: '0 0 1rem' }}>Frequently Asked Questions</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>Everything you need to know about {product.name}.</p>
            </div>
            {product.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </section>
      )}

      {/* ── NEWS STRIP ── */}
      {product.news?.length > 0 && (
        <section style={{ padding: '5rem 2rem', background: 'var(--white)', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--google-blue-600)', marginBottom: '12px' }}>
                  <Newspaper size={16} /> Latest News
                </div>
                <h2 className="gfe-headline-2" style={{ margin: 0 }}>From the {product.name} Team</h2>
              </div>
              <Link to={`/products/${product.slug}/news`} className="gfe-button gfe-button--outline" style={{ borderRadius: '8px' }}>
                All News <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem' }}>
              {product.news.slice(0, 2).map((article) => (
                <Link key={article.slug} to={`/products/${product.slug}/news/${article.slug}`}
                  style={{ display: 'block', borderRadius: '16px', border: '1px solid var(--border-color)', overflow: 'hidden', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', background: 'var(--white)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ height: '4px', background: 'var(--google-blue-600)' }} />
                  <div style={{ padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', background: 'var(--google-blue-100)', color: 'var(--google-blue-700)' }}>{article.category}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{article.date}</span>
                    </div>
                    <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: 1.4, marginBottom: '12px' }}>{article.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 20px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.summary}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.95rem', color: 'var(--google-blue-600)' }}>
                      Read article <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '80px 24px', background: 'var(--grey-50)', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', overflow: 'hidden', margin: '0 auto 24px', boxShadow: 'var(--shadow-1)', border: '1px solid var(--border-color)' }}>
              <img src={product.logo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h2 className="gfe-headline-2" style={{ marginBottom: '20px' }}>Ready to try {product.name}?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7 }}>{product.shortDesc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <a href={product.appStoreLink} className="gfe-button gfe-button--primary" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                <Download size={18} /> Download Free
              </a>
              <a href={product.playStoreLink} className="gfe-button gfe-button--outline" style={{ padding: '15px 32px', height: 'auto', fontSize: '15px', borderRadius: '8px' }}>
                <ExternalLink size={18} /> Visit Store
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Newspaper } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getProduct } from '../data/products/index';

const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

const ProductNewsIndex = () => {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>Product Not Found</h1>
        <Link to="/" style={{ padding: '12px 24px', background: '#111', color: '#fff', borderRadius: '12px', fontWeight: 600, textDecoration: 'none' }}>Go Home</Link>
      </div>
    );
  }

  const accentRgb = hexToRgb(product.accentColor);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <SEOHead
        title={`${product.name} News | Minderfly`}
        description={`Latest news, updates and announcements from ${product.name}. Stay informed about new features and improvements.`}
        canonical={`https://minderfly.com/products/${product.slug}/news`}
      />

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '100px', paddingBottom: '4rem', overflow: 'hidden', background: `linear-gradient(135deg, ${product.heroColor} 0%, #111 100%)` }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-128px', right: '-128px', width: '320px', height: '320px', borderRadius: '50%', opacity: 0.1, background: `radial-gradient(circle, ${product.accentColor}, transparent)` }} />
        </div>
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <Link to={`/products/${product.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none', marginBottom: '2rem' }}>
            <ArrowLeft size={13} /> Back to {product.name}
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              <img src={product.logo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', margin: 0 }}>{product.name}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Newspaper size={15} style={{ color: 'rgba(255,255,255,0.6)' }} />
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>News & Updates</span>
              </div>
            </div>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Latest from the {product.name} Team
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
            Product updates, feature announcements, and stories from the team behind {product.name}.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
        {product.news?.length > 0 ? (
          <>
            {/* Featured */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: '2rem' }}>
              <Link to={`/products/${product.slug}/news/${product.news[0].slug}`}
                style={{ display: 'block', borderRadius: '20px', border: '1px solid #f0f0f0', overflow: 'hidden', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ height: '6px', background: product.accentColor }} />
                <div style={{ padding: '2rem 2.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', color: '#000', background: product.accentColor }}>
                      <Tag size={10} /> {product.news[0].category}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#9ca3af' }}>
                      <Calendar size={11} /> {product.news[0].date}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#9ca3af' }}>
                      <Clock size={11} /> {product.news[0].readTime}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.3rem,3vw,1.75rem)', fontWeight: 800, color: '#111', lineHeight: 1.3, marginBottom: '1rem' }}>{product.news[0].title}</h2>
                  <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '0.95rem', margin: '0 0 1.25rem' }}>{product.news[0].summary}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.875rem', color: `rgb(${accentRgb})` }}>
                    Read full article <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Rest */}
            {product.news.length > 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem' }}>
                {product.news.slice(1).map((article, i) => (
                  <motion.div key={article.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}>
                    <Link to={`/products/${product.slug}/news/${article.slug}`}
                      style={{ display: 'block', borderRadius: '18px', border: '1px solid #f0f0f0', overflow: 'hidden', textDecoration: 'none', height: '100%', transition: 'transform 0.2s, box-shadow 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                      <div style={{ height: '4px', background: product.accentColor }} />
                      <div style={{ padding: '1.5rem' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
                          <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '999px', background: '#f3f4f6', color: '#374151' }}>{article.category}</span>
                          <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{article.date}</span>
                          <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{article.readTime}</span>
                        </div>
                        <h3 style={{ fontWeight: 700, color: '#111', fontSize: '0.95rem', lineHeight: 1.4, marginBottom: '8px' }}>{article.title}</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 10px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.summary}</p>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.82rem', color: `rgb(${accentRgb})` }}>
                          Read article <ArrowRight size={12} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '6rem 0', color: '#9ca3af' }}>
            <Newspaper size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>No articles yet</p>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Check back soon for news and updates.</p>
          </div>
        )}
      </section>

      {/* Back */}
      <section style={{ borderTop: '1px solid #f0f0f0', padding: '2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to={`/products/${product.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
            <ArrowLeft size={13} /> Back to {product.name}
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={product.logo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontWeight: 700, color: '#111', fontSize: '0.875rem' }}>{product.name}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductNewsIndex;

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, List } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getArticle } from '../data/products/index';

const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

const parseSections = (body) => {
  const sections = [];
  body.split('\n').forEach((line) => {
    if (line.startsWith('## ')) {
      const title = line.replace('## ', '').trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      sections.push({ id, title });
    }
  });
  return sections;
};

const renderArticleBody = (body) =>
  body.split('\n\n').map((para, i) => {
    if (para.startsWith('## ')) {
      const title = para.replace('## ', '').trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return (
        <h2 key={i} id={id} style={{ fontSize: 'clamp(1.4rem,3vw,1.9rem)', fontWeight: 800, color: '#111', marginTop: '3.5rem', marginBottom: '1.25rem', scrollMarginTop: '100px', lineHeight: 1.25 }}>
          {title}
        </h2>
      );
    }
    if (para.startsWith('**') && !para.slice(2).includes('\n')) {
      return <h3 key={i} style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1f2937', marginTop: '2rem', marginBottom: '0.75rem' }}>{para.replace(/\*\*/g, '')}</h3>;
    }
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((p, j) =>
      p.startsWith('**') ? <strong key={j} style={{ fontWeight: 600, color: '#111' }}>{p.replace(/\*\*/g, '')}</strong> : p
    );
    return (
      <p key={i} style={{ color: '#4b5563', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1rem' }}>
        {rendered}
      </p>
    );
  });

const ProductNewsArticle = () => {
  const { slug, articleSlug } = useParams();
  const { product, article } = getArticle(slug, articleSlug);
  const [activeSection, setActiveSection] = useState('');
  const [tocOpen, setTocOpen] = useState(false);

  const sections = article ? parseSections(article.body) : [];
  const accentRgb = product ? hexToRgb(product.accentColor) : '99,102,241';

  useEffect(() => {
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); },
      { rootMargin: '-80px 0px -60% 0px' }
    );
    sections.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [article]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); setTocOpen(false); }
  };

  if (!product || !article) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>Article Not Found</h1>
        <Link to="/" style={{ padding: '12px 24px', background: '#111', color: '#fff', borderRadius: '12px', fontWeight: 600, textDecoration: 'none' }}>Go Home</Link>
      </div>
    );
  }

  const allNews = product.news;
  const currentIndex = allNews.findIndex((n) => n.slug === articleSlug);
  const prevArticle = currentIndex > 0 ? allNews[currentIndex - 1] : null;
  const nextArticle = currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : null;

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <SEOHead
        title={`${article.title} | ${product.name} | Minderfly`}
        description={article.summary}
        canonical={`https://minderfly.com/products/${product.slug}/news/${article.slug}`}
      />

      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '100px', paddingBottom: '3.5rem', overflow: 'hidden', background: `linear-gradient(135deg, ${product.heroColor} 0%, #0a0a0a 100%)` }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '280px', height: '280px', borderRadius: '50%', opacity: 0.08, background: `radial-gradient(circle, ${product.accentColor}, transparent)`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', marginBottom: '2rem' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to={`/products/${product.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{product.name}</Link>
            <span>/</span>
            <Link to={`/products/${product.slug}/news`} style={{ color: 'inherit', textDecoration: 'none' }}>News</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{article.title}</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', color: '#000', background: product.accentColor }}>
              <Tag size={10} /> {article.category}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
              <Calendar size={11} /> {article.date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
              <Clock size={11} /> {article.readTime}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '1.25rem' }}>{article.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '680px', margin: '0 0 2rem' }}>{article.summary}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <img src={product.logo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <Link to={`/products/${product.slug}`} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 500 }}>
              {product.name} Team
            </Link>
          </div>
        </div>
      </section>

      {/* Article layout */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>

        {/* TOC Sidebar */}
        {sections.length > 0 && (
          <aside style={{ width: '220px', flexShrink: 0, position: 'sticky', top: '88px' }} className="toc-sidebar">
            <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <List size={11} /> Contents
            </p>
            <nav>
              {sections.map((sec) => (
                <button key={sec.id} onClick={() => scrollTo(sec.id)}
                  style={{ display: 'block', width: '100%', textAlign: 'left', fontSize: '0.82rem', padding: '8px 10px', borderRadius: '8px', background: 'none', border: 'none', borderLeft: activeSection === sec.id ? `2px solid rgb(${accentRgb})` : '2px solid transparent', cursor: 'pointer', transition: 'all 0.15s', color: activeSection === sec.id ? `rgb(${accentRgb})` : '#6b7280', fontWeight: activeSection === sec.id ? 600 : 400, marginBottom: '2px', backgroundColor: activeSection === sec.id ? `rgba(${accentRgb},0.06)` : 'transparent' }}>
                  {sec.title}
                </button>
              ))}
            </nav>
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #f0f0f0' }}>
              <Link to={`/products/${product.slug}/news`} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: '#6b7280', textDecoration: 'none', fontWeight: 500 }}>
                <ArrowLeft size={11} /> All {product.name} News
              </Link>
            </div>
          </aside>
        )}

        {/* Body */}
        <article style={{ flex: 1, minWidth: 0, maxWidth: '700px' }}>
          {/* Mobile TOC */}
          {sections.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <button onClick={() => setTocOpen(!tocOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600, color: '#374151', border: '1px solid #e5e7eb', padding: '10px 16px', borderRadius: '10px', background: 'none', cursor: 'pointer' }}>
                <List size={14} /> Table of Contents
              </button>
              {tocOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: '10px', border: '1px solid #f0f0f0', borderRadius: '14px', padding: '16px', background: '#f9fafb', overflow: 'hidden' }}>
                  {sections.map((sec) => (
                    <button key={sec.id} onClick={() => scrollTo(sec.id)}
                      style={{ display: 'block', width: '100%', textAlign: 'left', fontSize: '0.875rem', padding: '8px 0', color: '#374151', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid #f0f0f0' }}>
                      {sec.title}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          <div style={{ width: '48px', height: '4px', borderRadius: '999px', background: product.accentColor, marginBottom: '2.5rem' }} />

          {renderArticleBody(article.body)}

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #f0f0f0' }}>
            {[product.name, article.category, 'Update', 'Technology'].map((tag) => (
              <span key={tag} style={{ fontSize: '0.75rem', padding: '5px 12px', borderRadius: '999px', background: '#f3f4f6', color: '#374151', fontWeight: 500 }}>{tag}</span>
            ))}
          </div>

          {/* Prev / Next */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2.5rem' }}>
            {prevArticle ? (
              <Link to={`/products/${product.slug}/news/${prevArticle.slug}`}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', borderRadius: '16px', border: '1px solid #f0f0f0', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <ArrowLeft size={16} style={{ color: '#9ca3af', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.72rem', color: '#9ca3af', margin: '0 0 4px' }}>Previous</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111', margin: 0, lineHeight: 1.4 }}>{prevArticle.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link to={`/products/${product.slug}/news/${nextArticle.slug}`}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', borderRadius: '16px', border: '1px solid #f0f0f0', textDecoration: 'none', justifyContent: 'flex-end', textAlign: 'right', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div>
                  <p style={{ fontSize: '0.72rem', color: '#9ca3af', margin: '0 0 4px' }}>Next</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111', margin: 0, lineHeight: 1.4 }}>{nextArticle.title}</p>
                </div>
                <ArrowRight size={16} style={{ color: '#9ca3af', marginTop: '2px', flexShrink: 0 }} />
              </Link>
            ) : <div />}
          </div>

          {/* Product CTA */}
          <div style={{ marginTop: '2.5rem', borderRadius: '20px', padding: '2rem', textAlign: 'center', background: `linear-gradient(135deg, ${product.heroColor} 0%, #111 100%)` }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', overflow: 'hidden', margin: '0 auto 1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
              <img src={product.logo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Try {product.name} Today</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginBottom: '1.25rem', maxWidth: '380px', margin: '0 auto 1.25rem', lineHeight: 1.6 }}>{product.shortDesc}</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to={`/products/${product.slug}`} style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '0.875rem', fontWeight: 700, color: '#000', background: product.accentColor, textDecoration: 'none' }}>Learn More</Link>
              <Link to={`/products/${product.slug}/news`} style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '0.875rem', fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none' }}>More News</Link>
            </div>
          </div>
        </article>
      </div>

      <style>{`.toc-sidebar { display: block; } @media(max-width:768px){ .toc-sidebar { display: none; } }`}</style>
    </div>
  );
};

export default ProductNewsArticle;

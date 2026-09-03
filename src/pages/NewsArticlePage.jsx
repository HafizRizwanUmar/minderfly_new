import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { NEWS } from '../data/news';

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = NEWS.find((n) => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '1rem' }}>Article Not Found</h1>
        <Link to="/news" className="gfe-button gfe-button--primary" style={{ padding: '12px 24px', borderRadius: '12px', fontSize: '15px' }}>
          Back to News
        </Link>
      </div>
    );
  }

  const currentIndex = NEWS.findIndex((n) => n.slug === slug);
  const prevArticle = currentIndex > 0 ? NEWS[currentIndex - 1] : null;
  const nextArticle = currentIndex < NEWS.length - 1 ? NEWS[currentIndex + 1] : null;

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <SEOHead
        title={`${article.title} | Minderfly News`}
        description={article.excerpt}
        canonical={`https://minderfly.com/news/${article.slug}`}
      />

      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', background: 'var(--grey-50)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '2rem' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to="/news" style={{ color: 'inherit', textDecoration: 'none' }}>News & Updates</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{article.tag}</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', color: 'var(--google-blue-700)', background: 'var(--google-blue-100)' }}>
              <Tag size={12} /> {article.category}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Calendar size={13} /> {article.date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Clock size={13} /> {article.readTime}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            {article.title}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: '60px 24px', background: 'var(--white)' }}>
        <div className="gfe-container" style={{ maxWidth: '720px' }}>
          
          <div style={{ 
            fontSize: '1.05rem', 
            lineHeight: 1.8, 
            color: 'var(--text-primary)',
            whiteSpace: 'pre-wrap' // to respect the newlines in our string
          }}>
            {article.content}
          </div>

          {/* Prev / Next */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border-color)' }}>
            {prevArticle ? (
              <Link to={`/news/${prevArticle.slug}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', textDecoration: 'none', background: 'var(--grey-50)' }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Previous Article</span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>{prevArticle.title}</span>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link to={`/news/${nextArticle.slug}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', textDecoration: 'none', background: 'var(--grey-50)', textAlign: 'right', alignItems: 'flex-end' }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Next Article</span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>{nextArticle.title}</span>
              </Link>
            ) : <div />}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/news" className="gfe-button gfe-button--outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', fontSize: '15px' }}>
              <ArrowLeft size={16} /> Back to all news
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

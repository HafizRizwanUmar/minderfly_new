import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { NEWS } from '../data/news';

// Convert article date string → ISO format for schema
const toISO = (dateStr) => {
  try { return new Date(dateStr).toISOString() } catch { return dateStr }
}

// Build the appropriate JSON-LD schemas for this article
function buildSchemas(article) {
  const url = `https://minderfly.com/news/${article.slug}`
  const isHowTo = article.slug.startsWith('how-to') || article.slug.startsWith('best-')

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://minderfly.com' },
      { '@type': 'ListItem', position: 2, name: 'News & Updates', item: 'https://minderfly.com/news' },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': isHowTo ? 'HowTo' : 'Article',
    headline: article.title,
    description: article.excerpt,
    url,
    datePublished: toISO(article.date),
    dateModified: toISO(article.date),
    author: {
      '@type': 'Organization',
      name: 'Minderfly',
      url: 'https://minderfly.com',
      logo: { '@type': 'ImageObject', url: 'https://minderfly.com/logo.png' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Minderfly',
      url: 'https://minderfly.com',
      logo: { '@type': 'ImageObject', url: 'https://minderfly.com/logo.png', width: 512, height: 512 },
    },
    image: { '@type': 'ImageObject', url: 'https://minderfly.com/og-image.png', width: 1200, height: 630 },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: article.category,
    keywords: article.tag,
    timeRequired: article.readTime,
    inLanguage: 'en-US',
  }

  // Add HowTo-specific fields
  if (isHowTo) {
    const steps = article.content
      .split('\n')
      .filter(l => /^Step \d+:/.test(l.trim()))
      .map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.trim().replace(/^Step \d+:\s*/, '').split('.')[0],
        text: step.trim(),
      }))
    if (steps.length) articleSchema.step = steps
  }

  return [breadcrumb, articleSchema]
}

// Get 3 related articles from the same category (excluding current)
function getRelated(current, all) {
  const sameCat = all.filter(a => a.slug !== current.slug && a.category === current.category)
  const others = all.filter(a => a.slug !== current.slug && a.category !== current.category)
  return [...sameCat, ...others].slice(0, 3)
}

// Render article content: detect headings (lines ending with no punctuation and short), bold text, and paragraphs
function renderContent(content) {
  const blocks = content.split('\n\n').filter(b => b.trim())
  return blocks.map((block, i) => {
    const trimmed = block.trim()

    // H2 heading: all-caps first word or colon-ending or short line (< 80 chars, no period at end)
    if (trimmed.length < 90 && !trimmed.endsWith('.') && !trimmed.startsWith('Step') && trimmed.split('\n').length === 1 && /^[A-Z]/.test(trimmed)) {
      return (
        <h2 key={i} style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
          {trimmed}
        </h2>
      )
    }

    // Step blocks: bold the step label
    if (/^Step \d+:/.test(trimmed)) {
      const colonIdx = trimmed.indexOf(':')
      const label = trimmed.slice(0, colonIdx + 1)
      const rest = trimmed.slice(colonIdx + 1)
      return (
        <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{label}</strong>{rest}
        </p>
      )
    }

    // Bullet list items
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(l => l.startsWith('- '))
      return (
        <ul key={i} style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {items.map((item, j) => (
            <li key={j} style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '1.05rem' }}>
              {item.slice(2)}
            </li>
          ))}
        </ul>
      )
    }

    // Regular paragraph — handle **bold** inline
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g)
    const rendered = parts.map((p, j) =>
      p.startsWith('**') ? <strong key={j} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{p.replace(/\*\*/g, '')}</strong> : p
    )
    return (
      <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
        {rendered}
      </p>
    )
  })
}

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = NEWS.find((n) => n.slug === slug);

  useEffect(() => { window.scrollTo(0, 0) }, [slug]);

  const schemas = useMemo(() => article ? buildSchemas(article) : [], [article])
  const related = useMemo(() => article ? getRelated(article, NEWS) : [], [article])

  if (!article) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', textAlign: 'center' }}>Article Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', textAlign: 'center' }}>This article doesn't exist or may have been moved.</p>
        <Link to="/news" className="gfe-button gfe-button--primary" style={{ padding: '12px 24px', borderRadius: '12px', fontSize: '15px' }}>
          Browse all articles →
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
        title={`${article.title} | Minderfly`}
        description={article.excerpt}
        canonical={`https://minderfly.com/news/${article.slug}`}
        ogType="article"
        publishedTime={toISO(article.date)}
        keywords={`${article.tag}, ${article.category}, Minderfly, ${article.title.split(' ').slice(0, 4).join(', ')}`}
        schema={schemas}
      />

      {/* ── Hero ── */}
      <header style={{ padding: '80px 24px 60px', background: 'var(--grey-50)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '800px' }}>
          {/* Breadcrumb — semantic nav for SEO */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '2rem' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/news" style={{ color: 'inherit', textDecoration: 'none' }}>News & Updates</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{article.category}</span>
          </nav>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', color: 'var(--google-blue-700)', background: 'var(--google-blue-100)' }}>
              <Tag size={12} /> {article.category}
            </span>
            <time dateTime={toISO(article.date)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Calendar size={13} /> {article.date}
            </time>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Clock size={13} /> {article.readTime}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            {article.title}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.7, fontStyle: 'italic', borderLeft: '3px solid var(--google-blue-600)', paddingLeft: '16px' }}>
            {article.excerpt}
          </p>
        </div>
      </header>

      {/* ── Article Body ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr min(720px, 100%) 1fr', padding: '60px 24px' }}>
        <div /> {/* left gutter */}
        <article itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={article.title} />
          <meta itemProp="datePublished" content={toISO(article.date)} />
          <meta itemProp="author" content="Minderfly" />

          <div itemProp="articleBody">
            {renderContent(article.content)}
          </div>

          {/* ── Author / Publisher strip ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '3rem 0 2rem', padding: '20px 24px', background: 'var(--grey-50)', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
            <img src="/logo.png" alt="Minderfly logo" width={40} height={40} style={{ borderRadius: '10px', objectFit: 'contain' }} loading="lazy" />
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Minderfly Team</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Software studio • minderfly.com</div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <Link to="/contact" className="gfe-button gfe-button--outline" style={{ padding: '8px 16px', height: 'auto', borderRadius: '8px', fontSize: '13px' }}>
                Work with us
              </Link>
            </div>
          </div>

          {/* ── Tags ── */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '3rem' }}>
            {[article.category, article.tag, 'Minderfly'].map(t => (
              <span key={t} style={{ fontSize: '0.78rem', padding: '5px 12px', borderRadius: '100px', background: 'var(--grey-100)', color: 'var(--text-secondary)', fontWeight: 600 }}>{t}</span>
            ))}
          </div>

          {/* ── Related Articles ── */}
          {related.length > 0 && (
            <section aria-label="Related articles" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '-0.3px' }}>
                Keep reading
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {related.map(r => (
                  <Link key={r.slug} to={`/news/${r.slug}`}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-color)', textDecoration: 'none', background: 'var(--white)', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.borderColor = 'var(--google-blue-300)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-color)' }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--google-blue-600)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{r.category}</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: '4px' }}>{r.title}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{r.readTime}</div>
                    </div>
                    <ChevronRight size={18} style={{ color: 'var(--text-secondary)', flexShrink: 0, marginTop: '4px' }} />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── Prev / Next ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
            {prevArticle ? (
              <Link to={`/news/${prevArticle.slug}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-color)', textDecoration: 'none', background: 'var(--grey-50)' }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>← Previous</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>{prevArticle.title}</span>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link to={`/news/${nextArticle.slug}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-color)', textDecoration: 'none', background: 'var(--grey-50)', textAlign: 'right', alignItems: 'flex-end' }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Next →</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>{nextArticle.title}</span>
              </Link>
            ) : <div />}
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/news" className="gfe-button gfe-button--outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', fontSize: '15px' }}>
              <ArrowLeft size={16} /> All News & Updates
            </Link>
          </div>
        </article>
        <div /> {/* right gutter */}
      </div>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '80px 24px', background: 'var(--grey-50)', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="gfe-container" style={{ maxWidth: '600px' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--google-blue-600)', marginBottom: '16px' }}>Minderfly</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.5px' }}>
            Have a startup idea?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
            We build software used in 100+ countries. Turn your idea into a real product with a team that has done it before.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="gfe-button gfe-button--primary" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '10px' }}>
              Book a free call →
            </Link>
            <Link to="/all-products" className="gfe-button gfe-button--outline" style={{ padding: '14px 28px', height: 'auto', fontSize: '15px', borderRadius: '10px' }}>
              See our products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

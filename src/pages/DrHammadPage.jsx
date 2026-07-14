export default function DrHammadPage() {
  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h1 className="gfe-headline-1" style={{ marginBottom: '24px' }}>Prof. Dr. Muhammad Hammad Lakhvi</h1>
          <p className="gfe-body" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 40px' }}>
            Former Dean and Director at University of the Punjab, President Faith Foundation. Explore Tafseer Al-Quran, Hadith lectures, research articles, and comprehensive Islamic guidance.
          </p>
          <a href="https://www.drhammadlakhvi.com/" target="_blank" rel="noopener noreferrer" className="gfe-button gfe-button--primary gfe-button--large">
            Visit Official Website
          </a>
        </div>
      </section>

      {/* Expertise Areas */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container">
          <h2 className="gfe-headline-2" style={{ textAlign: 'center', marginBottom: '60px' }}>Areas of Expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ padding: '40px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>📖</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '16px' }}>Tafseer Al-Quran</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                In-depth explanation and interpretation of the Holy Quran, providing profound insights into Islamic theology and jurisprudence.
              </p>
            </div>
            <div style={{ padding: '40px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>📜</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '16px' }}>Hadith Lectures</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                Comprehensive teachings on the traditions and sayings of Prophet Muhammad (PBUH), drawing from authentic sources.
              </p>
            </div>
            <div style={{ padding: '40px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>📚</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '16px' }}>Research Articles</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                Extensive academic research focusing on contemporary Islamic issues, education, and societal guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="gfe-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px', background: 'var(--white)', height: '400px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-1)' }}>
              <span style={{ fontSize: '64px', color: 'var(--google-blue-600)' }}>🏛️</span>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Academic Excellence</h2>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                With decades of experience in higher education, Dr. Hammad Lakhvi has shaped the minds of thousands of students. His tenure as Dean and Director at the prestigious University of the Punjab is marked by a dedication to rigorous academic standards.
              </p>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>
                As the President of the Faith Foundation, he continues to lead initiatives that bridge traditional Islamic knowledge with modern educational methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

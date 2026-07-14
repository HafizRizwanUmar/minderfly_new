export default function AlmiraalPage() {
  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h1 className="gfe-headline-1" style={{ marginBottom: '24px' }}>Almiraal</h1>
          <p className="gfe-body" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 40px' }}>
            Elevating digital experiences. Almiraal provides cutting-edge software solutions designed to scale with your business and deliver exceptional value.
          </p>
          <a href="http://almiraal.com/" target="_blank" rel="noopener noreferrer" className="gfe-button gfe-button--primary gfe-button--large">
            Discover Almiraal
          </a>
        </div>
      </section>

      {/* Features Overview */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Next-Generation Solutions</h2>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Built on robust architecture, Almiraal ensures high performance, security, and scalability. Whether you are a startup or an enterprise, our tools are crafted to meet your unique operational demands.
              </p>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>Seamless cloud integration.</li>
                <li>Advanced analytics and reporting.</li>
                <li>Intuitive user interfaces.</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', background: 'var(--grey-100)', height: '300px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '48px' }}>🚀</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h2 className="gfe-headline-2" style={{ marginBottom: '60px' }}>Built on Excellence</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ padding: '32px', background: 'var(--white)', borderRadius: '12px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>⚡</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '12px' }}>Performance</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>Optimized for speed and reliability, ensuring zero downtime during peak operations.</p>
            </div>
            <div style={{ padding: '32px', background: 'var(--white)', borderRadius: '12px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔒</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '12px' }}>Security</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>Enterprise-grade encryption and compliance standards out of the box.</p>
            </div>
            <div style={{ padding: '32px', background: 'var(--white)', borderRadius: '12px', boxShadow: 'var(--shadow-1)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>💡</div>
              <h3 className="gfe-headline-3" style={{ marginBottom: '12px' }}>Innovation</h3>
              <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>Constantly evolving feature sets to keep you ahead of the technological curve.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

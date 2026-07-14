import { useEffect } from 'react'

export default function OurTeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: '#fff', color: '#101828', fontFamily: 'Inter, "Google Sans", sans-serif' }}>
      <style>{`
        .team-hero {
          text-align: center;
          padding: 100px 20px 60px;
          max-width: 800px;
          margin: 0 auto;
        }
        .team-kicker {
          color: #6941C6;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .team-headline {
          font-size: 3.5rem;
          font-weight: 600;
          color: #101828;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .team-subheadline {
          font-size: 1.25rem;
          color: #475467;
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .team-btn {
          background: #7F56D9;
          color: white;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          display: inline-block;
          border: 1px solid #7F56D9;
          transition: background 0.2s;
        }
        .team-btn:hover {
          background: #6941C6;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 100px;
        }
        .team-card {
          position: relative;
          height: 480px;
          border-radius: 2px;
          overflow: hidden;
        }
        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%);
          backdrop-filter: blur(4px);
          padding: 40px 24px 24px;
          color: white;
        }
        .team-card-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .team-card-role {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: #F2F4F7;
        }
        .team-card-desc {
          font-size: 0.95rem;
          color: #E4E7EC;
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .team-socials {
          display: flex;
          gap: 16px;
        }
        .team-social-icon {
          color: #D0D5DD;
          transition: color 0.2s;
        }
        .team-social-icon:hover {
          color: white;
        }

        .values-section {
          background: #fff;
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .values-kicker {
          color: #6941C6;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .values-headline {
          font-size: 2.5rem;
          font-weight: 600;
          color: #101828;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .values-subheadline {
          font-size: 1.25rem;
          color: #475467;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
          text-align: center;
        }
        .value-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          border: 1px solid #EAECF0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #344054;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        }
        .value-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #101828;
        }
        .value-desc {
          color: #475467;
          line-height: 1.6;
        }

        .jobs-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 100px 20px;
        }
        .job-item {
          padding: 32px 0;
          border-bottom: 1px solid #EAECF0;
        }
        .job-item:first-of-type {
          border-top: 1px solid #EAECF0;
          margin-top: 60px;
        }
        .job-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .job-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #101828;
        }
        .job-badge {
          padding: 2px 10px;
          border-radius: 16px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .job-badge.design { background: #EFF8FF; color: #175CD3; }
        .job-badge.software { background: #FDF2F8; color: #C11574; }
        .job-desc {
          color: #475467;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .job-meta {
          display: flex;
          gap: 24px;
          color: #667085;
          font-size: 0.875rem;
        }
        .job-meta span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .testimonial-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .testimonial-section {
            grid-template-columns: 1fr;
          }
        }
        .stars {
          color: #FEC84B;
          display: flex;
          gap: 4px;
          margin-bottom: 32px;
        }
        .testimonial-quote {
          font-size: 2.5rem;
          font-weight: 600;
          color: #101828;
          line-height: 1.2;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }
        .testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .author-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-name {
          font-weight: 600;
          color: #101828;
          margin-bottom: 4px;
        }
        .author-role {
          color: #475467;
          font-size: 0.875rem;
        }
        .author-controls {
          display: flex;
          gap: 16px;
        }
        .control-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid #EAECF0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #667085;
          transition: all 0.2s;
        }
        .control-btn:hover {
          background: #F9FAFB;
        }
        .control-btn.active {
          border-color: #D6BBFB;
          color: #6941C6;
        }

        .collage-container {
          position: relative;
          height: 500px;
        }
        .collage-img {
          position: absolute;
          object-fit: cover;
        }
        /* Top Left */
        .collage-img-1 {
          top: 0; left: 0;
          width: 45%; height: 50%;
        }
        /* Top Right */
        .collage-img-2 {
          top: -20px; right: 0;
          width: 45%; height: 60%;
        }
        /* Bottom Left */
        .collage-img-3 {
          bottom: 20px; left: -10%;
          width: 50%; height: 40%;
        }
        /* Bottom Center */
        .collage-img-4 {
          bottom: -40px; right: 10%;
          width: 45%; height: 55%;
        }
        /* Bottom Right */
        .collage-img-5 {
          bottom: 40px; right: -10%;
          width: 35%; height: 35%;
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="team-hero">
        <div className="team-kicker">Get to know us</div>
        <h1 className="team-headline">Meet the makers behind Minderfly</h1>
        <p className="team-subheadline">
          We're a small group of bright, motivated designers and developers all around the world. We're growing fast and would love to meet you. Check out our open roles!
        </p>
        <a href="#jobs" className="team-btn">Get started</a>
      </section>

      {/* 2. Team Grid */}
      <section className="team-grid">
        {[
          {
            name: 'Hafiz Rizwan Umar', role: 'Founder & CEO',
            desc: 'Visionary leader driving the mission to build and scale global software products.',
            img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
          },
          {
            name: 'Ammara Lohani', role: 'Lead Product Designer',
            desc: 'Crafting beautiful, intuitive user experiences that delight users across all platforms.',
            img: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?auto=format&fit=crop&w=600&q=80'
          },
          {
            name: 'Eisha Ashfaq', role: 'Engineering Manager',
            desc: 'Leading the technical architecture and ensuring our products are fast, secure, and scalable.',
            img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
          }
        ].map((member, i) => (
          <div key={i} className="team-card">
            <img src={member.img} alt={member.name} className="team-img" />
            <div className="team-card-overlay">
              <h3 className="team-card-title">
                {member.name}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </h3>
              <div className="team-card-role">{member.role}</div>
              <div className="team-card-desc">{member.desc}</div>
              <div className="team-socials">
                <a href="#" className="team-social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
                <a href="#" className="team-social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                <a href="#" className="team-social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm8.795-7.514c-1.303-1.63-3.69-2.585-6.196-2.77-1.045 2.87-2.313 5.618-3.923 8.163 2.846.593 5.753-.133 8.013-2.015 1.053-1.01 1.83-2.138 2.106-3.378zM10.02 21.656c1.393-2.42 2.56-5.018 3.525-7.72-3.784-.117-7.39.757-10.428 2.45.69 2.188 2.115 4.092 3.992 5.32 1.345-1.503 2.766-3.4 3.992-5.32z"/></svg></a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Core Values */}
      <section className="values-section">
        <div className="values-kicker">Our values</div>
        <h2 className="values-headline">We're an ambitious and smart team<br />with a shared mission</h2>
        <p className="values-subheadline">Our shared values keep us connected and guide us as one team.</p>
        
        <div className="values-grid">
          <div>
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 className="value-title">Care about our team</h3>
            <p className="value-desc">Understand what matters to our employees. Give them what they need to do their best work.</p>
          </div>
          <div>
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 className="value-title">Be excellent to each other</h3>
            <p className="value-desc">No games. No shortcuts. We rely on our peers to improve. Be open, honest and kind.</p>
          </div>
          <div>
            <div className="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="value-title">Pride in what we do</h3>
            <p className="value-desc">Value quality and integrity in everything we do. At all times. No exceptions.</p>
          </div>
        </div>
      </section>

      {/* 4. Open Positions */}
      <section className="jobs-section" id="jobs">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#101828', marginBottom: '16px' }}>Open positions</h2>
          <p style={{ fontSize: '1.25rem', color: '#475467' }}>We're a 100% remote team spread all across the world. Join us!</p>
        </div>

        <div className="job-item">
          <div className="job-header">
            <span className="job-title">Product Designer</span>
            <span className="job-badge design">• Design</span>
          </div>
          <p className="job-desc">We're looking for a mid-level product designer to join our team.</p>
          <div className="job-meta">
            <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Remote</span>
            <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Full-time</span>
          </div>
        </div>

        <div className="job-item">
          <div className="job-header">
            <span className="job-title">Engineering Manager</span>
            <span className="job-badge software">• Software Development</span>
          </div>
          <p className="job-desc">We're looking for an experienced engineering manager to join our team.</p>
          <div className="job-meta">
            <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Remote</span>
            <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Full-time</span>
          </div>
        </div>
      </section>

      {/* 5. Testimonial & Collage */}
      <section className="testimonial-section">
        <div>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          <h2 className="testimonial-quote">Love the simplicity of the service and the prompt customer support.</h2>
          <div className="testimonial-author">
            <div className="author-info">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Caitlyn King" className="author-avatar" />
              <div>
                <div className="author-name">Caitlyn King</div>
                <div className="author-role">Data Engineer, Sisyphus</div>
              </div>
            </div>
            <div className="author-controls">
              <button className="control-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
              <button className="control-btn active"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
            </div>
          </div>
        </div>

        <div className="collage-container">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team" className="collage-img collage-img-1" />
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Team" className="collage-img collage-img-2" />
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Team" className="collage-img collage-img-3" />
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Team" className="collage-img collage-img-4" />
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Team" className="collage-img collage-img-5" />
        </div>
      </section>

    </div>
  )
}

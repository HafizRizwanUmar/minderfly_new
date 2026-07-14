import { Film, Zap, Moon, FileText, Music, ListVideo, Monitor, Download, PenTool, Package, Award, BarChart, Cloud, Image, Files, Search, Save, Eye, Briefcase, Smartphone, Ban, Puzzle, Box, Video, CircleDot, Bot, Globe, Settings, Calendar, Check, Mailbox } from 'lucide-react'

export default function QuranAcademyPage() {
  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="gfe-container" style={{ textAlign: 'center' }}>
          <h1 className="gfe-headline-1" style={{ marginBottom: '24px' }}>Quran O Itrat Academy</h1>
          <p className="gfe-body" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 40px' }}>
            Islamic Education Excellence. Learn Quran, Tajweed, Islamic Studies, and Arabic Language with our expert instructors through comprehensive online courses.
          </p>
          <a href="http://quranoitratacademy.com/" target="_blank" rel="noopener noreferrer" className="gfe-button gfe-button--primary gfe-button--large">
            Start Learning Today
          </a>
        </div>
      </section>

      {/* Course Offerings */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="gfe-container">
          <h2 className="gfe-headline-2" style={{ textAlign: 'center', marginBottom: '60px' }}>Our Educational Programs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { icon: '📖', title: 'Quran Reading', desc: 'Learn to read the Holy Quran accurately with proper pronunciation for beginners of all ages.' },
              { icon: '🗣️', title: 'Tajweed Rules', desc: 'Master the complex rules of Tajweed to recite the Quran beautifully and correctly.' },
              { icon: '📚', title: 'Islamic Studies', desc: 'Comprehensive curriculum covering Fiqh, Seerah, Aqaid, and general Islamic knowledge.' },
              { icon: <FileText size={24} />, title: 'Arabic Language', desc: 'Structured Arabic courses designed to help you understand the language of the Quran.' }
            ].map((course, idx) => (
              <div key={idx} style={{ padding: '32px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{course.icon}</div>
                <h3 className="gfe-headline-3" style={{ marginBottom: '12px' }}>{course.title}</h3>
                <p className="gfe-body" style={{ color: 'var(--text-secondary)' }}>{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="gfe-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '1 1 400px', background: 'var(--white)', height: '400px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-1)' }}>
              <span style={{ fontSize: '64px', color: 'var(--google-blue-600)' }}>🎓</span>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="gfe-headline-2" style={{ marginBottom: '24px' }}>Why Choose Quran O Itrat Academy?</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Qualified and experienced male and female instructors.',
                  'Flexible timings tailored to your schedule.',
                  'One-on-one interactive online sessions.',
                  'Progress tracking and regular parent-teacher meetings.',
                  'Authentic curriculum based on verified sources.'
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--google-blue-600)' }}><Check size={16} /></span>
                    <span className="gfe-body" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

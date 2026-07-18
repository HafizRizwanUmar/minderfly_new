import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

/* ─── Muhasba Privacy Policy ──────────────────────────────────────────────────
   Nature: Clean, highly readable text document.
   Colors: Standard site palette to match Minderfly's brand identity.
───────────────────────────────────────────────────────────────────────────── */

export default function MuhasbaPrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--white)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', paddingBottom: '100px' }}>
      <SEOHead
        title="Privacy Policy — Muhasba App | Minderfly"
        description="Privacy Policy for the Muhasba app. Learn how we protect your data, prioritize your privacy, and keep all your daily reflection and prayer data secure and local."
        canonical="https://minderfly.com/products/muhasba/privacy"
      />

      <div style={{ background: 'var(--grey-50)', padding: '60px 24px', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gfe-container" style={{ maxWidth: '800px' }}>
          <h1 className="gfe-headline-2" style={{ marginBottom: '16px' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      <div className="gfe-container" style={{ maxWidth: '800px', marginTop: '60px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', fontSize: '16px', lineHeight: '1.8', color: 'var(--grey-800)' }}>
          
          <section>
            <p>
              Minderfly built the Muhasba app as a Free app. This SERVICE is provided by Minderfly at no cost and is intended for use as is. 
              We are deeply committed to your privacy and have designed Muhasba to be completely ad-free and privacy-first.
            </p>
            <p style={{ marginTop: '16px' }}>
              This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
            </p>
          </section>

          <section>
            <h2 className="gfe-headline-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>1. Data Collection and Use</h2>
            <p>
              We believe your spiritual journey is deeply personal. Therefore, <strong>Muhasba does not collect, transmit, or store any of your personal data on external servers.</strong> 
            </p>
            <ul style={{ marginTop: '16px', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px', listStyleType: 'disc' }}>
              <li>
                <strong>Location Data (GPS):</strong> To provide accurate Qibla direction and real-time prayer timings, the app requests access to your device's location. This location data is processed <em>strictly locally</em> on your device. We never transmit your location to our servers, nor do we share it with third parties.
              </li>
              <li>
                <strong>Local Storage:</strong> All your app data, including your Tasbeeh counts, app settings, and "Jaiza" (Daily Reflections), is saved locally on your device using Shared Preferences. This means you retain complete ownership of your data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="gfe-headline-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>2. Notifications</h2>
            <p>
              Muhasba uses push notifications solely for local Adhan alerts. These notifications are scheduled locally on your device based on the prayer times calculated from your location. We do not use remote push notification services to track your interactions or send promotional content.
            </p>
          </section>

          <section>
            <h2 className="gfe-headline-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>3. Log Data</h2>
            <p>
              In the rare case of an app crash, we may collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. This data is entirely anonymous and used exclusively to fix bugs and improve stability.
            </p>
          </section>

          <section>
            <h2 className="gfe-headline-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>4. Security</h2>
            <p>
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. Since the vast majority of Muhasba's data stays local to your device, the primary security lies within your device's own security features (like PINs, Face ID, etc.).
            </p>
          </section>

          <section>
            <h2 className="gfe-headline-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>5. Links to Other Sites</h2>
            <p>
              This Service may contain links to other sites (e.g., links to the Google Play Store). If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="gfe-headline-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>6. Children's Privacy</h2>
            <p>
              These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information without your consent, please contact us so that we will be able to take necessary actions.
            </p>
          </section>

          <section>
            <h2 className="gfe-headline-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="gfe-headline-4" style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>8. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:contact@minderfly.com" style={{ color: 'var(--google-blue-600)', textDecoration: 'none' }}>contact@minderfly.com</a>.
            </p>
          </section>
          
          <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '16px' }}>
            <Link to="/products/muhasba" className="gfe-button gfe-button--outline">
              Return to Muhasba
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

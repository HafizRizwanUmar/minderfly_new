import { Routes, Route } from 'react-router-dom'
import SEOHead from './components/SEOHead'
import WhatsAppButton from './components/WhatsAppButton'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import SuiteSection from './components/SuiteSection'
import DocsShowcaseSection from './components/DocsShowcaseSection'
import SolutionsSection from './components/SolutionsSection'
import FaqSection from './components/FaqSection'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import ImpactSection from './components/ImpactSection'
import ContactPage from './pages/ContactPage'
import AllProductsPage from './pages/AllProductsPage'

// Product Pages
import CinemaflyPage from './pages/CinemaflyPage'
import DocSignerPage from './pages/DocSignerPage'
import SanadPdfEditorPage from './pages/SanadPdfEditorPage'
import InklessLmsPage from './pages/InklessLmsPage'
import FlutterEmulatorPage from './pages/FlutterEmulatorPage'
import MinimalDeskThemePage from './pages/MinimalDeskThemePage'
import PastelAuroraPage from './pages/PastelAuroraPage'
import LunarLeapThemePage from './pages/LunarLeapThemePage'

// Values Pages
import OurCommitmentPage from './pages/OurCommitmentPage'
import OurTeamPage from './pages/OurTeamPage'
import PrivacyPage from './pages/PrivacyPage'

// Solutions Pages
import DrHammadPage from './pages/DrHammadPage'
import QuranAcademyPage from './pages/QuranAcademyPage'
import AlmiraalPage from './pages/AlmiraalPage'

// Resource Pages
import HowWeBuildPage from './pages/HowWeBuildPage'
import NewsPage from './pages/NewsPage'
import NotFoundPage from './pages/NotFoundPage'

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Minderfly',
  url: 'https://minderfly.com',
  logo: 'https://minderfly.com/favicon.svg',
  description: 'Minderfly is a software studio that builds and scales startup products — desktop apps, mobile apps, web apps, and browser extensions — used in 100+ countries worldwide.',
  foundingDate: '2021',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', url: 'https://minderfly.com/contact' },
}

function HomePage() {
  return (
    <main id="main-content">
      <SEOHead
        title="Minderfly — Software Studio | Build & Scale Startup Products"
        description="Minderfly is a software studio that builds startup products used in 100+ countries. PDF editors, digital signature tools, LMS platforms, VS Code extensions, Chrome themes. 3-day free trials on all apps."
        canonical="https://minderfly.com/"
        schema={HOME_SCHEMA}
      />
      <HeroSection />
      <ImpactSection />
      <ProductsSection />
      <SuiteSection />
      <DocsShowcaseSection />
      <SolutionsSection />
      <FaqSection />
      <CtaBanner />
    </main>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/cinemafly" element={<CinemaflyPage />} />
        <Route path="/products/docsigner" element={<DocSignerPage />} />
        <Route path="/products/sanad-pdf-editor" element={<SanadPdfEditorPage />} />
        <Route path="/products/inkless-lms" element={<InklessLmsPage />} />
        <Route path="/products/flutter-web-emulator" element={<FlutterEmulatorPage />} />
        <Route path="/products/minimal-desk-theme" element={<MinimalDeskThemePage />} />
        <Route path="/products/pastel-aurora" element={<PastelAuroraPage />} />
        <Route path="/products/lunar-leap-theme" element={<LunarLeapThemePage />} />
        <Route path="/our-values/our-commitment" element={<OurCommitmentPage />} />
        <Route path="/our-values/team" element={<OurTeamPage />} />
        <Route path="/our-values/privacy" element={<PrivacyPage />} />
        <Route path="/solutions/dr-hammad" element={<DrHammadPage />} />
        <Route path="/solutions/quran-academy" element={<QuranAcademyPage />} />
        <Route path="/solutions/almiraal" element={<AlmiraalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/how-we-build" element={<HowWeBuildPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

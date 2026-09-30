import React, { Suspense } from 'react'
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
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const AllProductsPage = React.lazy(() => import('./pages/AllProductsPage'))

// Product Pages
const CinemaflyPage = React.lazy(() => import('./pages/CinemaflyPage'))
const DocSignerPage = React.lazy(() => import('./pages/DocSignerPage'))
const SanadPdfEditorPage = React.lazy(() => import('./pages/SanadPdfEditorPage'))
const InklessLmsPage = React.lazy(() => import('./pages/InklessLmsPage'))
const FlutterEmulatorPage = React.lazy(() => import('./pages/FlutterEmulatorPage'))
const MinimalDeskThemePage = React.lazy(() => import('./pages/MinimalDeskThemePage'))
const PastelAuroraPage = React.lazy(() => import('./pages/PastelAuroraPage'))
const LunarLeapThemePage = React.lazy(() => import('./pages/LunarLeapThemePage'))
const MuhasbaPage = React.lazy(() => import('./pages/MuhasbaPage'))
const MuhasbaPrivacyPage = React.lazy(() => import('./pages/MuhasbaPrivacyPage'))

// Values Pages
const OurCommitmentPage = React.lazy(() => import('./pages/OurCommitmentPage'))
const OurTeamPage = React.lazy(() => import('./pages/OurTeamPage'))
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'))

// Solutions Pages
const DrHammadPage = React.lazy(() => import('./pages/DrHammadPage'))
const QuranAcademyPage = React.lazy(() => import('./pages/QuranAcademyPage'))
const AlmiraalPage = React.lazy(() => import('./pages/AlmiraalPage'))

// Resource Pages
const HowWeBuildPage = React.lazy(() => import('./pages/HowWeBuildPage'))
const NewsPage = React.lazy(() => import('./pages/NewsPage'))
const NewsArticlePage = React.lazy(() => import('./pages/NewsArticlePage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))
const ProductPage = React.lazy(() => import('./pages/ProductPage'))
const ProductNewsIndex = React.lazy(() => import('./pages/ProductNewsIndex'))
const ProductNewsArticle = React.lazy(() => import('./pages/ProductNewsArticle'))
const ServiceLocationPage = React.lazy(() => import('./pages/ServiceLocationPage'))
const LocationsDirectoryPage = React.lazy(() => import('./pages/LocationsDirectoryPage'))

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
      <Suspense fallback={<div style={{height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>Loading...</div>}>
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
        <Route path="/products/muhasba" element={<MuhasbaPage />} />
        <Route path="/products/muhasba/privacy" element={<MuhasbaPrivacyPage />} />
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
        <Route path="/news/:slug" element={<NewsArticlePage />} />
        <Route path="/locations" element={<LocationsDirectoryPage />} />
        <Route path="/services/:serviceSlug/:city" element={<ServiceLocationPage />} />
        {/* Generic product data-driven routes (StoreFlow, DebtSettler, FrameFly, Pomofly, CivilCalc, Nishan + news for all) */}
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/products/:slug/news" element={<ProductNewsIndex />} />
        <Route path="/products/:slug/news/:articleSlug" element={<ProductNewsArticle />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
        </Suspense>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

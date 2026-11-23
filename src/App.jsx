import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import { content } from './data/translations';

// Code-split pages for high performance
const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const LandingPageService = lazy(() => import('./pages/LandingPageService'));
const GamesPage = lazy(() => import('./pages/GamesPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  // Default language English ('en')
  const [lang, setLang] = useState('en');
  const t = content[lang];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080c16] text-slate-100 flex flex-col font-sans selection:bg-[#fec003] selection:text-slate-950">
        <ScrollToTop />

        {/* Global Navigation Bar */}
        <Navbar lang={lang} setLang={setLang} t={t} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage t={t} lang={lang} />} />
              <Route path="/catalog" element={<CatalogPage t={t} lang={lang} />} />
              <Route path="/booking" element={<BookingPage t={t} lang={lang} />} />
              <Route path="/landing-page" element={<LandingPageService t={t} lang={lang} />} />
              <Route path="/games" element={<GamesPage t={t} lang={lang} />} />
              <Route path="/why-us" element={<WhyUsPage t={t} lang={lang} />} />
              <Route path="/contact" element={<ContactPage t={t} lang={lang} />} />
              <Route path="*" element={<NotFoundPage t={t} lang={lang} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer t={t} />

        {/* Persistent Floating WhatsApp Consultation */}
        <FloatingWhatsApp lang={lang} />
      </div>
    </BrowserRouter>
  );
}

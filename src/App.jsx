import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import { content } from './data/translations';

// Smart language detection:
// 1. Respect user manual preference if stored in localStorage
// 2. Auto-detect Indonesian visitor via Indonesian Timezone (WIB, WITA, WIT) or browser language
// 3. Default to English for international visitors
const detectInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en';

  // 1. Saved manual preference
  try {
    const saved = localStorage.getItem('axeon_lang');
    if (saved === 'id' || saved === 'en') {
      return saved;
    }
  } catch (e) {
    // localStorage unavailable or restricted
  }

  // 2. Check Indonesian Timezones (WIB: Jakarta/Pontianak, WITA: Makassar, WIT: Jayapura)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const indonesianTimezones = [
      'Asia/Jakarta',
      'Asia/Pontianak',
      'Asia/Makassar',
      'Asia/Jayapura',
      'Asia/Ujung_Pandang'
    ];
    if (indonesianTimezones.includes(tz)) {
      return 'id';
    }
  } catch (e) {
    // ignore
  }

  // 3. Check browser locale preferences
  try {
    const languages = navigator.languages || [navigator.language || ''];
    const isIndonesian = languages.some(l => l && l.toLowerCase().startsWith('id'));
    if (isIndonesian) {
      return 'id';
    }
  } catch (e) {
    // ignore
  }

  // 4. Default for international visitors
  return 'en';
};

// Code-split pages for high performance
const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const EcommercePage = lazy(() => import('./pages/EcommercePage'));
const SocialMediaPage = lazy(() => import('./pages/SocialMediaPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LandingPageService = lazy(() => import('./pages/LandingPageService'));
const GamesPage = lazy(() => import('./pages/GamesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const [lang, setLang] = useState(detectInitialLanguage);
  const t = content[lang];

  // Sync lang state with localStorage and document html tag
  const handleSetLang = (action) => {
    setLang(prev => {
      const nextLang = typeof action === 'function' ? action(prev) : action;
      try {
        localStorage.setItem('axeon_lang', nextLang);
      } catch (e) {
        // ignore
      }
      return nextLang;
    });
  };

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch (e) {
      // ignore
    }
  }, [lang]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#080c16] text-slate-100 flex flex-col font-sans selection:bg-[#fec003] selection:text-slate-950">
        <ScrollToTop />

        {/* Global Navigation Bar */}
        <Navbar lang={lang} setLang={handleSetLang} t={t} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<HomePage t={t} lang={lang} />} />

              {/* Solution 1: Website Catalog */}
              <Route path="/solutions/website-catalog" element={<CatalogPage t={t} lang={lang} />} />
              <Route path="/catalog" element={<CatalogPage t={t} lang={lang} />} />

              {/* Solution 2: Online Booking */}
              <Route path="/solutions/online-booking" element={<BookingPage t={t} lang={lang} />} />
              <Route path="/booking" element={<BookingPage t={t} lang={lang} />} />

              {/* Solution 3: Ecommerce */}
              <Route path="/solutions/ecommerce" element={<EcommercePage t={t} lang={lang} />} />
              <Route path="/ecommerce" element={<EcommercePage t={t} lang={lang} />} />

              {/* Solution 4: Social Media Management */}
              <Route path="/solutions/social-media" element={<SocialMediaPage t={t} lang={lang} />} />
              <Route path="/social-media" element={<SocialMediaPage t={t} lang={lang} />} />
              <Route path="/social-media-management" element={<SocialMediaPage t={t} lang={lang} />} />

              {/* Company: About Us & Why Us */}
              <Route path="/about-us" element={<AboutUsPage t={t} lang={lang} />} />
              <Route path="/why-us" element={<AboutUsPage t={t} lang={lang} />} />

              {/* Contact */}
              <Route path="/contact" element={<ContactPage t={t} lang={lang} />} />

              {/* Secondary / Specialized Capabilities */}
              <Route path="/landing-page" element={<LandingPageService t={t} lang={lang} />} />
              <Route path="/games" element={<GamesPage t={t} lang={lang} />} />

              {/* 404 Catch-All */}
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

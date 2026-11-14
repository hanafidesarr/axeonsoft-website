import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogSection from './components/CatalogSection';
import BookingSection from './components/BookingSection';
import LandingPageSection from './components/LandingPageSection';
import GamesSection from './components/GamesSection';
import WhyUs from './components/WhyUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { content } from './data/translations';

export default function App() {
  // Default language is English ('en') as required
  const [lang, setLang] = useState('en');
  const t = content[lang];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar lang={lang} setLang={setLang} t={t} scrollTo={scrollTo} />

      {/* Main One-Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero t={t} scrollTo={scrollTo} />

        {/* 2. Category: Product Catalog & E-Commerce */}
        <CatalogSection t={t} lang={lang} />

        {/* 3. Category: Online Booking & Reservations */}
        <BookingSection t={t} lang={lang} />

        {/* 4. Category: High-Converting Landing Pages */}
        <LandingPageSection t={t} lang={lang} scrollTo={scrollTo} />

        {/* 5. Category: Games / Catbox Studio */}
        <GamesSection t={t} lang={lang} />

        {/* 6. Why Axeonsoft */}
        <WhyUs t={t} lang={lang} />

        {/* 7. Contact & All Social Media Links */}
        <ContactSection t={t} lang={lang} />
      </main>

      {/* Footer */}
      <Footer t={t} scrollTo={scrollTo} />

      {/* Persistent Floating WhatsApp Consultation */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}

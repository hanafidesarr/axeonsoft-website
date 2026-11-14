import React from 'react';
import { ArrowUp, Gamepad2 } from 'lucide-react';
import { socialLinks, officialWaLink } from '../data/translations';

export default function Footer({ t, scrollTo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={`${import.meta.env.BASE_URL}axeonsoft-round-logo.png`} 
                alt="Axeonsoft Logo" 
                className="w-10 h-10 rounded-full object-contain p-0.5 bg-slate-900 border border-[#fec003]/40 shadow-md shadow-[#fec003]/20"
              />
              <div>
                <span className="text-lg font-bold text-white tracking-tight">Axeonsoft</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#fec003] font-semibold">
                  Software House & Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering modern brands with high-performance digital product catalogs, automated online bookings, high-converting landing pages, and interactive web games.
            </p>

            <div className="pt-2">
              <a
                href="https://catbox.axeonsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs hover:bg-[#fec003]/20 transition-all group"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}logo-catbox.png`} 
                  alt="Catbox Studio" 
                  className="w-5 h-5 object-contain rounded shrink-0 group-hover:scale-110 transition-transform" 
                />
                <span className="font-bold">{t.footer.gamingDivision}</span>
              </a>
            </div>
          </div>

          {/* Quick Jump Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-[#fec003] transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} className="hover:text-[#fec003] transition-colors">
                  {t.nav.catalog}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('booking')} className="hover:text-[#fec003] transition-colors">
                  {t.nav.booking}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('landing-page')} className="hover:text-[#fec003] transition-colors">
                  {t.nav.landingPage}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-us')} className="hover:text-[#fec003] transition-colors">
                  {t.nav.whyUs}
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Games */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Gaming & Hubs
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="https://catbox.axeonsoft.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#fec003] hover:text-[#ffd033] font-bold flex items-center gap-1.5"
                >
                  <img src={`${import.meta.env.BASE_URL}logo-catbox.png`} alt="Catbox" className="w-4 h-4 object-contain rounded shrink-0" />
                  <span>Catbox Studio Games</span>
                </a>
              </li>
              <li>
                <button onClick={() => scrollTo('games')} className="hover:text-[#fec003] transition-colors">
                  Game Showcase
                </button>
              </li>
              <li>
                <a 
                  href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20konsultasi%20pembuatan%20game%20web`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#fec003] transition-colors"
                >
                  Custom Brand Gamification
                </a>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-[#fec003] transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels (WhatsApp, Instagram, YouTube, TikTok) */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Official Channels
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#fec003]/40 hover:text-[#fec003] transition-all text-xs font-medium flex items-center justify-between"
                >
                  <span>{soc.name}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{soc.handle}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-[11px] text-center sm:text-left">
            {t.footer.copyright} • {t.footer.disclaimer}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-[#fec003] transition-all text-xs"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#fec003]" />
          </button>
        </div>

      </div>
    </footer>
  );
}

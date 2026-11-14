import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  MessageSquare, 
  Gamepad2, 
  ShoppingBag, 
  Calendar, 
  Layers, 
  Sparkles
} from 'lucide-react';
import { officialWaLink, officialPhoneDisplay } from '../data/translations';

export default function Navbar({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'catalog', 'booking', 'landing-page', 'games', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'catalog', label: t.nav.catalog, icon: ShoppingBag },
    { id: 'booking', label: t.nav.booking, icon: Calendar },
    { id: 'landing-page', label: t.nav.landingPage, icon: Layers },
    { id: 'games', label: t.nav.games, isGame: true },
    { id: 'why-us', label: t.nav.whyUs },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080c16]/90 backdrop-blur-md border-b border-[#fec003]/20 shadow-xl shadow-black/60 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with axeonsoft-round-logo.png */}
          <button 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}axeonsoft-round-logo.png`} 
                alt="Axeonsoft Logo" 
                className="w-10 h-10 rounded-full object-contain p-0.5 bg-slate-900 border border-[#fec003]/40 group-hover:border-[#fec003] group-hover:scale-105 transition-all shadow-md shadow-[#fec003]/20"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#fec003] ring-2 ring-[#080c16]"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#fec003] transition-colors">
                  Axeonsoft
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                {t.nav.brandSub}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#fec003]/15 text-[#fec003] border border-[#fec003]/40 shadow-sm'
                      : item.isGame
                        ? 'text-amber-300 hover:text-[#fec003] hover:bg-[#fec003]/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.isGame ? (
                    <img 
                      src={`${import.meta.env.BASE_URL}logo-catbox.png`} 
                      alt="Catbox" 
                      className="w-4 h-4 rounded object-contain shrink-0" 
                    />
                  ) : null}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 border border-slate-700/80 hover:border-[#fec003]/50 text-slate-200 hover:text-white transition-all shadow-inner"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#fec003]" />
              <span>{lang === 'en' ? 'EN' : 'ID'}</span>
              <span className="text-[10px] text-slate-400 uppercase font-mono">
                {lang === 'en' ? '🇬🇧' : '🇮🇩'}
              </span>
            </button>

            {/* Direct WhatsApp CTA with new number 085174091042 */}
            <a
              href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20dengan%20layanan%20Anda`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-md shadow-[#fec003]/25 hover:shadow-[#fec003]/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.chatWa}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-bold text-[#fec003]"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/80 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-colors ${
                      isActive
                        ? 'bg-[#fec003]/15 text-[#fec003] border border-[#fec003]/30'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.isGame ? (
                        <img src={`${import.meta.env.BASE_URL}logo-catbox.png`} alt="Catbox" className="w-5 h-5 rounded object-contain shrink-0" />
                      ) : item.icon ? (
                        <item.icon className="w-4 h-4 text-[#fec003]" />
                      ) : null}
                      <span>{item.label}</span>
                    </div>
                    {item.isGame && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#fec003]/20 text-[#fec003] border border-[#fec003]/30 font-bold">
                        Catbox
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20dengan%20layanan%20Anda`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-lg shadow-[#fec003]/20"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{t.nav.chatWa} ({officialPhoneDisplay})</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

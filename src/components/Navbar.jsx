import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe, 
  ChevronDown,
  ShoppingBag, 
  Calendar, 
  Store, 
  Share2,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { officialWaLink, officialPhoneDisplay } from '../data/translations';

export default function Navbar({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const solutions = [
    {
      path: '/solutions/website-catalog',
      label: t.nav.catalog,
      desc: lang === 'en' ? 'Showcase company & product catalog' : 'Tampilkan profil bisnis & produk online',
      icon: ShoppingBag,
      badge: lang === 'en' ? 'In-House' : 'In-House'
    },
    {
      path: '/solutions/online-booking',
      label: t.nav.booking,
      desc: lang === 'en' ? 'Appointment booking with admin approval' : 'Sistem reservasi & persetujuan admin',
      icon: Calendar,
      badge: lang === 'en' ? 'In-House' : 'In-House'
    },
    {
      path: '/solutions/ecommerce',
      label: t.nav.ecommerce,
      desc: lang === 'en' ? 'Online store powered by Spree Commerce' : 'Toko online berbasis Spree Commerce',
      icon: Store,
      badge: 'Spree Commerce'
    },
    {
      path: '/solutions/social-media',
      label: t.nav.socialMedia,
      desc: lang === 'en' ? 'Content scheduling powered by Postiz' : 'Penjadwalan konten berbasis Postiz',
      icon: Share2,
      badge: 'Postiz'
    },
  ];

  const isSolutionsActive = location.pathname.startsWith('/solutions') || 
                            location.pathname === '/catalog' || 
                            location.pathname === '/booking';

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080c16]/95 backdrop-blur-md border-b border-[#fec003]/20 shadow-xl shadow-black/60 py-3' 
          : 'bg-[#080c16]/85 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Axeonsoft Home"
          >
            <div className="relative">
              <img 
                src="/axeonsoft-round-logo.png" 
                alt="Axeonsoft Logo" 
                className="w-10 h-10 rounded-full object-contain p-0.5 bg-slate-900 border border-[#fec003]/40 group-hover:border-[#fec003] group-hover:scale-105 transition-all shadow-md shadow-[#fec003]/20"
                width="40"
                height="40"
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            
            {/* Home Link */}
            <NavLink
              to="/"
              end
              className={({ isActive }) => `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-[#fec003]/20 text-[#fec003] border border-[#fec003]/40 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.nav.home}
            </NavLink>

            {/* Solutions Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                  isSolutionsActive || solutionsDropdownOpen
                    ? 'bg-[#fec003]/20 text-[#fec003] border border-[#fec003]/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={solutionsDropdownOpen}
              >
                <span>{t.nav.solutions}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-[#fec003]' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl p-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                    {t.nav.solutions}
                  </div>
                  <div className="py-1">
                    {solutions.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path || 
                        (item.path === '/solutions/website-catalog' && location.pathname === '/catalog') ||
                        (item.path === '/solutions/online-booking' && location.pathname === '/booking');

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                            isActive 
                              ? 'bg-[#fec003]/15 text-[#fec003]' 
                              : 'text-slate-200 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#fec003]/10 text-[#fec003] flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold truncate">{item.label}</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 truncate mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* About Us Link */}
            <NavLink
              to="/about-us"
              className={({ isActive }) => `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive || location.pathname === '/why-us'
                  ? 'bg-[#fec003]/20 text-[#fec003] border border-[#fec003]/40 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.nav.aboutUs}
            </NavLink>

            {/* Contact Link */}
            <NavLink
              to="/contact"
              className={({ isActive }) => `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-[#fec003]/20 text-[#fec003] border border-[#fec003]/40 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.nav.contact}
            </NavLink>

          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-slate-300 hover:text-white hover:border-[#fec003]/50 transition-colors"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#fec003]" />
              <span className="uppercase">{lang}</span>
            </button>

            {/* Primary Action Button */}
            <a
              href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20mendiskusikan%20kebutuhan%20solusi%20digital%20bisnis`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-xs transition-all shadow-md shadow-[#fec003]/25 hover:shadow-[#fec003]/40"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.chatWa}</span>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px] font-bold text-slate-300 uppercase"
              aria-label="Toggle Language"
            >
              <Globe className="w-3 h-3 text-[#fec003]" />
              <span>{lang}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#080c16]/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                isActive ? 'bg-[#fec003]/15 text-[#fec003]' : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>{t.nav.home}</span>
            </NavLink>

            {/* Mobile Solutions Section */}
            <div className="pt-2 pb-1">
              <div className="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {t.nav.solutions}
              </div>
              <div className="space-y-1 mt-1 pl-2">
                {solutions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#fec003]" />
                        <span>{item.label}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {item.badge}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <NavLink
              to="/about-us"
              className={({ isActive }) => `px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                isActive || location.pathname === '/why-us' ? 'bg-[#fec003]/15 text-[#fec003]' : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>{t.nav.aboutUs}</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                isActive ? 'bg-[#fec003]/15 text-[#fec003]' : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>{t.nav.contact}</span>
            </NavLink>
          </nav>

          <div className="pt-2 border-t border-slate-800">
            <a
              href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20mendiskusikan%20kebutuhan%20solusi%20digital%20bisnis`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-xs shadow-lg shadow-[#fec003]/25 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.nav.chatWa}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

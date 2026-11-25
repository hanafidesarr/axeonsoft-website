import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingBag, 
  Calendar, 
  Store, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Zap,
  HelpCircle,
  ChevronDown,
  Layers,
  Search,
  Clock,
  Send,
  Check
} from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import { officialWaLink } from '../data/translations';

export default function HomePage({ t, lang }) {
  const [activeDemoTab, setActiveDemoTab] = useState('catalog');
  const [openFaq, setOpenFaq] = useState(null);

  // Demo 1: Catalog search state
  const [catalogSearch, setCatalogSearch] = useState('');
  const [catalogCategory, setCatalogCategory] = useState('all');

  // Demo 2: Booking state
  const [bookingService, setBookingService] = useState('Initial Business Consultation');
  const [bookingDate, setBookingDate] = useState('2026-11-25');
  const [bookingTime, setBookingTime] = useState('10:00 AM');
  const [bookingName, setBookingName] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Demo 3: Ecommerce cart state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Industrial POS Terminal', qty: 1 }
  ]);
  const [checkoutNoticeVisible, setCheckoutNoticeVisible] = useState(false);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Axeonsoft",
    "url": "https://axeonsoft.com",
    "logo": "https://axeonsoft.com/axeonsoft-round-logo.png",
    "description": t.seo.home.description,
    "telephone": "+6285174091042",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://instagram.com/axeonsoft",
      "https://youtube.com/@axeonsoft",
      "https://tiktok.com/@axeonsoft"
    ]
  };

  const solutionIcons = {
    "website-catalog": ShoppingBag,
    "online-booking": Calendar,
    "ecommerce": Store,
    "social-media": Share2,
  };

  const solutionColors = {
    "website-catalog": "from-amber-500/20 to-orange-500/10 text-[#fec003] bg-[#fec003]/10 border-[#fec003]/30",
    "online-booking": "from-blue-500/20 to-indigo-500/10 text-blue-400 bg-blue-500/10 border-blue-500/30",
    "ecommerce": "from-emerald-500/20 to-teal-500/10 text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    "social-media": "from-purple-500/20 to-pink-500/10 text-purple-400 bg-purple-500/10 border-purple-500/30",
  };

  const filteredDemoProducts = t.catalogSection.products.filter(p => {
    const matchesCat = catalogCategory === 'all' || p.category === catalogCategory;
    const matchesQuery = p.name.toLowerCase().includes(catalogSearch.toLowerCase()) || 
                         p.desc.toLowerCase().includes(catalogSearch.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleBookingDemoSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    const msg = lang === 'en'
      ? `Hello Axeonsoft! I would like to request an appointment:\n• Service: ${bookingService}\n• Date: ${bookingDate}\n• Time: ${bookingTime}\n• Name: ${bookingName || 'Prospective Client'}\n\nPlease confirm availability!`
      : `Halo Axeonsoft! Saya ingin mengajukan reservasi jadwal:\n• Layanan: ${bookingService}\n• Tanggal: ${bookingDate}\n• Jam: ${bookingTime}\n• Nama: ${bookingName || 'Klien'}\n\nMohon konfirmasi ketersediaan jadwal, terima kasih!`;
    const url = `${officialWaLink}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
        keywords={t.seo.home.keywords}
        canonicalPath="/"
        schema={schema}
        lang={lang}
      />

      {/* 1. Hero Section */}
      <Hero t={t} isHomePage={true} />

      {/* 2. Introduction Section */}
      <section className="py-24 relative overflow-hidden bg-[#090e1b] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.intro.badge}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t.intro.title}
              </h2>
              
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                {t.intro.lead}
              </p>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.intro.p1}
              </p>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.intro.p2}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#fec003]/10 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#fec003]" />
                  <span>{t.intro.audienceTitle}</span>
                </h3>

                <div className="space-y-4">
                  {t.intro.audiences.map((aud, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-[#fec003]/40 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-[#fec003]/15 text-[#fec003] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">
                        {aud}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {lang === 'en' ? 'Explore how we can help your team' : 'Pelajari bagaimana kami membantu bisnis Anda'}
                  </span>
                  <a
                    href="#solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fec003] hover:underline"
                  >
                    <span>{t.hero.ctaSecondary}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Solutions Section */}
      <section id="solutions" className="py-24 relative overflow-hidden bg-[#070b14] border-t border-slate-800/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#fec003]/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.solutionsOverview.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {t.solutionsOverview.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {t.solutionsOverview.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.solutionsOverview.items.map((item, idx) => {
              const Icon = solutionIcons[item.id] || ShoppingBag;
              const colorClasses = solutionColors[item.id] || solutionColors["website-catalog"];

              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 hover:border-[#fec003]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between relative overflow-hidden shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-[#fec003] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#fec003] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#fec003] mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {item.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-[#fec003] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80">
                    <Link
                      to={item.path}
                      className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-[#fec003] text-white hover:text-slate-950 font-bold text-xs transition-all duration-200 shadow-md group-hover:shadow-lg"
                    >
                      <span>{t.solutionsOverview.learnMore}: {item.title}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Axeonsoft Section */}
      <section className="py-24 relative bg-[#090e1b] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.whyUs.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {t.whyUs.title}
            </h2>
            <p className="text-base text-slate-300">
              {t.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyUs.cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#fec003]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#fec003]/10 text-[#fec003] flex items-center justify-center mb-5">
                    {idx === 0 && <TrendingUp className="w-6 h-6" />}
                    {idx === 1 && <Layers className="w-6 h-6" />}
                    {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 3 && <Zap className="w-6 h-6" />}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                  // 0{idx + 1} Pillar
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. How We Work Section */}
      <section className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>{t.howWeWork.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {t.howWeWork.title}
            </h2>
            <p className="text-base text-slate-300">
              {t.howWeWork.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.howWeWork.steps.map((st, i) => (
              <div 
                key={i} 
                className="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-[#fec003]/40 transition-colors"
              >
                <div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fec003] to-amber-200 mb-4">
                    {st.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Product Demonstrations Section */}
      <section className="py-24 relative bg-[#090e1b] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.demosSection.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {t.demosSection.title}
            </h2>
            <p className="text-base text-slate-300 mb-4">
              {t.demosSection.subtitle}
            </p>
            <p className="text-xs text-slate-400 italic">
              {t.demosSection.disclaimer}
            </p>
          </div>

          {/* Demonstration Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveDemoTab('catalog')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDemoTab === 'catalog'
                  ? 'bg-[#fec003] text-slate-950 shadow-lg shadow-[#fec003]/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t.demosSection.tabs.catalog}</span>
            </button>

            <button
              onClick={() => setActiveDemoTab('booking')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDemoTab === 'booking'
                  ? 'bg-[#fec003] text-slate-950 shadow-lg shadow-[#fec003]/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{t.demosSection.tabs.booking}</span>
            </button>

            <button
              onClick={() => setActiveDemoTab('ecommerce')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDemoTab === 'ecommerce'
                  ? 'bg-[#fec003] text-slate-950 shadow-lg shadow-[#fec003]/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>{t.demosSection.tabs.ecommerce}</span>
            </button>

            <button
              onClick={() => setActiveDemoTab('social')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeDemoTab === 'social'
                  ? 'bg-[#fec003] text-slate-950 shadow-lg shadow-[#fec003]/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>{t.demosSection.tabs.social}</span>
            </button>
          </div>

          {/* Active Demo Container */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            
            {/* Tab 1: Website Catalog Demo */}
            {activeDemoTab === 'catalog' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#fec003] font-bold">
                      {lang === 'en' ? 'In-House Showcase Demonstration' : 'Simulasi Etalase Produk In-House'}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {t.catalogSection.demoTitle}
                    </h3>
                  </div>

                  <div className="relative min-w-[240px]">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text"
                      placeholder={lang === 'en' ? "Search catalog items..." : "Cari item katalog..."}
                      value={catalogSearch}
                      onChange={(e) => setCatalogSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-[#fec003] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredDemoProducts.slice(0, 4).map((prod) => (
                    <div key={prod.id} className="rounded-2xl bg-slate-800/60 border border-slate-700 p-4 flex flex-col justify-between hover:border-[#fec003]/40 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-[#fec003] px-2 py-0.5 rounded bg-slate-900">
                            {prod.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1.5">{prod.name}</h4>
                        <p className="text-xs text-slate-400 line-clamp-2 mb-3">{prod.desc}</p>
                        <p className="text-[11px] text-slate-300 font-mono bg-slate-900/60 p-2 rounded-lg border border-slate-800 mb-4">
                          {prod.specs}
                        </p>
                      </div>

                      <a
                        href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20bertanya%20mengenai%20produk%20katalog:%20${encodeURIComponent(prod.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl bg-[#fec003]/15 hover:bg-[#fec003] text-[#fec003] hover:text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{t.catalogSection.inquireBtn}</span>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{lang === 'en' ? 'Clicking inquire prepares a pre-filled direct inquiry.' : 'Klik tombol tanya untuk membuka konsultasi langsung.'}</span>
                  <Link to="/solutions/website-catalog" className="text-[#fec003] hover:underline font-bold flex items-center gap-1">
                    <span>{lang === 'en' ? 'View Full Website Catalog Solution' : 'Pelajari Solusi Katalog Website'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Tab 2: Online Booking Demo */}
            {activeDemoTab === 'booking' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center pb-4 border-b border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#fec003] font-bold">
                    {lang === 'en' ? 'In-House Booking Request Flow' : 'Alur Permohonan Reservasi In-House'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {t.bookingSection.demoTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {t.bookingSection.approvalNote}
                  </p>
                </div>

                <form onSubmit={handleBookingDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                      {t.bookingSection.serviceLabel}
                    </label>
                    <select
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#fec003]"
                    >
                      {t.bookingSection.servicesList.map(s => (
                        <option key={s.id} value={s.name} className="bg-slate-900">
                          {s.name} ({s.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                        {t.bookingSection.dateLabel}
                      </label>
                      <input 
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#fec003]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                        {t.bookingSection.timeLabel}
                      </label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#fec003]"
                      >
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="01:30 PM">01:30 PM</option>
                        <option value="03:30 PM">03:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                      {t.bookingSection.nameLabel}
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Your name"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#fec003]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.bookingSection.submitBtn}</span>
                  </button>
                </form>

                <div className="pt-2 text-center">
                  <Link to="/solutions/online-booking" className="text-xs text-[#fec003] hover:underline font-bold inline-flex items-center gap-1">
                    <span>{lang === 'en' ? 'Learn more about Online Booking System' : 'Pelajari Sistem Booking Online Selengkapnya'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Tab 3: Ecommerce Demo */}
            {activeDemoTab === 'ecommerce' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      Spree Commerce Architecture
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {t.ecommerceSection.demoTitle}
                    </h3>
                  </div>
                  <Link to="/solutions/ecommerce" className="text-xs text-[#fec003] hover:underline font-bold flex items-center gap-1">
                    <span>{lang === 'en' ? 'Explore Ecommerce Details' : 'Rincian Solusi Ecommerce'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="text-xs font-bold text-slate-300 uppercase">
                      {lang === 'en' ? 'Simulated Storefront Items' : 'Pilihan Produk Toko Online'}
                    </h4>
                    {t.catalogSection.products.slice(0, 2).map((p) => (
                      <div key={p.id} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] text-emerald-400 font-mono">{p.category}</span>
                          <h5 className="text-sm font-bold text-white">{p.name}</h5>
                          <p className="text-xs text-slate-400 line-clamp-1">{p.desc}</p>
                        </div>
                        <button
                          onClick={() => {
                            if (!cartItems.find(item => item.id === p.id)) {
                              setCartItems([...cartItems, { id: p.id, name: p.name, qty: 1 }]);
                            }
                          }}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs transition-colors shrink-0"
                        >
                          + {lang === 'en' ? 'Add to Bag' : 'Tambah'}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
                    <h4 className="text-xs font-bold text-white uppercase flex items-center gap-2">
                      <Store className="w-4 h-4 text-emerald-400" />
                      <span>{t.ecommerceSection.demoCartTitle} ({cartItems.length})</span>
                    </h4>

                    <div className="space-y-2">
                      {cartItems.map((c, i) => (
                        <div key={i} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-700/60">
                          <span className="text-slate-200">{c.name}</span>
                          <span className="text-slate-400 font-mono">Qty: {c.qty}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {t.ecommerceSection.demoCheckoutNotice}
                    </p>

                    <button
                      onClick={() => setCheckoutNoticeVisible(true)}
                      className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                    >
                      {t.ecommerceSection.demoCheckoutBtn}
                    </button>

                    {checkoutNoticeVisible && (
                      <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs">
                        {lang === 'en' 
                          ? 'Simulation complete! In Spree Commerce, this seamlessly transitions into the checkout and order fulfillment pipeline.'
                          : 'Simulasi berhasil! Pada Spree Commerce, pesanan langsung masuk ke alur checkout dan pencatatan admin.'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Social Media Demo */}
            {activeDemoTab === 'social' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold">
                      Postiz Platform Architecture
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {t.socialMediaSection.demoTitle}
                    </h3>
                  </div>
                  <Link to="/solutions/social-media" className="text-xs text-[#fec003] hover:underline font-bold flex items-center gap-1">
                    <span>{lang === 'en' ? 'Explore Social Management Details' : 'Rincian Solusi Media Sosial'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-300 uppercase">
                    {t.socialMediaSection.demoQueueTitle}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {t.socialMediaSection.samplePosts.map((post, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3 hover:border-purple-500/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{post.day}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {post.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-medium">
                          {post.title}
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 text-[10px] text-slate-400">
                          <span>{post.platform}</span>
                          <span className="text-emerald-400 font-semibold">{t.socialMediaSection.demoStatusScheduled}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-center justify-between gap-4 text-xs">
                  <span className="text-purple-200">
                    {lang === 'en'
                      ? 'Postiz centralizes publishing across verified social channels without manual daily logins.'
                      : 'Postiz memusatkan jadwal tayang konten ke saluran yang didukung tanpa repot login harian.'}
                  </span>
                  <a
                    href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20mengenai%20solusi%20Social%20Media%20Management`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold shrink-0 transition-colors"
                  >
                    {lang === 'en' ? 'Discuss Setup' : 'Konsultasikan'}
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 7. Homepage FAQ Section */}
      <section className="py-24 relative bg-[#070b14] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{t.faqSection.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {t.faqSection.title}
            </h2>
            <p className="text-base text-slate-300">
              {t.faqSection.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.faqSection.items.map((faq, i) => (
              <div 
                key={i}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors focus:outline-none"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#fec003] shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-20 relative bg-gradient-to-b from-[#080c16] to-[#0c1222] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border border-[#fec003]/40 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fec003]/15 text-[#fec003] text-xs font-bold uppercase tracking-wider mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.finalCta.badge}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                {t.finalCta.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {t.finalCta.desc}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20mendiskusikan%20proyek%20solusi%20digital%20bisnis`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-lg shadow-[#fec003]/25 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                  <span>{t.finalCta.ctaPrimary}</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all"
                >
                  <span>{t.nav.contact}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

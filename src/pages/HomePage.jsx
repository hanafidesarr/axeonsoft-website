import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingBag, 
  Calendar, 
  Layers, 
  Gamepad2, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Zap,
  Flame
} from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import { officialWaLink } from '../data/translations';

export default function HomePage({ t, lang }) {
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

  const solutions = [
    {
      title: t.catalogSection.title,
      badge: t.catalogSection.badge,
      desc: t.catalogSection.tagline,
      to: "/catalog",
      icon: ShoppingBag,
      color: "from-amber-500/20 to-yellow-500/10",
      accent: "text-[#fec003] bg-[#fec003]/10 border-[#fec003]/30",
      highlights: t.catalogSection.features.slice(0, 3)
    },
    {
      title: t.bookingSection.title,
      badge: t.bookingSection.badge,
      desc: t.bookingSection.tagline,
      to: "/booking",
      icon: Calendar,
      color: "from-blue-500/20 to-indigo-500/10",
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      highlights: t.bookingSection.features.slice(0, 3)
    },
    {
      title: t.landingSection.title,
      badge: t.landingSection.badge,
      desc: t.landingSection.tagline,
      to: "/landing-page",
      icon: Layers,
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      highlights: t.landingSection.features.slice(0, 3)
    },
    {
      title: t.gamesSection.title,
      badge: t.gamesSection.badge,
      desc: t.gamesSection.tagline,
      to: "/games",
      icon: Gamepad2,
      color: "from-purple-500/20 to-pink-500/10",
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      highlights: t.gamesSection.features.slice(0, 3),
      isGame: true
    }
  ];

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

      {/* 1. Hero */}
      <Hero t={t} isHomePage={true} />

      {/* 2. Solutions Showcase Hub */}
      <section className="py-24 relative overflow-hidden bg-[#070b14] border-t border-slate-800/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#fec003]/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.categories.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {t.categories.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {t.categories.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 hover:border-[#fec003]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between relative overflow-hidden shadow-xl"
                >
                  <div className={`absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br ${item.color} rounded-full blur-3xl pointer-events-none`} />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${item.accent}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.badge}</span>
                      </div>
                      {item.isGame && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-bold">
                          <Flame className="w-3 h-3 text-[#fec003]" />
                          <span>Catbox Studio</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#fec003] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-[#fec003] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80">
                    <Link
                      to={item.to}
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-[#fec003] text-white hover:text-slate-950 font-semibold text-xs transition-all duration-200 group-hover:shadow-lg"
                    >
                      <span>
                        {lang === 'en' ? 'Explore Dedicated Page & Demo' : 'Buka Halaman Lengkap & Simulasi'}
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Performance & Speed Highlights */}
      <section className="py-20 relative bg-[#090e1b] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.landingSection.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 text-center relative group overflow-hidden"
              >
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fec003] to-amber-200 mb-2">
                  {metric.score}
                </div>
                <div className="text-base font-bold text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Axeonsoft Preview */}
      <section className="py-20 relative bg-[#070b14] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.whyUs.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {t.whyUs.title}
              </h2>
            </div>
            <Link
              to="/why-us"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#fec003] hover:text-white transition-colors"
            >
              <span>{lang === 'en' ? 'Learn about our engineering standards' : 'Pelajari standar teknologi kami'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyUs.cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-[#fec003]/40 transition-all"
              >
                <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation Banner CTA */}
      <section className="py-20 relative bg-gradient-to-b from-[#080c16] to-[#0b1222] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-[#fec003]/40 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fec003]/15 text-[#fec003] text-xs font-bold uppercase tracking-wider mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Free Consultation & Audit' : 'Konsultasi & Audit Gratis'}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                {lang === 'en' ? 'Ready to Build Your High-Performance Digital Product?' : 'Siap Membangun Produk Digital Berperforma Tinggi?'}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {lang === 'en'
                  ? 'Speak directly with our senior software engineers. Get a free architectural audit and cost estimation in under 15 minutes.'
                  : 'Bicara langsung dengan solusi arsitek kami. Dapatkan audit arsitektur dan estimasi biaya gratis dalam waktu kurang dari 15 menit.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20konsultasi%20layanan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-lg shadow-[#fec003]/25 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                  <span>{lang === 'en' ? 'Chat WhatsApp (0851-7409-1042)' : 'Chat WhatsApp (0851-7409-1042)'}</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all"
                >
                  <span>{lang === 'en' ? 'View Contact Details' : 'Lihat Detail Kontak'}</span>
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

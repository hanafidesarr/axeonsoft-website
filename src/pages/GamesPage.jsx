import React, { useState } from 'react';
import { 
  Gamepad2, 
  ExternalLink, 
  Play, 
  Sparkles, 
  Flame, 
  Smartphone, 
  Monitor, 
  Trophy,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { officialWaLink } from '../data/translations';

export default function GamesPage({ t, lang }) {
  const data = t.gamesSection;
  const [openFaq, setOpenFaq] = useState(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Catbox Studio Web Games",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser (HTML5, WebGL)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": data.description,
    "url": "https://catbox.axeonsoft.com/"
  };

  const breadcrumbs = [
    { label: t.nav.games, to: '/games' }
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title={t.seo.games.title}
        description={t.seo.games.description}
        keywords={t.seo.games.keywords}
        canonicalPath="/games"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header with Catbox Logo */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-bold mb-6">
            <Gamepad2 className="w-4 h-4 animate-bounce" />
            <span>{data.badge}</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#fec003] to-amber-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src="/logo-catbox.png" 
                alt="Catbox Studio Logo" 
                className="relative h-20 sm:h-24 object-contain rounded-xl p-1 bg-slate-900/80 border border-[#fec003]/30 shadow-2xl"
                loading="eager"
              />
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-2">
              {data.title}
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium mb-4">
            {data.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Featured Catbox Studio Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-amber-950/30 border border-[#fec003]/40 p-8 sm:p-12 mb-20 shadow-2xl overflow-hidden group">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fec003]/20 text-[#fec003] text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Official Gaming Division' : 'Divisi Game Resmi Axeonsoft'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === 'en'
                  ? 'Play instantly on your browser — zero install required!'
                  : 'Mainkan langsung di browser Anda — tanpa instal aplikasi!'}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {lang === 'en'
                  ? 'Catbox Studio builds custom HTML5 games, interactive web simulations, and brand gamification campaigns. Explore the full catalog on our dedicated gaming hub.'
                  : 'Catbox Studio mengembangkan aneka game HTML5 ringan, simulasi interaktif, serta modul gamifikasi untuk promosi brand. Kunjungi hub game resmi kami sekarang.'}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-[#fec003]" /> Mobile & Tablet Ready</span>
                <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4 text-[#fec003]" /> 60 FPS Desktop</span>
                <span className="flex items-center gap-1.5"><Trophy className="w-4 h-4 text-[#fec003]" /> Global Leaderboards</span>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={data.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#fec003] to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm tracking-wide uppercase shadow-2xl shadow-[#fec003]/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Play className="w-5 h-5 fill-slate-950" />
                <span>{data.visitStudioBtn}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Featured Games Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#fec003]" />
                <span>{data.featuredBadge}</span>
              </h2>
            </div>
            <a
              href={data.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#fec003] hover:underline flex items-center gap-1"
            >
              <span>{lang === 'en' ? 'View all on catbox.axeonsoft.com' : 'Lihat semua di catbox.axeonsoft.com'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.gamesList.map((game, i) => (
              <div 
                key={i}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-[#fec003]/50 transition-all hover:-translate-y-1 group relative overflow-hidden shadow-xl"
              >
                <div>
                  {game.image && (
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-950 border border-slate-800">
                      <img 
                        src={game.image} 
                        alt={`${game.title} - ${game.genre} Browser Game by Catbox Studio Axeonsoft`} 
                        loading="lazy" 
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width="400"
                        height="176"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute top-3 left-3 text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-slate-950/80 text-[#fec003] border border-[#fec003]/30 backdrop-blur-md">
                        {game.tag}
                      </span>
                      <span className="absolute top-3 right-3 text-xs font-bold text-amber-300 bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur-md">
                        {game.rating}
                      </span>
                    </div>
                  )}

                  {!game.image && (
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-[#fec003]/10 text-[#fec003] border border-[#fec003]/20">
                        {game.tag}
                      </span>
                      <span className="text-xs font-bold text-amber-300">
                        {game.rating}
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-white group-hover:text-[#fec003] transition-colors mb-1">
                    {game.title}
                  </h3>
                  <div className="text-xs text-[#fec003]/80 font-medium mb-3">
                    {game.genre}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {game.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={game.playUrl || data.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-[#fec003] text-white hover:text-slate-950 font-bold text-xs transition-all shadow-md group-hover:shadow-[#fec003]/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{lang === 'en' ? 'Play Instant on Catbox' : 'Mainkan Sekarang di Catbox'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Gamification Highlights */}
        {data.brandGamificationPoints && (
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {data.brandGamificationTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.brandGamificationPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#fec003]/40 transition-all"
                >
                  <h3 className="text-base font-bold text-[#fec003] mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {data.faqs && (
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#fec003]" />
                <span>Frequently Asked Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {data.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm font-semibold text-white">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#fec003] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-[#fec003]/30 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {lang === 'en' ? 'Commission a Custom Branded Web Game' : 'Pesan Game Web Khusus untuk Kampanye Promosi Brand Anda'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            {lang === 'en'
              ? 'From interactive marketing advergames to full browser-based RPGs, Catbox Studio builds custom playable web experiences for brands worldwide.'
              : 'Mulai dari game interaktif untuk promosi brand hingga game browser penuh tantangan, tim Catbox Studio siap merealisasikan konsep game Anda.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Catbox%20Studio%20/%20Axeonsoft,%20saya%20ingin%20konsultasi%20pembuatan%20game%20web`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>{lang === 'en' ? 'Discuss Custom Game on WhatsApp' : 'Diskusikan Game Kustom via WhatsApp'}</span>
          </a>
        </div>

      </div>
    </>
  );
}

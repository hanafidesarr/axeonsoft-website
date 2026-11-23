import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { officialWaLink, officialPhoneDisplay } from '../data/translations';

export default function Hero({ t, isHomePage = true }) {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Glows and Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(254,192,3,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#fec003]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 my-auto">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-[#fec003]/30 text-[#fec003] text-xs sm:text-sm font-semibold shadow-lg shadow-[#fec003]/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#fec003] animate-ping"></span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            {t.hero.titleStart}{' '}
            <span className="bg-gradient-to-r from-[#fec003] via-amber-300 to-yellow-200 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>{' '}
            {t.hero.titleEnd}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-xl shadow-[#fec003]/25 hover:shadow-[#fec003]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </Link>

            <a
              href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20dengan%20layanan%20Anda`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-[#fec003]/50 hover:text-white transition-all shadow-lg backdrop-blur-md"
            >
              <MessageSquare className="w-5 h-5 text-[#fec003]" />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80">
            {t.hero.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-[#fec003]/30 transition-all text-center group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fec003] to-amber-200 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 mt-6 tracking-wide">
            {t.hero.trustedBy}
          </p>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { officialWaLink, officialPhoneDisplay } from '../data/translations';

export default function Hero({ t, isHomePage = true }) {
  return (
    <section id="hero" className="relative min-h-[85vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Glows and Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(254, 192, 3,0.14),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-[#fec003]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[320px] bg-amber-600/10 blur-[140px] rounded-full pointer-events-none" />

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

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            {t.hero.headline.split(' ').map((word, i) => {
              // Highlight the middle key phrase
              const isHighlight = i >= 3 && i <= 6;
              return isHighlight ? (
                <span key={i} className="bg-gradient-to-r from-[#fec003] via-amber-300 to-orange-200 bg-clip-text text-transparent">
                  {word}{' '}
                </span>
              ) : (
                <span key={i}>{word} </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            {t.hero.subtitle}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20mendiskusikan%20proyek%20solusi%20digital%20untuk%20bisnis%20saya`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-xl shadow-[#fec003]/25 hover:shadow-[#fec003]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>

            <a
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-[#fec003]/50 hover:text-white transition-all shadow-lg backdrop-blur-md"
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Business Value Pillars Grid (Replaces fabricated statistics) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-8 border-t border-slate-800/80">
            {t.hero.pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-[#fec003]/30 transition-all text-left group"
              >
                <div className="text-sm font-bold text-white group-hover:text-[#fec003] transition-colors mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fec003]" />
                  <span>{pillar.title}</span>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed font-normal">
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

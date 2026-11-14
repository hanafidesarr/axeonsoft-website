import React from 'react';
import { 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  Gauge
} from 'lucide-react';
import { officialWaLink } from '../data/translations';

export default function LandingPageSection({ t, lang }) {
  const data = t.landingSection;

  return (
    <section id="landing-page" className="py-24 relative overflow-hidden bg-[#0a0f1d]/60 border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#fec003]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-medium mb-3">
            {data.tagline}
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* 3 Lighthouse Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {data.metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-[#fec003]/40 transition-all text-center relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fec003] via-amber-400 to-yellow-200 opacity-60 group-hover:opacity-100 transition-opacity" />
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

        {/* Features Split Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-amber-950/20 border border-[#fec003]/20 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === 'en' 
                  ? 'Engineered to turn traffic into revenue' 
                  : 'Dirancang khusus untuk mengubah traffic iklan menjadi omzet nyata'}
              </h3>
              
              <div className="space-y-3.5">
                {data.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#fec003]/20 text-[#fec003] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-white/10 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#fec003]/20 text-[#fec003] flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {data.demoCta}
              </h4>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {data.demoSub}
              </p>
              <a
                href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20konsultasi%20pembuatan%20Landing%20Page%20berkonversi%20tinggi`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-lg shadow-[#fec003]/25 transition-all"
              >
                <span>{lang === 'en' ? 'Get Landing Page Audit' : 'Klaim Audit Landing Page'}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

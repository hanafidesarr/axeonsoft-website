import React from 'react';
import { 
  Zap, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export default function WhyUs({ t }) {
  const data = t.whyUs;

  const getIcon = (name) => {
    switch (name) {
      case 'Zap': return Zap;
      case 'Layers': return Layers;
      case 'TrendingUp': return TrendingUp;
      case 'ShieldCheck': return ShieldCheck;
      default: return Sparkles;
    }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#080c16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-medium">
            {data.subtitle}
          </p>
        </div>

        {/* 4 Value Cards (No Fake Statistics or Unverified Claims) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards.map((card, idx) => {
            const Icon = getIcon(card.icon);
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 hover:border-[#fec003]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#fec003]/10 text-[#fec003] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#fec003]/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#fec003] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span>// 0{idx + 1}</span>
                  <span className="w-full h-[1px] bg-slate-800 group-hover:bg-[#fec003]/30 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

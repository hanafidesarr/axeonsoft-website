import React from 'react';
import { 
  Zap, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
  Server,
  Cpu,
  Lock,
  MessageSquare
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { officialWaLink } from '../data/translations';

export default function WhyUsPage({ t, lang }) {
  const data = t.whyUs;

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Why Axeonsoft - Engineering Advantage & Standards",
    "description": data.subtitle,
    "publisher": {
      "@type": "Organization",
      "name": "Axeonsoft",
      "url": "https://axeonsoft.com"
    }
  };

  const breadcrumbs = [
    { label: t.nav.whyUs, to: '/why-us' }
  ];

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
    <>
      <SEO
        title={t.seo.whyUs.title}
        description={t.seo.whyUs.description}
        keywords={t.seo.whyUs.keywords}
        canonicalPath="/why-us"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
            {data.subtitle}
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {data.cards.map((card, idx) => {
            const Icon = getIcon(card.icon);
            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 hover:border-[#fec003]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#fec003]/10 text-[#fec003] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#fec003]/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#fec003] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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

        {/* Comparison Table */}
        {data.comparison && (
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {data.comparison.title}
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-800 shadow-2xl bg-slate-900/70">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80">
                    {data.comparison.headers.map((h, i) => (
                      <th
                        key={i}
                        className={`p-4 sm:p-5 font-bold uppercase tracking-wider text-xs ${
                          i === 2 ? 'text-[#fec003]' : 'text-slate-300'
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {data.comparison.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-white">
                        {row[0]}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-400">
                        {row[1]}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-[#fec003] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{row[2]}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5-Step Engineering Workflow */}
        {data.steps && (
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {data.processTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {data.processSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {data.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-[#fec003]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-2xl font-black text-[#fec003] mb-3 font-mono">
                      {st.num}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">
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
        )}

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-[#fec003]/30 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {lang === 'en' ? 'Let’s Engineer Your Next Digital Success' : 'Mari Rancang Kesuksesan Digital Anda Bersama Kami'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            {lang === 'en'
              ? 'Experience the difference of partnering directly with software engineers who care about your speed, security, and conversion.'
              : 'Rasakan keunggulan bermitra langsung dengan tim rekayasa software yang peduli pada kecepatan, keamanan, dan omzet bisnis Anda.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20berdiskusi%20mengenai%20proyek%20baru`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>{lang === 'en' ? 'Start WhatsApp Discussion' : 'Mulai Diskusi via WhatsApp'}</span>
          </a>
        </div>

      </div>
    </>
  );
}

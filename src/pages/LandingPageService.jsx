import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  Gauge, 
  Zap, 
  TrendingUp, 
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { officialWaLink } from '../data/translations';

export default function LandingPageService({ t, lang }) {
  const data = t.landingSection;
  const [openFaq, setOpenFaq] = useState(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "provider": {
      "@type": "Organization",
      "name": "Axeonsoft",
      "url": "https://axeonsoft.com"
    },
    "description": data.description,
    "areaServed": "Global",
    "serviceType": "High-Converting Landing Page & CRO Development"
  };

  const breadcrumbs = [
    { label: t.nav.landingPage, to: '/landing-page' }
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title={t.seo.landingPage.title}
        description={t.seo.landingPage.description}
        keywords={t.seo.landingPage.keywords}
        canonicalPath="/landing-page"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium mb-4">
            {data.tagline}
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* 3 Lighthouse Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {data.metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-[#fec003]/40 transition-all text-center relative group overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fec003] via-amber-400 to-yellow-200 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fec003] to-amber-200 mb-2">
                {metric.score}
              </div>
              <div className="text-lg font-bold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Features Split Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-amber-950/20 border border-[#fec003]/20 p-8 sm:p-12 shadow-2xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === 'en' 
                  ? 'Engineered to turn traffic into revenue' 
                  : 'Dirancang khusus untuk mengubah traffic iklan menjadi omzet nyata'}
              </h2>
              
              <div className="space-y-4">
                {data.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#fec003]/20 text-[#fec003] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 p-6 sm:p-8 rounded-2xl text-center space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#fec003]/10 text-[#fec003] mx-auto flex items-center justify-center">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {data.demoCta}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.demoSub}
              </p>
              <a
                href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20klaim%20audit%20landing%20page%20gratis`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-xs shadow-lg shadow-[#fec003]/20 transition-all"
              >
                <span>{lang === 'en' ? 'Claim Free Audit on WhatsApp' : 'Klaim Audit Gratis via WhatsApp'}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>

          </div>
        </div>

        {/* 4 Conversion Principles */}
        {data.principles && (
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {data.principlesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.principles.map((pr, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#fec003]/40 transition-all"
                >
                  <div className="text-xs font-mono text-[#fec003] font-bold mb-2">
                    {pr.step} // PRINCIPLE
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pr.desc}
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
            {lang === 'en' ? 'Stop Wasting Your Advertising Budget' : 'Hentikan Pemborosan Anggaran Iklan Anda'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            {lang === 'en'
              ? 'Upgrade to a custom high-performance landing page that loads in under 800ms and converts more clicks into leads.'
              : 'Tingkatkan hasil iklan Anda dengan landing page super kilat berkecepatan di bawah 800ms dan formula penawaran konversi tinggi.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20membuat%20landing%20page%20konversi%20tinggi`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>{lang === 'en' ? 'Consult Landing Page via WhatsApp' : 'Konsultasi Landing Page via WhatsApp'}</span>
          </a>
        </div>

      </div>
    </>
  );
}

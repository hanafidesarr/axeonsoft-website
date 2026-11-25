import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  TrendingUp, 
  MessageSquare, 
  Zap, 
  Layers, 
  ArrowRight,
  Gamepad2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { officialWaLink } from '../data/translations';

export default function AboutUsPage({ t, lang }) {
  const data = t.aboutUsPage;

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": t.seo.aboutUs.title,
    "description": t.seo.aboutUs.description,
    "publisher": {
      "@type": "Organization",
      "name": "Axeonsoft",
      "url": "https://axeonsoft.com"
    }
  };

  const breadcrumbs = [
    { label: t.nav.aboutUs, to: '/about-us' }
  ];

  return (
    <>
      <SEO
        title={t.seo.aboutUs.title}
        description={t.seo.aboutUs.description}
        keywords={t.seo.aboutUs.keywords}
        canonicalPath="/about-us"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto my-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {data.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#fec003]/15 text-[#fec003] flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">{data.missionTitle}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {data.missionDesc}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">{data.visionTitle}</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {data.visionDesc}
            </p>
          </div>
        </div>

        {/* Guiding Pillars */}
        <div className="my-20 pt-12 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {lang === 'en' ? 'Our Core Principles' : 'Prinsip Kerja Kami'}
            </h2>
            <p className="text-sm text-slate-400">
              {lang === 'en'
                ? 'How we approach digital technology and long-term client collaboration.'
                : 'Bagaimana kami memandang teknologi digital dan kemitraan jangka panjang bersama klien.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.pillars.map((pil, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#fec003]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#fec003]/10 text-[#fec003] flex items-center justify-center mb-4">
                  {idx === 0 && <TrendingUp className="w-5 h-5" />}
                  {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 2 && <MessageSquare className="w-5 h-5" />}
                  {idx === 3 && <Zap className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pil.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Services Note */}
        <div className="my-20 p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              <Gamepad2 className="w-4 h-4 text-[#fec003]" />
              <span>{data.secondaryServicesTitle}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {data.secondaryServicesDesc}
            </p>
            <p className="text-xs text-slate-400 italic">
              {data.gamingDivisionNote}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/games"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors text-center"
            >
              {lang === 'en' ? 'Catbox Studio' : 'Kunjungi Catbox Studio'}
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="my-16 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border border-[#fec003]/40 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {lang === 'en' ? 'Let’s Discuss Your Business Project' : 'Mari Diskusikan Proyek Bisnis Anda'}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            {lang === 'en'
              ? 'Tell us what challenges you are looking to solve, and we will recommend the right digital solution.'
              : 'Ceritakan kendala yang ingin Anda selesaikan, dan kami akan merekomendasikan solusi digital yang tepat.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20bisnis%20kami`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.hero.ctaPrimary}</span>
          </a>
        </div>

      </div>
    </>
  );
}

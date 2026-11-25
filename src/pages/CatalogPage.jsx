import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  MessageSquare, 
  Search, 
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { officialWaLink } from '../data/translations';

export default function CatalogPage({ t, lang }) {
  const data = t.catalogSection;
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Axeonsoft Website Catalog Solution",
    "provider": {
      "@type": "Organization",
      "name": "Axeonsoft",
      "url": "https://axeonsoft.com"
    },
    "description": data.heroSubtitle,
    "category": "Software > Business Website Solutions"
  };

  const breadcrumbs = [
    { label: t.nav.solutions, to: '/#solutions' },
    { label: data.badge, to: '/solutions/website-catalog' }
  ];

  const filterTabs = [
    { id: 'all', label: data.filterAll },
    { id: 'Equipment & Hardware', label: lang === 'en' ? 'Equipment & Hardware' : 'Peralatan & Hardware' },
    { id: 'Industrial Supplies', label: lang === 'en' ? 'Industrial Supplies' : 'Perlengkapan Industri' },
    { id: 'Professional Services', label: lang === 'en' ? 'Professional Services' : 'Layanan Bisnis' },
  ];

  const filteredProducts = data.products.filter((product) => {
    const matchesFilter = activeFilter === 'all' || 
      product.category === activeFilter ||
      (activeFilter === 'Equipment & Hardware' && (product.category === 'Equipment & Hardware' || product.category === 'Peralatan & Hardware')) ||
      (activeFilter === 'Industrial Supplies' && (product.category === 'Industrial Supplies' || product.category === 'Perlengkapan Industri')) ||
      (activeFilter === 'Professional Services' && (product.category === 'Professional Services' || product.category === 'Layanan Bisnis'));
    
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const generateWhatsAppOrderLink = (product) => {
    const message = lang === 'en'
      ? `Hello Axeonsoft, I would like to inquire about: ${product.name} from your Website Catalog. Please share specifications and availability.`
      : `Halo Axeonsoft, saya berminat menanyakan spesifikasi dan ketersediaan produk: ${product.name} dari Katalog Website. Mohon informasinya.`;
    return `${officialWaLink}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <SEO
        title={t.seo.catalog.title}
        description={t.seo.catalog.description}
        keywords={t.seo.catalog.keywords}
        canonicalPath="/solutions/website-catalog"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* 1. Hero Headline & Short Product Description */}
        <div className="text-center max-w-4xl mx-auto my-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-6">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {data.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            {data.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20mendiskusikan%20pembuatan%20Katalog%20Website%20untuk%20bisnis%20saya`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-lg shadow-[#fec003]/25 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>{data.ctaPrimary}</span>
            </a>

            <a
              href="#catalog-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-[#fec003]/50 transition-all"
            >
              <span>{data.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 2. Customer Problems */}
        <div className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {data.problemsTitle}
            </h2>
            <p className="text-sm text-slate-400">
              {data.problemsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.problems.map((prob, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{prob.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. How the Solution Works */}
        <div className="my-20 pt-12 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {data.howItWorksTitle}
            </h2>
            <p className="text-sm text-slate-400">
              {data.howItWorksSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.howItWorksSteps.map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
                <span className="text-2xl font-black text-[#fec003] mb-3 block">{st.step}</span>
                <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Key Features & Business Benefits (Side by Side) */}
        <div className="my-20 pt-12 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#fec003]">Capabilities</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                {data.keyFeaturesTitle}
              </h2>
            </div>
            <div className="space-y-3">
              {data.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-[#fec003]/10 text-[#fec003] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Value Delivered</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                {data.benefitsTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {data.benefits.map((ben, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#fec003]/30 transition-colors">
                  <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#fec003]" />
                    <span>{ben.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ben.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience Highlight */}
        <div className="my-16 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 text-center max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-4">
            {data.targetAudienceTitle}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {data.targetAudiences.map((aud, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-slate-800/80 text-xs font-semibold text-slate-200 border border-slate-700">
                {aud}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Product Demonstration Simulator (Strictly No Prices!) */}
        <div id="catalog-demo" className="my-20 pt-12 border-t border-slate-800 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Demonstration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {data.demoTitle}
            </h2>
            <p className="text-sm text-slate-400">
              {data.demoSubtitle}
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            {/* Search and Category Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
              <div className="flex flex-wrap gap-2">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeFilter === tab.id
                        ? 'bg-[#fec003] text-slate-950 font-bold'
                        : 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text"
                  placeholder={lang === 'en' ? "Search products or specs..." : "Cari produk atau spesifikasi..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-[#fec003] transition-colors"
                />
              </div>
            </div>

            {/* Product Cards Grid - NO PRICES DISPLAYED */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-[#fec003]/40 p-5 flex flex-col justify-between transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-[#fec003] border border-[#fec003]/30">
                        {product.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-[#fec003] transition-colors mb-2">
                      {product.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {product.desc}
                    </p>

                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 mb-6">
                      <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        Specification:
                      </span>
                      <span className="text-xs text-slate-300 font-mono">
                        {product.specs}
                      </span>
                    </div>
                  </div>

                  <a
                    href={generateWhatsAppOrderLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#fec003]/15 hover:bg-[#fec003] text-[#fec003] hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{data.inquireBtn}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Implementation Process */}
        <div className="my-20 pt-12 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {data.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.processSteps.map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <span className="text-2xl font-black text-[#fec003] mb-3 block">{st.num}</span>
                <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. FAQ */}
        <div className="my-20 pt-12 border-t border-slate-800 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {lang === 'en' ? 'Frequently Asked Questions' : 'Pertanyaan Umum'}
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div 
                key={i}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden"
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 8. Contact CTA */}
        <div className="my-20 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border border-[#fec003]/40 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {lang === 'en' ? 'Ready to Showcase Your Products Professionally?' : 'Siap Menampilkan Produk Anda Secara Profesional?'}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            {lang === 'en'
              ? 'Discuss your product catalog requirements with the Axeonsoft team and explore a customized implementation.'
              : 'Diskusikan kebutuhan katalog produk bisnis Anda bersama tim Axeonsoft dan temukan solusi yang paling sesuai.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20dengan%20solusi%20Website%20Catalog`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{data.ctaPrimary}</span>
          </a>
        </div>

      </div>
    </>
  );
}

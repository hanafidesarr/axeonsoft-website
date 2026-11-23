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
  ChevronUp,
  ArrowRight
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
    "@type": "Service",
    "name": data.title,
    "provider": {
      "@type": "Organization",
      "name": "Axeonsoft",
      "url": "https://axeonsoft.com"
    },
    "description": data.description,
    "areaServed": "Global",
    "serviceType": "E-Commerce & Digital Catalog Development"
  };

  const breadcrumbs = [
    { label: t.nav.catalog, to: '/catalog' }
  ];

  const filterTabs = [
    { id: 'all', label: data.filterAll },
    { id: 'Software & SaaS', label: data.filterTech },
    { id: 'Hardware & Gear', label: data.filterHardware },
    { id: 'Managed Services', label: data.filterServices },
  ];

  const filteredProducts = data.products.filter((product) => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const generateWhatsAppOrderLink = (product) => {
    const message = lang === 'en'
      ? `Hello Axeonsoft, I would like to order / inquire about: ${product.name} (Price: Rp ${product.price}). Please share more details.`
      : `Halo Axeonsoft, saya berminat memesan / berkonsultasi mengenai produk: ${product.name} (Harga: Rp ${product.price}). Mohon informasi selengkapnya.`;
    return `${officialWaLink}?text=${encodeURIComponent(message)}`;
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title={t.seo.catalog.title}
        description={t.seo.catalog.description}
        keywords={t.seo.catalog.keywords}
        canonicalPath="/catalog"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
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

        {/* Core Value Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {data.features.map((feature, i) => (
            <div 
              key={i} 
              className="flex items-start gap-3 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#fec003]/40 transition-all shadow-sm"
            >
              <div className="w-7 h-7 rounded-lg bg-[#fec003]/10 text-[#fec003] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-sm text-slate-200 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Interactive Storefront Simulator */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#fec003]" />
                <span>{data.demoTitle}</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'en' 
                  ? 'Real-time showcase simulation with 1-click WhatsApp order integration' 
                  : 'Simulasi katalog interaktif langsung dengan integrasi pesanan WhatsApp 1-klik'}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text"
                placeholder={lang === 'en' ? "Search products..." : "Cari produk..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-[#fec003] transition-colors"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#fec003] text-slate-950 shadow-md shadow-[#fec003]/20'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5 flex flex-col justify-between hover:border-[#fec003]/40 transition-all hover:-translate-y-1 group overflow-hidden"
              >
                <div>
                  {product.image && (
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-slate-900 border border-slate-800/80">
                      <img 
                        src={product.image} 
                        alt={`${product.name} - ${product.category} Axeonsoft`} 
                        loading="lazy" 
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width="300"
                        height="160"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#fec003]/15 text-[#fec003]">
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#fec003] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                    {product.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-[11px] text-slate-400">Price</span>
                    <span className="text-base font-black text-white">
                      Rp {product.price}
                    </span>
                  </div>

                  <a
                    href={generateWhatsAppOrderLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 text-xs font-bold transition-all shadow-md shadow-[#fec003]/20"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
                    <span>{data.orderWa}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        {data.packages && (
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {data.packagesTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {data.packagesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-slate-900 to-amber-950/20 border-2 border-[#fec003] shadow-2xl shadow-[#fec003]/10 md:-translate-y-2'
                      : 'bg-slate-900/50 border border-slate-800'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#fec003] text-slate-950 font-bold text-[11px] tracking-wider uppercase shadow-md">
                      {lang === 'en' ? 'Most Popular' : 'Paling Populer'}
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 mb-6">{pkg.desc}</p>
                    <div className="text-3xl font-black text-[#fec003] mb-6">
                      {pkg.price}
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#fec003] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`${officialWaLink}?text=${encodeURIComponent(`Halo Axeonsoft, saya ingin berkonsultasi mengenai paket: ${pkg.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs transition-all ${
                      pkg.popular
                        ? 'bg-[#fec003] hover:bg-[#ffd033] text-slate-950 shadow-lg'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{lang === 'en' ? 'Consult This Package' : 'Konsultasikan Paket Ini'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-colors"
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
            {lang === 'en' ? 'Need a Custom E-Commerce or Storefront Architecture?' : 'Butuh Toko Online atau Katalog Kustom Khusus?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            {lang === 'en'
              ? 'Our team can customize payment gateways, warehouse syncing, inventory tracking, and multi-branch catalog systems to fit your business perfectly.'
              : 'Tim kami dapat mengintegrasikan gateway pembayaran kustom, sinkronisasi gudang, pencatatan stok, dan sistem cabang usaha Anda.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20konsultasi%20pembuatan%20katalog%20ecommerce`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>{lang === 'en' ? 'Start WhatsApp Consultation' : 'Konsultasi WhatsApp Sekarang'}</span>
          </a>
        </div>

      </div>
    </>
  );
}

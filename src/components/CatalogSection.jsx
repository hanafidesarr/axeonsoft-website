import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  MessageSquare, 
  Star, 
  Search, 
  Sparkles
} from 'lucide-react';
import { officialWaLink } from '../data/translations';

export default function CatalogSection({ t, lang }) {
  const data = t.catalogSection;
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <section id="catalog" className="py-24 relative overflow-hidden bg-[#0a0f1d]/60 border-t border-slate-800/80">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#fec003]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
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

        {/* Value Proposition Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {data.features.map((feature, i) => (
            <div 
              key={i} 
              className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-[#fec003]/40 transition-all"
            >
              <div className="w-6 h-6 rounded-lg bg-[#fec003]/10 text-[#fec003] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-sm text-slate-300 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Live Interactive Storefront Preview Card */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#fec003]" />
                <span>{data.demoTitle}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'en' 
                  ? 'Real-time showcase simulation with 1-click WhatsApp order integration' 
                  : 'Simulasi katalog interaktif langsung dengan integrasi pesanan WhatsApp 1-klik'}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text"
                placeholder={lang === 'en' ? "Search products..." : "Cari produk..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-[#fec003] transition-colors"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#fec003] text-slate-950 font-bold shadow-md shadow-[#fec003]/20'
                    : 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="flex flex-col justify-between rounded-2xl bg-slate-950/60 border border-slate-800 p-5 hover:border-[#fec003]/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#fec003]/10 text-[#fec003] border border-[#fec003]/20">
                      {product.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#fec003] font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#fec003] transition-colors mb-2">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {product.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-slate-400">
                      {lang === 'en' ? 'Starting at' : 'Mulai dari'}
                    </span>
                    <span className="text-sm font-extrabold text-[#fec003]">
                      {data.currency} {product.price}
                    </span>
                  </div>

                  <a
                    href={generateWhatsAppOrderLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>{data.orderWa}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              {lang === 'en' ? 'No products match your search.' : 'Tidak ada produk yang cocok dengan pencarian Anda.'}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

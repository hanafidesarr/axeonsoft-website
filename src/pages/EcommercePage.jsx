import React, { useState } from 'react';
import { 
  Store, 
  ShoppingBag, 
  Check, 
  MessageSquare, 
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  AlertCircle,
  Truck,
  CreditCard,
  Package
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { officialWaLink } from '../data/translations';

export default function EcommercePage({ t, lang }) {
  const data = t.ecommerceSection;
  const [openFaq, setOpenFaq] = useState(null);
  const [simulatedCart, setSimulatedCart] = useState([
    { id: 1, name: "POS Dual-Display Terminal", variant: "Model Pro-X", qty: 1 }
  ]);
  const [checkoutStep, setCheckoutStep] = useState(1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Axeonsoft Ecommerce Storefront Solution (Spree Commerce)",
    "provider": {
      "@type": "Organization",
      "name": "Axeonsoft",
      "url": "https://axeonsoft.com"
    },
    "description": data.heroSubtitle,
    "category": "Software > Ecommerce Platforms"
  };

  const breadcrumbs = [
    { label: t.nav.solutions, to: '/#solutions' },
    { label: data.badge, to: '/solutions/ecommerce' }
  ];

  return (
    <>
      <SEO
        title={t.seo.ecommerce.title}
        description={t.seo.ecommerce.description}
        keywords={t.seo.ecommerce.keywords}
        canonicalPath="/solutions/ecommerce"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* 1. Hero Headline & Short Product Description */}
        <div className="text-center max-w-4xl mx-auto my-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
            <Store className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {data.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {data.heroSubtitle}
          </p>

          {/* Strategic Direction Banner */}
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-3 mb-10 text-left">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {data.strategicNote}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20mendiskusikan%20solusi%20Toko%20Online%20Ecommerce%20untuk%20bisnis%20saya`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-lg shadow-[#fec003]/25 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>{data.ctaPrimary}</span>
            </a>

            <a
              href="#ecommerce-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 transition-all"
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
                <span className="text-2xl font-black text-emerald-400 mb-3 block">{st.step}</span>
                <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Key Features & Business Benefits */}
        <div className="my-20 pt-12 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Platform Features</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                {data.keyFeaturesTitle}
              </h2>
            </div>
            <div className="space-y-3">
              {data.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#fec003]">Business Benefits</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                {data.benefitsTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {data.benefits.map((ben, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                  <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{ben.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ben.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience */}
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
        <div id="ecommerce-demo" className="my-20 pt-12 border-t border-slate-800 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {data.demoTitle}
            </h2>
            <p className="text-sm text-slate-400">
              {data.demoSubtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              <div className="md:col-span-7 space-y-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Package className="w-4 h-4 text-emerald-400" />
                  <span>Storefront Item Simulation</span>
                </h4>

                <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-emerald-500/30">
                      Spree Commerce Storefront
                    </span>
                    <span className="text-xs text-slate-400">Stock: Ready</span>
                  </div>
                  <h3 className="text-base font-bold text-white">Smart POS Terminal Dual-Display</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Integrated enterprise hardware terminal with thermal printer connectivity and multi-device peripherals.
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <span className="text-xs text-slate-300">Selected Variant:</span>
                    <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-1 rounded bg-slate-900">
                      Black Industrial 15.6"
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase flex items-center gap-2">
                  <Store className="w-4 h-4 text-emerald-400" />
                  <span>{data.demoCartTitle}</span>
                </h4>

                <div className="space-y-2 border-y border-slate-700/60 py-3">
                  {simulatedCart.map((item, idx) => (
                    <div key={idx} className="text-xs space-y-1">
                      <div className="flex items-center justify-between text-white font-semibold">
                        <span>{item.name}</span>
                        <span className="text-slate-400 font-mono">x{item.qty}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">{item.variant}</div>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Tax & Calculation:</span>
                    <span className="text-slate-300">Automated</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Rules:</span>
                    <span className="text-slate-300">Configured in Admin</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCheckoutStep(2)}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
                >
                  {data.demoCheckoutBtn}
                </button>

                {checkoutStep === 2 && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs animate-in fade-in">
                    <p className="font-semibold mb-1">Workflow Simulated:</p>
                    <p className="leading-relaxed">
                      {data.demoCheckoutNotice}
                    </p>
                  </div>
                )}
              </div>

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
                <span className="text-2xl font-black text-emerald-400 mb-3 block">{st.num}</span>
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
                  <ChevronDown className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
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
        <div className="my-20 rounded-3xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/40 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {lang === 'en' ? 'Ready to Establish Your Online Store?' : 'Siap Membuka Toko Online Bisnis Anda?'}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            {lang === 'en'
              ? 'Consult with our commerce specialists to discuss your product lines, checkout preferences, and store requirements.'
              : 'Konsultasikan rencana toko online dan kebutuhan produk bisnis Anda bersama tim spesialis Axeonsoft.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20dengan%20solusi%20Toko%20Online%20Ecommerce`}
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

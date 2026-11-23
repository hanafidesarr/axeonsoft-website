import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Send, 
  ExternalLink,
  Sparkles,
  PhoneCall,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { socialLinks, officialWaLink, officialPhoneDisplay } from '../data/translations';
import {
  InstagramIcon,
  YoutubeIcon,
  TiktokIcon,
  WhatsAppIcon
} from '../components/SocialIcons';

export default function ContactPage({ t, lang }) {
  const data = t.contact;

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('E-Commerce / Digital Catalog');
  const [formBudget, setFormBudget] = useState('Rp 5.000.000 - Rp 15.000.000');
  const [formMessage, setFormMessage] = useState('');

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Axeonsoft - Official Software House Consultation",
    "description": data.subtitle,
    "mainEntity": {
      "@type": "Organization",
      "name": "Axeonsoft",
      "telephone": "+6285174091042",
      "email": "info@axeonsoft.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jakarta",
        "addressCountry": "ID"
      }
    }
  };

  const breadcrumbs = [
    { label: t.nav.contact, to: '/contact' }
  ];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const text = lang === 'en'
      ? `Hello Axeonsoft Team!\n\nI would like to start a project inquiry:\n• Name: ${formName || 'Prospective Client'}\n• Email: ${formEmail || 'Not provided'}\n• Category: ${formService}\n• Estimated Budget: ${formBudget}\n• Details: ${formMessage || 'Looking forward to discussing further!'}`
      : `Halo Tim Axeonsoft!\n\nSaya ingin berkonsultasi mengenai proyek digital:\n• Nama: ${formName || 'Calon Klien'}\n• Email: ${formEmail || 'Tidak dicantumkan'}\n• Kategori: ${formService}\n• Estimasi Anggaran: ${formBudget}\n• Kebutuhan: ${formMessage || 'Mohon respon dan ketersediaan waktu untuk diskusi!'}`;

    const url = `${officialWaLink}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return <WhatsAppIcon className="w-5 h-5 text-[#fec003]" />;
      case 'Instagram': return <InstagramIcon className="w-5 h-5 text-[#fec003]" />;
      case 'Youtube': return <YoutubeIcon className="w-5 h-5 text-[#fec003]" />;
      case 'Video': return <TiktokIcon className="w-5 h-5 text-[#fec003]" />;
      default: return <ExternalLink className="w-5 h-5 text-[#fec003]" />;
    }
  };

  return (
    <>
      <SEO
        title={t.seo.contact.title}
        description={t.seo.contact.description}
        keywords={t.seo.contact.keywords}
        canonicalPath="/contact"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-medium">
            {data.subtitle}
          </p>
        </div>

        {/* Top Split: WhatsApp Priority Card & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Direct Contact & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-950/30 via-slate-900/95 to-slate-900 border border-[#fec003]/40 p-6 sm:p-8 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#fec003]/20 text-[#fec003] flex items-center justify-center mb-4">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                {data.waTitle}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {data.waDesc}
              </p>

              <a
                href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20konsultasi%20cepat`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-xs shadow-lg shadow-[#fec003]/25 transition-all transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{data.waButton}</span>
              </a>

              <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#fec003]" />
                  <span>Avg Response: &lt; 15 min</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online 24/7</span>
                </span>
              </div>
            </div>

            {/* Email & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <Mail className="w-5 h-5 text-[#fec003] mb-3" />
                <h3 className="text-xs text-slate-400 uppercase font-semibold mb-1">{data.emailLabel}</h3>
                <a href={`mailto:${data.emailAddress}`} className="text-sm font-bold text-white hover:text-[#fec003] transition-colors break-all">
                  {data.emailAddress}
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-5 h-5 text-[#fec003] mb-3" />
                <h3 className="text-xs text-slate-400 uppercase font-semibold mb-1">{data.locationLabel}</h3>
                <p className="text-xs font-medium text-slate-300">
                  {data.locationValue}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 pb-4 border-b border-slate-800">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#fec003]" />
                  <span>{lang === 'en' ? 'Start Your Project Inquiry' : 'Formulir Konsultasi Proyek Baru'}</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en' 
                    ? 'Fill out this form and our team will craft a tailored proposal via WhatsApp.' 
                    : 'Isi formulir ini dan tim solusi arsitek kami akan menyiapkan proposal langsung via WhatsApp.'}
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {data.formName} *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Alex Pratama"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fec003]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {data.formEmail}
                    </label>
                    <input 
                      type="email"
                      placeholder="alex@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fec003]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {data.formService}
                    </label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#fec003]"
                    >
                      <option value="Product Catalog & E-Commerce">Product Catalog & E-Commerce</option>
                      <option value="Online Booking System">Online Booking & Reservation System</option>
                      <option value="High-Converting Landing Page">High-Converting Landing Page (CRO)</option>
                      <option value="Catbox Studio Game Development">Catbox Studio Web Game / Gamification</option>
                      <option value="Custom Enterprise Web Application">Custom Enterprise Web Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {data.formBudget}
                    </label>
                    <select
                      value={formBudget}
                      onChange={(e) => setFormBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#fec003]"
                    >
                      <option value="< Rp 5.000.000">&lt; Rp 5.000.000 (Starter)</option>
                      <option value="Rp 5.000.000 - Rp 15.000.000">Rp 5.000.000 - Rp 15.000.000 (Growth)</option>
                      <option value="Rp 15.000.000 - Rp 35.000.000">Rp 15.000.000 - Rp 35.000.000 (Pro)</option>
                      <option value="> Rp 35.000.000">&gt; Rp 35.000.000 (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {data.formMessage}
                  </label>
                  <textarea 
                    rows={4}
                    placeholder={lang === 'en' ? "Tell us about your project vision, target audience, or desired launch deadline..." : "Ceritakan ide produk digital Anda, target pengguna, atau tenggat waktu peluncuran yang diinginkan..."}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fec003]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 text-xs font-bold shadow-xl shadow-[#fec003]/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{data.formSubmit}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Official Social Media Channels */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">
              {data.socialsTitle}
            </h2>
            <p className="text-xs text-slate-400">
              {data.socialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#fec003]/50 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-[#fec003]/20 flex items-center justify-center shrink-0 transition-colors">
                  {renderSocialIcon(item.icon)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white group-hover:text-[#fec003] transition-colors flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#fec003]" />
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {item.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

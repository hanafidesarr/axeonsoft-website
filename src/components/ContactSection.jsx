import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Send, 
  ExternalLink,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { socialLinks, officialWaLink, officialPhoneDisplay } from '../data/translations';
import {
  InstagramIcon,
  YoutubeIcon,
  TiktokIcon,
  WhatsAppIcon
} from './SocialIcons';

export default function ContactSection({ t, lang }) {
  const data = t.contact;

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('E-Commerce / Digital Catalog');
  const [formMessage, setFormMessage] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const text = lang === 'en'
      ? `Hello Axeonsoft Team!\n\nI would like to start a project inquiry:\n• Name: ${formName || 'Prospective Client'}\n• Email: ${formEmail || 'Not provided'}\n• Category: ${formService}\n• Details: ${formMessage || 'Looking forward to discussing further!'}`
      : `Halo Tim Axeonsoft!\n\nSaya ingin berkonsultasi mengenai proyek digital:\n• Nama: ${formName || 'Calon Klien'}\n• Email: ${formEmail || 'Tidak dicantumkan'}\n• Kategori: ${formService}\n• Kebutuhan: ${formMessage || 'Mohon respon dan ketersediaan waktu untuk diskusi!'}`;

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
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090e1b] border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#fec003]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-medium">
            {data.subtitle}
          </p>
        </div>

        {/* Top Split: WhatsApp Direct & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Direct Contact & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card with 0851-7409-1042 */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-950/30 via-slate-900/95 to-slate-900 border border-[#fec003]/40 p-6 sm:p-8 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#fec003]/20 text-[#fec003] flex items-center justify-center mb-4">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {data.waTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {data.waDesc}
              </p>

              <div>
                <a
                  href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20dengan%20layanan%20Anda`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#fec003]/15 hover:bg-[#fec003]/25 border border-[#fec003]/50 text-[#fec003] font-bold text-sm sm:text-base transition-all group shadow-md"
                >
                  <span className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 text-[#fec003]" />
                    <span>{officialPhoneDisplay}</span>
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Email & Location Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href={`mailto:${data.emailAddress}`}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#fec003]/40 transition-all block group"
              >
                <Mail className="w-5 h-5 text-[#fec003] mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-semibold text-slate-400 mb-1">{data.emailLabel}</div>
                <div className="text-sm font-bold text-white group-hover:text-[#fec003] transition-colors">{data.emailAddress}</div>
              </a>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-5 h-5 text-[#fec003] mb-2" />
                <div className="text-xs font-semibold text-slate-400 mb-1">{data.locationLabel}</div>
                <div className="text-xs font-medium text-slate-200">{data.locationValue}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#fec003]" />
                  <span>{lang === 'en' ? 'Start a Project Discussion' : 'Mulai Diskusi Kebutuhan Proyek'}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en' 
                    ? 'Fill in the details below and we will automatically format a WhatsApp message for instant chat.' 
                    : 'Isi formulir singkat ini dan pesan akan otomatis diformat ke WhatsApp agar bisa langsung didiskusikan.'}
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {data.formName}
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#fec003]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {data.formEmail}
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#fec003]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {data.formService}
                  </label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#fec003]"
                  >
                    <option value="Product Catalog & E-Commerce">Product Catalog & E-Commerce</option>
                    <option value="Online Booking & Reservation">Online Booking & Reservation</option>
                    <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                    <option value="Catbox Studio Web Games & Gamification">Catbox Studio Web Games & Gamification</option>
                    <option value="Custom Web Application & Enterprise">Custom Web Application & Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {data.formMessage}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={lang === 'en' ? "Tell us about your project goals, timeline, and features..." : "Ceritakan gambaran singkat kebutuhan proyek, estimasi waktu, dan fitur utama..."}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#fec003] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-xl shadow-[#fec003]/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{data.formSubmit}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Selected Official Channels (WhatsApp, Instagram, YouTube, TikTok only - LinkedIn, GitHub, Facebook, Twitter removed) */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              {data.socialsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {data.socialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {socialLinks.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#fec003]/50 hover:bg-slate-850 transition-all duration-200 group text-center hover:-translate-y-1 shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 group-hover:bg-[#fec003]/10 flex items-center justify-center mb-3 transition-colors">
                    {renderSocialIcon(social.icon)}
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-[#fec003] transition-colors">
                    {social.name}
                  </span>
                  <span className="text-xs text-slate-400 font-mono mt-1 truncate max-w-full">
                    {social.handle}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

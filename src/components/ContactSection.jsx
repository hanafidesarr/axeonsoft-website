import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Send, 
  ExternalLink,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { socialLinks, officialWaLink, officialPhoneDisplay, officialEmail } from '../data/translations';
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
  const [formService, setFormService] = useState(data.formServiceOptions[0]);
  const [formMessage, setFormMessage] = useState('');

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const text = lang === 'en'
      ? `Hello Axeonsoft Team!\n\nI would like to discuss a digital solution project:\n• Name: ${formName || 'Prospective Client'}\n• Email: ${formEmail || 'Not provided'}\n• Solution of Interest: ${formService}\n• Details: ${formMessage || 'Looking forward to discussing further!'}`
      : `Halo Tim Axeonsoft!\n\nSaya ingin berkonsultasi mengenai solusi digital bisnis:\n• Nama: ${formName || 'Calon Klien'}\n• Email: ${formEmail || 'Tidak dicantumkan'}\n• Kategori Solusi: ${formService}\n• Deskripsi Kebutuhan: ${formMessage || 'Mohon respon untuk mendiskusikan kebutuhan bisnis kami!'}`;

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
          
          {/* Left Column: Direct Verified Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-950/20 via-slate-900/95 to-slate-900 border border-[#fec003]/40 p-6 sm:p-8 shadow-xl">
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
                  href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20mendiskusikan%20kebutuhan%20solusi%20digital`}
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

            {/* Email & Location Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#fec003] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{data.emailLabel}</h4>
                  <a href={`mailto:${officialEmail}`} className="text-sm font-bold text-white hover:text-[#fec003] transition-colors">
                    {officialEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#fec003] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{data.locationLabel}</h4>
                  <p className="text-sm font-medium text-slate-200">
                    {data.locationValue}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                {data.formTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {data.formSubtitle}
              </p>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {data.formName} *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder={lang === 'en' ? "Your full name" : "Nama lengkap Anda"}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#fec003] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {data.formEmail}
                  </label>
                  <input 
                    type="email" 
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="email@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#fec003] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {data.formService}
                  </label>
                  <select 
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#fec003] transition-colors"
                  >
                    {data.formServiceOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {data.formMessage} *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder={lang === 'en' ? "Tell us about your business, current workflow, and what you aim to achieve..." : "Ceritakan profil bisnis, alur kerja saat ini, dan apa yang ingin Anda capai..."}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#fec003] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{data.formSubmit}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Social Channels Strip */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                {data.socialsTitle}
              </h4>
              <p className="text-xs text-slate-400">
                {data.socialsSubtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#fec003] hover:border-[#fec003]/40 transition-colors"
                >
                  {renderSocialIcon(s.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

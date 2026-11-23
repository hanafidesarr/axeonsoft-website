import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Phone, 
  Send, 
  ShieldCheck,
  Check,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { officialWaLink } from '../data/translations';

export default function BookingPage({ t, lang }) {
  const data = t.bookingSection;

  const [selectedService, setSelectedService] = useState(data.servicesList[0].name);
  const [selectedDate, setSelectedDate] = useState('2026-11-25');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    "serviceType": "Online Booking & Reservation System Development"
  };

  const breadcrumbs = [
    { label: t.nav.booking, to: '/booking' }
  ];

  const timeSlots = ['09:00 AM', '10:00 AM', '01:30 PM', '03:30 PM', '07:00 PM'];

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = lang === 'en'
      ? `Hello Axeonsoft! I would like to schedule a booking.\n\n• Service: ${selectedService}\n• Date: ${selectedDate}\n• Time: ${selectedTime}\n• Name: ${clientName || 'Valued Client'}\n• Contact: ${clientPhone || 'WhatsApp'}\n\nPlease confirm availability!`
      : `Halo Axeonsoft! Saya ingin melakukan reservasi / booking jadwal konsultasi.\n\n• Layanan: ${selectedService}\n• Tanggal: ${selectedDate}\n• Jam: ${selectedTime}\n• Nama: ${clientName || 'Klien'}\n• No Kontak: ${clientPhone || 'WhatsApp'}\n\nMohon konfirmasinya, terima kasih!`;

    const waUrl = `${officialWaLink}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <SEO
        title={t.seo.booking.title}
        description={t.seo.booking.description}
        keywords={t.seo.booking.keywords}
        canonicalPath="/booking"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <Calendar className="w-3.5 h-3.5" />
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

        {/* Main Simulator & Value Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Feature List & WhatsApp Assurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {data.features.map((feat, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5 hover:border-[#fec003]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#fec003]/10 text-[#fec003] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{feat}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-[#fec003]/30 shadow-lg">
              <div className="flex items-center gap-2 text-[#fec003] font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'en' ? 'Direct WhatsApp Confirmation' : 'Konfirmasi Langsung via WhatsApp'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? 'Eliminate no-shows. Automatically notify clients and staff via WhatsApp 0851-7409-1042 for instant booking confirmation.'
                  : 'Hilangkan risiko batal sepihak. Berikan notifikasi otomatis kepada staf dan pelanggan langsung via WhatsApp 0851-7409-1042.'}
              </p>
            </div>
          </div>

          {/* Right Column: Live Booking Simulator */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#fec003]" />
                    <span>{data.demoTitle}</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang === 'en' 
                      ? 'Experience our frictionless appointment booking flow in real-time' 
                      : 'Rasakan kemudahan alur pemesanan jadwal otomatis secara langsung'}
                  </p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live Engine
                </span>
              </div>

              <form onSubmit={handleSubmitBooking} className="space-y-5">
                {/* 1. Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    {data.serviceLabel}
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {data.servicesList.map((srv) => (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv.name)}
                        className={`p-3.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                          selectedService === srv.name
                            ? 'bg-[#fec003]/10 border-[#fec003] text-white shadow-sm'
                            : 'bg-slate-800/60 border-slate-700/70 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        <span className="font-medium">{srv.name}</span>
                        <span className="text-[11px] font-bold text-[#fec003] shrink-0 ml-2">
                          {srv.fee}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {data.dateLabel}
                    </label>
                    <input 
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#fec003]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {data.timeLabel}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            selectedTime === slot
                              ? 'bg-[#fec003] text-slate-950 font-bold'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Client Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {data.nameLabel}
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text"
                        placeholder="e.g. John Doe"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fec003]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {data.phoneLabel}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="tel"
                        placeholder="0812-xxxx-xxxx"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#fec003]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 text-sm font-bold shadow-xl shadow-[#fec003]/20 transition-all"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{data.submitBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        {data.useCases && (
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {data.useCasesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#fec003]/40 transition-all group"
                >
                  <div className="text-xs font-mono text-[#fec003] mb-2 font-bold">
                    0{idx + 1}.
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#fec003] transition-colors">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {uc.desc}
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
            {lang === 'en' ? 'Need a Custom Booking System for Your Business?' : 'Ingin Sistem Reservasi Online Khusus Bisnis Anda?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            {lang === 'en'
              ? 'We configure custom staff calendars, multi-branch scheduling, down-payment gates, and WhatsApp bot reminders tailored specifically to your operation.'
              : 'Kami menyiapkan kalender staf, cabang multi-lokasi, pembayaran DP otomatis, dan pengingat WhatsApp yang sesuai alur operasional bisnis Anda.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20pembuatan%20sistem%20booking%20reservasi`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all"
          >
            <span>{lang === 'en' ? 'Consult Your Booking System' : 'Konsultasikan Sistem Booking Anda'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </>
  );
}

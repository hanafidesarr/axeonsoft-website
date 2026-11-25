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
  ArrowRight, 
  AlertCircle,
  MessageSquare
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
    "@type": "Product",
    "name": "Axeonsoft Online Booking System",
    "provider": {
      "@type": "Organization",
      "name": "Axeonsoft",
      "url": "https://axeonsoft.com"
    },
    "description": data.heroSubtitle,
    "category": "Software > Business Scheduling Systems"
  };

  const breadcrumbs = [
    { label: t.nav.solutions, to: '/#solutions' },
    { label: data.badge, to: '/solutions/online-booking' }
  ];

  const timeSlots = ['09:00 AM', '10:00 AM', '01:30 PM', '03:30 PM', '05:00 PM'];

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = lang === 'en'
      ? `Hello Axeonsoft! I would like to schedule a booking request.\n\n• Service: ${selectedService}\n• Date: ${selectedDate}\n• Time: ${selectedTime}\n• Name: ${clientName || 'Valued Client'}\n• Contact: ${clientPhone || 'WhatsApp'}\n\nPlease review and confirm availability!`
      : `Halo Axeonsoft! Saya ingin mengajukan permohonan reservasi jadwal:\n\n• Layanan: ${selectedService}\n• Tanggal: ${selectedDate}\n• Jam: ${selectedTime}\n• Nama: ${clientName || 'Klien'}\n• No Kontak: ${clientPhone || 'WhatsApp'}\n\nMohon ditinjau untuk konfirmasi ketersediaan, terima kasih!`;

    const waUrl = `${officialWaLink}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <>
      <SEO
        title={t.seo.booking.title}
        description={t.seo.booking.description}
        keywords={t.seo.booking.keywords}
        canonicalPath="/solutions/online-booking"
        schema={schema}
        lang={lang}
      />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* 1. Hero Headline & Short Product Description */}
        <div className="text-center max-w-4xl mx-auto my-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6">
            <Calendar className="w-3.5 h-3.5" />
            <span>{data.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {data.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {data.heroSubtitle}
          </p>

          {/* Workflow Admin Approval Notice Banner */}
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-slate-900/80 border border-blue-500/30 text-blue-300 text-xs flex items-start gap-3 mb-10 text-left">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {data.workflowNotice}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20mendiskusikan%20sistem%20Online%20Booking%20untuk%20bisnis%20saya`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-lg shadow-[#fec003]/25 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>{data.ctaPrimary}</span>
            </a>

            <a
              href="#booking-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-blue-500/50 transition-all"
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
                <span className="text-2xl font-black text-blue-400 mb-3 block">{st.step}</span>
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
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">System Capabilities</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                {data.keyFeaturesTitle}
              </h2>
            </div>
            <div className="space-y-3">
              {data.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Business Advantages</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                {data.benefitsTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {data.benefits.map((ben, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 transition-colors">
                  <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
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

        {/* 5. Product Demonstration Simulator (With Admin Approval Flow) */}
        <div id="booking-demo" className="my-20 pt-12 border-t border-slate-800 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {data.demoTitle}
            </h2>
            <p className="text-sm text-slate-400">
              {data.demoSubtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 text-blue-300 text-xs flex items-center gap-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
              <span>{data.approvalNote}</span>
            </div>

            <form onSubmit={handleSubmitBooking} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  {data.serviceLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {data.servicesList.map((svc) => (
                    <button
                      type="button"
                      key={svc.id}
                      onClick={() => setSelectedService(svc.name)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedService === svc.name
                          ? 'bg-blue-500/20 border-blue-500 text-white shadow-md'
                          : 'bg-slate-800/40 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-bold text-xs">{svc.name}</div>
                      <div className="text-[11px] text-blue-400 mt-1 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        <span>{svc.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {data.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {data.timeLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.slice(0, 3).map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                          selectedTime === slot
                            ? 'bg-blue-500 text-slate-950 border-blue-500 shadow'
                            : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {data.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'en' ? "Full Name" : "Nama Lengkap"}
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {data.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-XXXX-XXXX"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-sm shadow-xl shadow-[#fec003]/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{data.submitBtn}</span>
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs">
                {data.successMsg}
              </div>
            )}
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
                <span className="text-2xl font-black text-blue-400 mb-3 block">{st.num}</span>
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
                  <ChevronDown className={`w-4 h-4 text-blue-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
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
        <div className="my-20 rounded-3xl bg-gradient-to-r from-blue-950/30 via-slate-900 to-slate-900 border border-blue-500/40 p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {lang === 'en' ? 'Ready to Automate Your Business Bookings?' : 'Siap Menata Reservasi Janji Temu Bisnis Anda?'}
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
            {lang === 'en'
              ? 'Discuss your scheduling workflow with our specialists and streamline your daily operations.'
              : 'Diskusikan alur janji temu dan reservasi bisnis Anda bersama tim Axeonsoft sekarang.'}
          </p>
          <a
            href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20tertarik%20dengan%20solusi%20Online%20Booking`}
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

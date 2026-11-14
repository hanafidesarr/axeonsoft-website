import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Phone, 
  Send, 
  ShieldCheck
} from 'lucide-react';
import { officialWaLink } from '../data/translations';

export default function BookingSection({ t, lang }) {
  const data = t.bookingSection;

  const [selectedService, setSelectedService] = useState(data.servicesList[0].name);
  const [selectedDate, setSelectedDate] = useState('2026-11-20');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-[#080c16] border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#fec003]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-semibold mb-4">
            <Calendar className="w-3.5 h-3.5" />
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

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {data.features.map((feat, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3.5 hover:border-[#fec003]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#fec003]/10 text-[#fec003] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{feat}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-[#fec003]/25">
              <div className="flex items-center gap-2 text-[#fec003] font-bold text-xs uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'en' ? 'Direct WhatsApp Confirmation' : 'Konfirmasi Langsung via WhatsApp'}</span>
              </div>
              <p className="text-xs text-slate-300">
                {lang === 'en'
                  ? 'Get real-time notification on WhatsApp 0851-7409-1042 for instant booking approval.'
                  : 'Dapatkan konfirmasi langsung melalui WhatsApp 0851-7409-1042 untuk verifikasi jadwal cepat.'}
              </p>
            </div>
          </div>

          {/* Right Column: Live Booking Simulator */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#fec003]" />
                    <span>{data.demoTitle}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang === 'en' ? 'Try booking a slot below to experience the automated flow' : 'Coba pilih jadwal di bawah untuk merasakan alur reservasi otomatis'}
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#fec003]/10 text-[#fec003] border border-[#fec003]/30">
                  Live Preview
                </span>
              </div>

              <form onSubmit={handleSubmitBooking} className="space-y-5">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    {data.serviceLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {data.servicesList.map((srv) => (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => setSelectedService(srv.name)}
                        className={`p-3 rounded-xl text-left border text-xs transition-all ${
                          selectedService === srv.name
                            ? 'bg-[#fec003]/15 border-[#fec003] text-white shadow-md'
                            : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        <div className="font-bold mb-1 truncate">{srv.name}</div>
                        <div className="text-[11px] font-semibold text-[#fec003]">{srv.fee}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time Select */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {data.dateLabel}
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#fec003]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {data.timeLabel}
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {timeSlots.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                            selectedTime === time
                              ? 'bg-[#fec003] text-slate-950 font-bold'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Client Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {data.nameLabel}
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#fec003]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {data.phoneLabel}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="0851-xxxx-xxxx"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-[#fec003]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-xl shadow-[#fec003]/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{data.submitBtn}</span>
                  </button>
                </div>

                {isSubmitted && (
                  <p className="text-center text-xs text-[#fec003] font-medium animate-pulse">
                    ✓ {data.successMsg}
                  </p>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

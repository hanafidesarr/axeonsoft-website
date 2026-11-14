import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { officialWaLink, officialPhoneDisplay } from '../data/translations';

export default function FloatingWhatsApp({ lang }) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = lang === 'en'
    ? "Hi Axeonsoft! I would like to consult about website development & digital solutions."
    : "Halo Axeonsoft! Saya ingin berkonsultasi mengenai pembuatan website & solusi digital.";

  const waUrl = `${officialWaLink}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip Popup */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-slate-900 border border-[#fec003]/40 p-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fec003] animate-pulse" />
              <span className="text-xs font-bold text-white">Axeonsoft Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded-md"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-300 mb-2 leading-relaxed">
            {lang === 'en'
              ? "Hello! Need a quick estimate or consultation for your project? Chat directly with our engineering team."
              : "Halo! Butuh estimasi harga atau konsultasi cepat untuk proyek Anda? Langsung chat tim kami via WhatsApp."}
          </p>
          <p className="text-[11px] font-mono font-bold text-[#fec003] mb-3">
            WA: {officialPhoneDisplay}
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 text-xs font-bold shadow-md transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>{lang === 'en' ? "Open WhatsApp Chat" : "Mulai Chat WhatsApp"}</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button with #fec003 styling */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#fec003] hover:bg-[#ffd033] text-slate-950 flex items-center justify-center shadow-xl shadow-[#fec003]/30 hover:shadow-[#fec003]/50 transition-all transform hover:scale-110 active:scale-95"
          aria-label="Contact WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fec003] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#fec003] border-2 border-[#080c16]"></span>
          </span>
        </button>
      </div>
    </div>
  );
}

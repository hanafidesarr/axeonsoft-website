import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { officialWaLink, officialPhoneDisplay } from '../data/translations';

export default function FloatingWhatsApp({ lang }) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = lang === 'en'
    ? "Hi Axeonsoft! I would like to discuss a digital solution project for my business."
    : "Halo Axeonsoft! Saya ingin berkonsultasi mengenai solusi digital untuk bisnis saya.";

  const waUrl = `${officialWaLink}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip Popup */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-slate-900 border border-[#fec003]/40 p-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fec003] animate-pulse" />
              <span className="text-xs font-bold text-white">Axeonsoft Solutions</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded-md"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-300 mb-2 leading-relaxed">
            {lang === 'en'
              ? "Hello! Looking for the right digital solution for your business? Chat directly with our solutions team."
              : "Halo! Ingin mendiskusikan solusi digital yang tepat untuk bisnis Anda? Mari berkonsultasi langsung dengan tim kami."}
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
            <span>{lang === 'en' ? "Discuss via WhatsApp" : "Chat via WhatsApp"}</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat"
        className="w-14 h-14 rounded-full bg-[#fec003] hover:bg-[#ffd033] text-slate-950 flex items-center justify-center shadow-lg shadow-[#fec003]/30 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#fec003]/40 group"
      >
        <MessageSquare className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
}

import React from 'react';

export default function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-2 border-slate-800 border-t-[#fec003] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-[#fec003] animate-pulse" />
        </div>
      </div>
      <p className="mt-4 text-xs font-mono uppercase tracking-widest text-slate-400">
        Loading Axeonsoft...
      </p>
    </div>
  );
}

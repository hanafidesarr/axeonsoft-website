import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, Calendar, Store, Share2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage({ t, lang }) {
  return (
    <>
      <SEO
        title={t.seo.notFound.title}
        description={t.seo.notFound.description}
        keywords={t.seo.notFound.keywords}
        canonicalPath="/404"
        lang={lang}
      />

      <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-3xl bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] flex items-center justify-center text-3xl font-black mb-6">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          {lang === 'en' ? 'Page Not Found' : 'Halaman Tidak Ditemukan'}
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
          {lang === 'en'
            ? 'The page you are looking for might have been moved, removed, or is temporarily unavailable.'
            : 'Halaman yang Anda tuju mungkin sudah dipindahkan, dihapus, atau tidak tersedia untuk saat ini.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fec003] hover:bg-[#ffd033] text-slate-950 font-bold text-xs shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>{lang === 'en' ? 'Back to Home' : 'Kembali ke Beranda'}</span>
          </Link>
          <Link
            to="/solutions/website-catalog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-[#fec003]" />
            <span>{t.nav.catalog}</span>
          </Link>
          <Link
            to="/solutions/online-booking"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
          >
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>{t.nav.booking}</span>
          </Link>
        </div>
      </div>
    </>
  );
}

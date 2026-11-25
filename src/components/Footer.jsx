import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ShoppingBag, Calendar, Store, Share2 } from 'lucide-react';
import { socialLinks, officialWaLink, officialPhoneDisplay, officialEmail } from '../data/translations';
import {
  InstagramIcon,
  YoutubeIcon,
  TiktokIcon,
  WhatsAppIcon
} from './SocialIcons';

export default function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return <WhatsAppIcon className="w-4 h-4" />;
      case 'Instagram': return <InstagramIcon className="w-4 h-4" />;
      case 'Youtube': return <YoutubeIcon className="w-4 h-4" />;
      case 'Video': return <TiktokIcon className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img 
                src="/axeonsoft-round-logo.png" 
                alt="Axeonsoft Logo" 
                className="w-10 h-10 rounded-full object-contain p-0.5 bg-slate-900 border border-[#fec003]/40 shadow-md shadow-[#fec003]/20"
                width="40"
                height="40"
              />
              <div>
                <span className="text-lg font-bold text-white tracking-tight">Axeonsoft</span>
                <span className="block text-[10px] uppercase tracking-widest text-[#fec003] font-semibold">
                  {t.nav.brandSub}
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t.seo.home.description}
            </p>

            <div className="pt-2">
              <a
                href="https://catbox.axeonsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs hover:bg-[#fec003]/20 transition-all group"
              >
                <img 
                  src="/logo-catbox.png" 
                  alt="Catbox Studio" 
                  className="w-5 h-5 object-contain rounded shrink-0 group-hover:scale-110 transition-transform" 
                  width="20"
                  height="20"
                />
                <span className="font-bold">{t.footer.gamingDivision}</span>
              </a>
            </div>
          </div>

          {/* Primary Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.primarySolutions}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/solutions/website-catalog" className="hover:text-[#fec003] transition-colors flex items-center gap-2">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#fec003]" />
                  <span>{t.nav.catalog}</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions/online-booking" className="hover:text-[#fec003] transition-colors flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.nav.booking}</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions/ecommerce" className="hover:text-[#fec003] transition-colors flex items-center gap-2">
                  <Store className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.nav.ecommerce}</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions/social-media" className="hover:text-[#fec003] transition-colors flex items-center gap-2">
                  <Share2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>{t.nav.socialMedia}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.companyLinks}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-[#fec003] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#fec003] transition-colors">
                  {t.nav.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#fec003] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href={`${officialWaLink}?text=Halo%20Axeonsoft,%20saya%20ingin%20berkonsultasi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fec003] hover:underline font-semibold"
                >
                  WhatsApp ({officialPhoneDisplay})
                </a>
              </li>
            </ul>
          </div>

          {/* Official Channels */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.connectLinks}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#fec003] hover:border-[#fec003]/40 transition-colors"
                >
                  {renderSocialIcon(s.icon)}
                </a>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
              Jakarta, Indonesia. Serving forward-thinking businesses.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs text-center sm:text-left">
            {t.footer.copyright} {t.footer.disclaimer}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#fec003]/40 text-slate-300 hover:text-[#fec003] transition-colors"
            aria-label="Back to Top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

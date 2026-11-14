import React from 'react';
import { 
  Gamepad2, 
  ExternalLink, 
  Play, 
  Sparkles, 
  Zap, 
  Trophy, 
  Flame, 
  Monitor, 
  Smartphone
} from 'lucide-react';

export default function GamesSection({ t, lang }) {
  const data = t.gamesSection;

  return (
    <section id="games" className="py-24 relative overflow-hidden bg-[#070b14] border-t border-slate-800/80">
      {/* Dynamic Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#fec003]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Catbox Logo */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fec003]/10 border border-[#fec003]/30 text-[#fec003] text-xs font-bold mb-6">
            <Gamepad2 className="w-4 h-4 animate-bounce" />
            <span>{data.badge}</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            {/* Official Catbox Logo (logo-catbox.png) */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#fec003] to-amber-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src="/logo-catbox.png" 
                alt="Catbox Studio Logo" 
                className="relative h-20 sm:h-24 object-contain rounded-xl p-1 bg-slate-900/80 border border-[#fec003]/30 shadow-2xl"
              />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
              {data.title}
            </h2>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed font-medium mb-3">
            {data.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Featured Catbox Studio Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-amber-950/30 border border-[#fec003]/40 p-8 sm:p-12 mb-16 shadow-2xl overflow-hidden group">
          {/* Accent corner glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#fec003]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fec003]/20 text-[#fec003] text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Official Gaming Division' : 'Divisi Game Resmi Axeonsoft'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === 'en'
                  ? 'Play instantly on your browser — zero install required!'
                  : 'Mainkan langsung di browser Anda — tanpa instal aplikasi!'}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {lang === 'en'
                  ? 'Catbox Studio builds custom HTML5 games, interactive web simulations, and brand gamification campaigns. Explore the full catalog on our dedicated gaming hub.'
                  : 'Catbox Studio mengembangkan aneka game HTML5 ringan, simulasi interaktif, serta modul gamifikasi untuk promosi brand. Kunjungi hub game resmi kami sekarang.'}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-[#fec003]" /> Mobile & Tablet Ready</span>
                <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4 text-emerald-400" /> Desktop 60+ FPS</span>
                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-400" /> Instant Loading</span>
              </div>
            </div>

            {/* Direct Redirect Action Button to https://catbox.axeonsoft.com/ */}
            <div className="shrink-0 w-full sm:w-auto text-center flex flex-col items-center">
              <a
                href={data.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-slate-950 bg-[#fec003] hover:bg-[#ffd033] shadow-xl shadow-[#fec003]/30 hover:shadow-[#fec003]/50 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <Play className="w-5 h-5 fill-current text-slate-950" />
                <span>{data.visitStudioBtn}</span>
                <ExternalLink className="w-4 h-4 text-slate-950 opacity-80" />
              </a>
              <p className="text-[11px] font-mono text-slate-400 mt-2.5">
                🔗 {data.directUrl}
              </p>
            </div>
          </div>
        </div>

        {/* Game Previews Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#fec003]" />
              <span>{data.featuredBadge}</span>
            </h3>
            <span className="text-xs text-slate-400">
              {lang === 'en' ? 'Click any game to open Catbox Studio' : 'Klik game untuk membuka Catbox Studio'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.gamesList.map((game, i) => (
              <a
                key={i}
                href={data.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-[#fec003]/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#fec003]/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-800 text-[#fec003] border border-[#fec003]/30">
                      {game.tag}
                    </span>
                    <span className="text-xs font-bold text-[#fec003]">
                      {game.rating}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#fec003] transition-colors mb-1">
                    {game.title}
                  </h4>
                  <div className="text-xs text-slate-400 font-medium mb-3">
                    {game.genre}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {game.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-[#fec003] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{lang === 'en' ? 'Play in Browser' : 'Mainkan di Browser'}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

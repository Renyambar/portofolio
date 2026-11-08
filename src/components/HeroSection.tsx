import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between pt-4 sm:pt-6 pb-6 sm:pb-8 border-b border-surface-border overflow-hidden bg-bg-primary">
      {/* 1) Top Metadata Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="pt-2 pb-4 border-b border-surface-border/40 flex items-center justify-between text-xs font-mono uppercase tracking-wider">
          {/* Top Left: Role & Sub-role */}
          <div className="flex flex-col text-left">
            <span className="text-accent-primary font-bold">
              {PERSONAL_INFO.metaTopLeft}
            </span>
            {'metaTopSub' in PERSONAL_INFO && Boolean((PERSONAL_INFO as any).metaTopSub) && (
              <span className="text-fg-muted text-[11px]">
                {(PERSONAL_INFO as any).metaTopSub}
              </span>
            )}
          </div>

          {/* Top Right: Status Badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
            </span>
            <span className="font-semibold text-fg-primary text-[11px] sm:text-xs">
              {PERSONAL_INFO.metaTopCenter[language]}
            </span>
          </div>
        </div>
      </div>

      {/* 2) Centerpiece Canvas: Left/Center/Right Layout */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-6 sm:py-10 relative z-10">
        {/* 3-Column Content Grid: Left Hero Info | Center Cutout Photo | Right Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
          {/* KOLOM KIRI: Sapaan Handwriting, Nama, Sub-role, Narasi, Tombol Karya */}
          <div className="lg:col-span-4 space-y-4 text-left order-2 lg:order-1">
            {/* Handwriting Sapaan 'Hello, I'm' */}
            <span className="font-cursive text-3xl sm:text-4xl text-white font-bold block -rotate-3 origin-left tracking-wide">
              {PERSONAL_INFO.greeting}
            </span>

            {/* Nama Utama: Tall, Bold, Upright Condensed (Bukan Pipih!) */}
            <h1 className="font-condensed font-bold text-4xl sm:text-5xl md:text-6xl text-fg-primary uppercase leading-[0.92] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>

            {/* Sub-role Red Accent */}
            <div className="font-sans font-extrabold text-xs sm:text-sm tracking-wider uppercase text-accent-primary">
              {PERSONAL_INFO.subRole}
            </div>

            {/* Narasi Pendek */}
            <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed font-normal max-w-sm">
              {PERSONAL_INFO.heroNarrative[language]}
            </p>

            {/* Tombol Merah: Lihat karya saya ↓ */}
            <div className="pt-2">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-hover text-white text-xs font-mono font-bold transition-all shadow-md group"
              >
                <span>{language === 'id' ? 'Lihat karya saya' : 'Explore works'}</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* KOLOM TENGAH: Foto Potret Cutout Tengah dengan Red Studio Glow di Belakangnya */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2">
            {/* Studio Lighting Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full pointer-events-none z-0"
              style={{
                background: 'radial-gradient(circle, var(--studio-glow) 0%, rgba(10, 9, 9, 0) 70%)',
              }}
            />

            {/* Foto Cutout */}
            <div className="relative z-10 w-52 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] flex items-end justify-center">
              <img
                src={PERSONAL_INFO.profileImage}
                alt="Reny Ambarwati Portrait"
                className="w-full h-full object-contain object-bottom filter contrast-[1.05] drop-shadow-2xl pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex flex-col items-center justify-center border border-surface-border rounded-2xl bg-bg-card p-6 text-center';
                    fallback.innerHTML = `
                      <div class="w-16 h-16 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-condensed font-bold text-2xl mb-2">RA</div>
                      <span class="font-sans font-bold text-sm text-fg-primary">RENY AMBARWATI</span>
                      <span class="font-mono text-[10px] text-fg-muted uppercase mt-1">Full-Stack & Computer Vision</span>
                    `;
                    target.parentElement.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>

          {/* KOLOM KANAN: Tagline Emblem & 3 Stacked Stats (Persis Seperti Screenshot Renando) */}
          <div className="lg:col-span-4 space-y-6 text-left lg:text-left order-3">
            {/* Tagline dengan Icon Bintang */}
            <div className="flex items-center gap-2.5 text-xs text-fg-secondary font-sans">
              <Sparkles className="w-4 h-4 text-accent-primary shrink-0" />
              <span className="italic font-normal">
                {language === 'id' ? 'Every system. Engineered to work.' : 'Every system. Engineered to work.'}
              </span>
            </div>

            {/* 3 Stacked Stats */}
            <div className="space-y-4 pt-1">
              {/* Stat 1: IPK */}
              <div className="border-b border-surface-border/50 pb-3">
                <span className="font-condensed font-bold text-3xl sm:text-4xl text-accent-primary tracking-tight block leading-none">
                  {PERSONAL_INFO.heroStats[0].value}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-fg-secondary block mt-1">
                  {PERSONAL_INFO.heroStats[0].label[language]}
                </span>
              </div>

              {/* Stat 2: Proyek */}
              <div className="border-b border-surface-border/50 pb-3">
                <span className="font-condensed font-bold text-3xl sm:text-4xl text-accent-primary tracking-tight block leading-none">
                  {PERSONAL_INFO.heroStats[1].value}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-fg-secondary block mt-1">
                  {PERSONAL_INFO.heroStats[1].label[language]}
                </span>
              </div>

              {/* Button ke GitHub Saya */}
              <div className="pt-1">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-surface-border bg-bg-card hover:border-accent-primary/60 hover:bg-bg-secondary text-fg-primary text-xs font-mono font-bold transition-all group shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-accent-primary group-hover:scale-110 transition-transform" />
                  <span>{language === 'id' ? 'Buka GitHub Saya' : 'Visit My GitHub'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3) Bottom Hero Bar: Location di Kiri & Download CV di Kanan (Tanpa teks pojok yang bikin ramai) */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="pt-3 border-t border-surface-border/40 flex items-center justify-between text-xs font-mono">
          {/* Pojok Kiri Bawah: Lokasi */}
          <div className="flex items-center gap-1.5 text-fg-secondary uppercase tracking-wider text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-accent-primary shrink-0" />
            <span>MALANG, INDONESIA</span>
          </div>

          {/* Pojok Kanan Bawah: Link Google Drive CV */}
          <a
            href={PERSONAL_INFO.cvGdriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-fg-secondary hover:text-accent-primary transition-colors font-medium uppercase tracking-wider text-[11px] group"
          >
            <span>{language === 'id' ? 'LIHAT CV' : 'VIEW CV'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

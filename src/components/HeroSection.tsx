import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-6 pb-12 sm:pb-16 border-b border-surface-border overflow-hidden">
      {/* 1) Top Metadata Bar (3 kolom kecil di atas) */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="pt-2 pb-6 border-b border-surface-border/60 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-xs font-mono uppercase tracking-widest text-fg-secondary">
          {/* Kiri */}
          <div className="text-left font-medium">
            {PERSONAL_INFO.metaTopLeft}
          </div>

          {/* Tengah: Badge hijau menyala */}
          <div className="flex items-center sm:justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-fg-primary tracking-wider">
              {PERSONAL_INFO.metaTopCenter[language]}
            </span>
          </div>

          {/* Kanan */}
          <div className="sm:text-right font-medium">
            {PERSONAL_INFO.metaTopRight}
          </div>
        </div>
      </div>

      {/* 2) Centerpiece: Judul Raksasa & Centered Cutout Photo dengan Studio Maroon Glow */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-8 relative">
        {/* Sapaan & Teks Raksasa di Balik Foto */}
        <div className="text-center relative z-10 space-y-1 mb-2 sm:mb-4">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-accent-primary font-bold">
            {PERSONAL_INFO.greeting}
          </p>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-fg-primary uppercase leading-none select-none">
            {PERSONAL_INFO.name}
          </h1>
        </div>

        {/* Center Container: Studio Glow & Centered Cutout Portrait */}
        <div className="relative flex justify-center items-center py-2">
          {/* Studio Lighting Glow di belakang foto Hero */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] md:w-[600px] h-[320px] sm:h-[480px] md:h-[600px] rounded-full pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle, var(--studio-glow) 0%, rgba(10, 9, 9, 0) 70%)',
            }}
          />

          {/* Cutout Portrait Image */}
          <div className="relative z-10 w-64 sm:w-80 md:w-96 aspect-[3/4] flex items-end justify-center">
            <img
              src={PERSONAL_INFO.profileImage}
              alt="Reny Ambarwati Studio Portrait"
              className="w-full h-full object-contain object-bottom filter contrast-[1.05] drop-shadow-2xl pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]"
              onError={(e) => {
                // Fallback elegant silhouette if image fails
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  const fallback = document.createElement('div');
                  fallback.className = 'w-full h-full flex flex-col items-center justify-center border border-surface-border rounded-2xl bg-bg-card p-6 text-center';
                  fallback.innerHTML = `
                    <div class="w-20 h-20 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-display font-black text-2xl mb-2">RA</div>
                    <span class="font-display font-bold text-sm text-fg-primary">RENY AMBARWATI</span>
                    <span class="font-mono text-[10px] text-fg-muted uppercase">Full-Stack & Computer Vision</span>
                  `;
                  target.parentElement.appendChild(fallback);
                }
              }}
            />
          </div>
        </div>

        {/* 3) Kiri & Kanan Bawah Foto (Asymmetrical Editorial Info seperti Renando) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-4 sm:mt-6 pt-6 border-t border-surface-border/40">
          {/* Sisi Kiri: Sub-role & Narasi Pendek */}
          <div className="md:col-span-6 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary block">
              // {PERSONAL_INFO.subRole}
            </span>
            <p className="text-sm sm:text-base text-fg-secondary leading-relaxed max-w-lg font-normal">
              {PERSONAL_INFO.heroNarrative[language]}
            </p>
          </div>

          {/* Sisi Kanan: 3 Statistik Tegas seperti Renando */}
          <div className="md:col-span-6 grid grid-cols-3 gap-3 sm:gap-6 border-t md:border-t-0 border-surface-border/40 pt-4 md:pt-0">
            {PERSONAL_INFO.heroStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-fg-primary tracking-tight block">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-fg-muted block leading-tight">
                  {stat.label[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4) Bottom Hero Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-6">
        <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Tombol Utama: Google Drive CV */}
            <a
              href={PERSONAL_INFO.cvGdriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-hover text-white font-semibold transition-all shadow-sm"
            >
              <span>{language === 'id' ? 'LIHAT CV (GOOGLE DRIVE)' : 'VIEW CV (GOOGLE DRIVE)'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Tombol Kedua: Scroll to Works */}
            <a
              href="#works"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-surface-border bg-bg-card hover:bg-bg-secondary text-fg-primary font-semibold transition-colors"
            >
              <span>{language === 'id' ? 'LIHAT KARYA SAYA' : 'EXPLORE WORKS'}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Teks kecil di pojok */}
          <div className="text-fg-muted uppercase tracking-widest text-[11px]">
            SCROLL TO DISCOVER — SELECTED WORK / 2024–2026
          </div>
        </div>
      </div>
    </section>
  );
};

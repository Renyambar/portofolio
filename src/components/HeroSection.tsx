import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* 1) Nama Besar & Tegas (dengan panggilan minipaoo secara halus) */}
        <div className="space-y-1 mb-2">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-fg-primary leading-[1.1]">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-mono text-xs sm:text-sm tracking-widest text-fg-muted uppercase">
            ({PERSONAL_INFO.nickname})
          </p>
        </div>

        {/* 2) Peran: Full-Stack Web Developer & Computer Vision Engineer */}
        <p className="font-display text-base sm:text-xl font-medium text-fg-secondary mb-10 max-w-xl">
          {PERSONAL_INFO.role[language]}
        </p>

        {/* 3) FOTO PROFIL DI TENGAH (Centered Cutout Portrait dengan background arch lembut) */}
        <div className="relative mb-8 flex justify-center">
          {/* Organic / Architectural Arch backdrop (subtle warm stone/maroon, no neon glow) */}
          <div className="relative w-56 sm:w-64 md:w-72 aspect-[4/5] flex items-end justify-center">
            {/* Arch Background container */}
            <div className="absolute inset-0 rounded-t-[140px] rounded-b-2xl bg-bg-arch border border-surface-border" />

            {/* Cutout Portrait Image */}
            <img
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              className="relative z-10 w-full h-full object-contain object-bottom select-none pointer-events-none drop-shadow-sm"
              loading="eager"
            />
          </div>
        </div>

        {/* 4) Paragraf Pengantar Singkat (maks 2-3 kalimat, rata tengah, max-w-[620px]) */}
        <p className="text-base sm:text-lg text-fg-secondary leading-relaxed max-w-[620px] mb-8 font-normal">
          {PERSONAL_INFO.introParagraph[language]}
        </p>

        {/* 5) Dua Tombol Aksi (CTA) di tengah */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* Tombol Utama: Solid Maroon (Google Drive CV) */}
          <a
            href={PERSONAL_INFO.cvGdriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-lg bg-accent-primary text-white font-medium text-sm hover:bg-accent-hover transition-colors shadow-sm"
          >
            <span>{language === 'id' ? 'Lihat CV (Google Drive)' : 'View CV (Google Drive)'}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>

          {/* Tombol Sekunder: Outline tipis */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-surface-border bg-bg-card text-fg-primary font-medium text-sm hover:bg-bg-secondary hover:border-fg-secondary transition-colors"
          >
            <span>{language === 'id' ? 'Hubungi Saya' : 'Contact Me'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

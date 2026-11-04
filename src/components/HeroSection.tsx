import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Terminal, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HERO_DATA, QUICK_STATS, PERSONAL_INFO } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

export const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial studio maroon lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Editorial Typography (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-bg-secondary/70 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-fg-primary uppercase">
                {t(HERO_DATA.statusPill)}
              </span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <div className="font-mono text-xs sm:text-sm tracking-widest uppercase text-accent-primary font-semibold flex items-center gap-2">
                <span>{t(HERO_DATA.greeting)}</span>
                <span className="inline-block w-8 h-[1px] bg-accent-primary" />
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-fg-primary">
                RENY <span className="text-accent-primary">AMBARWATI.</span>
              </h1>

              <div className="pt-1">
                <span className="font-mono text-xs sm:text-sm md:text-base font-bold tracking-widest text-fg-secondary uppercase block">
                  {HERO_DATA.subHeadline}
                </span>
              </div>
            </div>

            {/* Tagline Editorial */}
            <blockquote className="border-l-2 border-accent-primary pl-4 py-1 text-lg sm:text-xl font-medium text-fg-primary italic leading-snug">
              &ldquo;{t(HERO_DATA.tagline)}&rdquo;
            </blockquote>

            {/* Comprehensive Description */}
            <p className="text-sm sm:text-base text-fg-secondary leading-relaxed max-w-2xl">
              {t(HERO_DATA.description)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-primary text-white font-semibold text-sm hover:bg-accent-secondary shadow-lg shadow-maroon-700/20 transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span>{t(HERO_DATA.ctaButtons.primary)}</span>
                <ArrowDownRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-surface-border bg-bg-secondary text-fg-primary font-semibold text-sm hover:border-accent-primary hover:bg-surface-cardHover transition-all hover:scale-105 active:scale-95 text-center"
              >
                <Sparkles className="w-4 h-4 text-accent-primary shrink-0" />
                <span>{t(HERO_DATA.ctaButtons.secondary)}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Contrast Studio Portrait Framing (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center px-2 sm:px-0"
          >
            {/* Ambient maroon glow behind the photo */}
            <div className="absolute inset-0 bg-accent-primary/25 rounded-3xl blur-2xl transform scale-95" />

            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-cream-300/40 via-surface-border to-accent-primary/30 border border-surface-border/80 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-obsidian-950 border border-surface-border/60">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt="Reny Ambarwati - Studio Portrait"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const placeholder = document.createElement('div');
                      placeholder.className =
                        'w-full h-full flex flex-col items-center justify-center p-6 text-center bg-obsidian-900 text-cream-50';
                      placeholder.innerHTML = `
                        <div class="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center text-2xl font-extrabold mb-3">RA</div>
                        <h3 class="font-display font-bold text-base">RENY AMBARWATI</h3>
                        <p class="font-mono text-xs text-cream-300 mt-1">Full-Stack & Computer Vision</p>
                      `;
                      target.parentElement.appendChild(placeholder);
                    }
                  }}
                />

                {/* Subtle vignette & contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1 (Top Right): Full-Stack & Edge AI */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-bg-primary/95 backdrop-blur-md border border-surface-border shadow-xl flex items-center gap-1.5 sm:gap-2 z-20"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                  <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-primary" />
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-bold text-fg-primary tracking-wide whitespace-nowrap">
                  {t(HERO_DATA.floatingBadges.badge2)}
                </span>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left): KRAI 2026 National Finalist */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -left-2 sm:-left-4 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-bg-primary/95 backdrop-blur-md border border-surface-border shadow-xl flex items-center gap-2 sm:gap-2.5 max-w-[220px] xs:max-w-[240px] sm:max-w-[260px] z-20"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-primary flex items-center justify-center text-white shrink-0 shadow-md">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[9px] sm:text-[10px] text-accent-primary font-bold uppercase tracking-wider">
                    ABUROBONEMA
                  </span>
                  <span className="font-sans text-[11px] sm:text-xs font-bold text-fg-primary leading-tight">
                    {t(HERO_DATA.floatingBadges.badge1)}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Bar (Gaya Renando) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-surface-border grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
        >
          {QUICK_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-5 rounded-2xl bg-bg-secondary/40 border border-surface-border/50 hover:border-accent-primary/40 transition-all hover:-translate-y-0.5 group"
            >
              <div className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-accent-primary tracking-tight group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </div>
              <div className="font-sans text-xs sm:text-sm font-bold text-fg-primary mt-1">
                {stat.label[language]}
              </div>
              <div className="font-mono text-[10px] sm:text-xs text-fg-secondary mt-0.5 truncate">
                {stat.sublabel[language]}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Core Tech Stack Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-surface-border/60 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-fg-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
            <span className="font-bold text-fg-primary uppercase tracking-wider">
              {language === 'id' ? 'Tumpukan Teknologi Inti:' : 'Primary Tech Stack:'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {[
              { name: 'Python', label: 'Python' },
              { name: 'YOLOv8', label: 'YOLOv8' },
              { name: 'ROS 2 Humble', label: 'ROS 2' },
              { name: 'TensorRT', label: 'TensorRT' },
              { name: 'Laravel', label: 'Laravel' },
              { name: 'PostgreSQL', label: 'PostgreSQL' },
              { name: 'Tailwind CSS', label: 'Tailwind' },
              { name: 'Docker', label: 'Docker' },
              { name: 'Linux (Ubuntu)', label: 'Ubuntu' },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg-secondary/70 border border-surface-border text-fg-primary hover:border-accent-primary/50 hover:bg-surface-cardHover transition-all text-xs font-mono font-medium shadow-sm"
                title={tech.name}
              >
                <TechLogo name={tech.name} size={15} colored={true} />
                <span className="text-[11px] font-semibold">{tech.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


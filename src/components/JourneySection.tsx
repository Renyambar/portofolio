import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCES } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="journey" className="py-14 sm:py-20 md:py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Header Seksi */}
        <div className="space-y-2 max-w-3xl pb-5 border-b border-surface-border">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary block">
            03 / THE JOURNEY
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-fg-primary tracking-tight uppercase leading-snug">
            {language === 'id' ? 'PENGALAMAN & RISET.' : 'EXPERIENCE & RESEARCH.'}
          </h2>
        </div>

        {/* Timeline Pengalaman */}
        <div className="space-y-5 sm:space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id || idx}
              className="p-5 sm:p-7 md:p-8 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/50 transition-all duration-300 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
                {/* Kolom Kiri: Periode & Badge */}
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="font-mono text-xs sm:text-sm font-bold text-accent-primary uppercase tracking-wider">
                    {exp.period[language]}
                  </div>
                  {exp.badge && (
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-wide border border-surface-border bg-bg-secondary text-fg-secondary">
                      {exp.badge[language]}
                    </span>
                  )}
                </div>

                {/* Kolom Kanan: Role, Instansi, Poin Detail, Link */}
                <div className="lg:col-span-8 space-y-3.5">
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-fg-primary tracking-tight">
                      {exp.role[language]}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-fg-secondary mt-0.5">
                      {exp.institution[language]}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2 border-t border-surface-border/50 text-xs sm:text-sm text-fg-secondary leading-relaxed">
                    {exp.points[language].map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-accent-primary font-bold mt-0.5 shrink-0 font-mono text-xs">
                          —
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Repositori jika ada */}
                  {exp.repoUrl && (
                    <div className="pt-1.5">
                      <a
                        href={exp.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-primary hover:underline underline-offset-4"
                      >
                        <span>
                          {language === 'id' ? 'Lihat Repositori Riset GitHub' : 'View Research GitHub Repo'}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

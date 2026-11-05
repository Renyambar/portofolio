import React from 'react';
import { ArrowUpRight, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCES, MILESTONES } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="journey" className="py-20 md:py-28 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header Seksi */}
        <div className="space-y-4 max-w-4xl pb-6 border-b border-surface-border">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary block">
            03 / THE JOURNEY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-fg-primary tracking-tight uppercase leading-[1.08]">
            {language === 'id' ? 'PENGALAMAN & RISET.' : 'EXPERIENCE & RESEARCH.'}
          </h2>
        </div>

        {/* Timeline Pengalaman (Gaya Renando) */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id || idx}
              className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/50 transition-all duration-300 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Kolom Kiri: Periode & Badge */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="font-mono text-xs sm:text-sm font-bold text-accent-primary uppercase tracking-wider">
                    {exp.period[language]}
                  </div>
                  {exp.badge && (
                    <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wide border border-surface-border bg-bg-secondary text-fg-secondary">
                      {exp.badge[language]}
                    </span>
                  )}
                </div>

                {/* Kolom Kanan: Role, Instansi, Poin Detail, Link */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-fg-primary tracking-tight">
                      {exp.role[language]}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-fg-secondary mt-1">
                      {exp.institution[language]}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-2 border-t border-surface-border/50 text-sm text-fg-secondary leading-relaxed">
                    {exp.points[language].map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-accent-primary font-bold mt-1 shrink-0 font-mono text-xs">
                          —
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Repositori jika ada */}
                  {exp.repoUrl && (
                    <div className="pt-2">
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

        {/* Sub-seksi: A FEW MILESTONES (4 Kotak Bernomor 01–04) */}
        <div className="space-y-6 pt-4 border-t border-surface-border">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>// A FEW MILESTONES</span>
            </span>
            <span className="font-mono text-xs text-fg-muted">KEY HIGHLIGHTS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MILESTONES.map((item) => (
              <div
                key={item.index}
                className="p-6 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-fg-muted/40 group-hover:text-accent-primary transition-colors leading-none">
                    {item.index}
                  </span>
                  <span className="font-mono text-[11px] text-fg-muted uppercase px-2 py-0.5 rounded border border-surface-border bg-bg-secondary">
                    {item.year}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-base sm:text-lg text-fg-primary tracking-tight leading-snug">
                    {item.title[language]}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

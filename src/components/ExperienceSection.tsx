import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-fg-primary mb-8">
          {language === 'id' ? 'Pengalaman & Riset' : 'Experience & Research'}
        </h2>

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-xl bg-bg-card border border-surface-cardBorder shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-display text-lg sm:text-xl font-bold text-fg-primary">
                  {exp.role[language]}
                </h3>
                <span className="font-mono text-xs font-medium text-fg-muted shrink-0">
                  {exp.period[language]}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="font-medium text-fg-secondary">
                  {exp.institution[language]}
                </span>
                {exp.badge && (
                  <span className="px-2 py-0.5 rounded border border-surface-border bg-bg-secondary text-fg-secondary">
                    {exp.badge[language]}
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-fg-secondary leading-relaxed font-normal">
                {exp.description[language]}
              </p>

              {exp.repoUrl && (
                <div className="pt-2">
                  <a
                    href={exp.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-primary hover:underline underline-offset-4"
                  >
                    <span>{language === 'id' ? 'Lihat Repositori GitHub' : 'View GitHub Repository'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-fg-primary mb-8">
          {language === 'id' ? 'Keahlian Teknis & Tools' : 'Technical Skills & Tools'}
        </h2>

        {/* Bento Grid Editorial 6 Categories without Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-xl bg-bg-card border border-surface-cardBorder shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <h3 className="font-display text-base sm:text-lg font-bold text-fg-primary">
                  {category.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed font-normal">
                  {category.focus[language]}
                </p>
              </div>

              {/* Items with authentic logos */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-surface-border bg-bg-secondary text-xs font-mono text-fg-primary font-medium"
                  >
                    <TechLogo name={skill} size={14} colored={true} />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


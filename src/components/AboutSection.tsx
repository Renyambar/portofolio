import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_TEXT } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 border-t border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-fg-primary mb-6">
          {language === 'id' ? 'Tentang Saya' : 'About Me'}
        </h2>

        <div className="p-6 sm:p-8 rounded-xl bg-bg-card border border-surface-cardBorder shadow-sm">
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed font-normal">
            {ABOUT_TEXT[language]}
          </p>
        </div>
      </div>
    </section>
  );
};

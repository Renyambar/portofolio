import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Bot, Microscope, Users, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { JOURNEY_ITEMS } from '../data/portfolioData';

const typeIconMap = {
  research: Microscope,
  robotics: Bot,
  education: GraduationCap,
  committee: Users,
  organization: Calendar,
};

export const JourneySection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="journey" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-surface-border pb-8 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent-primary uppercase tracking-widest">
              <span>03 /</span>
              <span>{language === 'id' ? 'REKAM JEJAK' : 'THE JOURNEY'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg-primary tracking-tight">
              {language === 'id'
                ? 'AKADEMIK, RISET & ORGANISASI.'
                : 'ACADEMICS, RESEARCH & LEADERSHIP.'}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary max-w-2xl">
              {language === 'id'
                ? 'Lintasan dedikasi akademis di Polinema, riset hilirisasi dosen, hingga kompetisi robotika otonom nasional.'
                : 'A track record spanning top academic performance at Polinema, institutional research, and national robotics excellence.'}
            </p>
          </div>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l-2 border-surface-border ml-4 sm:ml-8 md:ml-36 lg:ml-40 space-y-10 sm:space-y-12">
          {JOURNEY_ITEMS.map((item, idx) => {
            const Icon = typeIconMap[item.type] || Award;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline node marker */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-card-bg border-2 border-surface-border group-hover:border-accent-primary flex items-center justify-center transition-colors shadow-sm">
                  <Icon className="w-4 h-4 text-accent-primary" />
                </div>

                {/* Left Period Timestamp (Desktop Layout Offset) */}
                <div className="hidden md:block absolute -left-32 lg:-left-36 top-2 text-right w-24 lg:w-28 font-mono text-xs font-bold text-accent-primary">
                  {item.period[language]}
                </div>

                {/* Content Card */}
                <div className="p-5 sm:p-8 rounded-3xl bg-card-bg border border-surface-border hover:border-accent-primary/60 transition-all shadow-md space-y-3 group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="md:hidden font-mono text-xs font-bold text-accent-primary">
                      {item.period[language]}
                    </span>

                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-accent-glow text-accent-primary border border-accent-primary/20">
                        {item.badge[language]}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-fg-primary group-hover:text-accent-primary transition-colors">
                    {item.role[language]}
                  </h3>

                  <div className="font-sans text-xs sm:text-sm font-semibold text-fg-secondary">
                    {item.institution[language]}
                  </div>

                  <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed pt-1">
                    {item.description[language]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


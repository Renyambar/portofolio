import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Cpu, Database, Terminal, Search, Zap, Radio } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SKILL_CATEGORIES, WORKFLOW_STEPS } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Layout,
  Cpu,
  Database,
  Terminal,
  Search,
  Zap,
  Radio,
};

export const BehindTheCodeSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 relative bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent-primary uppercase tracking-widest">
              <span>02 /</span>
              <span>{language === 'id' ? 'KEAHLIAN TEKNIS' : 'BEHIND THE CODE'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg-primary tracking-tight">
              {language === 'id'
                ? 'ARSITEKTUR WEB & VISI KOMPUTER.'
                : 'WEB ARCHITECTURE & MACHINE PERCEPTION.'}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary max-w-3xl">
              {language === 'id'
                ? 'Kombinasi disiplin ilmu rekayasa backend terstruktur dengan pipeline computer vision tepi berperforma tinggi.'
                : 'Harmonizing robust backend software engineering with low-latency, edge-optimized computer vision pipelines.'}
            </p>
          </div>
        </div>

        {/* 5 Technical Skill Domains */}
        <div className="space-y-8">
          <div className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold">
            // {language === 'id' ? 'DOMAINS & CORE STACK' : 'DOMAINS & CORE STACK'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const IconComp = iconMap[cat.iconName] || Code2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-card-bg border border-surface-border hover:border-accent-primary/60 transition-all shadow-md group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-glow text-accent-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-fg-primary">
                      {cat.title[language]}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-bg-secondary text-fg-secondary group-hover:text-fg-primary border border-surface-border transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Workflow ("From Concept to Deployment" — Gaya Renando) */}
        <div className="space-y-8 pt-8">
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold">
              // {language === 'id' ? 'METODOLOGI EKSEKUSI' : 'EXECUTION METHODOLOGY'}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-fg-primary">
              {language === 'id' ? 'DARI KONSEP HINGGA DEPLOYMENT' : 'FROM CONCEPT TO DEPLOYMENT'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {WORKFLOW_STEPS.map((wf, idx) => {
              const IconComp = iconMap[wf.iconName] || Cpu;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-card-bg border border-surface-border hover:border-accent-primary/60 transition-all shadow-md flex flex-col justify-between space-y-4 group relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xl sm:text-2xl font-black text-accent-primary">
                        {wf.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-bg-secondary text-accent-primary flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-sm tracking-wide text-fg-primary uppercase">
                      {wf.title[language]}
                    </h4>

                    <p className="text-xs text-fg-secondary leading-relaxed">
                      {wf.desc[language]}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="h-1 w-8 bg-surface-border group-hover:w-full group-hover:bg-accent-primary transition-all duration-500 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

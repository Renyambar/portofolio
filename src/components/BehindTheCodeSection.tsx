import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Cpu, Database, Terminal, Search, Zap, Radio, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SKILL_CATEGORIES, WORKFLOW_STEPS } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

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

// Featured core technologies highlighted on top
const FEATURED_STACK = [
  { name: 'Python', role: { id: 'AI, Computer Vision & Scripting', en: 'AI, Computer Vision & Scripting' } },
  { name: 'YOLOv8', role: { id: 'Deteksi Objek Real-Time', en: 'Real-Time Object Detection' } },
  { name: 'ROS 2 Humble', role: { id: 'Robot Operating System Pub/Sub', en: 'Robotics Pub/Sub Architecture' } },
  { name: 'TensorRT', role: { id: 'Akselerasi Inferensi Edge GPU', en: 'Edge GPU Inference Acceleration' } },
  { name: 'OpenVINO INT8', role: { id: 'Kuantisasi & Model Pruning', en: 'Quantization & Pruning' } },
  { name: 'Laravel', role: { id: 'Enterprise Backend & REST API', en: 'Enterprise Backend & REST APIs' } },
  { name: 'PostgreSQL', role: { id: 'Relational Database & Indexing', en: 'Relational DB & Indexing' } },
  { name: 'Tailwind CSS', role: { id: 'Modern Responsive Design', en: 'Modern Responsive Architecture' } },
];

export const BehindTheCodeSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');

  return (
    <section id="about" className="py-24 md:py-32 relative bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
        {/* Header */}
        <div className="border-b border-surface-border pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent-primary uppercase tracking-widest">
              <span>02 /</span>
              <span>{language === 'id' ? 'KEAHLIAN TEKNIS & TEKNOLOGI' : 'TECH STACK & ARCHITECTURE'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg-primary tracking-tight">
              {language === 'id'
                ? 'ARSITEKTUR WEB & VISI KOMPUTER.'
                : 'WEB ARCHITECTURE & MACHINE PERCEPTION.'}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary max-w-3xl">
              {language === 'id'
                ? 'Tumpukan teknologi pilihan yang telah diuji dalam proyek produksi kampus, riset hilirisasi berstandar industri, serta robotika otonom nasional.'
                : 'Curated technical arsenal battle-tested in institutional production systems, research deployments, and national autonomous robotics.'}
            </p>
          </div>
        </div>

        {/* Featured Core Stack Banner with Authentic Brand Logos */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span>{language === 'id' ? 'PILIHAN UTAMA / CORE PRODUCTION ARSENAL' : 'CORE PRODUCTION ARSENAL'}</span>
            </span>
            <span className="text-xs font-mono text-fg-muted hidden sm:inline">
              {language === 'id' ? 'Hover untuk detail peran' : 'Hover for specialization role'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {FEATURED_STACK.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-4 rounded-2xl bg-card-bg border border-surface-border hover:border-accent-primary/60 transition-all shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform text-fg-primary group-hover:text-accent-primary">
                  <TechLogo name={item.name} size={28} colored={true} />
                </div>
                <span className="font-display font-bold text-xs text-fg-primary block truncate max-w-full">
                  {item.name}
                </span>
                <span className="font-mono text-[9px] text-fg-muted mt-1 leading-tight line-clamp-1">
                  {item.role[language]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5 Technical Skill Domains with Categorized Logos */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold">
              // {language === 'id' ? 'KLASIFIKASI KEAHLIAN LENGKAP' : 'COMPLETE DOMAIN BREAKDOWN'}
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-accent-primary text-white'
                    : 'bg-card-bg text-fg-secondary border border-surface-border hover:text-fg-primary'
                }`}
              >
                {language === 'id' ? 'Semua Domain' : 'All Domains'}
              </button>
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold transition-all ${
                    activeCategory === idx
                      ? 'bg-accent-primary text-white'
                      : 'bg-card-bg text-fg-secondary border border-surface-border hover:text-fg-primary'
                  }`}
                >
                  {cat.title[language].split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.filter((_, idx) => activeCategory === 'all' || activeCategory === idx).map((cat, idx) => {
              const IconComp = iconMap[cat.iconName] || Code2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 sm:p-7 rounded-3xl bg-card-bg border border-surface-border hover:border-accent-primary/60 transition-all shadow-md group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-surface-border/60">
                      <div className="w-10 h-10 rounded-xl bg-accent-glow text-accent-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-base text-fg-primary">
                          {cat.title[language]}
                        </h3>
                        <span className="font-mono text-[10px] text-fg-muted uppercase">
                          {cat.skills.length} {language === 'id' ? 'Teknologi Dikuasai' : 'Technologies'}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2 rounded-xl bg-bg-secondary/70 hover:bg-bg-secondary border border-surface-border/70 hover:border-accent-primary/40 transition-all flex items-center gap-2 group/item"
                        >
                          <div className="w-6 h-6 rounded-lg bg-card-bg border border-surface-border flex items-center justify-center shrink-0 text-fg-secondary group-hover/item:text-accent-primary">
                            <TechLogo name={skill} size={15} colored={true} />
                          </div>
                          <span className="text-xs font-mono font-medium text-fg-primary truncate">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-surface-border/40 flex items-center justify-between font-mono text-[10px] text-fg-muted">
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{language === 'id' ? 'Siap Produksi' : 'Production Ready'}</span>
                    </span>
                    <span>Polinema Verified</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Workflow ("From Concept to Deployment" — Gaya Renando) */}
        <div className="space-y-8 pt-4">
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
                      <span className="font-mono text-2xl font-black text-accent-primary">
                        {wf.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-bg-secondary text-accent-primary flex items-center justify-center">
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

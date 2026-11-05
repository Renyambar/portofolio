import React from 'react';
import { GraduationCap, Code2, Cpu, Database, Terminal, Globe, Workflow } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BEHIND_THE_CODE } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

export const BehindTheCodeSection: React.FC = () => {
  const { language } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-4 h-4 text-accent-primary" />;
      case 'web-mobile':
        return <Globe className="w-4 h-4 text-accent-primary" />;
      case 'cv-ml':
        return <Cpu className="w-4 h-4 text-accent-primary" />;
      case 'robotics-edge':
        return <Cpu className="w-4 h-4 text-accent-primary" />;
      case 'database-bi':
        return <Database className="w-4 h-4 text-accent-primary" />;
      case 'devops-env':
        return <Terminal className="w-4 h-4 text-accent-primary" />;
      default:
        return <Code2 className="w-4 h-4 text-accent-primary" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Main Section Header */}
        <div className="space-y-6 max-w-4xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary block">
            02 / BEHIND THE CODE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-fg-primary tracking-tight uppercase leading-[1.08]">
            {language === 'id'
              ? 'BUKAN SEKADAR BARIS KODE. TAPI SOLUSI YANG BEKERJA.'
              : 'MORE THAN JUST CODE. ENGINEERED TO WORK.'}
          </h2>
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed font-normal">
            {BEHIND_THE_CODE.narrative[language]}
          </p>
        </div>

        {/* Sub-grid 1: EDUCATION & TRAINING */}
        <div className="space-y-6 pt-4 border-t border-surface-border">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-fg-muted font-bold">
              // SUB-GRID 01: EDUCATION & TRAINING
            </span>
            <span className="font-mono text-xs text-fg-muted">ACADEMIC & COMMUNITY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BEHIND_THE_CODE.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-accent-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted px-2 py-0.5 rounded border border-surface-border bg-bg-secondary">
                      {idx === 0 ? 'FORMAL EDUCATION' : 'STUDENT RESEARCH'}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-fg-primary tracking-tight">
                    {edu.institution}
                  </h3>

                  <p className="font-mono text-xs sm:text-sm text-fg-primary font-medium">
                    {edu.program[language]}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed font-normal pt-2 border-t border-surface-border/50">
                  {edu.focus[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-grid 2: TECHNICAL TOOLKIT (6 Kategori Bento) */}
        <div id="skills" className="space-y-6 pt-4 border-t border-surface-border">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-fg-muted font-bold">
              // SUB-GRID 02: TECHNICAL TOOLKIT
            </span>
            <span className="font-mono text-xs text-fg-muted">6 CORE COMPETENCIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BEHIND_THE_CODE.toolkit.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(item.id)}
                      <h3 className="font-display font-bold text-base text-fg-primary tracking-tight">
                        {item.title[language]}
                      </h3>
                    </div>
                  </div>

                  {/* Skills badges with authentic TechLogo */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-surface-border bg-bg-secondary text-xs font-mono text-fg-primary font-medium hover:border-accent-primary/60 transition-colors"
                      >
                        <TechLogo name={skill} size={13} colored={true} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-grid 3: FROM REQUIREMENT TO DEPLOYMENT (5 Tahap 01–05) */}
        <div className="space-y-6 pt-4 border-t border-surface-border">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold flex items-center gap-1.5">
              <Workflow className="w-4 h-4" />
              <span>// SUB-GRID 03: FROM REQUIREMENT TO DEPLOYMENT</span>
            </span>
            <span className="font-mono text-xs text-fg-muted">ENGINEERING PROCESS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BEHIND_THE_CODE.workflow.map((stage) => (
              <div
                key={stage.step}
                className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 shadow-sm flex flex-col justify-between space-y-3 relative overflow-hidden"
              >
                <div className="space-y-2">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-fg-muted/40 block leading-none">
                    {stage.step}
                  </span>
                  <h4 className="font-display font-bold text-sm uppercase text-fg-primary tracking-tight">
                    {stage.title}
                  </h4>
                </div>

                <p className="text-xs text-fg-secondary leading-relaxed font-normal pt-2 border-t border-surface-border/50">
                  {stage.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

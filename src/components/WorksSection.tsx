import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShieldCheck, ArrowUpRight, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

type FilterCategory = 'All' | 'AI & Computer Vision' | 'Full-Stack Web' | 'Robotics & Edge AI';

export const WorksSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { label: { id: string; en: string }; value: FilterCategory }[] = [
    { label: { id: 'Semua Karya', en: 'All Works' }, value: 'All' },
    { label: { id: 'AI & Computer Vision', en: 'AI & Computer Vision' }, value: 'AI & Computer Vision' },
    { label: { id: 'Full-Stack Web', en: 'Full-Stack Web' }, value: 'Full-Stack Web' },
    { label: { id: 'Robotics & Edge AI', en: 'Robotics & Edge AI' }, value: 'Robotics & Edge AI' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.categories.includes(activeFilter as any);
  });

  return (
    <section id="works" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="border-b border-surface-border pb-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent-primary uppercase tracking-widest">
                <span>01 /</span>
                <span>{language === 'id' ? 'KARYA UNGGULAN' : 'SELECTED WORKS'}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg-primary tracking-tight">
                {language === 'id'
                  ? 'KODE & RISET YANG BERDAMPAK.'
                  : 'CODE & RESEARCH THAT DELIVER IMPACT.'}
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                    activeFilter === tab.value
                      ? 'bg-accent-primary text-white shadow-md shadow-maroon-900/20'
                      : 'bg-bg-secondary text-fg-secondary hover:text-fg-primary hover:bg-surface-cardHover border border-surface-border'
                  }`}
                >
                  {tab.label[language]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-3xl bg-card-bg border border-surface-border hover:border-accent-primary/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle top maroon accent border indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  {/* Card Meta & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.categories.map((cat, catIdx) => (
                        <span
                          key={catIdx}
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-bg-secondary text-accent-primary border border-surface-border"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {project.achievementBadge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-sans font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                        {t(project.achievementBadge)}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display text-xl sm:text-2xl font-extrabold text-fg-primary group-hover:text-accent-primary transition-colors cursor-pointer flex items-center justify-between gap-2"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-fg-muted group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                  </h3>

                  {/* Role */}
                  <div className="font-mono text-xs text-accent-primary font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    <span>{t(project.role)}</span>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm text-fg-secondary leading-relaxed line-clamp-3">
                    {t(project.description)}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-bg-secondary text-fg-primary border border-surface-border/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer Actions */}
                <div className="pt-5 mt-5 border-t border-surface-border flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-mono text-xs font-bold text-fg-primary hover:text-accent-primary flex items-center gap-1.5 transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                    <span>{language === 'id' ? 'Detail Riset & Spesifikasi' : 'View Deep Specs'}</span>
                  </button>

                  <div className="flex items-center gap-2 w-full xs:w-auto justify-end">
                    {project.isNda ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-bg-secondary border border-surface-border font-mono text-[11px] text-fg-muted font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>Protected NDA</span>
                      </span>
                    ) : project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-accent-primary hover:text-white border border-surface-border text-fg-primary font-mono text-xs font-bold transition-all shadow-sm"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

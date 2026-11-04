import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-3xl bg-card-bg border border-surface-border shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-surface-border flex items-start justify-between gap-3 sm:gap-4 bg-bg-secondary/50">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                {project.categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-accent-glow text-accent-primary border border-accent-primary/20"
                  >
                    {cat}
                  </span>
                ))}
                {project.achievementBadge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {t(project.achievementBadge)}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-fg-primary">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-accent-primary font-semibold">
                {t(project.role)}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-surface-border bg-bg-secondary text-fg-secondary hover:text-fg-primary hover:bg-surface-cardHover transition-colors shrink-0"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-fg-secondary leading-relaxed">
            {/* Overview */}
            <div>
              <h4 className="font-display font-bold text-base text-fg-primary mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-primary" />
                <span>{language === 'id' ? 'Ringkasan & Cakupan Sistem' : 'System Overview & Scope'}</span>
              </h4>
              <p className="text-fg-primary/90 text-sm">
                {project.fullDetails ? project.fullDetails[language].overview : t(project.description)}
              </p>
            </div>

            {/* Key Technical Highlights */}
            {project.fullDetails && (
              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-fg-primary flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>{language === 'id' ? 'Pencapaian Rekayasa Teknis' : 'Technical Engineering Highlights'}</span>
                </h4>
                <ul className="space-y-2">
                  {project.fullDetails[language].highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-bg-secondary/40 p-3 rounded-xl border border-surface-border/50">
                      <span className="font-mono text-xs font-bold text-accent-primary mt-0.5">0{idx + 1}.</span>
                      <span className="text-xs sm:text-sm text-fg-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics */}
            {project.fullDetails?.id.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.fullDetails[language].metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-bg-secondary/70 border border-surface-border text-center font-mono text-xs font-bold text-accent-primary"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-fg-muted uppercase tracking-wider block">
                {language === 'id' ? 'Tumpukan Teknologi Digunakan:' : 'Technologies Used:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-bg-secondary border border-surface-border text-fg-primary font-mono text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="p-4 sm:p-6 border-t border-surface-border bg-bg-secondary/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            {project.isNda ? (
              <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{language === 'id' ? 'Kode Sumber Dilindungi Perjanjian Kerahasiaan (NDA)' : 'Source Code Protected Under Confidential NDA'}</span>
              </div>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent-primary text-white text-xs font-bold hover:bg-accent-secondary transition-all shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{language === 'id' ? 'Buka Repositori GitHub' : 'View on GitHub'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="sm:ml-auto px-4 py-2.5 rounded-xl border border-surface-border bg-card-bg text-xs font-bold text-fg-primary hover:bg-bg-secondary transition-colors text-center"
            >
              {language === 'id' ? 'Tutup Pratinjau' : 'Close Preview'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

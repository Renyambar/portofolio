import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TechLogo } from './TechLogo';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Lock body scroll when modal is open, and support ESC key
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [project, onClose]);

  if (!project) return null;

  const currentGalleryItem = project.gallery[activeImageIndex] || project.gallery[0];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop: Adaptive light & dark */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/50 dark:bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card: Explicit clean white in light mode, obsidian dark in dark mode */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#141212] border border-surface-border shadow-2xl z-10 flex flex-col my-auto text-fg-primary transition-colors duration-200">
        {/* Header Modal */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#141212]/95 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 border-b border-surface-border flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] sm:text-xs">
            <span className="font-extrabold text-accent-primary">{project.index} /</span>
            <span className="px-2 py-0.5 rounded border border-surface-border bg-stone-100 dark:bg-[#1f1b1b] text-fg-secondary uppercase">
              {project.category}
            </span>
            <span className="text-fg-muted">• {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-surface-border bg-stone-100 hover:bg-stone-200 dark:bg-[#1f1b1b] dark:hover:bg-[#2a2424] text-fg-primary text-xs font-mono transition-colors"
            aria-label="Close modal"
          >
            <X className="w-3.5 h-3.5 text-fg-secondary" />
            <span>ESC</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          {/* Project Title */}
          <div>
            <h2 className="font-sans font-bold text-xl sm:text-2xl text-fg-primary uppercase tracking-tight">
              {project.title}
            </h2>
            <span className="font-mono text-[11px] sm:text-xs text-fg-muted uppercase tracking-wider block mt-0.5">
              {project.subtitle}
            </span>
          </div>

          {/* Interactive Photo Gallery / Slider */}
          <div className="space-y-3">
            {/* Main Showcase Image Area (16:9 ratio) */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-[#121010] border border-surface-border group">
              <img
                src={currentGalleryItem.src}
                alt={currentGalleryItem.caption[language]}
                className="w-full h-full object-cover transition-all duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    const existingFallback = target.parentElement.querySelector('.styled-placeholder');
                    if (!existingFallback) {
                      const placeholder = document.createElement('div');
                      placeholder.className =
                        'styled-placeholder absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-stone-100 dark:bg-[#121010] border border-surface-border text-fg-primary';
                      placeholder.innerHTML = `
                        <div class="font-mono text-[10px] sm:text-xs text-accent-primary font-bold uppercase tracking-widest mb-1.5">${project.index} // SYSTEM VISUAL CASE STUDY</div>
                        <h4 class="font-sans font-bold text-sm sm:text-base text-fg-primary max-w-md">${currentGalleryItem.caption[language]}</h4>
                        <p class="font-mono text-[10px] sm:text-xs text-fg-muted mt-2">${project.techStack.join(' • ')}</p>
                      `;
                      target.parentElement.appendChild(placeholder);
                    }
                  }
                }}
              />

              {/* Slider Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white dark:bg-black/60 dark:hover:bg-black/90 text-stone-900 dark:text-white backdrop-blur-sm transition-all shadow-md"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white dark:bg-black/60 dark:hover:bg-black/90 text-stone-900 dark:text-white backdrop-blur-sm transition-all shadow-md"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 text-white font-mono text-[11px] sm:text-xs flex items-center justify-between">
                <span className="truncate pr-2">{currentGalleryItem.caption[language]}</span>
                <span className="text-stone-300 shrink-0">
                  {activeImageIndex + 1} / {project.gallery.length}
                </span>
              </div>
            </div>

            {/* 3 Thumbnail Previews */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {project.gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`p-1.5 sm:p-2 rounded-lg border text-left font-mono text-[10px] sm:text-[11px] transition-all flex flex-col justify-between h-13 sm:h-16 ${
                    activeImageIndex === idx
                      ? 'border-accent-primary bg-stone-100 dark:bg-[#201919] text-fg-primary font-bold shadow-sm'
                      : 'border-surface-border bg-white dark:bg-[#141212] hover:border-fg-secondary text-fg-muted'
                  }`}
                >
                  <span className="font-bold text-accent-primary">0{idx + 1}.</span>
                  <span className="truncate block leading-tight text-fg-primary">
                    {item.caption[language]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid 2 Kolom: Informasi Mendalam */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-4 border-t border-surface-border">
            {/* Kolom Kiri: Studi Kasus (7 Cols) */}
            <div className="md:col-span-7 space-y-5">
              {/* Latar Belakang & Tantangan */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent-primary font-bold mb-1.5">
                  // {language === 'id' ? 'LATAR BELAKANG & TANTANGAN' : 'OVERVIEW & CHALLENGE'}
                </h4>
                <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed font-normal">
                  {project.overview[language]}
                </p>
              </div>

              {/* Arsitektur & Fitur Utama */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent-primary font-bold mb-2">
                  // {language === 'id' ? 'ARSITEKTUR & FITUR UTAMA' : 'KEY ARCHITECTURE & FEATURES'}
                </h4>
                <ul className="space-y-2">
                  {project.features[language].map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-fg-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kolom Kanan: Metadata & Action (5 Cols) */}
            <div className="md:col-span-5 space-y-5 md:pl-5 md:border-l border-surface-border">
              {/* Peran */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent-primary font-bold mb-1">
                  // {language === 'id' ? 'PERAN SAYA' : 'MY ROLE'}
                </h4>
                <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-[#121010] border border-surface-border">
                  <p className="font-mono text-xs sm:text-sm text-fg-primary font-semibold">
                    {project.role[language]}
                  </p>
                </div>
              </div>

              {/* Tech Stack Lengkap */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent-primary font-bold mb-2">
                  // {language === 'id' ? 'TECH STACK LENGKAP' : 'TECH STACK'}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-surface-border bg-stone-100 dark:bg-[#121010] text-[11px] sm:text-xs font-mono text-fg-primary font-medium"
                    >
                      <TechLogo name={tech} size={12} colored={true} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Tombol Aksi Utama: GitHub Link */}
              <div className="pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-full bg-accent-primary hover:bg-accent-hover text-white font-mono text-xs font-semibold transition-all shadow-sm"
                >
                  <span>{language === 'id' ? 'Buka Repositori GitHub' : 'Open GitHub Repository'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

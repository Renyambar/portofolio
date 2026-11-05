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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-bg-card border border-surface-border shadow-2xl z-10 flex flex-col my-auto">
        {/* Header Modal */}
        <div className="sticky top-0 z-20 bg-bg-card/95 backdrop-blur-md px-6 py-4 border-b border-surface-border flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="font-extrabold text-accent-primary">{project.index} /</span>
            <span className="px-2 py-0.5 rounded border border-surface-border bg-bg-secondary text-fg-secondary uppercase">
              {project.category}
            </span>
            <span className="text-fg-muted">• {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-surface-border bg-bg-secondary hover:border-fg-secondary text-fg-primary text-xs font-mono transition-colors"
            aria-label="Close modal"
          >
            <X className="w-3.5 h-3.5 text-fg-secondary" />
            <span>ESC</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Project Title */}
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-fg-primary uppercase tracking-tight">
              {project.title}
            </h2>
            <span className="font-mono text-xs text-fg-muted uppercase tracking-wider block mt-1">
              {project.subtitle}
            </span>
          </div>

          {/* Interactive Photo Gallery / Slider */}
          <div className="space-y-3">
            {/* Main Showcase Image Area (16:9 ratio) */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-bg-secondary border border-surface-border group">
              <img
                src={currentGalleryItem.src}
                alt={currentGalleryItem.caption[language]}
                className="w-full h-full object-cover transition-all duration-300"
                onError={(e) => {
                  // Fallback styled aesthetic placeholder if image is not uploaded yet
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    const existingFallback = target.parentElement.querySelector('.styled-placeholder');
                    if (!existingFallback) {
                      const placeholder = document.createElement('div');
                      placeholder.className =
                        'styled-placeholder absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-bg-secondary via-bg-card to-bg-secondary';
                      placeholder.innerHTML = `
                        <div class="font-mono text-xs text-accent-primary font-bold uppercase tracking-widest mb-2">${project.index} // SYSTEM VISUAL CASE STUDY</div>
                        <h4 class="font-display font-bold text-lg text-fg-primary max-w-md">${currentGalleryItem.caption[language]}</h4>
                        <p class="font-mono text-xs text-fg-muted mt-2">${project.techStack.join(' • ')}</p>
                      `;
                      target.parentElement.appendChild(placeholder);
                    }
                  }
                }}
              />

              {/* Slider Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white font-mono text-xs">
                <span>{currentGalleryItem.caption[language]}</span>
                <span className="float-right text-fg-muted">
                  {activeImageIndex + 1} / {project.gallery.length}
                </span>
              </div>
            </div>

            {/* 3 Thumbnail Previews */}
            <div className="grid grid-cols-3 gap-3">
              {project.gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`p-2 rounded-lg border text-left font-mono text-[11px] transition-all flex flex-col justify-between h-16 ${
                    activeImageIndex === idx
                      ? 'border-accent-primary bg-bg-secondary'
                      : 'border-surface-border bg-bg-card hover:border-fg-secondary text-fg-muted'
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-surface-border">
            {/* Kolom Kiri: Studi Kasus (7 Cols) */}
            <div className="md:col-span-7 space-y-6">
              {/* Latar Belakang & Tantangan */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold mb-2">
                  // {language === 'id' ? 'LATAR BELAKANG & TANTANGAN' : 'OVERVIEW & CHALLENGE'}
                </h4>
                <p className="text-sm text-fg-secondary leading-relaxed font-normal">
                  {project.overview[language]}
                </p>
              </div>

              {/* Arsitektur & Fitur Utama */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold mb-3">
                  // {language === 'id' ? 'ARSITEKTUR & FITUR UTAMA' : 'KEY ARCHITECTURE & FEATURES'}
                </h4>
                <ul className="space-y-2.5">
                  {project.features[language].map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-fg-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kolom Kanan: Metadata & Action (5 Cols) */}
            <div className="md:col-span-5 space-y-6 md:pl-4 md:border-l border-surface-border">
              {/* Peran */}
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-fg-muted block mb-1">
                  {language === 'id' ? 'PERAN SPESIFIK' : 'ROLE'}
                </span>
                <span className="font-display font-bold text-sm text-fg-primary block">
                  {project.role[language]}
                </span>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-fg-muted block mb-2">
                  TECH STACK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-surface-border bg-bg-secondary text-xs font-mono text-fg-primary font-medium"
                    >
                      <TechLogo name={tech} size={14} colored={true} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Tombol Aksi Utama */}
              <div className="pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent-primary hover:bg-accent-hover text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                >
                  <span>{language === 'id' ? 'Buka Repositori GitHub' : 'View on GitHub'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

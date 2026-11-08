import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { TechLogo } from './TechLogo';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'All', label: { id: 'Semua', en: 'All' } },
    { id: 'Web Development', label: { id: 'Web Development', en: 'Web Development' } },
    { id: 'Computer Vision & AI', label: { id: 'Computer Vision & AI', en: 'Computer Vision & AI' } },
    { id: 'Robotics', label: { id: 'Robotics', en: 'Robotics' } },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="works" className="py-14 sm:py-20 md:py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Header Seksi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-5 border-b border-surface-border">
          <div className="space-y-1.5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary block">
              02 / {language === 'id' ? 'KARYA PILIHAN' : 'SELECTED WORK'}
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-fg-primary tracking-tight uppercase">
              {language === 'id' ? 'KARYA & SISTEM PILIHAN.' : 'SELECTED WORKS.'}
            </h2>
          </div>

          {/* Filter Tabs Interaktif */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1 sm:py-1.5 rounded-full font-mono text-xs transition-all ${
                  activeFilter === filter.id
                    ? 'bg-accent-primary text-white font-bold shadow-sm'
                    : 'bg-bg-card border border-surface-border text-fg-secondary hover:text-fg-primary'
                }`}
              >
                {filter.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Kartu Proyek: Keterangan Dulu, Baru Image di Bawah */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* 1) Top Card Meta: Index & Kategori */}
                <div className="flex items-start justify-between">
                  <span className="font-condensed font-bold text-3xl sm:text-4xl text-fg-muted/40 group-hover:text-accent-primary transition-colors leading-none">
                    {project.index}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-fg-secondary">
                    <span className="px-2 py-0.5 rounded border border-surface-border bg-bg-secondary uppercase">
                      {project.category}
                    </span>
                    <span className="text-fg-muted">• {project.year}</span>
                  </div>
                </div>

                {/* 2) Project Title & Subtitle */}
                <div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-fg-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors flex items-center justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-fg-muted group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>
                  <span className="font-mono text-[11px] sm:text-xs text-fg-muted uppercase tracking-wider block mt-1">
                    {project.subtitle}
                  </span>
                </div>

                {/* 3) Description / Keterangan */}
                <p className="text-xs sm:text-sm text-fg-secondary leading-relaxed font-normal">
                  {project.description[language]}
                </p>

                {/* 4) Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-surface-border bg-bg-secondary text-[11px] sm:text-xs font-mono text-fg-primary font-medium"
                    >
                      <TechLogo name={tech} size={12} colored={true} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* 5) Image / Preview Thumbnail di Bawah Keterangan */}
                <div className="pt-2">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-bg-secondary border border-surface-border">
                    <img
                      src={project.gallery[0]?.src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          const fallback = document.createElement('div');
                          fallback.className =
                            'absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-gradient-to-br from-bg-secondary via-bg-card to-bg-secondary';
                          fallback.innerHTML = `
                            <div class="font-mono text-[10px] sm:text-xs text-accent-primary font-bold uppercase tracking-widest mb-1">${project.index} // SYSTEM VISUAL CASE STUDY</div>
                            <span class="font-sans font-bold text-xs sm:text-sm text-fg-primary uppercase">${project.title}</span>
                            <span class="font-mono text-[9px] sm:text-[10px] text-fg-muted mt-2">${project.techStack.join(' • ')}</span>
                          `;
                          target.parentElement.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 6) Card Footer: Tombol Detail & Dokumentasi */}
              <div className="pt-4 mt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono">
                <span className="text-accent-primary font-semibold flex items-center gap-1.5 group-hover:underline underline-offset-4">
                  <Layers className="w-3.5 h-3.5" />
                  <span>
                    {language === 'id' ? 'Lihat Detail & Dokumentasi ↗' : 'View Case Study & Gallery ↗'}
                  </span>
                </span>
                <span className="text-fg-muted text-[11px]">CASE STUDY</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

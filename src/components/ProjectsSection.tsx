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
    <section id="works" className="py-20 md:py-28 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Seksi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-border">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary block">
              01 / SELECTED WORK
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-fg-primary tracking-tight uppercase">
              {language === 'id' ? 'KARYA & SISTEM PILIHAN.' : 'SELECTED WORKS.'}
            </h2>
          </div>

          {/* Filter Tabs Interaktif */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
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

        {/* 4 Kartu Proyek Bergaya Poster Sinematik */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div className="space-y-6">
                {/* Top Card Meta: Nomor Index Raksasa & Tag */}
                <div className="flex items-start justify-between">
                  <span className="font-display font-extrabold text-4xl sm:text-5xl text-fg-muted/40 group-hover:text-accent-primary transition-colors leading-none">
                    {project.index}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-fg-secondary">
                    <span className="px-2.5 py-0.5 rounded border border-surface-border bg-bg-secondary uppercase">
                      {project.category}
                    </span>
                    <span className="text-fg-muted">• {project.year}</span>
                  </div>
                </div>

                {/* Thumbnail Preview Area (16:10 Ratio dengan Subtle Zoom) */}
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
                          'absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-bg-secondary via-bg-card to-bg-secondary';
                        fallback.innerHTML = `
                          <div class="font-mono text-xs text-accent-primary font-bold uppercase tracking-widest mb-1">${project.index} // SYSTEM VISUAL CASE STUDY</div>
                          <span class="font-display font-extrabold text-sm text-fg-primary uppercase">${project.title}</span>
                          <span class="font-mono text-[10px] text-fg-muted mt-2">${project.techStack.join(' • ')}</span>
                        `;
                        target.parentElement.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />
                </div>

                {/* Project Title & Subtitle */}
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-fg-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors flex items-center justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-fg-muted group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>
                  <span className="font-mono text-xs text-fg-muted uppercase tracking-wider block mt-1">
                    {project.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-fg-secondary leading-relaxed font-normal line-clamp-3">
                  {project.description[language]}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-surface-border bg-bg-secondary text-xs font-mono text-fg-primary font-medium"
                    >
                      <TechLogo name={tech} size={13} colored={true} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Indikator Tombol Detail & Dokumentasi */}
              <div className="pt-6 mt-6 border-t border-surface-border flex items-center justify-between text-xs font-mono">
                <span className="text-accent-primary font-semibold flex items-center gap-1.5 group-hover:underline underline-offset-4">
                  <Layers className="w-3.5 h-3.5" />
                  <span>
                    {language === 'id' ? 'Lihat Detail & Dokumentasi ↗' : 'View Case Study & Gallery ↗'}
                  </span>
                </span>
                <span className="text-fg-muted">CASE STUDY</span>
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

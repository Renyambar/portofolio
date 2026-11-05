import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-fg-primary mb-8">
          {language === 'id' ? 'Proyek Pilihan' : 'Selected Projects'}
        </h2>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-xl bg-bg-card border border-surface-cardBorder shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-fg-primary">
                    {project.title[language]}
                  </h3>
                  <span className="font-mono text-xs text-fg-muted block mt-0.5">
                    {project.subtitle[language]}
                  </span>
                </div>
                <span className="font-mono text-xs font-medium text-fg-muted shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="text-sm sm:text-base text-fg-secondary leading-relaxed font-normal">
                {project.description[language]}
              </p>

              {/* Tech Stack Badges with Authentic Logos */}
              <div className="pt-1 flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-surface-border bg-bg-secondary text-xs font-mono text-fg-primary font-medium"
                  >
                    <TechLogo name={tech} size={14} colored={true} />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <div className="pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent-primary hover:underline underline-offset-4"
                >
                  <span>{language === 'id' ? 'Lihat Repositori GitHub' : 'View on GitHub'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


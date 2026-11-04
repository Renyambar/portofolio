import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-bg-primary py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-primary text-white font-display font-black flex items-center justify-center text-sm shadow-sm">
              M
            </div>
            <div>
              <span className="font-display font-extrabold text-base tracking-tight text-fg-primary block">
                {PERSONAL_INFO.logo}
              </span>
              <span className="font-mono text-[10px] text-fg-secondary">
                RENY AMBARWATI — {PERSONAL_INFO.domain}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-fg-secondary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent-primary transition-colors"
              >
                {link.number}. {link.label[language]}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-surface-border bg-bg-secondary hover:border-accent-primary hover:text-accent-primary text-fg-primary transition-all hover:scale-105 flex items-center gap-2 text-xs font-mono"
            aria-label="Back to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-fg-muted">
          <div>
            &copy; {new Date().getFullYear()} Reny Ambarwati. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Engineered with React &amp; Tailwind for</span>
            <span className="text-accent-primary font-bold">minipaoo.web.id</span>
            <span>on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

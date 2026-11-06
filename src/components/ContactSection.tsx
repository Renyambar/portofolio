import React from 'react';
import { Mail, ArrowUpRight, FileText, MessageSquare, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-14 sm:pt-20 md:pt-24 pb-8 sm:pb-12 border-t border-surface-border bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Header Seksi: Clean Upright Font (Bukan Pipih) */}
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary block">
            04 / YOUR NEXT PROJECT
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-fg-primary tracking-tight uppercase leading-snug">
            LET'S WORK TOGETHER.
          </h2>
          <p className="text-sm sm:text-base text-fg-secondary leading-relaxed font-normal max-w-2xl">
            {language === 'id'
              ? 'Terbuka untuk kesempatan kerja magang (Full-Stack Developer / Computer Vision Engineer) serta kolaborasi riset. Hubungi saya langsung melalui kanal di bawah ini.'
              : 'Open for internship opportunities (Full-Stack Developer / Computer Vision Engineer) and research collaborations. Reach out to me directly below.'}
          </p>
        </div>

        {/* Grid Kontak Langsung (Editorial Grid Bersih) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  EMAIL
                </span>
                <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block font-medium">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors shrink-0" />
          </a>

          {/* WhatsApp */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  WHATSAPP
                </span>
                <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block font-medium">
                  {PERSONAL_INFO.whatsappNumber}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors shrink-0" />
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  LINKEDIN
                </span>
                <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block font-medium">
                  {PERSONAL_INFO.linkedinHandle}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors shrink-0" />
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  GITHUB
                </span>
                <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block font-medium">
                  {PERSONAL_INFO.githubHandle}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors shrink-0" />
          </a>

          {/* Curriculum Vitae (Google Drive) */}
          <a
            href={PERSONAL_INFO.cvGdriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  CURRICULUM VITAE
                </span>
                <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block font-medium">
                  {language === 'id' ? 'Lihat CV di Google Drive' : 'View CV on Google Drive'}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors shrink-0" />
          </a>

          {/* Instagram */}
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all duration-300 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  INSTAGRAM
                </span>
                <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block font-medium">
                  {PERSONAL_INFO.instagramHandle}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors shrink-0" />
          </a>
        </div>

        {/* Minimalist Footer Bar */}
        <div className="pt-6 sm:pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-[11px] sm:text-xs text-fg-muted">
          <div className="text-center sm:text-left">
            © 2026 {PERSONAL_INFO.name} ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden md:inline">
              PORTFOLIO / 2026
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-fg-secondary hover:text-accent-primary transition-colors font-semibold"
            >
              <span>{language === 'id' ? 'KEMBALI KE ATAS' : 'BACK TO TOP'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

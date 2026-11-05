import React from 'react';
import { Mail, MessageSquare, ArrowUpRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactFooterSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer id="contact" className="py-16 md:py-24 border-t border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-fg-primary mb-3">
            {language === 'id' ? 'Kontak & Informasi' : 'Get in Touch'}
          </h2>
          <p className="text-sm sm:text-base text-fg-secondary max-w-xl">
            {language === 'id'
              ? 'Terbuka untuk kesempatan kerja magang, rekayasa perangkat lunak web full-stack, serta riset computer vision.'
              : 'Open for internship opportunities, full-stack software development, and computer vision research collaborations.'}
          </p>
        </div>

        {/* Clean, Direct Clickable Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {/* CV Google Drive */}
          <a
            href={PERSONAL_INFO.cvGdriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-bg-card border border-surface-cardBorder hover:border-fg-secondary transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-accent-primary">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  Curriculum Vitae
                </span>
                <span className="font-medium text-sm text-fg-primary group-hover:text-accent-primary transition-colors">
                  {language === 'id' ? 'Lihat CV (Google Drive)' : 'View CV (Google Drive)'}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-5 rounded-xl bg-bg-card border border-surface-cardBorder hover:border-fg-secondary transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-accent-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  Email
                </span>
                <span className="font-medium text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block">
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
            className="p-5 rounded-xl bg-bg-card border border-surface-cardBorder hover:border-fg-secondary transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  WhatsApp
                </span>
                <span className="font-medium text-sm text-fg-primary group-hover:text-accent-primary transition-colors">
                  {PERSONAL_INFO.whatsappNumber}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors" />
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-bg-card border border-surface-cardBorder hover:border-fg-secondary transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-fg-primary">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  GitHub
                </span>
                <span className="font-medium text-sm text-fg-primary group-hover:text-accent-primary transition-colors">
                  {PERSONAL_INFO.githubHandle}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-bg-card border border-surface-cardBorder hover:border-fg-secondary transition-all flex items-center justify-between group shadow-sm sm:col-span-2"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-[#0A66C2]">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  LinkedIn
                </span>
                <span className="font-medium text-sm text-fg-primary group-hover:text-accent-primary transition-colors">
                  {PERSONAL_INFO.linkedinHandle}
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors" />
          </a>
        </div>

        {/* Minimalist Calm Footer */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-fg-muted">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </div>
          <div>
            <span className="text-fg-secondary">{PERSONAL_INFO.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

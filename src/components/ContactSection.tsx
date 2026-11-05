import React, { useState } from 'react';
import { Mail, ArrowUpRight, FileText, MapPin, Send, MessageSquare, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();

  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Full-Stack Web Internship');
  const [message, setMessage] = useState('');

  const topics = [
    { id: 'Full-Stack Web Internship', label: { id: 'Full-Stack Web Internship', en: 'Full-Stack Web Internship' } },
    { id: 'Computer Vision / AI Internship', label: { id: 'Computer Vision / AI Internship', en: 'Computer Vision / AI Internship' } },
    { id: 'Project Collaboration', label: { id: 'Kolaborasi Proyek', en: 'Project Collaboration' } },
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const sender = name.trim() || (language === 'id' ? 'Pengunjung Portfolio' : 'Portfolio Visitor');
    const briefText = `Halo Reny,\n\nNama/Instansi: ${sender}\nTopik: ${topic}\nPesan: ${message.trim() || '-'}\n\n(Dikirim via minipaoo.web.id)`;
    const url = `https://wa.me/6285798475896?text=${encodeURIComponent(briefText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const sender = name.trim() || 'Portfolio Inquiry';
    const subject = `[Inquiry] ${topic} - ${sender}`;
    const body = `Halo Reny,\n\nNama/Instansi: ${sender}\nTopik: ${topic}\n\nPesan:\n${message.trim() || '-'}\n\n---\nDikirim melalui minipaoo.web.id`;
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 md:pt-28 pb-12 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Seksi */}
        <div className="space-y-4 max-w-4xl">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-primary block">
            04 / YOUR NEXT PROJECT
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-fg-primary tracking-tight uppercase leading-[1.05]">
            LET'S WORK TOGETHER.
          </h2>
          <p className="text-base sm:text-lg text-fg-secondary leading-relaxed font-normal max-w-2xl">
            {language === 'id'
              ? 'Sedang mencari kandidat magang Full-Stack Developer atau Computer Vision / AI Engineer? Mari berdiskusi.'
              : "Looking for a Full-Stack Developer or Computer Vision / AI Engineer intern? Let's talk."}
          </p>
        </div>

        {/* 2 Kolom: Kiri Kontak Langsung, Kanan Interactive Quick Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Grid Kontak Langsung (5 items) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-fg-muted font-bold block mb-2">
              // DIRECT CONTACTS
            </span>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                    EMAIL
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block">
                    {PERSONAL_INFO.email}
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
              className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                    LINKEDIN
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block">
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
              className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                    GITHUB
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block">
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
              className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder hover:border-accent-primary/60 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                    CURRICULUM VITAE
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-fg-primary group-hover:text-accent-primary transition-colors truncate block">
                    {language === 'id' ? 'Lihat CV di Google Drive ↗' : 'View CV on Google Drive ↗'}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-primary transition-colors shrink-0" />
            </a>

            {/* Based In */}
            <div className="p-5 rounded-2xl bg-bg-card border border-surface-cardBorder flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-accent-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                  BASED IN
                </span>
                <span className="font-mono text-xs sm:text-sm text-fg-primary block">
                  {PERSONAL_INFO.basedIn[language]}
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Interactive Quick Brief Box (Fitur Spesial Renando) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-bg-card border border-surface-cardBorder shadow-sm space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold block mb-1">
                // INTERACTIVE QUICK BRIEF
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-fg-primary tracking-tight">
                {language === 'id' ? 'Kirim Pesan Cepat' : 'Send a Quick Brief'}
              </h3>
              <p className="font-mono text-xs text-fg-secondary mt-1">
                {language === 'id'
                  ? 'Pilih topik dan susun pesan. Dihubungkan langsung ke WhatsApp atau Email Anda.'
                  : 'Select a topic and compose your brief. Transferred directly to WhatsApp or your Email client.'}
              </p>
            </div>

            <form className="space-y-4">
              {/* Name / Company */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-fg-muted uppercase tracking-wider block">
                  {language === 'id' ? 'Nama / Perusahaan' : 'Name / Company'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'id' ? 'Contoh: Tech Startup / HR Team' : 'e.g. Acme Corp / HR Recruiter'}
                  className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-surface-border text-fg-primary font-mono text-xs sm:text-sm focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>

              {/* Topic Pills */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-fg-muted uppercase tracking-wider block">
                  {language === 'id' ? 'Pilih Topik Diskusi' : 'Select Discussion Topic'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTopic(t.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        topic === t.id
                          ? 'bg-accent-primary text-white font-bold shadow-sm'
                          : 'bg-bg-secondary border border-surface-border text-fg-secondary hover:text-fg-primary'
                      }`}
                    >
                      {t.label[language]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Short Message */}
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-fg-muted uppercase tracking-wider block">
                  {language === 'id' ? 'Pesan Singkat' : 'Short Message'}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === 'id'
                      ? 'Tuliskan detail singkat tawaran magang atau kebutuhan kolaborasi Anda...'
                      : 'Write a brief description of the internship opportunity or project collaboration...'
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-surface-border text-fg-primary font-sans text-xs sm:text-sm focus:outline-none focus:border-accent-primary transition-colors resize-none"
                />
              </div>

              {/* Action Buttons: WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'id' ? 'Kirim via WhatsApp ↗' : 'Send via WhatsApp ↗'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent-primary hover:bg-accent-hover text-white font-mono text-xs font-semibold transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'id' ? 'Kirim via Email ↗' : 'Send via Email ↗'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Minimalist Studio Footer Bottom Bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-fg-muted">
          <div>
            © 2026 {PERSONAL_INFO.name} ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline">
              BUILT WITH REACT, TAILWIND CSS & VITE
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

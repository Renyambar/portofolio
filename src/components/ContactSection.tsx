import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Globe, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, CONTACT_TOPICS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<string>(CONTACT_TOPICS[0].id);
  const [name, setName] = useState('');
  const [emailOrOrg, setEmailOrOrg] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getTopicLabel = () => {
    const topic = CONTACT_TOPICS.find((t) => t.id === selectedTopic);
    return topic ? topic.label[language] : '';
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${getTopicLabel()}] Kontak dari ${name || 'Kolaborator'}`);
    const body = encodeURIComponent(
      `Nama / Instansi: ${name} (${emailOrOrg})\nTopik: ${getTopicLabel()}\n\nPesan:\n${message}\n\n— Dikirim via minipaoo.web.id`
    );
    try {
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
    } catch {}
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Reny Ambarwati,\n\nSaya: ${name || 'Kolaborator'} (${emailOrOrg || 'Instansi/Personal'})\nTopik: ${getTopicLabel()}\n\nPesan:\n${message || 'Saya tertarik untuk berdiskusi lebih lanjut mengenai portofolio Anda.'}`
    );
    try {
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
    } catch {}
    window.open(`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-surface-border pb-8 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent-primary uppercase tracking-widest">
              <span>04 /</span>
              <span>{language === 'id' ? 'KOLABORASI' : "LET'S CONNECT"}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-fg-primary tracking-tight">
              {language === 'id'
                ? 'SIAP BERKONTRIBUSI DI TIM ANDA.'
                : 'READY TO CONTRIBUTE TO YOUR TEAM.'}
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary max-w-2xl">
              {language === 'id'
                ? 'Terbuka untuk posisi magang industri (Internship), proyek rekayasa web full-stack, riset computer vision, maupun diskusi kolaboratif.'
                : 'Open for industry internships, full-stack engineering contracts, computer vision research, and technical collaboration.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-card-bg border border-surface-border shadow-lg space-y-6">
              <h3 className="font-display font-bold text-xl text-fg-primary">
                {language === 'id' ? 'Informasi Kontak Langsung' : 'Direct Contact Info'}
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-accent-glow text-accent-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                      {language === 'id' ? 'Domisili' : 'Location'}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-fg-primary">
                      {PERSONAL_INFO.location[language]}
                    </span>
                  </div>
                </div>

                {/* Email with copy */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-accent-glow text-accent-primary flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                      Email
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs sm:text-sm font-semibold text-fg-primary hover:text-accent-primary transition-colors flex items-center gap-2 group text-left"
                    >
                      <span className="break-all">{PERSONAL_INFO.email}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-bg-secondary text-accent-primary font-mono shrink-0">
                        {copiedEmail ? (
                          <span className="flex items-center gap-1 text-emerald-500">
                            <Check className="w-3 h-3" /> Copied
                          </span>
                        ) : (
                          'Copy'
                        )}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Domain */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-accent-glow text-accent-primary flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider block">
                      Portfolio Domain
                    </span>
                    <a
                      href={`https://${PERSONAL_INFO.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-fg-primary hover:text-accent-primary transition-colors"
                    >
                      {PERSONAL_INFO.domain}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-surface-border flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-secondary hover:bg-accent-primary hover:text-white border border-surface-border text-fg-primary transition-all hover:scale-105"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-secondary hover:bg-accent-primary hover:text-white border border-surface-border text-fg-primary transition-all hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-secondary hover:bg-emerald-600 hover:text-white border border-surface-border text-fg-primary transition-all hover:scale-105"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Brief Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-card-bg border border-surface-border shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-fg-primary">
                  {language === 'id' ? 'Kirim Brief & Mulai Diskusi' : 'Send Brief & Start a Conversation'}
                </h3>
                <p className="text-xs text-fg-secondary">
                  {language === 'id'
                    ? 'Pilih kebutuhan Anda dan kirimkan langsung via Email resmi atau WhatsApp.'
                    : 'Choose your project scope and send directly via official Email or WhatsApp.'}
                </p>
              </div>

              {/* Topic Pills */}
              <div className="space-y-2">
                <label className="font-mono text-xs font-semibold text-fg-primary">
                  {language === 'id' ? 'Pilih Topik Keperluan:' : 'Select Topic:'}
                </label>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_TOPICS.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-sans font-semibold transition-all ${
                        selectedTopic === topic.id
                          ? 'bg-accent-primary text-white shadow-md'
                          : 'bg-bg-secondary border border-surface-border text-fg-secondary hover:text-fg-primary hover:bg-surface-cardHover'
                      }`}
                    >
                      {topic.label[language]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-medium text-fg-secondary">
                      {language === 'id' ? 'Nama Anda' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Budi Santoso"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-surface-border text-fg-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs font-medium text-fg-secondary">
                      {language === 'id' ? 'Email atau Instansi' : 'Email or Organization'}
                    </label>
                    <input
                      type="text"
                      value={emailOrOrg}
                      onChange={(e) => setEmailOrOrg(e.target.value)}
                      placeholder="e.g. PT Tech Innovasi / recruiter@..."
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-surface-border text-fg-primary text-sm focus:outline-none focus:border-accent-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-medium text-fg-secondary">
                    {language === 'id' ? 'Pesan / Ringkasan Kebutuhan' : 'Message / Scope Summary'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === 'id'
                        ? 'Tuliskan detail tawaran magang, requirement proyek web, atau riset yang ingin dikolaborasikan...'
                        : 'Describe your internship offer, web development requirements, or computer vision collaboration...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-secondary border border-surface-border text-fg-primary text-sm focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent-primary text-white font-bold text-xs hover:bg-accent-secondary shadow-lg shadow-maroon-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  <span>{language === 'id' ? 'Kirim via Email Resmi' : 'Send via Email'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'id' ? 'Lanjut ke WhatsApp' : 'Open in WhatsApp'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

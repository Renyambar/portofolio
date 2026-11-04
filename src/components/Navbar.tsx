import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCv = () => {
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.15 },
        colors: ['#7A1C29', '#B83246', '#FAF6F0', '#9E2A3B'],
      });
    } catch {
      // Ignore if confetti fails
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-bg-primary/80 backdrop-blur-md border-b border-surface-border shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform hover:scale-105"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-primary flex items-center justify-center font-display font-extrabold text-white text-base shadow-sm">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-tight leading-none text-fg-primary group-hover:text-accent-primary transition-colors">
                {PERSONAL_INFO.logo}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-fg-muted uppercase">
                {PERSONAL_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-fg-secondary hover:text-fg-primary hover:bg-bg-secondary transition-all flex items-center gap-1.5"
              >
                <span className="font-mono text-[10px] text-accent-primary font-bold">
                  {link.number}.
                </span>
                <span>{link.label[language]}</span>
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg border border-surface-border bg-bg-secondary hover:border-accent-primary text-fg-primary transition-colors flex items-center gap-1"
              title={language === 'id' ? 'Switch to English' : 'Ubah ke Bahasa Indonesia'}
              aria-label="Switch Language"
            >
              <span className={language === 'id' ? 'text-accent-primary underline decoration-2 underline-offset-4' : 'text-fg-muted'}>
                ID
              </span>
              <span className="text-fg-muted">/</span>
              <span className={language === 'en' ? 'text-accent-primary underline decoration-2 underline-offset-4' : 'text-fg-muted'}>
                EN
              </span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg border border-surface-border bg-bg-secondary hover:border-accent-primary text-fg-primary transition-colors flex items-center justify-center"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-accent-primary" />
              )}
            </button>

            {/* CTA Download CV */}
            <a
              href={PERSONAL_INFO.cvUrl}
              download="CV_Reny_Ambarwati.pdf"
              onClick={handleDownloadCv}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-accent-primary text-white hover:bg-accent-secondary shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Unduh CV' : 'Download CV'}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg border border-surface-border bg-bg-secondary text-fg-primary"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-bg-primary/95 backdrop-blur-xl border-b border-surface-border mt-3 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-fg-primary hover:bg-bg-secondary transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent-primary font-bold">
                    {link.number}.
                  </span>
                  <span>{link.label[language]}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-fg-muted" />
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-surface-border flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.cvUrl}
              download="CV_Reny_Ambarwati.pdf"
              onClick={() => {
                handleDownloadCv();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-lg bg-accent-primary text-white shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'id' ? 'Unduh CV (PDF)' : 'Download CV (PDF)'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

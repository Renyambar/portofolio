import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { NAV_LINKS } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-md border-b border-surface-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Pojok kiri kosong (sesuai request user: pojok kiri kosong gapapa) */}
          <div className="hidden md:block w-8" aria-hidden="true" />

          {/* Navigasi di tengah presisi */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-fg-secondary hover:text-accent-primary transition-colors font-medium"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>

          {/* Kanan: Language, Theme, dan Pill Button 'Let's talk ↗' */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md border border-surface-border bg-bg-card hover:border-fg-secondary text-fg-primary transition-colors"
              title={language === 'id' ? 'Switch to English' : 'Ubah ke Bahasa Indonesia'}
              aria-label="Switch Language"
            >
              <span className={language === 'id' ? 'font-bold text-accent-primary' : 'text-fg-muted'}>
                ID
              </span>
              <span className="text-fg-muted mx-1">/</span>
              <span className={language === 'en' ? 'font-bold text-accent-primary' : 'text-fg-muted'}>
                EN
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-surface-border bg-bg-card hover:border-fg-secondary text-fg-primary transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-fg-secondary" />
              )}
            </button>

            {/* Pill Button: Let's talk ↗ */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent-primary hover:bg-accent-hover text-white text-xs font-mono font-medium transition-all hover:scale-105 shadow-sm"
            >
              <span>{language === 'id' ? 'Diskusi' : "Let's talk"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded border border-surface-border bg-bg-card text-fg-primary"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-border bg-bg-card px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-sm font-mono uppercase tracking-wider text-fg-primary hover:bg-bg-secondary transition-colors"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-surface-border">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-accent-primary text-white text-xs font-mono font-medium"
            >
              <span>{language === 'id' ? 'Mulai Diskusi' : "Let's talk"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

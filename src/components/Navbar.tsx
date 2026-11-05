import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-sm border-b border-surface-border transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Kiri: minipaoo. */}
          <a
            href="#"
            className="font-serif text-2xl font-bold tracking-tight text-fg-primary hover:text-accent-primary transition-colors"
          >
            {PERSONAL_INFO.brand}
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-fg-secondary hover:text-fg-primary transition-colors"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>

          {/* Right Controls: Language & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded border border-surface-border bg-bg-card hover:border-fg-secondary text-fg-primary transition-colors"
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

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border border-surface-border bg-bg-card hover:border-fg-secondary text-fg-primary transition-colors"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-fg-secondary" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

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
        <div className="md:hidden border-t border-surface-border bg-bg-card px-4 pt-3 pb-5 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-fg-primary hover:bg-bg-secondary transition-colors"
            >
              {link.label[language]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: <T>(obj: { id: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('minipaoo_lang');
    if (saved === 'id' || saved === 'en') {
      return saved;
    }
    return 'id';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('minipaoo_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = <T,>(obj: { id: T; en: T }): T => {
    return obj[language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};


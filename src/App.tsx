import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-fg-primary antialiased selection:bg-accent-primary selection:text-white transition-colors duration-200 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <ContactFooterSection />
    </div>
  );
};

export default App;

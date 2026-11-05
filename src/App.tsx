import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BehindTheCodeSection } from './components/BehindTheCodeSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-fg-primary antialiased selection:bg-accent-primary selection:text-white transition-colors duration-200 overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <BehindTheCodeSection />
        <JourneySection />
      </main>
      <ContactSection />
    </div>
  );
};

export default App;

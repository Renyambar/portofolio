import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { VisionShowcase } from './components/VisionShowcase';
import { WorksSection } from './components/WorksSection';
import { BehindTheCodeSection } from './components/BehindTheCodeSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="relative min-h-screen bg-bg-primary text-fg-primary selection:bg-maroon-700 selection:text-cream-50 overflow-x-hidden font-sans">
        {/* Subtle background ambient editorial grid */}
        <div className="fixed inset-0 pointer-events-none editorial-grid z-0" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <MarqueeBanner />
            <VisionShowcase />
            <WorksSection />
            <BehindTheCodeSection />
            <JourneySection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

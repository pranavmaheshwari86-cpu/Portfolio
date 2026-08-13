import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#111111] text-[#F4F4F4] selection:bg-[#FF2A2A] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 1. Fullscreen Preloader Overlay */}
      {isPreloaderActive && (
        <Preloader onComplete={() => setIsPreloaderActive(false)} />
      )}

      {/* 2. Floating Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* 3. Main Portfolio Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* About Me Section */}
        <About />

        {/* Process Timeline ("How We Work") Section */}
        <ProcessTimeline />

        {/* Selected Work / Projects Section */}
        <Projects />
      </main>

      {/* 4. Luxury Footer */}
      <Footer />

      {/* 5. Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { GithubDashboard } from './sections/Github';
import { Achievements } from './sections/Achievements';
import { Services } from './sections/Services';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { CommandPalette } from './components/CommandPalette';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './types';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {/* Scroll indicator & Custom pointer */}
      <ScrollProgress />
      <CustomCursor />

      {/* Entry Loading Transition */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Body frame */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white dark:bg-[#020617] text-slate-800 dark:text-slate-100 transition-colors duration-300 relative selection:bg-blue-500/20"
        >
          {/* Header Sticky Bar */}
          <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

          {/* Core Modular Sections */}
          <main className="relative">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
            <GithubDashboard />
            <Achievements />
            <Services />
            <Testimonials />
            <Contact />
          </main>

          {/* Footer block */}
          <Footer />

          {/* Keyboard-shortcut palette */}
          <CommandPalette
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
          />

          {/* Case study viewport */}
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

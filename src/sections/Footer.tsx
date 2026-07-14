import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white py-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright branding */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-display font-bold text-sm tracking-tight text-slate-200">
              Hassan Raza<span className="text-blue-500 font-mono">.</span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono">
              &copy; {currentYear} Hassan Raza. Engineered for remote excellence.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Right Section - Socials & Back To Top */}
          <div className="flex items-center gap-4">
            {/* Social icons row */}
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-blue-400 transition-all cursor-pointer"
                aria-label="LinkedIn Network"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top clicker */}
            <button
              onClick={handleScrollTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-950 transition-all cursor-pointer focus:outline-none"
              title="Scroll to summit"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

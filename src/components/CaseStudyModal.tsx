import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Cpu, ShieldCheck, HelpCircle, Lightbulb, Landmark } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Dark blurred background */}
        <motion.div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative w-full max-w-4xl bg-[#090f1e] border border-slate-850 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10 text-white"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Banner - Project Image & Overlay */}
          <div className="relative h-48 sm:h-64 md:h-72 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-[0.4]"
              referrerPolicy="no-referrer"
            />
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Block Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-[#090f1e] via-[#090f1e]/40 to-transparent flex flex-col items-start text-left gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/30 px-2.5 py-0.5 rounded-full font-bold">
                {project.category} Case Study
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
                {project.title}
              </h3>
              <p className="text-[#94a3b8] text-xs sm:text-sm font-light tracking-wide">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Content Scroll Container */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
            
            {/* Meta tags and External Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-850/60 text-left">
              <div className="flex flex-wrap gap-1.5 max-w-lg">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 hover:text-white bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg hover:border-slate-700 transition-colors cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-400 hover:text-blue-300 bg-blue-500/5 border border-blue-500/20 px-3 py-1.5 rounded-lg hover:border-blue-500/40 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Solution Double Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-400">
                  <HelpCircle className="w-4 h-4" />
                  <h4 className="font-display text-sm font-bold tracking-wider uppercase">The Problem</h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Lightbulb className="w-4 h-4" />
                  <h4 className="font-display text-sm font-bold tracking-wider uppercase">The Solution</h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture breakdown */}
            <div className="space-y-3.5 text-left border-t border-slate-850/60 pt-6">
              <div className="flex items-center gap-2 text-blue-400">
                <Cpu className="w-4 h-4" />
                <h4 className="font-display text-sm font-bold tracking-wider uppercase">System Architecture</h4>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                {project.architecture}
              </p>
            </div>

            {/* Grid for Key Features */}
            <div className="space-y-4 text-left border-t border-slate-850/60 pt-6">
              <div className="flex items-center gap-2 text-sky-400">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="font-display text-sm font-bold tracking-wider uppercase">Key Implementations</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="p-3 rounded-lg bg-slate-900/40 border border-slate-850 flex gap-2">
                    <span className="text-blue-500 shrink-0 font-mono text-xs">0{fIdx + 1}.</span>
                    <p className="text-slate-400 text-xs font-light leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges and Lessons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-slate-850/60 pt-6">
              <div className="space-y-3">
                <h4 className="font-display text-xs font-bold tracking-wider text-slate-500 uppercase">Engineering Challenges</h4>
                <p className="text-[#94a3b8] text-xs sm:text-sm font-light leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-xs font-bold tracking-wider text-slate-500 uppercase">Key Lessons Learned</h4>
                <p className="text-[#94a3b8] text-xs sm:text-sm font-light leading-relaxed">
                  {project.lessons}
                </p>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="border-t border-slate-850/60 bg-slate-950/40 p-4 shrink-0 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-medium text-xs transition-colors cursor-pointer focus:outline-none"
            >
              Close case study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

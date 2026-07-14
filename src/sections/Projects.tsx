import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { FEATURED_PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 bg-[#020617] text-white relative">
      {/* Divider line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold">04 / Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            A curated selection of robust repositories showing backend consistency, state modularity, and high-quality user interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col rounded-2xl border border-white/5 bg-[#0F172A]/20 backdrop-blur-sm hover:border-white/10 hover:bg-[#0F172A]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl overflow-hidden group text-left"
            >
              {/* Thumbnail image and overlay */}
              <div className="relative h-48 overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Visual hover overlay */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" />
                <span className="absolute top-4 left-4 text-[9px] font-mono font-bold tracking-wider uppercase bg-blue-500 text-white px-2.5 py-0.5 rounded-full">
                  {proj.category}
                </span>
              </div>

              {/* Card Body content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-slate-100 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light line-clamp-3 font-sans">
                    {proj.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions bottom row */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <button
                    id={`btn-case-${proj.id}`}
                    onClick={() => onSelectProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/btn focus:outline-none"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Read Case Study
                  </button>

                  <div className="flex items-center gap-3">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900/80 border border-white/5 text-slate-400 hover:text-slate-100 transition-all cursor-pointer"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900/80 border border-white/5 text-slate-400 hover:text-blue-400 transition-all cursor-pointer"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

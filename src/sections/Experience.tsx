import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#020617] text-white relative">
      {/* Divider line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Experience Left - Focus Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6 text-left lg:sticky lg:top-24">
            <div className="space-y-2">
              <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold">02 / Journey</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
                Professional <br />
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Tenures & Milestones</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Collaborating across diverse teams and client constraints, I focus on engineering atomic database queries, rapid API integrations, and modern UI performance.
            </p>
            <div className="p-4 rounded-xl border border-white/5 bg-slate-900/30 flex items-center gap-3 w-full">
              <Briefcase className="w-5 h-5 text-blue-500 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-200">Active Career Scope</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">MERN Developer / Engineer</div>
              </div>
            </div>

            {/* Academic Credentials Card */}
            <div className="p-5 rounded-2xl border border-white/5 bg-[#0F172A]/20 backdrop-blur-sm flex flex-col gap-3.5 w-full text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-white/5 font-display font-black text-xs shrink-0">
                  IBA
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Sukkur IBA University</div>
                  <div className="text-[10px] text-slate-500 font-mono">Aug 2022 - May 2026</div>
                </div>
              </div>
              <div className="space-y-1.5 border-t border-white/5 pt-3">
                <div className="text-xs font-semibold text-slate-300">Bachelor of Science in Computer Science</div>
                <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                  <strong>Coursework:</strong> Data Structures & Algorithms, Database Systems, Web Engineering, Software Engineering, Computer Networks, Operating Systems
                </p>
              </div>
            </div>
          </div>

          {/* Experience Right - Vertical Timeline */}
          <div className="lg:col-span-8 relative">
            {/* The vertical connector line */}
            <div className="absolute left-3.5 sm:left-6 top-2 bottom-2 w-[1px] bg-slate-900" />

            <div className="flex flex-col gap-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={exp.id} className="relative pl-10 sm:pl-16 text-left group">
                  {/* Timeline bullet node */}
                  <div className="absolute left-0 sm:left-2.5 top-1 w-7 h-7 rounded-full bg-slate-950 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-blue-500 group-hover:scale-105 shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-sky-400 transition-colors" />
                  </div>

                  {/* Header info */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg md:text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      {/* Period tag */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-white/5 text-slate-300">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400 font-light">
                      <span className="font-semibold text-slate-300">{exp.company}</span>
                      <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-700" />
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements bullet list */}
                  <div className="mt-5 space-y-3.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                          {ach}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technical badges used */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-white/5 text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

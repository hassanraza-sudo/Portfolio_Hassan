import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Database, Terminal, Settings } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

export const Skills: React.FC = () => {
  // Map category title to appropriate visual icon
  const getCategoryIcon = (title: string) => {
    if (title.toLowerCase().includes('frontend')) return <Layout className="w-4 h-4 text-blue-400" />;
    if (title.toLowerCase().includes('backend')) return <Server className="w-4 h-4 text-sky-400" />;
    if (title.toLowerCase().includes('database')) return <Database className="w-4 h-4 text-teal-400" />;
    if (title.toLowerCase().includes('tools')) return <Settings className="w-4 h-4 text-indigo-400" />;
    return <Terminal className="w-4 h-4 text-purple-400" />;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
      case 'Advanced':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
      case 'Intermediate':
        return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400';
      default:
        return 'bg-slate-500/10 border-slate-500/30 text-slate-400';
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#020617] text-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold">03 / Capability</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Stack & <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            A comprehensive overview of the technologies, tools, and paradigms I utilize to engineer high-performance web systems.
          </p>
        </div>

        {/* Grid of Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl border border-white/5 bg-[#0F172A]/20 backdrop-blur-sm hover:border-white/10 hover:bg-[#0F172A]/40 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-white/5 group-hover:scale-105 transition-transform duration-300">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-100 tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                <div className="h-[1px] bg-gradient-to-r from-white/5 to-transparent" />

                {/* Skill Nodes List */}
                <div className="flex flex-col gap-3 py-2">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-300 group-hover:text-slate-200 transition-colors">
                        {skill.name}
                      </span>
                      {/* Skill Level Badge */}
                      <span className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small Category Metric footer */}
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>Modules Listed</span>
                <span>{cat.skills.length} skills</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

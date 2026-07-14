import React from 'react';
import { motion } from 'motion/react';
import { Award, Code2, FolderGit2, History } from 'lucide-react';
import { STATISTICS } from '../constants';

export const Achievements: React.FC = () => {
  // Map index to supportive icons
  const getStatIcon = (id: string) => {
    if (id === '1') return <Code2 className="w-5 h-5 text-blue-400" />;
    if (id === '2') return <FolderGit2 className="w-5 h-5 text-sky-400" />;
    if (id === '3') return <Award className="w-5 h-5 text-teal-400" />;
    return <History className="w-5 h-5 text-indigo-400" />;
  };

  return (
    <section className="py-20 bg-[#020617] text-white relative">
      {/* Decorative divider line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTICS.map((stat, idx) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl border border-white/5 bg-[#0F172A]/20 backdrop-blur-sm hover:border-white/10 hover:bg-[#0F172A]/40 transition-all duration-300 flex flex-col items-start gap-4 text-left group"
            >
              {/* Stat Icon Frame */}
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 group-hover:scale-105 transition-transform duration-300 shrink-0">
                {getStatIcon(stat.id)}
              </div>

              {/* Number and Label */}
              <div className="space-y-1">
                <div className="font-display text-4xl font-extrabold text-slate-100 group-hover:text-blue-400 transition-colors duration-200">
                  {stat.value}
                  <span className="text-blue-500 font-light">{stat.suffix}</span>
                </div>
                <h3 className="text-xs font-bold font-mono tracking-wider text-slate-300 uppercase">
                  {stat.label}
                </h3>
                <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

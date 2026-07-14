import React from 'react';
import { motion } from 'motion/react';
import { Database, Layout, Cpu, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  // Map constant iconName to Lucide icons
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      default:
        return <Zap className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#020617] text-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold">06 / Scope</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Client Offerings & <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Professional Services</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            Providing modular, robust engineering and performance audits to help clients scale their applications smoothly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0F172A]/20 backdrop-blur-sm hover:border-white/10 hover:bg-[#0F172A]/40 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 text-left group"
            >
              {/* Service Icon Container */}
              <div className="p-3 rounded-xl bg-slate-900 border border-white/5 group-hover:scale-105 transition-transform duration-300 shrink-0">
                {getServiceIcon(serv.iconName)}
              </div>

              {/* Service Description copy */}
              <div className="space-y-2">
                <h3 className="font-display text-base font-bold text-slate-150 tracking-tight">
                  {serv.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  {serv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

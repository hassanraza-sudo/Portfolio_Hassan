import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#020617] text-white relative">
      {/* Divider line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold">07 / Validation</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Client Reviews & <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Endorsements</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed font-light">
            Genuine assessments from independent technical contracts alongside active project pipelines.
          </p>
        </div>

        {/* Double Card row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {/* Authentic Testimonial */}
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0F172A]/20 backdrop-blur-sm relative flex flex-col justify-between gap-6 hover:border-white/10 transition-colors group"
            >
              {/* Decorative quotation icon */}
              <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-800/40 group-hover:text-blue-500/10 transition-colors" />

              <div className="space-y-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 w-fit text-blue-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed italic relative z-10 font-sans">
                  "{test.quote}"
                </p>
              </div>

              {/* Author profile row */}
              <div className="flex flex-col border-t border-white/5 pt-4 mt-2">
                <span className="text-xs font-bold text-slate-200">{test.author}</span>
                <span className="text-[10px] font-mono text-slate-500 mt-0.5">{test.role} &bull; {test.company}</span>
              </div>
            </div>
          ))}

          {/* Elegant Placeholder Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-dashed border-white/10 bg-slate-950/20 flex flex-col justify-center items-center text-center p-8 gap-4 min-h-[220px]">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-sm font-bold text-slate-400">Client Feedback Coming Soon</h3>
              <p className="text-slate-500 text-xs font-light max-w-xs leading-relaxed">
                Actively delivering full-stack products for remote contract clients. Reviews will be appended here once finalized.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Server, Layout, Brain, Shield, Rocket } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: <Server className="w-5 h-5 text-blue-400" />,
      title: 'Backend Engineering',
      desc: 'Architecting secure APIs with robust controllers, JSON Web Tokens (JWT), and efficient indexing protocols for sub-100ms response latencies.'
    },
    {
      icon: <Layout className="w-5 h-5 text-sky-400" />,
      title: 'Frontend Craftsmanship',
      desc: 'Creating highly interactive, modular React components styled with clean responsive grids, seamless motion state transitions, and high readability.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
      title: 'Performance Optimization',
      desc: 'Ensuring 95+ performance profiles by bundling assets, throttling network calls, writing atomic operations, and optimizing rendering streams.'
    },
    {
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      title: 'AI & Future Tech',
      desc: 'Actively exploring artificial intelligence models, agentic integrations, prompt design, and prompt-based software creation workflows.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#020617] text-white relative">
      {/* Subtle top divider gradient line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* About Left - Story Telling */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6 text-left">
            <div className="space-y-2">
              <span className="font-mono text-xs text-blue-500 uppercase tracking-widest font-semibold">01 / Biography</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
                Engineering Solutions, <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Not Just Code</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed font-light">
              <p>
                Hello! I am <strong className="text-slate-200 font-medium">Hassan Raza</strong>, a software engineer holding a BS in Computer Science. I specialize in building complete, high-performance web products that live on the MERN stack.
              </p>
              <p>
                My approach to software is defined by <strong className="text-slate-200 font-medium">high agency and meticulous attention to detail</strong>. I don't just assemble frameworks—I analyze the system's runtime architecture, database layouts, and UX friction points to ensure the final product operates smoothly.
              </p>
              <p>
                Whether it's building safe digital transaction engines like <strong className="text-slate-200 font-medium">Cafe E-Wallet</strong> or designing detailed pathway maps in <strong className="text-slate-200 font-medium">StudienRoute</strong>, I prioritize structural elegance and bulletproof data consistency. I'm constantly learning, keeping myself aligned with high-velocity teams like Vercel and Stripe.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-100 font-display">BS CS</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-1">Computer Science Degree</span>
              </div>
              <div className="h-8 w-[1px] bg-white/5" />
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-100 font-display">MERN</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mt-1">Primary Tech Stack</span>
              </div>
            </div>
          </div>

          {/* About Right - Value Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/5 bg-[#0F172A]/30 backdrop-blur-sm hover:border-white/10 hover:bg-[#0F172A]/50 transition-all duration-300 flex flex-col gap-4 text-left group"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 w-fit group-hover:scale-105 transition-transform duration-300">
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-sm font-bold text-slate-100">{val.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{val.desc}</p>
                </div>
              </div>
            ))}

            {/* Quote Bento Card */}
            <div className="sm:col-span-2 p-6 rounded-2xl border border-dashed border-white/10 bg-slate-950/20 text-left flex flex-col justify-center items-start gap-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-blue-400 font-bold">Philosophical Directive</span>
              </div>
              <p className="text-[#94a3b8] italic text-xs md:text-sm font-light leading-relaxed">
                "Great products are not measured by the volume of features, but by the seamless quality of their core workflows. Elegant design and strong, simple engineering build trust."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

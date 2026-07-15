import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer (MERN)",
    "Backend API Architect",
    "Frontend Craftsman",
    "BS Computer Science Graduate",
  ];

  const typingSpeed = isDeleting ? 40 : 80;
  const wordPause = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting && charIndex < currentRole.length) {
        // Typing characters
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting characters
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Full word typed, pause before deleting
        timer = setTimeout(() => setIsDeleting(true), wordPause);
        return;
      } else if (isDeleting && charIndex === 0) {
        // Word fully deleted, move to next word
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#020617] text-white bg-grid"
    >
      {/* Background ambient glowing lights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-sky-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left - Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3.5 py-1 text-[10px] font-mono font-semibold text-blue-400 tracking-wider uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {PERSONAL_INFO.availability}
            </motion.div>

            {/* Large Name and Role */}
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-semibold"
              >
                00 // INTRODUCING THE ARCHITECT
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.0] lg:leading-[0.9]"
              >
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-slate-100">
                  Scalable
                </span>
                <br />
                Modern Systems.
              </motion.h1>

              {/* Dynamic Subheading / Typing Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-mono text-xs text-blue-400 font-medium h-8 flex items-center"
              >
                <Terminal className="w-3.5 h-3.5 mr-2 text-blue-500/80" />
                <span>Engine target: </span>
                <span className="ml-1.5 text-slate-200">{typedText}</span>
                <span className="animate-pulse ml-0.5 text-blue-500 font-bold">
                  |
                </span>
              </motion.div>
            </div>

            {/* Static Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg font-light italic"
            >
              Full Stack Architect specialized in the MERN ecosystem. Crafting
              production-ready software for high-growth startups and global
              enterprises.
            </motion.p>

            {/* Inline Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-6"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold">04+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                  Years Crafting
                </span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold">50+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                  Global Commits
                </span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-blue-400">
                  Vercel
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium font-mono">
                  Targeting
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full mt-2"
            >
              <button
                onClick={scrollToProjects}
                className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-slate-50 font-medium text-xs transition-all duration-200 cursor-pointer shadow-lg shadow-blue-500/20 flex items-center gap-2 group"
              >
                View Selected Projects
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 text-slate-200 font-medium text-xs transition-all duration-200 cursor-pointer flex items-center gap-2 group"
              >
                Hire Me
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200" />
              </button>
            </motion.div>

            {/* Dual mini-features matching the design */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-2 gap-4 max-w-md w-full pt-2"
            >
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm text-left">
                <div className="text-blue-400 mb-1.5 text-xs font-semibold">
                  ⚡️ Performance First
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  Optimized architecture ensuring &lt;100ms TBT and perfect Core
                  Web Vitals.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm text-left">
                <div className="text-cyan-400 mb-1.5 text-xs font-semibold">
                  🛡 Secure Design
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed">
                  JWT, OAuth, and bcrypt integration for industrial-grade data
                  protection.
                </p>
              </div>
            </motion.div>

            {/* Social Anchor Rails */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4 mt-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-950 border border-white/5 text-slate-400 hover:text-slate-100 transition-all cursor-pointer"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-950 border border-white/5 text-slate-400 hover:text-blue-400 transition-all cursor-pointer"
                title="LinkedIn Network"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-950 border border-white/5 text-slate-400 hover:text-teal-400 transition-all cursor-pointer"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Right - Photo Frame with Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] group"
            >
              {/* Outer decorative pulsing glowing circles */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 to-sky-400 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500 -z-10" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 to-sky-400 opacity-10 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

              {/* Main Image Frame */}
              <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900 group-hover:border-blue-500/60 transition-colors duration-300 shadow-2xl relative">
                <img
                  src="/images/hassan_profile_1784039210757.jpeg"
                  alt="Hassan Raza"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
                {/* Image overlay shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1 - MERN Developer */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#020617]/90 border border-white/5 backdrop-blur-md rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl select-none"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="p-1 rounded-lg bg-blue-500/20 text-blue-400">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                    MERN stack
                  </div>
                  <div className="font-display text-[11px] font-bold text-slate-200">
                    Expertise
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - High Agency */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-[#020617]/90 border border-white/5 backdrop-blur-md rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl select-none"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="p-1 rounded-lg bg-sky-500/20 text-sky-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                    Problem
                  </div>
                  <div className="font-display text-[11px] font-bold text-slate-200">
                    Solver
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Chevron Down Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce cursor-pointer z-10"
        onClick={scrollToProjects}
      >
        <span className="font-mono text-[9px] uppercase tracking-wider block mb-1">
          Scroll
        </span>
        <svg
          className="w-4 h-4 mx-auto text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

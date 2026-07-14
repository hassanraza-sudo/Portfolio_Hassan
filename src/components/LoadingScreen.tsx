import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300); // Small delay for smooth exit
          return 100;
        }
        // Rapid random progression to feel fast and organic
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#020617] flex flex-col justify-between p-8 md:p-16 z-[9999] select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-xs text-blue-500 tracking-widest uppercase font-semibold"
        >
          Hassan Raza &copy; 2026
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs text-[#94a3b8]"
        >
          Full Stack Ecosystem
        </motion.div>
      </div>

      {/* Middle Section - Centered elegant branding */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center"
        >
          <h1 className="font-display text-4xl md:text-6xl text-[#f8fafc] font-bold tracking-tight">
            HASSAN RAZA
          </h1>
          <p className="text-[#94a3b8] text-sm md:text-base mt-2 font-light tracking-wide max-w-sm mx-auto">
            Interactive Portfolio & Project Showcases
          </p>
        </motion.div>
      </div>

      {/* Bottom Section - Progress */}
      <div className="flex flex-col md:flex-row justify-between items-end w-full gap-4">
        <div className="w-full md:max-w-xs flex flex-col gap-2">
          <div className="flex justify-between items-baseline">
            <span className="font-mono text-xs text-[#94a3b8]">Initializing</span>
            <span className="font-mono text-sm font-semibold text-blue-400">{progress}%</span>
          </div>
          {/* Custom slim bar */}
          <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-sky-400"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs text-[#94a3b8] hidden md:block"
        >
          Empowering digital platforms through code.
        </motion.div>
      </div>
    </motion.div>
  );
};

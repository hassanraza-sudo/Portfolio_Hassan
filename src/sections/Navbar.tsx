import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Search, Command } from 'lucide-react';
import { useTheme } from '../components/ThemeContext';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-slate-950 font-sans font-bold text-xs italic tracking-tighter shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200">
            HR
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 blur-sm -z-10 opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>
          <span className="font-display font-semibold text-base text-slate-100 tracking-tight transition-colors duration-200">
            Hassan Raza
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer relative py-1.5 focus:outline-none group"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-white/5" />

          {/* Search Trigger */}
          <button
            id="command-palette-trigger"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <Search className="w-3 h-3 text-slate-500" />
            <span>Search</span>
            <span className="flex items-center gap-0.5 text-[8px] font-mono opacity-50 bg-slate-900 px-1 py-0.5 rounded border border-white/5">
              <Command className="w-2 h-2 inline" />K
            </span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-slate-150 hover:border-white/20 transition-all duration-200 cursor-pointer focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-yellow-400" /> : <Moon className="w-3.5 h-3.5 text-slate-300" />}
          </button>

          {/* Hire Me / Action button */}
          <button
            onClick={() => handleLinkClick('#contact')}
            className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          {/* Mobile Search */}
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-400 cursor-pointer focus:outline-none"
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-400 cursor-pointer focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-yellow-400" /> : <Moon className="w-3.5 h-3.5 text-slate-300" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-[#020617]/95 backdrop-blur-md border-b border-white/5 p-4 flex flex-col gap-2.5 shadow-xl transition-all duration-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-left py-2.5 px-4 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/5 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

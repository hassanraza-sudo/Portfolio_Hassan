import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { 
  Search, 
  ArrowRight, 
  Folder, 
  Briefcase, 
  Wrench, 
  Mail, 
  Moon, 
  Sun, 
  User, 
  Github, 
  Linkedin, 
  FileText,
  Sparkles,
  Command
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../constants';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PaletteItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'navigation' | 'projects' | 'actions' | 'socials';
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Define commands list
  const getCommands = (): PaletteItem[] => {
    const navCommands: PaletteItem[] = [
      {
        id: 'nav-about',
        title: 'About Me',
        subtitle: 'Learn more about Hassan\'s philosophy',
        category: 'navigation',
        icon: <User className="w-4 h-4" />,
        action: () => { scrollToSection('about'); onClose(); }
      },
      {
        id: 'nav-experience',
        title: 'Experience Timeline',
        subtitle: 'View professional journey and internships',
        category: 'navigation',
        icon: <Briefcase className="w-4 h-4" />,
        action: () => { scrollToSection('experience'); onClose(); }
      },
      {
        id: 'nav-skills',
        title: 'Skills & Tech Stack',
        subtitle: 'Browse languages, libraries and frameworks',
        category: 'navigation',
        icon: <Wrench className="w-4 h-4" />,
        action: () => { scrollToSection('skills'); onClose(); }
      },
      {
        id: 'nav-projects',
        title: 'Featured Projects',
        subtitle: 'Review production-ready repositories',
        category: 'navigation',
        icon: <Folder className="w-4 h-4" />,
        action: () => { scrollToSection('projects'); onClose(); }
      },
      {
        id: 'nav-services',
        title: 'Services Offered',
        subtitle: 'Discover full stack development offers',
        category: 'navigation',
        icon: <Sparkles className="w-4 h-4" />,
        action: () => { scrollToSection('services'); onClose(); }
      },
      {
        id: 'nav-contact',
        title: 'Contact Hassan',
        subtitle: 'Send a direct inquiry / email',
        category: 'navigation',
        icon: <Mail className="w-4 h-4" />,
        action: () => { scrollToSection('contact'); onClose(); }
      }
    ];

    const projectCommands: PaletteItem[] = FEATURED_PROJECTS.map(proj => ({
      id: `proj-${proj.id}`,
      title: proj.title,
      subtitle: proj.subtitle,
      category: 'projects',
      icon: <Folder className="w-4 h-4 text-blue-400" />,
      action: () => {
        scrollToSection('projects');
        // Give a short timeout for scroll to finish, then find the project and trigger detailed view
        setTimeout(() => {
          const btn = document.getElementById(`btn-case-${proj.id}`);
          if (btn) btn.click();
        }, 500);
        onClose();
      }
    }));

    const actionCommands: PaletteItem[] = [
      {
        id: 'action-theme',
        title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
        subtitle: 'Toggle global color palette',
        category: 'actions',
        icon: theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
        action: () => { toggleTheme(); onClose(); }
      },
      {
        id: 'action-resume',
        title: 'Download Resume',
        subtitle: 'Open structured PDF profile',
        category: 'actions',
        icon: <FileText className="w-4 h-4 text-emerald-400" />,
        action: () => {
          window.open('https://linkedin.com/in/hassanraza-cs', '_blank');
          onClose();
        }
      }
    ];

    const socialCommands: PaletteItem[] = [
      {
        id: 'social-github',
        title: 'GitHub Profile',
        subtitle: '@hassanraza-sudo',
        category: 'socials',
        icon: <Github className="w-4 h-4" />,
        action: () => { window.open('https://github.com/hassanraza-sudo', '_blank'); onClose(); }
      },
      {
        id: 'social-linkedin',
        title: 'LinkedIn Network',
        subtitle: '/in/hassanraza-cs',
        category: 'socials',
        icon: <Linkedin className="w-4 h-4 text-blue-500" />,
        action: () => { window.open('https://linkedin.com/in/hassanraza-cs', '_blank'); onClose(); }
      }
    ];

    return [...navCommands, ...projectCommands, ...actionCommands, ...socialCommands];
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const commands = getCommands();

  // Filter commands by search string
  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(0);
      setSearch('');
    }
  }, [isOpen]);

  // Handle global keydown to open palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // Call to reset / toggle
        const toggleBtn = document.getElementById('command-palette-trigger');
        if (toggleBtn) toggleBtn.click();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle keys when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Reset selected index if search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Helper to group commands
  const categories = {
    navigation: 'Navigation',
    projects: 'Featured Projects',
    actions: 'System Actions',
    socials: 'External Channels'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-start justify-center pt-[10vh] px-4 z-50 pointer-events-none">
            <motion.div
              ref={containerRef}
              className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[70vh]"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Input field */}
              <div className="flex items-center gap-3 px-4 border-b border-slate-800 py-3.5">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search portfolio..."
                  className="w-full bg-transparent border-0 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-0 text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-950 border border-slate-800 px-1.5 py-0.5 rounded">
                  ESC
                </kbd>
              </div>

              {/* Items List */}
              <div className="overflow-y-auto flex-grow py-2">
                {filteredCommands.length === 0 ? (
                  <div className="text-center py-10 text-slate-500 text-sm">
                    No results found for "<span className="text-slate-300 font-medium">{search}</span>"
                  </div>
                ) : (
                  Object.entries(categories).map(([catKey, catLabel]) => {
                    const catItems = filteredCommands.filter(item => item.category === catKey);
                    if (catItems.length === 0) return null;

                    return (
                      <div key={catKey} className="px-2 mb-2">
                        <div className="text-[10px] font-mono text-slate-500 px-3 py-1 uppercase tracking-wider font-semibold">
                          {catLabel}
                        </div>
                        <div className="flex flex-col gap-0.5 mt-1">
                          {catItems.map((item) => {
                            // Find absolute index in the filtered array
                            const absIndex = filteredCommands.findIndex(fc => fc.id === item.id);
                            const isSelected = absIndex === selectedIndex;

                            return (
                              <button
                                key={item.id}
                                className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-lg transition-colors duration-150 group cursor-pointer ${
                                  isSelected 
                                    ? 'bg-blue-600 text-white' 
                                    : 'hover:bg-slate-800 text-slate-300'
                                }`}
                                onClick={item.action}
                                onMouseEnter={() => setSelectedIndex(absIndex)}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`p-1.5 rounded-md ${
                                    isSelected ? 'bg-blue-500/50 text-white' : 'bg-slate-950 text-slate-400 group-hover:text-slate-200'
                                  }`}>
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="text-xs font-medium">{item.title}</div>
                                    <div className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                                      {item.subtitle}
                                    </div>
                                  </div>
                                </div>
                                {isSelected && (
                                  <ArrowRight className="w-3.5 h-3.5 text-blue-200 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Command Palette Footer */}
              <div className="border-t border-slate-800 bg-slate-950/50 p-2.5 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <Command className="w-3 h-3" />
                  <span>Hassan's Assistant</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="bg-slate-900 border border-slate-800 px-1 rounded">↑↓</kbd> Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-slate-900 border border-slate-800 px-1 rounded">Enter</kbd> Select
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

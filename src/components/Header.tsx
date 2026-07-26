import React from 'react';
import { Sparkles, Search, Moon, Sun, Menu, X, Wand2, Command, HelpCircle } from 'lucide-react';
import { CategoryId } from '../types';
import { motion } from 'motion/react';

interface HeaderProps {
  currentSlug: string | null;
  onNavigateHome: () => void;
  onNavigateCategory: (catId: CategoryId) => void;
  onNavigateTool: (slug: string) => void;
  onNavigateFaq: () => void;
  onOpenSearch: () => void;
  onOpenFavorites: () => void;
  onOpenAboutModal: () => void;
  favoritesCount: number;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlug,
  onNavigateHome,
  onNavigateCategory,
  onNavigateTool,
  onNavigateFaq,
  onOpenSearch,
  onOpenFavorites,
  onOpenAboutModal,
  favoritesCount,
  darkMode,
  onToggleDarkMode,
  onToggleSidebar,
  isSidebarOpen
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0B0F19]/90 backdrop-blur-md transition-colors text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Mobile Toggle & Brand Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onToggleSidebar}
            className="p-2 rounded-xl text-slate-400 hover:bg-slate-800 lg:hidden transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onNavigateHome}
            className="flex items-center gap-2 group transition-transform cursor-pointer"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg shadow-lg shadow-pink-500/30 border border-white/20 overflow-hidden">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <Sparkles className="h-5 w-5 fill-white/20 relative z-10" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white font-display hidden sm:inline">
              Fonti<span className="text-pink-400">Studio</span>
            </span>
          </motion.button>
        </div>

        {/* Center: Search Bar + FAQ Button Right Beside Search */}
        <div className="flex-1 max-w-sm lg:max-w-md mx-1 sm:mx-2 flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={onOpenSearch}
            className="flex-1 flex items-center justify-between gap-2 px-3 sm:px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-pink-500/60 text-slate-300 hover:text-white shadow-lg shadow-black/20 transition-all group relative overflow-hidden text-left cursor-pointer"
            title="Search fonts and unicode tools (Ctrl + K)"
          >
            <div className="flex items-center gap-2 min-w-0">
              <Search className="h-4 w-4 text-pink-400 group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-400 group-hover:text-slate-200 truncate">
                Search 100+ fonts & tools...
              </span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-400 bg-slate-800 border border-slate-700 rounded-lg shrink-0">
              <Command className="h-2.5 w-2.5" /> K
            </kbd>
          </motion.button>

          {/* FAQ Button directly near search bar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateFaq}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl font-extrabold text-xs transition-all border shrink-0 cursor-pointer ${
              currentSlug === 'faq'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-pink-400 shadow-md shadow-pink-500/30'
                : 'bg-slate-900/90 border-slate-700/80 text-slate-300 hover:text-white hover:border-pink-500/50 hover:bg-slate-800'
            }`}
            title="Frequently Asked Questions & SEO Guide"
          >
            <HelpCircle className="h-4 w-4 text-pink-400" />
            <span className="hidden xs:inline sm:inline">FAQ</span>
          </motion.button>
        </div>

        {/* Right Actions: Animated Moving Element + Shortcuts */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Fancy Moving Animation Element */}
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 10px rgba(236,72,153,0.2)', 
                '0 0 20px rgba(168,85,247,0.4)', 
                '0 0 10px rgba(236,72,153,0.2)'
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-indigo-500/15 border border-pink-500/40 text-pink-300 font-extrabold text-xs overflow-hidden select-none"
          >
            {/* Animated Background Shimmer Sweep */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent skew-x-12"
            />
            
            {/* Orbiting Sparkle Animation */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Wand2 className="h-3.5 w-3.5 text-pink-400 relative z-10" />
            </motion.div>
            
            <span className="relative z-10 font-bold tracking-wider text-[11px] bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              PRO STUDIO
            </span>

            {/* Glowing Pulse Dot */}
            <span className="relative flex h-2 w-2 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
          </motion.div>
        </div>

      </div>
    </header>
  );
};


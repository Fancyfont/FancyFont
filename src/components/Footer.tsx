import React from 'react';
import { CATEGORIES } from '../data/categoriesData';
import { Sparkles, Heart, ArrowUp, Github, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigateTool: (slug: string) => void;
  onNavigateCategory: (catId: string) => void;
  onNavigateHome: () => void;
  onNavigateFaq?: () => void;
  onOpenAboutModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTool,
  onNavigateCategory,
  onNavigateHome,
  onNavigateFaq,
  onOpenAboutModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800 bg-[#0B0F19] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white font-black text-xl shadow-lg font-display">
              U
            </div>
            <div>
              <span className="text-xl font-extrabold text-white font-display tracking-tight">
                Fonti<span className="text-indigo-400">Studio</span>
              </span>
              <p className="text-xs text-slate-500">
                Generate Beautiful Unicode Fonts & Symbols Instantly
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            {onNavigateFaq && (
              <button onClick={onNavigateFaq} className="hover:text-pink-400 transition-colors font-bold text-pink-300 cursor-pointer">
                FAQ Page
              </button>
            )}
            <button onClick={onOpenAboutModal} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={onOpenAboutModal} className="hover:text-white transition-colors cursor-pointer">
              Terms
            </button>
            <button onClick={onOpenAboutModal} className="hover:text-white transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a href="#" onClick={(e) => e.preventDefault()} className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2 transition-all shadow-md"
          >
            <ArrowUp className="h-4 w-4 text-indigo-400" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Fonti Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> for creators worldwide.
          </p>
        </div>

      </div>
    </footer>
  );
};

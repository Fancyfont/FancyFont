import React from 'react';
import { X, Sparkles, Mail, ShieldCheck, Heart, Github, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg overflow-hidden rounded-3xl bg-[#0D111D] border border-slate-800 shadow-2xl space-y-6 p-6 sm:p-8 text-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white font-black text-xl font-display shadow-md">
                  U
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white font-display">About Fonti Studio</h3>
                  <p className="text-xs text-slate-400">All-in-One Unicode & Fancy Font Suite</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                <strong>Fonti Studio</strong> is a 100% free web-based Unicode text transformer and font generator. Convert plain text into stylish fonts, mathematical alphanumerics, aesthetic symbols, and Japanese kaomojis in real-time.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                  <div className="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" /> 100% Client-Side
                  </div>
                  <p className="text-[11px] text-slate-400">Your text is transformed locally in your browser without tracking.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                  <div className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" /> 60 Free Tools
                  </div>
                  <p className="text-[11px] text-slate-400">Full suite of Unicode font styles, kaomojis, case converters & counters.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                  <Mail className="h-4 w-4" /> Contact & Feedback
                </h4>
                <p className="text-xs text-slate-300">
                  Have questions, feature suggestions, or custom Unicode requests? Contact us at:
                  <span className="block font-mono font-bold text-white pt-1">support@fontistudio.com</span>
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

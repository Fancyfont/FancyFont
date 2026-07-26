import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CopyToastProps {
  message: string | null;
  onClose: () => void;
  triggerConfetti?: boolean;
}

export const CopyToast: React.FC<CopyToastProps> = ({ message, onClose, triggerConfetti = false }) => {
  useEffect(() => {
    if (message) {
      if (triggerConfetti) {
        try {
          confetti({
            particleCount: 30,
            spread: 60,
            origin: { y: 0.85 },
            colors: ['#a855f7', '#ec4899', '#3b82f6']
          });
        } catch {
          // Fallback if canvas confetti fails
        }
      }

      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [message, onClose, triggerConfetti]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900/90 text-white dark:bg-white/90 dark:text-slate-900 shadow-2xl backdrop-blur-md border border-slate-700/50 dark:border-slate-200/50"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 dark:bg-emerald-500/30 dark:text-emerald-600">
            <Check className="h-4 w-4 stroke-[3]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Copied to Clipboard!</span>
            <span className="text-sm font-medium font-mono truncate max-w-[240px] text-slate-100 dark:text-slate-900">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

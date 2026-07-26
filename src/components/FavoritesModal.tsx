import React from 'react';
import { FavoriteItem } from '../types';
import { Copy, Trash2, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: FavoriteItem[];
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
  onCopy: (text: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearAll,
  onCopy
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-lg font-display">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                <span>Saved Favorites ({favorites.length})</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* List */}
            <div className="max-h-[360px] overflow-y-auto space-y-3">
              {favorites.length > 0 ? (
                favorites.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3"
                  >
                    <span className="font-mono text-base font-bold text-slate-900 dark:text-white truncate">
                      {item.content}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => onCopy(item.content)}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1"
                      >
                        <Copy className="h-3.5 w-3.5" /> Copy
                      </button>
                      <button
                        onClick={() => onRemoveFavorite(item.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500"
                        title="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-slate-400">
                  <Star className="h-10 w-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
                  <p className="text-sm font-medium">No saved favorites yet</p>
                  <p className="text-xs mt-1">Star any font style, symbol, or kaomoji to save it here for quick access!</p>
                </div>
              )}
            </div>

            {/* Footer */}
            {favorites.length > 0 && (
              <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={onClearAll}
                  className="text-xs font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-1"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Clear All Favorites
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

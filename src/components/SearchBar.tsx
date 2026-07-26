import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Sparkles, ArrowRight, CornerDownLeft } from 'lucide-react';
import { TOOLS_DATA } from '../data/toolsData';
import { CATEGORIES } from '../data/categoriesData';
import { ToolDefinition } from '../types';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTool: (slug: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose, onSelectTool }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filteredTools = TOOLS_DATA.filter((tool) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.shortDesc.toLowerCase().includes(q) ||
      tool.keywords.some((kw) => kw.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredTools.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredTools.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredTools[selectedIndex]) {
        onSelectTool(filteredTools[selectedIndex].slug);
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const getCategoryName = (catId: string) => {
    return CATEGORIES.find((c) => c.id === catId)?.name || catId;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 border-b border-slate-200 dark:border-slate-800">
              <Search className="h-5 w-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search all 60 tools (e.g. Instagram, Hearts, Zalgo, Case)..."
                className="w-full py-4 text-base bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="px-2 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/50">
              {filteredTools.length > 0 ? (
                filteredTools.map((tool, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => {
                        onSelectTool(tool.slug);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full text-left p-3 rounded-xl flex items-center justify-between gap-3 transition-colors ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-900 dark:text-indigo-200'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-bold text-sm ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          #{tool.id}
                        </div>
                        <div className="truncate">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-slate-900 dark:text-white truncate">
                              {tool.name}
                            </span>
                            <span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300/40 dark:border-slate-700">
                              {getCategoryName(tool.category)}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {tool.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 shrink-0">
                        {isSelected && <CornerDownLeft className="h-4 w-4 text-indigo-500" />}
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                  <p className="text-base font-medium">No tool found matching "{query}"</p>
                  <p className="text-xs mt-1">Try searching for "font", "symbol", "kaomoji", or "counter"</p>
                </div>
              )}
            </div>

            {/* Footer indicator */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
              <span>Showing {filteredTools.length} of 60 tools</span>
              <span className="hidden sm:inline">Use ↑ ↓ to navigate, Enter to open</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

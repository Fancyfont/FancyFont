import React, { useState } from 'react';
import { ToolDefinition } from '../../types';
import { SYMBOL_GROUPS } from '../../data/symbolsData';
import { Copy, Trash2, Search, Check, Sparkles, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface SymbolToolProps {
  tool: ToolDefinition;
  onCopy: (text: string) => void;
}

export const SymbolTool: React.FC<SymbolToolProps> = ({ tool, onCopy }) => {
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroupId, setActiveGroupId] = useState<string | null>(
    SYMBOL_GROUPS.find((g) => g.toolSlug === tool.slug)?.id || null
  );

  const addSymbolToTray = (char: string) => {
    setSelectedSymbols((prev) => [...prev, char]);
  };

  const removeSymbolFromTray = (index: number) => {
    setSelectedSymbols((prev) => prev.filter((_, i) => i !== index));
  };

  const clearTray = () => setSelectedSymbols([]);

  const copyTrayText = () => {
    const text = selectedSymbols.join('');
    if (text) onCopy(text);
  };

  // Filter symbol groups
  const filteredGroups = SYMBOL_GROUPS.filter((group) => {
    if (activeGroupId && group.id !== activeGroupId) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Symbol Combination Builder Tray */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 sm:p-8 rounded-3xl bg-[#0D111D] border border-pink-500/30 shadow-2xl space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-pink-300 text-base">
            <Layers className="h-5 w-5 text-pink-400" />
            <span>Symbol Builder Tray ({selectedSymbols.length})</span>
          </div>
          {selectedSymbols.length > 0 && (
            <button
              onClick={clearTray}
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-bold transition-colors"
            >
              <Trash2 className="h-3.5 w-3.5" /> Clear All
            </button>
          )}
        </div>

        <div className="min-h-[60px] p-4 rounded-2xl bg-[#080B14] border border-slate-800 flex flex-wrap items-center gap-2 text-2xl font-mono">
          {selectedSymbols.length > 0 ? (
            selectedSymbols.map((char, index) => (
              <span
                key={index}
                onClick={() => removeSymbolFromTray(index)}
                className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-rose-950/80 hover:text-rose-400 cursor-pointer text-white transition-all border border-slate-700 hover:border-rose-500/40"
                title="Click to remove"
              >
                {char}
              </span>
            ))
          ) : (
            <span className="text-sm font-sans text-slate-500">
              Click any symbol below to add it to this combination tray...
            </span>
          )}
        </div>

        {selectedSymbols.length > 0 && (
          <div className="flex justify-end">
            <button
              onClick={copyTrayText}
              className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-pink-500/20 flex items-center gap-2 transition-all hover:scale-105"
            >
              <Copy className="h-4 w-4" />
              <span>Copy Combined String</span>
            </button>
          </div>
        )}
      </motion.div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveGroupId(null)}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold shrink-0 transition-all ${
            activeGroupId === null
              ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-xs'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Symbols
        </button>
        {SYMBOL_GROUPS.map((group) => (
          <button
            key={group.id}
            onClick={() => setActiveGroupId(group.id)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold shrink-0 transition-all ${
              activeGroupId === group.id
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-xs'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {group.name}
          </button>
        ))}
      </div>

      {/* Symbol Grids by Group */}
      <div className="space-y-8">
        {filteredGroups.map((group) => {
          const matchingSymbols = group.symbols.filter((s) => {
            if (!searchQuery) return true;
            return s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.char.includes(searchQuery);
          });

          if (matchingSymbols.length === 0) return null;

          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-3xl bg-[#0D111D] border border-slate-800/80 shadow-xl space-y-4"
            >
              <h3 className="text-base font-extrabold text-white font-display flex items-center gap-2 border-b border-slate-800/80 pb-3">
                <span>{group.name}</span>
                <span className="text-xs font-mono font-normal text-slate-400">({matchingSymbols.length})</span>
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {matchingSymbols.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      addSymbolToTray(item.char);
                      onCopy(item.char);
                    }}
                    className="p-3 rounded-2xl bg-[#080B14] border border-slate-800/80 hover:border-pink-500/60 hover:scale-105 active:scale-95 transition-all text-center group flex flex-col items-center justify-center gap-1 shadow-2xs"
                  >
                    <span className="text-2xl font-mono text-white group-hover:text-pink-300 transition-colors">
                      {item.char}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono truncate max-w-full group-hover:text-slate-300">
                      {item.codePoint || item.name}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ToolDefinition } from '../../types';
import { calculateTextStats } from '../../utils/textTransform';
import { Copy, RotateCcw, Clock, Hash, FileText, AlignJustify } from 'lucide-react';

interface TextCounterToolProps {
  tool: ToolDefinition;
  onCopy: (text: string) => void;
}

export const TextCounterTool: React.FC<TextCounterToolProps> = ({ tool, onCopy }) => {
  const [text, setText] = useState('Paste your text here to view real-time statistics, character counts, and estimated reading time.');

  const stats = calculateTextStats(text);

  // Character limit progress bar calculations
  const twitterLimit = 280;
  const twitterPercent = Math.min(100, Math.round((stats.characters / twitterLimit) * 100));

  const metaDescLimit = 160;
  const metaPercent = Math.min(100, Math.round((stats.characters / metaDescLimit) * 100));

  return (
    <div className="space-y-8">
      {/* Input Area */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-200">Text Counter Input:</label>
          <button
            onClick={() => setText('')}
            className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Clear
          </button>
        </div>

        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or start typing your text..."
          className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans text-base placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
        />
      </div>

      {/* Main Stats Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-2xs">
          <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 font-display">
            {stats.characters}
          </div>
          <div className="text-xs font-medium text-slate-500">Characters</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-2xs">
          <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 font-display">
            {stats.charactersNoSpaces}
          </div>
          <div className="text-xs font-medium text-slate-500">No Spaces</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-2xs">
          <div className="text-2xl font-extrabold text-pink-600 dark:text-pink-400 font-display">
            {stats.words}
          </div>
          <div className="text-xs font-medium text-slate-500">Words</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-2xs">
          <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-display">
            {stats.lines}
          </div>
          <div className="text-xs font-medium text-slate-500">Lines</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-2xs">
          <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 font-display">
            {stats.paragraphs}
          </div>
          <div className="text-xs font-medium text-slate-500">Paragraphs</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-2xs">
          <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-display">
            {stats.readingTimeFormatted}
          </div>
          <div className="text-xs font-medium text-slate-500">Reading Time</div>
        </div>
      </div>

      {/* Limit Progress Meters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>Twitter / X Tweet Limit (280 chars)</span>
            <span>{stats.characters} / 280</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className={`h-full transition-all ${
                twitterPercent > 100 ? 'bg-rose-500' : twitterPercent > 85 ? 'bg-amber-500' : 'bg-indigo-600'
              }`}
              style={{ width: `${twitterPercent}%` }}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>Google SEO Meta Description Limit (160 chars)</span>
            <span>{stats.characters} / 160</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className={`h-full transition-all ${
                metaPercent > 100 ? 'bg-rose-500' : metaPercent > 85 ? 'bg-amber-500' : 'bg-emerald-600'
              }`}
              style={{ width: `${metaPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

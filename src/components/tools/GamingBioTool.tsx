import React, { useState } from 'react';
import { ToolDefinition } from '../../types';
import { GAMING_PREFIXES, GAMING_SUFFIXES, GAMING_SYMBOLS_DECOR, BIO_TEMPLATES } from '../../data/gamingData';
import { Copy, RefreshCw, Gamepad2, Sparkles, Layout } from 'lucide-react';

interface GamingBioToolProps {
  tool: ToolDefinition;
  onCopy: (text: string) => void;
}

export const GamingBioTool: React.FC<GamingBioToolProps> = ({ tool, onCopy }) => {
  const [keyword, setKeyword] = useState('Shadow');

  if (tool.slug === 'bio-text-generator') {
    return (
      <div className="space-y-8">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
          Social Media Bio Formatting Templates
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BIO_TEMPLATES.map((tmpl, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                  {tmpl.title}
                </span>
                <pre className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans text-sm whitespace-pre-wrap leading-relaxed border border-slate-100 dark:border-slate-800/80">
                  {tmpl.template}
                </pre>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => onCopy(tmpl.template)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md flex items-center gap-1.5"
                >
                  <Copy className="h-3.5 w-3.5" /> Copy Bio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Generate Gaming / Nickname Ideas
  const generatedNames = GAMING_SYMBOLS_DECOR.map((decor) => {
    return `${decor.prefix} ${keyword || 'Hero'} ${decor.suffix}`;
  });

  return (
    <div className="space-y-8">
      {/* Input */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
          <Gamepad2 className="h-4 w-4 text-indigo-500" />
          Enter Base Name or Keyword:
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Type nickname or tag..."
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-bold text-lg outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
          <button
            onClick={() => {
              const randPrefix = GAMING_PREFIXES[Math.floor(Math.random() * GAMING_PREFIXES.length)];
              setKeyword(randPrefix);
            }}
            className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center gap-2 shrink-0 hover:bg-slate-200"
          >
            <RefreshCw className="h-4 w-4" /> Random
          </button>
        </div>
      </div>

      {/* Generated Ideas Grid */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
          Generated Gamertags & Nicknames ({generatedNames.length})
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {generatedNames.map((nameStr, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all flex items-center justify-between gap-3 shadow-2xs"
            >
              <span className="font-mono text-base font-bold text-slate-900 dark:text-white truncate">
                {nameStr}
              </span>
              <button
                onClick={() => onCopy(nameStr)}
                className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs flex items-center gap-1.5 shrink-0"
              >
                <Copy className="h-3.5 w-3.5" /> Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

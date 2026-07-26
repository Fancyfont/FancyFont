import React, { useState } from 'react';
import { ToolDefinition } from '../../types';
import {
  toUppercase,
  toLowercase,
  toTitleCase,
  toSentenceCase,
  toAlternatingCase,
  toSlugCase
} from '../../utils/textTransform';
import { Copy, RotateCcw, ArrowUp, ArrowDown, Type, Repeat, Shuffle } from 'lucide-react';

interface CaseConverterToolProps {
  tool: ToolDefinition;
  onCopy: (text: string) => void;
}

export const CaseConverterTool: React.FC<CaseConverterToolProps> = ({ tool, onCopy }) => {
  const [text, setText] = useState('Transform your text case in real-time with one click.');

  const handleConvert = (transformation: (t: string) => string) => {
    const result = transformation(text);
    setText(result);
  };

  return (
    <div className="space-y-6">
      {/* Text Area */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-200">Text Content:</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setText('')}
              className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Clear
            </button>
            <button
              onClick={() => onCopy(text)}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs"
            >
              <Copy className="h-3.5 w-3.5" /> Copy Text
            </button>
          </div>
        </div>

        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type text here..."
          className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-mono text-base placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
        />
      </div>

      {/* Case Transformation Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <button
          onClick={() => handleConvert(toUppercase)}
          className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all shadow-xs"
        >
          <ArrowUp className="h-4 w-4 text-indigo-500" />
          <span>UPPERCASE</span>
        </button>

        <button
          onClick={() => handleConvert(toLowercase)}
          className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all shadow-xs"
        >
          <ArrowDown className="h-4 w-4 text-purple-500" />
          <span>lowercase</span>
        </button>

        <button
          onClick={() => handleConvert(toTitleCase)}
          className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all shadow-xs"
        >
          <Type className="h-4 w-4 text-pink-500" />
          <span>Title Case</span>
        </button>

        <button
          onClick={() => handleConvert(toSentenceCase)}
          className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all shadow-xs"
        >
          <Repeat className="h-4 w-4 text-emerald-500" />
          <span>Sentence case</span>
        </button>

        <button
          onClick={() => handleConvert(toAlternatingCase)}
          className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all shadow-xs"
        >
          <Shuffle className="h-4 w-4 text-amber-500" />
          <span>aLtErNaTiNg</span>
        </button>

        <button
          onClick={() => handleConvert(toSlugCase)}
          className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all shadow-xs"
        >
          <span className="font-mono text-cyan-500">#</span>
          <span>kebab-slug-case</span>
        </button>
      </div>
    </div>
  );
};

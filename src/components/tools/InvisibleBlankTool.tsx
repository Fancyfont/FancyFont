import React, { useState } from 'react';
import { ToolDefinition } from '../../types';
import { Copy, EyeOff, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface InvisibleBlankToolProps {
  tool: ToolDefinition;
  onCopy: (text: string) => void;
}

export const InvisibleBlankTool: React.FC<InvisibleBlankToolProps> = ({ tool, onCopy }) => {
  const [testText, setTestText] = useState('');

  const INVISIBLE_CHARS = [
    {
      name: 'Hangul Filler (U+3164)',
      char: 'ㅤ',
      desc: 'Most popular blank character for PUBG, Discord, and Instagram empty bio/names.'
    },
    {
      name: 'Zero Width Space (U+200B)',
      char: '​',
      desc: 'Completely invisible character that forces line breaks without visible space.'
    },
    {
      name: 'Braille Pattern Blank (U+2800)',
      char: '⠀',
      desc: 'Empty Braille cell character supported by games and message apps.'
    },
    {
      name: 'Em Space (U+2003)',
      char: ' ',
      desc: 'Wide blank whitespace equal to the font size width.'
    },
    {
      name: 'En Space (U+2002)',
      char: ' ',
      desc: 'Medium blank whitespace half the width of an em space.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Primary Big Copy Box for Hangul Filler */}
      <div className="p-8 rounded-3xl bg-gradient-to-tr from-indigo-900/10 via-purple-900/10 to-pink-900/10 border border-indigo-300/40 dark:border-indigo-800/40 text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <EyeOff className="h-4 w-4" />
          <span>One-Click Invisible Blank Space</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
          Copy Invisible Character (U+3164)
        </h3>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-slate-400 text-sm max-w-md mx-auto">
          [ㅤ] ← Invisible Space Inside
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => onCopy('ㅤ')}
            className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-base shadow-xl shadow-indigo-600/25 flex items-center gap-3 transition-all"
          >
            <Copy className="h-5 w-5" />
            <span>Copy Invisible Character</span>
          </button>
        </div>
      </div>

      {/* Live Test Field */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between">
          <span>Test Box (Paste your copied character here to test):</span>
          <span className="text-xs font-mono font-normal text-slate-400">
            Length: {testText.length} chars
          </span>
        </label>
        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Paste copied invisible character here..."
          className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-mono text-base outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
        {testText.length > 0 && (
          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
            <ShieldCheck className="h-4 w-4" /> Success! The field contains {testText.length} invisible character(s).
          </p>
        )}
      </div>

      {/* Alternative Blank Character Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
          All Invisible & Whitespace Character Variants
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INVISIBLE_CHARS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.name}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Char: [{item.char}]
                </span>
                <button
                  onClick={() => onCopy(item.char)}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs flex items-center gap-1.5"
                >
                  <Copy className="h-3.5 w-3.5" /> Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

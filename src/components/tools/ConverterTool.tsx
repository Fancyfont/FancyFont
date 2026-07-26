import React, { useState } from 'react';
import { ToolDefinition } from '../../types';
import { textToASCII, textToUnicodePoints } from '../../utils/textTransform';
import { Copy, RotateCcw, Binary, Code2 } from 'lucide-react';

interface ConverterToolProps {
  tool: ToolDefinition;
  onCopy: (text: string) => void;
}

export const ConverterTool: React.FC<ConverterToolProps> = ({ tool, onCopy }) => {
  const [inputText, setInputText] = useState('Fonti Studio');

  const asciiResult = textToASCII(inputText);
  const unicodeResult = textToUnicodePoints(inputText);

  return (
    <div className="space-y-8">
      {/* Input Text Box */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-200">
            Enter Plain Text To Encode:
          </label>
          <button
            onClick={() => setInputText('')}
            className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Clear
          </button>
        </div>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type text to convert..."
          className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-mono text-lg outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      {/* Output Conversion Boxes */}
      <div className="space-y-6">
        {/* Unicode Codepoints */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Binary className="h-4 w-4 text-indigo-500" />
              Unicode Codepoints (U+XXXX):
            </span>
            <button
              onClick={() => onCopy(unicodeResult)}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1.5"
            >
              <Copy className="h-3.5 w-3.5" /> Copy
            </button>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 font-mono text-sm break-all border border-slate-200 dark:border-slate-800">
            {unicodeResult || 'U+0000'}
          </div>
        </div>

        {/* ASCII Decimal */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="h-4 w-4 text-purple-500" />
              ASCII Decimal Array:
            </span>
            <button
              onClick={() => onCopy(asciiResult.dec)}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1.5"
            >
              <Copy className="h-3.5 w-3.5" /> Copy
            </button>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-mono text-sm break-all border border-slate-200 dark:border-slate-800">
            {asciiResult.dec || '0'}
          </div>
        </div>

        {/* ASCII Hexadecimal */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="h-4 w-4 text-pink-500" />
              ASCII Hexadecimal:
            </span>
            <button
              onClick={() => onCopy(asciiResult.hex)}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1.5"
            >
              <Copy className="h-3.5 w-3.5" /> Copy
            </button>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-mono text-sm break-all border border-slate-200 dark:border-slate-800">
            {asciiResult.hex || '00'}
          </div>
        </div>

        {/* Binary */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Binary className="h-4 w-4 text-emerald-500" />
              Binary Representation:
            </span>
            <button
              onClick={() => onCopy(asciiResult.binary)}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1.5"
            >
              <Copy className="h-3.5 w-3.5" /> Copy
            </button>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 text-emerald-600 dark:text-emerald-400 font-mono text-xs break-all border border-slate-200 dark:border-slate-800">
            {asciiResult.binary || '00000000'}
          </div>
        </div>
      </div>
    </div>
  );
};

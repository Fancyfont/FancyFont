import React, { useState } from 'react';
import { ToolDefinition } from '../../types';
import { EMOJI_LIST, KAOMOJI_CATEGORIES } from '../../data/emojisData';
import { Copy, Search, Smile, Sparkles, Shuffle, Plus, RefreshCw } from 'lucide-react';

interface EmojiToolProps {
  tool: ToolDefinition;
  onCopy: (text: string) => void;
}

export const EmojiTool: React.FC<EmojiToolProps> = ({ tool, onCopy }) => {
  // States for Emoji Picker & Combiner
  const [emojiSearch, setEmojiSearch] = useState('');
  const [selectedEmoji1, setSelectedEmoji1] = useState('🔥');
  const [selectedEmoji2, setSelectedEmoji2] = useState('✨');

  // Kaomoji Custom Builder State
  const [leftArm, setLeftArm] = useState('(⁠っ');
  const [eye, setEye] = useState('.⁠❛⁠ ⁠ᴗ⁠ ⁠.⁠');
  const [rightArm, setRightArm] = useState('⁠)⁠っ');

  const armOptions = ['(⁠っ', '└(⁠', '٩(', 'c(', 'ヘ(', '(⁠ノ'];
  const eyeOptions = ['.⁠❛⁠ ⁠ᴗ⁠ ⁠.⁠', '◕⁠ᴗ⁠◕⁠', '★⁠ω⁠★', 'ʘ⁠‿⁠ʘ', '⊙⁠_⁠⊙', 'ಠ⁠_⁠ಠ'];
  const rightArmOptions = ['⁠)⁠っ', '⁠)⁠┐', '⁠)⁠و', '⁠)⁠ﾉ', '⁠)⁠/'];

  const customKaomoji = `${leftArm}${eye}${rightArm}`;

  const randomizeCombiner = () => {
    const e1 = EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)].emoji;
    const e2 = EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)].emoji;
    setSelectedEmoji1(e1);
    setSelectedEmoji2(e2);
  };

  // Render view depending on specific tool slug
  if (tool.slug === 'emoji-combiner') {
    const combinedResult = `${selectedEmoji1} ${selectedEmoji2} ${selectedEmoji1}`;

    return (
      <div className="space-y-8">
        <div className="p-8 rounded-3xl bg-gradient-to-tr from-purple-900/20 via-indigo-900/20 to-pink-900/20 border border-purple-500/20 text-center space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
            Emoji Combiner & Mashup Creator
          </h3>

          <div className="flex items-center justify-center gap-4 text-4xl sm:text-6xl my-4">
            <span className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-md">{selectedEmoji1}</span>
            <Plus className="h-8 w-8 text-slate-400" />
            <span className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-md">{selectedEmoji2}</span>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-3xl font-mono text-center">
            {combinedResult}
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={randomizeCombiner}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" /> Randomize
            </button>
            <button
              onClick={() => onCopy(combinedResult)}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md flex items-center gap-2"
            >
              <Copy className="h-4 w-4" /> Copy Mashup
            </button>
          </div>
        </div>

        {/* Emoji Selector grid for combiner */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">Pick Emojis To Combine</h4>
          <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
            {EMOJI_LIST.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedEmoji1(selectedEmoji2);
                  setSelectedEmoji2(item.emoji);
                }}
                className="p-3 text-2xl rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:scale-110 transition-all text-center"
              >
                {item.emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (tool.slug === 'kaomoji-generator') {
    return (
      <div className="space-y-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-500">
            Custom Kaomoji Preview
          </div>
          <div className="text-4xl sm:text-5xl font-mono text-slate-900 dark:text-white p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 inline-block border border-slate-200 dark:border-slate-800">
            {customKaomoji}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => onCopy(customKaomoji)}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md flex items-center gap-2"
            >
              <Copy className="h-4 w-4" /> Copy Custom Kaomoji
            </button>
          </div>
        </div>

        {/* Modular Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase text-slate-500">Left Arm</span>
            <div className="flex flex-wrap gap-2 pt-2">
              {armOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setLeftArm(opt)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-mono border ${
                    leftArm === opt
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase text-slate-500">Eyes & Face</span>
            <div className="flex flex-wrap gap-2 pt-2">
              {eyeOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setEye(opt)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-mono border ${
                    eye === opt
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase text-slate-500">Right Arm</span>
            <div className="flex flex-wrap gap-2 pt-2">
              {rightArmOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setRightArm(opt)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-mono border ${
                    rightArm === opt
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (tool.slug === 'kaomoji-library') {
    return (
      <div className="space-y-8">
        {KAOMOJI_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              {cat.name} ({cat.items.length})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cat.items.map((kaomoji, i) => (
                <button
                  key={i}
                  onClick={() => onCopy(kaomoji)}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:scale-105 transition-all text-center font-mono text-sm sm:text-base text-slate-900 dark:text-white shadow-2xs"
                >
                  {kaomoji}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default Emoji Picker
  const filteredEmojis = EMOJI_LIST.filter((e) => {
    if (!emojiSearch) return true;
    const q = emojiSearch.toLowerCase();
    return e.name.toLowerCase().includes(q) || e.tags.some((t) => t.includes(q));
  });

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
        <input
          type="text"
          value={emojiSearch}
          onChange={(e) => setEmojiSearch(e.target.value)}
          placeholder="Search emojis (e.g. happy, fire, love, skull)..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      {/* Emoji Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
        {filteredEmojis.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onCopy(item.emoji)}
            className="p-3 text-3xl rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:scale-110 active:scale-95 transition-all text-center shadow-2xs group relative"
            title={`${item.name} (Click to copy)`}
          >
            {item.emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

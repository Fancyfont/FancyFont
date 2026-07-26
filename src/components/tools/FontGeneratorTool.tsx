import React, { useState } from 'react';
import { ToolDefinition, FontStyleOption } from '../../types';
import { FONT_STYLE_OPTIONS } from '../../data/fontStyles';
import { transformZalgo } from '../../utils/textTransform';
import { Copy, Star, Sparkles, Sliders, RotateCcw, Check, Heart, Share2, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface FontGeneratorToolProps {
  tool: ToolDefinition;
  onCopy: (text: string) => void;
  onToggleFavorite: (id: string, type: 'font', content: string) => void;
  isFavorite: (id: string) => boolean;
}

export const FontGeneratorTool: React.FC<FontGeneratorToolProps> = ({
  tool,
  onCopy,
  onToggleFavorite,
  isFavorite
}) => {
  const [inputText, setInputText] = useState('Hello World!');
  const [zalgoIntensity, setZalgoIntensity] = useState(5);
  const [textSize, setTextSize] = useState<'normal' | 'lg' | 'xl'>('lg');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(20);
  const [showAllOverride, setShowAllOverride] = useState<boolean>(false);

  const handleCopy = (id: string, text: string) => {
    onCopy(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  // Filter font style options depending on specific tool slug
  const getFilteredStyles = (): FontStyleOption[] => {
    if (showAllOverride) return FONT_STYLE_OPTIONS;

    switch (tool.slug) {
      case 'zalgo-text-generator':
        return [
          {
            id: 'zalgo-custom-1',
            name: `Zalgo Glitch Chaos (Level ${zalgoIntensity})`,
            transform: (t) => transformZalgo(t, zalgoIntensity)
          },
          {
            id: 'zalgo-custom-2',
            name: `Zalgo Glitch Light (Level ${Math.max(1, zalgoIntensity - 2)})`,
            transform: (t) => transformZalgo(t, Math.max(1, zalgoIntensity - 2))
          },
          {
            id: 'zalgo-custom-3',
            name: `Zalgo Glitch Heavy (Level ${zalgoIntensity + 3})`,
            transform: (t) => transformZalgo(t, zalgoIntensity + 3)
          },
          ...FONT_STYLE_OPTIONS.filter((s) => s.id.includes('zalgo') || s.id.includes('strike') || s.id.includes('slash'))
        ];

      case 'bubble-text-generator':
        return FONT_STYLE_OPTIONS.filter(
          (s) =>
            s.id.includes('circled') ||
            s.id.includes('squared') ||
            s.id.includes('parenthesized') ||
            s.id.includes('regional')
        );

      case 'cursive-text-generator':
      case 'fancy-text-generator':
        return FONT_STYLE_OPTIONS.filter(
          (s) =>
            s.id.includes('script') ||
            s.id.includes('cursive') ||
            s.id.includes('serif') ||
            s.id.includes('fraktur') ||
            s.id.startsWith('decor-')
        );

      case 'old-english-text-generator':
      case 'gothic-text-generator':
        return FONT_STYLE_OPTIONS.filter(
          (s) =>
            s.id.includes('fraktur') ||
            s.id.includes('gothic') ||
            s.id.includes('serif') ||
            s.id.includes('bold') ||
            s.id.includes('decor-crossbones') ||
            s.id.includes('decor-swords')
        );

      case 'small-text-generator':
      case 'tiny-text-generator':
        return FONT_STYLE_OPTIONS.filter(
          (s) =>
            s.id.includes('small') ||
            s.id.includes('superscript') ||
            s.id.includes('subscript') ||
            s.id.includes('wide') ||
            s.id.includes('mono')
        );

      case 'upside-down-text-generator':
      case 'mirror-text-generator':
      case 'reverse-text-generator':
        return FONT_STYLE_OPTIONS.filter(
          (s) =>
            s.id.includes('upside') ||
            s.id.includes('mirror') ||
            s.id.includes('reverse') ||
            s.id.includes('flip') ||
            s.id.includes('wide')
        );

      default:
        return FONT_STYLE_OPTIONS;
    }
  };

  const matchedStyles = getFilteredStyles();
  const displayStyles = matchedStyles.length > 0 ? matchedStyles : FONT_STYLE_OPTIONS;

  return (
    <div className="space-y-8">
      
      {/* Input Field & Controls with Glowing Dark Glass Theme */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 sm:p-8 rounded-3xl bg-[#0D111D] border border-pink-500/30 shadow-2xl space-y-5 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-pink-300 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-pink-400" />
            Enter Your Text Below:
          </label>
          <button
            onClick={() => setInputText('')}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Clear
          </button>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-xs opacity-50 group-focus-within:opacity-100 transition duration-300" />
          <textarea
            rows={3}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="relative w-full p-4 rounded-2xl border border-slate-800 bg-[#090C15] text-white font-medium text-lg placeholder:text-slate-500 focus:outline-none transition-all resize-y"
          />
        </div>

        {/* Special Controls (e.g. Zalgo intensity) */}
        {tool.slug === 'zalgo-text-generator' && (
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-purple-500/30 flex items-center gap-4">
            <Sliders className="h-4 w-4 text-pink-400 shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="flex justify-between text-xs font-bold text-purple-300">
                <span>Zalgo Glitch Chaos Level</span>
                <span className="font-mono text-pink-400">{zalgoIntensity}</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={zalgoIntensity}
                onChange={(e) => setZalgoIntensity(Number(e.target.value))}
                className="w-full accent-pink-500 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Filter Toggle Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAllOverride(false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                !showAllOverride
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Category Styles ({displayStyles.length})
            </button>

            <button
              onClick={() => setShowAllOverride(true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                showAllOverride
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Site Fonts ({FONT_STYLE_OPTIONS.length})
            </button>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setTextSize('normal')}
              className={`px-2.5 py-1 rounded-lg font-bold ${
                textSize === 'normal' ? 'bg-pink-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setTextSize('lg')}
              className={`px-2.5 py-1 rounded-lg font-bold ${
                textSize === 'lg' ? 'bg-pink-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setTextSize('xl')}
              className={`px-2.5 py-1 rounded-lg font-bold ${
                textSize === 'xl' ? 'bg-pink-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              A++
            </button>
          </div>
        </div>
      </motion.div>

      {/* Generated Styles Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white font-display">
            Generated Font Results ({displayStyles.length} Available)
          </h3>
          <span className="text-xs text-slate-400">
            Click copy to use anywhere
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayStyles.slice(0, visibleCount).map((style, idx) => {
            const transformed = style.transform(inputText || 'Hello World!');
            const favId = `font-${style.id}-${transformed.slice(0, 10)}`;
            const isFav = isFavorite(favId);
            const isCopied = copiedId === style.id;

            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.02 }}
                className="p-5 rounded-2xl bg-[#0D111D] border border-slate-800/80 hover:border-pink-500/60 transition-all flex flex-col justify-between space-y-4 group shadow-lg"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 truncate pr-2">
                      {style.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      #{idx + 1}
                    </span>
                  </div>

                  <p
                    className={`font-medium text-white break-words group-hover:text-pink-300 transition-colors min-h-[3rem] flex items-center ${
                      textSize === 'normal'
                        ? 'text-base'
                        : textSize === 'lg'
                        ? 'text-lg'
                        : 'text-xl'
                    }`}
                  >
                    {transformed}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                  <button
                    onClick={() => handleCopy(style.id, transformed)}
                    className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs ${
                      isCopied
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-pink-600 hover:bg-pink-500 text-white'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onToggleFavorite(favId, 'font', transformed)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-pink-400 transition-colors"
                      title="Favorite"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          isFav ? 'text-pink-500 fill-pink-500' : ''
                        }`}
                      />
                    </button>
                    <button
                      onClick={() => handleCopy(style.id, transformed)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
                      title="Share"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More Controls */}
        {displayStyles.length > 20 && (
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            {visibleCount < displayStyles.length ? (
              <>
                <button
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 20, displayStyles.length))}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-pink-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <span>View More Fonts (+20)</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setVisibleCount(displayStyles.length)}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-800 transition-all"
                >
                  Show All ({displayStyles.length} Fonts)
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
                  Showing all {displayStyles.length} font styles
                </span>
                <button
                  onClick={() => setVisibleCount(20)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                >
                  Collapse to 20
                </button>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

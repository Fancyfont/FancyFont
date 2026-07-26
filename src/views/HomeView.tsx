import React, { useState } from 'react';
import { CATEGORIES } from '../data/categoriesData';
import { TOOLS_DATA } from '../data/toolsData';
import { FONT_STYLE_OPTIONS } from '../data/fontStyles';
import { CategoryId } from '../types';
import {
  Sparkles, Search, Copy, Check, Heart, Share2, Flame, Sliders, ChevronDown, ChevronUp,
  Layers, Smile, Zap, Grid, ArrowUpRight, ShieldCheck, Terminal, Compass
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigateTool: (slug: string) => void;
  onNavigateCategory: (catId: CategoryId) => void;
  onOpenSearch: () => void;
  onCopy: (text: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateTool,
  onNavigateCategory,
  onOpenSearch,
  onCopy
}) => {
  // Live Input State for Hero Section
  const [inputText, setInputText] = useState('Hello World!');
  const [selectedCatFilter, setSelectedCatFilter] = useState<string>('Games');
  const [favoriteFontIds, setFavoriteFontIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFavorite = (id: string) => {
    setFavoriteFontIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const [copiedFontId, setCopiedFontId] = useState<string | null>(null);
  const [fontFilterCategory, setFontFilterCategory] = useState<string>('all');
  const [fontSearchQuery, setFontSearchQuery] = useState<string>('');
  const [visibleFontCount, setVisibleFontCount] = useState<number>(8);

  const handleCopyFont = (id: string, text: string) => {
    onCopy(text);
    setCopiedFontId(id);
    setTimeout(() => setCopiedFontId(null), 1500);
  };

  const getBadgeStyle = (index: number) => {
    const badgeStyles = [
      'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'bg-pink-500/20 text-pink-300 border-pink-500/30',
      'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      'bg-amber-500/20 text-amber-300 border-amber-500/30',
      'bg-rose-500/20 text-rose-300 border-rose-500/30',
      'bg-sky-500/20 text-sky-300 border-sky-500/30',
      'bg-violet-500/20 text-violet-300 border-violet-500/30',
      'bg-teal-500/20 text-teal-300 border-teal-500/30',
    ];
    return badgeStyles[index % badgeStyles.length];
  };

  // Filter font options based on search query and category
  const filteredFontOptions = FONT_STYLE_OPTIONS.filter((opt) => {
    const matchesSearch =
      opt.name.toLowerCase().includes(fontSearchQuery.toLowerCase()) ||
      opt.id.toLowerCase().includes(fontSearchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (fontFilterCategory === 'all') return true;

    if (fontFilterCategory === 'serif-script') {
      return (
        opt.id.includes('serif') ||
        opt.id.includes('script') ||
        opt.id.includes('fraktur') ||
        opt.id.includes('sans') ||
        opt.id.includes('monospace') ||
        opt.id.includes('gothic') ||
        opt.id.includes('cursive') ||
        opt.id.includes('bold') ||
        opt.id.includes('italic') ||
        opt.id.includes('caps') ||
        opt.id.includes('double-struck')
      );
    }

    if (fontFilterCategory === 'bubbles-boxes') {
      return (
        opt.id.includes('circled') ||
        opt.id.includes('squared') ||
        opt.id.includes('parenthesized') ||
        opt.id.includes('regional') ||
        opt.id.includes('box') ||
        opt.id.includes('bracket') ||
        opt.id.includes('corner') ||
        opt.id.includes('frame') ||
        opt.id.includes('decor-border') ||
        opt.id.includes('decor-japanese')
      );
    }

    if (fontFilterCategory === 'tiny-effects') {
      return (
        opt.id.includes('small') ||
        opt.id.includes('subscript') ||
        opt.id.includes('superscript') ||
        opt.id.includes('upside') ||
        opt.id.includes('reverse') ||
        opt.id.includes('mirror') ||
        opt.id.includes('wide') ||
        opt.id.includes('strike') ||
        opt.id.includes('underline') ||
        opt.id.includes('slash') ||
        opt.id.includes('zalgo') ||
        opt.id.includes('separated') ||
        opt.id.includes('below') ||
        opt.id.includes('above') ||
        opt.id.includes('spongebob') ||
        opt.id.includes('spaced') ||
        opt.id.includes('dash') ||
        opt.id.includes('tilde')
      );
    }

    if (fontFilterCategory === 'gaming-bio') {
      return (
        opt.id.includes('gamer') ||
        opt.id.includes('cyber') ||
        opt.id.includes('target') ||
        opt.id.includes('sword') ||
        opt.id.includes('skull') ||
        opt.id.includes('invader') ||
        opt.id.includes('flame') ||
        opt.id.includes('crossbones') ||
        opt.id.includes('alien') ||
        opt.id.includes('zalgo') ||
        opt.id.includes('fraktur') ||
        opt.id.includes('gothic') ||
        opt.id.includes('monogram') ||
        opt.id.includes('decor-japanese') ||
        opt.id.includes('decor-cyber') ||
        opt.id.includes('decor border')
      );
    }

    if (fontFilterCategory === 'decorative') {
      return (
        opt.id.startsWith('decor-') ||
        opt.id.includes('star') ||
        opt.id.includes('heart') ||
        opt.id.includes('wings') ||
        opt.id.includes('flower') ||
        opt.id.includes('bow') ||
        opt.id.includes('crown') ||
        opt.id.includes('butterfly')
      );
    }

    return true;
  });

  return (
    <div className="w-full space-y-16 pb-20 text-slate-100">

      {/* =========================================================================
          HERO SECTION (Matching Reference Image)
         ========================================================================= */}
      <div className="relative rounded-3xl bg-[#0C101C]/90 border border-slate-800/80 p-6 sm:p-10 shadow-2xl overflow-hidden">
        
        {/* Glowing Background Aurora Effects */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating Glass Badges on sides (Exact reference elements) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute top-12 left-6 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-lg text-xs font-serif text-slate-300 pointer-events-none rotate-[-8deg]"
        >
          𝒞𝓊𝓇𝓈𝒾𝓋ℯ
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute top-36 left-10 px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-lg text-[11px] font-mono text-pink-300 pointer-events-none rotate-[-12deg]"
        >
          G̸l̸i̸t̸c̸h̸
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute bottom-20 left-8 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-lg text-xs font-mono text-purple-300 pointer-events-none rotate-[6deg]"
        >
          ✨ Hello World! ✨
        </motion.div>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute top-16 right-10 p-3 rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-lg text-slate-300 pointer-events-none rotate-[10deg]"
        >
          <Sparkles className="h-5 w-5 text-pink-400" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden xl:flex absolute bottom-24 right-12 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-md shadow-lg text-slate-300 pointer-events-none rotate-[-6deg]"
        >
          <Heart className="h-5 w-5 text-pink-500 fill-pink-500/30" />
        </motion.div>

        {/* Hero Header Text */}
        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10 pt-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight">
            Generate Beautiful <br className="hidden sm:inline" />
            Unicode Fonts Instantly
          </h1>

          {/* Search/Input Box with Pink Neon Glow Border */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative flex items-center bg-[#0D111D] rounded-2xl p-2 sm:p-2.5 border border-pink-500/50 shadow-2xl">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your text here, see it transform instantly..."
                  className="w-full bg-transparent px-3 text-white font-medium text-sm sm:text-base placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  onClick={onOpenSearch}
                  className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white transition-all shrink-0"
                  title="Search Tools"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Subtitle / Preview Header */}
          <div className="pt-2 text-sm font-semibold text-pink-300 flex items-center justify-center gap-2">
            <span>✨ {inputText || 'Hello World!'} ✨</span>
          </div>
        </div>

        {/* Font Style Toolbar & Filter Controls */}
        <div className="pt-8 relative z-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
              {[
                { id: 'all', label: 'All Fonts' },
                { id: 'serif-script', label: 'Serif & Script' },
                { id: 'bubbles-boxes', label: 'Bubbles & Boxes' },
                { id: 'tiny-effects', label: 'Tiny & Effects' },
                { id: 'gaming-bio', label: 'Gaming & Bio' },
                { id: 'decorative', label: 'Decorative' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFontFilterCategory(cat.id);
                    setVisibleFontCount(8);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                    fontFilterCategory === cat.id
                      ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-xs'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Quick Filter Input within Hero */}
            <div className="relative w-full md:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={fontSearchQuery}
                onChange={(e) => setFontSearchQuery(e.target.value)}
                placeholder="Filter styles..."
                className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-pink-500/50"
              />
            </div>
          </div>

          {/* Grid of Live Generated Font Cards (Sliced by visibleFontCount) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
            {filteredFontOptions.slice(0, visibleFontCount).map((card, idx) => {
              const transformedText = card.transform(inputText || 'Hello World!');
              const isFav = favoriteFontIds.includes(card.id);
              const isCopied = copiedFontId === card.id;
              const badgeStyle = getBadgeStyle(idx);

              return (
                <div
                  key={card.id}
                  className="p-4 rounded-2xl bg-[#0E1322]/90 border border-slate-800/80 hover:border-pink-500/60 transition-all flex flex-col justify-between space-y-3 group shadow-lg"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 truncate pr-2">
                        {card.name}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold border shrink-0 ${badgeStyle}`}>
                        Style #{idx + 1}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-white break-words group-hover:text-pink-300 transition-colors min-h-[2.5rem] flex items-center">
                      {transformedText}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                    <button
                      onClick={() => handleCopyFont(card.id, transformedText)}
                      className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs ${
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
                        onClick={() => toggleFavorite(card.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-pink-400 transition-colors"
                        title="Favorite"
                      >
                        <Heart className={`h-4 w-4 ${isFav ? 'text-pink-500 fill-pink-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => handleCopyFont(card.id, transformedText)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
                        title="Quick Share"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More / View All Controls */}
          {filteredFontOptions.length > 8 && (
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              {visibleFontCount < filteredFontOptions.length ? (
                <>
                  <button
                    onClick={() => setVisibleFontCount((prev) => Math.min(prev + 16, filteredFontOptions.length))}
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-pink-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>View More Fonts</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => setVisibleFontCount(filteredFontOptions.length)}
                    className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-700/80 transition-all cursor-pointer"
                  >
                    Show All Fonts
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl">
                    Showing all font styles
                  </span>
                  <button
                    onClick={() => setVisibleFontCount(8)}
                    className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 transition-colors cursor-pointer"
                  >
                    Show Less
                  </button>
                </div>
              )}
            </div>
          )}

          {filteredFontOptions.length === 0 && (
            <div className="text-center py-10 text-slate-400">
              <p className="text-sm">No font styles match "{fontSearchQuery}"</p>
              <button
                onClick={() => {
                  setFontSearchQuery('');
                  setFontFilterCategory('all');
                  setVisibleFontCount(8);
                }}
                className="mt-2 text-xs text-pink-400 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>


      {/* =========================================================================
          FEATURED TOOL BLOCKS (Matching Reference Image)
         ========================================================================= */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white font-display text-center sm:text-left">
          Featured Tool Blocks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Glitch Text (Distortion animated design) */}
          <div
            onClick={() => onNavigateTool('zalgo-text-generator')}
            className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-purple-950/80 via-slate-900 to-black border border-purple-500/40 hover:border-purple-400 transition-all cursor-pointer group shadow-xl flex flex-col justify-between space-y-8"
          >
            {/* Scanline / glitch background effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#d8b4fe_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl font-black text-white font-display tracking-wide group-hover:text-pink-300 transition-colors">
                Glitch Text
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Animated distortion Zalgo text generator for discord & gaming bios
              </p>
            </div>

            <div className="flex items-center justify-between relative z-10 pt-2">
              <span className="px-3 py-1 rounded-xl bg-pink-500/20 text-pink-300 font-mono text-xs border border-pink-500/30 font-bold">
                Glitch
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/80 text-white font-bold group-hover:scale-110 transition-transform shadow-md">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Card 2: Bubble Text (Cyan/Blue gradient bubbles backdrop) */}
          <div
            onClick={() => onNavigateTool('bubble-text-generator')}
            className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-cyan-900/60 via-slate-900 to-indigo-950 border border-cyan-500/40 hover:border-cyan-400 transition-all cursor-pointer group shadow-xl flex flex-col justify-between space-y-8"
          >
            {/* Floating glass bubble graphics */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-cyan-400/20 backdrop-blur-md border border-white/20 pointer-events-none" />
            <div className="absolute bottom-4 right-12 w-12 h-12 rounded-full bg-blue-400/20 backdrop-blur-md border border-white/20 pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl font-black text-white font-display tracking-wide group-hover:text-cyan-300 transition-colors">
                Bubble Text
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Circled letters & bubble font library for stylish headlines
              </p>
            </div>

            <div className="flex items-center justify-between relative z-10 pt-2">
              <span className="px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono text-xs border border-cyan-500/30 font-bold">
                Ⓞ Bubble Text
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 font-bold group-hover:scale-110 transition-transform shadow-md">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Card 3: Unicode Symbols (Orange/Purple gradient border block) */}
          <div
            onClick={() => onNavigateTool('cool-symbols-copy')}
            className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-amber-950/40 via-slate-900 to-purple-950 border border-amber-500/40 hover:border-amber-400 transition-all cursor-pointer group shadow-xl flex flex-col justify-between space-y-8"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl font-black text-white font-display tracking-wide group-hover:text-amber-300 transition-colors">
                Unicode Symbols
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rotating symbol library with 10,000+ aesthetic copy & paste icons
              </p>
            </div>

            <div className="flex items-center justify-between relative z-10 pt-2">
              <span className="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 font-mono text-xs border border-amber-500/30 font-bold">
                ✦ Symbols
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-bold group-hover:scale-110 transition-transform shadow-md">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* =========================================================================
          DISCOVER BENTO GRID (Matching Reference Image Layout)
         ========================================================================= */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white font-display text-center sm:text-left">
          Discover Bento Grid
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Bento Item 1: Tall Feature Card */}
          <div className="md:col-span-1 p-6 rounded-3xl bg-[#0D111D] border border-slate-800/80 hover:border-pink-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <Flame className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Tall Generator</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Full stack Unicode font tools, superscript generators, and special space characters.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigateTool('fancy-font-generator')}
              className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              Explore Now
            </button>
          </div>

          {/* Bento Item 2: Middle Glass Card */}
          <div className="md:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0D111D] to-indigo-950/40 border border-slate-800/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">Beautiful Icons & Aesthetic Fonts</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Convert plain text into aesthetic kaomojis, Japanese text symbols, and custom gaming tags effortlessly.
              </p>
            </div>

            <div className="flex items-center gap-2 relative z-10 pt-2">
              <span className="px-3 py-1 rounded-xl bg-pink-500/20 text-pink-300 font-bold text-xs border border-pink-500/30">
                Hover Glass
              </span>
              <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold text-xs border border-indigo-500/30">
                Aesthetic
              </span>
            </div>
          </div>

          {/* Bento Item 3: Glassmorphism Floating Graphic Card */}
          <div className="md:col-span-1 p-6 rounded-3xl bg-[#0D111D] border border-slate-800/80 hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Beautiful Spaces</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Invisible characters, blank text for WhatsApp & Instagram bios.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigateTool('invisible-text-generator')}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
            >
              Open Tool
            </button>
          </div>

        </div>
      </div>


      {/* =========================================================================
          CATEGORY EXPLORER (Matching Reference Image)
         ========================================================================= */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white font-display text-center sm:text-left">
          Category Explorer
        </h2>

        {/* Category Pills (Pink active pill) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {['Games', 'Social Media', 'Decorative', 'Minimal', 'Professional'].map((catName) => (
            <button
              key={catName}
              onClick={() => setSelectedCatFilter(catName)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold shrink-0 transition-all ${
                selectedCatFilter === catName
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                  : 'bg-[#0D111D] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {catName}
            </button>
          ))}
        </div>

        {/* Tools matching active category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {TOOLS_DATA.slice(0, 6).map((tool) => (
            <div
              key={tool.id}
              onClick={() => onNavigateTool(tool.slug)}
              className="p-5 rounded-2xl bg-[#0D111D] border border-slate-800/80 hover:border-pink-500/60 transition-all cursor-pointer group space-y-3 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-800 text-slate-400">
                  {selectedCatFilter}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-white group-hover:text-pink-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {tool.shortDesc}
                </p>
              </div>

              <div className="pt-2 flex justify-start">
                <button className="px-3.5 py-1.5 rounded-xl bg-pink-600/80 hover:bg-pink-500 text-white font-bold text-xs shadow-xs">
                  Open Tool
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* =========================================================================
          RIGHT WIDGET PREVIEWS / SEARCH EXPERIENCE SHOWCASE
         ========================================================================= */}
      <div className="pt-6 border-t border-slate-800/80 space-y-6">
        <h2 className="text-2xl font-black text-white font-display text-center sm:text-left">
          Search Experience
        </h2>

        <div className="p-6 rounded-3xl bg-[#0D111D] border border-slate-800 max-w-2xl mx-auto space-y-4 shadow-xl">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 border border-pink-500/40">
            <Search className="h-4 w-4 text-pink-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to search font tools..."
              className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-slate-500 font-mono"
            />
          </div>

          <div className="space-y-1.5">
            {TOOLS_DATA.filter((t) =>
              t.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
              .slice(0, 4)
              .map((t) => (
                <div
                  key={t.id}
                  onClick={() => onNavigateTool(t.slug)}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-pink-500/50 hover:bg-slate-900 cursor-pointer flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-pink-400" />
                    <span className="text-xs font-bold text-white">{t.name}</span>
                  </div>
                  <span className="text-[10px] text-pink-400 font-mono font-bold">
                    Open →
                  </span>
                </div>
              ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {['Games', 'Social Media', 'New Tool', 'Copy', 'Clear'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          GOOGLE SEO HIGHLIGHT ARTICLE & FAQ SECTION (Optimized for Top Rankings)
         ========================================================================= */}
      <section className="pt-12 border-t border-slate-800/80 space-y-10 text-slate-300">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold uppercase tracking-wider">
            SEO & Unicode Guide
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            The #1 Free <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Fancy Text & Font Generator</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Convert standard keyboard text into 100+ unique, aesthetic, and fancy Unicode font styles. Copy and paste directly into Instagram, TikTok, Discord, WhatsApp, and gaming profiles!
          </p>
        </div>

        {/* Feature Highlights Grid for Google Crawlers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0D111D] border border-slate-800 space-y-2">
            <h3 className="font-extrabold text-white text-base flex items-center gap-2">
              <span className="text-pink-400">✒️</span> 100+ Aesthetic Font Styles
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Generate Cursive Script, Gothic Fraktur, Bold Serif, Double Struck, Circled Bubble, Small Caps, and Glitch Zalgo text instantly with 1-click copy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D111D] border border-slate-800 space-y-2">
            <h3 className="font-extrabold text-white text-base flex items-center gap-2">
              <span className="text-purple-400">📱</span> 100% Copy & Paste Compatible
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Powered by international Unicode standard characters. Supported natively on iPhone, iPad, Android, Mac, Windows, Instagram Bios, and TikTok captions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D111D] border border-slate-800 space-y-2">
            <h3 className="font-extrabold text-white text-base flex items-center gap-2">
              <span className="text-indigo-400">⚡</span> Fast & 100% Free Always
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No registration, no daily limits, and 0 ads. Instant client-side generation ensures total privacy and lightning fast output.
            </p>
          </div>
        </div>

        {/* Popular SEO Tool Quick Links for Internal Crawl Link Juice */}
        <div className="p-6 rounded-3xl bg-[#080B14] border border-slate-800/80 space-y-4">
          <h3 className="font-extrabold text-white text-sm uppercase tracking-wider text-center sm:text-left">
            Popular Font Generators & Text Converters
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Fancy Font Generator', slug: 'fancy-font-generator' },
              { label: 'Cool Symbols Copy', slug: 'cool-symbols-copy' },
              { label: 'Japanese Kaomoji', slug: 'kaomoji-japanese-emoticons' },
              { label: 'Zalgo Glitch Text', slug: 'zalgo-glitch-text-generator' },
              { label: 'Cursive Font Generator', slug: 'cursive-text-generator' },
              { label: 'Small Text Generator', slug: 'small-text-generator' },
              { label: 'Gaming Name Creator', slug: 'gaming-name-generator' },
              { label: 'Emoji Picker & Combiner', slug: 'emoji-picker-copy' },
              { label: 'Bold Text Generator', slug: 'bold-text-generator' },
              { label: 'Case Converter', slug: 'case-converter' }
            ].map((link) => (
              <button
                key={link.slug}
                onClick={() => onNavigateTool(link.slug)}
                className="px-3 py-1.5 rounded-xl bg-[#0D111D] hover:bg-pink-500/10 border border-slate-800 hover:border-pink-500/40 text-xs font-bold text-slate-300 hover:text-pink-300 transition-all"
              >
                {link.label} →
              </button>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};


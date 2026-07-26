import React from 'react';
import { ToolDefinition, FavoriteItem } from '../types';
import { CATEGORIES } from '../data/categoriesData';
import { TOOLS_DATA } from '../data/toolsData';
import { SeoContent } from '../components/SeoContent';
import { FontGeneratorTool } from '../components/tools/FontGeneratorTool';
import { SymbolTool } from '../components/tools/SymbolTool';
import { EmojiTool } from '../components/tools/EmojiTool';
import { CaseConverterTool } from '../components/tools/CaseConverterTool';
import { TextCounterTool } from '../components/tools/TextCounterTool';
import { GamingBioTool } from '../components/tools/GamingBioTool';
import { InvisibleBlankTool } from '../components/tools/InvisibleBlankTool';
import { ConverterTool } from '../components/tools/ConverterTool';
import { motion } from 'motion/react';

import {
  Sparkles, Home, ChevronRight, Share2, Flame, ArrowLeft, Check, Copy
} from 'lucide-react';

interface ToolViewProps {
  tool: ToolDefinition;
  onNavigateHome: () => void;
  onNavigateCategory: (catId: string) => void;
  onNavigateTool: (slug: string) => void;
  onCopy: (text: string) => void;
  onToggleFavorite: (id: string, type: 'font' | 'symbol' | 'kaomoji' | 'name', content: string) => void;
  isFavorite: (id: string) => boolean;
}

export const ToolView: React.FC<ToolViewProps> = ({
  tool,
  onNavigateHome,
  onNavigateCategory,
  onNavigateTool,
  onCopy,
  onToggleFavorite,
  isFavorite
}) => {
  const category = CATEGORIES.find((c) => c.id === tool.category);

  // Related tools from same category (excluding current tool)
  const relatedTools = TOOLS_DATA.filter(
    (t) => t.category === tool.category && t.slug !== tool.slug
  ).slice(0, 4);

  // Render appropriate tool view component
  const renderInteractiveTool = () => {
    switch (tool.category) {
      case 'social-fonts':
      case 'text-styles':
        return (
          <FontGeneratorTool
            tool={tool}
            onCopy={onCopy}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        );
      case 'symbols':
        return <SymbolTool tool={tool} onCopy={onCopy} />;
      case 'emojis-kaomojis':
        return <EmojiTool tool={tool} onCopy={onCopy} />;
      case 'case-text':
        return <CaseConverterTool tool={tool} onCopy={onCopy} />;
      case 'counters':
        return <TextCounterTool tool={tool} onCopy={onCopy} />;
      case 'gaming-bio':
        return <GamingBioTool tool={tool} onCopy={onCopy} />;
      case 'invisible-special':
        if (tool.slug === 'ascii-converter' || tool.slug === 'unicode-converter') {
          return <ConverterTool tool={tool} onCopy={onCopy} />;
        }
        return <InvisibleBlankTool tool={tool} onCopy={onCopy} />;
      default:
        return (
          <FontGeneratorTool
            tool={tool}
            onCopy={onCopy}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        );
    }
  };

  const shareToolUrl = () => {
    onCopy(window.location.href);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Breadcrumb Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between gap-4"
      >
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 overflow-x-auto py-1">
          <button
            onClick={onNavigateHome}
            className="hover:text-pink-400 flex items-center gap-1 shrink-0 transition-colors"
          >
            <Home className="h-3.5 w-3.5" /> Home
          </button>
          <ChevronRight className="h-3.5 w-3.5 text-slate-600 shrink-0" />
          {category && (
            <button
              onClick={() => onNavigateCategory(category.id)}
              className="hover:text-pink-400 shrink-0 transition-colors"
            >
              {category.name}
            </button>
          )}
          <ChevronRight className="h-3.5 w-3.5 text-slate-600 shrink-0" />
          <span className="text-white font-bold truncate">
            {tool.name}
          </span>
        </nav>

        <button
          onClick={shareToolUrl}
          className="px-3.5 py-1.5 rounded-xl border border-pink-500/30 bg-slate-900/80 text-xs font-bold text-pink-300 hover:bg-pink-500/10 flex items-center gap-1.5 shrink-0 transition-all shadow-sm"
          title="Copy Direct Link to this Tool"
        >
          <Share2 className="h-3.5 w-3.5 text-pink-400" /> Share Tool
        </button>
      </motion.div>

      {/* Tool Header Card - Dark Aurora Dashboard Style */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 sm:p-10 rounded-3xl bg-[#0C101C] border border-pink-500/30 shadow-2xl space-y-4 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-xl bg-pink-500/10 text-pink-400 font-extrabold text-xs border border-pink-500/30">
            Tool #{tool.id}
          </span>
          {category && (
            <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${category.badgeColor}`}>
              {category.name}
            </span>
          )}
          {tool.isPopular && (
            <span className="px-3 py-1 rounded-xl bg-amber-500/10 text-amber-400 font-bold text-xs border border-amber-500/30 flex items-center gap-1">
              <Flame className="h-3.5 w-3.5 text-amber-400" /> Trending
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight bg-gradient-to-r from-white via-slate-100 to-pink-200 bg-clip-text text-transparent">
          {tool.name}
        </h1>

        <p className="text-slate-300 text-base max-w-3xl leading-relaxed font-normal">
          {tool.shortDesc}
        </p>
      </motion.div>

      {/* Interactive Tool Main Component */}
      <section className="rounded-3xl">
        {renderInteractiveTool()}
      </section>

      {/* Related Tools Recommendations */}
      {relatedTools.length > 0 && (
        <section className="space-y-4 pt-6">
          <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-pink-400" />
            More {category?.name} Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedTools.map((relTool) => (
              <button
                key={relTool.id}
                onClick={() => onNavigateTool(relTool.slug)}
                className="p-5 rounded-2xl bg-[#0D111D] border border-slate-800/80 hover:border-pink-500/50 hover:shadow-lg text-left transition-all group space-y-1.5"
              >
                <div className="text-xs font-bold text-pink-400">#{relTool.id}</div>
                <div className="font-bold text-sm text-white group-hover:text-pink-300 truncate transition-colors">
                  {relTool.name}
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {relTool.shortDesc}
                </p>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* SEO Information & FAQs */}
      <SeoContent tool={tool} />

    </main>
  );
};


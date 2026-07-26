import React, { useState } from 'react';
import { CATEGORIES } from '../data/categoriesData';
import { TOOLS_DATA } from '../data/toolsData';
import { CategoryId } from '../types';
import {
  Share2, Type, EyeOff, Repeat, Calculator, Gamepad2, Smile, Sparkles,
  ChevronDown, ChevronRight, Home, Flame, ArrowUpRight, HelpCircle
} from 'lucide-react';

interface SidebarProps {
  currentCategory: CategoryId | null;
  currentSlug: string | null;
  onNavigateHome: () => void;
  onNavigateCategory: (catId: CategoryId) => void;
  onNavigateTool: (slug: string) => void;
  onNavigateFaq?: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Share2, Type, EyeOff, Repeat, Calculator, Gamepad2, Smile, Sparkles
};

export const Sidebar: React.FC<SidebarProps> = ({
  currentCategory,
  currentSlug,
  onNavigateHome,
  onNavigateCategory,
  onNavigateTool,
  onNavigateFaq,
  isOpenMobile,
  onCloseMobile
}) => {
  const [expandedCat, setExpandedCat] = useState<CategoryId | null>(currentCategory || 'social-fonts');

  const toggleCategory = (catId: CategoryId) => {
    if (expandedCat === catId) {
      setExpandedCat(null);
    } else {
      setExpandedCat(catId);
    }
  };

  const content = (
    <div className="flex flex-col h-full overflow-y-auto py-6 px-3">
      {/* Home & FAQ Quick Nav Buttons */}
      <div className="space-y-1 mb-4">
        <button
          onClick={() => {
            onNavigateHome();
            onCloseMobile();
          }}
          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors ${
            !currentSlug && !currentCategory
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Home className="h-4 w-4" />
          <span>All 60 Tools Overview</span>
        </button>

        {onNavigateFaq && (
          <button
            onClick={() => {
              onNavigateFaq();
              onCloseMobile();
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors ${
              currentSlug === 'faq'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20 font-bold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <HelpCircle className="h-4 w-4 text-pink-400" />
            <span>FAQ Page & SEO Guide</span>
          </button>
        )}
      </div>

      {/* Popular Quick Links */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 px-3 mb-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <Flame className="h-3.5 w-3.5" />
          <span>Top Trending Tools</span>
        </div>
        <div className="space-y-1">
          {TOOLS_DATA.filter((t) => t.isPopular)
            .slice(0, 6)
            .map((tool) => {
              const isActive = currentSlug === tool.slug;
              return (
                <button
                  key={tool.id}
                  onClick={() => {
                    onNavigateTool(tool.slug);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/80 font-bold text-indigo-600 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span className="truncate">{tool.name}</span>
                  <span className="text-[10px] text-slate-400">#{tool.id}</span>
                </button>
              );
            })}
        </div>
      </div>

      {/* Categories Tree */}
      <div className="space-y-2">
        <div className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Tool Categories
        </div>

        {CATEGORIES.map((category) => {
          const IconComp = ICON_MAP[category.iconName] || Sparkles;
          const isExpanded = expandedCat === category.id;
          const categoryTools = TOOLS_DATA.filter((t) => t.category === category.id);
          const isCatActive = currentCategory === category.id;

          return (
            <div key={category.id} className="space-y-1">
              <button
                onClick={() => {
                  toggleCategory(category.id);
                  onNavigateCategory(category.id);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isCatActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <IconComp className="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400" />
                  <span className="truncate">{category.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-500">
                    {categoryTools.length}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Collapsible Subtools */}
              {isExpanded && (
                <div className="pl-6 space-y-0.5 border-l-2 border-slate-200 dark:border-slate-800 my-1 ml-4">
                  {categoryTools.map((tool) => {
                    const isToolActive = currentSlug === tool.slug;
                    return (
                      <button
                        key={tool.id}
                        onClick={() => {
                          onNavigateTool(tool.slug);
                          onCloseMobile();
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                          isToolActive
                            ? 'bg-indigo-600 text-white font-bold shadow-xs'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <span className="truncate">{tool.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 h-[calc(100vh-4rem)] sticky top-16">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative w-80 max-w-[80vw] bg-white dark:bg-slate-900 h-full shadow-2xl z-10">
            {content}
          </div>
        </div>
      )}
    </>
  );
};

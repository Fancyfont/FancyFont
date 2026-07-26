import React, { useState, useEffect } from 'react';
import { TOOLS_DATA } from './data/toolsData';
import { CATEGORIES } from './data/categoriesData';
import { ToolDefinition, CategoryId, FavoriteItem } from './types';
import { updateSeoMetadata } from './utils/seoHelper';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { CopyToast } from './components/CopyToast';
import { FavoritesModal } from './components/FavoritesModal';
import { AboutModal } from './components/AboutModal';
import { HomeView } from './views/HomeView';
import { ToolView } from './views/ToolView';
import { FaqView } from './views/FaqView';

export default function App() {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<CategoryId | null>(null);

  // Modals & UI states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fonti-dark-mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Favorites State
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fonti-favorites');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");

  if (redirect) {
    window.history.replaceState({}, "", redirect);
  }
}, []);

  // Handle URL Path and Hash Parsing
  const parseCurrentRoute = () => {
    const base = "/FancyFont";

const path = window.location.pathname
  .replace(base, "")
  .replace(/^\/+|\/+$/g, "");

const hash = window.location.hash.replace(/^#\/?/, "");

const slugCandidate = path || hash;

    if (!slugCandidate) {
      setCurrentSlug(null);
      setCurrentCategory(null);
      updateSeoMetadata(null, undefined);
      return;
    }

    if (slugCandidate === 'faq') {
      setCurrentSlug('faq');
      setCurrentCategory(null);
      return;
    }

    // Check if matching a tool slug
    const matchedTool = TOOLS_DATA.find((t) => t.slug === slugCandidate);
    if (matchedTool) {
      setCurrentSlug(matchedTool.slug);
      setCurrentCategory(matchedTool.category);
      updateSeoMetadata(matchedTool, undefined);
      return;
    }

    // Check if matching a category id
    const matchedCat = CATEGORIES.find((c) => c.id === slugCandidate);
    if (matchedCat) {
      setCurrentSlug(null);
      setCurrentCategory(matchedCat.id);
      updateSeoMetadata(null, matchedCat.name);
      return;
    }

    // Fallback to Home
    setCurrentSlug(null);
    setCurrentCategory(null);
    updateSeoMetadata(null, undefined);
  };

  useEffect(() => {
    parseCurrentRoute();
    window.addEventListener('popstate', parseCurrentRoute);
    window.addEventListener('hashchange', parseCurrentRoute);
    return () => {
      window.removeEventListener('popstate', parseCurrentRoute);
      window.removeEventListener('hashchange', parseCurrentRoute);
    };
  }, []);

  // Sync Dark Mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('fonti-dark-mode', String(darkMode));
  }, [darkMode]);

  // Sync Favorites
  useEffect(() => {
    localStorage.setItem('fonti-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Global Keyboard Shortcuts (Ctrl+K or / to search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation Helpers
  const navigateToSlug = (slug: string) => {
  window.history.pushState({}, "", `/FancyFont/${slug}`);
  parseCurrentRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const navigateToCategory = (catId: CategoryId) => {
  window.history.pushState({}, "", `/FancyFont/${catId}`);
  parseCurrentRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const navigateHome = () => {
  window.history.pushState({}, "", "/FancyFont/");
  parseCurrentRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  // Copy Handler
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(text);
  };

  // Favorites Handlers
  const toggleFavorite = (id: string, type: 'font' | 'symbol' | 'kaomoji' | 'name', content: string) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === id);
      if (exists) {
        return prev.filter((item) => item.id !== id);
      } else {
        return [{ id, type, content, timestamp: Date.now() }, ...prev];
      }
    });
  };

  const isFavorite = (id: string) => {
    return favorites.some((item) => item.id === id);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAllFavorites = () => setFavorites([]);

  const navigateFaq = () => {
  window.history.pushState({}, "", "/FancyFont/faq");
  parseCurrentRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const activeToolObj: ToolDefinition | undefined = currentSlug && currentSlug !== 'faq'
    ? TOOLS_DATA.find((t) => t.slug === currentSlug)
    : undefined;

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 transition-colors font-sans antialiased selection:bg-indigo-500 selection:text-white flex flex-col overflow-x-hidden max-w-full">
      
      {/* Top Header */}
      <Header
        currentSlug={currentSlug}
        onNavigateHome={navigateHome}
        onNavigateCategory={navigateToCategory}
        onNavigateTool={navigateToSlug}
        onNavigateFaq={navigateFaq}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenAboutModal={() => setIsAboutOpen(true)}
        favoritesCount={favorites.length}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onToggleSidebar={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}
        isSidebarOpen={isSidebarOpenMobile}
      />

      {/* Main Body Layout */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">
        {/* Sidebar Navigation */}
        <Sidebar
          currentCategory={currentCategory}
          currentSlug={currentSlug}
          onNavigateHome={navigateHome}
          onNavigateCategory={navigateToCategory}
          onNavigateTool={navigateToSlug}
          onNavigateFaq={navigateFaq}
          isOpenMobile={isSidebarOpenMobile}
          onCloseMobile={() => setIsSidebarOpenMobile(false)}
        />

        {/* Content View */}
        <div className="flex-1 min-w-0">
          {currentSlug === 'faq' ? (
            <FaqView
              onNavigateHome={navigateHome}
              onNavigateTool={navigateToSlug}
              onNavigateCategory={navigateToCategory}
            />
          ) : activeToolObj ? (
            <ToolView
              tool={activeToolObj}
              onNavigateHome={navigateHome}
              onNavigateCategory={navigateToCategory}
              onNavigateTool={navigateToSlug}
              onCopy={handleCopy}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          ) : (
            <HomeView
              onNavigateTool={navigateToSlug}
              onNavigateCategory={navigateToCategory}
              onOpenSearch={() => setIsSearchOpen(true)}
              onCopy={handleCopy}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer
        onNavigateTool={navigateToSlug}
        onNavigateCategory={navigateToCategory}
        onNavigateHome={navigateHome}
        onNavigateFaq={navigateFaq}
        onOpenAboutModal={() => setIsAboutOpen(true)}
      />

      {/* Modals & Toast */}
      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTool={navigateToSlug}
      />

      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFavorite={removeFavorite}
        onClearAll={clearAllFavorites}
        onCopy={handleCopy}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <CopyToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
        triggerConfetti={true}
      />

    </div>
  );
}

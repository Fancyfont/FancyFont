import React, { useState, useEffect } from 'react';
import { HelpCircle, Search, ChevronDown, Sparkles, Check, Copy, ArrowLeft, ExternalLink, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { updateSeoMetadata } from '../utils/seoHelper';

interface FaqItem {
  id: string;
  category: 'general' | 'socials' | 'tech' | 'tools';
  categoryLabel: string;
  question: string;
  answer: string;
  keywords: string[];
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'how-it-works',
    category: 'general',
    categoryLabel: 'General & Usage',
    question: 'How do copy and paste fonts work on Instagram, TikTok, and Discord?',
    answer: 'Standard computer fonts require installing font files (.TTF or .OTF). Fonti Studio instead translates standard keyboard text into mathematical Unicode character symbols (for example, 𝐹𝒶𝓃𝒸𝓎 𝒯𝑒𝓍𝓉 or Ⓕⓐⓝⓒⓨ ⓉⓔⓧⓉ). Because Unicode is an international standard supported by modern devices, these stylized characters copy and paste natively into Instagram bios, TikTok captions, Discord handles, and WhatsApp messages without any app or file installation!',
    keywords: ['instagram fonts', 'tiktok bio', 'discord text', 'copy paste fonts', 'how unicode works']
  },
  {
    id: 'is-it-free',
    category: 'general',
    categoryLabel: 'General & Usage',
    question: 'Is Fonti Studio 100% free to use?',
    answer: 'Yes, Fonti Studio is completely 100% free with unlimited font generation, no daily usage caps, no mandatory user accounts, and zero intrusive pop-up ads. You can convert text and copy styles as many times as you like.',
    keywords: ['free font generator', 'no download text generator', 'unlimited copy paste fonts']
  },
  {
    id: 'installation-required',
    category: 'general',
    categoryLabel: 'General & Usage',
    question: 'Do I need to install an app or keyboard extension to use these fonts?',
    answer: 'No installation is needed! Everything runs directly inside your web browser on mobile phones, tablets, laptops, and desktop computers. Simply type your text, click the "Copy" button next to your favorite style, and paste it wherever you want.',
    keywords: ['no app needed font generator', 'online font changer', 'browser font generator']
  },
  {
    id: 'available-styles',
    category: 'tools',
    categoryLabel: 'Tools & Features',
    question: 'Which font styles and text tools are available on Fonti Studio?',
    answer: 'Fonti Studio features over 100+ unique styles including Cursive Script, Gothic Fraktur, Bold Serif, Double Struck, Circled Bubble, Squared Block, Small Caps, Superscript, Subscript, Reverse Text, Mirror Text, Zalgo Glitch Text, Japanese Kaomoji emoticons, and custom Gaming Nickname symbols.',
    keywords: ['cursive font generator', 'gothic text', 'bubble text', 'zalgo glitch', 'kaomoji library']
  },
  {
    id: 'gaming-bios',
    category: 'socials',
    categoryLabel: 'Instagram & Socials',
    question: 'Can I use these fonts and symbols for gaming names in Free Fire, PUBG, and Roblox?',
    answer: 'Yes! Gamers frequently use Fonti Studio to design stylish clan names and gaming handles with wings, stars, and bracket symbols (such as ꧁༺NICKNAME༻꧂). Most major online games like PUBG Mobile, Free Fire, League of Legends, Roblox, and Fortnite support Unicode symbol characters.',
    keywords: ['free fire name generator', 'pubg symbol bio', 'roblox username fonts', 'clan name symbols']
  },
  {
    id: 'blank-boxes-issue',
    category: 'tech',
    categoryLabel: 'Unicode & Tech',
    question: 'Why do some fonts or symbols appear as empty boxes or question marks [?]',
    answer: 'If a character appears as a blank box or question mark, it means your device or browser operating system lacks font fallback support for that specific Unicode character block. This usually only happens on older devices (such as Android 6 or older iOS versions). Over 99.8% of modern smartphones and computers display all characters perfectly.',
    keywords: ['blank box symbol fix', 'unicode missing character', 'font compatibility issue']
  },
  {
    id: 'commercial-use',
    category: 'general',
    categoryLabel: 'General & Usage',
    question: 'Can I use these fancy text styles for commercial projects, branding, and ads?',
    answer: 'Yes! All character outputs are standard international Unicode characters, making them universally free to use in personal bios, marketing emails, social media ad copy, product titles, and creative branding.',
    keywords: ['commercial use fonts', 'free fonts for ads', 'social media branding fonts']
  },
  {
    id: 'zalgo-glitch-text',
    category: 'tools',
    categoryLabel: 'Tools & Features',
    question: 'What is Zalgo Glitch Text and how does the intensity slider work?',
    answer: 'Zalgo text uses special Unicode combining mark diacritics stacked on top of and below standard letters to create a spooky "glitched" or "corrupted" text effect (e.g. Z̷a̷l̷g̷o̷). The intensity slider on Fonti Studio allows you to control how tall or chaotic the combining marks stretch.',
    keywords: ['zalgo text generator', 'glitch font generator', 'scary text font']
  },
  {
    id: 'case-converter-tool',
    category: 'tools',
    categoryLabel: 'Tools & Features',
    question: 'How does the Case Converter tool help with formatting and SEO?',
    answer: 'Our Case Converter allows you to instantly transform raw text into UPPERCASE, lowercase, Title Case, Sentence case, CamelCase, Kebab-case, and Slug-case. This is ideal for content creators, bloggers, software developers, and SEO writers who need clean formatting.',
    keywords: ['case converter tool', 'title case converter', 'slugify text']
  },
  {
    id: 'seo-google-index',
    category: 'tech',
    categoryLabel: 'Unicode & Tech',
    question: 'Does Google search index Unicode fancy text in website titles and meta descriptions?',
    answer: 'Google can crawl and read Unicode text, but for optimal search engine indexing and screen reader accessibility, standard ASCII text is recommended for main website titles. Using fancy text in social media captions and user profiles is completely safe and effective for branding!',
    keywords: ['seo fancy text', 'google indexing unicode', 'accessibility screen reader fonts']
  }
];

interface FaqViewProps {
  onNavigateHome: () => void;
  onNavigateTool: (slug: string) => void;
  onNavigateCategory: (catId: string) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({
  onNavigateHome,
  onNavigateTool,
  onNavigateCategory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('how-it-works');
  const [copiedAnswerId, setCopiedAnswerId] = useState<string | null>(null);

  useEffect(() => {
    // Set Page Meta & Schema for Google SERP
    document.title = 'Frequently Asked Questions (FAQ) - Fonti Studio Fancy Text & Font Generator';
    
    // Inject Custom JSON-LD Schema specifically for FAQPage
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'FAQPage',
          '@id': `${window.location.origin}/faq/#faqpage`,
          'url': `${window.location.origin}/faq`,
          'name': 'Fonti Studio Frequently Asked Questions',
          'description': 'Frequently asked questions about fancy text generators, copy & paste fonts, Unicode compatibility, Instagram bio formatting, and kaomoji symbols.',
          'mainEntity': FAQ_DATA.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': window.location.origin
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'FAQ',
              'item': `${window.location.origin}/faq`
            }
          ]
        }
      ]
    };

    let script = document.querySelector('#jsonld-faq') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-faq';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd, null, 2);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCopyAnswer = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAnswerId(id);
    setTimeout(() => setCopiedAnswerId(null), 2000);
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-8 pb-12 text-slate-200">
      
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <button
          onClick={onNavigateHome}
          className="hover:text-pink-400 flex items-center gap-1 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Home</span>
        </button>
        <span>/</span>
        <span className="text-pink-400 font-bold">Frequently Asked Questions</span>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-extrabold uppercase tracking-wider">
          <HelpCircle className="h-4 w-4 text-pink-400" />
          <span>SEO & Help Center</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
          Frequently Asked <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Questions</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about fancy text generators, Unicode character compatibility, copy & paste fonts, Instagram bio formatting, and text tools.
        </p>
      </div>

      {/* Real-time FAQ Search Bar */}
      <div className="max-w-xl mx-auto relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-pink-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. instagram, free fire, zalgo, compatibility)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0D111D] border border-slate-700/80 focus:border-pink-500/80 focus:ring-2 focus:ring-pink-500/20 text-white placeholder-slate-500 text-sm font-medium shadow-xl transition-all outline-hidden"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 px-2 py-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-xs font-bold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'general', label: 'General & Usage' },
          { id: 'socials', label: 'Instagram & Gaming' },
          { id: 'tools', label: 'Tools & Features' },
          { id: 'tech', label: 'Unicode & Tech' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                : 'bg-[#0D111D] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0D111D] border-pink-500/50 shadow-xl shadow-pink-500/5'
                    : 'bg-[#0D111D]/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="mt-0.5 px-2 py-0.5 rounded-md bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[10px] font-extrabold shrink-0">
                      {faq.categoryLabel}
                    </span>
                    <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-pink-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-800/80 px-5 py-4 space-y-4 bg-slate-950/40"
                    >
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>

                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/60">
                        <div className="flex flex-wrap gap-1">
                          {faq.keywords.map((kw) => (
                            <span
                              key={kw}
                              className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-medium"
                            >
                              #{kw}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => handleCopyAnswer(faq.id, faq.answer)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-pink-500/20 text-slate-300 hover:text-pink-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                        >
                          {copiedAnswerId === faq.id ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span>Copy Answer</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 p-6 rounded-2xl bg-[#0D111D] border border-slate-800 space-y-3">
            <HelpCircle className="h-8 w-8 text-slate-500 mx-auto" />
            <h4 className="text-base font-bold text-white">No questions found matching "{searchQuery}"</h4>
            <p className="text-xs text-slate-400">Try searching with different keywords like "instagram", "symbols", "glitch", or "free".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </div>

      {/* Internal SEO Link Juice for Google Ranking */}
      <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-[#080B14] border border-slate-800 space-y-4">
        <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider text-center sm:text-left">
          Explore Popular Font Tools & Converters
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
            { label: 'Emoji Picker & Combiner', slug: 'emoji-picker-copy' }
          ].map((item) => (
            <button
              key={item.slug}
              onClick={() => onNavigateTool(item.slug)}
              className="px-3 py-1.5 rounded-xl bg-[#0D111D] hover:bg-pink-500/10 border border-slate-800 hover:border-pink-500/40 text-xs font-bold text-slate-300 hover:text-pink-300 transition-all cursor-pointer"
            >
              {item.label} →
            </button>
          ))}
        </div>
      </div>

      {/* Call to Action Box */}
      <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-pink-900/30 via-purple-900/30 to-indigo-900/30 border border-pink-500/30 text-center space-y-4">
        <Sparkles className="h-8 w-8 text-pink-400 mx-auto animate-pulse" />
        <h3 className="text-xl font-extrabold text-white font-display">
          Ready to generate 100+ fancy font styles?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Start converting your bio text, social media captions, and gaming nicknames instantly with our free Unicode generator.
        </p>
        <button
          onClick={onNavigateHome}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-extrabold text-sm shadow-xl shadow-pink-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
        >
          <span>Go to Font Generator</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
};

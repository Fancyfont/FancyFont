export type CategoryId = 
  | 'social-fonts'
  | 'text-styles'
  | 'invisible-special'
  | 'case-text'
  | 'counters'
  | 'gaming-bio'
  | 'emojis-kaomojis'
  | 'symbols';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
  badgeColor: string;
}

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  id: number;
  slug: string; // URL slug e.g. "fancy-text-generator"
  name: string;
  category: CategoryId;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  iconName: string;
  isPopular?: boolean;
  howToUseSteps: string[];
  features: string[];
  faqs: ToolFaq[];
}

export interface FontStyleOption {
  id: string;
  name: string;
  sampleText?: string;
  transform: (text: string) => string;
  category?: string;
}

export interface SymbolGroup {
  id: string;
  name: string;
  toolSlug?: string;
  symbols: { char: string; name: string; codePoint?: string }[];
}

export interface KaomojiCategory {
  name: string;
  items: string[];
}

export interface EmojiItem {
  emoji: string;
  name: string;
  category: string;
  tags: string[];
}

export interface FavoriteItem {
  id: string;
  type: 'font' | 'symbol' | 'kaomoji' | 'name';
  content: string;
  label?: string;
  timestamp: number;
}

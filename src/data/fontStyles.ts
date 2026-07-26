import { FontStyleOption } from '../types';
import {
  transformUnicodeRange,
  transformCircled,
  transformSquared,
  transformSmallCaps,
  transformSubscript,
  transformSuperscript,
  transformUpsideDown,
  transformReverse,
  transformMirror,
  transformWide,
  transformStrikethrough,
  transformUnderline,
  transformSlash,
  transformZalgo,
  transformDoubleUnderline,
  transformDoubleStrikethrough,
  transformWavyUnderline,
  transformDottedUnderline,
  transformOverline,
  transformParenthesized,
  transformRegionalIndicator,
  toAlternatingCase,
  transformArrowBelow,
  transformPlusBelow,
  transformCrossBelow,
  transformDotAbove,
  transformStarBetween,
  transformDotSeparated,
  transformDashSeparated,
  transformSlashSeparated,
  transformTildeSeparated
} from '../utils/textTransform';

export const FONT_STYLE_OPTIONS: FontStyleOption[] = [
  // 1-15 Core Serif & Script Unicode
  {
    id: 'bold-serif',
    name: 'Bold Serif',
    transform: (t) => transformUnicodeRange(t, 'bold')
  },
  {
    id: 'italic-serif',
    name: 'Italic Serif',
    transform: (t) => transformUnicodeRange(t, 'italic')
  },
  {
    id: 'bold-italic-serif',
    name: 'Bold Italic Serif',
    transform: (t) => transformUnicodeRange(t, 'boldItalic')
  },
  {
    id: 'script-cursive',
    name: 'Cursive Script',
    transform: (t) => transformUnicodeRange(t, 'script')
  },
  {
    id: 'bold-script',
    name: 'Bold Cursive Script',
    transform: (t) => transformUnicodeRange(t, 'boldScript')
  },
  {
    id: 'fraktur-gothic',
    name: 'Gothic / Fraktur',
    transform: (t) => transformUnicodeRange(t, 'fraktur')
  },
  {
    id: 'bold-fraktur',
    name: 'Bold Gothic / Old English',
    transform: (t) => transformUnicodeRange(t, 'boldFraktur')
  },
  {
    id: 'double-struck',
    name: 'Double Struck (Outline)',
    transform: (t) => transformUnicodeRange(t, 'doubleStruck')
  },
  {
    id: 'sans-serif',
    name: 'Sans-Serif Regular',
    transform: (t) => transformUnicodeRange(t, 'sans')
  },
  {
    id: 'sans-bold',
    name: 'Sans-Serif Bold',
    transform: (t) => transformUnicodeRange(t, 'sansBold')
  },
  {
    id: 'sans-italic',
    name: 'Sans-Serif Italic',
    transform: (t) => transformUnicodeRange(t, 'sansItalic')
  },
  {
    id: 'sans-bold-italic',
    name: 'Sans-Serif Bold Italic',
    transform: (t) => transformUnicodeRange(t, 'sansBoldItalic')
  },
  {
    id: 'monospace',
    name: 'Monospace Code',
    transform: (t) => transformUnicodeRange(t, 'monospace')
  },
  {
    id: 'wide-fullwidth',
    name: 'Vaporwave Fullwidth (Ｗ ｉ ｄ ｅ)',
    transform: (t) => transformUnicodeRange(t, 'fullwidth')
  },
  {
    id: 'small-caps',
    name: 'Small Caps (sᴍᴀʟʟ ᴄᴀᴘs)',
    transform: (t) => transformSmallCaps(t)
  },

  // 16-25 Enclosed & Box Styles
  {
    id: 'circled-outline',
    name: 'Circled Bubble (ⒶⒷⒸ)',
    transform: (t) => transformCircled(t, false)
  },
  {
    id: 'circled-filled',
    name: 'Filled Bubble (🅐🅑🅒)',
    transform: (t) => transformCircled(t, true)
  },
  {
    id: 'squared-outline',
    name: 'Squared Box (🄰🄱🄲)',
    transform: (t) => transformSquared(t, false)
  },
  {
    id: 'squared-filled',
    name: 'Filled Box (🅰🅱🅂)',
    transform: (t) => transformSquared(t, true)
  },
  {
    id: 'parenthesized',
    name: 'Parenthesized (⒜⒝⒞)',
    transform: (t) => transformParenthesized(t)
  },
  {
    id: 'regional-indicators',
    name: 'Emoji Regional Flags (🇦🇧🇨)',
    transform: (t) => transformRegionalIndicator(t)
  },

  // 26-38 Diacritics & Line Styles
  {
    id: 'strikethrough',
    name: 'Strikethrough (S̶t̶r̶i̶k̶e̶)',
    transform: (t) => transformStrikethrough(t)
  },
  {
    id: 'double-strikethrough',
    name: 'Double Strikethrough (S̵t̵r̵i̵k̵e̵)',
    transform: (t) => transformDoubleStrikethrough(t)
  },
  {
    id: 'underline',
    name: 'Underline (U̲n̲d̲e̲r̲l̲i̲n̲e̲)',
    transform: (t) => transformUnderline(t)
  },
  {
    id: 'double-underline',
    name: 'Double Underline (U̳n̳d̳e̳r̳l̳i̳n̳e̳)',
    transform: (t) => transformDoubleUnderline(t)
  },
  {
    id: 'wavy-underline',
    name: 'Wavy Underline (W̰a̰v̰y̰)',
    transform: (t) => transformWavyUnderline(t)
  },
  {
    id: 'dotted-underline',
    name: 'Dotted Underline (Ḍọṭṭẹḍ)',
    transform: (t) => transformDottedUnderline(t)
  },
  {
    id: 'overline',
    name: 'Overline (O̅v̅e̅r̅l̅i̅n̅e̅)',
    transform: (t) => transformOverline(t)
  },
  {
    id: 'slash-through',
    name: 'Slash Through (S̷l̷a̷s̷h̷)',
    transform: (t) => transformSlash(t)
  },
  {
    id: 'arrow-below',
    name: 'Arrow Accent Below (A͔r͔r͔o͔w͔)',
    transform: (t) => transformArrowBelow(t)
  },
  {
    id: 'plus-below',
    name: 'Plus Sign Below (P͓l͓u͓s͓)',
    transform: (t) => transformPlusBelow(t)
  },
  {
    id: 'cross-below',
    name: 'Cross Accent Below (C͓r͓o͓s͓s͓)',
    transform: (t) => transformCrossBelow(t)
  },
  {
    id: 'dot-above',
    name: 'Dot Accent Above (Ḋȯṫṡ)',
    transform: (t) => transformDotAbove(t)
  },

  // 39-50 Size, Reverse, Flip & Spacing
  {
    id: 'superscript-tiny',
    name: 'Superscript Tiny (ᵗⁱⁿʸ)',
    transform: (t) => transformSuperscript(t)
  },
  {
    id: 'subscript-tiny',
    name: 'Subscript Tiny (ₜᵢₙᵧ)',
    transform: (t) => transformSubscript(t)
  },
  {
    id: 'upside-down',
    name: 'Upside Down (ʇxǝʇ)',
    transform: (t) => transformUpsideDown(t)
  },
  {
    id: 'reverse-text',
    name: 'Reversed Backwards',
    transform: (t) => transformReverse(t)
  },
  {
    id: 'mirror-text',
    name: 'Mirrored Letters',
    transform: (t) => transformMirror(t)
  },
  {
    id: 'wide-spaced',
    name: 'Spaced Aesthetic (S p a c e d)',
    transform: (t) => transformWide(t)
  },
  {
    id: 'extra-spaced',
    name: 'Ultra Wide Spaced (S  p  a  c  e  d)',
    transform: (t) => t.split('').join('   ')
  },
  {
    id: 'star-between',
    name: 'Star Interspaced (S★t★a★r)',
    transform: (t) => transformStarBetween(t)
  },
  {
    id: 'dot-separated',
    name: 'Dot Interspaced (D•o•t•s)',
    transform: (t) => transformDotSeparated(t)
  },
  {
    id: 'dash-separated',
    name: 'Dash Interspaced (D-a-s-h)',
    transform: (t) => transformDashSeparated(t)
  },
  {
    id: 'slash-separated',
    name: 'Slash Interspaced (S/l/a/s/h)',
    transform: (t) => transformSlashSeparated(t)
  },
  {
    id: 'tilde-separated',
    name: 'Wave Interspaced (W~a~v~e)',
    transform: (t) => transformTildeSeparated(t)
  },

  // 51-55 Case & Glitch
  {
    id: 'alternating-spongebob',
    name: 'Mocking Spongebob Case',
    transform: (t) => toAlternatingCase(t)
  },
  {
    id: 'zalgo-spooky-mild',
    name: 'Zalgo Glitch Mild',
    transform: (t) => transformZalgo(t, 2)
  },
  {
    id: 'zalgo-spooky-intense',
    name: 'Zalgo Glitch Heavy (G̵l̷i̸t̷c̶h̷)',
    transform: (t) => transformZalgo(t, 6)
  },

  // 56-105 Decorative Frames, Wings & Gaming Borders
  {
    id: 'decor-stars',
    name: 'Star Wings Border',
    transform: (t) => `★彡[ ${t} ]彡★`
  },
  {
    id: 'decor-crown',
    name: 'Royal Crown Frame',
    transform: (t) => `꧁༺ ${t} ༻꧂`
  },
  {
    id: 'decor-sparkle',
    name: 'Sparkle Sparkle',
    transform: (t) => `✧･ﾟ: *✧ ${t} ✧*:･ﾟ✧`
  },
  {
    id: 'decor-brackets',
    name: 'Asian Brackets Frame',
    transform: (t) => `【 ${t} 】`
  },
  {
    id: 'decor-heart',
    name: 'Heart Framing',
    transform: (t) => `♡̶ ${t} ♡̶`
  },
  {
    id: 'decor-aesthetic-heart',
    name: 'Coquette Bow & Hearts',
    transform: (t) => `₊˚⊹♡ ${t} ♡⊹˚₊`
  },
  {
    id: 'decor-headphone',
    name: 'Headphone Vibes',
    transform: (t) => `₊˚.🎧 ₊˚ ${t} 🎧.₊˚`
  },
  {
    id: 'decor-dots',
    name: 'Dotted Line Border',
    transform: (t) => `•?•-- ${t} --•?•`
  },
  {
    id: 'decor-arrows',
    name: 'Double Arrow Border',
    transform: (t) => `«────── ${t} ──────»`
  },
  {
    id: 'decor-flower',
    name: 'Cherry Blossom Border',
    transform: (t) => `🌸 ｡･:*:${t}:*:･ﾟ🌸`
  },
  {
    id: 'decor-butterfly',
    name: 'Butterfly Wings',
    transform: (t) => `ʚ³º✧ ${t} ✧º³ɞ`
  },
  {
    id: 'decor-crossbones',
    name: 'Gamer Skull & Crossbones',
    transform: (t) => `☠︎ ${t} ☠︎`
  },
  {
    id: 'decor-lightning',
    name: 'Power Lightning Bolts',
    transform: (t) => `⚡ ${t} ⚡`
  },
  {
    id: 'decor-swords',
    name: 'Crossed Swords Fighter',
    transform: (t) => `⚔️ ${t} ⚔️`
  },
  {
    id: 'decor-queen-crown',
    name: 'Queen Crown & Sparkles',
    transform: (t) => `👑✨ ${t} ✨👑`
  },
  {
    id: 'decor-crystal-ball',
    name: 'Mystic Crystal Orbs',
    transform: (t) => `🔮 ${t} 🔮`
  },
  {
    id: 'decor-cloud-soft',
    name: 'Soft Cloud Bubble',
    transform: (t) => `☁️✨ ${t} ✨☁️`
  },
  {
    id: 'decor-retro-box',
    name: 'Retro Arcade Box',
    transform: (t) => `░▒▓█ ${t} █▓▒░`
  },
  {
    id: 'decor-border-double',
    name: 'Double Line Box',
    transform: (t) => `╔════ ${t} ════╗`
  },
  {
    id: 'decor-border-single',
    name: 'Single Corner Box',
    transform: (t) => `┌────── ${t} ──────┐`
  },
  {
    id: 'decor-japanese-corner',
    name: 'Japanese Aesthetic Corner',
    transform: (t) => `╰─▸ ${t}`
  },
  {
    id: 'decor-aesthetic-arrow',
    name: 'Cute Arrow Pointer',
    transform: (t) => `╰┈➤ ❝ ${t} ❞`
  },
  {
    id: 'decor-angel-wings',
    name: 'Angel Feather Wings',
    transform: (t) => `𓆩 ${t} 𓆪`
  },
  {
    id: 'decor-vintage-scroll',
    name: 'Vintage Ornament Scroll',
    transform: (t) => `༻¨*:·. ${t} .·:*¨༺`
  },
  {
    id: 'decor-diamond-stars',
    name: 'Diamond Star Constellation',
    transform: (t) => `✧˚➶ ${t} ➷˚✧`
  },
  {
    id: 'decor-cozy-bear',
    name: 'Soft Teddy Bear',
    transform: (t) => `🧸 ${t} 🧸`
  },
  {
    id: 'decor-ribbon-bow',
    name: 'Ribbon Bow Framing',
    transform: (t) => `🎀 ${t} 🎀`
  },
  {
    id: 'decor-music-melody',
    name: 'Music Melody Notes',
    transform: (t) => `🎵 ${t} 🎶`
  },
  {
    id: 'decor-flame-fire',
    name: 'Hot Fire Flame',
    transform: (t) => `🔥 ${t} 🔥`
  },
  {
    id: 'decor-crescent-moon',
    name: 'Crescent Moon & Stars',
    transform: (t) => `🌙✨ ${t} ✨🌙`
  },
  {
    id: 'decor-gamer-target',
    name: 'Gamer Sniper Target',
    transform: (t) => `🎯 ${t} 🎯`
  },
  {
    id: 'decor-alien-pixel',
    name: 'Pixel Invader Alien',
    transform: (t) => `👾 ${t} 👾`
  },
  {
    id: 'decor-cyber-pulse',
    name: 'Cyber Neon Pulse',
    transform: (t) => `⚡◈ ${t} ◈⚡`
  },
  {
    id: 'decor-lotus-flower',
    name: 'Zen Lotus Flower',
    transform: (t) => `🪷 ${t} 🪷`
  },
  {
    id: 'decor-royal-fleur',
    name: 'Royal Fleur de Lis',
    transform: (t) => `⚜️ ${t} ⚜️`
  },
  {
    id: 'decor-lucky-clover',
    name: 'Four Leaf Clover Luck',
    transform: (t) => `🍀 ${t} 🍀`
  },
  {
    id: 'decor-snowflake-frost',
    name: 'Winter Frost Snowflake',
    transform: (t) => `❄️ ${t} ❄️`
  },
  {
    id: 'decor-sweet-candy',
    name: 'Sweet Candy Sugar',
    transform: (t) => `🍬 ${t} 🍬`
  },
  {
    id: 'decor-aesthetic-quotes',
    name: 'Aesthetic Quotes',
    transform: (t) => `❝ ${t} ❞`
  },
  {
    id: 'decor-ocean-wave',
    name: 'Ocean Surf Wave',
    transform: (t) => `🌊 ${t} 🌊`
  },
  {
    id: 'decor-galaxy-planet',
    name: 'Cosmic Galaxy Planet',
    transform: (t) => `🪐 ${t} 🪐`
  },
  {
    id: 'decor-magic-wand',
    name: 'Magic Wand Sparkles',
    transform: (t) => `🪄✨ ${t} ✨`
  },
  {
    id: 'decor-diamond-jewel',
    name: 'Shining Diamond Gem',
    transform: (t) => `💎 ${t} 💎`
  },
  {
    id: 'decor-sunflower',
    name: 'Sunflower Sunshine',
    transform: (t) => `🌻 ${t} 🌻`
  },
  {
    id: 'decor-coffee-cozy',
    name: 'Cozy Coffee Break',
    transform: (t) => `☕ ${t} ☕`
  },
  {
    id: 'decor-peace-dove',
    name: 'Peaceful White Dove',
    transform: (t) => `🕊️ ${t} 🕊️`
  }
];


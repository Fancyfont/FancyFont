import { ToolDefinition } from '../types';

export const TOOLS_DATA: ToolDefinition[] = [
  // --- 1 to 10: Font Generators & Social Media Fonts ---
  {
    id: 1,
    slug: 'fancy-text-generator',
    name: 'Fancy Text Generator',
    category: 'text-styles',
    shortDesc: 'Convert standard text into 40+ fancy, stylish Unicode font styles with one click.',
    metaTitle: 'Fancy Text Generator - 100+ Cool Stylish Font Styles (Copy & Paste)',
    metaDescription: 'Free online Fancy Text Generator. Transform your plain text into stylish fonts, cursive symbols, bold lettering, and cool Unicode styles for bios, posts, and captions.',
    keywords: ['fancy text generator', 'cool text font', 'fancy font converter', 'fancy lettering', 'copy paste fancy text'],
    iconName: 'Wand2',
    isPopular: true,
    howToUseSteps: [
      'Type or paste your normal text into the input field.',
      'Browse through dozens of instant fancy font previews.',
      'Click the Copy button next to your favorite font style.',
      'Paste your cool text on Instagram, TikTok, Discord, or WhatsApp!'
    ],
    features: [
      'Instant real-time live preview generation',
      'Over 40+ unique Unicode font transformations',
      'One-click copy with quick visual toast alert',
      '100% compatible with modern social media platforms'
    ],
    faqs: [
      { question: 'How does the Fancy Text Generator work?', answer: 'It converts ASCII characters into special Unicode symbols that look like different fonts, allowing them to be copied and pasted anywhere.' },
      { question: 'Is this free to use?', answer: 'Yes, Fonti Fancy Text Generator is 100% free with no limits or registration required.' }
    ]
  },
  {
    id: 2,
    slug: 'stylish-font-generator',
    name: 'Stylish Font Generator',
    category: 'text-styles',
    shortDesc: 'Generate trendy, stylish font styles with aesthetic decorations and symbols.',
    metaTitle: 'Stylish Font Generator - Copy & Paste Aesthetic Text Styles',
    metaDescription: 'Create aesthetic and stylish fonts for your social media bios, nicknames, and messages. Free online stylish text creator with copy & paste.',
    keywords: ['stylish font generator', 'aesthetic font generator', 'cool fonts copy paste', 'stylish text maker'],
    iconName: 'Sparkles',
    isPopular: true,
    howToUseSteps: [
      'Enter your desired text in the text area.',
      'Explore aesthetic, decorated, and stylish font variations.',
      'Click Copy to instantly copy the text to your clipboard.'
    ],
    features: [
      'Combines decorative symbols with fancy fonts',
      'Perfect for social bios and highlight covers',
      'Instant copy & paste capability'
    ],
    faqs: [
      { question: 'Can I use stylish fonts on Instagram?', answer: 'Yes! All fonts generated use standard Unicode symbols supported by Instagram.' }
    ]
  },
  {
    id: 3,
    slug: 'unicode-font-generator',
    name: 'Unicode Font Generator',
    category: 'text-styles',
    shortDesc: 'Access authentic Unicode character sets including Mathematical Alphabets, Script, and Fraktur.',
    metaTitle: 'Unicode Font Generator - Mathematical & Special Character Fonts',
    metaDescription: 'Convert plain text into mathematical alphanumeric symbols, script, fraktur, and double-struck unicode fonts.',
    keywords: ['unicode font generator', 'unicode text generator', 'unicode alphabets', 'math bold fonts'],
    iconName: 'Binary',
    howToUseSteps: [
      'Type text into the input box.',
      'Select from Mathematical Bold, Italic, Monospace, or Double-Struck.',
      'Click Copy to copy standard Unicode character codes.'
    ],
    features: [
      'Official Unicode 15.0 compliant character sets',
      'Supports numbers, upper-case, and lower-case letters',
      'Clean output with high cross-platform compatibility'
    ],
    faqs: [
      { question: 'What is Unicode text?', answer: 'Unicode is an international encoding standard that assigns a unique number to every character across platforms.' }
    ]
  },
  {
    id: 4,
    slug: 'instagram-font-generator',
    name: 'Instagram Font Generator',
    category: 'social-fonts',
    shortDesc: 'Create eye-catching fonts for Instagram bios, story captions, and comment replies.',
    metaTitle: 'Instagram Font Generator - Stand Out Instagram Bio Fonts',
    metaDescription: 'Generate custom Instagram fonts for your bio, captions, and comments. Copy and paste stylish fonts directly into Instagram.',
    keywords: ['instagram font generator', 'instagram bio fonts', 'ig font generator', 'fonts for instagram'],
    iconName: 'Instagram',
    isPopular: true,
    howToUseSteps: [
      'Write your Instagram bio or caption in the generator.',
      'Choose a font style that matches your aesthetic.',
      'Copy and paste into your Instagram Profile settings.'
    ],
    features: [
      'Optimized for Instagram mobile and web apps',
      'Includes bio decoration templates',
      'Instant copy with zero extra spaces'
    ],
    faqs: [
      { question: 'Why don\'t some characters show up on Instagram?', answer: 'Older devices or app versions may not support newer Unicode symbols. Stick to bold, script, or small caps for max compatibility.' }
    ]
  },
  {
    id: 5,
    slug: 'discord-font-generator',
    name: 'Discord Font Generator',
    category: 'social-fonts',
    shortDesc: 'Generate bold, gothic, and cool fonts for Discord usernames, channel names, and server bios.',
    metaTitle: 'Discord Font Generator - Cool Discord Username & Channel Fonts',
    metaDescription: 'Stand out on Discord with custom channel name fonts, role text, and server nickname styles. Copy and paste free Discord fonts.',
    keywords: ['discord font generator', 'discord channel name fonts', 'discord nickname fonts', 'fonts for discord'],
    iconName: 'MessageSquare',
    isPopular: true,
    howToUseSteps: [
      'Type your Discord server name or nickname.',
      'Select a bold, monospace, or gothic style.',
      'Copy and update your Discord profile or server settings.'
    ],
    features: [
      'Discord markdown compatible',
      'Works for channel names, status, and role titles',
      'Clean monospace & boxed font options'
    ],
    faqs: [
      { question: 'Can I use custom fonts for Discord channel names?', answer: 'Yes! Discord channel names support most Unicode text styles except spaces (which convert to dashes).' }
    ]
  },
  {
    id: 6,
    slug: 'facebook-font-generator',
    name: 'Facebook Font Generator',
    category: 'social-fonts',
    shortDesc: 'Format Facebook status updates, group posts, and page bios with bold & italic fonts.',
    metaTitle: 'Facebook Font Generator - Bold & Italic Facebook Post Fonts',
    metaDescription: 'Make your Facebook posts and comments stand out with bold, italic, and stylish fancy fonts. Free copy and paste tool.',
    keywords: ['facebook font generator', 'fb bold text', 'facebook bio fonts', 'bold text for facebook'],
    iconName: 'Facebook',
    howToUseSteps: [
      'Paste your Facebook status draft into the box.',
      'Pick bold, italic, or underlined text styles.',
      'Copy and paste into your Facebook post composer.'
    ],
    features: [
      'Great for emphasizing key announcements',
      'Bold & Italic serif and sans-serif styles',
      'Mobile Facebook feed friendly'
    ],
    faqs: [
      { question: 'Does Facebook allow bold text?', answer: 'Facebook does not have native formatting, but you can use Unicode bold characters generated here.' }
    ]
  },
  {
    id: 7,
    slug: 'tiktok-font-generator',
    name: 'TikTok Font Generator',
    category: 'social-fonts',
    shortDesc: 'Aesthetic font styles for TikTok bios, video captions, and display names.',
    metaTitle: 'TikTok Font Generator - Aesthetic TikTok Bio & Caption Fonts',
    metaDescription: 'Generate aesthetic, trendy TikTok bio fonts and video caption styles. Copy & paste cool fonts for TikTok.',
    keywords: ['tiktok font generator', 'tiktok bio fonts', 'fonts for tiktok', 'aesthetic tiktok text'],
    iconName: 'Video',
    isPopular: true,
    howToUseSteps: [
      'Enter your TikTok username or bio text.',
      'Select an aesthetic or viral text style.',
      'Copy and update your TikTok profile.'
    ],
    features: [
      'Trendy aesthetic font styles',
      'Short bio line decorators included',
      'Instant clipboard copy'
    ],
    faqs: [
      { question: 'How do I change my TikTok font?', answer: 'Copy the generated text from Fonti and paste it directly into your TikTok profile bio edit field.' }
    ]
  },
  {
    id: 8,
    slug: 'whatsapp-font-generator',
    name: 'WhatsApp Font Generator',
    category: 'social-fonts',
    shortDesc: 'Custom fonts, status text, and decorated messages for WhatsApp chats and About info.',
    metaTitle: 'WhatsApp Font Generator - Fancy Text for WhatsApp Chats & Status',
    metaDescription: 'Generate cool fancy text and custom font styles for WhatsApp messages, group names, and About status. Free copy paste.',
    keywords: ['whatsapp font generator', 'whatsapp fancy text', 'whatsapp status font', 'fonts for whatsapp'],
    iconName: 'MessageCircle',
    howToUseSteps: [
      'Input message or status text.',
      'Choose bubble, bold, or cursive font.',
      'Copy and send in WhatsApp.'
    ],
    features: [
      'Works in WhatsApp chats and status updates',
      'Combines with native WhatsApp formatting (*bold*, _italic_)',
      'Lightweight and fast'
    ],
    faqs: [
      { question: 'Will my WhatsApp contacts see the fancy font?', answer: 'Yes! Since these are standard Unicode characters, all smartphones render them natively.' }
    ]
  },
  {
    id: 9,
    slug: 'twitter-x-font-generator',
    name: 'Twitter/X Font Generator',
    category: 'social-fonts',
    shortDesc: 'Bold tweet generator, X profile bio fonts, and handle decorations.',
    metaTitle: 'Twitter / X Font Generator - Bold Tweets & Bio Font Styles',
    metaDescription: 'Make your tweets and X bio pop with bold text, script fonts, and aesthetic symbols. Free Twitter font converter.',
    keywords: ['twitter font generator', 'x font generator', 'bold tweet generator', 'fonts for twitter'],
    iconName: 'Twitter',
    howToUseSteps: [
      'Write your tweet or X handle in the generator.',
      'Select bold or small caps for maximum legibility.',
      'Copy and paste onto X/Twitter.'
    ],
    features: [
      'Character count optimized for 280-char limit',
      'High contrast bold & italic variants',
      'Instant copy'
    ],
    faqs: [
      { question: 'Does bold text count as more characters on X?', answer: 'Unicode font characters count as 1 or 2 characters depending on the code point range.' }
    ]
  },
  {
    id: 10,
    slug: 'youtube-font-generator',
    name: 'YouTube Font Generator',
    category: 'social-fonts',
    shortDesc: 'Catchy fonts for YouTube video titles, channel descriptions, and pinned comments.',
    metaTitle: 'YouTube Font Generator - Catchy Video Title & Description Fonts',
    metaDescription: 'Boost your YouTube CTR with catchy video title fonts, channel name styles, and comment fonts. Copy and paste free fonts.',
    keywords: ['youtube font generator', 'youtube title font', 'youtube channel font', 'bold youtube text'],
    iconName: 'Youtube',
    howToUseSteps: [
      'Type your YouTube video title or description.',
      'Pick a bold or squared font style.',
      'Copy and paste into YouTube Studio.'
    ],
    features: [
      'Designed to increase click-through rate (CTR)',
      'Clean readable bold styles',
      'Fully YouTube search compatible'
    ],
    faqs: [
      { question: 'Will custom fonts affect YouTube SEO?', answer: 'YouTube search indexes Unicode text, but keep main keywords in standard text for best SEO ranking.' }
    ]
  },

  // --- 11 to 16: Symbols, Emojis & Kaomojis ---
  {
    id: 11,
    slug: 'symbol-generator',
    name: 'Symbol Generator',
    category: 'symbols',
    shortDesc: 'Generate custom text combinations framed with aesthetic symbols, stars, and borders.',
    metaTitle: 'Symbol Generator - Aesthetic Text & Symbol Decorator',
    metaDescription: 'Combine your text with aesthetic symbols, wings, stars, and decorative borders. Free online symbol generator tool.',
    keywords: ['symbol generator', 'text symbol decorator', 'aesthetic symbols', 'cool symbol borders'],
    iconName: 'Sparkles',
    howToUseSteps: [
      'Enter text in the generator.',
      'Choose a decorative symbol border frame.',
      'Copy the decorated text instantly.'
    ],
    features: ['Over 50+ pre-built symbol frames', 'Mix and match symbols', 'One-click copy'],
    faqs: [{ question: 'What are symbol frames?', answer: 'Decorative ASCII/Unicode symbol wrappers placed around your input text.' }]
  },
  {
    id: 12,
    slug: 'unicode-symbol-library',
    name: 'Unicode Symbol Library',
    category: 'symbols',
    shortDesc: 'Browse 1000+ categorized Unicode symbols with single-click copy and codepoint inspection.',
    metaTitle: 'Unicode Symbol Library - 1000+ Copy & Paste Symbols',
    metaDescription: 'Complete directory of Unicode symbols: math, arrows, hearts, currency, stars, chess, zodiac, and box drawing symbols.',
    keywords: ['unicode symbol library', 'copy paste symbols', 'all unicode symbols', 'symbol directory'],
    iconName: 'Grid',
    isPopular: true,
    howToUseSteps: [
      'Browse or search by category name.',
      'Click any symbol to copy it to your clipboard.',
      'View HTML entity codes and Unicode hex.'
    ],
    features: ['Categorized symbol collections', 'Live instant symbol search', 'Codepoint details'],
    faqs: [{ question: 'What is a Unicode codepoint?', answer: 'A unique hex identifier such as U+2665 for the solid heart symbol.' }]
  },
  {
    id: 13,
    slug: 'emoji-picker',
    name: 'Emoji Picker',
    category: 'emojis-kaomojis',
    shortDesc: 'Searchable emoji keyboard with skin tone selection, categories, and instant copy.',
    metaTitle: 'Emoji Picker - Fast Search & Copy Paste Emojis',
    metaDescription: 'Find any emoji quickly with our searchable emoji picker keyboard. Copy smileys, animals, food, and symbol emojis.',
    keywords: ['emoji picker', 'search emojis', 'copy paste emoji', 'emoji keyboard online'],
    iconName: 'Smile',
    isPopular: true,
    howToUseSteps: ['Type a keyword in search.', 'Select skin tone if applicable.', 'Click to copy emoji.'],
    features: ['Fast keyword search', 'Skin tone modifier support', 'Multi-emoji collection basket'],
    faqs: [{ question: 'Are all emojis supported on Windows/Mac?', answer: 'Yes, modern operating systems support Unicode 15 emoji standards.' }]
  },
  {
    id: 14,
    slug: 'emoji-combiner',
    name: 'Emoji Combiner',
    category: 'emojis-kaomojis',
    shortDesc: 'Mix and combine two emojis into creative emoji mashups and artistic combinations.',
    metaTitle: 'Emoji Combiner - Mix & Combine Emojis Online',
    metaDescription: 'Combine two emojis into unique custom emoji art combinations. Free emoji mixer and mashup generator.',
    keywords: ['emoji combiner', 'emoji kitchen online', 'mix emojis', 'emoji mashup generator'],
    iconName: 'Combine',
    isPopular: true,
    howToUseSteps: ['Pick your first emoji.', 'Pick your second emoji.', 'Copy the generated emoji mashup art!'],
    features: ['Creative emoji pairing', 'One-click copy', 'Randomize button for instant ideas'],
    faqs: [{ question: 'How does emoji combining work?', answer: 'It pairs complementary emojis into expressive aesthetic text sequences or emoji kitchen art.' }]
  },
  {
    id: 15,
    slug: 'kaomoji-generator',
    name: 'Kaomoji Generator',
    category: 'emojis-kaomojis',
    shortDesc: 'Generate custom Japanese text emoticons (kaomojis) with arms, eyes, and action accessories.',
    metaTitle: 'Kaomoji Generator - Build Custom Japanese Emoticons',
    metaDescription: 'Build your own custom Japanese kaomoji emoticons with customizable eyes, mouths, and arms. Free kaomoji creator.',
    keywords: ['kaomoji generator', 'custom kaomoji maker', 'japanese emoticon maker', 'build kaomoji'],
    iconName: 'Sliders',
    howToUseSteps: ['Select left arm, eye, mouth, right arm.', 'Preview your custom kaomoji.', 'Copy with one click.'],
    features: ['Modular kaomoji builder', 'Thousands of unique combinations', 'Instant copy'],
    faqs: [{ question: 'What is a Kaomoji?', answer: 'Kaomoji (顔文字) are Japanese text emoticons read horizontally without tilting your head.' }]
  },
  {
    id: 16,
    slug: 'kaomoji-library',
    name: 'Kaomoji Library',
    category: 'emojis-kaomojis',
    shortDesc: 'Extensive repository of Japanese emoticons organized by emotions (Happy, Sad, Angry, Cute, Table Flip, Shrug).',
    metaTitle: 'Kaomoji Library - 500+ Japanese Text Emoticons (Copy Paste)',
    metaDescription: 'Browse over 500+ categorized Japanese kaomojis: table flip, shrug, cute, love, angry, animal emoticons.',
    keywords: ['kaomoji library', 'table flip kaomoji', 'shrug kaomoji', 'cute kaomoji copy paste'],
    iconName: 'BookOpen',
    isPopular: true,
    howToUseSteps: ['Select an emotion tab (Happy, Angry, Love, etc.).', 'Click any kaomoji to copy.', 'Paste in chat or bio.'],
    features: ['Over 500+ organized kaomojis', 'Filter by mood/emotion', 'One-click instant copy'],
    faqs: [{ question: 'What is the table flip kaomoji?', answer: '(╯°□°)╯︵ ┻━┻ is the iconic table flip emoticon expressing frustration!' }]
  },

  // --- 17 to 30: Text Generators & Special Characters ---
  {
    id: 17,
    slug: 'zalgo-text-generator',
    name: 'Zalgo Text Generator',
    category: 'text-styles',
    shortDesc: 'Add spooky, glitchy vertical mark distortion to text with adjustable intensity controls.',
    metaTitle: 'Zalgo Text Generator - Spooky Glitchy Text Creator',
    metaDescription: 'Generate creepy Zalgo text with corrupted vertical mark diacritics. Adjustable chaos slider for scary glitch text.',
    keywords: ['zalgo text generator', 'zalgo font', 'scary text generator', 'creepy glitch text'],
    iconName: 'Zap',
    isPopular: true,
    howToUseSteps: ['Enter your message.', 'Adjust the Zalgo craziness slider.', 'Copy your corrupted text.'],
    features: ['Adjustable distortion height', 'Up, down, and middle glitch toggle', 'Copy instantly'],
    faqs: [{ question: 'What causes Zalgo text?', answer: 'Zalgo text combines dozens of Unicode mark diacritics onto a single letter.' }]
  },
  {
    id: 18,
    slug: 'glitch-text-generator',
    name: 'Glitch Text Generator',
    category: 'text-styles',
    shortDesc: 'Cyberpunk style corrupted and glitched font generator.',
    metaTitle: 'Glitch Text Generator - Cyberpunk Matrix Glitch Font',
    metaDescription: 'Transform text into cyberpunk glitch font style. Copy & paste corrupted matrix text for profiles and gaming.',
    keywords: ['glitch text generator', 'cyberpunk text', 'matrix font', 'corrupted text generator'],
    iconName: 'Cpu',
    howToUseSteps: ['Type text in generator.', 'Choose glitch style.', 'Copy to clipboard.'],
    features: ['Cyberpunk glitch aesthetic', 'Clean and chaotic modes', 'Instant copy'],
    faqs: [{ question: 'Where can I use glitch text?', answer: 'Glitch text works on Discord, Twitter, Twitch bios, and gaming usernames.' }]
  },
  {
    id: 19,
    slug: 'bubble-text-generator',
    name: 'Bubble Text Generator',
    category: 'text-styles',
    shortDesc: 'Convert letters into circled bubble characters (ⒶⒷⒸ or 🅐🅑🅒).',
    metaTitle: 'Bubble Text Generator - Circled & Squared Letter Font',
    metaDescription: 'Generate circle bubble letters and filled bubble font text. Free copy and paste bubble font converter.',
    keywords: ['bubble text generator', 'circled letters', 'bubble font copy paste', 'circle text maker'],
    iconName: 'CircleDot',
    howToUseSteps: ['Type normal text.', 'Choose outline or filled bubble style.', 'Click to copy.'],
    features: ['Outline & Filled bubble options', 'Supports numbers and letters', 'One-click copy'],
    faqs: [{ question: 'Does bubble text work on mobile?', answer: 'Yes, circled numbers and letters are supported on iOS and Android.' }]
  },
  {
    id: 20,
    slug: 'cursive-text-generator',
    name: 'Cursive Text Generator',
    category: 'text-styles',
    shortDesc: 'Convert plain text into elegant script handwriting and cursive fonts.',
    metaTitle: 'Cursive Text Generator - Elegant Handwriting Font Converter',
    metaDescription: 'Turn normal text into beautiful cursive, script, and handwritten style Unicode font. Copy & paste cursive text.',
    keywords: ['cursive text generator', 'handwriting font generator', 'script text generator', 'cursive fonts copy paste'],
    iconName: 'Feather',
    isPopular: true,
    howToUseSteps: ['Enter your text.', 'Pick standard or bold cursive script.', 'Copy and paste.'],
    features: ['Mathematical Script Unicode letters', 'Elegant handwriting look', 'Fast & lightweight'],
    faqs: [{ question: 'Can I paste cursive text into Instagram bios?', answer: 'Yes, cursive Unicode characters paste seamlessly into Instagram bios.' }]
  },
  {
    id: 21,
    slug: 'old-english-text-generator',
    name: 'Old English Text Generator',
    category: 'text-styles',
    shortDesc: 'Traditional blackletter, medieval, and calligraphy text converter.',
    metaTitle: 'Old English Text Generator - Calligraphy & Medieval Font',
    metaDescription: 'Convert plain text into classical Old English, Fraktur, and medieval calligraphic text. Free copy paste tool.',
    keywords: ['old english text generator', 'medieval font generator', 'fraktur text', 'calligraphy generator'],
    iconName: 'Book',
    howToUseSteps: ['Write your message.', 'Select Old English / Fraktur font.', 'Copy to clipboard.'],
    features: ['Authentic Fraktur Unicode ranges', 'Bold Old English options', 'Instant copy'],
    faqs: [{ question: 'What is Fraktur font?', answer: 'Fraktur is a calligraphic blackletter typeface popular in Europe from the 16th to 20th centuries.' }]
  },
  {
    id: 22,
    slug: 'gothic-text-generator',
    name: 'Gothic Text Generator',
    category: 'text-styles',
    shortDesc: 'Generate dark, edgy gothic and blackletter letter fonts.',
    metaTitle: 'Gothic Text Generator - Dark Gothic & Blackletter Font',
    metaDescription: 'Transform text into dark aesthetic gothic fonts for social media bios, tattoo design text, and music profiles.',
    keywords: ['gothic text generator', 'gothic font copy paste', 'blackletter generator', 'edgy text fonts'],
    iconName: 'Shield',
    howToUseSteps: ['Input your phrase.', 'Choose regular or bold gothic style.', 'Copy instantly.'],
    features: ['Dark aesthetic lettering', 'Bold blackletter variant', 'Copy-paste enabled'],
    faqs: [{ question: 'Is gothic text the same as Old English?', answer: 'They belong to the same blackletter font family, rendered via Unicode Fraktur characters.' }]
  },
  {
    id: 23,
    slug: 'small-text-generator',
    name: 'Small Text Generator',
    category: 'text-styles',
    shortDesc: 'Convert letters to Small Caps font (sᴍᴀʟʟ ᴄᴀᴘs).',
    metaTitle: 'Small Text Generator - Small Caps Font Creator',
    metaDescription: 'Convert standard text into small caps typography. Free online small font generator for copy & paste.',
    keywords: ['small text generator', 'small caps generator', 'tiny caps font', 'small letter font'],
    iconName: 'Minimize2',
    isPopular: true,
    howToUseSteps: ['Type your words.', 'Preview Small Caps format.', 'Click Copy.'],
    features: ['Authentic Small Caps characters', 'Clean typography look', 'Wide social media compatibility'],
    faqs: [{ question: 'What are Small Caps?', answer: 'Capital letters designed at the height of lowercase letters.' }]
  },
  {
    id: 24,
    slug: 'tiny-text-generator',
    name: 'Tiny Text Generator',
    category: 'text-styles',
    shortDesc: 'Generate tiny superscript (ᵗⁱⁿʸ) and subscript (ₜᵢₙᵧ) text.',
    metaTitle: 'Tiny Text Generator - Superscript & Subscript Font',
    metaDescription: 'Make tiny superscript and subscript text for math, science, or aesthetic social posts. Free tiny text generator.',
    keywords: ['tiny text generator', 'superscript generator', 'subscript text', 'tiny text copy paste'],
    iconName: 'Subscript',
    howToUseSteps: ['Enter text.', 'Select Superscript or Subscript.', 'Copy tiny text.'],
    features: ['Superscript and subscript modes', 'Perfect for math exponents and footnote style', 'One-click copy'],
    faqs: [{ question: 'Are all tiny letters supported in Unicode?', answer: 'Most lowercase letters and numbers have dedicated Unicode superscript/subscript codepoints.' }]
  },
  {
    id: 25,
    slug: 'upside-down-text-generator',
    name: 'Upside Down Text Generator',
    category: 'text-styles',
    shortDesc: 'Flip your text completely upside down (ʇxǝʇ uʍop ǝpısd∩).',
    metaTitle: 'Upside Down Text Generator - Flip Text Upside Down',
    metaDescription: 'Turn your text upside down and backwards! Free flip text generator for tricking friends and cool statuses.',
    keywords: ['upside down text generator', 'flip text generator', 'upside down letters', 'flipped text copy paste'],
    iconName: 'ArrowUpUp',
    howToUseSteps: ['Type sentence.', 'Watch it flip upside down in real time.', 'Copy flipped text.'],
    features: ['Reverses and rotates characters 180°', 'Flipping punctuation marks included', 'Instant copy'],
    faqs: [{ question: 'How is text turned upside down?', answer: 'It maps letters to upside-down Unicode equivalents and reverses the string sequence.' }]
  },
  {
    id: 26,
    slug: 'mirror-text-generator',
    name: 'Mirror Text Generator',
    category: 'text-styles',
    shortDesc: 'Create mirrored text reflecting characters horizontally (ɘɿoɿɿiM).',
    metaTitle: 'Mirror Text Generator - Reverse & Mirror Font Generator',
    metaDescription: 'Mirror your text horizontally. Free online mirror text converter for cool social media captions and puzzles.',
    keywords: ['mirror text generator', 'mirrored font', 'mirror letters', 'reverse mirror text'],
    iconName: 'FlipHorizontal',
    howToUseSteps: ['Input text.', 'Preview horizontally mirrored font.', 'Copy to clipboard.'],
    features: ['Mirrors individual character shapes', 'Unique puzzle effect', 'Copy-paste output'],
    faqs: [{ question: 'Can all letters be mirrored?', answer: 'Letters with Unicode mirror pairs (b/d, p/q, A, H, I, M, O, T, U, V, W, X, Y) mirror perfectly.' }]
  },
  {
    id: 27,
    slug: 'reverse-text-generator',
    name: 'Reverse Text Generator',
    category: 'text-styles',
    shortDesc: 'Reverse entire text word order or character sequence instantly.',
    metaTitle: 'Reverse Text Generator - Reverse String & Word Order',
    metaDescription: 'Reverse text characters or word sequence online. Free text flipper for coding, palindrome testing, and fun messages.',
    keywords: ['reverse text generator', 'reverse string online', 'flip text backwards', 'reverse word order'],
    iconName: 'Undo2',
    howToUseSteps: ['Enter sentence.', 'Select reverse characters or reverse words.', 'Copy output.'],
    features: ['Character reversal', 'Word order flipping', 'Line-by-line reversal mode'],
    faqs: [{ question: 'What is string reversal useful for?', answer: 'Testing palindromes, reversing logs, and creating secret backwards messages!' }]
  },
  {
    id: 28,
    slug: 'wide-text-generator',
    name: 'Wide Text Generator',
    category: 'text-styles',
    shortDesc: 'Generate fullwidth vaporwave aesthetic spaced text (Ｗ ｉ ｄ ｅ).',
    metaTitle: 'Wide Text Generator - Fullwidth Vaporwave Aesthetic Text',
    metaDescription: 'Convert text to wide fullwidth vaporwave font style. Free aesthetic wide text generator for copy paste.',
    keywords: ['wide text generator', 'vaporwave text generator', 'fullwidth font', 'spaced out text'],
    iconName: 'Maximize2',
    howToUseSteps: ['Type phrase.', 'Select standard spaces or fullwidth unicode characters.', 'Copy wide text.'],
    features: ['Vaporwave 80s aesthetic', 'Fullwidth Japanese Unicode blocks', 'Instant copy'],
    faqs: [{ question: 'What is Fullwidth text?', answer: 'Fullwidth characters match the width of traditional CJK (Chinese, Japanese, Korean) characters.' }]
  },
  {
    id: 29,
    slug: 'invisible-character-generator',
    name: 'Invisible Character Generator',
    category: 'invisible-special',
    shortDesc: 'Copy empty blank space characters for empty WhatsApp status, gaming names, and social posts.',
    metaTitle: 'Invisible Character Generator - Copy Blank Space (U+3164)',
    metaDescription: 'Copy invisible blank character (Hangul Filler U+3164, Zero Width Space). Paste empty names in PUBG, Discord, and Instagram.',
    keywords: ['invisible character generator', 'blank space copy paste', 'invisible text', 'u+3164 hangul filler'],
    iconName: 'EyeOff',
    isPopular: true,
    howToUseSteps: ['Click the big "Copy Invisible Character" button.', 'Test it in our live test box.', 'Paste wherever an empty space is required!'],
    features: ['Supports Hangul Filler U+3164', 'Zero-Width Space & Braille Blank', 'Live test box built-in'],
    faqs: [{ question: 'What is Hangul Filler U+3164?', answer: 'A Unicode character that renders as completely invisible space but is recognized as valid text by apps.' }]
  },
  {
    id: 30,
    slug: 'blank-character-generator',
    name: 'Blank Character Generator',
    category: 'invisible-special',
    shortDesc: 'Copy whitespace characters of varying widths (Em Space, En Space, Thin Space).',
    metaTitle: 'Blank Character Generator - Copy Empty Whitespace Text',
    metaDescription: 'Generate and copy blank whitespace characters of various widths for formatting, design, and blank messages.',
    keywords: ['blank character generator', 'copy empty text', 'blank space generator', 'whitespace characters'],
    iconName: 'Square',
    howToUseSteps: ['Choose whitespace width (Em, En, Thin, Hair).', 'Click to copy.', 'Paste in design or text fields.'],
    features: ['Multiple space width options', 'Copy with one click', 'Visual width indicators'],
    faqs: [{ question: 'What is an Em Space?', answer: 'An Em Space is a blank space equal to the point size of the current font.' }]
  },

  // --- 31 to 40: Case Converters & Text Counters ---
  {
    id: 31,
    slug: 'case-converter',
    name: 'Case Converter',
    category: 'case-text',
    shortDesc: 'All-in-one text case formatting tool with 10+ case styles.',
    metaTitle: 'Case Converter - Transform Text Case Online',
    metaDescription: 'Easily convert text case to Uppercase, Lowercase, Title Case, Sentence Case, CamelCase, and snake_case online.',
    keywords: ['case converter', 'text case converter', 'change text case', 'convert case online'],
    iconName: 'Repeat',
    isPopular: true,
    howToUseSteps: ['Paste text into the converter.', 'Click any case transformation button.', 'Copy formatted output.'],
    features: ['10+ Case styles supported', 'Preserves punctuation', 'Instant conversion'],
    faqs: [{ question: 'What is Title Case?', answer: 'Title Case capitalizes the first letter of every major word.' }]
  },
  {
    id: 32,
    slug: 'uppercase-converter',
    name: 'Uppercase Converter',
    category: 'case-text',
    shortDesc: 'Convert all letters in your text to ALL CAPS UPPERCASE.',
    metaTitle: 'Uppercase Converter - Convert Text to ALL CAPS',
    metaDescription: 'Instantly transform any text to ALL CAPS UPPERCASE online. Free tool with instant copy.',
    keywords: ['uppercase converter', 'all caps converter', 'capitalize text', 'make text uppercase'],
    iconName: 'ArrowUp',
    howToUseSteps: ['Input text.', 'Click "To UPPERCASE".', 'Copy result.'],
    features: ['Fast execution', 'Handles accent characters', 'Instant copy'],
    faqs: [{ question: 'Does uppercase affect numbers?', answer: 'No, numbers and symbols remain unchanged.' }]
  },
  {
    id: 33,
    slug: 'lowercase-converter',
    name: 'Lowercase Converter',
    category: 'case-text',
    shortDesc: 'Convert all text to small lowercase letters.',
    metaTitle: 'Lowercase Converter - Convert Text to all lowercase',
    metaDescription: 'Convert any text to lowercase letters online. Free online text un-capitalizer tool.',
    keywords: ['lowercase converter', 'make text lowercase', 'uncapitalize text', 'small letters converter'],
    iconName: 'ArrowDown',
    howToUseSteps: ['Paste text.', 'Click "To lowercase".', 'Copy text.'],
    features: ['Removes accidental caps', 'Clean output', 'One-click copy'],
    faqs: [{ question: 'Can I clean up copy-pasted text?', answer: 'Yes, it quickly normalizes shouting ALL CAPS text to lowercase.' }]
  },
  {
    id: 34,
    slug: 'title-case-converter',
    name: 'Title Case Converter',
    category: 'case-text',
    shortDesc: 'Capitalize the First Letter of Every Word for Headlines and Titles.',
    metaTitle: 'Title Case Converter - Capitalize Headline & Book Titles',
    metaDescription: 'Convert text to Title Case online. Perfect for blog post titles, book headlines, and article headers.',
    keywords: ['title case converter', 'capitalize title', 'headline case converter', 'title capitalizer'],
    iconName: 'Heading',
    howToUseSteps: ['Paste title or headline.', 'Click "Title Case".', 'Copy formatted title.'],
    features: ['Follows title capitalization rules', 'Great for bloggers and content creators', 'Instant copy'],
    faqs: [{ question: 'What is Title Case used for?', answer: 'Title Case is used for titles of books, articles, songs, and website headers.' }]
  },
  {
    id: 35,
    slug: 'sentence-case-converter',
    name: 'Sentence Case Converter',
    category: 'case-text',
    shortDesc: 'Capitalize the first letter of each sentence automatically.',
    metaTitle: 'Sentence Case Converter - Auto Capitalize Sentences',
    metaDescription: 'Automatically capitalize the first word of every sentence and fix caps lock mistakes. Free online tool.',
    keywords: ['sentence case converter', 'capitalize sentences', 'fix sentence caps', 'sentence format text'],
    iconName: 'Type',
    howToUseSteps: ['Paste unformatted paragraph.', 'Click "Sentence Case".', 'Copy polished text.'],
    features: ['Auto-detects sentence boundaries (. ! ?)', 'Fixes caps lock errors', 'Fast processing'],
    faqs: [{ question: 'Does sentence case fix i to I?', answer: 'Yes, it capitalizes standalone lowercase "i" pronouns.' }]
  },
  {
    id: 36,
    slug: 'alternating-case-converter',
    name: 'Alternating Case Converter',
    category: 'case-text',
    shortDesc: 'Convert text into aLtErNaTiNg cAsE (SpongeBob meme text).',
    metaTitle: 'Alternating Case Converter - AlTeRnAtInG CaSe Meme Text',
    metaDescription: 'Generate alternating upper and lowercase text for mocking SpongeBob meme text. Free copy & paste converter.',
    keywords: ['alternating case converter', 'spongebob text generator', 'mocking text generator', 'aLtErNaTiNg cAsE'],
    iconName: 'Shuffle',
    howToUseSteps: ['Enter sentence.', 'Click Alternating Case.', 'Copy meme text.'],
    features: ['Perfect SpongeBob meme format', 'Fun interactive toggle', 'Instant copy'],
    faqs: [{ question: 'What is alternating case used for?', answer: 'It is widely used in online memes to convey a mocking or sarcastic tone!' }]
  },
  {
    id: 37,
    slug: 'character-counter',
    name: 'Character Counter',
    category: 'counters',
    shortDesc: 'Accurate live character count with and without spaces.',
    metaTitle: 'Character Counter - Free Real-Time Letter & Character Count',
    metaDescription: 'Count characters, letters, and spaces in real-time. Check limits for Twitter, SMS, Google Meta, and essays.',
    keywords: ['character counter', 'count characters online', 'letter counter', 'character count tool'],
    iconName: 'Hash',
    isPopular: true,
    howToUseSteps: ['Paste or type text.', 'View character count live.', 'Check social media limit meters.'],
    features: ['Counts with and without spaces', 'Social media character limit bars', 'Instant stats'],
    faqs: [{ question: 'What is the character limit for Twitter?', answer: 'Standard X/Twitter posts allow up to 280 characters.' }]
  },
  {
    id: 38,
    slug: 'word-counter',
    name: 'Word Counter',
    category: 'counters',
    shortDesc: 'Count words, paragraphs, sentences, and analyze text density.',
    metaTitle: 'Word Counter - Free Word & Paragraph Count Tool',
    metaDescription: 'Count words, sentences, and paragraphs online. Free word counter for essays, articles, and SEO content.',
    keywords: ['word counter', 'count words online', 'word count tool', 'essay word counter'],
    iconName: 'FileText',
    isPopular: true,
    howToUseSteps: ['Paste essay or document.', 'Read exact word count.', 'View top keyword density.'],
    features: ['Accurate word tallying', 'Keyword density breakdown', 'Reading & speaking time estimations'],
    faqs: [{ question: 'How many words is a standard page?', answer: 'Single-spaced pages average ~500 words; double-spaced pages average ~250 words.' }]
  },
  {
    id: 39,
    slug: 'line-counter',
    name: 'Line Counter',
    category: 'counters',
    shortDesc: 'Count total lines, empty lines, and non-empty lines in lists or code.',
    metaTitle: 'Line Counter - Count Lines of Text & Code Online',
    metaDescription: 'Count total lines, blank lines, and active text lines online. Free tool for programmers and editors.',
    keywords: ['line counter', 'count lines online', 'code line counter', 'list line counter'],
    iconName: 'AlignJustify',
    howToUseSteps: ['Paste code or list.', 'View total line count and non-empty line count.'],
    features: ['Distinguishes blank vs active lines', 'Great for code and data lists', 'Instant count'],
    faqs: [{ question: 'Does line counter work with code?', answer: 'Yes, it accurately counts line breaks across any plain text or code file.' }]
  },
  {
    id: 40,
    slug: 'reading-time-calculator',
    name: 'Reading Time Calculator',
    category: 'counters',
    shortDesc: 'Calculate estimated reading time and speaking time for speeches & blog posts.',
    metaTitle: 'Reading Time Calculator - Estimate Speech & Article Duration',
    metaDescription: 'Calculate how long it takes to read or speak your text. Free reading speed time estimator.',
    keywords: ['reading time calculator', 'speech time calculator', 'calculate reading duration', 'reading speed tool'],
    iconName: 'Clock',
    howToUseSteps: ['Paste article or speech script.', 'View estimated reading time at 200 wpm.', 'View speaking duration at 130 wpm.'],
    features: ['Dual reading & speaking benchmarks', 'Word count context', 'Instant calculation'],
    faqs: [{ question: 'What speed is reading time based on?', answer: 'Standard adult silent reading speed averages 200-250 words per minute.' }]
  },

  // --- 41 to 46: Gaming, Bio & Converters ---
  {
    id: 41,
    slug: 'gaming-name-generator',
    name: 'Gaming Name Generator',
    category: 'gaming-bio',
    shortDesc: 'Generate cool gamertags with decorative symbols for PUBG, Fortnite, Roblox & Free Fire.',
    metaTitle: 'Gaming Name Generator - Cool PUBG, Fortnite & Free Fire Gamertags',
    metaDescription: 'Generate badass gaming names, clan tags, and gamertags with aesthetic symbols. Free gaming nickname creator.',
    keywords: ['gaming name generator', 'pubg name generator', 'free fire name generator', 'fortnite gamertags'],
    iconName: 'Gamepad2',
    isPopular: true,
    howToUseSteps: ['Enter your name or keyword.', 'Select gaming style theme.', 'Copy cool gamertag.'],
    features: ['PUBG, Free Fire, Valorant styles', 'Includes crosshairs and crown symbols', 'Instant copy'],
    faqs: [{ question: 'Are these names accepted in PUBG?', answer: 'Yes, all symbols used are compatible with PUBG Mobile and Free Fire name change cards.' }]
  },
  {
    id: 42,
    slug: 'nickname-generator',
    name: 'Nickname Generator',
    category: 'gaming-bio',
    shortDesc: 'Create unique aesthetic nicknames with symbols and fancy lettering.',
    metaTitle: 'Nickname Generator - Aesthetic & Cool Nicknames with Symbols',
    metaDescription: 'Generate unique aesthetic nicknames for social media and games. Free nickname style generator.',
    keywords: ['nickname generator', 'cool nicknames', 'aesthetic nickname maker', 'nickname symbols'],
    iconName: 'User',
    howToUseSteps: ['Type base name.', 'Choose nickname style.', 'Copy nickname.'],
    features: ['Cute, edgy, and fancy styles', 'Combines brackets and symbols', 'One-click copy'],
    faqs: [{ question: 'Can I add custom symbols?', answer: 'Yes, you can customize any generated nickname in our editor.' }]
  },
  {
    id: 43,
    slug: 'username-generator',
    name: 'Username Generator',
    category: 'gaming-bio',
    shortDesc: 'Generate available-looking aesthetic usernames for Instagram, TikTok, and Twitch.',
    metaTitle: 'Username Generator - Cool Aesthetic Usernames for Social Media',
    metaDescription: 'Create memorable aesthetic usernames for Instagram, TikTok, Twitch, and Discord. Free generator.',
    keywords: ['username generator', 'aesthetic username generator', 'tiktok usernames', 'instagram username ideas'],
    iconName: 'AtSign',
    howToUseSteps: ['Enter a core keyword or interest.', 'Generate list of username ideas.', 'Copy favorite username.'],
    features: ['Aesthetic word combinations', 'Clean formatting', 'Instant suggestions'],
    faqs: [{ question: 'How do I choose a good username?', answer: 'Pick something concise, memorable, and easy to pronounce.' }]
  },
  {
    id: 44,
    slug: 'bio-text-generator',
    name: 'Bio Text Generator',
    category: 'gaming-bio',
    shortDesc: 'Format social media bios with stylish fonts, line breaks, and aesthetic bullet points.',
    metaTitle: 'Bio Text Generator - Stylish Social Media Bio Formatter',
    metaDescription: 'Design beautiful Instagram, TikTok, and Twitter bios with aesthetic fonts, line breaks, and bullet frames.',
    keywords: ['bio text generator', 'instagram bio maker', 'aesthetic bio generator', 'tiktok bio font formatter'],
    iconName: 'Layout',
    howToUseSteps: ['Draft bio lines.', 'Apply font styles to headings.', 'Copy clean formatted bio.'],
    features: ['Prevents weird Instagram line break bug', 'Includes bio templates', 'One-click copy'],
    faqs: [{ question: 'How do I stop Instagram from removing line breaks?', answer: 'Our generator formats invisible breaks so your bio stays neatly organized.' }]
  },
  {
    id: 45,
    slug: 'ascii-converter',
    name: 'ASCII Converter',
    category: 'invisible-special',
    shortDesc: 'Convert text to ASCII decimal, hexadecimal, and binary codes (and vice-versa).',
    metaTitle: 'ASCII Converter - Text to ASCII Decimal, Hex & Binary',
    metaDescription: 'Convert plain text to ASCII numbers, hex code, and binary bits. Free online bidirectional ASCII converter.',
    keywords: ['ascii converter', 'text to ascii', 'ascii code generator', 'binary ascii converter'],
    iconName: 'Code2',
    howToUseSteps: ['Type text or ASCII numbers.', 'Choose Decimal, Hex, or Binary.', 'Copy converted codes.'],
    features: ['Bidirectional text/ASCII translation', 'Displays Decimal, Hex, Binary simultaneously', 'Instant output'],
    faqs: [{ question: 'What is ASCII?', answer: 'ASCII (American Standard Code for Information Interchange) encodes 128 character codes.' }]
  },
  {
    id: 46,
    slug: 'unicode-converter',
    name: 'Unicode Converter',
    category: 'invisible-special',
    shortDesc: 'Decode and encode text to Unicode code points (U+XXXX), HTML entities, and UTF-8.',
    metaTitle: 'Unicode Converter - Text to Unicode Codepoints & HTML Entities',
    metaDescription: 'Convert text characters into Unicode codepoints (U+XXXX), HTML decimal/hex entities, and UTF-8 byte sequences.',
    keywords: ['unicode converter', 'text to unicode codepoints', 'html entity converter', 'utf8 converter'],
    iconName: 'Binary',
    howToUseSteps: ['Paste text or Unicode hex.', 'View codepoint array U+XXXX.', 'Copy HTML entity codes.'],
    features: ['Detailed character inspection', 'HTML entity generator (&#x...;)', 'UTF-8 byte lookup'],
    faqs: [{ question: 'Why use HTML entities?', answer: 'HTML entities ensure symbols render correctly on webpages regardless of charset.' }]
  },

  // --- 47 to 60: Categorized Symbol Collections ---
  {
    id: 47,
    slug: 'heart-symbols',
    name: 'Heart Symbols',
    category: 'symbols',
    shortDesc: 'Collection of copyable heart symbols (♥ ♡ ❥ ❣ ❦ 💜 🪞 ❣ 🖤 💖).',
    metaTitle: 'Heart Symbols - Copy & Paste All Heart Emojis & Text Hearts',
    metaDescription: 'Copy and paste heart text symbols and heart emojis: black heart, white heart, aesthetic hearts, winged hearts.',
    keywords: ['heart symbols', 'text heart copy paste', 'heart emojis', 'black heart symbol', 'aesthetic hearts'],
    iconName: 'Heart',
    isPopular: true,
    howToUseSteps: ['Browse heart collection.', 'Click any heart to copy.', 'Paste in chat or bio.'],
    features: ['Over 40+ heart symbols', 'Text hearts and emoji hearts', 'Instant copy'],
    faqs: [{ question: 'How do I type a heart symbol on keyboard?', answer: 'On Windows press Alt+3; on mobile simply copy from Fonti!' }]
  },
  {
    id: 48,
    slug: 'star-symbols',
    name: 'Star Symbols',
    category: 'symbols',
    shortDesc: 'Copy star symbols (★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✰ 🌟 💫).',
    metaTitle: 'Star Symbols - Copy & Paste Star Text Symbols (★ ☆ ✦)',
    metaDescription: 'Copy star text symbols: solid star, outline star, sparkling star, aesthetic four-point stars for bios.',
    keywords: ['star symbols', 'star text symbol', 'aesthetic star copy paste', 'black star symbol'],
    iconName: 'Star',
    howToUseSteps: ['Explore star variations.', 'Click star to copy.', 'Paste anywhere.'],
    features: ['Solid, outline, and sparkle stars', '4-point, 5-point, and 8-point stars', 'One-click copy'],
    faqs: [{ question: 'What is the black star symbol?', answer: '★ is the solid black star Unicode symbol U+2605.' }]
  },
  {
    id: 49,
    slug: 'arrow-symbols',
    name: 'Arrow Symbols',
    category: 'symbols',
    shortDesc: 'Copy directional arrow symbols (← → ↑ ↓ ➔ ➸ ➳ ↺ ↻ ➔ ➲ ➾).',
    metaTitle: 'Arrow Symbols - Copy & Paste Text Arrow Symbols (← → ➔)',
    metaDescription: 'All arrow text symbols: left, right, up, down, double arrows, curved arrows, decorative arrows.',
    keywords: ['arrow symbols', 'text arrow copy paste', 'right arrow symbol', 'aesthetic arrows'],
    iconName: 'ArrowRight',
    howToUseSteps: ['Find desired arrow direction.', 'Click arrow to copy.', 'Paste in document or bio.'],
    features: ['100+ Arrow symbols', 'Simple, double, and decorative arrows', 'Instant copy'],
    faqs: [{ question: 'How to type right arrow?', answer: 'Click → to copy the right arrow symbol U+2192.' }]
  },
  {
    id: 50,
    slug: 'math-symbols',
    name: 'Math Symbols',
    category: 'symbols',
    shortDesc: 'Copy mathematical operators (∑ ∫ √ ∞ ≈ ≠ ∓ ± ∛ ∜ ∝ ∟ ∇ partial).',
    metaTitle: 'Math Symbols - Copy & Paste Mathematical Operators (∑ ∫ √ ∞)',
    metaDescription: 'Complete list of math text symbols: infinity, square root, integral, summation, pi, delta, plus-minus.',
    keywords: ['math symbols', 'infinity symbol copy paste', 'square root symbol', 'summation symbol'],
    iconName: 'PlusSquare',
    howToUseSteps: ['Find math operator.', 'Click to copy.', 'Paste in math homework or document.'],
    features: ['Algebra, calculus, and set theory symbols', 'Clean Unicode math symbols', 'One-click copy'],
    faqs: [{ question: 'What is the infinity symbol code?', answer: '∞ is U+221E (Infinity symbol).' }]
  },
  {
    id: 51,
    slug: 'currency-symbols',
    name: 'Currency Symbols',
    category: 'symbols',
    shortDesc: 'Copy world currency symbols ($ € £ ¥ ₿ ₹ ₩ ₱ ₴ ₫ ₲ ₵ ₸).',
    metaTitle: 'Currency Symbols - Copy & Paste World Currency Text Symbols',
    metaDescription: 'Copy world currency symbols: Dollar, Euro, Pound, Yen, Bitcoin, Rupee, Won, Peso, Dong.',
    keywords: ['currency symbols', 'bitcoin symbol copy paste', 'euro symbol', 'pound symbol', 'rupee symbol'],
    iconName: 'DollarSign',
    howToUseSteps: ['Select currency icon.', 'Click to copy symbol.', 'Paste in price tags or text.'],
    features: ['All global currency Unicode symbols', 'Includes Bitcoin ₿', 'Instant copy'],
    faqs: [{ question: 'What is the Bitcoin symbol code?', answer: '₿ is U+20BF (Bitcoin sign).' }]
  },
  {
    id: 52,
    slug: 'greek-letters',
    name: 'Greek Letters',
    category: 'symbols',
    shortDesc: 'Copy upper & lowercase Greek alphabet letters (α β γ δ ε Ω λ μ π Σ θ).',
    metaTitle: 'Greek Letters - Copy & Paste Greek Alphabet Symbols (α β γ Ω)',
    metaDescription: 'Copy Greek alphabet symbols: Alpha, Beta, Gamma, Delta, Omega, Pi, Theta, Sigma in uppercase and lowercase.',
    keywords: ['greek letters', 'greek alphabet symbols', 'alpha beta gamma copy paste', 'omega symbol'],
    iconName: 'Languages',
    howToUseSteps: ['Locate Greek letter.', 'Click letter to copy.', 'Paste in physics or math document.'],
    features: ['Complete Greek alphabet', 'Upper and lowercase variants', 'One-click copy'],
    faqs: [{ question: 'What is Omega symbol?', answer: 'Ω is uppercase Omega (U+03A9), widely used in science for Ohms.' }]
  },
  {
    id: 53,
    slug: 'roman-numerals',
    name: 'Roman Numerals',
    category: 'symbols',
    shortDesc: 'Copy Unicode Roman Numeral characters (Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ Ⅼ Ⅽ Ⅾ Ⅿ).',
    metaTitle: 'Roman Numerals - Copy & Paste Roman Numeral Text Symbols',
    metaDescription: 'Copy Unicode Roman numerals from 1 to 1000 (I, V, X, L, C, D, M) in uppercase and lowercase.',
    keywords: ['roman numerals', 'roman numeral symbols', 'copy roman numerals', 'unicode roman numbers'],
    iconName: 'ListOrdered',
    howToUseSteps: ['Find Roman numeral.', 'Click to copy.', 'Paste in outline or chapter title.'],
    features: ['Authentic Unicode Roman Numeral characters', 'Uppercase and lowercase sets', 'Instant copy'],
    faqs: [{ question: 'Why use Unicode Roman Numerals?', answer: 'Dedicated Unicode Roman numeral characters maintain equal width formatting in typography.' }]
  },
  {
    id: 54,
    slug: 'chess-symbols',
    name: 'Chess Symbols',
    category: 'symbols',
    shortDesc: 'Copy chess piece symbols (♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟).',
    metaTitle: 'Chess Symbols - Copy & Paste Chess Piece Symbols (♔ ♕ ♚ ♛)',
    metaDescription: 'Copy white and black chess piece symbols: King, Queen, Rook, Bishop, Knight, Pawn.',
    keywords: ['chess symbols', 'chess pieces copy paste', 'king queen symbol', 'chess text symbols'],
    iconName: 'Crown',
    howToUseSteps: ['Pick white or black chess piece.', 'Click piece to copy.', 'Paste in chess diagrams or chat.'],
    features: ['White and black chess sets', 'Clean crisp vector unicode', 'One-click copy'],
    faqs: [{ question: 'What is the white king chess symbol?', answer: '♔ is U+2654 (White Chess King).' }]
  },
  {
    id: 55,
    slug: 'zodiac-symbols',
    name: 'Zodiac Symbols',
    category: 'symbols',
    shortDesc: 'Copy astrological zodiac sign symbols (♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓).',
    metaTitle: 'Zodiac Symbols - Copy & Paste Astrological Sign Symbols',
    metaDescription: 'Copy all 12 astrological zodiac symbols: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces.',
    keywords: ['zodiac symbols', 'astrology text symbols', 'aries symbol copy paste', 'horoscope symbols'],
    iconName: 'Moon',
    howToUseSteps: ['Select your zodiac sign.', 'Click to copy symbol.', 'Paste in bio or reading.'],
    features: ['All 12 astrological signs', 'Text and emoji versions', 'Instant copy'],
    faqs: [{ question: 'What sign is ♈?', answer: '♈ is Aries (The Ram).' }]
  },
  {
    id: 56,
    slug: 'weather-symbols',
    name: 'Weather Symbols',
    category: 'symbols',
    shortDesc: 'Copy meteorological weather symbols (☀ ☁ ☔ ⚡ ❄ ☃ 🌫 🌀 🌬 🌤).',
    metaTitle: 'Weather Symbols - Copy & Paste Sun, Rain & Snowflake Symbols',
    metaDescription: 'Copy weather text symbols: sun, cloud, umbrella, lightning, snowflake, snowman, wind.',
    keywords: ['weather symbols', 'sun text symbol', 'snowflake symbol copy paste', 'cloud symbol'],
    iconName: 'Sun',
    howToUseSteps: ['Find weather icon.', 'Click symbol to copy.', 'Paste in weather post or chat.'],
    features: ['Sun, rain, snow, and thunder symbols', 'Clean Unicode meteorological set', 'One-click copy'],
    faqs: [{ question: 'What is the snowflake symbol?', answer: '❄ is U+2744 (Snowflake).' }]
  },
  {
    id: 57,
    slug: 'music-symbols',
    name: 'Music Symbols',
    category: 'symbols',
    shortDesc: 'Copy musical note symbols (♩ ♪ ♫ ♬ ♭ ♮ ♯ 𝄢 𝄞).',
    metaTitle: 'Music Symbols - Copy & Paste Musical Note Symbols (♪ ♫ ♬)',
    metaDescription: 'Copy musical note text symbols: quarter note, eighth note, beam notes, flat, sharp, natural, treble clef.',
    keywords: ['music symbols', 'music note copy paste', 'eighth note symbol', 'treble clef symbol'],
    iconName: 'Music',
    howToUseSteps: ['Select music note.', 'Click to copy.', 'Paste in song lyrics or bio.'],
    features: ['Single and double music notes', 'Flat, sharp, natural signs', 'Instant copy'],
    faqs: [{ question: 'How to type music note ♪?', answer: 'Click ♪ on Fonti to copy musical eighth note U+266A.' }]
  },
  {
    id: 58,
    slug: 'box-drawing-symbols',
    name: 'Box Drawing Symbols',
    category: 'symbols',
    shortDesc: 'Copy ASCII box drawing characters (┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼ ═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬).',
    metaTitle: 'Box Drawing Symbols - Copy & Paste ASCII Frame Characters',
    metaDescription: 'Copy ASCII box drawing symbols, single lines, double lines, corners, and intersection borders.',
    keywords: ['box drawing symbols', 'ascii border characters', 'box outline unicode', 'line drawing symbols'],
    iconName: 'Box',
    howToUseSteps: ['Select border or corner piece.', 'Click to copy character.', 'Assemble text boxes or tables.'],
    features: ['Single, double, and heavy line box sets', 'Corners, T-junctions, and crosses', 'One-click copy'],
    faqs: [{ question: 'What are box drawing characters used for?', answer: 'Creating text-based tables, terminal user interfaces, and custom frames.' }]
  },
  {
    id: 59,
    slug: 'bullet-symbols',
    name: 'Bullet Symbols',
    category: 'symbols',
    shortDesc: 'Copy bullet point symbols (• ‣ ⁃ ◦ ◘ ◙ ⦾ ⦿ ✦ ❖ ▪ ▫ 🔷).',
    metaTitle: 'Bullet Symbols - Copy & Paste Bullet Point Text Symbols',
    metaDescription: 'Copy aesthetic bullet point symbols: round bullets, square bullets, star bullets, diamond bullets for lists.',
    keywords: ['bullet symbols', 'bullet point copy paste', 'aesthetic bullet points', 'list symbols'],
    iconName: 'List',
    howToUseSteps: ['Browse bullet point styles.', 'Click bullet to copy.', 'Paste at start of list item.'],
    features: ['Round, square, star, and diamond bullets', 'Great for social media bio lists', 'Instant copy'],
    faqs: [{ question: 'How to make clean list bullets in bios?', answer: 'Copy our bullet symbols to start each line with a stylish bullet!' }]
  },
  {
    id: 60,
    slug: 'checkmark-symbols',
    name: 'Checkmark Symbols',
    category: 'symbols',
    shortDesc: 'Copy tick marks and checkmark symbols (✓ ✕ ✖ ✗ ✘ 🗸 👍 ✅ ☑ ✔).',
    metaTitle: 'Checkmark Symbols - Copy & Paste Tick & Cross Symbols (✓ ✅ ✕)',
    metaDescription: 'Copy tick mark, checkmark, and cross symbols: heavy checkmark, boxed checkmark, cross mark, tick emoji.',
    keywords: ['checkmark symbols', 'tick mark copy paste', 'check mark text symbol', 'cross mark symbol'],
    iconName: 'CheckSquare',
    isPopular: true,
    howToUseSteps: ['Find check or cross mark.', 'Click symbol to copy.', 'Paste in form or status.'],
    features: ['Tick marks, check boxes, and cross marks', 'Text and emoji versions', 'One-click copy'],
    faqs: [{ question: 'What is the standard check mark symbol?', answer: '✓ is U+2713 (Check Mark).' }]
  }
];

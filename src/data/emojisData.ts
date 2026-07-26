import { EmojiItem, KaomojiCategory } from '../types';

export const EMOJI_LIST: EmojiItem[] = [
  // Smileys
  { emoji: '😀', name: 'Grinning Face', category: 'Smileys', tags: ['happy', 'smile', 'joy'] },
  { emoji: '😃', name: 'Grinning Face with Big Eyes', category: 'Smileys', tags: ['happy', 'joy'] },
  { emoji: '😄', name: 'Grinning Face with Smiling Eyes', category: 'Smileys', tags: ['laugh', 'happy'] },
  { emoji: '😁', name: 'Beaming Face with Smiling Eyes', category: 'Smileys', tags: ['grin', 'smile'] },
  { emoji: '😆', name: 'Grinning Squinting Face', category: 'Smileys', tags: ['lol', 'laugh'] },
  { emoji: '😅', name: 'Grinning Face with Sweat', category: 'Smileys', tags: ['relief', 'nervous'] },
  { emoji: '🤣', name: 'Rolling on the Floor Laughing', category: 'Smileys', tags: ['rofl', 'funny'] },
  { emoji: '😂', name: 'Face with Tears of Joy', category: 'Smileys', tags: ['lol', 'tears', 'crying'] },
  { emoji: '🙂', name: 'Slightly Smiling Face', category: 'Smileys', tags: ['smile', 'mild'] },
  { emoji: '🙃', name: 'Upside-Down Face', category: 'Smileys', tags: ['silly', 'sarcasm'] },
  { emoji: '😉', name: 'Winking Face', category: 'Smileys', tags: ['wink', 'flirt'] },
  { emoji: '😊', name: 'Smiling Face with Smiling Eyes', category: 'Smileys', tags: ['blush', 'happy'] },
  { emoji: '😇', name: 'Smiling Face with Halo', category: 'Smileys', tags: ['angel', 'innocent'] },
  { emoji: '🥰', name: 'Smiling Face with Hearts', category: 'Smileys', tags: ['love', 'crush'] },
  { emoji: '😍', name: 'Smiling Face with Heart-Eyes', category: 'Smileys', tags: ['love', 'adore'] },
  { emoji: '🤩', name: 'Star-Struck', category: 'Smileys', tags: ['star', 'eyes', 'wow'] },
  { emoji: '😘', name: 'Face Blowing a Kiss', category: 'Smileys', tags: ['kiss', 'love'] },
  { emoji: '😋', name: 'Face Savoring Food', category: 'Smileys', tags: ['yummy', 'yum'] },
  { emoji: '😛', name: 'Face with Tongue', category: 'Smileys', tags: ['tongue', 'playful'] },
  { emoji: '😜', name: 'Winking Face with Tongue', category: 'Smileys', tags: ['silly', 'crazy'] },
  { emoji: '🤪', name: 'Zany Face', category: 'Smileys', tags: ['goofy', 'wild'] },
  { emoji: '😎', name: 'Smiling Face with Sunglasses', category: 'Smileys', tags: ['cool', 'boss'] },
  { emoji: '🤓', name: 'Nerd Face', category: 'Smileys', tags: ['smart', 'geek'] },
  { emoji: '🧐', name: 'Face with Monocle', category: 'Smileys', tags: ['curious', 'inspect'] },
  { emoji: '🥳', name: 'Partying Face', category: 'Smileys', tags: ['party', 'celebrate'] },
  { emoji: '😏', name: 'Smirking Face', category: 'Smileys', tags: ['smirk', 'sly'] },
  { emoji: '😒', name: 'Unamused Face', category: 'Smileys', tags: ['bored', 'meh'] },
  { emoji: '😔', name: 'Pensive Face', category: 'Smileys', tags: ['sad', 'sorry'] },
  { emoji: '🤯', name: 'Exploding Head', category: 'Smileys', tags: ['mindblown', 'wow'] },
  { emoji: '😱', name: 'Face Screaming in Fear', category: 'Smileys', tags: ['scared', 'shocked'] },
  { emoji: '🔥', name: 'Fire', category: 'Symbols', tags: ['flame', 'hot', 'lit'] },
  { emoji: '✨', name: 'Sparkles', category: 'Symbols', tags: ['magic', 'shine'] },
  { emoji: '💯', name: 'Hundred Points', category: 'Symbols', tags: ['100', 'perfect', 'score'] },
  { emoji: '🎉', name: 'Party Popper', category: 'Activities', tags: ['congrats', 'tada'] },
  { emoji: '🚀', name: 'Rocket', category: 'Travel', tags: ['space', 'launch', 'moon'] },
  { emoji: '👑', name: 'Crown', category: 'Objects', tags: ['king', 'queen', 'royal'] },
  { emoji: '💀', name: 'Skull', category: 'Smileys', tags: ['dead', 'skeleton', 'died'] },
  { emoji: '💩', name: 'Pile of Poop', category: 'Smileys', tags: ['poop', 'funny'] }
];

export const KAOMOJI_CATEGORIES: KaomojiCategory[] = [
  {
    name: 'Happy & Joyful',
    items: [
      '(⁠っ⁠.⁠❛⁠ ⁠ᴗ⁠ ⁠.⁠)⁠っ',
      '(⁠◕⁠ᴗ⁠◕⁠✿⁠)',
      '(⁠*⁠´⁠ω⁠｀⁠*⁠)',
      '\(⁠★⁠ω⁠★⁠)/',
      '(⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧',
      '└⁠(⁠ ⁠o⁠₂⁠o⁠ ⁠)⁠┐',
      '(⁠✿⁠^⁠‿⁠^⁠)',
      '(⁠ ⁠╹⁠◡⁠╹⁠ ⁠)'
    ]
  },
  {
    name: 'Table Flip & Rage',
    items: [
      '(⁠╯⁠°⁠□⁠°⁠)⁠╯⁠︵⁠ ⁠┻⁠━⁠┻',
      '┬─┬ノ( º _ ºノ)',
      '(⁠ノ⁠ಠ⁠益⁠ಠ⁠)⁠ノ⁠彡⁠┻⁠━⁠┻',
      '(⁠g⁠r⁠r⁠r⁠)⁠',
      '(⁠╬⁠☉⁠д⁠☉⁠)⁠!',
      '\(⁠ಠ⁠_⁠ಠ⁠)/'
    ]
  },
  {
    name: 'Shrug & Whatever',
    items: [
      '¯\_(ツ)_/¯',
      '┐(‘～`;)┌',
      '┐(￣ヘ￣)┌',
      '╮(╯_╰)╭',
      '¯\_(⊙_ʖ⊙)_/¯',
      '乁( ⁰͡ ｣⁰͡ )ㄏ'
    ]
  },
  {
    name: 'Love & Kiss',
    items: [
      '(⁠~⁠￣⁠³⁠￣⁠)⁠~',
      '(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤',
      '\(⁠•⁠‿⁠•⁠)⁠/⁠♡',
      '(⁠ ⁠i⁠ ⁠_⁠ ⁠i⁠ ⁠)⁠♡',
      '(⁠*⁠˘⁠︶⁠˘⁠*⁠)⁠.⁠｡⁠*⁠♡',
      '(⁠ ⁠/⁠^⁠ω⁠^⁠)⁠/⁠♪⁠♪'
    ]
  },
  {
    name: 'Cute Animals',
    items: [
      '(⁠=⁠^⁠･⁠ｪ⁠･⁠^⁠=⁠)',
      '(=^･ω･^=)',
      '(⁠´⁠(⁠ｪ⁠)⁠｀⁠）',
      '(⁠￣⁠(⁠ｴ⁠)⁠￣⁠)⁠ﾉ',
      'ʕ⁠·⁠ᴥ⁠·⁠ʔ',
      'ฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠ฅ'
    ]
  },
  {
    name: 'Sad & Crying',
    items: [
      '(⁠;⁠_⁠;⁠)',
      '(⁠´⁠°̥̥̥̥̥̥̥̥⁠ω⁠°̥̥̥̥̥̥̥̥⁠｀⁠)',
      '(⁠༎ຶ⁠ Australia ⁠༎ຶ⁠)',
      '(⁠ ⁠i⁠_⁠i⁠ ⁠)',
      '(⁠.⁠ receptacle ⁠.⁠)',
      '(⁠-⁠_⁠-⁠;⁠)'
    ]
  }
];

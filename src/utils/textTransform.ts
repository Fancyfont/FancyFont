// Unicode font mapping maps standard ASCII letters (A-Z, a-z, 0-9) to stylized Unicode character ranges.

const CHAR_MAPS: Record<string, { upper: number; lower: number; digits?: number }> = {
  bold: { upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce },
  italic: { upper: 0x1d434, lower: 0x1d44e },
  boldItalic: { upper: 0x1d468, lower: 0x1d482 },
  script: { upper: 0x1d49c, lower: 0x1d4b6 },
  boldScript: { upper: 0x1d4d0, lower: 0x1d4ea },
  fraktur: { upper: 0x1d504, lower: 0x1d51e },
  boldFraktur: { upper: 0x1d56c, lower: 0x1d586 },
  doubleStruck: { upper: 0x1d538, lower: 0x1d552, digits: 0x1d7d8 },
  sans: { upper: 0x1d5a0, lower: 0x1d5ba, digits: 0x1d7e2 },
  sansBold: { upper: 0x1d5d4, lower: 0x1d5ee, digits: 0x1d7ec },
  sansItalic: { upper: 0x1d608, lower: 0x1d622 },
  sansBoldItalic: { upper: 0x1d63c, lower: 0x1d656 },
  monospace: { upper: 0x1d670, lower: 0x1d68a, digits: 0x1d7f6 },
  fullwidth: { upper: 0xff21, lower: 0xff41, digits: 0xff10 },
};

// Exceptional unicode code points that exist outside standard continuous blocks
const UNICODE_EXCEPTIONS: Record<string, Record<string, number>> = {
  script: {
    B: 0x212c, E: 0x2130, F: 0x2131, H: 0x210b, I: 0x2110, L: 0x2112, M: 0x2133, R: 0x211b,
    e: 0x212f, g: 0x210a, o: 0x2134
  },
  fraktur: {
    C: 0x212d, H: 0x210c, I: 0x2111, R: 0x211c, Z: 0x2128
  },
  doubleStruck: {
    C: 0x2102, H: 0x210d, N: 0x2115, P: 0x2119, Q: 0x211a, R: 0x211d, Z: 0x2124
  }
};

export function transformUnicodeRange(text: string, styleKey: string): string {
  const config = CHAR_MAPS[styleKey];
  if (!config) return text;

  const exceptions = UNICODE_EXCEPTIONS[styleKey] || {};

  return text.split('').map(char => {
    const code = char.charCodeAt(0);

    // Upper case
    if (code >= 65 && code <= 90) {
      if (exceptions[char]) {
        return String.fromCodePoint(exceptions[char]);
      }
      return String.fromCodePoint(config.upper + (code - 65));
    }
    // Lower case
    if (code >= 97 && code <= 122) {
      if (exceptions[char]) {
        return String.fromCodePoint(exceptions[char]);
      }
      return String.fromCodePoint(config.lower + (code - 97));
    }
    // Digits
    if (code >= 48 && code <= 57 && config.digits !== undefined) {
      return String.fromCodePoint(config.digits + (code - 48));
    }

    return char;
  }).join('');
}

// Special custom transforms
export function transformCircled(text: string, filled = false): string {
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (!filled) {
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x24b6 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x24d0 + (code - 97));
      if (code >= 49 && code <= 57) return String.fromCodePoint(0x2460 + (code - 49));
      if (code === 48) return '⓪';
    } else {
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f150 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f170 + (code - 97));
      if (code >= 49 && code <= 57) return String.fromCodePoint(0x2776 + (code - 49));
      if (code === 48) return '⓿';
    }
    return char;
  }).join('');
}

export function transformSquared(text: string, filled = false): string {
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (!filled) {
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f130 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f130 + (code - 97));
    } else {
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f170 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f170 + (code - 97));
    }
    return char;
  }).join('');
}

export function transformSmallCaps(text: string): string {
  const smallCapsMap: Record<string, string> = {
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
    j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
    s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
  };
  return text.toLowerCase().split('').map(c => smallCapsMap[c] || c).join('');
}

export function transformSubscript(text: string): string {
  const subMap: Record<string, string> = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
    'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
    'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ', '+': '₊', '-': '₋', '=': '₌',
    '(': '₍', ')': '₎'
  };
  return text.toLowerCase().split('').map(c => subMap[c] || c).join('');
}

export function transformSuperscript(text: string): string {
  const superMap: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
    'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
    'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ', '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾'
  };
  return text.toLowerCase().split('').map(c => superMap[c] || c).join('');
}

export function transformUpsideDown(text: string): string {
  const flipMap: Record<string, string> = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
    'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
    'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
    'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': 'ꓭ', 'C': 'Ɔ', 'D': 'ꓥ', 'E': 'Ǝ', 'F': 'Ⅎ',
    'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': 'Ꞁ', 'M': 'W', 'N': 'N',
    'O': 'O', 'P': 'Ԁ', 'Q': 'Ỏ', 'R': 'ᴚ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ',
    'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': '乙', '3': 'Ɛ',
    '4': '⇛', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '.': '˙', ',': '\'',
    '\'': ',', '"': '„', '!': '¡', '?': '¿', '[': ']', ']': '[', '(': ')', ')': '(',
    '{': '}', '}': '{', '<': '>', '>': '<', '_': '‾'
  };
  return text.split('').reverse().map(c => flipMap[c] || c).join('');
}

export function transformReverse(text: string): string {
  return text.split('').reverse().join('');
}

export function transformMirror(text: string): string {
  const mirrorMap: Record<string, string> = {
    'A': 'A', 'B': 'ᙠ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I',
    'J': 'ᒐ', 'K': 'Ʞ', 'L': '⅃', 'M': 'M', 'N': 'И', 'O': 'O', 'P': 'ꟼ', 'Q': 'Ọ', 'R': 'Я',
    'S': 'Ƨ', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Ƹ',
    'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'ʇ', 'g': 'ϱ', 'h': '⑁', 'i': 'i',
    'j': 'ꞁ', 'k': 'ʞ', 'l': 'l', 'm': 'm', 'n': 'ᴎ', 'o': 'o', 'p': 'q', 'q': 'p', 'r': 'ɿ',
    's': 'ꙅ', 't': 'ʇ', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'ʏ', 'z': 'ꙁ'
  };
  return text.split('').map(c => mirrorMap[c] || c).join('');
}

export function transformWide(text: string): string {
  return text.split('').join(' ');
}

export function transformStrikethrough(text: string): string {
  return text.split('').map(c => c + '\u0336').join('');
}

export function transformUnderline(text: string): string {
  return text.split('').map(c => c + '\u0332').join('');
}

export function transformSlash(text: string): string {
  return text.split('').map(c => c + '\u0338').join('');
}

export function transformArrowBelow(text: string): string {
  return text.split('').map(c => c + '\u034e').join('');
}

export function transformPlusBelow(text: string): string {
  return text.split('').map(c => c + '\u031f').join('');
}

export function transformCrossBelow(text: string): string {
  return text.split('').map(c => c + '\u032d').join('');
}

export function transformDotAbove(text: string): string {
  return text.split('').map(c => c + '\u0307').join('');
}

export function transformStarBetween(text: string): string {
  return text.split('').join('★');
}

export function transformDotSeparated(text: string): string {
  return text.split('').join('•');
}

export function transformDashSeparated(text: string): string {
  return text.split('').join('-');
}

export function transformSlashSeparated(text: string): string {
  return text.split('').join('/');
}

export function transformTildeSeparated(text: string): string {
  return text.split('').join('~');
}

export function transformDoubleUnderline(text: string): string {
  return text.split('').map(c => c + '\u0333').join('');
}

export function transformDoubleStrikethrough(text: string): string {
  return text.split('').map(c => c + '\u0335').join('');
}

export function transformWavyUnderline(text: string): string {
  return text.split('').map(c => c + '\u0330').join('');
}

export function transformDottedUnderline(text: string): string {
  return text.split('').map(c => c + '\u0323').join('');
}

export function transformOverline(text: string): string {
  return text.split('').map(c => c + '\u0305').join('');
}

export function transformParenthesized(text: string): string {
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f110 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x249c + (code - 97));
    if (code >= 49 && code <= 57) return String.fromCodePoint(0x2474 + (code - 49));
    return char;
  }).join('');
}

export function transformRegionalIndicator(text: string): string {
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f1e6 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f1e6 + (code - 97));
    return char;
  }).join('');
}

// Zalgo / Glitch generator
const ZALGO_UP = [
  '\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307',
  '\u0308', '\u0309', '\u030a', '\u030b', '\u030c', '\u030d', '\u030e', '\u030f',
  '\u0310', '\u0311', '\u0312', '\u0313', '\u0314', '\u0315', '\u031a', '\u031b'
];
const ZALGO_MID = [
  '\u0315', '\u031b', '\u0340', '\u0341', '\u0342', '\u0343', '\u0344', '\u0334',
  '\u0335', '\u0336', '\u0337', '\u0338', '\u0339', '\u033a', '\u033b', '\u033c'
];
const ZALGO_DOWN = [
  '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f',
  '\u0320', '\u0321', '\u0322', '\u0323', '\u0324', '\u0325', '\u0326', '\u0327',
  '\u0328', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f'
];

export function transformZalgo(text: string, intensity = 5): string {
  return text.split('').map(char => {
    if (char === ' ') return char;
    let result = char;
    const countUp = Math.floor(Math.random() * (intensity / 2)) + 1;
    const countMid = Math.floor(Math.random() * (intensity / 3));
    const countDown = Math.floor(Math.random() * (intensity / 2)) + 1;

    for (let i = 0; i < countUp; i++) {
      result += ZALGO_UP[Math.floor(Math.random() * ZALGO_UP.length)];
    }
    for (let i = 0; i < countMid; i++) {
      result += ZALGO_MID[Math.floor(Math.random() * ZALGO_MID.length)];
    }
    for (let i = 0; i < countDown; i++) {
      result += ZALGO_DOWN[Math.floor(Math.random() * ZALGO_DOWN.length)];
    }
    return result;
  }).join('');
}

// Case transformations
export function toUppercase(text: string): string {
  return text.toUpperCase();
}

export function toLowercase(text: string): string {
  return text.toLowerCase();
}

export function toTitleCase(text: string): string {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export function toSentenceCase(text: string): string {
  return text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
}

export function toAlternatingCase(text: string): string {
  return text.split('').map((char, index) => {
    return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

export function toSlugCase(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Counter statistics
export interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  lines: number;
  paragraphs: number;
  readingTimeMinutes: number;
  readingTimeFormatted: string;
  speakingTimeFormatted: string;
}

export function calculateTextStats(text: string): TextStats {
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  
  const lines = text ? text.split(/\r\n|\r|\n/).length : 0;
  const paragraphs = text ? text.split(/\n\s*\n/).filter(Boolean).length : 0;
  
  // Average reading speed: 200 words per minute
  const readingTimeMinutes = Math.ceil(words / 200);
  const readingSeconds = Math.round((words / 200) * 60);
  const readMin = Math.floor(readingSeconds / 60);
  const readSec = readingSeconds % 60;
  const readingTimeFormatted = `${readMin}m ${readSec}s`;

  // Average speaking speed: 130 words per minute
  const speakingSeconds = Math.round((words / 130) * 60);
  const speakMin = Math.floor(speakingSeconds / 60);
  const speakSec = speakingSeconds % 60;
  const speakingTimeFormatted = `${speakMin}m ${speakSec}s`;

  return {
    characters,
    charactersNoSpaces,
    words,
    lines,
    paragraphs,
    readingTimeMinutes,
    readingTimeFormatted,
    speakingTimeFormatted,
  };
}

// ASCII / Unicode Converter helpers
export function textToASCII(text: string): { dec: string; hex: string; binary: string } {
  const decArr: number[] = [];
  const hexArr: string[] = [];
  const binArr: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    decArr.push(code);
    hexArr.push(code.toString(16).toUpperCase().padStart(2, '0'));
    binArr.push(code.toString(2).padStart(8, '0'));
  }

  return {
    dec: decArr.join(' '),
    hex: hexArr.join(' '),
    binary: binArr.join(' ')
  };
}

export function asciiToText(decString: string): string {
  try {
    const numbers = decString.trim().split(/\s+/).map(n => parseInt(n, 10));
    return numbers.map(n => isNaN(n) ? '' : String.fromCharCode(n)).join('');
  } catch {
    return 'Invalid ASCII input';
  }
}

export function textToUnicodePoints(text: string): string {
  return Array.from(text).map(char => {
    const code = char.codePointAt(0);
    return code ? `U+${code.toString(16).toUpperCase().padStart(4, '0')}` : '';
  }).join(' ');
}

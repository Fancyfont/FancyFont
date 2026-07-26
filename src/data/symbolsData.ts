import { SymbolGroup } from '../types';

export const SYMBOL_GROUPS: SymbolGroup[] = [
  {
    id: 'hearts',
    name: 'Heart Symbols',
    toolSlug: 'heart-symbols',
    symbols: [
      { char: '♥', name: 'Solid Black Heart', codePoint: 'U+2665' },
      { char: '♡', name: 'Outline White Heart', codePoint: 'U+2661' },
      { char: '❥', name: 'Rotated Heart Bullet', codePoint: 'U+2761' },
      { char: '❣', name: 'Heart Exclamation', codePoint: 'U+2763' },
      { char: '❦', name: 'Floral Heart / Hedera', codePoint: 'U+2766' },
      { char: '❧', name: 'Rotated Floral Heart', codePoint: 'U+2767' },
      { char: '💗', name: 'Growing Heart', codePoint: 'U+1F497' },
      { char: '💖', name: 'Sparkling Heart', codePoint: 'U+1F496' },
      { char: '💕', name: 'Two Hearts', codePoint: 'U+1F495' },
      { char: '💞', name: 'Revolving Hearts', codePoint: 'U+1F49B' },
      { char: '🖤', name: 'Black Heart Emoji', codePoint: 'U+1F5A4' },
      { char: '🤍', name: 'White Heart Emoji', codePoint: 'U+1F90D' },
      { char: '🤎', name: 'Brown Heart Emoji', codePoint: 'U+1F90E' },
      { char: '💜', name: 'Purple Heart', codePoint: 'U+1F49C' },
      { char: '💙', name: 'Blue Heart', codePoint: 'U+1F499' },
      { char: '💚', name: 'Green Heart', codePoint: 'U+1F49A' },
      { char: '💛', name: 'Yellow Heart', codePoint: 'U+1F49B' },
      { char: '🧡', name: 'Orange Heart', codePoint: 'U+1F9E1' },
      { char: '❤️‍🔥', name: 'Heart on Fire', codePoint: 'U+2764 U+200D U+1F525' },
      { char: '❣', name: 'Heavy Heart Exclamation', codePoint: 'U+2763' }
    ]
  },
  {
    id: 'stars',
    name: 'Star Symbols',
    toolSlug: 'star-symbols',
    symbols: [
      { char: '★', name: 'Solid Black Star', codePoint: 'U+2605' },
      { char: '☆', name: 'Outline White Star', codePoint: 'U+2606' },
      { char: '✦', name: 'Black Four Pointed Star', codePoint: 'U+2725' },
      { char: '✧', name: 'White Four Pointed Star', codePoint: 'U+2727' },
      { char: '✩', name: 'Outlined Five Pointed Star', codePoint: 'U+2729' },
      { char: '✪', name: 'Circled White Star', codePoint: 'U+272A' },
      { char: '✫', name: 'Open Centre Black Star', codePoint: 'U+272B' },
      { char: '✬', name: 'Black Centre White Star', codePoint: 'U+272C' },
      { char: '✭', name: 'Outlined Black Star', codePoint: 'U+272D' },
      { char: '✮', name: 'Heavy Outlined Black Star', codePoint: 'U+272E' },
      { char: '✰', name: 'Shadowed White Star', codePoint: 'U+272F' },
      { char: '🌟', name: 'Glowing Star', codePoint: 'U+1F31F' },
      { char: '💫', name: 'Dizzy Star Burst', codePoint: 'U+1F4AB' },
      { char: '✨', name: 'Sparkles Star', codePoint: 'U+2728' },
      { char: '🔯', name: 'Six Pointed Star with Dot', codePoint: 'U+1F52F' },
      { char: '✵', name: 'Eight Pointed Pinwheel Star', codePoint: 'U+2735' },
      { char: '✶', name: 'Six Pointed Black Star', codePoint: 'U+2736' },
      { char: '✷', name: 'Eight Pointed Rectilinear Star', codePoint: 'U+2737' }
    ]
  },
  {
    id: 'arrows',
    name: 'Arrow Symbols',
    toolSlug: 'arrow-symbols',
    symbols: [
      { char: '←', name: 'Leftwards Arrow', codePoint: 'U+2190' },
      { char: '↑', name: 'Upwards Arrow', codePoint: 'U+2191' },
      { char: '→', name: 'Rightwards Arrow', codePoint: 'U+2192' },
      { char: '↓', name: 'Downwards Arrow', codePoint: 'U+2193' },
      { char: '↔', name: 'Left Right Arrow', codePoint: 'U+2194' },
      { char: '↕', name: 'Up Down Arrow', codePoint: 'U+2195' },
      { char: '↖', name: 'North West Arrow', codePoint: 'U+2196' },
      { char: '↗', name: 'North East Arrow', codePoint: 'U+2197' },
      { char: '↘', name: 'South East Arrow', codePoint: 'U+2198' },
      { char: '↙', name: 'South West Arrow', codePoint: 'U+2199' },
      { char: '➔', name: 'Heavy Rightward Arrow', codePoint: 'U+2794' },
      { char: '➸', name: 'Heavy Arrowhead', codePoint: 'U+279B' },
      { char: '➳', name: 'White Feathered Arrow', codePoint: 'U+27B3' },
      { char: '↺', name: 'Anticlockwise Open Circle Arrow', codePoint: 'U+21BA' },
      { char: '↻', name: 'Clockwise Open Circle Arrow', codePoint: 'U+21BB' },
      { char: '⇄', name: 'Right Arrow over Left Arrow', codePoint: 'U+21C4' },
      { char: '⇆', name: 'Left Arrow over Right Arrow', codePoint: 'U+21C6' },
      { char: '➾', name: 'Heavy Wide Headed Rightward Arrow', codePoint: 'U+27BE' }
    ]
  },
  {
    id: 'math',
    name: 'Math Symbols',
    toolSlug: 'math-symbols',
    symbols: [
      { char: '±', name: 'Plus-Minus Sign', codePoint: 'U+00B1' },
      { char: '÷', name: 'Division Sign', codePoint: 'U+00F7' },
      { char: '×', name: 'Multiplication Sign', codePoint: 'U+00D7' },
      { char: '√', name: 'Square Root', codePoint: 'U+221A' },
      { char: '∞', name: 'Infinity Symbol', codePoint: 'U+221E' },
      { char: '∑', name: 'N-Ary Summation', codePoint: 'U+2211' },
      { char: '∫', name: 'Integral Operator', codePoint: 'U+222B' },
      { char: '≈', name: 'Almost Equal To', codePoint: 'U+2248' },
      { char: '≠', name: 'Not Equal To', codePoint: 'U+2260' },
      { char: '≤', name: 'Less-Than or Equal To', codePoint: 'U+2264' },
      { char: '≥', name: 'Greater-Than or Equal To', codePoint: 'U+2265' },
      { char: 'π', name: 'Greek Small Letter Pi', codePoint: 'U+03C0' },
      { char: '∆', name: 'Increment / Delta', codePoint: 'U+2206' },
      { char: '∂', name: 'Partial Differential', codePoint: 'U+2202' },
      { char: '∈', name: 'Element Of', codePoint: 'U+2208' },
      { char: '∀', name: 'For All', codePoint: 'U+2200' },
      { char: '∃', name: 'There Exists', codePoint: 'U+2203' },
      { char: '‰', name: 'Per Mille Sign', codePoint: 'U+2030' }
    ]
  },
  {
    id: 'currency',
    name: 'Currency Symbols',
    toolSlug: 'currency-symbols',
    symbols: [
      { char: '$', name: 'Dollar Sign', codePoint: 'U+0024' },
      { char: '€', name: 'Euro Sign', codePoint: 'U+20AC' },
      { char: '£', name: 'Pound Sign', codePoint: 'U+00A3' },
      { char: '¥', name: 'Yen / Yuan Sign', codePoint: 'U+00A5' },
      { char: '₿', name: 'Bitcoin Sign', codePoint: 'U+20BF' },
      { char: '₹', name: 'Indian Rupee Sign', codePoint: 'U+20B9' },
      { char: '₩', name: 'Won Sign', codePoint: 'U+20A9' },
      { char: '₱', name: 'Peso Sign', codePoint: 'U+20B1' },
      { char: '₴', name: 'Hryvnia Sign', codePoint: 'U+20B4' },
      { char: '₫', name: 'Dong Sign', codePoint: 'U+20AB' },
      { char: '₵', name: 'Cedi Sign', codePoint: 'U+20B5' },
      { char: '₸', name: 'Tenge Sign', codePoint: 'U+20B8' },
      { char: '₺', name: 'Turkish Lira Sign', codePoint: 'U+20BA' },
      { char: '₽', name: 'Ruble Sign', codePoint: 'U+20BD' }
    ]
  },
  {
    id: 'greek',
    name: 'Greek Letters',
    toolSlug: 'greek-letters',
    symbols: [
      { char: 'α', name: 'Alpha (lowercase)', codePoint: 'U+03B1' },
      { char: 'β', name: 'Beta (lowercase)', codePoint: 'U+03B2' },
      { char: 'γ', name: 'Gamma (lowercase)', codePoint: 'U+03B3' },
      { char: 'δ', name: 'Delta (lowercase)', codePoint: 'U+03B4' },
      { char: 'ε', name: 'Epsilon (lowercase)', codePoint: 'U+03B5' },
      { char: 'θ', name: 'Theta (lowercase)', codePoint: 'U+03B8' },
      { char: 'λ', name: 'Lambda (lowercase)', codePoint: 'U+03BB' },
      { char: 'μ', name: 'Mu (lowercase)', codePoint: 'U+03BC' },
      { char: 'π', name: 'Pi (lowercase)', codePoint: 'U+03C0' },
      { char: 'σ', name: 'Sigma (lowercase)', codePoint: 'U+03C3' },
      { char: 'Ω', name: 'Omega (uppercase)', codePoint: 'U+03A9' },
      { char: 'Δ', name: 'Delta (uppercase)', codePoint: 'U+0394' },
      { char: 'Σ', name: 'Sigma (uppercase)', codePoint: 'U+03A3' },
      { char: 'Ψ', name: 'Psi (uppercase)', codePoint: 'U+03A8' }
    ]
  },
  {
    id: 'roman',
    name: 'Roman Numerals',
    toolSlug: 'roman-numerals',
    symbols: [
      { char: 'Ⅰ', name: 'Roman Numeral One', codePoint: 'U+2160' },
      { char: 'Ⅱ', name: 'Roman Numeral Two', codePoint: 'U+2161' },
      { char: 'Ⅲ', name: 'Roman Numeral Three', codePoint: 'U+2162' },
      { char: 'Ⅳ', name: 'Roman Numeral Four', codePoint: 'U+2163' },
      { char: 'Ⅴ', name: 'Roman Numeral Five', codePoint: 'U+2164' },
      { char: 'Ⅵ', name: 'Roman Numeral Six', codePoint: 'U+2165' },
      { char: 'Ⅶ', name: 'Roman Numeral Seven', codePoint: 'U+2166' },
      { char: 'Ⅷ', name: 'Roman Numeral Eight', codePoint: 'U+2167' },
      { char: 'Ⅸ', name: 'Roman Numeral Nine', codePoint: 'U+2168' },
      { char: 'Ⅹ', name: 'Roman Numeral Ten', codePoint: 'U+2169' },
      { char: 'Ⅺ', name: 'Roman Numeral Eleven', codePoint: 'U+216A' },
      { char: 'Ⅻ', name: 'Roman Numeral Twelve', codePoint: 'U+216B' },
      { char: 'Ⅼ', name: 'Roman Numeral Fifty', codePoint: 'U+216C' },
      { char: 'Ⅽ', name: 'Roman Numeral Hundred', codePoint: 'U+216D' },
      { char: 'Ⅾ', name: 'Roman Numeral Five Hundred', codePoint: 'U+216E' },
      { char: 'Ⅿ', name: 'Roman Numeral One Thousand', codePoint: 'U+216F' }
    ]
  },
  {
    id: 'chess',
    name: 'Chess Symbols',
    toolSlug: 'chess-symbols',
    symbols: [
      { char: '♔', name: 'White Chess King', codePoint: 'U+2654' },
      { char: '♕', name: 'White Chess Queen', codePoint: 'U+2655' },
      { char: '♖', name: 'White Chess Rook', codePoint: 'U+2656' },
      { char: '♗', name: 'White Chess Bishop', codePoint: 'U+2657' },
      { char: '♘', name: 'White Chess Knight', codePoint: 'U+2658' },
      { char: '♙', name: 'White Chess Pawn', codePoint: 'U+2659' },
      { char: '♚', name: 'Black Chess King', codePoint: 'U+265A' },
      { char: '♛', name: 'Black Chess Queen', codePoint: 'U+265B' },
      { char: '♜', name: 'Black Chess Rook', codePoint: 'U+265C' },
      { char: '♝', name: 'Black Chess Bishop', codePoint: 'U+265D' },
      { char: '♞', name: 'Black Chess Knight', codePoint: 'U+265E' },
      { char: '♟', name: 'Black Chess Pawn', codePoint: 'U+265F' }
    ]
  },
  {
    id: 'zodiac',
    name: 'Zodiac Symbols',
    toolSlug: 'zodiac-symbols',
    symbols: [
      { char: '♈', name: 'Aries', codePoint: 'U+2648' },
      { char: '♉', name: 'Taurus', codePoint: 'U+2649' },
      { char: '♊', name: 'Gemini', codePoint: 'U+264A' },
      { char: '♋', name: 'Cancer', codePoint: 'U+264B' },
      { char: '♌', name: 'Leo', codePoint: 'U+264C' },
      { char: '♍', name: 'Virgo', codePoint: 'U+264D' },
      { char: '♎', name: 'Libra', codePoint: 'U+264E' },
      { char: '♏', name: 'Scorpio', codePoint: 'U+264F' },
      { char: '♐', name: 'Sagittarius', codePoint: 'U+2650' },
      { char: '♑', name: 'Capricorn', codePoint: 'U+2651' },
      { char: '♒', name: 'Aquarius', codePoint: 'U+2652' },
      { char: '♓', name: 'Pisces', codePoint: 'U+2653' }
    ]
  },
  {
    id: 'weather',
    name: 'Weather Symbols',
    toolSlug: 'weather-symbols',
    symbols: [
      { char: '☀', name: 'Black Sun with Rays', codePoint: 'U+2600' },
      { char: '☁', name: 'Cloud', codePoint: 'U+2601' },
      { char: '☂', name: 'Umbrella', codePoint: 'U+2602' },
      { char: '☔', name: 'Umbrella with Rain Drops', codePoint: 'U+2614' },
      { char: '⚡', name: 'High Voltage / Lightning', codePoint: 'U+26A1' },
      { char: '❄', name: 'Snowflake', codePoint: 'U+2744' },
      { char: '☃', name: 'Snowman', codePoint: 'U+2603' },
      { char: '🌤', name: 'Sun Behind Small Cloud', codePoint: 'U+1F324' },
      { char: '⛈', name: 'Thunderstorm', codePoint: 'U+26C8' },
      { char: '🌀', name: 'Cyclone / Hurricane', codePoint: 'U+1F300' }
    ]
  },
  {
    id: 'music',
    name: 'Music Symbols',
    toolSlug: 'music-symbols',
    symbols: [
      { char: '♩', name: 'Quarter Note', codePoint: 'U+2669' },
      { char: '♪', name: 'Eighth Note', codePoint: 'U+266A' },
      { char: '♫', name: 'Beamed Eighth Notes', codePoint: 'U+266B' },
      { char: '♬', name: 'Beamed Sixteenth Notes', codePoint: 'U+266C' },
      { char: '♭', name: 'Music Flat Sign', codePoint: 'U+266D' },
      { char: '♮', name: 'Music Natural Sign', codePoint: 'U+266E' },
      { char: '♯', name: 'Music Sharp Sign', codePoint: 'U+266F' },
      { char: '𝄞', name: 'Musical Symbol G Clef / Treble Clef', codePoint: 'U+1D11E' }
    ]
  },
  {
    id: 'box',
    name: 'Box Drawing Symbols',
    toolSlug: 'box-drawing-symbols',
    symbols: [
      { char: '┌', name: 'Box Light Down and Right', codePoint: 'U+250C' },
      { char: '┐', name: 'Box Light Down and Left', codePoint: 'U+2510' },
      { char: '└', name: 'Box Light Up and Right', codePoint: 'U+2514' },
      { char: '┘', name: 'Box Light Up and Left', codePoint: 'U+2518' },
      { char: '├', name: 'Box Light Vertical and Right', codePoint: 'U+251C' },
      { char: '┤', name: 'Box Light Vertical and Left', codePoint: 'U+2524' },
      { char: '┬', name: 'Box Light Down and Horizontal', codePoint: 'U+252C' },
      { char: '┴', name: 'Box Light Up and Horizontal', codePoint: 'U+2534' },
      { char: '┼', name: 'Box Light Vertical and Horizontal', codePoint: 'U+253C' },
      { char: '═', name: 'Box Double Horizontal', codePoint: 'U+2550' },
      { char: '║', name: 'Box Double Vertical', codePoint: 'U+2551' },
      { char: '╔', name: 'Box Double Down and Right', codePoint: 'U+2554' },
      { char: '╗', name: 'Box Double Down and Left', codePoint: 'U+2557' },
      { char: '╚', name: 'Box Double Up and Right', codePoint: 'U+255A' },
      { char: '╝', name: 'Box Double Up and Left', codePoint: 'U+255D' }
    ]
  },
  {
    id: 'bullets',
    name: 'Bullet Symbols',
    toolSlug: 'bullet-symbols',
    symbols: [
      { char: '•', name: 'Bullet Point', codePoint: 'U+2022' },
      { char: '‣', name: 'Triangular Bullet', codePoint: 'U+2023' },
      { char: '⁃', name: 'Hyphen Bullet', codePoint: 'U+2043' },
      { char: '◦', name: 'White Bullet Circle', codePoint: 'U+25E6' },
      { char: '◘', name: 'Inverse Bullet', codePoint: 'U+25D8' },
      { char: '◙', name: 'Inverse White Circle Bullet', codePoint: 'U+25D9' },
      { char: '⦾', name: 'Circled White Bullet', codePoint: 'U+29BE' },
      { char: '⦿', name: 'Circled Bullet', codePoint: 'U+29BF' },
      { char: '✦', name: 'Four Pointed Star Bullet', codePoint: 'U+2725' },
      { char: '▪', name: 'Small Black Square Bullet', codePoint: 'U+25AA' },
      { char: '▫', name: 'Small White Square Bullet', codePoint: 'U+25AB' }
    ]
  },
  {
    id: 'checkmarks',
    name: 'Checkmark Symbols',
    toolSlug: 'checkmark-symbols',
    symbols: [
      { char: '✓', name: 'Check Mark / Tick', codePoint: 'U+2713' },
      { char: '✔', name: 'Heavy Check Mark', codePoint: 'U+2714' },
      { char: '☑', name: 'Ballot Box with Check', codePoint: 'U+2611' },
      { char: '✅', name: 'Green Check Mark Button', codePoint: 'U+2705' },
      { char: '🗸', name: 'Light Check Mark', codePoint: 'U+1F5F8' },
      { char: '✕', name: 'Multiplication X Cross', codePoint: 'U+2715' },
      { char: '✖', name: 'Heavy Multiplication X', codePoint: 'U+2716' },
      { char: '✗', name: 'Ballot X Cross', codePoint: 'U+2717' },
      { char: '✘', name: 'Heavy Ballot X Cross', codePoint: 'U+2718' },
      { char: '❎', name: 'Negative Squared Cross Mark', codePoint: 'U+274E' },
      { char: '❌', name: 'Cross Mark Emoji', codePoint: 'U+274C' }
    ]
  }
];

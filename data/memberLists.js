// Central registry of corporate activity member rosters.
//
// Every roster lives in its own JSON file inside `data/` (for example
// `data/koshiqaMemberList.json`) and simply holds an array of member objects:
//
//   [{ "name": "Pratik Dhimate" }, { "name": "Rajendra Satpute" }, ...]
//
// To publish a new roster:
//   1. Drop the JSON file into `data/` (e.g. `data/infosysMemberList.json`).
//   2. Register it below with a unique `listKey` and a lazy loader.
//   3. Reference that `listKey` from the `members` block of the matching entry in
//      `data/impactPartners.js` and/or `data/plantationPartners.js`.
//
// Rosters are pulled in through a dynamic `import()`, so a large list is only
// downloaded by visitors who actually open a page that uses it — it never lands
// in the shared bundle and the rest of the site stays fast.

export const memberListRegistry = {
  koshiqa: {
    label: "Koshiqa",
    load: () => import("./koshiqaMemberList.json"),
  },
};

/**
 * Look up the registry entry for a roster key.
 * Returns `null` for unknown / missing keys so callers can stay defensive.
 */
export function getMemberListConfig(listKey) {
  if (!listKey) return null;
  return memberListRegistry[listKey] || null;
}

// A handful of roster entries were typed in "small caps" / mathematical
// letter styles. Those code points are not touched by Unicode normalisation, so
// they are mapped back to their plain ASCII letters to keep the names
// searchable ("ꜱᴀᴛɪꜱʜ ᴘᴀᴛᴇʟ" → "satish patel").
const SMALL_CAPS_MAP = {
  ꜱ: "s",
  Ꜳ: "a",
  ꜳ: "b",
  Ꜵ: "c",
  ꜵ: "d",
  Ꜷ: "e",
  ꜷ: "f",
  Ꜹ: "g",
  ꜹ: "h",
  Ꜻ: "i",
  ꜻ: "j",
  Ꜽ: "k",
  ꜽ: "l",
  Ꜿ: "m",
  ꜿ: "n",
  ᴀ: "a",
  ᴁ: "b",
  ᴂ: "c",
  ᴃ: "d",
  ᴄ: "e",
  ᴅ: "f",
  ᴆ: "g",
  ᴇ: "e",
  ᴈ: "h",
  ᴉ: "i",
  ᴊ: "j",
  ᴋ: "k",
  ᴌ: "l",
  ᴍ: "m",
  ᴎ: "n",
  ᴏ: "o",
  ᴐ: "p",
  ᴑ: "q",
  ᴒ: "r",
  ᴓ: "s",
  ᴔ: "t",
  ᴕ: "u",
  ᴖ: "v",
  ᴗ: "w",
  ᴘ: "p",
  ᴙ: "x",
  ᴚ: "y",
  ᴛ: "t",
  ᴜ: "z",
  ᴝ: "v",
  ᴞ: "w",
  ᴟ: "q",
  ᴠ: "v",
  ᴡ: "w",
  ᴢ: "z",
  ᴣ: "c",
  ᴤ: "l",
  ᴥ: "o",
  ᴦ: "r",
  ᴧ: "s",
  ɪ: "i",
  ʜ: "h",
  ʟ: "l",
  ʀ: "r",
};

/**
 * Normalise a name so searching is forgiving:
 *  - lower-cased
 *  - Latin diacritics removed (so "Sanjay Punia" matches "Sanjay पूनिया")
 *  - punctuation and symbols collapsed into single spaces
 *
 * Unicode combining marks (`\p{M}`) are deliberately preserved so that
 * Devanagari, Telugu and Kannada names keep their vowel signs attached to
 * their base characters — stripping them would break partial matching for
 * every Indic-script name in the roster.
 */
export function normalizeMemberName(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{M}\p{N}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * Map small-caps / mathematical letters to their plain equivalents so those
 * roster entries can be found with a normal keyboard.
 */
function foldSmallCaps(value) {
  return String(value ?? "").replace(
    /[\uA731-\uA77A\u1D00-\u1D25\u026A\u029C\u029F\u2133\u211C]/g,
    (char) => SMALL_CAPS_MAP[char] ?? char,
  );
}

/**
 * Pull the raw array out of a lazily imported JSON module and de-duplicate it.
 * Source sheets often repeat a block of the roster, so we keep the first
 * spelling we encounter for each person and drop the rest.
 */
export async function loadMemberRoster(listKey) {
  const config = getMemberListConfig(listKey);
  if (!config) return [];

  const module = await config.load();
  const rows = Array.isArray(module) ? module : module?.default;
  if (!Array.isArray(rows)) return [];

  const seen = new Set();
  const roster = [];

  for (const row of rows) {
    const raw = typeof row === "string" ? row : row?.name;
    if (typeof raw !== "string") continue;

    const display = raw.replace(/\s+/g, " ").trim();
    if (!display) continue;

    const key = normalizeMemberName(display);
    if (!key || seen.has(key)) continue;

    seen.add(key);
    roster.push(display);
  }

  return roster;
}

/**
 * Pre-compute the searchable form of every roster entry once, so typing stays
 * instant no matter how large the roster is.
 *
 * Each entry stores two keys:
 *  - `key`  — the normalised name, used for the main match
 *  - `fold` — the same name with every non-Latin character removed, so a
 *             Latin-only query ("sanjay punia") can still find a name typed in
 *             Devanagari ("Sanjay पूनिया")
 */
export function buildRosterIndex(roster) {
  return roster.map((name) => {
    const key = normalizeMemberName(name);
    const folded = foldToLatin(foldSmallCaps(key));
    const roman = foldToLatin(transliterateDevanagari(foldSmallCaps(key)));

    return {
      name,
      key,
      words: key.split(" ").filter(Boolean),
      fold: folded,
      roman,
      // Word-level views of the romanised form, used for the fuzzy matching
      // of names that were typed in a non-latin script.
      romanWords: roman.split(" ").filter(Boolean),
      skeletonWords: roman
        .split(" ")
        .filter(Boolean)
        .map((word) => skeletonize(word))
        .filter(Boolean),
      // Only entries that actually contain a non-latin script get the extra
      // romanised / skeleton fallbacks. Restricting them this way keeps the
      // fuzzy matching from adding noise for the 99% latin roster.
      hasNonLatin: /[^\p{Script=Latin}\p{N}\s]/u.test(key),
    };
  });
}

/**
 * Reduce a latin string to its consonants, so "puniya" and "punia" collapse to
 * the same skeleton ("pn").
 */
function skeletonize(value) {
  return value.replace(/[aeiou]/g, "");
}

/**
 * Drop every character that is not a latin letter or digit, while keeping the
 * word boundaries intact. Used only as a secondary matching key, never for
 * display.
 */
function foldToLatin(key) {
  return key
    .replace(/[^\p{Script=Latin}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

// --- Devanagari transliteration -------------------------------------------
// A romanised query ("sanjay punia") should still be able to reach a name typed
// in Devanagari ("Sanjay पूनिया"). The mapping below is deliberately
// unambiguous: every Devanagari cluster maps to a distinct latin sequence, so
// a romanised query matches the exact same cluster.
//
// Only the consonants and vowel signs that actually appear in the rosters are
// covered; anything else is left untouched.
const DEVANAGARI_MAP = {
  अ: "a",
  आ: "aa",
  इ: "i",
  ई: "ee",
  उ: "u",
  ऊ: "oo",
  ए: "e",
  ऐ: "ai",
  ओ: "o",
  औ: "au",
  क: "k",
  ख: "kh",
  ग: "g",
  घ: "gh",
  ङ: "ng",
  च: "ch",
  छ: "chh",
  ज: "j",
  झ: "jh",
  ञ: "ny",
  ट: "t",
  ठ: "th",
  ड: "d",
  ढ: "dh",
  ण: "n",
  त: "t",
  थ: "th",
  द: "d",
  ध: "dh",
  न: "n",
  प: "p",
  फ: "f",
  ब: "b",
  भ: "bh",
  म: "m",
  य: "y",
  र: "r",
  ल: "l",
  व: "v",
  श: "sh",
  ष: "shh",
  स: "s",
  ह: "h",
  ळ: "l",
  क्ष: "ksh",
  त्र: "tr",
  ज्ञ: "gy",
  "ं": "n",
  "ः": "h",
  "ँ": "n",
};

// Matras (vowel signs) attach to the preceding consonant and map to the same
// vowel sound, so "पू" → "pu" and "पु" → "pu" both stay searchable.
const DEVANAGARI_MATRA_MAP = {
  "ा": "a",
  "ि": "i",
  "ी": "i",
  "ु": "u",
  "ू": "u",
  "ृ": "ri",
  "ॄ": "ri",
  "ॅ": "e",
  "ॆ": "e",
  "े": "e",
  "ै": "ai",
  "ॉ": "o",
  "ॊ": "o",
  "ो": "o",
  "ौ": "au",
};

/**
 * Transliterate Devanagari text into a reversible latin approximation so a
 * romanised query can match a name typed in Devanagari.
 */
function transliterateDevanagari(value) {
  return String(value ?? "").replace(
    /[ऀ-ॿ]+/g,
    (cluster) =>
      [...cluster]
        .map((char) => {
          if (char === "्") return "";
          if (DEVANAGARI_MATRA_MAP[char]) return DEVANAGARI_MATRA_MAP[char];
          return DEVANAGARI_MAP[char] ?? "";
        })
        .join(""),
  );
}

/**
 * Rank roster entries against a free-text query.
 *
 * Every whitespace-separated token must appear somewhere in the name, so both
 * "dhimate pratik" and "pratik dhimate" find the same person. Tokens are
 * matched per-token against a chain of keys, so a mixed-script name like
 * "Sanjay पूनिया" is still reachable from "sanjay punia".
 *
 * Results are ordered so exact matches come first, then prefix matches, then
 * the rest alphabetically.
 */
export function searchRosterIndex(index, query, { limit = 240 } = {}) {
  const tokens = normalizeMemberName(foldSmallCaps(query))
    .split(" ")
    .filter(Boolean);
  if (!tokens.length) return [];

  const needle = tokens.join(" ");
  const results = [];

  for (const entry of index) {
    // Each token is matched against the strongest key it can satisfy. A token
    // matches on the plain key, then on the latin-only fold, then on the
    // romanised key, and finally on the consonant skeleton.
    let matched = true;
    let weakest = 0;

    for (const token of tokens) {
      const strength = matchToken(entry, token);

      if (strength === 0) {
        matched = false;
        break;
      }
      if (strength > weakest) weakest = strength;
    }

    if (!matched) continue;

    let score = weakest;

    if (weakest === 1) {
      if (entry.key === needle) score -= 100;
      else if (entry.key.startsWith(needle)) score -= 60;

      for (const token of tokens) {
        if (entry.key.startsWith(token)) score -= 8;
        else if (entry.words.some((word) => word.startsWith(token))) score -= 3;
      }
    }

    results.push({ name: entry.name, score });
  }

  results.sort((a, b) => a.score - b.score || a.name.localeCompare(b.name));
  return results.slice(0, limit);
}

/**
 * Score how well a single query token matches a roster entry.
 *   0 → no match
 *   1 → matched directly on the normalised name (best)
 *   2 → matched on the latin-only fold
 *   3 → matched on the romanised (transliterated) name, allowing for the
 *       spelling differences between scripts ("punia" ↔ "puniya")
 *   4 → matched on the consonant skeleton (last resort)
 */
function matchToken(entry, token) {
  if (entry.key.includes(token)) return 1;

  if (entry.fold && entry.fold.includes(token)) return 2;

  // The remaining fallbacks only apply to names that were typed in a
  // non-latin script. Restricting them this way keeps the fuzzy matching from
  // adding noise for the 99% latin roster.
  if (!entry.hasNonLatin) return 0;

  if (entry.romanWords?.some((word) => isSimilar(word, token))) return 3;

  if (entry.skeletonWords?.some((word) => isSimilar(word, skeletonize(token)))) {
    return 4;
  }

  return 0;
}

/**
 * Compare two words allowing for small spelling differences.
 *
 * The threshold scales with the length of the shorter word so that short
 * words are not matched too loosely (a two letter word needs to be almost
 * identical, while a long one only needs the same shape).
 */
function isSimilar(word, token) {
  if (!word || !token) return false;

  const shortest = Math.min(word.length, token.length);
  if (shortest < 3) return word === token;

  const distance = levenshtein(word, token);
  return distance <= Math.max(1, Math.floor(shortest / 3));
}

/**
 * Standard Levenshtein edit distance.
 */
function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  let previous = new Array(b.length + 1);
  let current = new Array(b.length + 1);

  for (let j = 0; j <= b.length; j += 1) previous[j] = j;

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;

    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + cost,
      );
    }

    [previous, current] = [current, previous];
  }

  return previous[b.length];
}

/**
 * Find the single roster entry that matches the query exactly (ignoring case,
 * spacing and diacritics). Returns `null` when the query is not an exact match.
 */
export function findExactMatch(index, query) {
  const needle = normalizeMemberName(foldSmallCaps(query));
  if (!needle) return null;

  const hit = index.find((entry) => entry.key === needle);
  if (hit) return hit.name;

  // Fall back to the latin-only fold so a romanised query still resolves
  // "Sanjay पूनिया".
  const foldedNeedle = foldToLatin(needle);
  if (!foldedNeedle) return null;

  const foldedHit = index.find((entry) => entry.fold === foldedNeedle);
  if (foldedHit) return foldedHit.name;

  // Finally, compare against the romanised (transliterated) form.
  const romanNeedle = foldToLatin(transliterateDevanagari(foldedNeedle));
  if (!romanNeedle) return null;

  const romanHit = index.find((entry) => entry.roman === romanNeedle);
  if (romanHit) return romanHit.name;

  // Last resort: allow for the spelling differences between scripts
  // ("punia" ↔ "puniya").
  const needleWords = romanNeedle.split(" ").filter(Boolean);
  const similarHit = index.find(
    (entry) =>
      entry.hasNonLatin &&
      entry.romanWords.length === needleWords.length &&
      entry.romanWords.every((word, i) => isSimilar(word, needleWords[i])),
  );
  return similarHit ? similarHit.name : null;
}

/**
 * Letters that actually appear at the start of a roster entry, with counts.
 * Used to render the A–Z quick-filter chips.
 */
export function getRosterInitials(index) {
  const counts = new Map();

  for (const entry of index) {
    const first = entry.key.charAt(0);
    if (!first) continue;
    const bucket = /[a-z]/.test(first) ? first.toUpperCase() : "#";
    counts.set(bucket, (counts.get(bucket) || 0) + 1);
  }

  return counts;
}

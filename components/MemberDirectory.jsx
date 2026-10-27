"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Award,
  Check,
  CheckCircle2,
  Copy,
  Dice5,
  HandHeart,
  Loader2,
  Search,
  SearchX,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import {
  buildRosterIndex,
  findExactMatch,
  getRosterInitials,
  loadMemberRoster,
  searchRosterIndex,
} from "@/data/memberLists";
import "./memberDirectory.css";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const PAGE_SIZE = 120;
const CONFETTI_COLORS = [
  "#2e5893",
  "#81c421",
  "#f4b942",
  "#e2586d",
  "#3fb6c8",
  "#8c6fd1",
];

/**
 * Fire a short burst of confetti from a point on screen.
 *
 * Purely decorative, so it is skipped when the visitor has asked for reduced
 * motion via the OS-level `prefers-reduced-motion` setting.
 */
function burstConfetti(origin) {
  if (typeof window === "undefined") return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

  const { innerWidth: width, innerHeight: height } = window;
  const pieces = 46;

  for (let i = 0; i < pieces; i += 1) {
    const piece = document.createElement("span");
    const isRound = i % 3 === 0;
    const size = 6 + Math.random() * 7;
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];

    piece.className = `md-confetti${isRound ? " md-confetti--round" : ""}`;
    piece.style.setProperty("--md-confetti-y", `${Math.random() * -220 - 60}px`);
    piece.style.setProperty("--md-confetti-drift", `${Math.random() * 160 - 80}px`);
    piece.style.setProperty("--md-confetti-spin", `${Math.random() * 900 - 450}deg`);
    piece.style.setProperty("--md-confetti-delay", `${Math.random() * 160}ms`);
    piece.style.width = `${size}px`;
    piece.style.height = `${isRound ? size : size * 1.9}px`;
    piece.style.background = color;
    piece.style.left = `${origin?.x ?? width / 2}px`;
    piece.style.top = `${origin?.y ?? height / 2}px`;

    document.body.appendChild(piece);

    window.setTimeout(() => piece.remove(), 1900);
  }
}

/** First letter of a name, bucketed under "#" when it is not a latin letter. */
function normalizeForLetter(name) {
  const first = String(name || "").trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : "#";
}

/** Up to two initials for the avatar bubble. */
function initialsOf(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Interactive member roster shown on a corporate activity page.
 *
 * Visitors can:
 *  - type (or partially type) their name to find themselves,
 *  - jump by first letter,
 *  - or hit "Surprise me" to be shown a random volunteer.
 *
 * The roster itself lives in a standalone JSON file and is fetched lazily the
 * first time this section is opened, so it never bloats the page payload.
 */
export default function MemberDirectory({
  listKey,
  title = "Find yourself in the crew",
  intro,
  accent = "blue",
  companyName,
  activityTitle,
}) {
  const [roster, setRoster] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | ready | error
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState(null);
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const inputRef = useRef(null);

  const accentClass =
    accent === "green" ? "md--green" : accent === "amber" ? "md--amber" : "md--blue";

  // Load the roster once per list key.
  //
  // The roster is a large file, so the fetch is deferred until the browser is
  // idle. It still lands in the cache long before most visitors think to
  // search, and opening the search triggers it immediately if the idle
  // callback has not run yet.
  const loadPromise = useRef(null);

  const ensureLoaded = useCallback(() => {
    if (!listKey) return Promise.resolve([]);
    if (loadPromise.current) return loadPromise.current;

    setStatus("loading");

    loadPromise.current = loadMemberRoster(listKey)
      .then((names) => {
        setRoster(names);
        setStatus(names.length ? "ready" : "error");
        return names;
      })
      .catch(() => {
        setStatus("error");
        return [];
      });

    return loadPromise.current;
  }, [listKey]);

  useEffect(() => {
    if (!listKey) return undefined;

    const idle =
      typeof window !== "undefined" && window.requestIdleCallback
        ? window.requestIdleCallback(() => ensureLoaded(), { timeout: 2500 })
        : window.setTimeout(() => ensureLoaded(), 400);

    return () => {
      if (typeof window !== "undefined" && window.cancelIdleCallback) {
        window.cancelIdleCallback(idle);
      } else {
        window.clearTimeout(idle);
      }
    };
  }, [listKey, ensureLoaded]);

  const openDirectory = useCallback(() => {
    setActive(true);
    ensureLoaded();
    window.setTimeout(() => inputRef.current?.focus(), 60);
  }, [ensureLoaded]);

  const index = useMemo(() => buildRosterIndex(roster), [roster]);
  const initials = useMemo(() => getRosterInitials(index), [index]);

  const { results, totalMatches } = useMemo(() => {
    if (!index.length) return { results: [], totalMatches: 0 };

    const trimmed = query.trim();

    // Browsing by letter without a search term — show every name under that
    // letter, from the whole roster.
    if (!trimmed && letter) {
      const all = index
        .filter((entry) => normalizeForLetter(entry.name) === letter)
        .map((entry) => ({ name: entry.name, score: 0 }));
      return { results: all, totalMatches: all.length };
    }

    // A search term is active.
    if (trimmed) {
      const matches = searchRosterIndex(index, trimmed, { limit: 400 });
      const filtered = letter
        ? matches.filter((match) => normalizeForLetter(match.name) === letter)
        : matches;
      return { results: filtered, totalMatches: filtered.length };
    }

    // Nothing searched yet — show the start of the roster alphabetically so
    // the section never looks empty.
    const sorted = index
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry) => ({ name: entry.name, score: 0 }));

    return { results: sorted, totalMatches: sorted.length };
  }, [index, query, letter]);

  const exactMatch = useMemo(() => {
    if (!query.trim()) return null;
    return findExactMatch(index, query);
  }, [index, query]);

  const celebrate = useCallback((name, origin) => {
    setSelected(name);
    burstConfetti(origin);
  }, []);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    setSelected(null);
    setCopied(false);
    setVisibleCount(PAGE_SIZE);
  };

  // Pressing Enter on an exact match reveals the celebration card.
  const handleKeyDown = (event) => {
    if (event.key !== "Enter") return;
    if (selected) return;

    const hit = findExactMatch(index, query);
    if (hit) {
      event.preventDefault();
      setSelected(hit);
      setCopied(false);
      burstConfetti(null);
    }
  };

  const handleSelect = (name, event) => {
    const rect = event?.currentTarget?.getBoundingClientRect?.();
    celebrate(name, rect ? { x: rect.left + rect.width / 2, y: rect.top } : null);
  };

  const handleSurprise = () => {
    if (!index.length) return;
    const pick = index[Math.floor(Math.random() * index.length)];
    setQuery(pick.name);
    setLetter(null);
    setSelected(null);
    setCopied(false);
    celebrate(pick.name, null);
  };

  const handleCopy = async () => {
    if (!selected) return;
    const text = `${selected} — ${companyName || "our"} volunteer roster`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const clearAll = () => {
    setQuery("");
    setLetter(null);
    setSelected(null);
    setCopied(false);
    setVisibleCount(PAGE_SIZE);
    inputRef.current?.focus();
  };

  const selectLetter = (next) => {
    setLetter((current) => (current === next ? null : next));
    setVisibleCount(PAGE_SIZE);
  };

  const totalCount = index.length;
  const hasQuery = query.trim().length > 0;

  return (
    <section
      className={`md ${accentClass}`}
      id="member-directory"
      aria-label={title}
    >
      <div className="md__glow" aria-hidden="true" />

      <header className="md__head">
        <span className="md__eyebrow">
          <Users size={14} /> Volunteer roster
        </span>
        <h2 className="md__title">{title}</h2>
        {intro ? <p className="md__intro">{intro}</p> : null}
      </header>

      {!active ? (
        <button type="button" className="md__launch" onClick={openDirectory}>
          <Search size={20} />
          <span>Search the roster</span>
          <small>
            {totalCount
              ? `${totalCount.toLocaleString("en-IN")} names listed`
              : "Loading roster…"}
          </small>
        </button>
      ) : (
        <>
          <div className="md__searchbar">
            <div className="md__search">
              <Search size={18} className="md__search-icon" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                className="md__input"
                placeholder="Type your name…"
                aria-label="Search the volunteer roster by name"
                autoComplete="off"
                spellCheck={false}
              />
              {hasQuery ? (
                <button
                  type="button"
                  className="md__clear"
                  onClick={() => {
                    setQuery("");
                    setSelected(null);
                    setCopied(false);
                  }}
                  aria-label="Clear the search field"
                >
                  <X size={16} />
                </button>
              ) : null}
            </div>

            <button
              type="button"
              className="md__surprise"
              onClick={handleSurprise}
              disabled={!index.length}
            >
              <Dice5 size={17} /> Surprise me
            </button>
          </div>

          {status === "loading" ? (
            <div className="md__state" role="status">
              <Loader2 size={20} className="md__spinner" />
              <span>Loading the roster…</span>
            </div>
          ) : null}

          {status === "error" ? (
            <div className="md__state" role="status">
              <SearchX size={20} />
              <span>
                We could not load the roster right now. Please try again in a
                moment.
              </span>
            </div>
          ) : null}

          {status === "ready" ? (
            <>
              <div
                className="md__alphabet"
                role="group"
                aria-label="Browse the roster by first letter"
              >
                <button
                  type="button"
                  className={`md__chip${letter === null ? " is-active" : ""}`}
                  onClick={() => {
                      setLetter(null);
                      setVisibleCount(PAGE_SIZE);
                    }}
                >
                  All
                </button>
                {ALPHABET.map((char) => (
                  <button
                    key={char}
                    type="button"
                    className={`md__chip${letter === char ? " is-active" : ""}`}
                    onClick={() => selectLetter(char)}
                    disabled={!initials.get(char)}
                    aria-pressed={letter === char}
                  >
                    {char}
                  </button>
                ))}
                {initials.get("#") ? (
                  <button
                    type="button"
                    className={`md__chip${letter === "#" ? " is-active" : ""}`}
                    onClick={() => selectLetter("#")}
                    aria-pressed={letter === "#"}
                  >
                    #
                  </button>
                ) : null}
              </div>

              {selected ? (
                <div className="md__found" role="status">
                  <div className="md__found-badge" aria-hidden="true">
                    <Award size={26} />
                  </div>
                  <div className="md__found-body">
                    <span className="md__found-kicker">
                      <CheckCircle2 size={14} /> You are on the roster
                    </span>
                    <strong className="md__found-name">{selected}</strong>
                    <p className="md__found-copy">
                      Thank you for showing up for{" "}
                      {activityTitle || "this activity"}. Your effort is a real
                      part of this story.
                    </p>
                    <div className="md__found-actions">
                      <button type="button" className="md__pill" onClick={handleCopy}>
                        {copied ? (
                          <>
                            <Check size={15} /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={15} /> Copy my name
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        className="md__pill md__pill--ghost"
                        onClick={() => {
                          setSelected(null);
                          inputRef.current?.focus();
                        }}
                      >
                        <Sparkles size={15} /> Keep searching
                      </button>
                    </div>
                  </div>
                  <HandHeart size={90} className="md__found-watermark" aria-hidden="true" />
                </div>
              ) : null}

              {exactMatch && !selected ? (
                <p className="md__hint">
                  <CheckCircle2 size={15} /> We found an exact match — press
                  Enter or tap your name below to reveal it.
                </p>
              ) : null}

              <div className="md__results-head">
                <span>
                  {hasQuery || letter
                    ? `${totalMatches.toLocaleString("en-IN")} match${
                        totalMatches === 1 ? "" : "es"
                      }`
                    : `${totalCount.toLocaleString("en-IN")} volunteers`}
                </span>
                {hasQuery || letter ? (
                  <button type="button" className="md__reset" onClick={clearAll}>
                    Reset
                  </button>
                ) : null}
              </div>

              {results.length ? (
                <>
                  <ul className="md__results">
                    {results.slice(0, visibleCount).map((result) => (
                      <li key={result.name}>
                        <button
                          type="button"
                          className={`md__result${
                            selected === result.name ? " is-selected" : ""
                          }`}
                          onClick={(event) => handleSelect(result.name, event)}
                        >
                          <span className="md__avatar" aria-hidden="true">
                            {initialsOf(result.name)}
                          </span>
                          <span className="md__result-name">{result.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  {results.length > visibleCount ? (
                    <div className="md__more">
                      <p>
                        Showing {visibleCount.toLocaleString("en-IN")} of{" "}
                        {results.length.toLocaleString("en-IN")} matches
                        {hasQuery ? " — keep typing to narrow it down." : "."}
                      </p>
                      <button
                        type="button"
                        className="md__reset"
                        onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                      >
                        Show more
                      </button>
                    </div>
                  ) : null}
                </>
              ) : (
                <div className="md__empty">
                  <SearchX size={24} />
                  <strong>No match yet</strong>
                  <p>
                    Try a shorter spelling, or search by first name only. You
                    can also use the letters above to browse the roster.
                  </p>
                </div>
              )}
            </>
          ) : null}
        </>
      )}
    </section>
  );
}

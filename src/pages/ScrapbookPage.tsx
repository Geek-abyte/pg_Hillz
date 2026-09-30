import { useState, useRef } from "react";

import birthdayNote    from "../assets/main_page_assets/01_birthday_note.png";
import smallNote       from "../assets/main_page_assets/02_small_note.png";
import sunsetPolaroid  from "../assets/main_page_assets/03_sunset_polaroid.png";
import butterfly       from "../assets/main_page_assets/04_butterfly.png";
import gratefulText    from "../assets/main_page_assets/05_grateful_text.png";
import flower          from "../assets/main_page_assets/06_flower.png";
import yellowHeart     from "../assets/main_page_assets/07_yellow_heart.png";
import blueStar        from "../assets/main_page_assets/08_blue_star.png";
import smiley          from "../assets/main_page_assets/09_smiley.png";
import mainPolaroid    from "../assets/main_page_assets/12_main_polaroid.png";

/* ── Scrapbook page definitions ──────────────────────────── */
const PAGES = [
  {
    id: 1,
    bg: "#2d4a35",
    render: () => (
      <div className="sb-page sb-page--cover">
        <img src={birthdayNote}   className="sb-el sb-cover__title"    alt="Happy Birthday Hillary" draggable={false} />
        <img src={sunsetPolaroid} className="sb-el sb-cover__sunset"   alt="Sunset"  draggable={false} />
        <img src={butterfly}      className="sb-el sb-cover__butterfly" alt=""        draggable={false} />
        <img src={mainPolaroid}   className="sb-el sb-cover__main"     alt="Hillary" draggable={false} />
        <img src={smallNote}      className="sb-el sb-cover__note"     alt="Same girl, bigger dreams" draggable={false} />
        <img src={gratefulText}   className="sb-el sb-cover__grateful" alt="Grateful for you, always" draggable={false} />
        <img src={flower}         className="sb-el sb-cover__flower"   alt="" draggable={false} />
        <img src={blueStar}       className="sb-el sb-cover__star"     alt="" draggable={false} />
        <img src={smiley}         className="sb-el sb-cover__smiley"   alt="" draggable={false} />
        <img src={yellowHeart}    className="sb-el sb-cover__heart"    alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 2,
    bg: "#1e3528",
    render: () => (
      <div className="sb-page sb-page--two">
        <div className="sb-tape sb-tape--top-left" />
        <p className="sb-heading">The Beginning ✨</p>
        <img src={mainPolaroid}  className="sb-el sb-p2__photo"     alt="" draggable={false} />
        <div className="sb-sticky sb-p2__sticky">
          <p>"From day one,<br/>you've been the<br/>sunshine of every room"</p>
        </div>
        <img src={flower}       className="sb-el sb-p2__flower"    alt="" draggable={false} />
        <img src={butterfly}    className="sb-el sb-p2__butterfly" alt="" draggable={false} />
        <img src={yellowHeart}  className="sb-el sb-p2__heart"     alt="" draggable={false} />
        <div className="sb-doodle sb-doodle--stars">✦ ✦ ✦</div>
      </div>
    ),
  },
  {
    id: 3,
    bg: "#243b2c",
    render: () => (
      <div className="sb-page sb-page--three">
        <div className="sb-tape sb-tape--top-center" />
        <img src={birthdayNote}  className="sb-el sb-p3__title"  alt="Happy Birthday" draggable={false} />
        <div className="sb-postcard">
          <img src={sunsetPolaroid} className="sb-el sb-p3__sunset" alt="Sunset" draggable={false} />
          <p className="sb-postcard__caption">Golden hour, golden soul 🌅</p>
        </div>
        <div className="sb-sticky sb-p3__sticky">
          <p>"These moments<br/>are forever ours"</p>
        </div>
        <img src={smiley}   className="sb-el sb-p3__smiley" alt="" draggable={false} />
        <img src={blueStar} className="sb-el sb-p3__star"   alt="" draggable={false} />
        <div className="sb-doodle sb-doodle--hearts">♡ ♡ ♡</div>
      </div>
    ),
  },
  {
    id: 4,
    bg: "#2d4a35",
    render: () => (
      <div className="sb-page sb-page--four">
        <div className="sb-tape sb-tape--top-right" />
        <p className="sb-heading sb-heading--right">A Year of Memories 📸</p>
        <div className="sb-grid-2">
          <div className="sb-mini-polaroid">
            <img src={mainPolaroid}   alt="" draggable={false} />
            <span>Park vibes</span>
          </div>
          <div className="sb-mini-polaroid sb-mini-polaroid--tilted">
            <img src={sunsetPolaroid} alt="" draggable={false} />
            <span>Golden hour</span>
          </div>
          <div className="sb-mini-polaroid sb-mini-polaroid--tilt-r">
            <img src={mainPolaroid}   alt="" draggable={false} />
            <span>Best day ✨</span>
          </div>
          <div className="sb-mini-polaroid">
            <img src={sunsetPolaroid} alt="" draggable={false} />
            <span>Sunset 🌅</span>
          </div>
        </div>
        <img src={flower}    className="sb-el sb-p4__flower"    alt="" draggable={false} />
        <img src={butterfly} className="sb-el sb-p4__butterfly" alt="" draggable={false} />
      </div>
    ),
  },
  {
    id: 5,
    bg: "#1e3528",
    render: () => (
      <div className="sb-page sb-page--five">
        <div className="sb-tape sb-tape--top-left" />
        <div className="sb-quote-card">
          <p className="sb-quote-text">
            "You've always known<br/>
            exactly who you are —<br/>
            and watching you grow<br/>
            into that person has been<br/>
            the greatest gift."
          </p>
          <span className="sb-quote-sig">— with all my love 💛</span>
        </div>
        <img src={gratefulText} className="sb-el sb-p5__grateful" alt="" draggable={false} />
        <img src={yellowHeart}  className="sb-el sb-p5__heart"    alt="" draggable={false} />
        <img src={smiley}       className="sb-el sb-p5__smiley"   alt="" draggable={false} />
        <div className="sb-doodle sb-doodle--stars">✦ ✦ ✦</div>
      </div>
    ),
  },
  {
    id: 6,
    bg: "#243b2c",
    render: () => (
      <div className="sb-page sb-page--six">
        <div className="sb-tape sb-tape--top-center" />
        <p className="sb-heading">The Future is Yours 🌟</p>
        <img src={smallNote} className="sb-el sb-p6__note" alt="" draggable={false} />
        <div className="sb-sticky sb-p6__sticky sb-sticky--wide">
          <p>
            "Dream big, Hillary.<br/>
            The whole world is<br/>waiting for what<br/>you're about to do."
          </p>
        </div>
        <img src={butterfly} className="sb-el sb-p6__butterfly" alt="" draggable={false} />
        <img src={blueStar}  className="sb-el sb-p6__star1"     alt="" draggable={false} />
        <img src={blueStar}  className="sb-el sb-p6__star2"     alt="" draggable={false} />
        <img src={flower}    className="sb-el sb-p6__flower"    alt="" draggable={false} />
        <div className="sb-doodle sb-doodle--hearts">♡ ♡ ♡</div>
      </div>
    ),
  },
  {
    id: 7,
    bg: "#2d4a35",
    render: () => (
      <div className="sb-page sb-page--seven">
        <div className="sb-tape sb-tape--top-left" />
        <img src={birthdayNote} className="sb-el sb-p7__title" alt="Happy Birthday Hillary" draggable={false} />
        <div className="sb-closing">
          <p className="sb-closing__text">
            Happy Birthday,<br/>
            <strong>Hillary.</strong><br/>
            <br/>
            Here's to every<br/>beautiful chapter ahead. 📖
          </p>
        </div>
        <img src={mainPolaroid} className="sb-el sb-p7__photo"     alt="" draggable={false} />
        <img src={flower}       className="sb-el sb-p7__flower"    alt="" draggable={false} />
        <img src={smiley}       className="sb-el sb-p7__smiley"    alt="" draggable={false} />
        <img src={yellowHeart}  className="sb-el sb-p7__heart"     alt="" draggable={false} />
        <img src={butterfly}    className="sb-el sb-p7__butterfly" alt="" draggable={false} />
        <div className="sb-closing__fin">✦ fin ✦</div>
      </div>
    ),
  },
];

type Dir = "forward" | "back";

interface AnimState {
  from: number;
  to: number;
  dir: Dir;
}

export default function ScrapbookPage() {
  const [current, setCurrent]     = useState(0);
  const [animState, setAnimState] = useState<AnimState | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = (next: number, dir: Dir) => {
    if (animState || next < 0 || next >= PAGES.length || next === current) return;
    setAnimState({ from: current, to: next, dir });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(next);
      setAnimState(null);
    }, 680);
  };

  const prev = () => goTo(current - 1, "back");
  const next = () => goTo(current + 1, "forward");

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, animState]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
  };

  const page = PAGES[current];

  return (
    <div
      className="sb-viewer"
      style={{ "--sb-bg": page.bg } as React.CSSProperties}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Book canvas with tactile 3D perspective ── */}
      <div className="sb-book">
        {animState ? (
          <>
            {/* Underlying Page: already visible beneath while turning */}
            <div
              className={`sb-sheet sb-sheet--under sb-sheet--under-${animState.dir}`}
              style={{ zIndex: 1 }}
            >
              {PAGES[animState.dir === "forward" ? animState.to : animState.from].render()}
              <div className={`sb-shadow-overlay sb-shadow-overlay--${animState.dir}`} />
            </div>

            {/* Turning Page: flexible paper curling, skewing, and flipping */}
            <div
              className={`sb-sheet sb-sheet--turning sb-sheet--turning-${animState.dir}`}
              style={{ zIndex: 10 }}
            >
              <div className="sb-sheet__inner">
                {PAGES[animState.dir === "forward" ? animState.from : animState.to].render()}
                <div className="sb-paper-sheen" />
              </div>
            </div>
          </>
        ) : (
          <div className="sb-sheet sb-sheet--static" style={{ zIndex: 1 }}>
            {PAGES[current].render()}
          </div>
        )}
      </div>

      {/* ── Nav arrows ── */}
      <button
        className="sb-nav sb-nav--prev"
        onClick={prev}
        disabled={current === 0 || !!animState}
        aria-label="Previous page"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        className="sb-nav sb-nav--next"
        onClick={next}
        disabled={current === PAGES.length - 1 || !!animState}
        aria-label="Next page"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── Page counter + dots ── */}
      <div className="sb-counter">
        <div className="sb-counter__track">
          {PAGES.map((_, i) => (
            <button
              key={i}
              className={[
                "sb-counter__dot",
                (animState ? animState.to : current) === i ? "sb-counter__dot--active" : "",
              ].join(" ")}
              onClick={() => goTo(i, i > current ? "forward" : "back")}
              disabled={!!animState}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <span className="sb-counter__label">
          {(animState ? animState.to : current) + 1} / {PAGES.length}
        </span>
      </div>
    </div>
  );
}

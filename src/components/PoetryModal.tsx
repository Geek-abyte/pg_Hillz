import { useEffect, useRef, useState } from "react";

export interface NoteMessage {
  title: string;
  author: string;
  content: string | string[];
}

interface PoetryModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: NoteMessage | null;
}

export default function PoetryModal({ isOpen, onClose, note }: PoetryModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [renderedNote, setRenderedNote] = useState<NoteMessage | null>(null);

  useEffect(() => {
    if (isOpen && note) {
      setRenderedNote(note);
      setIsClosing(false);
      if (cardRef.current) {
        cardRef.current.scrollTop = 0;
      }
    } else if (!isOpen && renderedNote) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsClosing(false);
        setRenderedNote(null);
      }, 340);
      return () => clearTimeout(timer);
    }
  }, [isOpen, note]);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setRenderedNote(null);
    }, 320);
  };

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen && !isClosing) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isClosing]);

  if (!isOpen && !isClosing && !renderedNote) return null;
  const currentNote = note || renderedNote;
  if (!currentNote) return null;

  // Split string content into paragraphs if needed
  const paragraphs = Array.isArray(currentNote.content)
    ? currentNote.content
    : currentNote.content.split("\n\n").filter(Boolean);

  return (
    <div
      className={`poetry-backdrop ${isClosing ? "poetry-backdrop--closing" : ""}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={currentNote.title}
    >
      {/* Decorative ambient floating particles / glow */}
      <div className={`poetry-ambient-glow ${isClosing ? "poetry-ambient-glow--closing" : ""}`} />

      <div
        ref={cardRef}
        className={`poetry-card ${isClosing ? "poetry-card--closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="poetry-close-btn"
          onClick={handleClose}
          aria-label="Close message"
        >
          ✕
        </button>

        {/* Vintage Paper Ribbon / Header Accent */}
        <div className="poetry-header-ornament">
          <span>❦</span>
        </div>

        {/* Author Byline */}
        <div className="poetry-author">
          <span>from</span> {currentNote.author}
        </div>

        {/* Title */}
        <h2 className="poetry-title">{currentNote.title}</h2>

        <div className="poetry-divider" />

        {/* Message Body */}
        <div className="poetry-body">
          {paragraphs.map((para, idx) => (
            <p key={idx} className="poetry-paragraph">
              {para}
            </p>
          ))}
        </div>

        {/* Poetic Footer / Seal */}
        <div className="poetry-footer">
          <span className="poetry-seal">♥ With love & prayers always ♥</span>
        </div>
      </div>
    </div>
  );
}

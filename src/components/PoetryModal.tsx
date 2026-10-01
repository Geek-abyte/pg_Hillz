import { useEffect, useRef } from "react";

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

  // Handle ESC key to close and reset scroll
  useEffect(() => {
    if (!isOpen) return;
    if (cardRef.current) {
      cardRef.current.scrollTop = 0;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !note) return null;

  // Split string content into paragraphs if needed
  const paragraphs = Array.isArray(note.content)
    ? note.content
    : note.content.split("\n\n").filter(Boolean);

  return (
    <div
      className="poetry-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={note.title}
    >
      {/* Decorative ambient ambient floating particles / glow */}
      <div className="poetry-ambient-glow" />

      <div
        ref={cardRef}
        className="poetry-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="poetry-close-btn"
          onClick={onClose}
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
          <span>from</span> {note.author}
        </div>

        {/* Title */}
        <h2 className="poetry-title">{note.title}</h2>

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

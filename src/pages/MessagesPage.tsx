import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import PoetryModal, { type NoteMessage } from "../components/PoetryModal";
import flower from "../assets/main_page_assets/06_flower.png";
import yellowHeart from "../assets/main_page_assets/07_yellow_heart.png";
import smiley from "../assets/main_page_assets/09_smiley.png";

// Import all notes from dedicated data file
import {
  PAGE_2_NOTE,
  PAGE_3_NOTE,
  PAGE_4_NOTE,
  PAGE_6_NOTE,
  PAGE_7_ELPRAISE_NOTE,
  PAGE_8_MELODY_NOTE,
  PAGE_10_NOTE_1,
  PAGE_10_NOTE_2,
  PAGE_11_NOTE,
  PAGE_7_NOTE,
} from "../data/scrapbookNotes";

export interface FeaturedScrapbookMessage {
  id: string;
  author: string;
  relationship: string;
  title: string;
  content: string;
  pageIndex: number; // 0-based index in Scrapbook
  noteData: NoteMessage;
  themeColor?: string;
  cardStyle?: "parchment" | "sage" | "lavender" | "kraft" | "olive";
}

export const FEATURED_SCRAPBOOK_MESSAGES: FeaturedScrapbookMessage[] = [
  {
    id: "msg-rejoice",
    author: "Rejoice",
    relationship: "My own old woman 🌸❤️",
    title: PAGE_2_NOTE.title,
    content: PAGE_2_NOTE.content as string,
    pageIndex: 1,
    noteData: PAGE_2_NOTE,
    themeColor: "#a855f7",
    cardStyle: "lavender",
  },
  {
    id: "msg-ojima",
    author: "Ojima",
    relationship: "Independence baby & Event Planner 🫂❤️",
    title: PAGE_3_NOTE.title,
    content: PAGE_3_NOTE.content as string,
    pageIndex: 2,
    noteData: PAGE_3_NOTE,
    themeColor: "#f59e0b",
    cardStyle: "parchment",
  },
  {
    id: "msg-divine",
    author: "Divine",
    relationship: "Close friend with a beautiful soul 💛",
    title: PAGE_4_NOTE.title,
    content: PAGE_4_NOTE.content as string,
    pageIndex: 3,
    noteData: PAGE_4_NOTE,
    themeColor: "#eab308",
    cardStyle: "kraft",
  },
  {
    id: "msg-tony",
    author: "Tony",
    relationship: "Peppermeje & Terror of inconvenience 😂❤️",
    title: PAGE_6_NOTE.title,
    content: PAGE_6_NOTE.content as string,
    pageIndex: 5,
    noteData: PAGE_6_NOTE,
    themeColor: "#84cc16",
    cardStyle: "olive",
  },
  {
    id: "msg-elpraise",
    author: "El-praise",
    relationship: "Your brother 👫",
    title: PAGE_7_ELPRAISE_NOTE.title,
    content: PAGE_7_ELPRAISE_NOTE.content as string,
    pageIndex: 6,
    noteData: PAGE_7_ELPRAISE_NOTE,
    themeColor: "#10b981",
    cardStyle: "sage",
  },
  {
    id: "msg-melody",
    author: "Melody",
    relationship: "Proud sister 🥂💕",
    title: "Happy Beautiful Birthday Hillalove",
    content: PAGE_8_MELODY_NOTE.content as string,
    pageIndex: 7,
    noteData: PAGE_8_MELODY_NOTE,
    themeColor: "#ec4899",
    cardStyle: "lavender",
  },
  {
    id: "msg-tlh-1",
    author: "TLH",
    relationship: "Family & Fellowship 🤍",
    title: PAGE_10_NOTE_1.title,
    content: PAGE_10_NOTE_1.content as string,
    pageIndex: 9,
    noteData: PAGE_10_NOTE_1,
    themeColor: "#38bdf8",
    cardStyle: "parchment",
  },
  {
    id: "msg-tlh-2",
    author: "TLH",
    relationship: "To Our Beloved Hillary 💐",
    title: PAGE_10_NOTE_2.title,
    content: PAGE_10_NOTE_2.content as string,
    pageIndex: 9,
    noteData: PAGE_10_NOTE_2,
    themeColor: "#38bdf8",
    cardStyle: "parchment",
  },
  {
    id: "msg-gbemi",
    author: "Gbemi",
    relationship: "Friend turned sister 🥹❤️",
    title: PAGE_11_NOTE.title,
    content: PAGE_11_NOTE.content as string,
    pageIndex: 10,
    noteData: PAGE_11_NOTE,
    themeColor: "#fbbf24",
    cardStyle: "kraft",
  },
  {
    id: "msg-barbieboy",
    author: "Barbie boy",
    relationship: "Blankie 🇳🇬💥",
    title: PAGE_7_NOTE.title,
    content: PAGE_7_NOTE.content as string,
    pageIndex: 11,
    noteData: PAGE_7_NOTE,
    themeColor: "#22c55e",
    cardStyle: "olive",
  },
];

interface UserGuestMessage {
  id: number;
  author: string;
  content: string;
  createdAt: number;
}

export default function MessagesPage() {
  const [activeModalNote, setActiveModalNote] = useState<NoteMessage | null>(null);
  const [guestMessages, setGuestMessages] = useState<UserGuestMessage[]>(() => {
    try {
      const saved = localStorage.getItem("guest_messages");
      if (saved) return JSON.parse(saved);
    } catch (_) {}
    return [];
  });

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newMsg: UserGuestMessage = {
      id: Date.now(),
      author: author.trim(),
      content: content.trim(),
      createdAt: Date.now(),
    };

    const updated = [newMsg, ...guestMessages];
    setGuestMessages(updated);
    try {
      localStorage.setItem("guest_messages", JSON.stringify(updated));
    } catch (_) {}

    setAuthor("");
    setContent("");
  };

  const handleGoToScrapbookPage = (pageIdx: number) => {
    try {
      localStorage.setItem("sb_page", String(pageIdx));
    } catch (_) {}
  };

  const formatTime = (ts: number) =>
    new Date(ts).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="messages-page page-enter">
      <div className="page-content">
        {/* Header */}
        <header className="messages-header">
          <div className="messages-badge">✧ Words of Love & Prayers ✧</div>
          <h1>✉️ Scrapbook Letters & Wishes</h1>
          <p className="messages-subtitle">
            Read all heartfelt letters, blessings, and banter written for Hillary across each page of her scrapbook.
          </p>
        </header>

        {/* Section 1: Featured Scrapbook Notes */}
        <section className="featured-letters-section">
          <div className="section-title-wrap">
            <span className="section-icon">📖</span>
            <h2 className="section-title">Letters from the Scrapbook Pages</h2>
          </div>

          <div className="letters-grid">
            {FEATURED_SCRAPBOOK_MESSAGES.map((msg, i) => {
              const previewText =
                msg.content.length > 220
                  ? msg.content.slice(0, 220).trim() + "..."
                  : msg.content;

              return (
                <article
                  key={msg.id}
                  className={`letter-card letter-card--${msg.cardStyle || "parchment"}`}
                  onClick={() => setActiveModalNote(msg.noteData)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Read full note from ${msg.author}`}
                >
                  <div className={`letter-tape tape--${(i % 3) + 1}`} />

                  <div className="letter-header">
                    <span className="letter-author">💛 {msg.author}</span>
                    <span className="letter-relationship">{msg.relationship}</span>
                  </div>

                  {msg.title && <h3 className="letter-title">{msg.title}</h3>}

                  <p className="letter-preview">{previewText}</p>

                  <div className="letter-footer">
                    <span className="read-full-btn">Read Full Letter ✨</span>
                    <Link
                      to="/scrapbook"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGoToScrapbookPage(msg.pageIndex);
                      }}
                      className="page-jump-link"
                      title={`Go to Scrapbook Page ${msg.pageIndex + 1}`}
                    >
                      Page {msg.pageIndex + 1} ↗
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Section 2: Guestbook & Leave a Message Form */}
        <section className="guestbook-section">
          <div className="section-title-wrap">
            <span className="section-icon">💌</span>
            <h2 className="section-title">Leave Your Own Birthday Wish</h2>
          </div>

          <form className="message-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name or nickname..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              maxLength={50}
              required
            />
            <textarea
              placeholder="Write a sweet birthday wish, prayer, or favorite memory with Hillary..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={600}
              required
            />
            <button type="submit">Sign Birthday Guestbook 💌</button>
          </form>

          {/* User Submitted Messages */}
          <div className="guest-messages-list">
            {guestMessages.length > 0 && (
              <h3 className="guest-messages-heading">
                Guestbook Entries ({guestMessages.length})
              </h3>
            )}

            {guestMessages.map((msg) => (
              <div className="message-card" key={msg.id}>
                <div className="author">💛 {msg.author}</div>
                <div className="content">{msg.content}</div>
                <div className="time">{formatTime(msg.createdAt)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Decorative stickers row */}
        <div className="messages-stickers-row">
          <img src={flower} alt="Flower sticker" className="sticker-item" />
          <img src={yellowHeart} alt="Heart sticker" className="sticker-item" />
          <img src={smiley} alt="Smiley sticker" className="sticker-item" />
        </div>
      </div>

      {/* Literary Poetry Modal */}
      <PoetryModal
        isOpen={Boolean(activeModalNote)}
        onClose={() => setActiveModalNote(null)}
        note={activeModalNote}
      />
    </div>
  );
}

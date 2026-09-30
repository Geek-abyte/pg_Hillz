import React, { useState } from "react";

interface Message {
  id: number;
  author: string;
  content: string;
  createdAt: number;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;
    setMessages((prev) => [
      {
        id: Date.now(),
        author: author.trim(),
        content: content.trim(),
        createdAt: Date.now(),
      },
      ...prev,
    ]);
    setContent("");
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
        <h1>✉️ Leave a Message</h1>

        <form className="message-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            maxLength={50}
          />
          <textarea
            placeholder="Write a birthday message for Hillary..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={500}
          />
          <button type="submit">Send Message 💌</button>
        </form>

        {messages.length === 0 && (
          <p style={{ color: "rgba(232,213,163,0.5)", textAlign: "center", fontFamily: "'Caveat', cursive", fontSize: 20, marginTop: 24 }}>
            Be the first to leave a birthday message! 🎂
          </p>
        )}

        {messages.map((msg) => (
          <div className="message-card" key={msg.id}>
            <div className="author">💛 {msg.author}</div>
            <div className="content">{msg.content}</div>
            <div className="time">{formatTime(msg.createdAt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

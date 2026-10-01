import { useEffect, useRef, useState } from "react";
import "../styles/scrapbook/bento-modal.css";

interface BentoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export default function BentoGalleryModal({ isOpen, onClose, images }: BentoGalleryModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setSelectedPhoto(null);
    }, 280);
  };

  // Close on ESC
  useEffect(() => {
    if (!isOpen && !isClosing) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedPhoto) {
          setSelectedPhoto(null);
        } else {
          handleClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isClosing, selectedPhoto]);

  if (!isOpen && !isClosing) return null;

  // Bento layout helper classes for variety
  const getBentoClass = (index: number) => {
    switch (index) {
      case 0:
        return "bento-item--tall"; // row span 2
      case 1:
        return "bento-item--wide"; // col span 2
      case 2:
        return "";
      case 3:
        return "";
      case 4:
        return "bento-item--wide";
      case 5:
        return "";
      default:
        return "";
    }
  };

  return (
    <div
      className={`bento-backdrop ${isClosing ? "bento-backdrop--closing" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="bento-ambient-glow" />

      <div
        ref={cardRef}
        className={`bento-card ${isClosing ? "bento-card--closing" : ""}`}
      >
        <button
          className="bento-close-btn"
          onClick={handleClose}
          aria-label="Close photo gallery"
        >
          ✕
        </button>

        <header className="bento-header">
          <div className="bento-header-ornament">✧ ✦ ✧</div>
          <h2 className="bento-title">Special Moments</h2>
          <p className="bento-subtitle">Gbemi & Hillary memories 📸</p>
          <div className="bento-divider" />
        </header>

        <div className="bento-grid">
          {images.map((src, i) => (
            <div
              key={i}
              className={`bento-item ${getBentoClass(i)}`}
              onClick={() => setSelectedPhoto(src)}
            >
              <img
                src={src}
                alt={`Gbemi & Hillary moment ${i + 1}`}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox when an image is clicked */}
      {selectedPhoto && (
        <div
          className="bento-lightbox"
          onClick={() => setSelectedPhoto(null)}
          title="Click to zoom out"
        >
          <img
            src={selectedPhoto}
            className="bento-lightbox-img"
            alt="Enlarged moment"
          />
        </div>
      )}
    </div>
  );
}

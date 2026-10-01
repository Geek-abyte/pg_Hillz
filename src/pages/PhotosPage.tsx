import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Page 1 (Home & Cover)
import mainPolaroid from "../assets/main_page_assets/12_main_polaroid.png";
import sunsetPolaroid from "../assets/main_page_assets/03_sunset_polaroid.png";

// Page 2
import p2Photo from "../assets/page2/noname.png";

// Page 3
import p3Photo from "../assets/page3/noname.png";

// Page 4
import divinePhoto from "../assets/page5/divine.png";

// Page 5
import sophie1 from "../assets/sophia/sophie1.png";
import sophie2 from "../assets/sophia/sophie2.png";
import sophie3 from "../assets/sophia/sophie3.png";

// Page 6
import tonyPhoto from "../assets/tony/tony.png";

// Page 7
import praise1 from "../assets/el-praise/praise1.png";
import praise2 from "../assets/el-praise/priase2.png";

// Page 8
import melody1 from "../assets/melody/melody1.png";
import melody2 from "../assets/melody/melody2.png";

// Page 9
import mabel1 from "../assets/mabel/mabel1.png";
import mabel2 from "../assets/mabel/mabel2.png";
import mabel3 from "../assets/mabel/mabel3.png";

// Page 10
import tlhPhoto from "../assets/TLH.png";

// Page 11
import gbemiMain from "../assets/gbemi/gbemi-main.png";
import gbemiGallery from "../assets/gbemi/gallery.png";
import gbemiPhoto1 from "../assets/gbemi/WhatsApp Image 2026-09-30 at 19.02.34 (1).jpeg";
import gbemiPhoto2 from "../assets/gbemi/WhatsApp Image 2026-09-30 at 19.02.35 (1).jpeg";
import gbemiPhoto3 from "../assets/gbemi/WhatsApp Image 2026-09-30 at 19.02.35 (2).jpeg";
import gbemiPhoto4 from "../assets/gbemi/WhatsApp Image 2026-09-30 at 19.02.35.jpeg";
import gbemiPhoto5 from "../assets/gbemi/WhatsApp Image 2026-10-01 at 08.26.39.jpeg";
import gbemiPhoto6 from "../assets/gbemi/WhatsApp Image 2026-10-01 at 08.26.40.jpeg";

// Page 12
import p6Polaroid from "../assets/page6/04_main_polaroid_photo.png";

// Decorative Stickers
import flower from "../assets/main_page_assets/06_flower.png";
import butterfly from "../assets/main_page_assets/04_butterfly.png";
import smiley from "../assets/main_page_assets/09_smiley.png";

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  authorOrTag?: string;
  pageIndex?: number; // 0-based page index in Scrapbook
}

export const ALL_PHOTOS: GalleryPhoto[] = [
  {
    id: "cover-main",
    src: mainPolaroid,
    caption: "Birthday Star Hillary 🌸✨",
    authorOrTag: "Cover / Home",
    pageIndex: 0,
  },
  {
    id: "cover-sunset",
    src: sunsetPolaroid,
    caption: "Golden hour sunset polaroid 🌅",
    authorOrTag: "Page 1",
    pageIndex: 0,
  },
  {
    id: "p2-photo",
    src: p2Photo,
    caption: "The little moments & sweet memories 💕",
    authorOrTag: "Rejoice (Page 2)",
    pageIndex: 1,
  },
  {
    id: "p3-photo",
    src: p3Photo,
    caption: "Happy Birthday Bestie! Joy & laughter always ✨",
    authorOrTag: "Ojima (Page 3)",
    pageIndex: 2,
  },
  {
    id: "divine-photo",
    src: divinePhoto,
    caption: "Good friends, better days & beautiful soul 💛",
    authorOrTag: "Divine (Page 4)",
    pageIndex: 3,
  },
  {
    id: "sophie-1",
    src: sophie1,
    caption: "Forever moments together 👭",
    authorOrTag: "Sophie (Page 5)",
    pageIndex: 4,
  },
  {
    id: "sophie-2",
    src: sophie2,
    caption: "Pure joy & beautiful smiles 💖",
    authorOrTag: "Sophie (Page 5)",
    pageIndex: 4,
  },
  {
    id: "sophie-3",
    src: sophie3,
    caption: "Cherished snapshot 📸",
    authorOrTag: "Sophie (Page 5)",
    pageIndex: 4,
  },
  {
    id: "tony-photo",
    src: tonyPhoto,
    caption: "Peppermeje & terror to inconvenience 😂❤️",
    authorOrTag: "Tony (Page 6)",
    pageIndex: 5,
  },
  {
    id: "praise-1",
    src: praise1,
    caption: "Brother & sister shenanigans 👫",
    authorOrTag: "El-praise (Page 7)",
    pageIndex: 6,
  },
  {
    id: "praise-2",
    src: praise2,
    caption: "Family love & laughter always 💫",
    authorOrTag: "El-praise (Page 7)",
    pageIndex: 6,
  },
  {
    id: "melody-1",
    src: melody1,
    caption: "Hillalove blooming beautifully 🌸",
    authorOrTag: "Melody (Page 8)",
    pageIndex: 7,
  },
  {
    id: "melody-2",
    src: melody2,
    caption: "Proud sister love always 🥂",
    authorOrTag: "Melody (Page 8)",
    pageIndex: 7,
  },
  {
    id: "mabel-1",
    src: mabel1,
    caption: "Bigger dreams, vibrant energy 🌟",
    authorOrTag: "Mabel (Page 9)",
    pageIndex: 8,
  },
  {
    id: "mabel-2",
    src: mabel2,
    caption: "Unfiltered laughter & timeless moments 🌻",
    authorOrTag: "Mabel (Page 9)",
    pageIndex: 8,
  },
  {
    id: "mabel-3",
    src: mabel3,
    caption: "Celebrate the birthday girl 🎀",
    authorOrTag: "Mabel (Page 9)",
    pageIndex: 8,
  },
  {
    id: "tlh-photo",
    src: tlhPhoto,
    caption: "To our beloved Hillary — Not forgotten, ever appreciated 🤍",
    authorOrTag: "TLH (Page 10)",
    pageIndex: 9,
  },
  {
    id: "gbemi-main",
    src: gbemiMain,
    caption: "Friend turned sister, tailormade masterpiece 🫂✨",
    authorOrTag: "Gbemi (Page 11)",
    pageIndex: 10,
  },
  {
    id: "gbemi-strip",
    src: gbemiGallery,
    caption: "Photo strip collection 🎞️",
    authorOrTag: "Gbemi (Page 11)",
    pageIndex: 10,
  },
  {
    id: "gbemi-1",
    src: gbemiPhoto1,
    caption: "Golden smile & spontaneous fun 📸",
    authorOrTag: "Gbemi Gallery (Page 11)",
    pageIndex: 10,
  },
  {
    id: "gbemi-2",
    src: gbemiPhoto2,
    caption: "Style, grace & endless memories 👒",
    authorOrTag: "Gbemi Gallery (Page 11)",
    pageIndex: 10,
  },
  {
    id: "gbemi-3",
    src: gbemiPhoto3,
    caption: "Cherished times with Hillary 🌿",
    authorOrTag: "Gbemi Gallery (Page 11)",
    pageIndex: 10,
  },
  {
    id: "gbemi-4",
    src: gbemiPhoto4,
    caption: "Warm smiles & sisterhood 💛",
    authorOrTag: "Gbemi Gallery (Page 11)",
    pageIndex: 10,
  },
  {
    id: "gbemi-5",
    src: gbemiPhoto5,
    caption: "A toast to new seasons & blessings 🥂",
    authorOrTag: "Gbemi Gallery (Page 11)",
    pageIndex: 10,
  },
  {
    id: "gbemi-6",
    src: gbemiPhoto6,
    caption: "Forever grateful for this bond 💖",
    authorOrTag: "Gbemi Gallery (Page 11)",
    pageIndex: 10,
  },
  {
    id: "page6-polaroid",
    src: p6Polaroid,
    caption: "Soldier of Grace — God don help am! 🪖⭐",
    authorOrTag: "Barbie boy (Page 12)",
    pageIndex: 11,
  },
];

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Filter tags
  const filterTags = [
    "All",
    "Rejoice",
    "Ojima",
    "Divine",
    "Sophie",
    "Tony",
    "El-praise",
    "Melody",
    "Mabel",
    "TLH",
    "Gbemi",
    "Barbie boy",
  ];

  const filteredPhotos = ALL_PHOTOS.filter((photo) => {
    if (activeFilter === "All") return true;
    return photo.authorOrTag?.toLowerCase().includes(activeFilter.toLowerCase());
  });

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleGoToPage = (pageIdx?: number) => {
    if (typeof pageIdx === "number") {
      try {
        localStorage.setItem("sb_page", String(pageIdx));
      } catch (_) {}
    }
  };

  return (
    <div className="photos-page page-enter">
      <div className="page-content">
        <header className="photos-header">
          <div className="photos-badge">✧ Scrapbook Gallery ✧</div>
          <h1>📸 Our Memory Wall</h1>
          <p className="photos-subtitle">
            Every snapshot, polaroid, and smile featured across all {12} scrapbook pages — collected in one beautiful gallery.
          </p>

          {/* Filter Pills */}
          <div className="photos-filter-bar">
            {filterTags.map((tag) => (
              <button
                key={tag}
                className={`photos-filter-btn ${activeFilter === tag ? "active" : ""}`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </header>

        {/* Polaroid Mosaic Grid */}
        <div className="photos-grid">
          {filteredPhotos.map((photo, i) => {
            // Organic scrapbooking rotation angle
            const rot = ((i * 7) % 7) - 3; // between -3deg and +3deg
            return (
              <article
                key={photo.id}
                className="photo-card"
                style={{ transform: `rotate(${rot}deg)` }}
                onClick={() => setSelectedPhoto(photo)}
                tabIndex={0}
                role="button"
                aria-label={`View photo: ${photo.caption}`}
              >
                {/* Vintage Washi Tape accent on top of card */}
                <div className={`card-tape card-tape--${(i % 3) + 1}`} />

                <div className="photo-frame">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="photo-zoom-hint">🔍 Expand</div>
                </div>

                <div className="photo-details">
                  <p className="photo-caption">{photo.caption}</p>
                  {photo.authorOrTag && (
                    <span className="photo-tag">💛 {photo.authorOrTag}</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Navigation call-to-action */}
        <div className="photos-bottom-cta">
          <Link
            to="/scrapbook"
            className="photos-book-cta-btn"
          >
            📖 Open Full Interactive Scrapbook
          </Link>
        </div>

        {/* Decorative stickers */}
        <div className="photos-stickers-row">
          <img src={flower} alt="Flower sticker" className="sticker-item" />
          <img src={smiley} alt="Smiley sticker" className="sticker-item" />
          <img src={butterfly} alt="Butterfly sticker" className="sticker-item" />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="photos-lightbox"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="photos-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="photos-lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
            >
              ✕
            </button>

            <div className="photos-lightbox-img-wrap">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="photos-lightbox-img"
              />
            </div>

            <div className="photos-lightbox-meta">
              <span className="photos-lightbox-badge">{selectedPhoto.authorOrTag}</span>
              <h3 className="photos-lightbox-title">{selectedPhoto.caption}</h3>
              {typeof selectedPhoto.pageIndex === "number" && (
                <Link
                  to="/scrapbook"
                  onClick={() => handleGoToPage(selectedPhoto.pageIndex)}
                  className="photos-lightbox-link"
                >
                  📖 View this moment in Scrapbook (Page {selectedPhoto.pageIndex + 1}) →
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

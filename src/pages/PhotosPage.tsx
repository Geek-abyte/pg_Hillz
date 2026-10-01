import mainPolaroid from "../assets/main_page_assets/12_main_polaroid.png";
import sunsetPolaroid from "../assets/main_page_assets/03_sunset_polaroid.png";
import flower from "../assets/main_page_assets/06_flower.png";
import butterfly from "../assets/main_page_assets/04_butterfly.png";
import smiley from "../assets/main_page_assets/09_smiley.png";

const photos = [
  { src: mainPolaroid, caption: "Friends in the park 🌸" },
  { src: sunsetPolaroid, caption: "Golden hour 🌅" },
];

export default function PhotosPage() {
  return (
    <div className="photos-page page-enter">
      <div className="page-content">
        <h1>📸 Our Memories</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "10px 10px 36px 10px",
                boxShadow: "6px 8px 24px rgba(0,0,0,0.5)",
                transform: `rotate(${i % 2 === 0 ? "-2deg" : "2.5deg"})`,
                transition: "transform 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotate(0deg) scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = `rotate(${
                  i % 2 === 0 ? "-2deg" : "2.5deg"
                })`)
              }
            >
              <img
                src={photo.src}
                alt={photo.caption}
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <p
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 18,
                  textAlign: "center",
                  marginTop: 10,
                  color: "#2d4a35",
                  fontWeight: 600,
                }}
              >
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative stickers */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <img
            src={flower}
            alt="flower"
            style={{ width: 70, filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.4))" }}
          />
          <img
            src={smiley}
            alt="smiley"
            style={{ width: 70, filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.4))" }}
          />
          <img
            src={butterfly}
            alt="butterfly"
            style={{ width: 80, filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.4))" }}
          />
        </div>
      </div>
    </div>
  );
}

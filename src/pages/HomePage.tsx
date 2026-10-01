
import { Link } from "react-router-dom";

import birthdayNote from "../assets/main_page_assets/01_birthday_note.png";
import smallNote from "../assets/main_page_assets/02_small_note.png";
import sunsetPolaroid from "../assets/main_page_assets/03_sunset_polaroid.png";
import butterfly from "../assets/main_page_assets/04_butterfly.png";
import gratefulText from "../assets/main_page_assets/05_grateful_text.png";
import flower from "../assets/main_page_assets/06_flower.png";
import yellowHeart from "../assets/main_page_assets/07_yellow_heart.png";
import blueStar from "../assets/main_page_assets/08_blue_star.png";
import smiley from "../assets/main_page_assets/09_smiley.png";
import mainPolaroid from "../assets/main_page_assets/12_main_polaroid.png";

// Prefetch the Scrapbook route when user hovers or is likely to tap
const prefetchScrapbook = () => {
  import("./ScrapbookPage");
};

export default function HomePage() {
  return (
    // Full-screen background (texture always covers 100vw × 100vh)
    <div className="home-board">

      {/* Content container */}
      <div className="board-content">

        <div className="el birthday-note">
          <img src={birthdayNote} alt="Happy Birthday Hillary" fetchPriority="high" draggable={false} />
        </div>

        <div className="el sunset-polaroid">
          <img src={sunsetPolaroid} alt="Sunset polaroid" draggable={false} />
        </div>

        {/* Main interactive polaroid photo */}
        <Link
          to="/scrapbook"
          className="el main-polaroid interactive-polaroid"
          title="Click to view our scrapbook!"
          aria-label="View our scrapbook"
          onMouseEnter={prefetchScrapbook}
          onTouchStart={prefetchScrapbook}
        >
          <img src={mainPolaroid} alt="Hillary" fetchPriority="high" draggable={false} />
        </Link>

        {/* Eye-catching animated 'Click here' Lead — sits inside polaroid space */}
        <Link
          to="/scrapbook"
          className="el click-lead"
          aria-label="Click here to explore scrapbook"
          title="Click here to view our scrapbook!"
          onMouseEnter={prefetchScrapbook}
          onTouchStart={prefetchScrapbook}
        >
          <div className="lead-inner">
            <span className="lead-text">click here! ✨</span>
            {/* Arrow curving up toward the polaroid center */}
            <svg
              className="lead-arrow"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 34 C 10 20, 22 10, 38 6 M 38 6 L 28 10 M 38 6 L 36 18"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>

        <div className="el small-note">
          <img src={smallNote} alt="Same girl... Bigger dreams" draggable={false} />
        </div>

        <div className="el butterfly">
          <img src={butterfly} alt="Butterfly sticker" draggable={false} />
        </div>

        <div className="el grateful-text">
          <img src={gratefulText} alt="Grateful for you, always" draggable={false} />
        </div>

        <div className="el flower">
          <img src={flower} alt="Flower sticker" draggable={false} />
        </div>

        <div className="el yellow-heart">
          <img src={yellowHeart} alt="Yellow heart" draggable={false} />
        </div>

        <div className="el blue-star">
          <img src={blueStar} alt="Blue star sticker" draggable={false} />
        </div>

        <div className="el smiley">
          <img src={smiley} alt="Smiley sticker" draggable={false} />
        </div>

      </div>
    </div>
  );
}

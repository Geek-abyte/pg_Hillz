import { Link, useLocation } from "react-router-dom";

// Asset imports
import cameraIcon from "../assets/main_page_assets/11_camera_icon.png";
import topHeart from "../assets/main_page_assets/10_top_heart.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Photos", path: "/photos" },
  { label: "Messages", path: "/messages" },
  { label: "Scrapbook", path: "/scrapbook" },
];

const routePrefetchers: Record<string, () => void> = {
  "/": () => { import("../pages/HomePage"); },
  "/photos": () => { import("../pages/PhotosPage"); },
  "/messages": () => { import("../pages/MessagesPage"); },
  "/scrapbook": () => { import("../pages/ScrapbookPage"); },
};

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <img src={cameraIcon} alt="Camera" className="camera-icon" />
      <ul className="nav-links">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path === "/scrapbook" && location.pathname === "/about");

          const prefetch = routePrefetchers[item.path];

          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={isActive ? "active" : ""}
                onMouseEnter={prefetch}
                onTouchStart={prefetch}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <img src={topHeart} alt="Heart" className="nav-heart" />
    </nav>
  );
}

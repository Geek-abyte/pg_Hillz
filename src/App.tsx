import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// Lazy-load page routes to keep initial bundle ultra fast and slim
const HomePage = lazy(() => import("./pages/HomePage"));
const PhotosPage = lazy(() => import("./pages/PhotosPage"));
const MessagesPage = lazy(() => import("./pages/MessagesPage"));
const ScrapbookPage = lazy(() => import("./pages/ScrapbookPage"));

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d1b11",
        color: "#fef08a",
        fontFamily: "'Caveat', cursive",
        fontSize: "24px",
      }}
    >
      <span>Loading Hillary's memory scrapbook... ✨</span>
    </div>
  );
}

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const locked = pathname === "/" || pathname === "/scrapbook" || pathname === "/about";
    document.body.style.overflow = locked ? "hidden" : "auto";
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/scrapbook" element={<ScrapbookPage />} />
          <Route path="/about" element={<ScrapbookPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import MessagesPage from "./pages/MessagesPage";
import ScrapbookPage from "./pages/ScrapbookPage";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/scrapbook" element={<ScrapbookPage />} />
        <Route path="/about" element={<ScrapbookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

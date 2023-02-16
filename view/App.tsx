import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Notice from "./common/Notice";
import ScrollTopButton from "./common/ScrollTopButton";
import Balanceplay from "./pages/Balanceplay";
import Bodyscanner from "./pages/Bodyscanner";
import Business from "./pages/Business";
import Drcare from "./pages/Drcare";
import Home from "./pages/Home";
import History from "./pages/History";
import Security from "./pages/Security";
import Way from "./pages/Way";
import Info from "./pages/Info";
import Contact from "./pages/Contact";

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const pageChange = (): void => {
    let payload = location.pathname?.replace(/\//g, "");
    dispatch({ type: "pageName", payload: payload || null });
    window.scrollTo({ top: 0 });
  };

  const windowScrollListener = (): void => {
    const y = window.scrollY;
    dispatch({ type: "scroll", payload: y });
  };

  const init = () => {
    windowScrollListener();
    window.addEventListener("scroll", windowScrollListener);
    return () => {
      window.removeEventListener("scroll", windowScrollListener);
    };
  };

  useEffect(init, []);
  useEffect(pageChange, [location]);

  return (
    <>
      <Header />
      <Notice />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/history" element={<History />} />
        <Route path="/business" element={<Business />} />
        <Route path="/way" element={<Way />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/drcare" element={<Drcare />} />
        <Route path="/balanceplay" element={<Balanceplay />} />
        <Route path="/bodyscanner" element={<Bodyscanner />} />
        <Route path="/security" element={<Security />} />
      </Routes>

      <ScrollTopButton />
      <Footer />
    </>
  );
}

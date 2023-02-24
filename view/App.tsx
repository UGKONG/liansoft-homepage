import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
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
import Loading from "./common/Loading";
import Feagle from "./pages/Feagle";
import Luna from "./pages/Luna";
import Smartpole from "./pages/Smartpole";
import Bpcp from "./pages/Bpcp";

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoad, setIsLoad] = useState<boolean>(true);

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
    setTimeout(() => setIsLoad(false), 500);
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
        <Route path="/device-management" element={<Feagle />} />
        <Route path="/device-control" element={<Luna />} />
        <Route path="/smartpole" element={<Smartpole />} />
        <Route path="/bpcp" element={<Bpcp />} />
        <Route path="/security" element={<Security />} />
      </Routes>

      <ScrollTopButton />
      <Footer />

      {isLoad && <Loading />}
    </>
  );
}

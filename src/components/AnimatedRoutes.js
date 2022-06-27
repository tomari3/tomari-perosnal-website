import { useLocation, Routes, Route, Outlet } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import ScrollToTop from "../hooks/ScrollToTop";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Resume } from "./Resume/Resume";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

function LayoutsWithNavbar({ toggle }) {
  return (
    <>
      <Header toggle={toggle} />

      <Outlet />

      <Footer />
    </>
  );
}

export const AnimatedRoutes = ({ toggle }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LayoutsWithNavbar toggle={toggle} />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

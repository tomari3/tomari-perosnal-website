import React from "react"; // import { BrowserRouter, Routes, Route } from "react-router-dom";

import Global from "./styles/Global";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ColoredWrapper } from "./components/Home/ColoredWrapper";

function App() {
  return (
    <>
      <Global />
      <ColoredWrapper>
        <Header />
        <Home />
        <Footer />
      </ColoredWrapper>
    </>
  );
}

export default App;

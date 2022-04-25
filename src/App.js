import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Global from "./styles/Global";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Wrapper } from "./styles/Wrapper";

function App() {
  return (
    <>
      <Global />
      <Wrapper primary color>
        <Header />
        <Home />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;

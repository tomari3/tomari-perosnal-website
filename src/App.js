import React, { useState } from "react"; // import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Global from "./styles/Global";
import { lightTheme, darkTheme } from "./styles/Theme";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ColoredWrapper } from "./components/Home/ColoredWrapper";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <Global />
        <ColoredWrapper>
          <Header toggle={toggleTheme} />
          <Home />
          <Footer />
        </ColoredWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;

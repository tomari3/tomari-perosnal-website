import React, { useState } from "react";

import { Sun } from "./Sun";
import { Moon } from "./Moon";
import { ThemeButtonStyled } from "../../styles/ThemeButtonStyled";

export const ThemeButton = ({ toggle }) => {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeButtonStyled
      onClick={() => {
        toggle();
        setTheme(!theme);
      }}
    >
      {theme ? <Moon /> : <Sun />}
    </ThemeButtonStyled>
  );
};

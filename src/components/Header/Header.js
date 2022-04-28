import React, { useState } from "react";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { HeaderWrapper } from "../../styles/HeaderWrapper";
import { MainLogo } from "../../styles/MainLogo";
import { NavBar } from "./NavBar";
import { PopUpMenu } from "./PopUpMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <HeaderWrapper>
      <MainLogo>tom ari</MainLogo>

      {width < 590 ? <PopUpMenu open={open} setOpen={setOpen} /> : <NavBar />}
    </HeaderWrapper>
  );
};

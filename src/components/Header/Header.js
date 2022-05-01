import React, { useState } from "react";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import { HeaderWrapper } from "../../styles/HeaderWrapper";
import { MainLogo } from "../../styles/MainLogo";
import { NavBar } from "./NavBar";
import { PopUpMenu } from "./PopUpMenu";

export const Header = ({ toggle }) => {
  const [open, setOpen] = useState(false);

  const { width } = useWindowDimensions();

  return (
    <HeaderWrapper>
      <MainLogo>ta</MainLogo>
      {width < 590 ? (
        <PopUpMenu toggle={toggle} open={open} setOpen={setOpen} />
      ) : (
        <NavBar toggle={toggle} />
      )}
    </HeaderWrapper>
  );
};

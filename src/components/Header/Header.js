import React, { useState } from "react";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useScroll } from "../../hooks/useScroll";

import { HeaderWrapper } from "../../styles/HeaderWrapper";
import { MainLogo } from "../../styles/MainLogo";
import { NavBar } from "./NavBar";
import { PopUpMenu } from "./PopUpMenu";
import { TextLink } from "../../styles/TextLink";

export const Header = ({ toggle }) => {
  const [open, setOpen] = useState(false);

  const { width } = useWindowDimensions();
  const scrollHeight = useScroll();

  return (
    <HeaderWrapper>
      <TextLink to="/">
        <MainLogo rotate={scrollHeight / 3}>TA</MainLogo>
      </TextLink>
      {width < 900 || scrollHeight > 1600 ? (
        <PopUpMenu toggle={toggle} open={open} setOpen={setOpen} />
      ) : (
        <NavBar toggle={toggle} />
      )}
    </HeaderWrapper>
  );
};

import React, { useState } from "react";

import { HeaderWrapper } from "../../styles/HeaderWrapper";
import { MainLogo } from "../../styles/MainLogo";
import { PopUpMenu } from "./PopUpMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MainLogo>tom ari</MainLogo>

      <PopUpMenu open={open} setOpen={setOpen} />
    </HeaderWrapper>
  );
};

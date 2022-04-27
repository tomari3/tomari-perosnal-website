import React, { useState } from "react";
import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import { HomeTextBlock } from "../../styles/HomeTextBlock";

const Line = {
  // backgroundColor: "black",
  position: "inherit",
};

export const HomeIntro = () => {
  return (
    <HomeIntroWrapper>
      <HomeTextBlock whileHover={Line}>self taught</HomeTextBlock>
      <HomeTextBlock whileHover={Line}>developer</HomeTextBlock>
      <HomeTextBlock whileHover={Line}>life long</HomeTextBlock>
      <HomeTextBlock whileHover={Line}>designer</HomeTextBlock>
    </HomeIntroWrapper>
  );
};

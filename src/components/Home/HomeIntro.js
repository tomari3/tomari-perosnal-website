import React, { useState } from "react";

import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "../../styles/AnimatedText";

const placeholderText = [
  { text: "self taught" },
  {
    text: "developer",
  },
  { text: "life long" },
  {
    text: "designer",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const HomeIntro = () => {
  return (
    <HomeIntroWrapper initial="hidden" animate={"visible"} variants={container}>
      {placeholderText.map((item, index) => {
        return <AnimatedCharacters {...item} key={index} />;
      })}
    </HomeIntroWrapper>
  );
};

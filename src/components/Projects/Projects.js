import React from "react";

import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "../Home/AnimatedText";

const placeholderText = [{ text: "Projects" }];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};
export const Projects = () => {
  return (
    <HomeIntroWrapper
      exit={"exit"}
      initial="hidden"
      animate={"visible"}
      variants={container}
    >
      {placeholderText.map((item, index) => {
        return <AnimatedCharacters {...item} key={index} />;
      })}
    </HomeIntroWrapper>
  );
};

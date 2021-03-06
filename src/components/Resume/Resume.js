import React from "react";

import resumeFile from "../../assets/Tom_Ari_Resume.pdf";

import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "../Home/AnimatedText";

const placeholderText = [{ text: "Resume" }];
const container = {
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
  exit: {
    transition: {
      duration: 0.1,
      staggerChildren: 0.01,
    },
  },
};

export const Resume = () => {
  return (
    <HomeIntroWrapper
      initial="hidden"
      animate={"visible"}
      exit={"exit"}
      variants={container}
    >
      <a href={resumeFile} download>
        <div className="text">
          <div className="main-text">
            {placeholderText.map((item, index) => {
              return <AnimatedCharacters {...item} key={index} />;
            })}
          </div>
        </div>
      </a>
    </HomeIntroWrapper>
  );
};

import React from "react";

import { ContactOptions } from "./ContactOptions";
import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "../Home/AnimatedText";

const placeholderText = [{ text: "Contact Me!" }];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};
export const Contact = () => {
  return (
    <HomeIntroWrapper initial="hidden" animate={"visible"} variants={container}>
      {placeholderText.map((item, index) => {
        return <AnimatedCharacters {...item} key={index} />;
      })}
      <ContactOptions></ContactOptions>
    </HomeIntroWrapper>
  );
};

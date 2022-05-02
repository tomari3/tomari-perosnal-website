import React from "react";

import { motion } from "framer-motion";

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
      <div className="text">
        <div className="main-text">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
          className="paragraph text-justify"
        >
          <ContactOptions />
        </motion.div>
      </div>
    </HomeIntroWrapper>
  );
};

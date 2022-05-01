import React, { Suspense } from "react";

import { motion } from "framer-motion";

import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "./AnimatedText";

const placeholderText = [
  { text: "Hello, I'm Tom." },
  {
    text: "A Web Developer.",
  },
];

const paragraph = {
  text: "self-taught full stack developer with passion and love for beautiful, pleasing front end and efficient, powerful back end.",
};

const container = {
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const HomeIntro = () => {
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
          transition={{ duration: 1, ease: "anticipate", delay: 1 }}
          className="paragraph"
        >
          <p>{paragraph.text}</p>
        </motion.div>
      </div>
      <div className="piece">
        <Suspense fallback={null}>
          <h1>ThreeJS PLACEHOLDER</h1>
        </Suspense>
      </div>
    </HomeIntroWrapper>
  );
};

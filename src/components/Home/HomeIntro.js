import React, { Suspense } from "react";

import { motion } from "framer-motion";

import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "./AnimatedText";

const placeholderText = [
  { text: "Hello, I'm Tom." },
  {
    text: "Software Developer.",
  },
];

const paragraph = {
  text: "I am a self-taught full stack developer with passion and love for beautiful, pleasing front end experience and efficient, powerful back end infrastructure. I am a self learner, ambitious, passionate and I am looking for my first role in the professional world",
};

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
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

export const HomeIntro = () => {
  return (
    <HomeIntroWrapper
      initial="hidden"
      animate={"visible"}
      exit={"exit"}
      variants={container}
    >
      <div className="text">
        <div className="main-text">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className="paragraph"
        >
          <p>{paragraph.text}</p>
        </motion.div>
      </div>
      <div className="piece">
        <Suspense fallback={null}></Suspense>
      </div>
    </HomeIntroWrapper>
  );
};

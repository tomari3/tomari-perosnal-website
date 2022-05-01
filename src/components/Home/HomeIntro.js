import React, { Suspense } from "react";

import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "./AnimatedText";

const placeholderText = [
  { text: "hello, im tom." },
  {
    text: "web developer.",
  },
];

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
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
      <div className="piece">
        <Suspense fallback={null}>
          <h1>ThreeJS PLACEHOLDER</h1>
        </Suspense>
      </div>
    </HomeIntroWrapper>
  );
};

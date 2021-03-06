import React from "react";

import { motion } from "framer-motion";
import { HomeTextBlock } from "../../styles/HomeTextBlock";

const Wrapper = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

const AnimatedCharacters = (props) => {
  const item = {
    hidden: {
      y: "100%",
    },
    exit: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };

  const splitWords = props.text.split(" ");

  const words = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <HomeTextBlock>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <motion.span
                  className="letter-wrapper"
                  initial={{ overflow: "hidden", display: "inline-block" }}
                  key={index}
                >
                  <motion.span className="letter" variants={item}>
                    {element}
                  </motion.span>
                </motion.span>
              );
            })}
          </Wrapper>
        );
      })}
    </HomeTextBlock>
  );
};

export default AnimatedCharacters;

import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// import px2vw from "../utils/px2vw";

const wiggle = keyframes`
    0% {
        transform: perspective(10px);
    }
    50% {
      transform: perspective(10px);


    }
    100% {
      transform: perspective(10px);

    }
`;

export const HomeTextBlock = styled(motion.h1)`
  font-size: 12vmin;
  text-transform: uppercase;
  flex: 1;
  .word-wrapper {
    display: inline-block;
  }

  .letter {
    cursor: default;
    display: inline-block;
  }
`;

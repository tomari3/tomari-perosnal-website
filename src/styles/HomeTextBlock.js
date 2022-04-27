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
  display: grid;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: max-content;

  &:nth-child(2) {
    margin-bottom: 1ch;
    align-self: flex-end;
  }

  &:nth-child(4) {
    align-self: flex-end;
  }
`;

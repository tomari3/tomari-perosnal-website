import styled from "styled-components";
import { motion } from "framer-motion";

// import px2vw from "../utils/px2vw";

export const HomeTextBlock = styled(motion.h1)`
  font-size: 8vmin;
  flex: 1;
  font-family: "Hahmlet", serif;
  color: var(--primary-text);
  height: min-content;
  .word-wrapper {
    display: inline-block;
  }

  .letter {
    font-weight: bold;
    transition: var(--default-transition);
    color: var(--primary-text);
    cursor: default;
    display: inline-block;
  }
`;

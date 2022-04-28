import styled from "styled-components";
import { motion } from "framer-motion";

// import px2vw from "../utils/px2vw";

export const HomeTextBlock = styled(motion.h1)`
  font-size: 12vmin;
  text-transform: uppercase;
  flex: 1;
  .word-wrapper {
    display: inline-block;
  }

  .letter {
    transition: var(--default-transition);
    color: var(--primary-bg);
    cursor: default;
    display: inline-block;
  }
`;

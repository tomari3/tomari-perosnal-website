import styled from "styled-components";
import { motion } from "framer-motion";

export const ThemeButtonStyled = styled(motion.div)`
  cursor: pointer;

  .sun-and-moon {
    & > :is(.moon, .sun, .sun-beams) {
      transform-origin: center center;
    }
  }
`;

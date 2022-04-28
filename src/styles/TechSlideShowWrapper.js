import styled from "styled-components";
import { motion } from "framer-motion";

export const TechSlideShowWrapper = styled(motion.section)`
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200vw;
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      height: 80%;
    }

    svg {
      height: 3rem;
      color: var(--primary-text);
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const TechSlideShowWrapper = styled(motion.section)`
  height: 130vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10vw;
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      height: 1rem;
      aspect-ratio: 1;
      /* background-color: black; */
    }

    svg {
      color: var(--primary-text);
      cursor: pointer;
    }
  }
`;

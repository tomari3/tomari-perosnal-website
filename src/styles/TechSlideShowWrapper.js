import styled from "styled-components";
import { motion } from "framer-motion";

export const TechSlideShowWrapper = styled(motion.section)`
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20%;
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      height: 80%;
    }

    svg {
      height: 8rem;
      color: var(--primary-text);
      cursor: pointer;
    }
  }
`;

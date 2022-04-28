import styled from "styled-components";
import { motion } from "framer-motion";

export const TechSlideShowWrapper = styled(motion.section)`
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .icons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vh;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    .icon {
      aspect-ratio: 1;
    }

    svg {
      color: var(--primary-text);
      cursor: pointer;
    }
  }
`;

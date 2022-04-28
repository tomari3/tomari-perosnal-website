import styled from "styled-components";
import { motion } from "framer-motion";

export const TechSlideShowWrapper = styled(motion.section)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5vh 10vw;

  .target {
    font-size: 0px;
    aspect-ratio: 1;
    width: 1rem;
    border-radius: 100%;
    background-color: white;
    outline: 1rem solid red;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: calc(-250%);
      top: calc(-250%);
      border-radius: 100%;
      width: 4rem;
      aspect-ratio: 1;
      border: 1rem solid blue;
    }
    &::after {
      position: absolute;
      content: "GAME!";
      top: -4rem;
      left: -1rem;
    }
  }

  .icons-grid {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .icon-wrapper {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      aspect-ratio: 1;
      z-index: 1;
    }

    svg {
      color: var(--primary-text);
      cursor: pointer;
    }
  }
`;

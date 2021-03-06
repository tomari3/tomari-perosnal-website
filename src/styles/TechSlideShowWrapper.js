import styled from "styled-components";
import { motion } from "framer-motion";

export const TechSlideShowWrapper = styled(motion.section)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5vh 10vw;
  position: relative;

  .target {
    color: var(--primary-text);
    background-color: white;
    font-size: 0px;
    aspect-ratio: 1;
    width: 1rem;
    border-radius: 100%;
    background-color: white;
    outline: 1rem solid red;
    position: relative;
    z-index: 1;
    cursor: pointer;

    &::before {
      background-color: white;

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

    span:first-child {
      color: var(--primary-text);
      text-transform: uppercase;
      position: absolute;
      bottom: 5rem;
      left: -2rem;
    }
    span:last-child {
      color: var(--primary-text);
      opacity: 0.6;
      position: absolute;
      top: -4rem;
      width: 8rem;
      left: -3rem;
    }
  }

  .arrow-wrapper {
    .arrow {
      position: absolute;
      width: 0.2rem;
      border-radius: 10px;
      top: 70%;
      bottom: 20vh;
      height: 6vh;
      background-color: red;
    }

    .arrow-left {
      position: absolute;
      width: 0.2rem;
      border-radius: 10px;
      top: 70%;
      bottom: 20vh;
      height: 3vh;
      background-color: red;
      transform-origin: top right;
      transform: rotate(40deg);
    }

    .arrow-right {
      position: absolute;
      width: 0.2rem;
      border-radius: 10px;
      top: 70%;
      bottom: 20vh;
      height: 3vh;
      transform-origin: top left;
      background-color: red;
      transform: rotate(-40deg);
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

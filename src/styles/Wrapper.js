import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";

const dotAnimation = keyframes`

  0% {
    transform: translate(0,0) scale(1)
  }
  33% {
    transform: translate(calc(var(--size)/1.2),0) scale(1.6)
  }
  66% {
    transform: translate(0, calc(var(--size)/1.2))  scale(.8)
  }
  100% {
    transform: translate(0,0) scale(1)
  }
`;

export const Wrapper = styled(motion.section)`
  background-size: 100%;
  ::before,
  ::after {
    content: "";
    display: table;
  }
  ::after {
    clear: both;
  }

  .animated-wrapper {
    overflow: hidden;
    position: absolute;
    left: 0px;
    top: -100px;
    z-index: -1;
    width: 100%;
    height: 150vh;
    isolation: isolate;
    background-color: none;
  }

  .dot {
    display: none;
    position: absolute;
    left: calc(var(--size) / 3 * -1);
    top: calc(var(--size) / 3 * -1);
    width: var(--size);
    height: var(--size);
    mix-blend-mode: screen;
    border-radius: var(--size);
    filter: blur(calc(var(--size) / 6));
    will-change: transform;
    display: block;
    animation: ${dotAnimation} cubic-bezier(0.65, 0, 0.35, 1) 20s infinite;

    :nth-child(1) {
      background: var(--gradient-blue1);
    }
    :nth-child(2) {
      background: var(--gradient-pink1);
      animation-delay: -7s;
    }
    :nth-child(3) {
      animation-delay: -14s;
      background: var(--gradient-blue2);
    }
  }
`;

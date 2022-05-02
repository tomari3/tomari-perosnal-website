import styled from "styled-components";
import { motion } from "framer-motion";

export const ExternalLink = styled(motion.a)`
  color: var(--primary-text);
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  cursor: pointer;
  transition: var(--default-transition), width 0.5s ease, transform 0.5s ease;
  text-decoration: none;
  position: relative;

  &:hover {
    transform: ${(props) =>
      props.horizontal ? "translateY(4px)" : "translateX(10px)"};
  }

  &::after {
    transition: var(--default-transition), width 0.5s ease;
    --width: 0;
    z-index: -1;
    background-color: var(--primary-bg);
    position: absolute;
    content: "";
    height: 1rem;
    bottom: 0;
    left: 0;
    width: var(--width);
  }

  &:hover::after {
    --width: calc(100%);
  }
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const HistoryLink = styled(motion.span)`
  color: var(--primary-text);
  font-weight: ${(props) => (props.$bold ? "bold" : "400")};
  font-size: 1rem;
  cursor: pointer;
  transition: var(--default-transition), width 0.5s ease;
  padding: 0 1ch;
  text-decoration: none;
  position: relative;
  &:hover {
    transform: ${(props) =>
      props.horizontal ? "translateY(4px)" : "translateX(10px)"};
  }

  &::after {
    transition: var(--default-transition), all 0.5s ease;
    --width: 0;
    z-index: -1;
    background-color: var(--primary-bg);
    position: absolute;
    content: "";
    height: 4px;
    bottom: 0;
    left: 1ch;
    width: var(--width);
  }

  &:hover::after {
    --width: calc(100% - 2ch);
  }
`;

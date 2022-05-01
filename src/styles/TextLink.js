import styled from "styled-components";
import { motion } from "framer-motion";

export const TextLink = styled(motion.a)`
  color: var(--primary-text);
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: 1rem;
  cursor: pointer;
  transition: var(--default-transition);
`;

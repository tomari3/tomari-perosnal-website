import styled from "styled-components";
import { motion } from "framer-motion";
import px2vw from "../utils/px2vw";

// import { Link } from "react-router-dom";

export const TextLink = styled(motion.a)`
  color: var(--primary-text);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--default-transition);
`;

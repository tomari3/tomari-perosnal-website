import styled from "styled-components";

import { motion } from "framer-motion";

export const Title = styled(motion.h1)`
  font-size: ${(props) => (props.sub ? "1.5rem" : "2rem")};
  width: ${(props) => (props.primary ? "100vw" : "auto")};
  color: var(--primary-text);
  font-weight: 200;
  text-align: center;
  transition: var(--default-transition);
`;

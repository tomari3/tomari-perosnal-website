import styled from "styled-components";

import { motion } from "framer-motion";

export const Title = styled(motion.h1)`
  font-size: ${(props) => (props.sub ? "1rem" : "2rem")};
  width: ${(props) => (props.primary ? "100vw" : "auto")};

  font-weight: 200;
  text-align: center;
`;

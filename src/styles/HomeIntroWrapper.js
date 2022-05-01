import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeIntroWrapper = styled(motion.section)`
  padding: 5vmax 10vw;
  height: 130vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: var(--default-transition);

  .piece {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

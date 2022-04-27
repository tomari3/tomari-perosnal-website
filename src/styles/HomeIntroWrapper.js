import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeIntroWrapper = styled(motion.section)`
  padding: 3vmax;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .piece {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

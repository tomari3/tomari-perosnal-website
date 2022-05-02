import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeIntroWrapper = styled(motion.section)`
  padding: 5vmax 10vw;
  height: 130vh;
  display: flex;
  flex-wrap: wrap;
  color: var(--primary-text);
  transition: var(--default-transition);

  .text {
    display: flex;
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    flex-wrap: wrap;
    gap: 5vh;
    /* max-width: 800px; */
    height: min-content;
  }

  .main-text {
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
  }

  .paragraph {
    max-width: 800px;
    line-height: 2.5ch;
    padding: 0 2vw;
  }

  .text-justify {
    text-align: justify;
  }
  .piece {
    min-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

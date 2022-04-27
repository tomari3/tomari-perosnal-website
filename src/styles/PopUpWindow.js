import styled from "styled-components";
import { motion } from "framer-motion";
import px2vw from "../utils/px2vw";

export const PopUpWindow = styled(motion.article)`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-bg);
  position: absolute;
  top: calc(1rem / 2);
  right: calc(${px2vw(108)} - 1rem / 2);
  z-index: 9;
  gap: 1rem;
  border-radius: 10px;
  /* border: 1px solid black; */
`;

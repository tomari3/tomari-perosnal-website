import React from "react";
import { motion } from "framer-motion";
import { Wrapper } from "../../styles/Wrapper";

export const ColoredWrapper = () => {
  return (
    <Wrapper initial="hidden" animate="show">
      <div className="animated-wrapper">
        <motion.div className="dot light-blue"></motion.div>
        <motion.div className="dot blue"></motion.div>
        <motion.div className="dot pink"></motion.div>
      </div>
    </Wrapper>
  );
};

import React from "react";
import { motion } from "framer-motion";

import { FooterWrapper } from "../../styles/FooterWrapper";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="animated-wrapper">
        <motion.div className="dot light-blue"></motion.div>
        <motion.div className="dot blue"></motion.div>
        <motion.div className="dot pink"></motion.div>
        <motion.div className="dot white"></motion.div>
      </div>
      <h1>Footer</h1>
    </FooterWrapper>
  );
};

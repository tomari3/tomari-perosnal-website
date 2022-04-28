import React from "react";

import { motion } from "framer-motion";

import { TextLink } from "../../styles/TextLink";
import { ThemeButton } from "../../styles/ThemeButton";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
};

export const NavBar = ({ toggle }) => {
  return (
    <motion.nav style={style}>
      <ThemeButton onClick={toggle}></ThemeButton>
      <TextLink whileHover={{ y: 2 }}>about</TextLink>
      <TextLink whileHover={{ y: 2 }}>projects</TextLink>
      <TextLink whileHover={{ y: 2 }}>contact</TextLink>
      <TextLink whileHover={{ y: 2 }}>resume</TextLink>
    </motion.nav>
  );
};

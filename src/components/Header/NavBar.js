import React from "react";

import { motion } from "framer-motion";

import { TextLink } from "../../styles/TextLink";
import { ThemeButton } from "./ThemeButton";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
};

export const NavBar = ({ toggle }) => {
  return (
    <motion.nav style={style}>
      <ThemeButton toggle={toggle}></ThemeButton>

      <TextLink to="about " whileHover={{ y: 2 }}>
        about
      </TextLink>
      <TextLink to="projects" whileHover={{ y: 2 }}>
        projects
      </TextLink>
      <TextLink to="contact" whileHover={{ y: 2 }}>
        contact
      </TextLink>
      <TextLink to="resume" whileHover={{ y: 2 }}>
        resume
      </TextLink>
    </motion.nav>
  );
};

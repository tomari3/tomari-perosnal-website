import React from "react";

import { motion } from "framer-motion";

import { TextLink } from "../../styles/TextLink";
import { ThemeButton } from "./ThemeButton";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const NavBar = ({ toggle }) => {
  return (
    <motion.nav style={style}>
      <ThemeButton toggle={toggle}></ThemeButton>

      <TextLink to="about " $horizontal>
        about
      </TextLink>
      <TextLink to="projects" $horizontal>
        projects
      </TextLink>
      <TextLink to="contact" $horizontal>
        contact
      </TextLink>
      <TextLink to="resume" $horizontal>
        resume
      </TextLink>
    </motion.nav>
  );
};

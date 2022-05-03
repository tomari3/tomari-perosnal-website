import React from "react";

import { motion } from "framer-motion";

import { HomeTextBlock } from "../../styles/HomeTextBlock";
import { FooterWrapper } from "../../styles/FooterWrapper";
import { ArrowGrid } from "./ArrowGrid";
import { ExternalLink } from "../../styles/ExternalLink";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="animated-wrapper">
        <motion.div className="dot light-blue"></motion.div>
        <motion.div className="dot blue"></motion.div>
        <motion.div className="dot pink"></motion.div>
        <motion.div className="dot white"></motion.div>
      </div>

      <ArrowGrid />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <HomeTextBlock>
          Tom <br /> Ari
        </HomeTextBlock>
        <div style={{ display: "flex", gap: "2ch" }}>
          <ExternalLink href="https://github.com/tomari3">github</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/tom-ari-72034122a">
            linkedin
          </ExternalLink>
        </div>
      </div>
    </FooterWrapper>
  );
};

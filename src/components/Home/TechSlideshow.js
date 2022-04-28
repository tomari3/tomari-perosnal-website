import React from "react";
import { motion, useViewportScroll } from "framer-motion";

import { TechSlideShowWrapper } from "../../styles/TechSlideShowWrapper";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const TechSlideshow = ({ children }) => {
  return (
    <TechSlideShowWrapper
      initial="hidden"
      animate={"visible"}
      variants={container}
      className="tech-slideshow"
    >
      {React.Children.map(children, (child, index) => {
        return (
          <>
            <motion.span animate={{}} className="icon-wrapper" key={index}>
              <motion.span className="icon">{child}</motion.span>
            </motion.span>
          </>
        );
      })}
    </TechSlideShowWrapper>
  );
};

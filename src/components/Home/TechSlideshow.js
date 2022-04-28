import React from "react";
import { motion } from "framer-motion";

import { TechSlideShowWrapper } from "../../styles/TechSlideShowWrapper";

export const TechSlideshow = ({ children }) => {
  return (
    <TechSlideShowWrapper className="tech-slideshow">
      {React.Children.map(children, (child, index) => {
        return (
          <>
            <motion.span className="icon-wrapper" key={index}>
              <motion.span className="icon">{child}</motion.span>
            </motion.span>
          </>
        );
      })}
    </TechSlideShowWrapper>
  );
};

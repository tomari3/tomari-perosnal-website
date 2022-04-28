import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { useOffsetTop } from "../../hooks/useOffsetTop";
import { getWindowDimensions } from "../../utils/getWindowDimensions";

import { TechSlideShowWrapper } from "../../styles/TechSlideShowWrapper";

export const TechSlideshow = ({ children }) => {
  const iconRef = useRef();

  const { height, width } = getWindowDimensions();
  const offsetTop = useOffsetTop(iconRef);

  const size = {
    display: "flex",
    gap: "10vw",
    x: 10,
  };

  return (
    <TechSlideShowWrapper>
      <motion.div ref={iconRef} style={size}>
        {React.Children.map(children, (child, index) => {
          return (
            <>
              <motion.span className="icon-wrapper" key={index}>
                <motion.span
                  transition={{ duration: 1 }}
                  initial={{ height: "0rem" }}
                  whileInView={{ height: "10rem" }}
                  viewport={{ once: false }}
                  className="icon"
                >
                  {child}
                </motion.span>
              </motion.span>
            </>
          );
        })}
      </motion.div>
    </TechSlideShowWrapper>
  );
};

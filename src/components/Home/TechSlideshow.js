import React, { useRef } from "react";
import { motion } from "framer-motion";

import { TechSlideShowWrapper } from "../../styles/TechSlideShowWrapper";

export const TechSlideshow = ({ children }) => {
  const constraintsRef = useRef();

  return (
    <TechSlideShowWrapper>
      <motion.div ref={constraintsRef} className="icons-grid">
        {React.Children.map(children, (child, index) => {
          return (
            <>
              <motion.span className="icon-wrapper" key={index}>
                <motion.span
                  drag
                  whileDrag={{ scale: 1.2 }}
                  dragConstraints={constraintsRef}
                  transition={{
                    height: {
                      duration: 1,
                    },
                  }}
                  initial={{ height: "0rem" }}
                  whileInView={{ height: "6rem" }}
                  whileHover={{ scale: 1.1 }}
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

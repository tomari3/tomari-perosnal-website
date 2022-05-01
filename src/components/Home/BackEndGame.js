import React, { useRef } from "react";
import { motion } from "framer-motion";

import { TechSlideShowWrapper } from "../../styles/TechSlideShowWrapper";

export const BackEndGame = ({ children }) => {
  const constraintsRef = useRef();

  return (
    <TechSlideShowWrapper ref={constraintsRef}>
      <motion.div className="icons-grid">
        {React.Children.map(children, (child, index) => {
          return (
            <>
              <motion.span className="icon-wrapper" key={index}>
                <motion.span
                  drag
                  whileDrag={{
                    scale: 0.5,
                    transition: { duration: 1.5, type: "spring" },
                  }}
                  dragConstraints={constraintsRef}
                  dragTransition={{
                    min: 0,
                    max: 100,
                    bounceStiffness: 100,
                    power: 1,
                  }}
                  transition={{
                    height: {
                      duration: 1,
                    },
                  }}
                  initial={{ height: "0rem" }}
                  whileInView={{ height: "4rem" }}
                  whileHover={{ scale: 1.3 }}
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

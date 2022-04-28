import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { TechSlideShowWrapper } from "../../styles/TechSlideShowWrapper";

export const TechSlideshow = ({ children }) => {
  const constraintsRef = useRef();
  const targetRef = useRef();
  const [game, setGame] = useState(false);

  const target = {
    on: {
      fontSize: "inherit",
      width: "1rem",
      outline: "1rem solid red",
      position: "relative",
      display: "block",
      margin: "5rem",
      transition: {
        type: "spring",
        bounce: 0.5,
      },
    },
    off: {
      width: "0rem",
      outline: "0rem solid red",
      margin: "0rem",
      position: "static",
      transition: {
        type: "spring",
        bounce: 0.5,
      },
    },
  };
  const gameLine = {
    on: {
      borderBottom: "5px solid red",
      transition: {
        type: "spring",
        bounce: 0.5,
        delay: 0.3,
      },
    },
    off: {
      borderBottom: "0px solid red",
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <TechSlideShowWrapper>
      <motion.div
        ref={targetRef}
        onClick={() => {
          setGame(false);
        }}
        className="target"
        variants={target}
        animate={game ? "on" : "off"}
      />

      <motion.div
        ref={constraintsRef}
        className="icons-grid"
        variants={gameLine}
        animate={game ? "on" : "off"}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <>
              <motion.span className="icon-wrapper" key={index}>
                <motion.span
                  onMouseDown={() => {
                    setGame(true);
                  }}
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

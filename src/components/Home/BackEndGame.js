import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { TechSlideShowWrapper } from "../../styles/TechSlideShowWrapper";

export const BackEndGame = ({ children }) => {
  const constraintsRef = useRef();
  const targetRef = useRef();
  const [game, setGame] = useState(false);

  const gameTarget = {
    on: {
      fontSize: "inherit",
      color: "var(--primary-text)",
      width: "1rem",
      outline: "1rem solid red",
      position: "relative",
      display: "block",
      margin: "5rem",
      transition: {
        type: "spring",
        bounce: 0.8,
        mass: 2,
        stiffness: 200,
      },
    },
    off: {
      fontSize: "0px",
      color: "transparent",
      width: "0rem",
      outline: "0rem solid red",
      margin: "0rem",
      position: "static",
      transition: {
        type: "spring",
        bounce: 1.5,
        mass: 0.5,
      },
    },
  };
  const gameArrow = {
    long: {
      height: "6rem",
      transition: {
        type: "spring",
        bounce: 0.5,
        delay: 0.3,
      },
    },
    on: {
      height: "3rem",
      transition: {
        type: "spring",
        bounce: 0.5,
        delay: 0.3,
      },
    },
    off: {
      height: "0rem",
      borderBottom: "0px solid red",
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <TechSlideShowWrapper ref={constraintsRef}>
      <motion.div
        ref={targetRef}
        onClick={() => {
          setGame(false);
        }}
        className="target"
        variants={gameTarget}
        animate={game ? "on" : "off"}
      />
      <motion.div className="arrow-wrapper">
        <motion.span
          className="arrow"
          variants={gameArrow}
          animate={game ? "long" : "off"}
        />
        <motion.span
          className="arrow-left"
          variants={gameArrow}
          animate={game ? "on" : "off"}
        />
        <motion.span
          className="arrow-right"
          variants={gameArrow}
          animate={game ? "on" : "off"}
        />
      </motion.div>

      <motion.div className="icons-grid">
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

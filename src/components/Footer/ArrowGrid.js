import React, { useRef } from "react";
import { motion } from "framer-motion";

import { calculateDistance } from "../../utils/calculateMouseDistance";
import { useMousePosition } from "../../hooks/useMousePosition";

export const ArrowGrid = () => {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const gridRefs = useRef([]);

  const windowTopOffset =
    window.scrollY || window.pageYOffset || document.body.scrollTop || 0;

  const dotStyle = (i) => ({
    width:
      `${
        calculateDistance(gridRefs.current[i], mouseX, mouseY, windowTopOffset)
          .x / 500
      }rem` || 2,
    height:
      `${
        calculateDistance(gridRefs.current[i], mouseX, mouseY, windowTopOffset)
          .y / 500
      }rem` || 2,
    y:
      (calculateDistance(gridRefs.current[i], mouseX, mouseY, windowTopOffset)
        .x *
        calculateDistance(gridRefs.current[i], mouseX, mouseY, windowTopOffset)
          .y) /
      1000,
    rotate:
      (calculateDistance(gridRefs.current[i], mouseX, mouseY, windowTopOffset)
        .x *
        calculateDistance(gridRefs.current[i], mouseX, mouseY, windowTopOffset)
          .y) /
      2000,
  });

  const grid = new Array(400).fill("");
  const Grid = grid.map((dot, i) => {
    return (
      <motion.div
        ref={(ref) => gridRefs.current.push(ref)}
        key={i}
        className="grid-dot-wrapper"
        transition={{ type: "spring" }}
      >
        <motion.span style={dotStyle(i)} className="grid-dot"></motion.span>
      </motion.div>
    );
  });

  return <div className="grid-wrapper">{Grid}</div>;
};

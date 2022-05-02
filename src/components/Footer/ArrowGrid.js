import React, { useRef } from "react";
import { motion } from "framer-motion";

import { calculateDistance } from "../../utils/calculateMouseDistance";
import { useMousePosition } from "../../hooks/useMousePosition";
import { useScroll } from "../../hooks/useScroll";

export const ArrowGrid = () => {
  const containerRef = useRef(null);

  const { x: mouseX, y: mouseY } = useMousePosition();
  const gridRefs = useRef([]);
  const scrollPos = useScroll();

  const windowTopOffset = scrollPos;

  const show = () => {
    return containerRef.current.offsetParent.offsetTop - scrollPos < 1100;
  };

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
    y: `${
      (calculateDistance(gridRefs.current[i], mouseX, mouseY, windowTopOffset)
        .x *
        calculateDistance(gridRefs.current[i], mouseX, mouseY, windowTopOffset)
          .y) /
      1000
    }%`,
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

  return (
    <div ref={containerRef} className="grid-wrapper">
      {show() ? Grid : null}
    </div>
  );
};

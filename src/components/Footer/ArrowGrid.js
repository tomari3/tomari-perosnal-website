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

  const show = () => {
    if (containerRef.current === null) {
      return;
    }
    const offset = containerRef.current.offsetParent.offsetTop;
    return offset - scrollPos < 1100;
  };

  const dotStyle = (i) => {
    const { x, y } = calculateDistance(
      gridRefs.current[i],
      mouseX,
      mouseY,
      scrollPos
    );

    return {
      width: `${x / 500}rem` || 2,
      height: `${y / 500}rem` || 2,
    };
  };

  const grid = new Array(400).fill("");
  const Grid = grid.map((dot, i) => {
    return (
      <motion.div
        key={i}
        ref={(ref) =>
          gridRefs.current.length < grid.length
            ? gridRefs.current.push(ref)
            : null
        }
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

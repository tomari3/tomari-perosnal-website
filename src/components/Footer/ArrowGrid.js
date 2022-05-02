import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { calculateDistance } from "../../utils/calculateMouseDistance";
import { useMousePosition } from "../../hooks/useMousePosition";
import { useScroll } from "../../hooks/useScroll";

export const ArrowGrid = () => {
  const [visible, setVisible] = useState();
  const containerRef = useRef(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const gridRefs = useRef([]);
  const scrollPos = useScroll();

  useEffect(() => {
    show();
    if (!visible) {
      gridRefs.current = [];
    }
  });

  const show = () => {
    const offset = containerRef.current.offsetParent.offsetTop;
    offset - scrollPos < 1100 ? setVisible(true) : setVisible(false);
  };

  const dotStyle = (i) => {
    const { x, y } = calculateDistance(
      gridRefs.current[i],
      mouseX,
      mouseY,
      scrollPos
    );

    return {
      width: `${x / 500}rem`,
      height: `${y / 500}rem`,
      rotate: (x * y) / 720,
      y: (((y * y) / x) * i + x) / 500,
      x: ((y - i / 2) * x) / 500,
      borderRadius: 100,
      scale: (y / x) * 2,
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
      {visible ? Grid : null}
    </div>
  );
};

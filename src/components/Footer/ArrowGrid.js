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

    const [X, Y] = [Math.abs(x), Math.abs(y)]; // absolute values

    const [xIndex, yIndex] = [
      Math.floor(i / Math.sqrt(grid.length)),
      Math.floor(i % Math.sqrt(grid.length)),
    ];

    const xMiddle =
      xIndex < Math.sqrt(grid.length) / 2
        ? xIndex
        : xIndex - Math.sqrt(grid.length) / 2;

    const yMiddle =
      yIndex < Math.sqrt(grid.length) / 2
        ? yIndex
        : yIndex - Math.sqrt(grid.length) / 2;

    const [xSqrt, ySqrt] = [
      Math.sqrt(Math.abs(xMiddle)),
      Math.sqrt(Math.abs(yMiddle)),
    ];

    const xCircle =
      yMiddle < 0 ? (xSqrt < 0 ? -xSqrt : xSqrt) : xSqrt < 0 ? xSqrt : -xSqrt;
    const yCircle =
      xMiddle < 0 ? (ySqrt < 0 ? -ySqrt : ySqrt) : ySqrt < 0 ? ySqrt : -ySqrt;

    return {
      width: `${x * 0.01 + 0.1}rem`,
      height: `${y * 0.01 + 0.1}rem`,
      rotate: (x * y) / 360,
      y: Y * X * 0.00008 + xCircle * 5,
      x: (Y / X) * 0.0008 + yCircle * 5,
      borderRadius: 100 - Y * X * 0.0003,
      opacity: 0.8 - Y * X * 0.0000027 - i * 0.0001,
      scale: 1 - x * y * 0.000015,

      // width: ".5rem",
      // height: ".5rem",
      // x: xCircle * 10,
      // y: yCircle * 10,
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

import React, { useRef } from "react";
import { useDimensions } from "../../utils/use-dimentions";

import { TextLink } from "../../styles/TextLink";
import { PopUpButton } from "../../styles/PopUpButton";
import { PopUpWindow } from "../../styles/PopUpWindow";

const container = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at top right  )`,
    padding: " 5rem 0 1rem 1rem",
  }),
  closed: {
    clipPath: "circle(30px at top right )",
    padding: "0rem 0 0rem 1rem",
  },
};

const child = {
  open: {
    padding: "0rem 5rem 0rem 1rem",
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  closed: {
    opacity: 0,
  },
};

export const PopUpMenu = ({ open, setOpen }) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <PopUpButton open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </PopUpButton>

      <PopUpWindow
        initial={false}
        variants={container}
        animate={open ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <TextLink
          animate={open ? "open" : "closed"}
          whileHover={{ x: 10 }}
          variants={child}
        >
          about
        </TextLink>
        <TextLink
          animate={open ? "open" : "closed"}
          whileHover={{ x: 10 }}
          variants={child}
        >
          projects
        </TextLink>
        <TextLink
          animate={open ? "open" : "closed"}
          whileHover={{ x: 10 }}
          variants={child}
        >
          contact
        </TextLink>
        <TextLink
          animate={open ? "open" : "closed"}
          whileHover={{ x: 10 }}
          variants={child}
        >
          resume
        </TextLink>
      </PopUpWindow>
    </>
  );
};

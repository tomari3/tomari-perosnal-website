import React, { useRef } from "react";
import { useDimensions } from "../../hooks/useDimensions";

import { TextLink } from "../../styles/TextLink";
import { ThemeButton } from "./ThemeButton";
import { PopUpButton } from "../../styles/PopUpButton";
import { PopUpWindow } from "../../styles/PopUpWindow";

const container = {
  open: (height = 1000) => ({
    opacity: 1,
    clipPath: `circle(${height * 2 + 400}px at top right   )`,
    padding: " 5rem 0 1rem 1rem",
  }),
  closed: {
    opacity: 0,
    clipPath: "circle(30px at top right )",
    padding: "0rem 0 0rem 1rem",
    transition: {
      duration: 0.2,
    },
  },
};

export const PopUpMenu = ({ open, setOpen, toggle }) => {
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
        <TextLink to="/">home</TextLink>
        <TextLink to="contact">contact</TextLink>
        <TextLink to="resume">resume</TextLink>
        <ThemeButton toggle={toggle}></ThemeButton>
      </PopUpWindow>
    </>
  );
};

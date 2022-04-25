import React from "react";
import { TextLink } from "../../styles/TextLink";
import { PopUpButton } from "../../styles/PopUpButton";
import { PopUpWindow } from "../../styles/PopUpWindow";

export const PopUpMenu = ({ open, setOpen }) => {
  return (
    <>
      <PopUpButton open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </PopUpButton>

      <PopUpWindow open={open}>
        <TextLink>about</TextLink>
        <TextLink>projects</TextLink>
        <TextLink>contact</TextLink>
      </PopUpWindow>
    </>
  );
};

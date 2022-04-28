import React from "react";
import { Wrapper } from "../../styles/Wrapper";

const clouds = {
  repeat: Infinity,
  type: "spring",
  duration: 50,
  stiffness: 10,
  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
};

export const ColoredWrapper = (props) => {
  return (
    <Wrapper
      transition={clouds}
      animate={{
        backgroundPositionX: ["-50%", "150%", "150%", "-50%", "-50%"],
        backgroundPositionY: ["-50%", "-50%", "150%", "150%", "-50%"],
      }}
    >
      {props.children}
    </Wrapper>
  );
};

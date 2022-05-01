import React from "react";
import { Wrapper } from "../../styles/Wrapper";

export const ColoredWrapper = () => {
  return (
    <Wrapper>
      <div className="animated-wrapper">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </Wrapper>
  );
};

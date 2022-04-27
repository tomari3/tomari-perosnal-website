import React from "react";

import { motion } from "framer-motion";

import { TechSlideShowWrapper } from "../../styles/TechSlideShowWrapper";

export const TechSlideshow = ({ children }) => {
  const iconsList = React.Children.map(children, (child) =>
    React.cloneElement(<div whileHover={{ height: "100%" }}>{child}</div>)
  );

  return (
    <TechSlideShowWrapper>
      <div className="slide slide-1">{iconsList}</div>
      <div className="slide slide-2">{iconsList}</div>
    </TechSlideShowWrapper>
  );
};

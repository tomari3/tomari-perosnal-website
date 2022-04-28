import React from "react";

import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { HtmlFive } from "@styled-icons/icomoon/HtmlFive";
import { Css3 } from "@styled-icons/remix-fill/Css3";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Framer } from "@styled-icons/simple-icons/Framer";
import { Threedotjs } from "@styled-icons/simple-icons/Threedotjs";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Typescript } from "@styled-icons/simple-icons/Typescript";

import { TechSlideshow } from "./TechSlideshow";

export const FrontEndSkills = () => {
  return (
    <TechSlideshow>
      <ReactLogo />
      <Javascript />
      <Typescript />
      <Sass />
      <Styledcomponents />
      <Redux />
      <HtmlFive />
      <Css3 />
      <Nextdotjs />
      <Framer />
      <Threedotjs />
    </TechSlideshow>
  );
};

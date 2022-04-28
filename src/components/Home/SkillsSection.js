import React from "react";
import { Title } from "../../styles/Title";
import { TechSlideshow } from "./TechSlideshow";

import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Typescript } from "@styled-icons/simple-icons/Typescript";

import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { HtmlFive } from "@styled-icons/icomoon/HtmlFive";
import { Css3 } from "@styled-icons/remix-fill/Css3";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Framer } from "@styled-icons/simple-icons/Framer";
import { Threedotjs } from "@styled-icons/simple-icons/Threedotjs";

import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Nestjs } from "@styled-icons/simple-icons/Nestjs";
import { Express } from "@styled-icons/simple-icons/Express";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Docker } from "@styled-icons/fa-brands/Docker";
import { Aws } from "@styled-icons/fa-brands/Aws";
import { Redis } from "@styled-icons/simple-icons/Redis";

import { Webpack } from "@styled-icons/simple-icons/Webpack";
import { Jest } from "@styled-icons/simple-icons/Jest";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Github } from "@styled-icons/bootstrap/Github";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { LogoNpm } from "@styled-icons/ionicons-solid/LogoNpm";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Adobeillustrator } from "@styled-icons/simple-icons/Adobeillustrator";
import { Adobeaftereffects } from "@styled-icons/simple-icons/Adobeaftereffects";
import { Cinema4d } from "@styled-icons/simple-icons/Cinema4d";
import { Blender } from "@styled-icons/boxicons-logos/Blender";

export const SkillsSection = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Title sub>front end</Title>
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
      <Title sub>back end</Title>
      <TechSlideshow>
        <Nodejs />
        <Express />
        <Nestjs />
        <Javascript />
        <Typescript />
        <Mongodb />
        <Docker />
        <Aws />
        <Redis />
      </TechSlideshow>
      <Title sub>utilities</Title>
      <TechSlideshow>
        <Webpack />
        <Jest />
        <Git />
        <Github />
        <Figma />
        <LogoNpm />
        <Adobeaftereffects />
        <Adobeillustrator />
        <Adobephotoshop />
        <Cinema4d />
        <Blender />
      </TechSlideshow>
    </div>
  );
};

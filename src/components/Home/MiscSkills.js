import React from "react";

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

import { FrontEndGame } from "./FrontEndGame";

export const MiscSkills = () => {
  return (
    <FrontEndGame>
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
    </FrontEndGame>
  );
};

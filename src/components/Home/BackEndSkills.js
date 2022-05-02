import React from "react";

import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Nestjs } from "@styled-icons/simple-icons/Nestjs";
import { Express } from "@styled-icons/simple-icons/Express";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Docker } from "@styled-icons/fa-brands/Docker";
import { Aws } from "@styled-icons/fa-brands/Aws";
import { Redis } from "@styled-icons/simple-icons/Redis";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { BackEndGame } from "./BackEndGame";

export const BackEndSkills = () => {
  return (
    <BackEndGame>
      <Nodejs />
      <Express />
      <Nestjs />
      <Javascript />
      <Typescript />
      <Mongodb />
      <Docker />
      <Aws />
      <Redis />
    </BackEndGame>
  );
};

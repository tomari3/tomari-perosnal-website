import React from "react";
import { Title } from "../../styles/Title";

import { motion } from "framer-motion";

import { FrontEndSkills } from "./FrontEndSkills";
import { BackEndSkills } from "./BackEndSkills";
import { MiscSkills } from "./MiscSkills";

const titles = {
  main: "i know things",
  front: "in the front",
  back: "in the back",
  misc: "and much, much more",
};

export const SkillsSection = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <Title style={{ padding: "5rem 0" }}>{titles.main}</Title>
      </div>
      <div>
        <Title sub>{titles.front}</Title>
        <FrontEndSkills />
      </div>

      <div>
        <Title sub>{titles.back}</Title>
        <BackEndSkills />
      </div>

      <div>
        <Title sub>{titles.misc}</Title>
        <MiscSkills />
      </div>
    </div>
  );
};

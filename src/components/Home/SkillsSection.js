import React from "react";
import { Title } from "../../styles/Title";

import { FrontEndSkills } from "./FrontEndSkills";
import { BackEndSkills } from "./BackEndSkills";
import { MiscSkills } from "./MiscSkills";

export const SkillsSection = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <Title sub> front end</Title>
        <FrontEndSkills />
      </div>

      <div>
        <Title sub>back end</Title>
        <BackEndSkills />
      </div>

      <div>
        <Title sub>utilities</Title>
        <MiscSkills />
      </div>
    </div>
  );
};

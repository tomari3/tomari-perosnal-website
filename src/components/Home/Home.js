import React from "react";

import { SubWrapper } from "../../styles/SubWrapper";
import { HomeIntro } from "./HomeIntro";
import { SkillsSection } from "./SkillsSection";

export const Home = () => {
  return (
    <main>
      <HomeIntro />

      <SubWrapper>
        <SkillsSection />
      </SubWrapper>
    </main>
  );
};

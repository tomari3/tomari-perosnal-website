import React from "react";
import { SubWrapper } from "../../styles/SubWrapper";
import { HomeIntro } from "./HomeIntro";
import { HomeProjects } from "./HomeProjects";
import { SkillsSection } from "./SkillsSection";

export const Home = () => {
  return (
    <main>
      <HomeIntro />

      <SubWrapper>
        <SkillsSection />
      </SubWrapper>

      <SubWrapper>
        <HomeProjects />
      </SubWrapper>
    </main>
  );
};

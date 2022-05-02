import React from "react";
import { Title } from "../../styles/Title";

import { FrontEndSkills } from "./FrontEndSkills";
import { BackEndSkills } from "./BackEndSkills";
import { MiscSkills } from "./MiscSkills";

const titles = {
  main: "I can work with these technologies",
  front: "front end",
  back: "back end",
  misc: "and all around",
};

const titlesTransition = {
  ease: "easeInOut",
  duration: 0.8,
};

export const SkillsSection = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        backgroundColor: "var(--primary-bg)",
        transition: "background-color 1s ease",
      }}
    >
      <div
        style={{
          height: "150vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title
          transition={titlesTransition}
          initial={{ scale: 7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
        >
          {titles.main}
        </Title>
      </div>
      <div>
        <Title
          $sub
          style={{ padding: "15vh" }}
          transition={titlesTransition}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
        >
          {titles.front}
        </Title>
        <FrontEndSkills />
      </div>

      <div>
        <Title
          $sub
          style={{ padding: "15vh" }}
          transition={titlesTransition}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
        >
          {titles.back}
        </Title>
        <BackEndSkills />
      </div>

      <div>
        <Title
          $sub
          transition={titlesTransition}
          style={{ padding: "15vh" }}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
        >
          {titles.misc}
        </Title>
        <MiscSkills />
      </div>
    </div>
  );
};

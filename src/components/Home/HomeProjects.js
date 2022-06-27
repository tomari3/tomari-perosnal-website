import React from "react";

import post from "../../assets/social/post.png";
import users from "../../assets/social/users.png";
import profile from "../../assets/social/profile.png";
import gif from "../../assets/portfolio/out.gif";
import player from "../../assets/adsv/player.png";
import intro from "../../assets/adsv/intro.png";

import { StyledProjects } from "../../styles/StyledProjects";
import { Project } from "./Project";

import {
  Express,
  ReactLogo,
  Nodedotjs,
  Mongodb,
  Styledcomponents,
  Framer,
  Bulma,
  Gatsby,
  Javascript,
  Python,
  Java,
} from "styled-icons/simple-icons";

export const HomeProjects = () => {
  return (
    <StyledProjects>
      <Project
        name={"social"}
        images={[post, users, profile]}
        demo={"https://mern-blog-2.herokuapp.com/"}
        code={"https://github.com/tomari3/Blog-Docker"}
        desc={
          "social blog app with full crud, images support, jwt and custom design system"
        }
        stack={[
          <ReactLogo />,
          <Nodedotjs />,
          <Mongodb />,
          <Styledcomponents />,
          <Express />,
        ]}
      />
      <Project
        name={"portfolio"}
        images={[gif]}
        demo={"https://tomari3.github.io/tomari-perosnal-website/"}
        code={"https://github.com/tomari3/tomari-perosnal-website"}
        desc={"personal portfolio using framer animation and styled components"}
        stack={[<ReactLogo />, <Styledcomponents />, <Framer />]}
      />

      <Project
        name={"adsv"}
        images={[player, intro]}
        code={
          "https://github.com/tomari3/algorithms-and-data-structures-visulaized"
        }
        desc={
          "cms ssr blog for sharing my algorithms and data structures process"
        }
        stack={[
          <ReactLogo />,
          <Bulma />,
          <Gatsby />,
          <Javascript />,
          <Python />,
          <Java />,
        ]}
      />
    </StyledProjects>
  );
};

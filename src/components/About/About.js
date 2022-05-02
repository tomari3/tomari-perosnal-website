import React from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "../Home/AnimatedText";
import { HistoryLink } from "../../styles/HistoryLink";

const placeholderText = [{ text: "About" }];
const paragraph = {
  text: "Hey! My name is Tom Ari, I'm a 23 years old from the north of Israel, I grew in a Kibbutz, started working in a cowshed at 13, at 18 I spent a year volunteering as a guide in the youth village Ayanot. In the Army I've served as a commander in a combat recon unit. I come from a British family and English is a second nature to me. All my life I've been hooked to computers. The first time I laid my hand on one I was 8 years old and my father had let me play with the Adobe softwares on his computer, since then I've learned almost all the Adobe suite, Cinema 4D, Blender and more graphics technologies. By 12 I've started selling and sharing illustrations, photo manipulations and video montages, which funded my Steam library. Since February 2022 I am building projects using wide array of front and back end technologies. I learn the needed skills from blogs, StackOverFlow, friends, free courses and trail and error. I believe in clean, efficient, beautiful code, I follow best practices and I am constantly looking to improve. I believe the best way of learning is by doing. Currently, I am looking for my first job in the professional world, think I am the right fit for you?",
  link: "get in touch",
};
const container = {
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};
export const About = () => {
  const history = useNavigate();
  const linkContact = () => {
    history("/contact");
  };

  return (
    <HomeIntroWrapper initial="hidden" animate={"visible"} variants={container}>
      <div className="text">
        <div className="main-text">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
          className="paragraph text-justify"
        >
          <p>
            {paragraph.text}
            <HistoryLink $bold onClick={linkContact}>
              {paragraph.link}
            </HistoryLink>
          </p>
        </motion.div>
      </div>
    </HomeIntroWrapper>
  );
};

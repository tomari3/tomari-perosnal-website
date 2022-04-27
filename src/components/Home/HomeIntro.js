import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { HomeIntroWrapper } from "../../styles/HomeIntroWrapper";
import AnimatedCharacters from "./AnimatedText";
import AnimatedSphere from "../../threejs/Orb";

const placeholderText = [
  { text: "self taught" },
  {
    text: "developer",
  },
  { text: "life long" },
  {
    text: "designer",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const HomeIntro = () => {
  return (
    <HomeIntroWrapper initial="hidden" animate={"visible"} variants={container}>
      <div className="text">
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
      <div className="piece">
        <Canvas clasName="canvas">
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>
    </HomeIntroWrapper>
  );
};

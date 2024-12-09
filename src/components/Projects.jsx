import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Projects = () => {
  return (
    <div className="w-screen h-screen">
      <Parallax pages={2}>
        {/* Background Layer */}
        <ParallaxLayer speed={0.2} style={{ backgroundColor: "#f0f0f0" }}>
          <div className="absolute w-full h-full" />
        </ParallaxLayer>

        {/* Project Content 1 */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">Project 1</h1>
          </div>
        </ParallaxLayer>

        {/* Project Content 2 */}
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">Project 2</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Projects;

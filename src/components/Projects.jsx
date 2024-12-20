import React from "react";

const Projects = () => {
  return (
    <div className="w-screen h-screen">
      <>
        {/* Background Layer */}
        <div speed={0.2} style={{ backgroundColor: "#f0f0f0" }}>
          <div className="absolute w-full h-full" />
        </div>

        {/* Project Content 1 */}
        <div offset={0} speed={0.5}>
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">Project 1</h1>
          </div>
        </div>

        {/* Project Content 2 */}
        <div offset={1} speed={0.5}>
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">Project 2</h1>
          </div>
        </div>
      </>
    </div>
  );
};

export default Projects;

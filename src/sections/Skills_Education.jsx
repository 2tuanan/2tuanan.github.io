import React from "react";

const Skills_Education = () => {
  return (
    <div>
      <section id="skills-education" class="py-14 px-10 mx-10">
        <div class="p-6 bg-cyan-600 bg-opacity-10 backdrop-blur-md rounded-[30px]">
          <h2 class="text-3xl font-bold text-center mb-8">
            Skills & Education
          </h2>
          <div class="relative border-l-2 border-cyan-700/50 ml-6">
            <div class="mb-8 ml-6">
              <div class="p-6 rounded-r-[20px] shadow-md">
                <h3 class="text-lg font-semibold text-cyan-300">
                  Web Development Skills
                </h3>
                <p class="mt-2">HTML, CSS, JavaScript, React</p>
              </div>
            </div>
            <div class="mb-8 ml-6">
              <div class="p-6 rounded-r-[20px] shadow-md">
                <h3 class="text-lg font-semibold text-cyan-300">Education</h3>
                <ul class="mt-2 space-y-1">
                  <li>Google IT Support Specialization</li>
                  <li>Google UX Design Specialization</li>
                  <li>The Complete 2023 Web Development Bootcamp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills_Education;

import React from "react";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-14 px-10 mx-10">
        <div className="">
          <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
            <a href="https://2tuanan.github.io/uiux-portfolio/" 
            className="bg-amber-400/90 rounded-[30px] transition-transform duration-500 
            ease-in-out overflow-hidden hover:scale-105 hover:shadow-lg group"> {/*Project 1 as Card */}
              <div className="text-right text-cyan-800 p-6 pr-12"> {/* Title of Project */}
                <span>Website</span>
                <h3 className="text-2xl">UI/UX Portfolio</h3>
              </div>
              <div> {/* Description of Project */}
                <div className="">
                  <figure className="pl-12 relative w-[800px] h-80 transition-transform duration-500 
                  ease-in-out group-hover:-translate-y-3">
                    <img
                      src="assets/images/ux-ui_portfolio.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </a>
            <div></div> {/*Project 2 as Card */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

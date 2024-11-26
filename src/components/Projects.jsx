import React from 'react';

const Projects = () => {
    return (
        <div>
            <section id="projects" className="py-14 px-10 mx-10">
                <div className="">
                <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <div className="p-6 bg-amber-400/75 rounded-[30px] "> {/*Project 1 as Card */}
                    <div> {/* Title of Project */}
                        <span>Website</span>
                        <h3>UI/UX Portfolio</h3>
                    </div>
                    <div> {/* Image of Website I want it will move down a little bit in y-axis when hovering */}
                        <div>
                        <figure className="relative w-full h-48 overflow-hidden">
                            <img className="w-[1100px] h-auto transition-transform duration-300 ease-in-out"
                            src="assets/images/ux-ui_portfolio.png" alt=""/>
                        </figure>
                        </div>
                    </div>
                    </div>
                    <div></div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
import React from 'react';

const Info_Skills = ({offsetY, offsets}) => {
    const isMd = window.innerWidth >= 768 && window.innerWidth < 1024;
    const isLg = window.innerWidth >= 1024;
    const px = isLg ? 60 : isMd ? 40 : 5;
    return (
        <div>
            <div className="grid grid-cols-1  gap-12 w-full mb-[20vh] px-10 md:px-16">
                <div
                    style={{
                        transform: `translateX(${offsets.about > 700 ? Math.min((offsets.about - 700) * 0.1, px) : 0}px)`,
                        opacity: offsets.about > 700 ? Math.min(1, (offsets.about - 700) / 200) : 0,
                    }}
                    className="space-y-6 w-full md:w-3/5 mx-full text-center md:text-left ml-0 "
                >
                    <h2 className="text-3xl font-semibold text-teal-300">
                        My Journey
                    </h2>
                    <p className="text-gray-200 leading-relaxed">
                        I'm a passionate web developer with a keen interest in
                        creating interactive and visually stunning applications.
                        I have experience in html, css, javascript, react, nodejs...
                    </p>
                </div>

                {/* Skills */}
                <div
                    style={{
                        transform: `translateX(${offsets.about > 880 ? Math.max(-(offsets.about - 880) * 0.1, -px) : 0}px)`,
                        opacity: offsets.about > 880 ? Math.min(1, (offsets.about - 880) / 1) : 0,
                    }}                            
                    className="space-y-8 w-full md:w-3/5 mx-auto text-center md:text-right mr-0"
                >
                    <h2 className="text-3xl font-semibold text-teal-300 right-0">
                        My Skills
                    </h2>
                    <div className="space-y-4 right-0">
                        <div className="relative">
                            <div className="text-gray-300">Frontend Development</div>
                            <div className="w-full bg-gray-700 h-3 rounded-lg overflow-hidden mt-2">
                                <div
                                    className="bg-teal-500 h-3"
                                    style={{
                                        width: `${Math.min(
                                            (offsetY / 800) * 70, 80)}%`,
                                        transition: "width 0.6s ease-in-out",
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="text-gray-300">Backend Development</div>
                            <div className="w-full bg-gray-700 h-3 rounded-lg overflow-hidden mt-2">
                                <div
                                    className="bg-cyan-500 h-3"
                                    style={{
                                        width: `${Math.min(
                                            (offsetY / 820) * 60, 70)}%`,
                                        transition: "width 0.6s ease-in-out",
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="text-gray-300">UI/UX Design</div>
                            <div className="w-full bg-gray-700 h-3 rounded-lg overflow-hidden mt-2">
                                <div
                                    className="bg-green-500 h-3"
                                    style={{
                                        width: `${Math.min(
                                            (offsetY / 840) * 70, 80)}%`,
                                        transition: "width 0.6s ease-in-out",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info_Skills;
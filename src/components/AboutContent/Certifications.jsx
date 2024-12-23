import React from 'react';

const Certifications = ({offsets, offsetY}) => {
    return (
        <div>
            <div className="w-2/3 mx-auto mt-12">
                <h3 style={{
                    transform: `translateX(${offsets.about > 1000 ? Math.min((offsets.about - 1000) * 0.1, 50) : 0}px)`,
                    opacity: offsets.about > 1000 ? Math.min(1, (offsets.about - 1000) / 200) : 0,
                }}
                className="text-2xl font-semibold text-teal-400 mb-4">Certifications</h3>
                <ul className="space-y-6 relative">
                    {/* Timeline Line */}
                    <div className="absolute w-[0.15rem] h-full bg-gray-600 left-4 top-0"></div>
                    
                    {/* Timeline Items */}
                    {[
                        "Google IT Support Specialization",
                        "Google UX Design Specialization",
                        "The Complete 2023 Web Development Bootcamp",
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="relative pl-12"
                            style={{
                                transform: `translateY(${offsetY > 1050 + index * 150 ? 0 : 20}px)`,
                                opacity: offsetY > 1050 + index * 150 ? 1 : 0,
                                transition: `all 0.5s ease-out ${index * 0.2}s`,
                            }}
                        >
                            <div
                                className="absolute left-[0.43rem] top-0 w-5 h-5 rounded-full"
                                style={{
                                    backgroundColor: ["#2dd4bf", "#22d3ee", "#4ade80"][index],
                                    transform: `scale(${offsetY > 1050 + index * 150 ? 1 : 0.5})`,
                                    transition: `transform 0.5s ease-out ${index * 0.1}s`,
                                }}
                            ></div>
                            <h4 className="text-lg font-medium text-gray-200">{item}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Certifications;
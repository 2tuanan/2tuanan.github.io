import React from 'react';

const AboutHeader = ({offsets}) => {
    return (
        <div>
            <div
                className="text-center mb-[10vh]"
                style={{
                    transform: `translateY(${offsets.about > 200 ? Math.min((offsets.about - 250) * 0.1, 50) : 0}px)`,
                    opacity: offsets.about > 200 ? Math.min(1, (offsets.about - 250) / 200) : 0,
                }}
            >
                <h1 className="text-5xl font-bold text-teal-400 mb-4">
                    About Me
                </h1>
                <p className="text-xl text-gray-300">
                    I am ...
                </p>
            </div>
        </div>
    );
};

export default AboutHeader;
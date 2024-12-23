import React from 'react';

const FunFact = ({offsets}) => {
    return (
        <div>
            <div
                style={{
                    transform: `translateY(${offsets.about > 1850 ? Math.min((offsets.about - 1850) * 0.1, 50) : 0}px)`,
                    opacity: offsets.about > 1850 ? Math.min(1, (offsets.about - 1850) / 200) : 0,
                }}
                className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                    <img
                        src="/assets/images/Coding.gif"
                        alt="Coding"
                        className="w-20 mx-auto mb-8"
                    />
                    <h3 className="text-xl font-semibold">40+ Hours of Coding</h3>
                    <p className="text-gray-400">
                        Committed to mastering the art of development.
                    </p>
                </div>
                <div className="text-center">
                    <img
                        src="/assets/images/Rocket.gif"
                        alt="Rocket"
                        className="w-20 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">1 Project Launched</h3>
                    <p className="text-gray-400">
                        Delivering functional and creative solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FunFact;
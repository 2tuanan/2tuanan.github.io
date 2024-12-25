import React from "react";
import { motion } from "framer-motion";

const Projects = ({ offsets }) => {
  const projects = [
    {
      id: 1,
      image: "https://picsum.photos/800/1200?random=1",
      title: "Eco-Friendly Homes",
      description: "A deep dive into sustainable architecture and design.",
      link: "#",
    },
    {
      id: 2,
      image: "https://picsum.photos/800/1200?random=2",
      title: "AI in Medicine",
      description: "Exploring the intersection of AI and healthcare innovation.",
      link: "#",
    },
    {
      id: 3,
      image: "https://picsum.photos/800/1200?random=3",
      title: "Space Exploration",
      description: "An overview of upcoming technologies in space travel.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {projects.map((project, index) => {

          return (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0"
            >
              {/* Left Image Section */}
              <div
                className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden"
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right Details Section */}
              <motion.div
                className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 space-y-4"
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-teal-400">
                  {project.title}
                </h2>
                <p className="text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  className="text-teal-400 hover:text-teal-300 transition"
                >
                  Learn More →
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

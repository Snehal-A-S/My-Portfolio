// Import dependencies
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

// Array of project objects
const projects = [
  {
    title: "Wanderlust – Airbnb Clone Web Application",
    description:
      "Developed a full-stack travel accommodation platform allowing users to list, book, and explore stays. Implemented secure user authentication with proper password hashing and session management. Built using Express.js, Node.js, MongoDB, Tailwind CSS, and followed RESTful API architecture for backend communication.",
    image: "/wanderlust1.png",
    github: "https://github.com/Snehal-A-S/Wanderlust",
  },
  {
    title: "Simon Game – Memory-Based Color Pattern Game",
    description:
      "Developed an interactive browser-based game that challenges users to replicate increasing color sequences. Used HTML, CSS, and JavaScript to implement game logic. Focused on DOM manipulation and event handling to enhance user experience and engagement.",
    image: "/simongame.png",
    github: "https://github.com/Snehal-A-S/Simon-game",
  },
  {
    title: "Sentiment Analysis using Machine Learning",
    description:
      "Built a machine learning model to classify text as positive or negative, based on sentiment. Applied NLP techniques such as text preprocessing, TF-IDF vectorization, and logistic regression. Evaluated model performance using accuracy, precision, recall, and confusion matrix metrics.",
    image: "/sentiment.png",
    github: "https://github.com/Snehal-A-S/IEEE-CAS-Internship---AI-ML",
  },
  {
    title:
      "Decentralized Student Result Storage and Verification System (ongoing)",
    description:
      "Currently developing a secure platform to store and verify student academic results using blockchain and cloud computing. Aiming to ensure data integrity and tamper‑proof verification through blockchain‑based hashing and immutability. Backend development involves Node.js and Express.js with secure cloud integration for result storage.",
    image: "/blockchain.jpg",
    github: "https://github.com/Snehal-A-S/Cloud-Computing-Internship---P100",
  },
  {
    title: "Smart Traffic Management System for Emergency Vehicles",
    description:
      "Developed a system to prioritize emergency vehicles by automatically controlling traffic signals based on their detection. Implemented RFID technology and Arduino for vehicle identification and signal automation in real-time. Used C++ for Arduino programming and simulated traffic flow using Tinkercad platforms.",
    image: "/traffic.jpg",
    // Optional: add GitHub link if available
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Developed a dynamic and responsive portfolio to showcase projects, skills, and achievements. Built using React, styled with Tailwind CSS, and enhanced with Framer Motion for smooth animations. Implemented React Router for seamless navigation across sections.",
    image: "/protfolio.jpg",
    github: "https://github.com/Snehal-A-S/My-Portfolio",
  },
];

// Projects carousel component
const Projects = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  // Navigate to next/previous project
  const nextProject = () =>
    setIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="w-full py-20 px-6 md:px-24 text-white">
      {/* Section title */}
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Projects
      </h2>

      {/* Main content: image + details */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
        {/* Project image with animated transitions */}
        <div className="w-full md:w-[45%] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={project.image}
              alt={project.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl w-full h-[300px] object-cover shadow-lg brightness-75 hover:brightness-100 transition duration-500"
              style={{
                boxShadow:
                  "0 0 15px rgba(0,255,255,0.3), 0 0 30px rgba(0,255,255,0.15)",
              }}
            />
          </AnimatePresence>
        </div>

        {/* Project details and navigation */}
        <div className="w-full md:w-[55%] flex flex-col space-y-6 mt-2 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -5 }}
              transition={{ duration: 0.5 }}
            >
              {/* Project title */}
              <h3 className="text-2xl font-bold text-cyan-300">
                {project.title}
              </h3>

              {/* Optional GitHub link */}
              {project.github && (
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                  >
                    <FaGithub className="text-xl" />
                    <span className="underline text-sm break-all">
                      {project.github}
                    </span>
                  </a>
                </div>
              )}

              {/* Project description */}
              <p className="text-gray-300 text-base mt-6">
                {project.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevProject}
              className="text-2xl p-3 rounded-full text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:shadow-[0_0_20px_rgba(0,255,255,0.9)] transition duration-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextProject}
              className="text-2xl p-3 rounded-full text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:shadow-[0_0_20px_rgba(0,255,255,0.9)] transition duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

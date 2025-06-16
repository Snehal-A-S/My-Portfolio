// Import necessary libraries
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaRobot,
  FaCode,
  FaGlobe,
  FaUsers,
  FaPenNib,
  FaUserTie,
} from "react-icons/fa";

// Experience data array
const experiences = [
  {
    title: "Cloud computing Intern",
    org: "IEEE CS Bangalore Chapter Internship Program",
    date: "April 2025 – Present",
    description:
      "Currently working on a result storage and verification system under the IEEE Cloud Computing Internship (P100). Involved in backend development, cloud integration (AWS S3), PDF automation, and blockchain-based verification.",
    icon: <FaCode />,
  },
  {
    title: "AI/ML Intern",
    org: "IEEE CAS Society Internship Program",
    date: "Aug 2024 – Nov 2024",
    description:
      "Completed a 14-week IEEE CAS Internship focused on Sentiment Analysis using Natural Language Processing (NLP). Built and evaluated a machine learning model using techniques like Bag of Words, TF-IDF, and Logistic Regression.",
    icon: <FaRobot />,
  },
  {
    title: "Secretary",
    org: "IEEE JCE Student Branch",
    date: "Dec 2024 – Present",
    description:
      "Serving as Secretary of the IEEE JCE Student Branch, managing communications, documentation, and event coordination. Played a key role in organizing technical workshops, hackathons, and student outreach initiatives.",
    icon: <FaUserTie />,
  },
  {
    title: "SAC Website Team Volunteer",
    org: "IEEE Bangalore Section",
    date: "Feb 2025 – Present",
    description:
      "Volunteered as a Website Developer for the IEEE Bangalore Section SAC, contributing to the design and maintenance of the official website. Collaborated with the team to ensure timely updates, smooth user experience, and event-related content management.",
    icon: <FaGlobe />,
  },
  {
    title: "GDG Tech Volunteer",
    org: "GDG DevFest 2024",
    date: "Nov 2024",
    description:
      "Volunteered as a Tech Team member for Google Developer Group (GDG) Belgaum, supporting website development and event execution. Contributed to organizing hackathons and managing technical infrastructure to ensure seamless event operations.",
    icon: <FaUsers />,
  },
  {
    title: "BelPy Tech Volunteer",
    org: "BelPy'24",
    date: "June 2024",
    description:
      "Volunteered as a Web Developer for BelPy (Belgaum Python Conference), collaborating with senior developers on the official event website. Assisted in designing, updating, and maintaining the site while gaining hands-on experience in community-driven tech events.",
    icon: <FaPenNib />,
  },
];

// Experience timeline component
const Experience = () => {
  const controls = useAnimation();
  const timelineRef = useRef(null);

  // Controls the vertical timeline animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        controls.start({ scaleY: entry.isIntersecting ? 1 : 0 });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section id="experience" className="w-full px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-10">
            Experience
          </h2>
          <p className="text-center text-gray-300 mb-10">
            A glimpse of my contributions and hands-on involvement in tech communities
          </p>
        </div>

        <div className="relative">
          {/* Vertical animated timeline line */}
          <motion.div
            ref={timelineRef}
            initial={{ scaleY: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500 origin-top"
          />

          {/* Timeline items */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`w-full flex flex-col md:flex-row ${
                  isLeft ? "justify-start" : "justify-end"
                } mb-12 relative z-10`}
              >
                {/* Experience card */}
                <div
                  className={`w-full md:w-[46%] px-4 ${
                    isLeft ? "md:pr-10 text-left" : "md:pl-10 text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 10,
                    }}
                    className="bg-gray-800 border border-gray-700 p-5 rounded-xl shadow-md hover:shadow-cyan-500/30 transition-transform"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-white text-xl">{exp.icon}</div>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{exp.org}</p>
                    <p className="text-xs text-gray-500 mb-2">{exp.date}</p>
                    <p className="text-sm text-gray-300">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 z-20"
                >
                  <div className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-gray-900 shadow-md shadow-cyan-400/40 transition-all duration-300"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;



// Import required libraries
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

// Education data array
const educationData = [
  {
    degree: "Bachelor of Engineering",
    institution: "Jain College of Engineering, Belagavi",
    year: "2022 – 2026",
    score: "CGPA: 8.64 (Till 5th Sem)",
    description:
      "Skills - Problem Solving, IoT basics, Web Dev, Leadership, Event Management, Collaboration, Networking",
  },
  {
    degree: "Pre-University (PCM)",
    institution: "KLE'S RLPU College of Science, Belagavi",
    year: "2020 – 2022",
    score: "Percentage: 87.66%",
    description:
      "Skills - Basic Programming, Academic Consistency, Time Management, Discipline",
  },
  {
    degree: "SSLC (10th Grade)",
    institution: "Maratha Mandal Jijamata High School, Belagavi",
    year: "2019 – 2020",
    score: "Percentage: 91.36%",
    description:
      "Skills - Leadership, Responsibility, Discipline, Communication, Academic Excellence",
  },
];

// Education component
const Education = () => {
  return (
    <section id="education" className="w-full px-6 md:px-20 py-20">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
        Education
      </h2>

      {/* Vertical timeline structure */}
      <div className="relative border-l-2 border-cyan-400 ml-4 md:ml-1">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className={`mb-14 relative pl-10 md:pl-16 ${
              index % 2 === 0
                ? "md:ml-0 md:mr-auto"
                : "md:ml-auto md:mr-0"
            } w-full md:w-1/2`}
          >
            {/* Timeline dot */}
            <span className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]" />

            {/* Education card content */}
            <div className="bg-transparent">
              {/* Degree with icon */}
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <FaGraduationCap className="text-base" />
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
              </div>

              {/* Institution details */}
              <p className="text-sm text-gray-300">{edu.institution}</p>
              <p className="text-xs text-gray-400">{edu.year}</p>
              <p className="text-xs text-gray-400 mb-2">{edu.score}</p>
              <p className="text-sm text-gray-300">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;



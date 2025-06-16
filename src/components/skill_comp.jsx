import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaReact, FaGithub, FaPython, FaJava } from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress, SiTailwindcss, SiPostman } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "API", icon: <SiPostman className="text-orange-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
];

const splitTechStack = [
  techStack.slice(0, Math.ceil(techStack.length / 2)),
  techStack.slice(Math.ceil(techStack.length / 2))
];

const Skills =()=>{
  return (
    
      <section className="w-full py-16 px-6 md:px-20">
        <motion.div
          whileHover={{ rotateY: 5, rotateX: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="max-w-6xl mx-auto bg-gray-800/40 border border-gray-600 rounded-2xl p-10 shadow-2xl overflow-hidden perspective-1000"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-cyan-400">My Skills</h2>
          <p className="text-center text-gray-300 mb-10">A set of technologies I work with & love using!</p>

          {splitTechStack.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden mb-6 h-[100px]">
              <motion.div
                initial={{ x: rowIndex % 2 === 0 ? '50%' : '-100%' }}
                animate={{ x: rowIndex % 2 === 0 ? '-100%' : '50%' }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                }}
                className="flex gap-6 absolute whitespace-nowrap"
              >
                {[...row, ...row, ...row].map((tech, i) => (
                  <div
                    key={i}
                    className="bg-gray-700 p-4 rounded-xl min-w-[120px] h-[100px] flex flex-col items-center justify-center shadow-md hover:bg-cyan-500 hover:text-white transition"
                  >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </section>
  );
};

export default Skills;

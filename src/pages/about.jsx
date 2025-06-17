import { motion } from "framer-motion";
import Skills from '../components/skill_comp'
import Experience from '../components/exp_comp'
import Projects from '../components/project_comp'
import Contact from '../components/contact_comp'
import Education from '../components/education'
import {FaLinkedin} from "react-icons/fa";

const About = () => {
  return (
    
    <div className="w-full bg-gradient-to-br from-gray-900 to-black text-white">
      {/* First Section - Profile */}
      <div className="min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 gap-10 sm:gap-14 md:gap-20 lg:gap-28 py-10">
          {/* LEFT: Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex justify-center md:justify-start relative"
          >
            <div className="relative w-fit rounded-b-3xl overflow-hidden">
              <img
                src="/heroprofile1.png"
                alt="Snehal"
                className="w-64 sm:w-72 md:w-96 lg:w-[480px] xl:w-[520px] h-auto object-contain z-10"
              />
              {/* Fade effect ONLY at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20" />
            </div>
          </motion.div>

          {/* RIGHT: Text Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-28"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-cyan-400">Snehal</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed">
              I'm a pre-final year engineering student and a passionate developer who loves turning ideas into impactful web applications. 🌟
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <a
                href="/Snehal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition text-sm sm:text-base"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/snehal-suryavanshi/"
                className="inline-flex gap-2 items-center justify-center border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 px-6 py-3 rounded-full transition text-sm sm:text-base"
              >
              
               <FaLinkedin className="text-xl" />
  <span className="font-semibold">LinkedIn</span>
                
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Education/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default About;








import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaClipboardList, FaLaptopCode, FaCode } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";



const routes = [
  { path: "/", name: "About", icon: <FaHome /> },
  { path: "/skills", name: "Skills", icon: <FaClipboardList /> },
  { path: "/experience", name: "Experience", icon: <FaLaptopCode /> },
  { path: "/project", name: "Projects", icon: <FaCode /> },
  { path: "/contact", name: "Contact", icon: <IoMdCall /> },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sidebarVariants = {
    open: {
      width: 250,
      transition: { duration: 0.4, type: "spring" },
    },
    closed: {
      width: isMobile ? 50 : 70,
      transition: { duration: 0.4, type: "spring" },
    },
  };

  return (
    <div className="flex h-screen">
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="bg-gray-800 text-white px-2 py-6 flex flex-col h-full shadow-lg"
      >
      {/* TOP SECTION */}
<div className="flex items-center justify-center mb-8 h-10 relative w-full">
  {isOpen ? (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-bold absolute left-4"
      >
        Snehal Suryavanshi
      </motion.h1>
      <button
        onClick={toggle}
        className="text-white text-xl absolute right-4 p-1 hover:bg-gray-700 rounded"
      >
        &times;
      </button>
    </>
  ) : (
    <button
      onClick={toggle}
      className="text-white text-xl p-2 hover:bg-gray-700 rounded-full transition-all duration-300 flex items-center justify-center"
    >
      <SlOptionsVertical />
    </button>
  )}
</div>


        {/* NAV LINKS */}
        <nav className="flex flex-col gap-2">
          {routes.map((route) => (
            <NavLink
              to={route.path}
              key={route.name}
              className={({ isActive }) =>
                `flex items-center ${
                  isOpen
                    ? "justify-start px-3 gap-4"
                    : isMobile
                    ? "justify-center"
                    : "justify-start pl-3"
                } py-2 rounded-md w-full transition-all duration-300 hover:bg-gray-700 ${
                  isActive ? "bg-gray-700 font-semibold" : ""
                }`
              }
            >
              <span className="text-xl">{route.icon}</span>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm"
                >
                  {route.name}
                </motion.span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* PROFILE IMAGE */}
        <div className="mt-auto mb-6 flex justify-center items-center">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`rounded-full object-cover border-2 border-white shadow-lg ${
              isOpen ? "w-20 h-20" : "w-10 h-10"
            }`}
          />
        </div>
      </motion.div>

      <main className="flex-1 bg-gray-100 overflow-auto">{children}</main>
    </div>
  );
};

export default Sidebar;




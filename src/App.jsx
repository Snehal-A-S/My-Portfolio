import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import About from "./pages/about";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Skills from "./pages/skills";

import Sidebar from "./components/Sidebar";
import Footer from "./components/footer";
import Preloader from "./components/preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </Sidebar>
    </Router>
  );
}

export default App;

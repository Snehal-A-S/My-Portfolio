import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent after 3s
    }, 3000); // Adjust based on your animation length

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex justify-center items-center z-50">
      <DotLottieReact
        src="public/Animation.lottie"
        autoplay
        loop={false} // Only play once
        style={{ width: 250, height: 250 }}
      />
    </div>
  );
};

export default Preloader;




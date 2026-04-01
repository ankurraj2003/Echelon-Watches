import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to auto-play video, a common issue on mobile browsers
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Auto-play was prevented by the browser:", error);
      });
    }
  }, []);

  return (
    <div
      className="relative h-screen overflow-hidden -mt-[80px]"
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
      }}
    >
      {/* Fullscreen video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          poster="/hero-poster.webp"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex items-center justify-center h-full px-6"
      >
        <div className="text-center max-w-xl">
          <h1 className="tangerine-regular text-3xl sm:py-3 lg:text-5xl text-gray-300 leading-relaxed">
            A fine watch is a statement of elegance, a piece of art you wear on
            your wrist.
          </h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <p className="w-8 md:w-11 h-[2px] bg-purple-200"></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

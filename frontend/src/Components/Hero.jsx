import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen overflow-hidden -mt-[80px]"
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
      }}
    >
      {/* Fullscreen video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="/hero.webm"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        ></video>
      </div>

      {/* Subtle dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-xl">
          <h1 className="tangerine-regular text-3xl sm:py-3 lg:text-5xl text-gray-300 leading-relaxed">
            A fine watch is a statement of elegance, a piece of art you wear on
            your wrist.
          </h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <p className="w-8 md:w-11 h-[2px] bg-purple-200"></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

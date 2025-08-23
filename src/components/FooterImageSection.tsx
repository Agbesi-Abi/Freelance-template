"use client";
import React from "react";
import { motion } from "framer-motion";

const FooterImageSection = () => {
  return (
    <section
      aria-label="footer-image-section"
      className="relative w-full h-64 md:h-96 flex items-center justify-start px-6 overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Let’s Build 
        </h2>
        <p className="mt-2 text-gray-200 text-sm md:text-base">
          Something Amazing Together
        </p>
      </motion.div>

      {/* Blurred round shape behind the foot image */}
      <div className="absolute bottom-4 right-0 md:right-10 w-60 h-60 md:w-80 md:h-80 rounded-full bg-indigo-700/40 blur-3xl z-0 pointer-events-none" />

      {/* Slide-in Image at Bottom Right */}
      <motion.div
        className="absolute bottom-0 right-4 md:right-8 z-10 max-w-full"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/foot.png"
          alt="Profile"
          className="object-contain md:w-[320px] md:h-[320px] w-[240px] h-[240px] max-w-full"
        />
      </motion.div>
    </section>
  );
};

export default FooterImageSection;

"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  return (
    <motion.a
      href="https://wa.me/233242076797" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500/50 hover:bg-green-500/70 text-white p-6 rounded-full shadow-2xl z-50 backdrop-blur-md"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: [1, 1.15, 1],
        boxShadow: [
          '0 4px 32px 0 rgba(34,197,94,0.25)',
          '0 8px 40px 0 rgba(34,197,94,0.35)',
          '0 4px 32px 0 rgba(34,197,94,0.25)'
        ]
      }}
      transition={{ duration: 0.5, scale: { repeat: Infinity, repeatType: 'loop', duration: 1.8 } }}
    >
      <FaWhatsapp className="w-9 h-9" />
    </motion.a>
  );
};

export default FloatingWhatsapp;

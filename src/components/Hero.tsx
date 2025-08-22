"use client";
import { motion } from "framer-motion";
import { ChevronDown, Mail, Code, Rocket } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const highlights = [
    { label: "React Native", icon: <Code size={16} /> },
    { label: "Next.js", icon: <Code size={16} /> },
    { label: "Django", icon: <Code size={16} /> },
    { label: "FastAPI", icon: <Code size={16} /> },
    // { label: "🚀 Scalable Apps", icon: <Rocket size={16} /> },
    // { label: "✨ User-Friendly UI", icon: <Rocket size={16} /> },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Left content */}
      <div className="relative z-10 max-w-6xl px-6 flex flex-col items-start text-left">
        {/* Headline */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
            Abigail Agbesi
          </span>
          <br />
          Full-Stack Developer
        </motion.h1>

        {/* Decorative Highlight Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {highlights.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-indigo-400/50 text-gray-200 text-sm font-medium backdrop-blur-md shadow-md hover:bg-indigo-500/20 transition-all"
            >
              {item.icon}
              {item.label}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-start"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-indigo-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <Mail size={20} />
            Hire Me
          </button>
          <button
            onClick={scrollToAbout}
            className="border-2 border-zinc-700 text-gray-200 px-8 py-4 rounded-full text-lg font-medium hover:border-indigo-500 hover:text-indigo-400 transition-colors duration-300"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-8 text-gray-400 hover:text-indigo-400 transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.button> */}
    </section>
  );
};

export default Hero;

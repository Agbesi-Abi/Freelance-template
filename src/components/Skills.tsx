"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Database, PenTool as Tool, Figma, ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiRailway,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-500" /> },
        { name: "Python", icon: <SiPython className="w-6 h-6 text-blue-500" /> },
        { name: "React", icon: <SiReact className="w-6 h-6 text-cyan-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
        { name: "React Native", icon: <SiReact className="w-6 h-6 text-cyan-500" /> },
        { name: "Django", icon: <SiDjango className="w-6 h-6 text-green-600" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-6 h-6 text-teal-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-green-500" /> },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-600" /> },
        { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-orange-500" /> },
        { name: "SQLite", icon: <SiSqlite className="w-6 h-6 text-blue-400" /> },
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Tools",
      icon: <Tool className="w-5 h-5" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-6 h-6 text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub className="w-6 h-6 text-gray-800" /> },
        { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-black" /> },
        { name: "Netlify", icon: <SiNetlify className="w-6 h-6 text-teal-500" /> },
        { name: "Heroku", icon: <SiHeroku className="w-6 h-6 text-purple-600" /> },
        { name: "Railway", icon: <SiRailway className="w-6 h-6 text-black" /> },
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Design",
      icon: <Figma className="w-5 h-5" />,
      skills: [
        { name: "Figma", icon: <SiFigma className="w-6 h-6 text-purple-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" /> },
      ],
      color: "from-pink-500 to-rose-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle auto-sliding
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillCategories.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, skillCategories.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillCategories.length);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skillCategories.length) % skillCategories.length);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
  <section id="skills" className="py-16 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base text-gray-300 max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        {/* Skill Categories Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-zinc-800 p-2 rounded-full shadow-md hover:bg-zinc-700 transition-colors"
            aria-label="Previous skills"
          >
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-zinc-800 p-2 rounded-full shadow-md hover:bg-zinc-700 transition-colors"
            aria-label="Next skills"
          >
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="bg-zinc-800 p-5 rounded-2xl shadow-lg border border-zinc-700 max-w-2xl mx-auto"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-r ${skillCategories[currentIndex].color} flex items-center justify-center text-white mr-3`}
                >
                  {skillCategories[currentIndex].icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skillCategories[currentIndex].title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 sm:grid-cols-4 gap-3"
              >
                {skillCategories[currentIndex].skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="flex flex-col items-center p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors duration-300 group"
                    title={skill.name}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300 mb-1">
                      {skill.icon}
                    </div>
                    <span className="text-xs text-gray-300 text-center font-medium leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-indigo-400 scale-125' : 'bg-zinc-700'
                }`}
                aria-label={`Go to skill category ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">
            What Clients Say
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700">
              <div className="text-base text-gray-300 italic mb-4">
                "Working with Abigail was a smooth experience. Clear communication, quality work, and fast delivery."
              </div>
              <div className="text-sm text-gray-500">— Future Client</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
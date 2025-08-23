
import React from 'react';
import { ChevronDown, Code, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroMobile = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden md:hidden">
    <div className="w-full flex flex-col items-center">
      <img src="/foot.png" alt="Abigail Agbesi" className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg border-4 border-indigo-500/20" />
      <h1 className="text-3xl font-light tracking-tight leading-tight text-center mb-2">Hello</h1>
      <p className="text-base text-gray-300 font-light text-center mb-4">— I'm <span className="text-white font-medium">A. Abigail</span>, a web and mobile developer.</p>
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <span className="flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs font-medium">React Native</span>
        <span className="flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs font-medium">Next.js</span>
        <span className="flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs font-medium">Django</span>
        <span className="flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs font-medium">FastAPI</span>
      </div>
      <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-3 rounded-lg text-base font-medium shadow-md hover:from-indigo-600 hover:to-blue-600 transition-all">Hire Me</button>
        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="border border-slate-600 text-slate-200 px-6 py-3 rounded-lg text-base font-medium hover:border-indigo-500/50 hover:text-indigo-300 transition-all">View Work</button>
      </div>
    </div>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <span className="text-xs text-gray-400 mb-2 tracking-wide">Scroll down</span>
      <div className="animate-bounce">
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = [
    { label: "React Native", icon: <Code size={14} /> },
    { label: "Next.js", icon: <Code size={14} /> },
    { label: "Django", icon: <Code size={14} /> },
    { label: "FastAPI", icon: <Code size={14} /> },
  ];

  return (
    <>
      {/* Mobile Hero */}
      <div className="md:hidden">
        <HeroMobile />
      </div>
      {/* Desktop/Tablet Hero */}
      <div className="hidden md:block">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden flex flex-col">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow animation-delay-2000"></div>
          </div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-10 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
          {/* Main content */}
          <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-16 sm:py-20 md:py-0 gap-12 md:gap-0">
            {/* Left side - Text content */}
            <div className="flex-1 flex flex-col justify-center text-left max-w-2xl py-8 sm:py-12 md:py-0 md:pr-16 w-full">
              {/* Stats (hidden on small screens) */}
              {/* <div className="mb-12 flex flex-wrap gap-12">
                <div className="group cursor-default">
                  <div className="text-3xl lg:text-4xl font-light mb-2 transition-all duration-300 group-hover:text-gray-300">
                    +200
                  </div>
                  <div className="text-base lg:text-lg text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div className="group cursor-default">
                  <div className="text-3xl lg:text-4xl font-light mb-2 transition-all duration-300 group-hover:text-gray-300">
                    +50
                  </div>
                  <div className="text-base lg:text-lg text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                    Startups Raised
                  </div>
                </div>
              </div> */}
              {/* Main heading */}
              <div className="mb-8">
                <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-tight break-words mb-4">
                  Hello
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 font-light max-w-2xl mb-2">
                  — I'm <span className="text-white font-medium">A. Abigail</span>, a web and mobile developer.
                </p>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-row gap-6 mt-6 w-full">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-10 py-4 rounded-lg text-lg font-medium hover:from-indigo-600 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                >
                  <Mail size={20} />
                  Hire Me
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center justify-center gap-2 border border-slate-600 text-slate-200 px-10 py-4 rounded-lg text-lg font-medium hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300 backdrop-blur-sm"
                >
                  View Work
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
            {/* Right side - Portrait */}
            <div className="flex-1 relative flex items-center justify-center mt-8 md:mt-0 w-full">
              <div className="relative w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                {/* Decorative frame elements */}
                <div className="absolute -inset-4 border border-indigo-500/20 rounded-xl"></div>
                <div className="absolute -inset-2 border border-indigo-400/10 rounded-xl"></div>
                <img
                  src="/foot.png"
                  alt="Professional Portrait of Abigail Agbesi"
                  className="relative w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out rounded-lg z-10 shadow-lg"
                />
                {/* Subtle glow effect */}
                <div className="absolute -inset-4 bg-indigo-500/10 blur-xl rounded-lg opacity-50"></div>
              </div>
            </div>
          </div>
          {/* Vertical text */}
          <div className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 -rotate-90 hidden md:block">
            <span className="text-xs md:text-sm tracking-widest text-gray-500 uppercase">
              Full Stack Developer & Designer
            </span>
          </div>
          {/* Year indicator */}
          {/* <div className="absolute left-2 sm:left-6 bottom-16 hidden md:block">
            <span className="text-sm text-gray-500">© 2024</span>
          </div> */}
          {/* Scroll indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
            <span className="text-xs sm:text-sm text-gray-400 mb-2 tracking-wide">Scroll down</span>
            <motion.div 
              className="animate-bounce"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-px h-20 bg-gradient-to-b from-gray-600 to-transparent hidden lg:block"></div>
          <div className="absolute bottom-20 right-20 w-20 h-px bg-gradient-to-r from-gray-600 to-transparent hidden lg:block"></div>
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
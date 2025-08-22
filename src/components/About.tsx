import React from 'react';
import { Code, Smartphone, Server, Globe } from 'lucide-react';

const About = () => {
  const techStacks = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: 'React.js, Next.js, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: 'React Native, Expo',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6" />,
      technologies: 'Django, FastAPI, Node.js/Express',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      category: 'Deployment',
      icon: <Code className="w-6 h-6" />,
      technologies: 'Vercel, Netlify, Heroku, Railway',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
  <section id="about" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hi, I'm <span className="font-semibold text-blue-700">Abigail Agbesi</span>, a passionate full-stack software developer 
              with experience in building mobile apps, web platforms, and custom backends. I've worked on projects 
              ranging from OTP-based login apps to e-commerce platforms and management systems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I combine clean code, problem-solving, and creative design to deliver solutions that help businesses grow. 
              My approach focuses on creating scalable, maintainable applications that provide exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-indigo-900 text-indigo-300 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-4 py-2 bg-emerald-900 text-emerald-300 rounded-full text-sm font-medium">Creative Thinker</span>
              <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">Clean Code</span>
              <span className="px-4 py-2 bg-orange-900 text-orange-300 rounded-full text-sm font-medium">User Focused</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-800 rounded-2xl shadow-lg border border-zinc-700 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stack.color} flex items-center justify-center text-white mb-4`}>
                  {stack.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stack.category}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stack.technologies}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
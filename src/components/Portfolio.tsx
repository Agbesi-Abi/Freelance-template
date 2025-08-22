import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'OTP Login App',
      description: 'Mobile app built with React Native & Expo. Features: OTP-based authentication, clean UI, smooth user flow.',
      technologies: ['React Native', 'Expo', 'FastAPI'],
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Mobile App'
    },
    {
      title: 'Hostel Management System',
      description: 'Web platform prototype for managing bookings, rooms, and payments.',
      technologies: ['Django', 'React.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Web Platform'
    },
    {
      title: 'E-commerce Template',
      description: 'Modern online store template with product listing, cart, and checkout.',
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'E-commerce'
    },
    {
      title: 'Restaurant Website',
      description: 'Minimal, responsive site for showcasing menus, locations, and online orders.',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Website'
    }
  ];

  return (
  <section id="portfolio" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent projects and development work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-2xl shadow-lg border border-zinc-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-500 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-zinc-900 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                    <ExternalLink size={16} />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-zinc-700 text-gray-300 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-colors duration-300">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
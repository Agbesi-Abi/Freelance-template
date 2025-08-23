import React from 'react';
import { Smartphone, Globe, Server, Palette, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'React Native apps with modern UI/UX and backend integration.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Responsive websites & web apps with React.js, Next.js, and Tailwind CSS.',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Secure and scalable APIs with Django, FastAPI, and Node.js.',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Implementation',
      description: 'Clean, user-friendly, and modern interface design.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'End-to-End Solutions',
      description: 'From idea to deployment, I can help manage the entire development process.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section id="services" className="py-14 sm:py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Services
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive development services to help bring your digital ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 bg-zinc-800 hover:bg-zinc-700 rounded-2xl border-2 border-zinc-700 hover:border-indigo-500 hover:border-opacity-100 border-opacity-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
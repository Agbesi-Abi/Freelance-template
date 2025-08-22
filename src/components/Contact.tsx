import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'agbesia55@gmail.com',
      link: 'mailto:agbesia55@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/abigail-agbesi-a368b0230',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/Agbesi-Abi',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: 'Upwork',
      value: 'Hire me on Upwork',
      link: '#',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
  <section id="contact" className="py-20 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-zinc-800 rounded-2xl shadow-lg border border-zinc-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {method.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-zinc-800 p-8 rounded-2xl shadow-lg border border-zinc-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on new projects and help bring innovative ideas to life. 
              Let's discuss your requirements and create something amazing together.
            </p>
            <a
              href="mailto:agbesia55@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-indigo-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
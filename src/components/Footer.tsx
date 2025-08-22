const Footer = () => (
  <footer className="w-full bg-zinc-950 border-t border-zinc-800 py-8 mt-8 text-center text-gray-400 text-sm">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 justify-center">
        <img src="/logo.png" alt="Logo" className="h-7 w-auto object-contain opacity-80" />
        <span className="font-semibold text-gray-300 tracking-wide">Abigail Agbesi</span>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Abigail Agbesi. All rights reserved.
      </div>
      <div className="flex gap-4 justify-center">
        <a href="mailto:agbesia55@gmail.com" className="hover:text-indigo-400 transition-colors">Email</a>
        <a href="https://www.linkedin.com/in/abigail-agbesi-a368b0230" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
        <a href="https://github.com/Agbesi-Abi" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;

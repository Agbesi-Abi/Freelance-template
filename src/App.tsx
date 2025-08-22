import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FooterImageSection from './components/FooterImageSection';
import FloatingWhatsapp from './components/whatsapp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <FooterImageSection />
      <Contact />
  <FloatingWhatsapp />
  {/* <Footer /> */}
    </div>
  );
}

export default App;
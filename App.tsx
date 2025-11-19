import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Scroll spy to update active navigation state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <section id="home" className="min-h-screen flex items-center pt-16">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="skills" className="py-20 bg-darker/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Skills />
          </div>
        </section>

        <section id="experience" className="py-20">
          <Experience />
        </section>

        <section id="projects" className="py-20 bg-darker/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
           <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        <section id="contact" className="py-20 pb-32">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
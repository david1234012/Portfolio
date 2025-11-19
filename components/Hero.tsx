
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col-reverse lg:flex-row items-center gap-12">
      
      {/* Text Content */}
      <div className="flex-1 space-y-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            Available for Hire
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Hi, I'm <span className="text-primary">{PERSONAL_INFO.name.split(' ')[0]}</span>.
            <br />
            <span className="bg-gradient-to-r from-gray-200 to-gray-500 text-transparent bg-clip-text">
              {PERSONAL_INFO.title}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          {/* View Projects Button Hidden */}
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all"
          >
            Download CV <Download className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* Visual/Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 relative flex justify-center lg:justify-end"
      >
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://picsum.photos/800/800?random=99" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};


import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Eye, X, CheckCircle } from 'lucide-react';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col h-full">
            <div 
                className="aspect-video w-full overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                <button 
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full font-medium transform scale-90 group-hover:scale-100 transition-transform"
                >
                    <Eye size={18} /> View Details
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10">
                        +{project.tags.length - 3}
                    </span>
                )}
              </div>
              <div className="pt-4 flex gap-3 border-t border-white/5">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-sm text-white hover:text-primary transition-colors font-medium flex items-center gap-1"
                  >
                    View Details
                  </button>
                  <div className="flex-1"></div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={18} /></a>
                  )}
                  {project.github && (
                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={18} /></a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={() => setSelectedProject(null)}
            ></div>
            <div className="relative bg-card w-full max-w-4xl max-h-[90vh] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
                
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
                >
                    <X size={24} />
                </button>

                {/* Modal Content */}
                <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {/* Header Image */}
                    <div className="w-full h-64 sm:h-80 relative">
                        <img 
                            src={selectedProject.image} 
                            alt={selectedProject.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag) => (
                                <span key={tag} className="text-xs sm:text-sm px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 backdrop-blur-md">
                                    {tag}
                                </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-8">
                        {/* Description */}
                        <div className="space-y-4">
                             <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary rounded-full"></span>
                                Overview
                             </h4>
                             <div className="text-gray-300 leading-relaxed space-y-4">
                                 {selectedProject.fullDescription ? (
                                     selectedProject.fullDescription.map((para, idx) => (
                                         <p key={idx}>{para}</p>
                                     ))
                                 ) : (
                                     <p>{selectedProject.description}</p>
                                 )}
                             </div>
                        </div>

                        {/* Highlights */}
                        {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                            <div className="space-y-4">
                                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                    <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                                    Key Highlights
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {selectedProject.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                                            <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-sm">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Links */}
                        <div className="pt-6 border-t border-white/5 flex flex-wrap gap-4">
                             <a 
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                                    selectedProject.link !== "#" 
                                    ? "bg-primary hover:bg-blue-600 text-white" 
                                    : "bg-white/5 text-gray-500 cursor-not-allowed"
                                }`}
                             >
                                 <ExternalLink size={20} /> Live Demo
                             </a>
                             {selectedProject.github && (
                                <a 
                                    href={selectedProject.github} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all"
                                >
                                    <Github size={20} /> View Code
                                </a>
                             )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

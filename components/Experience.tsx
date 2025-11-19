
import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, ExternalLink } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
       <div className="flex flex-col gap-2 text-center items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Experience</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {EXPERIENCE.map((item, index) => (
                <div key={item.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? '' : 'md:flex-row'}`}>
                    
                    {/* Icon Dot */}
                    <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-card border border-white/10 shadow flex items-center justify-center -translate-x-1/2 shrink-0 z-10 group-hover:border-primary transition-colors">
                        <Briefcase size={16} className="text-primary" />
                    </div>

                    {/* Content Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl border border-white/5 shadow-lg ml-12 md:ml-0 hover:bg-white/5 transition-colors">
                        
                        {item.subRoles ? (
                          <div>
                             {/* Header with Company and Total Period */}
                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b border-white/5">
                                <h3 className="text-lg font-bold text-white">{item.company}</h3>
                                <span className="text-sm text-primary font-mono px-2 py-1 bg-primary/10 rounded mt-1 sm:mt-0">{item.period}</span>
                             </div>

                             {/* Check if we have a unified description on the parent item */}
                             {item.description && item.description.length > 0 ? (
                                <>
                                  {/* Render List of Titles/Positions */}
                                  <div className="space-y-2 mb-6">
                                     {item.subRoles.map((role, rIdx) => (
                                        <div key={rIdx} className="flex flex-col sm:flex-row sm:items-center justify-between pl-4 border-l-2 border-white/10 hover:border-primary/50 transition-colors py-1">
                                           <h4 className="text-md font-medium text-gray-200">{role.title}</h4>
                                           <span className="text-xs text-gray-500 font-mono">{role.period}</span>
                                        </div>
                                     ))}
                                  </div>
                                  {/* Render Unified Description */}
                                  <ul className="space-y-2">
                                      {item.description.map((desc, i) => (
                                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 shrink-0"></span>
                                              {desc}
                                          </li>
                                      ))}
                                  </ul>
                                </>
                             ) : (
                                /* Fallback: Split Descriptions (if no unified description exists) */
                                <div className="space-y-6">
                                    {item.subRoles.map((role, rIdx) => (
                                      <div key={rIdx} className="relative pl-4 border-l-2 border-white/10 hover:border-primary/50 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                          <h4 className="text-md font-bold text-gray-200">{role.title}</h4>
                                          <span className="text-xs text-gray-500 font-mono">{role.period}</span>
                                        </div>
                                        {role.description && role.description.length > 0 && (
                                            <ul className="space-y-1">
                                                {role.description.map((desc, i) => (
                                                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                                        <span className="w-1 h-1 rounded-full bg-gray-600 mt-2 shrink-0"></span>
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                      </div>
                                    ))}
                                </div>
                             )}
                          </div>
                        ) : (
                          // Standard Single Role View
                          <>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                <h3 className="text-lg font-bold text-white">{item.role}</h3>
                                <span className="text-sm text-primary font-mono px-2 py-1 bg-primary/10 rounded">{item.period}</span>
                            </div>
                            <div className="text-gray-300 font-medium mb-3">{item.company}</div>
                            {item.description && (
                              <ul className="space-y-2">
                                  {item.description.map((desc, i) => (
                                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 shrink-0"></span>
                                          {desc}
                                      </li>
                                  ))}
                              </ul>
                            )}
                          </>
                        )}
                        
                        {/* Related Links Section */}
                        {item.relatedLinks && item.relatedLinks.length > 0 && (
                           <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-3">
                              {item.relatedLinks.map((link, i) => (
                                <a 
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-primary hover:bg-primary hover:text-white transition-all border border-primary/20"
                                >
                                  <ExternalLink size={12} />
                                  {link.label}
                                </a>
                              ))}
                           </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
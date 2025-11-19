
import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Globe, Server, Layout } from 'lucide-react';

const icons = [Layout, Server, Cpu, Globe];

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
       <div className="flex flex-col gap-2 text-center items-center">
            <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mt-2">
                I constantly learn new technologies to stay ahead of the curve. Here is what I work with on a daily basis.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {SKILLS.map((category, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                    <div key={category.name} className="bg-card rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                            <Icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4">{category.name}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map(skill => (
                                <div key={skill.name} className="px-3 py-2 bg-darker rounded-lg text-sm text-gray-300 border border-white/5 flex items-center gap-2 hover:border-white/20 transition-colors cursor-default">
                                    {skill.icon && (
                                        <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                                    )}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};


import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                <p>
                    {PERSONAL_INFO.bio}
                </p>
                <p>
                    My journey in software engineering began with a passion for building efficient systems. From designing NFC-based applications in college to architecting enterprise-grade NAS middleware at QNAP, I've always focused on scalability, modularity, and reliability. I love solving complex distributed system problems and optimizing performance.
                </p>
                <div className="flex gap-4 pt-4">
                    <div className="bg-card p-4 rounded-lg border border-white/5 text-center flex-1">
                        <span className="block text-3xl font-bold text-primary">4+</span>
                        <span className="text-sm text-gray-400">Years Exp.</span>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-white/5 text-center flex-1">
                        <span className="block text-3xl font-bold text-primary">3</span>
                        <span className="text-sm text-gray-400">Major Projects</span>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-white/5 text-center flex-1">
                        <span className="block text-3xl font-bold text-primary">30%</span>
                        <span className="text-sm text-gray-400">Eff. Increase</span>
                    </div>
                </div>
            </div>
            <div className="relative h-full min-h-[300px] bg-card rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
                <div className="flex items-center gap-2 pb-4 border-b border-white/5">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <span className="ml-2 text-xs text-gray-500 font-mono">engineer.go</span>
                </div>
                <div className="font-mono text-sm space-y-2 overflow-x-auto no-scrollbar">
                    <div className="text-purple-400">type <span className="text-blue-400">SeniorEngineer</span> struct <span className="text-yellow-300">{'{'}</span></div>
                    <div className="pl-4 text-white">
                        Name: <span className="text-green-400">"David Wang"</span>,
                    </div>
                    <div className="pl-4 text-white">
                        Role: <span className="text-green-400">"Senior Engineer"</span>,
                    </div>
                    <div className="pl-4 text-white">
                        Languages: <span className="text-blue-400">[]string</span><span className="text-yellow-300">{'{'}</span><span className="text-green-400">"Golang"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"JS"</span><span className="text-yellow-300">{'}'}</span>,
                    </div>
                    <div className="pl-4 text-white">
                        Focus: <span className="text-blue-400">[]string</span><span className="text-yellow-300">{'{'}</span>
                    </div>
                    <div className="pl-8 text-green-400">"Microservices",</div>
                    <div className="pl-8 text-green-400">"High Availability",</div>
                    <div className="pl-8 text-green-400">"System Architecture"</div>
                    <div className="pl-4 text-yellow-300">{'}'}</div>
                    <div className="text-yellow-300">{'}'}</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

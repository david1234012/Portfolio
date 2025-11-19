import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-darker py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
        <div className="flex gap-6">
            <span className="text-gray-600 text-sm">Built with React, Tailwind & Gemini API</span>
        </div>
      </div>
    </footer>
  );
};

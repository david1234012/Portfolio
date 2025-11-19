
import React from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Let's work together</h2>
          <p className="text-gray-400 text-lg">
            I'm currently open to new opportunities in software engineering. Feel free to reach out!
          </p>
          
          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-primary border border-white/5">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary transition-colors">{PERSONAL_INFO.email}</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-primary border border-white/5">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-primary transition-colors">{PERSONAL_INFO.phone}</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-primary border border-white/5">
                <MapPin size={24} />
              </div>
              <div>
                 <div className="text-sm text-gray-500">Location</div>
                 <div>{PERSONAL_INFO.location}</div>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-card p-8 rounded-2xl border border-white/5 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input type="text" id="name" className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
            <textarea id="message" rows={4} className="w-full bg-darker border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
          </div>
          <button className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

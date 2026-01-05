import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact-section" className="w-full bg-gray-50 dark:bg-deep-black py-32 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-[1800px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 min-h-[50vh] content-end">
        
        <div className="md:col-span-2">
           <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            05 — Contact Info
          </span>
        </div>

        <div className="md:col-span-10 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-4xl md:text-7xl font-serif italic text-black dark:text-white mb-12 transition-colors duration-500">
              Start a dialogue.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
              {/* Left Column: Email */}
              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-600 mb-4">Email</label>
                <a href="mailto:taavi.korsar@3dservice.expert" className="text-xl md:text-2xl text-black dark:text-white font-light flex items-center gap-2 hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
                  taavi.korsar@3dservice.expert
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              </div>

              {/* Right Column: Corporate Identity (Brand Of) */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-600 mb-4">
                  3Dservice.expert is a brand of
                </label>
                <div className="text-xl md:text-3xl text-black dark:text-white font-semibold tracking-wide transition-colors mb-2">
                  SPACEGEN ENGINEERING LTD.
                </div>
                <address className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-light not-italic leading-relaxed">
                  Wenlock Road 20-22, N1 7GU London<br />
                  Great Britain
                </address>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 transition-colors duration-500">
             <div className="flex flex-col gap-2">
                <span className="text-[10px] text-gray-500 dark:text-gray-700 uppercase tracking-widest">
                 © {new Date().getFullYear()} SPACEGEN Engineering LTD. All Rights Reserved.
               </span>
             </div>
             
             <span className="text-[10px] text-gray-400 dark:text-gray-800 uppercase tracking-widest">
               Less is more.
             </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
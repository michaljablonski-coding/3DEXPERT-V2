import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ShieldCheck, Box, Zap, Hexagon } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="w-full max-w-6xl bg-white dark:bg-deep-black border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[800px]"
      >
        
        {/* Left Column: Social Proof & Contact Person (1/3) */}
        <div className="w-full md:w-1/3 bg-gray-50 dark:bg-[#0a0a0a] border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden transition-colors duration-500">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/[0.02] dark:bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          {/* Contact Person */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-black/10 dark:border-white/20">
                <img 
                  src="https://i.postimg.cc/hvGnYz0M/Taavi.jpg" 
                  alt="Taavi Korsar" 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <div>
                <h4 className="text-black dark:text-white font-medium text-lg leading-none tracking-wide">Taavi Korsar</h4>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 block">Lead Engineer</span>
              </div>
            </div>
            
            <blockquote className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed mb-8 border-l border-black/10 dark:border-white/10 pl-4">
              "Precision is our language. Your vision needs structure, not just surface."
            </blockquote>
          </div>

          {/* Social Proof / Clients */}
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] text-gray-500 dark:text-gray-600 uppercase tracking-widest block border-b border-black/5 dark:border-white/10 pb-2">
              Partners
            </span>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 opacity-60">
                <Box size={16} />
                <span className="text-xs font-mono uppercase">Auto</span>
              </div>
               <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 opacity-60">
                <Zap size={16} />
                <span className="text-xs font-mono uppercase">Energy</span>
              </div>
               <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 opacity-60">
                <Hexagon size={16} />
                <span className="text-xs font-mono uppercase">Aero</span>
              </div>
               <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 opacity-60">
                <ShieldCheck size={16} />
                <span className="text-xs font-mono uppercase">Defense</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form (2/3) */}
        <div className="w-full md:w-2/3 bg-white dark:bg-[#050505] p-8 md:p-12 relative overflow-y-auto no-scrollbar transition-colors duration-500">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-black dark:hover:text-white transition-colors z-20"
          >
            <X size={24} strokeWidth={1} />
          </button>

          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2 tracking-tight">Initiate</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Technical Specifications
              </p>
            </div>

            <form className="space-y-8">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group pt-4">
                  <input 
                    type="text" 
                    id="name"
                    placeholder="e.g. John Doe"
                    className="block py-3 px-0 w-full text-sm text-black dark:text-white bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-700"
                  />
                  <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-black dark:peer-focus:text-white">
                    Full Name
                  </label>
                </div>
                <div className="relative group pt-4">
                  <input 
                    type="email" 
                    id="email"
                    placeholder="e.g. john@company.com"
                    className="block py-3 px-0 w-full text-sm text-black dark:text-white bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-700"
                  />
                  <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-black dark:peer-focus:text-white">
                    Email
                  </label>
                </div>
              </div>

              {/* Row 2: Type & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="relative group pt-4">
                  <select 
                    id="service"
                    className="block py-3 px-0 w-full text-sm text-gray-600 dark:text-gray-400 bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white focus:text-black dark:focus:text-white transition-colors"
                  >
                    <option value="" disabled selected>Select Service</option>
                    <option value="prototyping">Rapid Prototyping</option>
                    <option value="modeling">3D Modeling</option>
                    <option value="engineering">Engineering</option>
                    <option value="rendering">Visualization</option>
                  </select>
                  <label htmlFor="service" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-black dark:peer-focus:text-white">
                    Service
                  </label>
                </div>
                <div className="relative group pt-4">
                   <select 
                    id="budget"
                    className="block py-3 px-0 w-full text-sm text-gray-600 dark:text-gray-400 bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white focus:text-black dark:focus:text-white transition-colors"
                  >
                    <option value="" disabled selected>Estimated Budget</option>
                    <option value="small">€2k — €5k</option>
                    <option value="medium">€5k — €15k</option>
                    <option value="large">€15k — €50k</option>
                    <option value="enterprise">€50k+</option>
                  </select>
                  <label htmlFor="budget" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-black dark:peer-focus:text-white">
                    Budget
                  </label>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="relative group pt-4">
                <textarea 
                  rows={4}
                  placeholder="Describe requirements and constraints..."
                  id="message"
                  className="block py-3 px-0 w-full text-sm text-black dark:text-white bg-transparent border-0 border-b border-gray-300 dark:border-gray-800 appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors resize-none placeholder:text-gray-400 dark:placeholder:text-gray-700"
                />
                <label htmlFor="message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-black dark:peer-focus:text-white">
                  Technical Brief
                </label>
              </div>

              {/* NDA Checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <div className="relative flex items-center">
                  <input type="checkbox" id="nda" className="peer h-4 w-4 cursor-pointer appearance-none border border-gray-400 dark:border-gray-600 bg-transparent checked:border-black dark:checked:border-white checked:bg-black dark:checked:bg-white transition-all" />
                  <Check size={12} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-black opacity-0 peer-checked:opacity-100" />
                </div>
                <label htmlFor="nda" className="text-xs text-gray-500 cursor-pointer select-none">
                  Require Non-Disclosure Agreement (NDA).
                </label>
              </div>

              <div className="pt-6">
                <button 
                  type="button"
                  onClick={onClose}
                  className="w-full md:w-auto px-12 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-4"
                >
                  Submit Brief
                  <div className="w-px h-3 bg-white/20 dark:bg-black/20" />
                  <span className="text-[10px] uppercase tracking-widest">Secure</span>
                </button>
              </div>
            </form>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
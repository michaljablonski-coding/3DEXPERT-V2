import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-100 dark:bg-deep-black flex flex-col items-center justify-center transition-colors duration-500">
      
      {/* 1. Background System */}
      <div className="absolute inset-0 z-0">
        
        {/* Layer A: Liquid Metal Video (Base Movement) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-50 grayscale scale-110 transition-opacity duration-500"
        >
          <source src="https://cdn.pixabay.com/video/2020/03/18/33866-398379017_large.mp4" type="video/mp4" />
        </video>

        {/* Layer B: Requested Image (Tech/Mechanical) - Blended */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-40 mix-blend-multiply dark:mix-blend-plus-lighter transition-all duration-500"
          style={{ 
            backgroundImage: "url('https://www.ismaelmensa.com/wp-content/uploads/2021/01/3D-Product-Rendering-Services.jpg')",
            filter: 'grayscale(100%) contrast(1.2)'
          }}
        />

        {/* Layer C: Darkening & Gradients for readability */}
        <div className="absolute inset-0 bg-white/70 dark:bg-deep-black/60 transition-colors duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f5f5f5_95%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#050505_95%)] transition-all duration-500" />
        
        {/* Layer D: Fine Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1800px]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-black/50 dark:via-white/50 to-transparent" />
          <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-gray-500 dark:text-gray-400 uppercase">
            Engineering Future
          </span>
        </motion.div>

        <h1 className="flex flex-col items-center justify-center w-full">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[17vw] md:text-[9vw] leading-[0.85] md:leading-[0.9] font-light text-black dark:text-white tracking-tighter mix-blend-normal dark:mix-blend-difference transition-colors duration-500"
            >
              SHAPING
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[17vw] md:text-[9vw] leading-[0.85] md:leading-[0.9] font-light text-black/80 dark:text-white/90 tracking-tighter mix-blend-normal dark:mix-blend-difference transition-colors duration-500"
            >
              REALITY
            </motion.span>
          </div>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 md:mt-16 max-w-lg mx-auto"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8 transition-colors duration-500">
            Precision 3D modeling for high-end industries. 
            Mathematical concepts turned into matter.
          </p>

          <button 
            onClick={onContactClick}
            className="group relative px-10 py-4 bg-black dark:bg-white text-white dark:text-black overflow-hidden transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-4">
              Start Project
              <ArrowDown size={14} className="-rotate-90" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
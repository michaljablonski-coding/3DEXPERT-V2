import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Philosophy: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="philosophy" className="min-h-screen w-full bg-gray-50 dark:bg-deep-black py-32 px-6 md:px-12 flex items-center transition-colors duration-500">
      <div className="max-w-[1800px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Section Label */}
        <div className="md:col-span-2">
          <span className="block sticky top-32 text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            01 — Philosophy
          </span>
        </div>

        {/* Core Content */}
        <div className="md:col-span-9 md:col-start-4" ref={ref}>
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight md:leading-snug transition-colors duration-500">
              We do not build models.<br />
              <span className="text-gray-400 dark:text-gray-500">We engineer reality.</span>
            </h2>
            
            <div className="mt-24 md:grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg transition-colors duration-500">
                  Clarity is luxury. We strip away the non-essential to reveal the structural truth of your vision.
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg transition-colors duration-500">
                  Utilizing <span className="text-black dark:text-white font-medium">Time Compression Technology</span>, we bridge abstract thought and tangible matter.
                </p>
              </div>
              <div className="hidden md:flex items-end justify-end">
                 <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-900 transition-colors duration-500" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
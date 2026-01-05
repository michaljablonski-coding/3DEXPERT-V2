import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Briefing',
    description: 'Deconstructing vision. Identifying constraints and aesthetic core.',
  },
  {
    number: '02',
    title: 'Optimization',
    description: 'Simplifying complexity. Optimizing mesh topology for data efficiency.',
  },
  {
    number: '03',
    title: 'Simulation',
    description: 'Digital reality check. Lighting and physics tested in a vacuum.',
  },
  {
    number: '04',
    title: 'Synthesis',
    description: 'Master asset delivery. Ready for manufacturing or integration.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="w-full bg-gray-50 dark:bg-deep-black py-32 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-[1800px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div className="md:col-span-2">
          <span className="block sticky top-32 text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            02 — Process
          </span>
        </div>

        <div className="md:col-span-8 md:col-start-4">
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border-l border-black/10 dark:border-white/10 pl-8 md:pl-16 relative transition-colors duration-500"
              >
                <div className="absolute left-0 top-0 w-[1px] h-0 bg-black dark:bg-white transition-all duration-1000 group-hover:h-full" />
                
                <span className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-4 block">
                  /{step.number}
                </span>
                <h3 className="text-2xl md:text-4xl text-black dark:text-white font-light mb-6 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-lg transition-colors duration-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
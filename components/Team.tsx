import React from 'react';
import { TeamMember } from '../types';
import { motion } from 'framer-motion';

const experts: TeamMember[] = [
  { id: '1', name: 'Taavi Korsar', role: 'Civil Eng.', specialization: 'CAD Lead', image: 'https://i.postimg.cc/hvGnYz0M/Taavi.jpg' },
  { id: '2', name: 'Adam Pawelec', role: 'IT Eng.', specialization: 'Ind. Design', image: 'https://i.postimg.cc/tJgbcZzV/Adam.jpg' },
  { id: '3', name: 'Marcin Krzysztozek', role: 'IT Eng.', specialization: 'Architecture', image: 'https://i.postimg.cc/hvGnYz0b/Marcin.jpg' },
  { id: '4', name: 'Sebastian Habet', role: 'IT Eng.', specialization: '3D Modeling', image: 'https://i.postimg.cc/Bbv3zLC5/Seb.jpg' },
  { id: '5', name: 'Piotr Halacz', role: 'Mech. Eng.', specialization: 'Structures', image: 'https://i.postimg.cc/D0zhNJcr/Piotr.jpg' },
  { id: '6', name: 'Jacek Górecki', role: 'Mech. Eng.', specialization: '3D Printing', image: 'https://i.postimg.cc/yxNKGgTF/Jacek.jpg' },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="w-full bg-gray-50 dark:bg-deep-black py-20 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-[1800px] w-full mx-auto flex flex-col gap-8">
        
        <div>
          <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-8">
            03 — The Experts
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {experts.map((expert, index) => (
            <motion.div 
              key={expert.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden mb-4 bg-gray-200 dark:bg-gray-900 relative">
                 <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                 <img 
                  src={expert.image} 
                  alt={expert.name}
                  className="w-full h-full object-cover grayscale brightness-90 dark:brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                 />
              </div>

              <h3 className="text-sm text-black dark:text-white font-medium tracking-wide transition-colors duration-500">
                {expert.name}
              </h3>
              
              <div className="flex flex-col mt-1">
                <span className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-widest">
                  {expert.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
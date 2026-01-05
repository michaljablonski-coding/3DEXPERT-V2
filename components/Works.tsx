import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'All' | 'Product' | 'Industrial' | 'Architecture';

interface Project {
  id: number;
  category: Exclude<Category, 'All'>;
  src: string;
  title: string;
}

const projects: Project[] = [
  { id: 1, category: 'Product', src: 'https://www.ismaelmensa.com/wp-content/uploads/2020/07/Still-life-3d-model.jpg', title: 'Still Life Composition' },
  { id: 2, category: 'Industrial', src: 'https://www.ismaelmensa.com/wp-content/uploads/2020/07/Modelado_3D.jpg', title: 'Mechanical Assembly' },
  { id: 3, category: 'Architecture', src: 'https://www.ismaelmensa.com/wp-content/uploads/2020/11/3D-Rendering.jpg', title: 'Interior Concept' },
  { id: 4, category: 'Architecture', src: 'https://www.ismaelmensa.com/wp-content/uploads/2020/07/Render.jpg', title: 'Facade Studies' },
  { id: 5, category: 'Industrial', src: 'https://www.ismaelmensa.com/wp-content/uploads/2020/07/3D_Geometry.jpg', title: 'Geometric Analysis' },
  { id: 6, category: 'Product', src: 'https://www.ismaelmensa.com/wp-content/uploads/2021/03/Render-Product-3D.jpg', title: 'Cosmetic Packaging' },
  { id: 7, category: 'Product', src: 'https://www.ismaelmensa.com/wp-content/uploads/2021/01/3d-product-design-1.jpg', title: 'Industrial Bottle' },
  { id: 8, category: 'Product', src: 'https://www.ismaelmensa.com/wp-content/uploads/2021/01/Product-Rendering.jpg', title: 'Tech Gadgetry' },
  { id: 9, category: 'Product', src: 'https://www.ismaelmensa.com/wp-content/uploads/2021/01/3D-Product-Rendering-Services.jpg', title: 'Watch Mechanism' },
];

const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="works" className="w-full bg-deep-black py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1800px] w-full mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 block mb-4">
              03 — Selected Works
            </span>
            <h2 className="text-3xl md:text-5xl text-white font-light">
              Visualizing the <span className="font-serif italic text-gray-400">Intangible</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8">
            {(['All', 'Product', 'Industrial', 'Architecture'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  activeCategory === cat ? 'text-white border-b border-white' : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-square overflow-hidden bg-gray-900 cursor-none"
              >
                <img 
                  src={project.src} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">{project.category}</span>
                  <h3 className="text-xl text-white font-serif italic">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Works;
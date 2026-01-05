import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onContactClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = (item: string) => {
    toggleMenu();
    if (item === 'Contact') {
      setTimeout(() => {
        onContactClick();
      }, 500); // Wait for menu to close
    }
  };

  const menuItems = ['Philosophy', 'Process', 'Team', 'Contact'];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out px-6 md:px-12 py-6 flex justify-between items-center`}
      >
        <div className="w-20 md:w-28 relative">
          {/* Light Mode Logo (Dark) */}
          <img 
            src="https://i.postimg.cc/ryYzkMtD/Logo-A.png" 
            alt="3D Service Expert" 
            className="w-full h-auto block dark:hidden opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          {/* Dark Mode Logo (White) */}
          <img 
            src="https://i.postimg.cc/c4HYRFf6/Logo.png" 
            alt="3D Service Expert" 
            className="w-full h-auto hidden dark:block opacity-90 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>

        <button 
          onClick={toggleMenu}
          className="group flex items-center gap-4 focus:outline-none"
        >
          <span className="hidden md:block text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black dark:text-white">
            Menu
          </span>
          <div className="relative w-6 h-6 flex items-center justify-center text-black dark:text-white transition-colors duration-500">
             <Menu size={20} strokeWidth={1} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white dark:bg-[#050505] z-40 flex flex-col justify-center items-center transition-colors duration-500"
          >
             <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 md:right-12 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
            >
              <X size={24} strokeWidth={1} />
            </button>

            <ul className="flex flex-col gap-6 md:gap-8 text-center">
              {menuItems.map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                >
                  {item === 'Contact' ? (
                     <button
                      onClick={() => handleMenuClick(item)}
                      className="text-4xl md:text-6xl font-serif italic text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-500"
                     >
                       {item}
                     </button>
                  ) : (
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      onClick={toggleMenu}
                      className="text-4xl md:text-6xl font-serif italic text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-500"
                    >
                      {item}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  // Default to dark mode
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  useEffect(() => {
    // Apply theme class to html element
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
      html.style.backgroundColor = '#050505';
    } else {
      html.classList.remove('dark');
      html.style.backgroundColor = '#f5f5f5';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-gray-100 text-black dark:bg-deep-black dark:text-white transition-colors duration-500 min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navigation onContactClick={openContact} />
      <main>
        <Hero onContactClick={openContact} />
        <Philosophy />
        <Process />
        <Team />
        <Contact />
      </main>

      <AnimatePresence>
        {isContactOpen && <ContactModal onClose={closeContact} />}
      </AnimatePresence>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-white text-black dark:bg-white/10 dark:text-white border border-gray-200 dark:border-white/10 shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

export default App;
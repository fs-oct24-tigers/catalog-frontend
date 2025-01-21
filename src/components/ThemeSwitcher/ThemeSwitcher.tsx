import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Star } from 'lucide-react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeTransition = ({ theme }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <AnimatePresence initial={false}>
      {isAnimating && (
        <motion.div
          key={theme}
          className="fixed inset-0 z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: theme === 'dark' ? 'black' : 'white',
              clipPath: 'circle(0% at 100% 100%)',
            }}
            animate={{
              clipPath: 'circle(150% at 100% 100%)',
            }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <ThemeTransition theme={theme} />
    </ThemeContext.Provider>
  );
};

const Stars = () => (
  <>
    {[
      { top: '-top-2', right: '-right-2', size: 'w-3 h-3', delay: 0.2 },
      { top: '-top-1', right: 'right-4', size: 'w-2 h-2', delay: 0.3 },
      { top: 'top-4', right: '-right-1', size: 'w-2 h-2', delay: 0.4 },
    ].map((star, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: star.delay, duration: 0.5 }}
        className={`absolute ${star.top} ${star.right}`}
      >
        <Star className={`${star.size} text-yellow-300`} />
      </motion.div>
    ))}
  </>
);

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          rotate: theme === 'dark' ? 360 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ?
          <Sun className="w-6 h-6 text-yellow-300" />
        : <div className="relative">
            <Moon className="w-6 h-6 text-yellow-300" />
            <Stars />
          </div>
        }
      </motion.div>
    </motion.button>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

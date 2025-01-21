import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white to-white"
        initial={false}
        animate={{
          clipPath:
            theme === 'dark' ?
              'circle(0% at 100% 100%)'
            : 'circle(150% at 0% 0%)',
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-bodyBg to-bodyBg"
        initial={false}
        animate={{
          clipPath:
            theme === 'dark' ?
              'circle(150% at 100% 100%)'
            : 'circle(0% at 0% 0%)',
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      <div className="fixed bottom-4 right-4 z-50 pointer-events-auto">
        <motion.button
          className="w-12 h-12 bg-gray-800 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
          onClick={toggleTheme}
          animate={{
            backgroundColor: theme === 'dark' ? '#1F2937' : '#1F2937',
            rotate: theme === 'dark' ? 360 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              rotate: theme === 'dark' ? 360 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {theme === 'dark' ?
              <Sun className="w-6 h-6 text-yellow-300" />
            : <Moon className="w-6 h-6 text-yellow-300" />}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

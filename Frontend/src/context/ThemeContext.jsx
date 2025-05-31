// src/context/ThemeContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('lara-dark-indigo'); // Default: dark theme

  // Optional: Create a map to identify theme types
  const themeMap = {
    'lara-dark-indigo': 'dark',
    'lara-light-indigo': 'light'
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'lara-dark-indigo' ? 'lara-light-indigo' : 'lara-dark-indigo'));
  };

  useEffect(() => {
    let link = document.getElementById('theme-link');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = 'theme-link';
      document.head.appendChild(link);
    }
    link.href = `https://unpkg.com/primereact/resources/themes/${theme}/theme.css`;
  }, [theme]);

  const currentThemeType = themeMap[theme] || 'light'; 

  return (
    <ThemeContext.Provider value={{ theme, currentThemeType, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

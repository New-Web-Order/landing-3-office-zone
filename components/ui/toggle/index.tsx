import React, { useState, useEffect } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    // Toggle dark mode by toggling a class on the HTML root element
    root.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]); // This effect runs whenever `isDarkMode` changes.

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <button
      className='flex items-center justify-center w-8 h-8 rounded-md bg-bg-bg-hover focus:outline-none'
      onClick={toggleTheme}
    >
      {isDarkMode ? <RiMoonLine size={20} className='text-gray-400' /> : <RiSunLine size={20} className='text-gray-500' />}
    </button>
  );
};

export default ThemeToggle;
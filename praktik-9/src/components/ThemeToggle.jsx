// File: src/components/ThemeToggle.jsx (PERBAIKAN ERROR i9)
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${theme}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* PERBAIKAN: Menggunakan sintaks Unicode yang benar \u{XXXX}
        atau menggunakan emoji langsung (lebih disarankan)
      */}
      {isDark 
        ? '☀️' // Simbol Matahari untuk beralih ke Light Mode
        : '🌙' // Simbol Bulan Sabit untuk beralih ke Dark Mode
      }
      
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeToggle;
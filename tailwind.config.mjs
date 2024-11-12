import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    forms({
      strategy: 'class',
    }),
    function ({ addUtilities }) {
      const newUtilities = {
        '.flex-1-1-48': {
          flex: '1 1 48%',
        },
      };

      // Add utilities for different responsive breakpoints if needed
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};

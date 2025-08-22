/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000814',
        foreground: '#f4f4f5',
        primary: '#6366f1',
        secondary: '#3b82f6',
        accent: '#f59e42',
      },
    },
  },
  plugins: [],
};

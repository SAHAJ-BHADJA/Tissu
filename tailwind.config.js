/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8EC3AF',
          DEFAULT: '#74B49B',
          dark: '#5A9A81',
        },
        secondary: {
          light: '#B5CCD8',
          DEFAULT: '#9BBFCF',
          dark: '#7FA9BD',
        },
        accent: {
          light: '#F9D5A7',
          DEFAULT: '#F8C471',
          dark: '#F5B041',
        },
        success: {
          light: '#A3E4D7',
          DEFAULT: '#76D7C4',
          dark: '#48C9B0',
        },
        warning: {
          light: '#F8C6B8',
          DEFAULT: '#F5B095',
          dark: '#F39C79',
        },
        error: {
          light: '#F5B7B1',
          DEFAULT: '#F1948A',
          dark: '#EC7063',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
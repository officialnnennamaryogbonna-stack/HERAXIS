/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        calm: {
          50: '#fff8f8',
          100: '#ffeef1',
          200: '#ffdce2',
          600: '#b25274',
          700: '#7f3650'
        }
      }
    }
  },
  plugins: []
};

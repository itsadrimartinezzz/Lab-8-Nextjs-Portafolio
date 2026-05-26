/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50:  '#fff0f5',
          100: '#fde8ef',
          300: '#EF88AD',
          600: '#A53860',
          800: '#670D2F',
          950: '#3A0519',
        }
      }
    },
  },
  plugins: [],
};

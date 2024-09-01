/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-light': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'border-light': 'border-light 3s linear infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),],
    daisyui: {
      themes: ["light"],  // Use only the light theme
      darkTheme: false,   // Disable dark mode entirely
    },
}
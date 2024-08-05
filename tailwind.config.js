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
        'yblack': '#000000',
        'yrblack': '#0c1821',
        'yblue': '#1b2a41',
        'ychar': '#324a5f',
        'ylaven': '#ccc9dc'
      }
    }
  },
  plugins: [],
}
